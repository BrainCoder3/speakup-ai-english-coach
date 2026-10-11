/** Prompts for graded answers and helper tools (suggestions, translation). */

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

export const answerPrompt = (p: { question: string; said: string; cefr: string; target: string }) => `You are a strict but kind English examiner. Level expected: ${p.cefr}. Lesson focus: ${p.target}.
Question asked: "${p.question}"
Learner's spoken answer (speech-recognition transcript, ignore punctuation/capitals): "${p.said}"

Grade it and return JSON:
- "score" 0-100: 40% grammar accuracy, 30% answers the question, 30% complete natural sentence at the expected level. One-word or off-topic answers score below 50.
- "relevant": does it answer the question?
- "corrected": the learner's answer rewritten correctly (keep their idea; if empty or off-topic, write a good model answer).
- "feedback_fr": 1-2 short sentences IN FRENCH: what was good and what to fix.
- "fix_en": one short spoken correction in simple English (max 15 words), or "Great answer!" if perfect.
Example: question "What did you do yesterday?", answer "yesterday I go to work" -> {"score":55,"relevant":true,"corrected":"Yesterday I went to work.","feedback_fr":"Bonne idée, mais il faut le prétérit : go devient went.","fix_en":"Say I went, not I go, because it was yesterday."}`;

export const SUGGEST_SCHEMA = {
  type: "object",
  properties: { answers: { type: "array", items: { type: "object", properties: { en: { type: "string" }, fr: { type: "string" } }, required: ["en", "fr"] } } },
  required: ["answers"],
};
export const suggestPrompt = (question: string, cefr: string) =>
  `An English learner (level ${cefr}) must answer: "${question}". Give 3 short, natural possible answers at their level, each with a French translation.`;

export const TRANSLATE_SCHEMA = {
  type: "object",
  properties: { en: { type: "string" }, alternatives: { type: "array", items: { type: "string" } }, note_fr: { type: "string" } },
  required: ["en", "alternatives", "note_fr"],
};
export const translatePrompt = (fr: string, cefr: string) =>
  `Translate this French into natural spoken English for a ${cefr} learner: "${fr}". Give the best translation, 2 alternatives, and one short usage note in French.`;
