/** Listening comprehension: checks that the right information was understood. */
import { chatJSON } from "../client";
import { LISTEN_SCHEMA, listenPrompt } from "../prompts/listening";

export interface ListenGrade {
  understood: boolean;
  score: number;
  feedback_fr: string;
  corrected: string;
}

export async function gradeListening(p: { passage: string; question: string; expected: string; said: string; passMark: number }): Promise<ListenGrade> {
  const r = await chatJSON<ListenGrade & { same_fact: boolean }>(listenPrompt(p), LISTEN_SCHEMA, { temperature: 0.1, maxTokens: 300 });
  r.understood = r.understood && r.same_fact;
  let score = Math.max(0, Math.min(100, Math.round(r.score)));
  const n = p.said.trim().split(/\s+/).filter(Boolean).length;
  // The verdict decides: right information passes, wrong information cannot.
  if (r.understood) score = Math.max(score, p.passMark + (n >= 4 ? 10 : 0));
  else score = Math.min(score, p.passMark - 15);
  return { understood: r.understood, score, feedback_fr: r.feedback_fr, corrected: r.corrected };
}
