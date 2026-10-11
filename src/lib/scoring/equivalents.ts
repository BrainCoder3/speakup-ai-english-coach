/**
 * Words a speech recogniser cannot tell apart (homophones, spelling variants).
 * Both sides are mapped to the same form, so the learner is never penalised for them.
 */
const GROUPS = [
  ["to", "too", "two"], ["for", "four"], ["there", "their"], ["right", "write"], ["here", "hear"],
  ["know", "no"], ["new", "knew"], ["one", "won"], ["by", "buy", "bye"], ["see", "sea"],
  ["where", "wear"], ["wait", "weight"], ["week", "weak"], ["whole", "hole"], ["our", "hour"],
  ["ok", "okay"], ["mr", "mister"], ["mrs", "missus"], ["dr", "doctor"], ["meet", "meat"],
  ["son", "sun"], ["eight", "ate"], ["would", "wood"],
  ["mail", "male"], ["road", "rode"], ["piece", "peace"], ["flower", "flour"],
  ["cents", "sense"], ["pair", "pear"], ["break", "brake"], ["plane", "plain"], ["sale", "sail"],
  ["grey", "gray"], ["centre", "center"], ["colour", "color"], ["favourite", "favorite"],
  ["organise", "organize"], ["organised", "organized"], ["optimised", "optimized"], ["theatre", "theater"],
  ["travelling", "traveling"], ["cancelled", "canceled"], ["realise", "realize"], ["apologise", "apologize"],
  ["programme", "program"], ["neighbour", "neighbor"], ["behaviour", "behavior"], ["learnt", "learned"],
];

const CANON = new Map<string, string>();
for (const g of GROUPS) for (const w of g) CANON.set(w, g[0]);

/** Phrases that are written in several ways ("all right" / "alright"). */
export const PHRASES: [RegExp, string][] = [
  [/\balright\b/g, "all right"],
  [/\bcan not\b/g, "cannot"],
  [/\be-?mail\b/g, "email"],
  [/\bweekend\b/g, "week end"],
  [/\bo['\s]?clock\b/g, "oclock"],
  [/\bgonna\b/g, "going to"],
  [/\bwanna\b/g, "want to"],
];

export const canonical = (w: string) => CANON.get(w) ?? w;
