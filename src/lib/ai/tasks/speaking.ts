/** Long speaking task: piece-by-piece corrections of a monologue, then an overall score. */
import { chatJSON } from "../client";
import { PIECE_SCHEMA, SUMMARY_SCHEMA, piecePrompt, summaryPrompt } from "../prompts/speaking";
import { lcsTable, words } from "@/lib/scoring/normalize";
import { splitSpeech } from "@/lib/scoring/sentences";

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

/**
 * A real fix changes or adds a few words. Rejected: punctuation-only changes, cutting the
 * sentence short, rewriting it completely, or "fixes" whose explanation says it was correct.
 */
function isRealFix(f: SpeechFix) {
  const A = words(f.said), B = words(f.corrected);
  const same = lcsTable(A, B)[0][0];
  const added = B.length - same;
  const saysCorrect = /(?:est|sont|phrases?) (?:déjà )?correcte?s?(?![a-z])/i.test(f.explication) && !/incorrect/i.test(f.explication);
  return f.corrected.trim() !== "" && added > 0 && added <= Math.max(4, A.length * 0.5) && same >= A.length * 0.5 && !saysCorrect;
}

export const countWords = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

type Progress = (done: number, total: number) => void;

export async function reviewSpeech(p: { topic: string; said: string; cefr: string; expressions: string[] }, onProgress?: Progress): Promise<SpeechReview> {
  const pieces = splitSpeech(p.said);
  const fixes: SpeechFix[] = [];
  for (let i = 0; i < pieces.length; i++) {
    onProgress?.(i, pieces.length + 1);
    const r = await chatJSON<{ has_error: boolean; corrected: string; explication: string }>(
      piecePrompt(pieces[i], p.cefr, p.expressions), PIECE_SCHEMA, { temperature: 0, maxTokens: 140 });
    const fix = { said: pieces[i], corrected: r.corrected.trim(), explication: r.explication.trim() };
    if (r.has_error && isRealFix(fix)) fixes.push(fix);
  }
  onProgress?.(pieces.length, pieces.length + 1);
  const s = await chatJSON<{ on_topic: boolean; range: number; feedback_fr: string }>(
    summaryPrompt({ ...p, errors: fixes.length }), SUMMARY_SCHEMA, { temperature: 0.1, maxTokens: 160 });
  const accuracy = 100 * (1 - fixes.length / Math.max(1, pieces.length));
  const range = Math.max(0, Math.min(100, Math.round(s.range)));
  let score = Math.round(0.7 * accuracy + 0.3 * range);
  score = Math.min(score, 100 - 7 * fixes.length); // every mistake costs points
  if (!s.on_topic) score = Math.min(score, 50);
  return { fixes: fixes.slice(0, 8), score: Math.max(0, score), feedback_fr: s.feedback_fr, on_topic: s.on_topic, words: countWords(p.said) };
}
