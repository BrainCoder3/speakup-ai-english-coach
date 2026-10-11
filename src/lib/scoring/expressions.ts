/**
 * Detects which target expressions appear in a spoken transcript.
 * "…" in an expression is a gap for the learner's own words: "I'm going to …".
 */
import { words } from "./normalize";

/** Index of `part` as a contiguous run inside `text`, starting at `from` (-1 if absent). */
function find(text: string[], part: string[], from: number): number {
  for (let i = from; i + part.length <= text.length; i++) {
    if (part.every((w, k) => text[i + k] === w)) return i;
  }
  return -1;
}

/** True if every fixed part of the expression is said, in order. */
export function usesExpression(said: string, expression: string): boolean {
  const text = words(said);
  const parts = expression.split("…").map(words).filter((p) => p.length);
  let at = 0;
  for (const p of parts) {
    const i = find(text, p, at);
    if (i < 0) return false;
    at = i + p.length;
  }
  return parts.length > 0;
}

export const usedExpressions = (said: string, list: { en: string }[]) => list.map((e) => usesExpression(said, e.en));
