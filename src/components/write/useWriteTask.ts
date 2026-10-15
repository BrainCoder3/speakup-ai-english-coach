"use client";
/**
 * Written composition, in rounds: write (min words + required expressions) → AI review sentence
 * by sentence → copy out every corrected sentence → write the text again. From round 2, a score
 * ≥ pass validates the topic, but only once every remaining mistake has been copied out correctly.
 */
import { useCallback, useState } from "react";
import { CONFIG } from "@/lib/config";
import { countWords, reviewSpeech, type SpeechReview } from "@/lib/ai/tasks/speaking";
import { saveErrors } from "@/lib/errors/bank";
import { recordItem } from "@/lib/progress/rules";
import { trackScore } from "@/lib/progress/stats";
import { usedExpressions } from "@/lib/scoring/expressions";
import type { SpeakingTopic } from "@/data/types";

export type WritePhase = "write" | "reviewing" | "review" | "copy" | "passed";

export interface WriteState {
  round: number;
  phase: WritePhase;
  text: string;
  review: SpeechReview | null;
  passAfterFixes: boolean;
  fixIndex: number;
  progress: [number, number];
  error: string;
}

const START: WriteState = { round: 1, phase: "write", text: "", review: null, passAfterFixes: false, fixIndex: 0, progress: [0, 1], error: "" };

export const minWordsWrite = (t: SpeakingTopic, round: number) => Math.round(t.minWords * (round > 1 ? 1.2 : 1));

export function useWriteTask(levelId: string, cefr: string, index: number, topic: SpeakingTopic) {
  const [s, setS] = useState<WriteState>(START);
  const pass = CONFIG.pass.writing;
  const setText = useCallback((text: string) => setS((x) => ({ ...x, text, error: "" })), []);

  const submit = useCallback(async () => {
    const words = countWords(s.text), used = usedExpressions(s.text, topic.expressions).filter(Boolean).length;
    if (words < minWordsWrite(topic, s.round) || used < topic.mustUse) {
      return setS((x) => ({ ...x, error: `Pas encore : ${words}/${minWordsWrite(topic, s.round)} mots et ${used}/${topic.mustUse} expressions.` }));
    }
    setS((x) => ({ ...x, phase: "reviewing", error: "" }));
    try {
      const r = await reviewSpeech({ topic: topic.prompt, said: s.text, cefr, expressions: topic.expressions.map((e) => e.en) },
        (done, total) => setS((x) => ({ ...x, progress: [done, total] })));
      trackScore("grammar", r.score);
      saveErrors(r.fixes);
      const good = s.round > 1 && r.score >= pass;
      if (good && !r.fixes.length) recordItem(levelId, "write", index, r.score);
      setS((x) => ({ ...x, review: r, passAfterFixes: good, fixIndex: 0, phase: good && !r.fixes.length ? "passed" : "review" }));
    } catch {
      setS((x) => ({ ...x, phase: "write", error: "L'IA ne répond pas. Vérifie Ollama, puis réessaie." }));
    }
  }, [s.text, s.round, topic, cefr, pass, levelId, index]);

  /** A corrected sentence was copied out correctly: next one, validation, or write again. */
  const fixDone = useCallback(() => {
    setS((x) => {
      const n = x.fixIndex + 1;
      if (x.review && n < x.review.fixes.length) return { ...x, fixIndex: n };
      if (x.passAfterFixes && x.review) {
        recordItem(levelId, "write", index, x.review.score);
        return { ...x, phase: "passed" };
      }
      return { ...START, round: x.round + 1 };
    });
  }, [levelId, index]);

  const startCopy = useCallback(() => setS((x) => (x.review?.fixes.length ? { ...x, phase: "copy", fixIndex: 0 } : { ...START, round: x.round + 1 })), []);

  return { state: s, setText, submit, fixDone, startCopy, minWords: minWordsWrite(topic, s.round) };
}
