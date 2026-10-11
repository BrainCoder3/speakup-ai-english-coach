"use client";
/** Step 2 — answer each question out loud with ≥ CONFIG.pass.answer (any grammar slip fails). */
import { useState } from "react";
import { CONFIG } from "@/lib/config";
import { itemScore, stepAverage } from "@/lib/progress/rules";
import type { Level } from "@/data/types";
import { Icon } from "@/components/ui/Icon";
import { Celebrate, Dots } from "./Celebrate";
import { completeStep, type Celebration } from "./completion";
import { QuestionCard } from "./QuestionCard";

const PASS = CONFIG.pass.answer;

export function AnswerStep({ level }: { level: Level }) {
  const items = level.questions;
  const ok = (i: number) => itemScore(level.id, "answer", i) >= PASS;
  const firstTodo = () => Math.max(0, items.findIndex((_, i) => !ok(i)));
  const [i, setI] = useState(firstTodo);
  const [passed, setPassed] = useState(false);
  const [done, setDone] = useState<Celebration | null>(null);

  if (done) return <Celebrate c={done} />;
  const allOk = items.every((_, k) => ok(k));
  const next = () => {
    if (allOk) return setDone(completeStep(level, "answer", stepAverage(level.id, "answer", items.length)));
    setI(firstTodo());
    setPassed(false);
  };

  return (
    <>
      <div className="stephead">
        <div>
          <h2>🎤 Réponds à l&apos;oral</h2>
          <p>
            Réponds avec une phrase complète. L&apos;IA note grammaire + pertinence : il faut <b>{PASS}/100</b> à chaque
            question, et <b>la moindre faute oblige à recommencer</b>.
          </p>
        </div>
      </div>
      <Dots count={items.length} current={i} isOk={ok} />
      <div className="zone">
        <QuestionCard key={i} level={level} index={i} item={items[i]} onPassed={() => setPassed(true)} />
        {passed && (
          <button className="btn primary next" onClick={next}>
            <Icon name="arrow" />{allOk ? "Valider l'épreuve" : "Question suivante"}
          </button>
        )}
      </div>
    </>
  );
}
