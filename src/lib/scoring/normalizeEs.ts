/**
 * Spanish version of words(): digits spelled out, written accents ignored
 * (the recogniser sometimes drops them) and homophones merged.
 */
import { spellDigitsEs } from "./numbersEs";

const GROUPS = [
  ["hay", "ahi", "ay"], ["haber", "a ver"], ["hecho", "echo"], ["vaya", "valla", "baya"], ["tuvo", "tubo"],
  ["bello", "vello"], ["votar", "botar"], ["vienes", "bienes"], ["hola", "ola"], ["hasta", "asta"],
  ["halla", "haya", "aya"], ["ok", "vale", "okey"], ["hierba", "yerba"], ["septiembre", "setiembre"],
];
const CANON = new Map<string, string>();
for (const g of GROUPS) for (const w of g) if (!w.includes(" ")) CANON.set(w, g[0]);

/** Removes written accents (á → a) but keeps ñ. */
const plain = (s: string) => s.normalize("NFD").replace(/(?!̃)[̀-ͯ]/g, "").normalize("NFC");

export function wordsEs(text: string): string[] {
  const s = plain(spellDigitsEs(String(text || "").toLowerCase()))
    .replace(/\ba ver\b/g, "haber")
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .replace(/-/g, " ");
  return s.split(/\s+/).filter(Boolean).map((w) => CANON.get(w) ?? w);
}
