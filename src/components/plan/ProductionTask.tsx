"use client";
/**
 * Speaking and writing of the day, reusing the lesson engines (sentence-by-sentence AI review,
 * copy-out of corrections, second attempt). The day is stored as the pseudo-level "planN".
 */
import { planId } from "@/lib/plan/progress";
import type { PlanDay } from "@/data/plan/types";
import type { Level, SpeakingTopic } from "@/data/types";
import { TopicCard } from "@/components/speak/TopicCard";
import { WriteCard } from "@/components/write/WriteCard";

export function ProductionTask({ day, kind }: { day: PlanDay; kind: "speak" | "write" }) {
  const level = { id: planId(day.day), cefr: day.level } as Level;
  const task = kind === "speak" ? day.speak : day.write;
  // The expressions to use are the first 5 of the day's vocabulary.
  const topic: SpeakingTopic = {
    title: kind === "speak" ? "Parle sans t'arrêter" : "Écris ton texte",
    prompt: task.prompt,
    expressions: day.vocab.slice(0, 5).map((v) => ({ en: v.en, fr: v.fr })),
    mustUse: 3,
    minWords: task.minWords,
  };
  return kind === "speak" ? <TopicCard level={level} index={0} topic={topic} /> : <WriteCard level={level} index={0} topic={topic} />;
}
