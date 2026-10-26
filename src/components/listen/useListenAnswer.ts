"use client";
/** Records a spoken (or, in silent mode, typed) answer to a comprehension question and grades it. */
import { useCallback, useState } from "react";
import { CONFIG } from "@/lib/config";
import { gradeListening, type ListenGrade } from "@/lib/ai/tasks/listening";
import { recordItem } from "@/lib/progress/rules";
import { trackScore, trackSpeech } from "@/lib/progress/stats";
import { isListening, listen, stop, sttSupported } from "@/lib/speech/stt";
import { micMessage } from "@/lib/speech/micErrors";
import { speak } from "@/lib/speech/tts";
import { say } from "@/lib/course/phrases";

export interface ListenAnswerState {
  live: string;
  said: string;
  grading: boolean;
  grade: ListenGrade | null;
  tries: number;
  error: string;
}

interface Args {
  levelId: string;
  index: number;
  passage: string;
  question: string;
  expected: string;
}

export function useListenAnswer(a: Args) {
  const [s, setS] = useState<ListenAnswerState>({ live: "", said: "", grading: false, grade: null, tries: 0, error: "" });

  const grade = useCallback(async (text: string) => {
    trackSpeech(text);
    setS((x) => ({ ...x, live: "", said: text, grading: true, grade: null, error: "" }));
    try {
      const g = await gradeListening({ passage: a.passage, question: a.question, expected: a.expected, said: text, passMark: CONFIG.pass.listen });
      trackScore("grammar", g.score);
      recordItem(a.levelId, "listen", a.index, g.score);
      setS((x) => ({ ...x, grading: false, grade: g, tries: x.tries + 1 }));
      speak(g.understood ? `${say("correct")} ${g.corrected}` : say("listenAgain"));
    } catch {
      setS((x) => ({ ...x, grading: false, error: "L'IA ne répond pas. Vérifie Ollama." }));
    }
  }, [a.levelId, a.index, a.passage, a.question, a.expected]);

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
    grade(text);
  }, [grade]);

  /** Silent mode: the same grading, from typed text. */
  const submit = useCallback((text: string) => text.trim() && grade(text.trim()), [grade]);

  return { state: s, answer, submit };
}
