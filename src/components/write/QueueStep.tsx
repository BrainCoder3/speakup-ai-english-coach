"use client";
/** Shared frame of the written steps: progress, one question at a time, score and validation. */
import { useState, type ReactNode } from "react";
import type { Level, StepId } from "@/data/types";
import { Celebrate } from "@/components/lesson/Celebrate";
import { completeStep, type Celebration } from "@/components/lesson/completion";
import { Icon } from "@/components/ui/Icon";
import { ScoreRing } from "@/components/ui/ScoreRing";
import { useQueue, type QItem } from "./useQueue";

interface Props<T extends QItem> {
  level?: Level;
  step?: StepId;
  /** Called instead of the level validation (used by the 30-day programme). */
  onPassed?: (score: number) => void;
  title: string;
  intro: ReactNode;
  items: T[];
  pass: number;
  render: (item: T, next: (right: boolean) => void) => ReactNode;
}

export function QueueStep<T extends QItem>({ level, step, onPassed, title, intro, items, pass, render }: Props<T>) {
  const q = useQueue(items);
  const [done, setDone] = useState<Celebration | null>(null);
  if (done) return <Celebrate c={done} />;

  return (
    <>
      <div className="stephead">
        <div>
          <h2>{title}</h2>
          <p>{intro} Il faut <b>{pass} %</b> de bonnes réponses du premier coup ; les erreurs reviennent jusqu&apos;à ce qu&apos;elles soient justes.</p>
        </div>
      </div>
      <div className="meter">
        <i style={{ transform: `scaleX(${(q.total - q.left) / Math.max(1, q.total)})` }} />
        <span>{q.total - q.left} / {q.total} réussies · {q.missed} à revoir</span>
      </div>
      {q.current && <div key={`${q.current.key}-${q.round}`}>{render(q.current, q.answered)}</div>}
      {q.done && (
        <div className={`result ${q.score >= pass ? "good" : "bad"}`}>
          <ScoreRing score={q.score} pass={pass} />
          <div className="rbody">
            <p className="fbfr">
              {q.score >= pass
                ? `Série terminée : ${q.score} % du premier coup. Bravo !`
                : `Série terminée, mais seulement ${q.score} % du premier coup (il faut ${pass} %). Relis la leçon et recommence.`}
            </p>
            {q.score >= pass ? (
              <button className="btn primary next" onClick={() => (onPassed ? onPassed(q.score) : level && step && setDone(completeStep(level, step, q.score)))}><Icon name="arrow" />Valider l&apos;épreuve</button>
            ) : (
              <button className="btn primary next" onClick={q.restart}><Icon name="retry" />Recommencer la série</button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
