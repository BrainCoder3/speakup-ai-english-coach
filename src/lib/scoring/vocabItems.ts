/**
 * Turns the unit vocabulary into "write it in Spanish" items.
 * "el padre / la madre" ↔ "le père / la mère" becomes two items; "el móvil / el celular" ↔ "le portable"
 * accepts both; "simpático/a" accepts simpático, simpática; "el / la médico/a" accepts el médico, la médica.
 */
import type { VocabGroup } from "@/data/learnTypes";

export interface VocabItem {
  fr: string;
  answers: string[];
  /** Shown after answering. */
  display: string;
}

const noParens = (s: string) => s.replace(/\s*\([^)]*\)/g, "").trim();
const pairSplit = (s: string) => noParens(s).split(/\s*(?:≠| \/ )\s*/).map((x) => x.trim()).filter(Boolean);

/** "médico/a" → { m: "médico", f: "médica" } ; "cantante" → same word twice. */
function genders(word: string): { m: string; f: string } {
  const g = word.match(/^(.*?)(o|or|ón|án|és)\/(a|as)$/);
  if (!g) return { m: word, f: word };
  const [, stem, end, f] = g;
  const unaccented = end.replace("ó", "o").replace("á", "a").replace("é", "e");
  return { m: stem + end, f: end === "o" ? stem + f : stem + unaccented + f };
}

function variants(es: string): string[] {
  const base = noParens(es);
  const art = base.match(/^(el|los) \/ (la|las) (.+)$/i);
  if (art) {
    const g = genders(art[3]);
    return [`${art[1]} ${g.m}`, `${art[2]} ${g.f}`];
  }
  const g = genders(base);
  return [...new Set([base, g.m, g.f])];
}

export function vocabItems(groups: VocabGroup[]): VocabItem[] {
  const items: VocabItem[] = [];
  for (const g of groups) {
    for (const w of g.words) {
      const es = pairSplit(w.es), fr = pairSplit(w.fr);
      const articleChoice = /^(el|los) \/ (la|las) /i.test(noParens(w.es));
      if (!articleChoice && es.length > 1 && es.length === fr.length) {
        es.forEach((e, k) => items.push({ fr: fr[k], answers: variants(e), display: e }));
      } else {
        const answers = articleChoice ? variants(w.es) : es.flatMap(variants);
        items.push({ fr: w.fr, answers: [...new Set(answers)], display: w.es });
      }
    }
  }
  return items;
}
