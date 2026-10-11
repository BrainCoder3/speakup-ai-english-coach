/** Turns any sentence into comparable lowercase words. */

const CONTRACTIONS: Record<string, string> = {
  "i'm": "i am", "you're": "you are", "we're": "we are", "they're": "they are",
  "he's": "he is", "she's": "she is", "it's": "it is", "that's": "that is",
  "what's": "what is", "there's": "there is", "let's": "let us",
  "don't": "do not", "doesn't": "does not", "didn't": "did not", "isn't": "is not",
  "aren't": "are not", "wasn't": "was not", "can't": "cannot", "won't": "will not",
  "i'll": "i will", "you'll": "you will", "we'll": "we will", "i'd": "i would",
  "i've": "i have", "we've": "we have", "you've": "you have",
};

const ONES = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

/** "25" -> "twenty five" (0-99) so digits and words match. */
function numberWords(w: string): string | null {
  if (!/^\d{1,2}$/.test(w)) return null;
  const n = Number(w);
  if (n < 20) return ONES[n];
  return TENS[Math.floor(n / 10)] + (n % 10 ? " " + ONES[n % 10] : "");
}

/** Lowercase words without punctuation, contractions expanded. */
export function words(text: string): string[] {
  return String(text || "")
    .toLowerCase()
    .replace(/[’`]/g, "'")
    .replace(/\bo['\s]?clock\b/g, "oclock")
    .replace(/[^\p{L}\p{N}'\s-]/gu, " ")
    .replace(/-/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .flatMap((w) => (CONTRACTIONS[w] ?? numberWords(w) ?? w).split(" "));
}

/** Longest-common-subsequence table for two word arrays. */
export function lcsTable(a: string[], b: string[]): number[][] {
  const dp = Array.from({ length: a.length + 1 }, () => new Array<number>(b.length + 1).fill(0));
  for (let i = a.length - 1; i >= 0; i--)
    for (let j = b.length - 1; j >= 0; j--)
      dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  return dp;
}
