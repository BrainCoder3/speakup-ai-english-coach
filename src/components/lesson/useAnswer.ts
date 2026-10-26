"use client";
/** Listens to a spoken answer, grades it strictly, speaks the correction. */
import { useCallback, useState } from "react";
import { CONFIG } from "@/lib/config";
import { gradeAnswer, type Grade } from "@/lib/ai/tasks/exercises";
import { listen, isListening, stop, sttSupported } from "@/lib/speech/stt";
import { micMessage } from "@/lib/speech/micErrors";
import { speak } from "@/lib/speech/tts";
import { recordItem } from "@/lib/progress/rules";
import { trackScore, trackSpeech } from "@/lib/progress/stats";
import { saveErrors } from "@/lib/errors/bank";
import type { Level, Question } from "@/data/types";

export interface AnswerState {
  live: string;
  grading: boolean;
  said: string;
  grade: Grade | null;
  fails: number;
  error: string;
}

const START: AnswerState = { live: "", grading: false, said: "", grade: null, fails: 0, error: "" };

export function useAnswer(level: Level, index: number, item: Question) {
  const [s, setS] = useState<AnswerState>(START);

  const answer = useCallback(async () => {
    if (isListening()) return stop();
    if (!sttSupported()) return setS((x) => ({ ...x, error: "Utilise Edge ou Chrome pour la reconnaissance vocale." }));
    let text = "";
    try {
      text = (await listen((live) => setS((x) => ({ ...x, live })), { long: true })).text;
    } catch (e) {
      return setS((x) => ({ ...x, live: "", error: micMessage(e) }));
    }
    if (!text) return setS((x) => ({ ...x, live: "" }));
    trackSpeech(text);
    setS((x) => ({ ...x, live: "", said: text, grading: true, error: "", grade: null }));
    try {
      const g = await gradeAnswer({ question: item.q, said: text, cefr: level.cefr, target: level.subtitle, example: item.example, passMark: CONFIG.pass.answer });
      trackScore("grammar", g.score);
      recordItem(level.id, "answer", index, g.score);
      const failed = g.score < CONFIG.pass.answer;
      if (failed && g.relevant && g.changes > 0) saveErrors([{ said: text, corrected: g.corrected, explication: g.feedback_fr }]);
      setS((x) => ({ ...x, grading: false, grade: g, fails: x.fails + (failed ? 1 : 0) }));
      speak(g.fix_en);
    } catch {
      setS((x) => ({ ...x, grading: false, error: "L'IA ne répond pas. Vérifie Ollama." }));
    }
  }, [item, level, index]);

  /** After repeating the model answer correctly, the question counts as passed. */
  const acceptFallback = useCallback(() => recordItem(level.id, "answer", index, CONFIG.pass.answer), [level.id, index]);

  return { state: s, answer, acceptFallback };
}
