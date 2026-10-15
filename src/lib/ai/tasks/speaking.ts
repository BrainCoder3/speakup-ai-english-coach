/** Long speaking task: piece-by-piece corrections of a monologue, then an overall score. */
import { chatJSON } from "../client";
import { EXPLAIN_SCHEMA, FIX_SCHEMA, SUMMARY_SCHEMA, explainPrompt, fixPrompt, summaryPrompt } from "../prompts/speaking";
import { lang } from "@/lib/course/lang";
import { lcsTable, words } from "@/lib/scoring/normalize";
import { ruleFixesEs } from "@/lib/scoring/rulesEs";
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

/** A real fix changes or adds a few words; a complete rewrite or a cut sentence is rejected. */
function isRealFix(said: string, corrected: string) {
  const A = words(said), B = words(corrected);
  const same = lcsTable(A, B)[0][0];
  const added = B.length - same;
  return corrected.trim() !== "" && added > 0 && added <= Math.max(4, A.length * 0.5) && same >= A.length * 0.5;
}
const sameWords = (a: string, b: string) => words(a).join(" ") === words(b).join(" ");

export const countWords = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

/** Rules for classic traps first, then the model rewrites the piece; explain what changed. */
async function checkPiece(piece: string, cefr: string, expressions: string[]): Promise<SpeechFix | null> {
  const rule = lang().id === "es" ? ruleFixesEs(piece) : { corrected: piece, why: [] as string[] };
  const r = await chatJSON<{ fixed: string }>(fixPrompt(rule.corrected, cefr, expressions), FIX_SCHEMA, { temperature: 0, maxTokens: 140 });
  let corrected = r.fixed.trim();
  if (!isRealFix(piece, corrected)) corrected = rule.corrected; // model output unusable: keep the rule fixes only
  if (sameWords(piece, corrected)) return null;
  const why = [...rule.why];
  if (!sameWords(rule.corrected, corrected)) {
    const e = await chatJSON<{ explication: string }>(explainPrompt(piece, corrected), EXPLAIN_SCHEMA, { temperature: 0.1, maxTokens: 90 });
    if (e.explication.trim()) why.push(e.explication.trim());
  }
  return { said: piece, corrected, explication: why.join(" ") };
}

type Progress = (done: number, total: number) => void;

export async function reviewSpeech(p: { topic: string; said: string; cefr: string; expressions: string[] }, onProgress?: Progress): Promise<SpeechReview> {
  const pieces = splitSpeech(p.said);
  const fixes: SpeechFix[] = [];
  for (let i = 0; i < pieces.length; i++) {
    onProgress?.(i, pieces.length + 1);
    const fix = await checkPiece(pieces[i], p.cefr, p.expressions);
    if (fix) fixes.push(fix);
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
