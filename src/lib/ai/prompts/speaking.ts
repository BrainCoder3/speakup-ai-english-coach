/** Correction of a long spoken monologue, sentence by sentence. */

export const SPEECH_SCHEMA = {
  type: "object",
  properties: {
    fixes: {
      type: "array",
      items: {
        type: "object",
        properties: { said: { type: "string" }, corrected: { type: "string" }, explication: { type: "string" } },
        required: ["said", "corrected", "explication"],
      },
    },
    score: { type: "integer" },
    feedback_fr: { type: "string" },
    on_topic: { type: "boolean" },
  },
  required: ["fixes", "score", "feedback_fr", "on_topic"],
};

export const speechPrompt = (p: { topic: string; said: string; cefr: string }) => `You are a strict but kind English teacher for French speakers (learner level: ${p.cefr}).
The learner talked for a while about this task: "${p.topic}"
Speech-recognition transcript (NO reliable punctuation or capitals: ignore them, split it into sentences yourself):
"""${p.said}"""

Return JSON:
- "fixes": every sentence that contains a REAL grammar or vocabulary error (max 6, the most important first). For each: "said" = the learner's sentence as spoken, "corrected" = the same sentence with only the errors fixed, "explication" = the rule IN FRENCH (max 20 words). Do not list correct sentences. Ignore punctuation, capitals and recognition glitches like numbers written as digits.
- "score" 0-100: 50% grammar accuracy, 25% vocabulary range for ${p.cefr}, 25% fluency and organisation (linking words, details).
- "feedback_fr": 2 short sentences IN FRENCH: one strength, one priority to improve.
- "on_topic": does the speech answer the task?
Example item: {"said":"yesterday I go to the market and I buyed some fruits","corrected":"Yesterday I went to the market and I bought some fruit.","explication":"Au passé, go devient went et buy devient bought (verbes irréguliers)."}`;
