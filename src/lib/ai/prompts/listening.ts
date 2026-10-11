/** Grading a spoken answer to a listening-comprehension question. */

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

export const listenPrompt = (p: { passage: string; question: string; expected: string; said: string }) => `You are checking an English learner's LISTENING comprehension.
The learner heard this audio (they did not read it):
"""${p.passage}"""
Question: "${p.question}"
Expected answer (key information): "${p.expected}"
Learner's spoken answer (speech-recognition transcript, ignore punctuation/capitals): "${p.said}"

Return JSON, in this order:
- "learner_fact": the information the learner gave, in 2-6 words (e.g. "by car").
- "expected_fact": the key information of the expected answer, in 2-6 words (e.g. "by bus").
- "same_fact": true ONLY if both facts mean the same thing. Different place, time, person, number or object = false.
- "understood": same as "same_fact" (a wrong fact is never understood, even if the English is perfect; grammar mistakes do not matter here).
- "score" 0-100: 70% correct information, 30% clear English sentence.
- "feedback_fr": 1-2 short sentences IN FRENCH: say if the information is right; if not, say what to listen for (without giving the full answer).
- "corrected": the learner's answer rewritten as one correct English sentence with the right information.
Example 1: question "How does she go to work?", expected "She takes the bus.", answer "she goes to work by car" -> {"learner_fact":"by car","expected_fact":"by bus","same_fact":false,"understood":false,"score":30,"feedback_fr":"Ce n'est pas le bon moyen de transport. Réécoute la fin du passage.","corrected":"She takes the bus to work."}
Example 2: question "What time does she get up?", expected "At half past five.", answer "she get up at five thirty" -> {"learner_fact":"five thirty","expected_fact":"half past five","same_fact":true,"understood":true,"score":85,"feedback_fr":"Bonne information ! Attention : she gets, avec un -s.","corrected":"She gets up at half past five."}`;
