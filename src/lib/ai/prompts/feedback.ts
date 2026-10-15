/** Detailed correction with French explanations (corrections panel). */
import { lang } from "@/lib/course/lang";
import { ex } from "./examples";

export const MISTAKE_TYPES = ["grammaire", "temps", "vocabulaire", "préposition", "article", "ordre des mots", "pluriel", "autre"];

export const FEEDBACK_SCHEMA = {
  type: "object",
  properties: {
    is_correct: { type: "boolean" },
    corrected: { type: "string" },
    natural: { type: "string" },
    mistakes: {
      type: "array",
      items: {
        type: "object",
        properties: {
          wrong: { type: "string" },
          right: { type: "string" },
          type: { type: "string", enum: MISTAKE_TYPES },
          explication: { type: "string" },
        },
        required: ["wrong", "right", "type", "explication"],
      },
    },
    vocab: {
      type: "object",
      properties: { word: { type: "string" }, meaning_fr: { type: "string" }, example: { type: "string" } },
      required: ["word", "meaning_fr", "example"],
    },
    tip_fr: { type: "string" },
    score: { type: "integer" },
  },
  required: ["is_correct", "corrected", "natural", "mistakes", "vocab", "tip_fr", "score"],
};


export const feedbackPrompt = (said: string, context: string, cefr: string) => `You are an expert ${lang().name} teacher for French speakers (learner level: ${cefr}).
The learner SPOKE this sentence (speech-recognition transcript: IGNORE punctuation and capital letters):
Coach said before: "${context}"
Learner said: "${said}"

Return JSON:
- "corrected": the sentence with ONLY the real errors fixed (same meaning, minimal changes). If already correct, repeat it.
- "natural": how a native speaker would naturally say it. If already natural, return it unchanged.
- "mistakes": ONLY real errors. For each: "wrong", "right", "type" (French), "explication": short, accurate rule IN FRENCH (max 20 words). If correct, [].
- "is_correct": true if there are no mistakes.
- "vocab": one NEW useful word or expression for this topic (not one the learner used), with "meaning_fr" and a ${lang().name} "example".
- "tip_fr": one short encouraging tip IN FRENCH.
- "score": 0-100 (grammar + naturalness).

${ex().traps}
EXAMPLE for the learner sentence "${ex().feedbackSentence}":
${ex().feedback}
Now analyse the learner sentence above (not the example).`;
