"use client";
/**
 * Long speaking task, in rounds:
 * talk (min words + required expressions, end with "I'm done recording") → AI review
 * → repeat every corrected sentence → talk again, longer. From round 2 a score ≥ pass
 * validates the topic, but only once every remaining mistake has been repeated correctly.
 */
import { useCallback, useState } from "react";
import { CONFIG } from "@/lib/config";
import { countWords, reviewSpeech, type SpeechReview } from "@/lib/ai/tasks/speaking";
import { recordItem } from "@/lib/progress/rules";
import { trackScore, trackSpeech } from "@/lib/progress/stats";
import { saveErrors } from "@/lib/errors/bank";
import { usedExpressions } from "@/lib/scoring/expressions";
import { isListening, listen, stop, sttSupported } from "@/lib/speech/stt";
import { speak } from "@/lib/speech/tts";
import type { SpeakingTopic } from "@/data/types";
import { mistakesLine, say } from "@/lib/course/phrases";

export type SpeakPhase = "ready" | "short" | "reviewing" | "review" | "fix" | "passed";

export interface SpeakState {
  round: number;
  phase: SpeakPhase;
  transcript: string;
  live: string;
  review: SpeechReview | null;
  /** Good enough to pass: the fixes are the last thing to do. */
  passAfterFixes: boolean;
  fixIndex: number;
  /** Analysis progress, e.g. [3, 9]. */
  progress: [number, number];
  error: string;
}

const START: SpeakState = { round: 1, phase: "ready", transcript: "", live: "", review: null, passAfterFixes: false, fixIndex: 0, progress: [0, 1], error: "" };

/** Round 2+ asks for 25 % more words. */
export const minWordsFor = (t: SpeakingTopic, round: number) => Math.round(t.minWords * (round > 1 ? 1.25 : 1));
export const expressionsUsed = (t: SpeakingTopic, text: string) => usedExpressions(text, t.expressions).filter(Boolean).length;

export function useSpeakTask(levelId: string, cefr: string, index: number, topic: SpeakingTopic) {
  const [s, setS] = useState<SpeakState>(START);
  const pass = CONFIG.pass.speak;

  const analyse = useCallback(async (said: string, round: number) => {
    setS((x) => ({ ...x, phase: "reviewing" }));
    try {
      const r = await reviewSpeech({ topic: topic.prompt, said, cefr, expressions: topic.expressions.map((e) => e.en) },
        (done, total) => setS((x) => ({ ...x, progress: [done, total] })));
      trackScore("grammar", r.score);
      saveErrors(r.fixes);
      const good = round > 1 && r.score >= pass;
      if (good && !r.fixes.length) recordItem(levelId, "speak", index, r.score);
      setS((x) => ({ ...x, review: r, passAfterFixes: good, phase: good && !r.fixes.length ? "passed" : "review", fixIndex: 0 }));
      if (good) speak(say(r.fixes.length ? "lastFixes" : "improved"));
      else speak(r.fixes.length ? mistakesLine(r.fixes.length) : say("sayMore"));
    } catch {
      setS((x) => ({ ...x, phase: "short", error: "L'IA ne répond pas. Vérifie Ollama, puis réessaie." }));
    }
  }, [topic, cefr, pass, levelId, index]);

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
    const enough = countWords(all) >= minWordsFor(topic, s.round) && expressionsUsed(topic, all) >= topic.mustUse;
    setS((x) => ({ ...x, live: "", transcript: all, error: "", phase: enough ? "reviewing" : "short" }));
    if (enough) analyse(all, s.round);
    else speak(say("keepGoing"));
  }, [s.transcript, s.round, topic, analyse]);

  /** A corrected sentence was repeated correctly: next one, validation, or talk again. */
  const fixDone = useCallback(() => {
    setS((x) => {
      const n = x.fixIndex + 1;
      if (x.review && n < x.review.fixes.length) return { ...x, fixIndex: n };
      if (x.passAfterFixes && x.review) {
        recordItem(levelId, "speak", index, x.review.score);
        return { ...x, phase: "passed" };
      }
      return { ...START, round: x.round + 1 };
    });
  }, [levelId, index]);

  const startFixes = useCallback(() => setS((x) => (x.review?.fixes.length ? { ...x, phase: "fix", fixIndex: 0 } : { ...START, round: x.round + 1 })), []);
  const restart = useCallback(() => setS((x) => ({ ...x, transcript: "", phase: "ready" })), []);

  return { state: s, talk, fixDone, startFixes, restart, minWords: minWordsFor(topic, s.round) };
}
