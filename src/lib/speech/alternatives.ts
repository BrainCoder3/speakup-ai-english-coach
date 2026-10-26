/**
 * The recogniser proposes several readings of the same sound. When we know what the learner is
 * supposed to say (repeat drills), the reading closest to it is kept: a clear accent is not punished
 * for the recogniser's first guess.
 */
import { lcsTable, words } from "@/lib/scoring/normalize";

const closeness = (a: string, b: string) => {
  const A = words(a), B = words(b);
  return A.length && B.length ? lcsTable(A, B)[0][0] / Math.max(A.length, B.length) : 0;
};

export function pickAlternative(result: SpeechRecognitionResultLike, expected?: string): { text: string; confidence: number } {
  let best = result[0];
  if (expected) {
    for (let i = 1; i < result.length; i++) {
      if (closeness(result[i].transcript, expected) > closeness(best.transcript, expected)) best = result[i];
    }
  }
  return { text: best.transcript, confidence: best.confidence };
}
