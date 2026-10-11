/** Conversation corrections: quick spoken fix + detailed French feedback. */
import { chatJSON } from "../client";
import { QUICK_SCHEMA, quickPrompt } from "../prompts/conversation";
import { FEEDBACK_SCHEMA, feedbackPrompt } from "../prompts/feedback";

export interface QuickCheck {
  hasError: boolean;
  corrected: string;
  fix: string;
}

export interface Mistake {
  wrong: string;
  right: string;
  type: string;
  explication: string;
}

export interface Feedback {
  is_correct: boolean;
  corrected: string;
  natural: string;
  mistakes: Mistake[];
  vocab: { word: string; meaning_fr: string; example: string } | null;
  tip_fr: string;
  score: number;
}

const letters = (s: string) => s.toLowerCase().replace(/[^a-z' ]/g, "").replace(/\s+/g, " ").trim();
const reEscape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Fast check (~2-3 s) used to correct the learner out loud. */
export async function quickCheck(said: string, context: string): Promise<QuickCheck> {
  const r = await chatJSON<{ has_error: boolean; corrected: string; fix_en: string }>(quickPrompt(said, context), QUICK_SCHEMA, { temperature: 0.1, maxTokens: 120 });
  const changed = letters(r.corrected) !== letters(said);
  return { hasError: r.has_error && changed && !!r.corrected.trim(), corrected: r.corrected.trim(), fix: r.fix_en.trim() };
}

/** Detailed analysis, with consistency fixes for small-model slips. */
export async function analyse(said: string, context: string, cefr: string): Promise<Feedback> {
  const fb = await chatJSON<Feedback>(feedbackPrompt(said, context, cefr), FEEDBACK_SCHEMA, { temperature: 0.1 });
  fb.score = Math.max(0, Math.min(100, Math.round(fb.score)));
  for (const m of fb.mistakes) {
    const re = new RegExp(reEscape(m.wrong), "i");
    if (m.wrong && re.test(fb.corrected) && !fb.corrected.toLowerCase().includes(m.right.toLowerCase())) fb.corrected = fb.corrected.replace(re, m.right);
  }
  if (fb.mistakes.length && letters(fb.natural) === letters(said)) fb.natural = fb.corrected;
  if (fb.is_correct && !fb.mistakes.length && fb.score < 80) fb.score = 85;
  const w = fb.vocab?.word.toLowerCase().trim() ?? "";
  if (!w || `${said} ${fb.corrected}`.toLowerCase().includes(w)) fb.vocab = null; // must be a NEW word
  return fb;
}
