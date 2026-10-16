/**
 * Progress of the 30-day programme. Each day is stored as a pseudo-level "planN" so the
 * existing exercises (speaking, writing…) record their scores exactly like in the lessons.
 */
import { CONFIG } from "@/lib/config";
import { itemScore, recordItem } from "@/lib/progress/rules";
import { store } from "@/lib/store/store";
import { today } from "@/lib/progress/stats";
import type { StepId } from "@/data/types";

export type PlanTask = "review" | "grammar" | "vocab" | "shadow" | "speak" | "input" | "write";

export const TASKS: { id: PlanTask; icon: string; label: string; minutes: number; core: boolean }[] = [
  { id: "review", icon: "🔁", label: "Révision espacée (erreurs + carnet)", minutes: 15, core: false },
  { id: "grammar", icon: "📚", label: "Grammaire du jour", minutes: 25, core: true },
  { id: "vocab", icon: "🔤", label: "Vocabulaire C1 (12 expressions)", minutes: 20, core: true },
  { id: "shadow", icon: "🎧", label: "Shadowing (répéter un natif)", minutes: 15, core: true },
  { id: "speak", icon: "🗣️", label: "Parler 2 à 4 minutes", minutes: 25, core: true },
  { id: "input", icon: "📻", label: "Écoute réelle (podcast, TED…)", minutes: 45, core: false },
  { id: "write", icon: "✍️", label: "Écriture corrigée", minutes: 30, core: true },
];

/** Where each task stores its score in the pseudo-level. */
const STEP_OF: Record<PlanTask, StepId> = {
  review: "learn", grammar: "drill", vocab: "vocab", shadow: "repeat", speak: "speak", input: "listen", write: "write",
};
const PASS_OF: Partial<Record<PlanTask, number>> = { speak: CONFIG.pass.speak, write: CONFIG.pass.writing };

export const planId = (day: number) => `plan${day}`;

export const taskScore = (day: number, t: PlanTask) => itemScore(planId(day), STEP_OF[t], 0);
export const taskDone = (day: number, t: PlanTask) => taskScore(day, t) >= (PASS_OF[t] ?? 1);

export function markTask(day: number, t: PlanTask, score = 100) {
  recordItem(planId(day), STEP_OF[t], 0, score);
  if (!store.get().plan.started) store.update((d) => void (d.plan.started = today()));
}

export const dayDone = (day: number) => TASKS.filter((t) => t.core).every((t) => taskDone(day, t.id));
export const dayUnlocked = (day: number) => day === 1 || dayDone(day - 1);
export const doneCount = (day: number) => TASKS.filter((t) => taskDone(day, t.id)).length;

/** First day not finished yet (the one to work on today). */
export function currentDay(total = 30): number {
  for (let d = 1; d <= total; d++) if (!dayDone(d)) return d;
  return total;
}

export function saveTest(kind: "placement" | "final", score: number) {
  store.update((d) => {
    d.plan[kind] = score;
    d.plan.started ??= today();
  });
}

export const planState = () => store.get().plan;
