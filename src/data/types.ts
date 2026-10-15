/** Shapes of the course content. */
import type { Accent } from "@/lib/speech/accents";

export type StepId = "learn" | "vocab" | "drill" | "translate" | "write" | "repeat" | "listen" | "answer" | "speak" | "mission";

export interface RepeatItem {
  en: string;
  fr: string;
}

export interface Question {
  q: string;
  hint: string;
  example: string;
}

export interface Mission {
  title: string;
  turns: number;
  brief: string;
  prompt: string;
  opener: string;
}

export interface Level {
  id: string;
  n: number;
  cefr: string;
  title: string;
  subtitle: string;
  /** How the coach should speak at this level. */
  style: string;
  /** Short French notes (may contain <b> tags). */
  lesson: string[];
  repeat: RepeatItem[];
  questions: Question[];
  mission: Mission;
  /** Where this unit is in the textbook (Spanish course). */
  book?: { unit: number; page: number };
}

export interface Scenario {
  id: string;
  icon: string;
  name: string;
  situation: string;
  opener: string;
}

/** One speaker's line in a listening text. */
export interface ListeningPart {
  speaker: string;
  accent: Accent;
  /** Picks another voice of the same accent (two different people). */
  voice?: number;
  text: string;
}

/** A listening-comprehension text (monologue, dialogue, voicemail, news…). */
export interface ListeningText {
  title: string;
  kind: string;
  rate?: number;
  parts: ListeningPart[];
  questions: { q: string; answer: string }[];
}

/** A long speaking task: talk about it, get corrected, then talk again. */
export interface SpeakingTopic {
  title: string;
  prompt: string;
  /** Expressions to put in the speech ("…" = your own words). */
  expressions: { en: string; fr: string }[];
  /** How many of them must be used. */
  mustUse: number;
  minWords: number;
}
