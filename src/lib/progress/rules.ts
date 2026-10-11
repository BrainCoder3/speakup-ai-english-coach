/**
 * Progression rules: levels unlock one after another, steps unlock in order,
 * and nothing is passed until its score reaches CONFIG.pass.
 */
import { store } from "@/lib/store/store";
import type { LevelProgress, StepProgress } from "@/lib/store/types";
import { starsFor } from "@/lib/scoring/pronunciation";
import { LEVELS, STEPS, levelIndex } from "@/data/levels";
import type { StepId } from "@/data/types";

const emptyStep = (): StepProgress => ({ scores: {}, passed: false, stars: 0 });

/** Progress of a level (created on demand, without notifying listeners). */
export function levelProgress(id: string): LevelProgress {
  const p = (store.get().levels[id] ??= {} as LevelProgress);
  for (const s of STEPS) p[s.id] ??= emptyStep(); // older saves had fewer steps
  return p;
}

/** The mission is the final exam: passing it (after every other step) validates the level. */
export const isLevelPassed = (id: string) => levelProgress(id).mission.passed;
export const isLevelUnlocked = (index: number) => index === 0 || (index > 0 && isLevelPassed(LEVELS[index - 1].id));

export function isStepUnlocked(levelId: string, step: StepId): boolean {
  if (!isLevelUnlocked(levelIndex(levelId))) return false;
  const p = levelProgress(levelId);
  if (p[step].passed) return true;
  const order = STEPS.map((s) => s.id);
  return order.slice(0, order.indexOf(step)).every((s) => p[s].passed);
}

/** First step of the level that is not passed yet. */
export function nextStep(levelId: string): StepId {
  const p = levelProgress(levelId);
  return (STEPS.find((s) => !p[s.id].passed && isStepUnlocked(levelId, s.id)) ?? STEPS[STEPS.length - 1]).id;
}

/** Index of the level to work on now. */
export function currentLevelIndex(): number {
  const i = LEVELS.findIndex((l, k) => isLevelUnlocked(k) && !isLevelPassed(l.id));
  return i === -1 ? LEVELS.length - 1 : i;
}

/** Keeps the best score of one sentence / question. */
export function recordItem(levelId: string, step: StepId, index: number, score: number) {
  store.update(() => {
    const s = levelProgress(levelId)[step];
    s.scores[index] = Math.max(s.scores[index] ?? 0, score);
  });
}

export const itemScore = (levelId: string, step: StepId, i: number) => levelProgress(levelId)[step].scores[i] ?? 0;

export function stepAverage(levelId: string, step: StepId, count: number): number {
  let sum = 0;
  for (let i = 0; i < count; i++) sum += itemScore(levelId, step, i);
  return Math.round(sum / count);
}

/** Marks a step as passed and awards stars + XP. */
export function passStep(levelId: string, step: StepId, avg: number) {
  const stars = starsFor(avg);
  let first = false;
  store.update((d) => {
    const s = levelProgress(levelId)[step];
    first = !s.passed;
    s.passed = true;
    s.stars = Math.max(s.stars, stars);
    if (step === "mission") s.best = Math.max(s.best ?? 0, avg);
    d.stats.xp += first ? 40 + stars * 20 : 10;
  });
  return { stars, first, levelDone: isLevelPassed(levelId) };
}

export function recordMissionAttempt(levelId: string, avg: number) {
  store.update(() => {
    const m = levelProgress(levelId).mission;
    m.attempts = (m.attempts ?? 0) + 1;
    m.best = Math.max(m.best ?? 0, avg);
  });
}
