/** Shapes of the course content. */
export type StepId = "repeat" | "answer" | "mission";

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
}

export interface Scenario {
  id: string;
  icon: string;
  name: string;
  situation: string;
  opener: string;
}
