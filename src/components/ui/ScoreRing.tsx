import type { CSSProperties } from "react";

/** Circular score gauge, coloured by distance to the pass mark. */
export function ScoreRing({ score, pass }: { score: number; pass: number }) {
  const tone = score >= pass ? "good" : score >= pass - 20 ? "mid" : "low";
  return (
    <div className={`ring ${tone}`} style={{ "--p": score } as CSSProperties}>
      <b>{score}</b>
    </div>
  );
}
