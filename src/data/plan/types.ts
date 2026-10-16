/** The 30-day intensive English programme (B1 → towards C1). */

export interface PlanExercise {
  /** Sentence with "___" for the missing words. */
  s: string;
  /** Accepted answers (contractions written both ways when relevant). */
  a: string[];
  why: string;
}

export interface PlanWord {
  en: string;
  fr: string;
  ex: string;
}

export interface PlanDay {
  day: number;
  /** Short title of the day's grammar focus. */
  title: string;
  level: "B1" | "B1+" | "B2" | "B2+" | "C1";
  grammar: {
    /** French explanation (may contain <b>). */
    explain: string[];
    examples: { en: string; fr: string }[];
    exercises: PlanExercise[];
  };
  /** 12 words / phrasal verbs / collocations on the day's topic. */
  topic: string;
  vocab: PlanWord[];
  /** Natural-speed sentences to shadow. */
  shadow: string[];
  speak: { prompt: string; minWords: number };
  write: { prompt: string; minWords: number };
  /** Index in INPUTS: today's real-world listening. */
  input: number;
}
