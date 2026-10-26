/** Graded answers (strict) and helper tools. */
import { chatJSON, chatStream, type Msg } from "../client";
import { ANSWER_SCHEMA, SUGGEST_SCHEMA, TRANSLATE_SCHEMA, answerPrompt, suggestPrompt, translatePrompt } from "../prompts/exercises";
import { changedWords } from "@/lib/scoring/pronunciation";
import { say } from "@/lib/course/phrases";

export interface Grade {
  score: number;
  relevant: boolean;
  corrected: string;
  feedback_fr: string;
  fix_en: string;
  changes: number;
}

/** Kind rule: up to 2 changed words are corrected out loud but do not fail the answer. */
export async function gradeAnswer(p: { question: string; said: string; cefr: string; target: string; example: string; passMark: number }): Promise<Grade> {
  const r = await chatJSON<Omit<Grade, "changes">>(answerPrompt(p), ANSWER_SCHEMA, { temperature: 0.1, maxTokens: 220 });
  let score = Math.max(0, Math.min(100, Math.round(r.score)));
  const n = p.said.trim().split(/\s+/).filter(Boolean).length;
  if (n < 2) score = Math.min(score, 45); // not a single word
  if (!r.relevant) {
    score = Math.min(score, 50);
    r.corrected = p.example; // show a real model answer
  }
  const changes = r.relevant ? changedWords(p.said, r.corrected) : 0;
  if (changes > 2) score = Math.min(score, p.passMark - 2);
  else if (r.relevant && n >= 2) {
    score = Math.max(score, p.passMark + (changes === 0 ? 15 : 5));
    if (changes === 0) {
      r.feedback_fr = "Parfait : phrase correcte, complète et qui répond à la question !";
      r.fix_en = say("greatAnswer");
    }
  }
  return { ...r, score, changes };
}

/** Streams the coach's next line. */
export const reply = (messages: Msg[], onText: (full: string) => void) => chatStream(messages, onText, { temperature: 0.7, maxTokens: 160 });

export async function suggestAnswers(question: string, cefr: string) {
  const r = await chatJSON<{ answers: { en: string; fr: string }[] }>(suggestPrompt(question, cefr), SUGGEST_SCHEMA, { temperature: 0.6 });
  return r.answers.slice(0, 3);
}

export const translate = (fr: string, cefr: string) =>
  chatJSON<{ en: string; alternatives: string[]; note_fr: string }>(translatePrompt(fr, cefr), TRANSLATE_SCHEMA);

export async function toFrench(en: string): Promise<string> {
  const r = await chatJSON<{ fr: string }>(`Translate into natural French: "${en}"`, { type: "object", properties: { fr: { type: "string" } }, required: ["fr"] });
  return r.fr;
}
