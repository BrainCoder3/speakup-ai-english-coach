"use client";
/** Logic of one "listen & repeat" exercise: listen, score, repeat until passed. */
import { useCallback, useEffect, useRef, useState } from "react";
import { listen, isListening, stop, sttSupported } from "@/lib/speech/stt";
import { speak } from "@/lib/speech/tts";
import { pronunciationScore, type Token } from "@/lib/scoring/pronunciation";
import { trackScore } from "@/lib/progress/stats";

export interface DrillResult {
  score: number;
  passed: boolean;
  tries: number;
}

export interface DrillState {
  tries: number;
  score: number | null;
  tokens: Token[] | null;
  heard: string;
  live: string;
  error: string;
  finished: boolean;
}

export function useDrill(target: string, pass: number, maxTries: number, autoplay: boolean, onDone?: (r: DrillResult) => void) {
  const [s, setS] = useState<DrillState>({ tries: 0, score: null, tokens: null, heard: "", live: "", error: "", finished: false });
  const best = useRef(0);
  const doneRef = useRef(onDone);
  useEffect(() => {
    doneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    if (autoplay) speak(target);
  }, [target, autoplay]);

  const attempt = useCallback(async () => {
    if (s.finished) return;
    if (isListening()) return stop();
    if (!sttSupported()) return setS((x) => ({ ...x, error: "Reconnaissance vocale indisponible : utilise Edge ou Chrome." }));
    let heard;
    try {
      heard = await listen((live) => setS((x) => ({ ...x, live })));
    } catch (e) {
      const msg = (e as Error).message === "mic-denied" ? "Autorise le micro (icône à gauche de l'adresse)." : "Micro indisponible.";
      return setS((x) => ({ ...x, error: msg, live: "" }));
    }
    if (!heard.text) return setS((x) => ({ ...x, live: "", error: "Je n'ai rien entendu. Parle fort et clair, puis fais une pause." }));
    const r = pronunciationScore(target, heard.text, heard.confidence);
    best.current = Math.max(best.current, r.score);
    trackScore("pron", r.score);
    const tries = s.tries + 1;
    const passed = r.score >= pass;
    const finished = passed || tries >= maxTries;
    setS({ tries, score: r.score, tokens: r.tokens, heard: heard.text, live: "", error: "", finished });
    if (finished) doneRef.current?.({ score: passed ? r.score : best.current, passed, tries });
  }, [s.finished, s.tries, target, pass, maxTries]);

  return { state: s, attempt };
}

export function drillMessage(score: number, pass: number): string {
  if (score >= 95) return "Parfait, accent très clair ! 🎉";
  if (score >= pass) return "Validé ! Bonne prononciation 👍";
  if (score >= pass - 20) return "Presque ! Écoute encore les mots en rouge et réessaie.";
  return "Pas encore. Écoute lentement, puis répète phrase par phrase.";
}
