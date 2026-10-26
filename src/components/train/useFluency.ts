"use client";
/**
 * 4/3/2 fluency (Paul Nation): tell the same thing three times in 4, 3 and 2 minutes.
 * Each round is recorded and its speaking rate (words per minute) is measured.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { countWords } from "@/lib/ai/tasks/speaking";
import { micMessage } from "@/lib/speech/micErrors";
import { listen, stop } from "@/lib/speech/stt";
import { store } from "@/lib/store/store";
import { today } from "@/lib/progress/stats";

export const ROUNDS = [240, 180, 120];

export function useFluency(topic: string) {
  const [round, setRound] = useState(0);
  const [left, setLeft] = useState<number | null>(null);
  const [live, setLive] = useState("");
  const [wpm, setWpm] = useState<number[]>([]);
  const [error, setError] = useState("");
  const timer = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => () => { clearInterval(timer.current); stop(); }, []);

  const start = useCallback(async () => {
    if (round >= ROUNDS.length || left !== null) return;
    const total = ROUNDS[round];
    const t0 = Date.now();
    setLeft(total);
    setError("");
    timer.current = setInterval(() => {
      const rest = total - Math.floor((Date.now() - t0) / 1000);
      setLeft(Math.max(0, rest));
      if (rest <= 0) stop();
    }, 500);
    try {
      const heard = await listen(setLive, { long: true });
      const minutes = Math.max(0.25, (Date.now() - t0) / 60000);
      const rate = Math.round(countWords(heard.text) / minutes);
      const all = [...wpm, rate];
      setWpm(all);
      setRound(round + 1);
      if (all.length === ROUNDS.length) {
        store.update((d) => void d.fluency.unshift({ date: today(), topic, wpm: all }));
      }
    } catch (e) {
      setError(micMessage(e));
    } finally {
      clearInterval(timer.current);
      setLeft(null);
      setLive("");
    }
  }, [round, left, wpm, topic]);

  return { round, left, live, wpm, error, start, finish: () => stop(), done: round >= ROUNDS.length };
}
