"use client";
/**
 * Long speaking task, in rounds:
 * talk (until "I'm done recording", min words) → AI review → repeat every corrected
 * sentence out loud → talk again, longer. Passed only from round 2, with ≥ CONFIG.pass.speak.
 */
import { useCallback, useState } from "react";
import { CONFIG } from "@/lib/config";
import { countWords, reviewSpeech, type SpeechReview } from "@/lib/ai/tasks/speaking";
import { recordItem } from "@/lib/progress/rules";
import { trackScore, trackSpeech } from "@/lib/progress/stats";
import { saveErrors } from "@/lib/errors/bank";
import { isListening, listen, stop, sttSupported } from "@/lib/speech/stt";
import { speak } from "@/lib/speech/tts";
import type { SpeakingTopic } from "@/data/types";

export type SpeakPhase = "ready" | "short" | "reviewing" | "review" | "fix" | "passed";

export interface SpeakState {
  round: number;
  phase: SpeakPhase;
  transcript: string;
  live: string;
  review: SpeechReview | null;
  fixIndex: number;
  error: string;
}

const START: SpeakState = { round: 1, phase: "ready", transcript: "", live: "", review: null, fixIndex: 0, error: "" };

/** Round 2+ asks for 25 % more words. */
export const minWordsFor = (t: SpeakingTopic, round: number) => Math.round(t.minWords * (round > 1 ? 1.25 : 1));

export function useSpeakTask(levelId: string, cefr: string, index: number, topic: SpeakingTopic) {
  const [s, setS] = useState<SpeakState>(START);
  const pass = CONFIG.pass.speak;

  const analyse = useCallback(async (said: string, round: number) => {
    setS((x) => ({ ...x, phase: "reviewing" }));
    try {
      const r = await reviewSpeech({ topic: topic.prompt, said, cefr });
      trackScore("grammar", r.score);
      saveErrors(r.fixes);
      const passed = round > 1 && r.score >= pass;
      if (passed) recordItem(levelId, "speak", index, r.score);
      setS((x) => ({ ...x, review: r, phase: passed ? "passed" : "review", fixIndex: 0 }));
      speak(passed ? "Excellent! You really improved." : r.fixes.length ? `You made ${r.fixes.length} mistakes. Let's fix them together.` : "Good. Now say more, with more details.");
    } catch {
      setS((x) => ({ ...x, phase: "short", error: "L'IA ne répond pas. Vérifie Ollama, puis réessaie." }));
    }
  }, [topic.prompt, cefr, pass, levelId, index]);

  const talk = useCallback(async () => {
    if (isListening()) return stop();
    if (!sttSupported()) return setS((x) => ({ ...x, error: "Utilise Edge ou Chrome pour la reconnaissance vocale." }));
    let text = "";
    try {
      text = (await listen((live) => setS((x) => ({ ...x, live })), { long: true })).text;
    } catch (e) {
      return setS((x) => ({ ...x, live: "", error: (e as Error).message === "mic-denied" ? "Autorise le micro." : "Micro indisponible." }));
    }
    if (text) trackSpeech(text);
    const all = `${s.transcript} ${text}`.trim();
    const enough = countWords(all) >= minWordsFor(topic, s.round);
    setS((x) => ({ ...x, live: "", transcript: all, error: "", phase: enough ? "reviewing" : "short" }));
    if (enough) analyse(all, s.round);
    else speak("Keep going! Say more.");
  }, [s.transcript, s.round, topic, analyse]);

  /** A corrected sentence was repeated correctly: next one, or talk again. */
  const fixDone = useCallback(() => {
    setS((x) => {
      const n = x.fixIndex + 1;
      if (x.review && n < x.review.fixes.length) return { ...x, fixIndex: n };
      return { ...START, round: x.round + 1 };
    });
  }, []);

  const startFixes = useCallback(() => setS((x) => (x.review?.fixes.length ? { ...x, phase: "fix", fixIndex: 0 } : { ...START, round: x.round + 1 })), []);
  const restart = useCallback(() => setS((x) => ({ ...x, transcript: "", phase: "ready" })), []);

  return { state: s, talk, fixDone, startFixes, restart, minWords: minWordsFor(topic, s.round) };
}
