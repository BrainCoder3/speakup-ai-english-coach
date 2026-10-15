/**
 * Review of a long monologue, piece by piece. A small model is far more reliable at
 * REWRITING a sentence correctly than at judging it, so: rewrite → compare in code →
 * explain only what changed. One last call judges the topic, vocabulary and fluency.
 */
import { lang } from "@/lib/course/lang";
import { ex } from "./examples";

export const FIX_SCHEMA = { type: "object", properties: { fixed: { type: "string" } }, required: ["fixed"] };

export const fixPrompt = (piece: string, cefr: string, expressions: string[]) => `You are a ${lang().name} teacher. A learner (level ${cefr}) SAID this piece of a longer speech (speech transcript: no punctuation, numbers may be digits, it may start with "and / y"):
"${piece}"
Rewrite it in correct ${lang().name}, fixing ONLY real grammar or vocabulary mistakes (verb endings and tenses, agreement, articles, prepositions, wrong words). Keep the same words and meaning. Do NOT improve the style. If it is already correct, copy it exactly.${expressions.length ? `\nThe learner had to use expressions like ${expressions.map((e) => `"${e}"`).join(", ")}.` : ""}
${ex().traps}
Examples:
${ex().fix}`;

export const EXPLAIN_SCHEMA = { type: "object", properties: { explication: { type: "string" } }, required: ["explication"] };

export const explainPrompt = (said: string, fixed: string) => `A ${lang().name} learner said: "${said}"
Correct version: "${fixed}"
Explain IN FRENCH, in one simple sentence of max 20 words, the grammar rule behind the correction: name the person / tense / agreement concerned and give the right form. Be accurate, no greeting.
Common rules (use the right one): ${ex().rules}
Example: ${ex().explain}`;

export const SUMMARY_SCHEMA = {
  type: "object",
  properties: { on_topic: { type: "boolean" }, range: { type: "integer" }, feedback_fr: { type: "string" } },
  required: ["on_topic", "range", "feedback_fr"],
};

export const summaryPrompt = (p: { topic: string; said: string; cefr: string; errors: number }) => `A ${lang().name} learner (level ${p.cefr}) spoke about this task: "${p.topic}"
Transcript (no reliable punctuation): """${p.said}"""
They made ${p.errors} grammar mistake(s) (already corrected separately).
Return JSON: "on_topic" = does it answer the task?; "range" 0-100 = vocabulary variety, linking words and details for a ${p.cefr} learner; "feedback_fr" = 2 short sentences IN FRENCH: one real strength, one priority to improve next time.`;
