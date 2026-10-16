/**
 * Progression rules: levels unlock one after another, steps unlock in order,
 * and nothing is passed until its score reaches CONFIG.pass.
 */
import { store } from "@/lib/store/store";
import type { LevelProgress, StepProgress } from "@/lib/store/types";
import { starsFor } from "@/lib/scoring/pronunciation";
import { ALL_STEP_IDS, COURSES, courseOf, extraStepsOf, levelIndex, stepsOf } from "@/data/courses";
import type { CourseId } from "@/lib/course/lang";
import type { StepId } from "@/data/types";

const emptyStep = (): StepProgress => ({ scores: {}, passed: false, stars: 0 });

/** Progress of a level (created on demand, without notifying listeners). */
export function levelProgress(id: string): LevelProgress {
  const p = (store.get().levels[id] ??= {} as LevelProgress);
  for (const s of ALL_STEP_IDS) p[s] ??= emptyStep(); // older saves had fewer steps
  return p;
}

/** The last required step is the final exam: passing it (after all the others) validates the level. */
export function isLevelPassed(id: string): boolean {
  const steps = stepsOf(id);
  return levelProgress(id)[steps[steps.length - 1].id].passed;
}
/** The first level of a course is open; each next one opens when the previous one is passed. */
export function isLevelUnlocked(levelId: string): boolean {
  const i = levelIndex(levelId);
  return i === 0 || (i > 0 && isLevelPassed(courseOf(levelId).levels[i - 1].id));
}

export function isStepUnlocked(levelId: string, step: StepId): boolean {
  if (!isLevelUnlocked(levelId)) return false;
  const p = levelProgress(levelId);
  if (p[step].passed || extraStepsOf(levelId).some((s) => s.id === step)) return true;
  const order = stepsOf(levelId).map((s) => s.id);
  return order.slice(0, order.indexOf(step)).every((s) => p[s].passed);
}

/** First step of the level that is not passed yet. */
export function nextStep(levelId: string): StepId {
  const p = levelProgress(levelId);
  const steps = stepsOf(levelId);
  return (steps.find((s) => !p[s.id].passed && isStepUnlocked(levelId, s.id)) ?? steps[steps.length - 1]).id;
}

/** Index of the level to work on now in a course. */
export function currentLevelIndex(course: CourseId): number {
  const levels = COURSES[course].levels;
  const i = levels.findIndex((l) => isLevelUnlocked(l.id) && !isLevelPassed(l.id));
  return i === -1 ? levels.length - 1 : i;
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
