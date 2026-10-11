/**
 * Speech recognisers write numbers, times and ordinals as digits ("1:00", "3rd", "25%").
 * These helpers turn them back into the words a learner actually said.
 */
const ONES = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const ORDINALS: Record<string, string> = {
  one: "first", two: "second", three: "third", five: "fifth", eight: "eighth", nine: "ninth", twelve: "twelfth",
};

function below100(n: number): string {
  if (n < 20) return ONES[n];
  return TENS[Math.floor(n / 10)] + (n % 10 ? " " + ONES[n % 10] : "");
}

/** 0-9999 in words; years 1100-2099 are read in pairs ("twenty twenty three"). */
export function spellNumber(n: number): string {
  if (n < 100) return below100(n);
  if (n >= 1100 && n < 2100 && n % 100 !== 0 && !(n >= 2000 && n < 2010)) {
    return `${below100(Math.floor(n / 100))} ${n % 100 < 10 ? "oh " + ONES[n % 100] : below100(n % 100)}`;
  }
  if (n < 1000) return `${ONES[Math.floor(n / 100)]} hundred${n % 100 ? " " + below100(n % 100) : ""}`;
  return `${spellNumber(Math.floor(n / 1000))} thousand${n % 1000 ? " " + spellNumber(n % 1000) : ""}`;
}

function ordinal(n: number): string {
  const words = spellNumber(n).split(" ");
  const last = words.pop()!;
  const ord = ORDINALS[last] ?? (last.endsWith("y") ? last.slice(0, -1) + "ieth" : last + "th");
  return [...words, ord].join(" ");
}

/** Rewrites digits inside a lowercase sentence as spoken words. */
export function spellDigits(text: string): string {
  return text
    .replace(/\b(\d{1,2}):00\b/g, (_, h) => `${spellNumber(+h)} oclock`)
    .replace(/\b(\d{1,2}):0(\d)\b/g, (_, h, m) => `${spellNumber(+h)} oh ${ONES[+m]}`)
    .replace(/\b(\d{1,2}):(\d{2})\b/g, (_, h, m) => `${spellNumber(+h)} ${spellNumber(+m)}`)
    .replace(/\b(\d{1,3})(?:,(\d{3}))+\b/g, (m) => m.replace(/,/g, ""))
    .replace(/\b(\d+)(st|nd|rd|th)\b/g, (_, n) => ordinal(+n))
    .replace(/(\d+)\s*%/g, "$1 percent")
    .replace(/\$(\d+)/g, "$1 dollars")
    .replace(/\b\d{1,4}\b/g, (n) => spellNumber(+n));
}
