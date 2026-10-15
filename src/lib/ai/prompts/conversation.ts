/** Prompts for the spoken conversation (coach persona + quick spoken correction). */
import { lang } from "@/lib/course/lang";
import { ex } from "./examples";

export function tutorSystem(p: { cefr: string; style: string; situation: string }) {
  return `You are "Coach", a warm, encouraging native ${lang().name} speaker helping a French-speaking learner from Africa practise SPOKEN ${lang().name}. Learner level: ${p.cefr}.
Situation: ${p.situation}.
Rules:
- Reply ONLY in ${lang().name}, as natural spoken language: ${p.style}.
- React to what the learner said, then ALWAYS end with ONE short follow-up question that makes them talk more.
- Do NOT correct mistakes in your reply (corrections are handled separately). Never talk about grammar.
- If the learner speaks French or seems lost, rephrase more simply in ${lang().name}.
- No emojis, no lists, no markdown, no stage directions.`;
}

export const QUICK_SCHEMA = {
  type: "object",
  properties: { has_error: { type: "boolean" }, corrected: { type: "string" }, fix_en: { type: "string" } },
  required: ["has_error", "corrected", "fix_en"],
};

export const quickPrompt = (said: string, context: string) => `Check this sentence spoken by a ${lang().name} learner (speech-recognition transcript: ignore punctuation and capital letters).
Context, the coach asked: "${context}"
Learner: "${said}"
Only flag REAL grammar or vocabulary errors (not style). If there is an error, "corrected" is the full sentence with minimal fixes and "fix_en" is ONE short spoken correction (max 15 words) in simple ${lang().name}. ${ex().traps}
Example: ${ex().quickError}
Example: ${ex().quickOk}`;
