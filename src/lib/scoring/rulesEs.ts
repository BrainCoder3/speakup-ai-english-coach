/**
 * Deterministic fixes for the most common Spanish A1 mistakes. A small model sometimes
 * explains these errors but fails to rewrite them, so they are corrected by rule first.
 */
const TENER: Record<string, string> = { soy: "tengo", eres: "tienes", es: "tiene", somos: "tenemos", sois: "tenéis", son: "tienen" };
const SER: Record<string, string> = { yo: "soy", tú: "eres", tu: "eres", nosotros: "somos", nosotras: "somos" };
const NUM = String.raw`(?:\d+|[a-záéíóúñ]+(?:\s+y\s+[a-záéíóúñ]+)?)`;
/** A noun phrase that is surely plural (determiner or number first). */
const PLURAL_START = /^(?:los|las|mis|tus|sus|unos|unas|estos|estas|esos|esas|muchos|muchas|dos|tres|cuatro|cinco|varios|varias)\b/i;

interface Rule {
  re: RegExp;
  fix: (m: RegExpExecArray) => string | null;
  why: string;
}

const RULES: Rule[] = [
  {
    re: new RegExp(String.raw`\b(soy|eres|es|somos|sois|son)\s+(${NUM})\s+años\b`, "gi"),
    fix: (m) => `${TENER[m[1].toLowerCase()]} ${m[2]} años`,
    why: "Pour l'âge on utilise tener, pas ser : tengo 25 años.",
  },
  {
    re: /\b(me|te|le|nos|os|les)\s+(gusta|encanta|interesa)\s+(mucho\s+|bastante\s+)?([^,.;]+)/gi,
    fix: (m) => (PLURAL_START.test(m[4].trim()) ? `${m[1]} ${m[2]}n ${m[3] ?? ""}${m[4]}` : null),
    why: "Gustar / encantar / interesar s'accordent avec ce qui plaît : pluriel → gustan, encantan.",
  },
  {
    re: /\bhay\s+(el|la|los|las)\s+/gi,
    fix: (m) => `hay ${({ el: "un", la: "una", los: "unos", las: "unas" } as Record<string, string>)[m[1].toLowerCase()]} `,
    why: "Hay ne s'emploie jamais avec el / la / los / las : hay un, hay una…",
  },
  {
    re: /\b(yo|tú|tu|nosotros|nosotras)\s+es\b/gi,
    fix: (m) => `${m[1]} ${SER[m[1].toLowerCase()]}`,
    why: "Ser se conjugue selon la personne : yo soy, tú eres, nosotros somos.",
  },
];

/** Applies the rules; returns the corrected text and the explanations of what changed. */
export function ruleFixesEs(text: string): { corrected: string; why: string[] } {
  let corrected = text;
  const why: string[] = [];
  for (const r of RULES) {
    corrected = corrected.replace(r.re, (...args) => {
      const m = args.slice(0, -2) as unknown as RegExpExecArray;
      const out = r.fix(m);
      if (out === null || out === m[0]) return m[0];
      if (!why.includes(r.why)) why.push(r.why);
      return out;
    });
  }
  return { corrected, why };
}
