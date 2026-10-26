"use client";
/** Step 4 — speak at length, get corrected, fix it out loud, speak again. */
import { useState } from "react";
import { CONFIG } from "@/lib/config";
import { itemScore, stepAverage } from "@/lib/progress/rules";
import { SPEAKING } from "@/data/speaking";
import type { Level } from "@/data/types";
import { Celebrate, Dots } from "@/components/lesson/Celebrate";
import { completeStep, type Celebration } from "@/components/lesson/completion";
import { Icon } from "@/components/ui/Icon";
import { TopicCard } from "./TopicCard";

const PASS = CONFIG.pass.speak;

export function SpeakStep({ level }: { level: Level }) {
  const topics = SPEAKING[level.id] ?? [];
  const ok = (i: number) => itemScore(level.id, "speak", i) >= PASS;
  const firstTodo = () => Math.max(0, topics.findIndex((_, i) => !ok(i)));
  const [i, setI] = useState(firstTodo);
  const [done, setDone] = useState<Celebration | null>(null);

  if (done) return <Celebrate c={done} />;
  if (!topics.length) return <p className="muted">Pas de sujet pour ce niveau.</p>;
  const allOk = topics.every((_, k) => ok(k));
  const next = () => {
    if (allOk) return setDone(completeStep(level, "speak", stepAverage(level.id, "speak", topics.length)));
    setI(firstTodo());
  };

  return (
    <>
      <div className="stephead">
        <div>
          <h2>🗣️ Parle longtemps</h2>
          <p>
            Parle environ <b>une minute</b> en plaçant <b>3 expressions</b> de la liste. Quand tu as fini, <b>appuie de
            nouveau sur le bouton</b>. Le prof corrige chaque phrase ; tu répètes les bonnes versions (3 essais maximum
            chacune), et le sujet est validé avec <b>{PASS}/100</b>. Pas de panique si tu bloques : tu peux toujours continuer.
          </p>
        </div>
      </div>
      <Dots count={topics.length} current={i} isOk={ok} onPick={setI} />
      <TopicCard key={i} level={level} index={i} topic={topics[i]} />
      {ok(i) && (
        <button className="btn primary next" onClick={next}>
          <Icon name="arrow" />{allOk ? "Valider l'épreuve" : "Sujet suivant"}
        </button>
      )}
    </>
  );
}
