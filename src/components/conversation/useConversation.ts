"use client";
/** React state + wiring around the conversation turn logic. */
import { useCallback, useEffect, useRef, useState } from "react";
import { suggestAnswers } from "@/lib/ai/tasks/exercises";
import { listen, isListening, stop, sttSupported } from "@/lib/speech/stt";
import { stopSpeaking, whenIdle } from "@/lib/speech/tts";
import { STOP_HINT } from "@/lib/speech/stopPhrase";
import { store } from "@/lib/store/store";
import type { DrillResult } from "@/components/drill/useDrill";
import { usePanel } from "@/components/feedback/PanelContext";
import { coachSays } from "./coachReply";
import { lastCoachLine, runTurn } from "./turn";
import type { ChatMsg, TurnApi } from "./types";

export interface ConversationOptions {
  system: string;
  opener: string;
  cefr: string;
  maxTurns?: number;
  onFinished?: (avg: number) => void;
}

export function useConversation(o: ConversationOptions) {
  const { push, focus } = usePanel();
  const [msgs, setMsgs] = useState<ChatMsg[]>([]);
  const [busy, setBusy] = useState(false);
  const [turns, setTurns] = useState(0);
  const [live, setLive] = useState("");
  const [hint, setHint] = useState(`Parle autant que tu veux, puis dis « ${STOP_HINT} » pour envoyer.`);
  const alive = useRef(true), busyRef = useRef(false), seq = useRef(1);
  const waiters = useRef(new Map<number, (r: DrillResult) => void>());
  const scores = useRef<Promise<number | null>[]>([]);
  const optsRef = useRef(o), listenRef = useRef<() => void>(() => {});
  useEffect(() => { optsRef.current = o; }, [o]);

  // Stable object handed to the (non-React) turn logic.
  const [api] = useState<TurnApi>(() => ({
    system: o.system, cefr: o.cefr, history: [], alive: () => alive.current,
    add: (m) => { const id = seq.current++; setMsgs((x) => [...x, { ...m, id }]); return id; },
    patch: (id, p) => setMsgs((x) => x.map((m) => (m.id === id ? { ...m, ...p } : m))),
    waitFix: (id) => new Promise((r) => waiters.current.set(id, r)),
    pushCard: (said, fb) => push(said, fb),
  }));

  const finish = useCallback(async () => {
    setHint("Calcul de ton score final…");
    const all = (await Promise.all(scores.current)).filter((s): s is number => s !== null);
    const avg = all.length ? Math.round(all.reduce((a, b) => a + b, 0) / all.length) : 0;
    if (alive.current) optsRef.current.onFinished?.(avg);
  }, []);

  const learnerTurn = useCallback(async (text: string) => {
    if (busyRef.current || !text.trim()) return;
    busyRef.current = true; setBusy(true);
    scores.current.push((await runTurn(api, text)).score);
    busyRef.current = false; setBusy(false);
    const n = scores.current.length;
    setTurns(n);
    if (optsRef.current.maxTurns && n >= optsRef.current.maxTurns) return finish();
    if (store.settings().handsfree) { await whenIdle(); if (alive.current && !busyRef.current) listenRef.current(); }
  }, [api, finish]);

  const listenTurn = useCallback(async () => {
    if (busyRef.current || !alive.current) return;
    if (isListening()) return stop();
    if (!sttSupported()) return setHint("⚠️ Reconnaissance vocale indisponible : utilise Edge ou Chrome.");
    try {
      const r = await listen(setLive, { long: true });
      setLive("");
      if (r.text) learnerTurn(r.text);
    } catch (e) {
      setHint((e as Error).message === "mic-denied" ? "Autorise le micro (icône à gauche de l'adresse), puis réessaie." : "Micro indisponible.");
    }
  }, [learnerTurn]);
  useEffect(() => { listenRef.current = listenTurn; }, [listenTurn]);

  const help = useCallback(async () => {
    const id = api.add({ role: "coach", kind: "typing", text: "" });
    try { api.patch(id, { kind: "ideas", ideas: await suggestAnswers(lastCoachLine(api) || optsRef.current.opener, api.cefr) }); }
    catch { api.patch(id, { kind: "text", text: "Aide indisponible." }); }
  }, [api]);

  const fixDone = useCallback((id: number, r: DrillResult) => { waiters.current.get(id)?.(r); waiters.current.delete(id); }, []);

  useEffect(() => {
    alive.current = true;
    const t = setTimeout(async () => {
      await coachSays(api, optsRef.current.opener);
      if (alive.current && store.settings().handsfree) listenRef.current();
    }, 50); // lets StrictMode's double mount cancel the first run
    return () => { clearTimeout(t); alive.current = false; stop(); stopSpeaking(); };
  }, [api]);

  const done = !!o.maxTurns && turns >= o.maxTurns;
  return { msgs, busy, turns, live, hint, done, listenTurn, learnerTurn, help, fixDone, focusCard: focus };
}
