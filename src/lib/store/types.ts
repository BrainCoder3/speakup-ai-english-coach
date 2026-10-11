/** Persisted learner data. */
import type { StepId } from "@/data/types";
import type { FreeLevel } from "@/data/scenarios";

export interface Settings {
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

export interface AppData {
  version: 2;
  settings: Settings;
  levels: Record<string, LevelProgress>;
  stats: Stats;
  vocab: VocabWord[];
}

export const defaults = (): AppData => ({
  version: 2,
  settings: { voice: null, rate: 0.95, handsfree: true, showText: true, allowTyping: false, freeLevel: "intermediate", freeScenario: "free" },
  levels: {},
  stats: { turns: 0, words: 0, scores: [], pron: [], mistakes: {}, days: [], xp: 0 },
  vocab: [],
});
