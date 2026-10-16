"use client";
/** Shadowing: listen to a natural-speed sentence and repeat it right away, until it is clear. */
import { useState } from "react";
import { CONFIG } from "@/lib/config";
import { markTask, taskDone } from "@/lib/plan/progress";
import type { PlanDay } from "@/data/plan/types";
import { Drill } from "@/components/drill/Drill";

export function ShadowTask({ day }: { day: PlanDay }) {
  const [i, setI] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const done = taskDone(day.day, "shadow");

  if (i >= day.shadow.length) {
    return <p className="okmsg">✅ Shadowing terminé. Refais-le demain matin à voix haute, sans regarder le texte.</p>;
  }

  return (
    <div className="zone">
      <p className="muted">
        Méthode : écoute la phrase, puis répète-la <b>en même temps</b> ou juste après, en copiant le rythme et l&apos;intonation.
        Il faut <b>{CONFIG.pass.repeat}/100</b> par phrase. {done && "Déjà validé : tu peux t'entraîner encore."}
      </p>
      <p className="counter">Phrase {i + 1} / {day.shadow.length}</p>
      <Drill
        key={i}
        target={day.shadow[i]}
        pass={CONFIG.pass.repeat}
        onDone={(r) => {
          if (!r.passed) return;
          const all = [...scores, r.score];
          setScores(all);
          if (i + 1 === day.shadow.length) markTask(day.day, "shadow", Math.round(all.reduce((a, b) => a + b, 0) / all.length));
          setTimeout(() => setI(i + 1), 1200);
        }}
      />
    </div>
  );
}
