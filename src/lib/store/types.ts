/** Persisted learner data. */
import type { StepId } from "@/data/types";
import type { FreeLevel } from "@/data/scenarios";
import type { CourseId } from "@/lib/course/lang";
import type { FluencyRun, PlanState, TrainCard } from "./extraTypes";

export type { FluencyRun, PlanState, TrainCard };

export interface Settings {
  /** Language being learnt. */
  course: CourseId;
  voice: string | null;
  rate: number;
  handsfree: boolean;
  showText: boolean;
  allowTyping: boolean;
  freeLevel: FreeLevel;
  freeScenario: string;
}

export interface StepProgress {
  scores: Record<number, number>;
  passed: boolean;
  stars: number;
  best?: number;
  attempts?: number;
}

export type LevelProgress = Record<StepId, StepProgress>;

export interface Stats {
  turns: number;
  words: number;
  scores: number[];
  pron: number[];
  mistakes: Record<string, number>;
  days: string[];
  xp: number;
}

export interface VocabWord {
  word: string;
  meaning_fr: string;
  example: string;
  box: number;
  due: string;
}

/** A sentence the learner got wrong, to say correctly again later (spaced repetition). */
export interface ErrorItem {
  said: string;
  corrected: string;
  explication: string;
  box: number;
  due: string;
  /** Language of the sentence: Spanish errors are reviewed in writing. */
  lang?: CourseId;
}

export interface AppData {
  version: 2;
  settings: Settings;
  levels: Record<string, LevelProgress>;
  stats: Stats;
  vocab: VocabWord[];
  errors: ErrorItem[];
  plan: PlanState;
  train: Record<string, TrainCard>;
  fluency: FluencyRun[];
}

export const defaults = (): AppData => ({
  version: 2,
  settings: { course: "en", voice: null, rate: 0.95, handsfree: true, showText: true, allowTyping: false, freeLevel: "intermediate", freeScenario: "free" },
  levels: {},
  stats: { turns: 0, words: 0, scores: [], pron: [], mistakes: {}, days: [], xp: 0 },
  vocab: [],
  plan: { placement: null, final: null, started: null },
  train: {},
  fluency: [],
  errors: [],
});
