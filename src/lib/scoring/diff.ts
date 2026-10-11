/** Word-level diff between what was said and the correction. */
export type DiffPart = { text: string; kind: "same" | "del" | "ins" };

const norm = (w: string) => w.toLowerCase().replace(/[^\p{L}\p{N}']/gu, "");

export function diffWords(from: string, to: string): DiffPart[] {
  const A = from.split(/\s+/).filter(Boolean);
  const B = to.split(/\s+/).filter(Boolean);
  const dp = Array.from({ length: A.length + 1 }, () => new Array<number>(B.length + 1).fill(0));
  for (let i = A.length - 1; i >= 0; i--)
    for (let j = B.length - 1; j >= 0; j--)
      dp[i][j] = norm(A[i]) === norm(B[j]) ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);

  const out: DiffPart[] = [];
  let i = 0, j = 0;
  while (i < A.length && j < B.length) {
    if (norm(A[i]) === norm(B[j])) { out.push({ text: B[j], kind: "same" }); i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) out.push({ text: A[i++], kind: "del" });
    else out.push({ text: B[j++], kind: "ins" });
  }
  while (i < A.length) out.push({ text: A[i++], kind: "del" });
  while (j < B.length) out.push({ text: B[j++], kind: "ins" });
  return out;
}
