/** Long speaking task: sentence-level corrections of a monologue. */
import { chatJSON } from "../client";
import { SPEECH_SCHEMA, speechPrompt } from "../prompts/speaking";
import { lcsTable, words } from "@/lib/scoring/normalize";

export interface SpeechFix {
  said: string;
  corrected: string;
  explication: string;
}

export interface SpeechReview {
  fixes: SpeechFix[];
  score: number;
  feedback_fr: string;
  on_topic: boolean;
  words: number;
}

/** A real fix changes or adds words; merely cutting the sentence short is not a correction. */
function addsWords(said: string, corrected: string) {
  const A = words(said), B = words(corrected);
  return B.length - lcsTable(A, B)[0][0] > 0;
}

export const countWords = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

export async function reviewSpeech(p: { topic: string; said: string; cefr: string }): Promise<SpeechReview> {
  const r = await chatJSON<Omit<SpeechReview, "words">>(speechPrompt(p), SPEECH_SCHEMA, { temperature: 0.1, maxTokens: 900 });
  // Keep only real corrections (the small model sometimes "fixes" a correct sentence).
  const fixes = r.fixes.filter((f) => f.corrected.trim() && addsWords(f.said, f.corrected)).slice(0, 6);
  let score = Math.max(0, Math.min(100, Math.round(r.score)));
  score = Math.min(score, 100 - 7 * fixes.length); // every mistake costs points
  if (!r.on_topic) score = Math.min(score, 50);
  return { ...r, fixes, score: Math.max(0, score), words: countWords(p.said) };
}
