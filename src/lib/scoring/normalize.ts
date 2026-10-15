/** Turns any sentence into comparable lowercase words. */
import { PHRASES, canonical } from "./equivalents";
import { spellDigits } from "./numbers";
import { wordsEs } from "./normalizeEs";
import { lang } from "@/lib/course/lang";

const CONTRACTIONS: Record<string, string> = {
  "i'm": "i am", im: "i am", "you're": "you are", "we're": "we are", "they're": "they are",
  "he's": "he is", "she's": "she is", "it's": "it is", "that's": "that is",
  "what's": "what is", "there's": "there is", "let's": "let us", "who's": "who is",
  "don't": "do not", "doesn't": "does not", "didn't": "did not", "isn't": "is not",
  "aren't": "are not", "wasn't": "was not", "can't": "cannot", "won't": "will not",
  "i'll": "i will", "you'll": "you will", "we'll": "we will", "i'd": "i would",
  "i've": "i have", "we've": "we have", "you've": "you have", "they've": "they have",
  "haven't": "have not", "hasn't": "has not", "couldn't": "could not", "shouldn't": "should not",
  "wouldn't": "would not", "weren't": "were not", "he'll": "he will", "she'll": "she will",
};

/**
 * Lowercase words without punctuation: contractions expanded, digits spelled out
 * ("1:00" -> "one oclock") and homophones merged, so only real slips count.
 */
export function words(text: string): string[] {
  if (lang().id === "es") return wordsEs(text);
  let s = spellDigits(String(text || "").toLowerCase().replace(/[’`]/g, "'"));
  for (const [re, to] of PHRASES) s = s.replace(re, to);
  return s
    .replace(/[^\p{L}\p{N}'\s-]/gu, " ")
    .replace(/-/g, " ")
    .split(/\s+/)
    .flatMap((w) => (CONTRACTIONS[w] ?? w).split(" "))
    .map((w) => canonical(w.replace(/^'+|'+$/g, "")))
    .filter(Boolean);
}

/** Longest-common-subsequence table for two word arrays. */
export function lcsTable(a: string[], b: string[]): number[][] {
  const dp = Array.from({ length: a.length + 1 }, () => new Array<number>(b.length + 1).fill(0));
  for (let i = a.length - 1; i >= 0; i--)
    for (let j = b.length - 1; j >= 0; j--)
      dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  return dp;
}
