/**
 * Recognises a conjugated English verb: "to make an effort" must match "I made an effort",
 * "she's making an effort" or "they make an effort".
 */
const IRREGULAR: Record<string, string[]> = {
  be: ["am", "is", "are", "was", "were", "been", "being"], have: ["has", "had", "having"], do: ["does", "did", "done", "doing"],
  make: ["made"], take: ["took", "taken"], get: ["got", "gotten"], go: ["went", "gone", "goes"], come: ["came"],
  break: ["broke", "broken"], fall: ["fell", "fallen"], give: ["gave", "given"], run: ["ran"], bring: ["brought"],
  catch: ["caught"], keep: ["kept"], meet: ["met"], lay: ["laid"], draw: ["drew", "drawn"], stand: ["stood"],
  sit: ["sat"], pay: ["paid"], feel: ["felt"], say: ["said"], tell: ["told"], find: ["found"], leave: ["left"],
  lose: ["lost"], teach: ["taught"], understand: ["understood"], win: ["won"], write: ["wrote", "written"],
  speak: ["spoke", "spoken"], think: ["thought"], buy: ["bought"], set: ["set"], put: ["put"], cut: ["cut"],
  learn: ["learnt", "learned"], burn: ["burnt", "burned"], see: ["saw", "seen"], know: ["knew", "known"],
  grow: ["grew", "grown"], drive: ["drove", "driven"], hold: ["held"], wear: ["wore", "worn"], stick: ["stuck"],
  overcome: ["overcame"], sleep: ["slept"], spend: ["spent"], lead: ["led"], build: ["built"],
  rise: ["rose", "risen"], fly: ["flew", "flown"], forget: ["forgot", "forgotten"], let: ["let"], shut: ["shut"], unwind: ["unwound"],
};

/** True when `word` is a form of the verb `base` (base, -s, -ed, -ing or irregular form). */
export function isFormOf(word: string, base: string): boolean {
  if (word === base || IRREGULAR[base]?.includes(word)) return true;
  const stem = base.replace(/e$/, "");
  return [base + "s", base + "es", stem + "ed", base + "d", stem + "ing", base + base.slice(-1) + "ed", base + base.slice(-1) + "ing",
    base.replace(/y$/, "ied"), base.replace(/y$/, "ies")].includes(word);
}
