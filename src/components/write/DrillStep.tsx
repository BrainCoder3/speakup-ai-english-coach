"use client";
/** Exercises: complete each sentence (conjugation, article, preposition…) and learn the rule. */
import { useMemo } from "react";
import { CONFIG } from "@/lib/config";
import { ES_PRACTICE } from "@/data/es";
import type { Level } from "@/data/types";
import { AnswerCard, spellingCheck } from "./AnswerCard";
import { QueueStep } from "./QueueStep";

export function DrillStep({ level }: { level: Level }) {
  const items = useMemo(() => (ES_PRACTICE[level.id]?.drills ?? []).map((d, i) => ({ ...d, key: String(i) })), [level.id]);
  return (
    <QueueStep
      level={level}
      step="drill"
      title="✍️ Exercices"
      intro={<>Complète chaque phrase avec <b>le mot qui manque</b> (conjugaison, article, préposition…). Chaque réponse est expliquée avec la règle.</>}
      items={items}
      pass={CONFIG.pass.exercises}
      render={(d, next) => {
        const [before, after] = d.s.split("___");
        return (
          <AnswerCard
            prompt={<p className="drill-sentence">{before}<span className="blank">____</span>{after}</p>}
            hint={d.hint}
            placeholder="Le mot qui manque…"
            check={(t) => spellingCheck(t, d.a, d.why)}
            onNext={next}
          />
        );
      }}
    />
  );
}
