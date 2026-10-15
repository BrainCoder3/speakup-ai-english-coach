/** Grading a spoken answer to a listening-comprehension question. */
import { lang } from "@/lib/course/lang";
import { ex } from "./examples";

export const LISTEN_SCHEMA = {
  type: "object",
  properties: {
    learner_fact: { type: "string" },
    expected_fact: { type: "string" },
    same_fact: { type: "boolean" },
    understood: { type: "boolean" },
    score: { type: "integer" },
    feedback_fr: { type: "string" },
    corrected: { type: "string" },
  },
  required: ["learner_fact", "expected_fact", "same_fact", "understood", "score", "feedback_fr", "corrected"],
};

export const listenPrompt = (p: { passage: string; question: string; expected: string; said: string }) => `You are checking a ${lang().name} learner's LISTENING comprehension.
The learner heard this audio (they did not read it):
"""${p.passage}"""
Question: "${p.question}"
Expected answer (key information): "${p.expected}"
Learner's spoken answer (speech-recognition transcript, ignore punctuation/capitals): "${p.said}"

Return JSON, in this order:
- "learner_fact": the information the learner gave, in 2-6 words (e.g. "by car").
- "expected_fact": the key information of the expected answer, in 2-6 words (e.g. "by bus").
- "same_fact": true ONLY if both facts mean the same thing. Different place, time, person, number or object = false.
- "understood": same as "same_fact" (a wrong fact is never understood, even if the language is perfect; grammar mistakes do not matter here).
- "score" 0-100: 70% correct information, 30% clear ${lang().name} sentence.
- "feedback_fr": 1-2 short sentences IN FRENCH: say if the information is right; if not, say what to listen for (without giving the full answer).
- "corrected": the learner's answer rewritten as one correct ${lang().name} sentence with the right information.
Example 1: ${ex().listenWrong}
Example 2: ${ex().listenRight}`;
