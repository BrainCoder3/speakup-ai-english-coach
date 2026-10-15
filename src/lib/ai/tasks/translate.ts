/**
 * Checks a French → Spanish translation. Exact match with a reference = right at once.
 * Otherwise the model rewrites the learner's sentence into a correct translation, changing as
 * little as possible: unchanged means another correct wording; changed means a mistake.
 */
import { chatJSON } from "../client";
import { EXPLAIN_SCHEMA, explainPrompt } from "../prompts/speaking";
import { ex } from "../prompts/examples";
import { accentHint, checkSpelling, clean, plain } from "@/lib/scoring/spelling";

export interface TranslationCheck {
  right: boolean;
  expected: string;
  why: string;
}

const FIX = { type: "object", properties: { fixed: { type: "string" } }, required: ["fixed"] };

const prompt = (fr: string, refs: string[], typed: string) => `You are a strict Spanish teacher for French speakers (A1).
French sentence: "${fr}"
Model translations: ${refs.map((r) => `"${r}"`).join(" / ")}
The learner WROTE: "${typed}"
Rewrite the learner's sentence into a correct Spanish translation of the French sentence, changing as FEW words as possible. Any natural wording with the SAME MEANING is correct (e.g. "soy de Senegal" for "je suis sénégalais", adding or omitting the subject pronoun): keep it. Only fix real mistakes: wrong verbs or persons, agreement, articles, prepositions, missing or wrong words, spelling and written accents.
If it is already correct, copy it exactly.
${ex().traps}
Example: French "J'ai vingt ans", learner "soy veinte anos" -> {"fixed":"tengo veinte años"}`;

/** Gives the model's sentence the learner's capital letter and final punctuation. */
function shapeLike(fixed: string, typed: string): string {
  const t = typed.trim();
  let out = /^[¿¡]?[A-ZÁÉÍÓÚÑ]/.test(t) ? fixed.replace(/^([¿¡]?)(\p{L})/u, (_, p, c) => p + c.toUpperCase()) : fixed;
  const end = t.match(/[.!?]$/)?.[0];
  if (end && !/[.!?]$/.test(out)) out += end;
  return out;
}

export async function checkTranslation(fr: string, refs: string[], typed: string): Promise<TranslationCheck> {
  const v = checkSpelling(typed, refs);
  if (v.kind === "right") return { right: true, expected: v.expected, why: "" };
  if (v.kind === "accent") return { right: false, expected: v.expected, why: accentHint(typed, v.expected) };

  const r = await chatJSON<{ fixed: string }>(prompt(fr, refs, typed), FIX, { temperature: 0, maxTokens: 160 });
  const fixed = shapeLike(r.fixed.trim() || refs[0], typed);
  if (clean(fixed) === clean(typed)) return { right: true, expected: typed.trim(), why: `Autre bonne traduction : « ${refs[0]} ».` };
  if (plain(fixed) === plain(typed)) return { right: false, expected: fixed, why: accentHint(typed, fixed) };
  const e = await chatJSON<{ explication: string }>(explainPrompt(typed, fixed), EXPLAIN_SCHEMA, { temperature: 0.1, maxTokens: 90 });
  return { right: false, expected: fixed, why: `${e.explication.trim()} (Modèle : « ${refs[0]} ».)` };
}
