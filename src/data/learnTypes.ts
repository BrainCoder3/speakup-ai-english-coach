/** "Comprendre la leçon": the theory of a unit, explained in French, then a quiz. */

/** One grammar or communication point. */
export interface TheoryPoint {
  title: string;
  /** French explanations (may contain <b> tags). */
  explain: string[];
  /** Optional table, e.g. a conjugation. */
  table?: { head: string[]; rows: string[][] };
  examples: { es: string; fr: string }[];
}

export interface VocabGroup {
  theme: string;
  words: { es: string; fr: string }[];
}

export interface QuizQuestion {
  q: string;
  options: string[];
  /** Index of the right option. */
  answer: number;
  /** Why it is right, in French. */
  why: string;
}

export interface Learn {
  /** What you will be able to do (the book's unit goal). */
  goal: string;
  can: string[];
  theory: TheoryPoint[];
  vocab: VocabGroup[];
  phonetics: { title: string; explain: string; examples: string[] };
  culture: string;
  quiz: QuizQuestion[];
}
