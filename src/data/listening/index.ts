import type { ListeningText } from "../types";
import { listening1 } from "./l1";
import { listening2 } from "./l2";
import { listening3 } from "./l3";
import { listening4 } from "./l4";
import { listening5 } from "./l5";
import { listening6 } from "./l6";
import { listening7 } from "./l7";
import { listening8 } from "./l8";

/** Listening texts per level id. */
export const LISTENING: Record<string, ListeningText[]> = {
  l1: listening1, l2: listening2, l3: listening3, l4: listening4,
  l5: listening5, l6: listening6, l7: listening7, l8: listening8,
};

/** Each question gets one index in the step's score table: text k, question q. */
export const questionIndex = (texts: ListeningText[], k: number, q: number) =>
  texts.slice(0, k).reduce((n, t) => n + t.questions.length, 0) + q;

export const questionCount = (texts: ListeningText[]) => texts.reduce((n, t) => n + t.questions.length, 0);
