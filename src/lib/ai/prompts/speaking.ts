/**
 * Review of a long monologue: each short piece is checked on its own (reliable with
 * a small model), then one quick call judges the topic, the vocabulary and fluency.
 */

export const PIECE_SCHEMA = {
  type: "object",
  properties: { has_error: { type: "boolean" }, corrected: { type: "string" }, explication: { type: "string" } },
  required: ["has_error", "corrected", "explication"],
};

export const piecePrompt = (piece: string, cefr: string, expressions: string[]) => `You are an English teacher for French speakers (level ${cefr}). This is ONE PIECE of a longer spoken speech (speech transcript: ignore punctuation, capitals, numbers written as digits; it may be an incomplete sentence or start with "and/then", that is fine):
"${piece}"
Is there a real grammar or vocabulary mistake INSIDE these words (verb form, tense, agreement, article, preposition, word order, wrong word)? Style choices, missing punctuation and incomplete sentences are NOT mistakes.${expressions.length ? `\nThe learner had to use expressions like ${expressions.map((e) => `"${e}"`).join(", ")}: if one is used wrongly here, it is a mistake.` : ""}
Return JSON: "has_error"; "corrected" = the same words with ONLY the mistakes fixed (identical if correct); "explication" = the rule IN FRENCH, max 20 words ("" if correct).
Examples: "and I have 25 years old" -> {"has_error":true,"corrected":"and I am 25 years old","explication":"Pour l'âge on utilise be : I am 25 years old."}
"then I live in Paris with my wife" -> {"has_error":false,"corrected":"then I live in Paris with my wife","explication":""}`;

export const SUMMARY_SCHEMA = {
  type: "object",
  properties: { on_topic: { type: "boolean" }, range: { type: "integer" }, feedback_fr: { type: "string" } },
  required: ["on_topic", "range", "feedback_fr"],
};

export const summaryPrompt = (p: { topic: string; said: string; cefr: string; errors: number }) => `An English learner (level ${p.cefr}) spoke about this task: "${p.topic}"
Transcript (no reliable punctuation): """${p.said}"""
They made ${p.errors} grammar mistake(s) (already corrected separately).
Return JSON: "on_topic" = does it answer the task?; "range" 0-100 = vocabulary variety, linking words and details for a ${p.cefr} learner; "feedback_fr" = 2 short sentences IN FRENCH: one real strength, one priority to improve next time.`;
