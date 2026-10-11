/**
 * Splits a long spoken transcript into short pieces (~5-18 words) that a small
 * model can check reliably. Boundaries: line breaks (pauses), punctuation, then
 * the start of a new clause ("I", "we", "then", "but"…) once a piece is long enough.
 */
const CLAUSE_START = /^(i|we|he|she|they|it|there|then|so|but|after|suddenly|finally|however|later)$/i;
/** Never cut right after these words ("and | I", "to | play"…). */
const GLUE = /^(i|we|he|she|they|it|then|and|or|because|that|when|if|but|so|to|with|of|the|a|an|in|on|at|for|my|your|his|her|our|their|very|not|than|as)$/i;

export function splitSpeech(text: string, min = 5, max = 18): string[] {
  const pieces = text.split(/(?<=[.!?])\s+|\n+/).map((p) => p.trim()).filter(Boolean);
  const out: string[] = [];
  for (const piece of pieces) {
    const w = piece.split(/\s+/);
    let cur: string[] = [];
    for (let i = 0; i < w.length; i++) {
      const prev = cur[cur.length - 1] ?? "";
      const canCut = cur.length >= min && w.length - i >= 3 && CLAUSE_START.test(w[i]) && !GLUE.test(prev);
      if (canCut || (cur.length >= max && !GLUE.test(prev))) {
        out.push(cur.join(" "));
        cur = [];
      }
      cur.push(w[i]);
    }
    if (cur.length) out.push(cur.join(" "));
  }
  // A tiny trailing piece is merged back into the previous one.
  if (out.length > 1 && out[out.length - 1].split(/\s+/).length < 3) {
    const last = out.pop()!;
    out[out.length - 1] += ` ${last}`;
  }
  return out;
}
