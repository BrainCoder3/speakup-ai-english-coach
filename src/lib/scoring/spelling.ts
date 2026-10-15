/**
 * Strict spelling check for written answers: capitals, spaces and punctuation
 * (¿ ¡ . , « ») do not matter, but letters and written accents do.
 */

/** Lowercase, punctuation removed, spaces collapsed — accents kept. */
export const clean = (s: string) =>
  s.toLowerCase().replace(/[’`]/g, "'").replace(/[¿?¡!.,;:«»"()—–-]/g, " ").replace(/\s+/g, " ").trim();

/** Same, without written accents (ñ kept): to detect "only the accent is wrong". */
export const plain = (s: string) => clean(s).normalize("NFD").replace(/(?!̃)[̀-ͯ]/g, "").normalize("NFC");

export type Verdict =
  | { kind: "right"; expected: string }
  | { kind: "accent"; expected: string }
  | { kind: "wrong"; expected: string };

/** Compares a typed answer with the accepted ones. */
export function checkSpelling(typed: string, answers: string[]): Verdict {
  const t = clean(typed);
  const hit = answers.find((a) => clean(a) === t);
  if (hit) return { kind: "right", expected: hit };
  const near = answers.find((a) => plain(a) === plain(typed));
  if (near) return { kind: "accent", expected: near };
  return { kind: "wrong", expected: answers[0] };
}

/** Explains an accent-only mistake: which words differ. */
export function accentHint(typed: string, expected: string): string {
  const a = clean(typed).split(" "), b = clean(expected).split(" ");
  const bad = b.filter((w, i) => a[i] !== undefined && a[i] !== w && plain(a[i]) === plain(w));
  return bad.length ? `Attention aux accents : ${bad.join(", ")}.` : "Attention aux accents.";
}
