/**
 * Detects which target expressions appear in a spoken or written text.
 * "…" in an expression is a gap for the learner's own words: "I'm going to …".
 * English infinitive phrases ("to make an effort") also match conjugated verbs ("I made an effort").
 */
import { words } from "./normalize";
import { isFormOf } from "./verbForms";

/** Index of `part` as a contiguous run inside `text`, starting at `from` (-1 if absent). */
function find(text: string[], part: string[], from: number): number {
  for (let i = from; i + part.length <= text.length; i++) {
    if (part.every((w, k) => text[i + k] === w)) return i;
  }
  return -1;
}

const ARTICLES = new Set(["a", "an", "the"]);

/** "to take advantage of something" → verb "take", fixed parts [["advantage", "of"]]. */
function parse(expression: string): { verb: string | null; parts: string[][] } {
  if (!/^to\s/i.test(expression)) return { verb: null, parts: expression.split("…").map(words).filter((p) => p.length) };
  const body = expression
    .replace(/^to\s+/i, "")
    .replace(/\([^)]*\)/g, "…")
    .replace(/\b(someone|somebody|something|one's|your|sb|sth)\b/gi, "…");
  const parts = body.split("…").map(words).filter((p) => p.length);
  const verb = parts[0]?.shift() ?? null;
  // Articles are free: "make an effort" also matches "made a real effort".
  const fixed = parts.map((p) => p.filter((w) => !ARTICLES.has(w)));
  return { verb, parts: fixed.filter((p) => p.length) };
}

/** True if every fixed part of the expression appears, in order (verb in any form). */
export function usesExpression(said: string, expression: string): boolean {
  const text = words(said);
  const { verb, parts } = parse(expression);
  const starts = verb ? text.flatMap((w, i) => (isFormOf(w, verb) ? [i + 1] : [])) : [0];
  return starts.some((start) => {
    let at = start;
    for (const p of parts) {
      const i = find(text, p, at);
      if (i < 0) return false;
      at = i + p.length;
    }
    return parts.length > 0 || verb !== null;
  });
}

export const usedExpressions = (said: string, list: { en: string }[]) => list.map((e) => usesExpression(said, e.en));
