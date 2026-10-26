/** Prompts for graded answers and helper tools (suggestions, translation). */
import { lang } from "@/lib/course/lang";
import { ex } from "./examples";

export const ANSWER_SCHEMA = {
  type: "object",
  properties: {
    score: { type: "integer" },
    relevant: { type: "boolean" },
    corrected: { type: "string" },
    feedback_fr: { type: "string" },
    fix_en: { type: "string" },
  },
  required: ["score", "relevant", "corrected", "feedback_fr", "fix_en"],
};

export const answerPrompt = (p: { question: string; said: string; cefr: string; target: string }) => `You are a kind and encouraging ${lang().name} teacher (the learner is a beginner: accept simple, imperfect sentences). Level expected: ${p.cefr}. Lesson focus: ${p.target}.
Question asked: "${p.question}"
Learner's spoken answer (speech-recognition transcript, ignore punctuation/capitals): "${p.said}"

Grade it and return JSON:
- "score" 0-100: 40% grammar accuracy, 30% answers the question, 30% complete natural sentence at the expected level. One-word or off-topic answers score below 50.
- "relevant": does it answer the question?
- "corrected": the learner's answer rewritten correctly (keep their idea; if empty or off-topic, write a good model answer).
- "feedback_fr": 1-2 short sentences IN FRENCH: what was good and what to fix.
- "fix_en": one short spoken correction in simple ${lang().name} (max 15 words), or a short praise in ${lang().name} if perfect.
${ex().traps}
Example: ${ex().answer}`;

export const SUGGEST_SCHEMA = {
  type: "object",
  properties: { answers: { type: "array", items: { type: "object", properties: { en: { type: "string" }, fr: { type: "string" } }, required: ["en", "fr"] } } },
  required: ["answers"],
};
export const suggestPrompt = (question: string, cefr: string) =>
  `A ${lang().name} learner (level ${cefr}) must answer: "${question}". Give 3 short, natural possible answers at their level, each with a French translation.`;

export const TRANSLATE_SCHEMA = {
  type: "object",
  properties: { en: { type: "string" }, alternatives: { type: "array", items: { type: "string" } }, note_fr: { type: "string" } },
  required: ["en", "alternatives", "note_fr"],
};
export const translatePrompt = (fr: string, cefr: string) =>
  `Translate this French into natural spoken ${lang().name} for a ${cefr} learner: "${fr}". Give the best translation, 2 alternatives, and one short usage note in French.`;
