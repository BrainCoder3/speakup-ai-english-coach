/**
 * Pronunciation score: the browser recogniser transcribes what it *understood*.
 * If every word of the target is understood, the pronunciation is intelligible.
 */
import { lcsTable, words } from "./normalize";

export interface Token {
  text: string;
  ok: boolean;
}

export interface PronunciationResult {
  score: number;
  tokens: Token[];
}

export function pronunciationScore(target: string, said: string, confidence = 0): PronunciationResult {
  const display = target.split(/\s+/).filter(Boolean);
  const owner: number[] = [];
  const T = display.flatMap((tok, k) => words(tok).map((w) => (owner.push(k), w)));
  const S = words(said);
  if (!T.length) return { score: 0, tokens: [] };

  const dp = lcsTable(T, S);
  const ok = new Array<boolean>(T.length).fill(false);
  let i = 0, j = 0;
  while (i < T.length && j < S.length) {
    if (T[i] === S[j]) { ok[i] = true; i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) i++;
    else j++;
  }
  const matched = ok.filter(Boolean).length;
  const recall = matched / T.length;
  const precision = S.length ? matched / S.length : 0;
  let score = 100 * (0.85 * recall + 0.15 * precision);
  if (confidence > 0) score *= 0.88 + 0.12 * confidence;

  const tokens = display.map((text, k) => ({ text, ok: T.every((_, n) => owner[n] !== k || ok[n]) }));
  return { score: Math.round(Math.min(100, score)), tokens };
}

/** Number of words that differ between two sentences. */
export function changedWords(a: string, b: string): number {
  const A = words(a), B = words(b);
  return Math.max(A.length, B.length) - lcsTable(A, B)[0][0];
}

/** 1-3 stars from an average score. */
export const starsFor = (avg: number) => (avg >= 95 ? 3 : avg >= 85 ? 2 : 1);
