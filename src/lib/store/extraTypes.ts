/** Persisted state of the 30-day programme and of targeted training. */

/** 30-day intensive English programme: placement and final test scores (0-100). */
export interface PlanState {
  placement: number | null;
  final: number | null;
  started: string | null;
}

/** Spaced-repetition state of one training item (targeted, interleaved practice). */
export interface TrainCard {
  box: number;
  due: string;
  seen: number;
  miss: number;
}

/** One 4/3/2 fluency session: words per minute of each round. */
export interface FluencyRun {
  date: string;
  topic: string;
  wpm: number[];
}
