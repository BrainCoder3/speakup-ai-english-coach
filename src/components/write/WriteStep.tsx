"use client";
/** Final written exam of a unit: compositions corrected sentence by sentence. */
import { useState } from "react";
import { CONFIG } from "@/lib/config";
import { itemScore, stepAverage } from "@/lib/progress/rules";
import { SPEAKING } from "@/data/speaking";
import type { Level } from "@/data/types";
import { Celebrate, Dots } from "@/components/lesson/Celebrate";
import { completeStep, type Celebration } from "@/components/lesson/completion";
import { Icon } from "@/components/ui/Icon";
import { WriteCard } from "./WriteCard";

const PASS = CONFIG.pass.writing;

export function WriteStep({ level }: { level: Level }) {
  const topics = SPEAKING[level.id] ?? [];
  const ok = (i: number) => itemScore(level.id, "write", i) >= PASS;
  const firstTodo = () => Math.max(0, topics.findIndex((_, i) => !ok(i)));
  const [i, setI] = useState(firstTodo);
  const [done, setDone] = useState<Celebration | null>(null);

  if (done) return <Celebrate c={done} />;
  if (!topics.length) return <p className="muted">Pas de sujet pour cette unité.</p>;
  const allOk = topics.every((_, k) => ok(k));
  const next = () => {
    if (allOk) return setDone(completeStep(level, "write", stepAverage(level.id, "write", topics.length)));
    setI(firstTodo());
  };

  return (
    <>
      <div className="stephead">
        <div>
          <h2>📝 Rédaction</h2>
          <p>
            Écris un petit texte en plaçant les <b>expressions imposées</b>. Le prof corrige <b>chaque phrase</b> avec la règle,
            tu <b>recopies les phrases corrigées</b>, puis tu <b>réécris ton texte</b>. Validation au 2ᵉ brouillon avec
            <b> {PASS}/100</b>, et seulement quand toutes tes erreurs sont corrigées.
          </p>
        </div>
      </div>
      <Dots count={topics.length} current={i} isOk={ok} onPick={setI} />
      <WriteCard key={i} level={level} index={i} topic={topics[i]} />
      {ok(i) && (
        <button className="btn primary next" onClick={next}>
          <Icon name="arrow" />{allOk ? "Valider l'unité" : "Sujet suivant"}
        </button>
      )}
    </>
  );
}
