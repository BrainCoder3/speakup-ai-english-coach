"use client";
/** Vocabulary: the French word is shown, write the Spanish word (article and accents included). */
import { useMemo } from "react";
import { CONFIG } from "@/lib/config";
import { vocabItems } from "@/lib/scoring/vocabItems";
import { ES_LEARN } from "@/data/es";
import type { Level } from "@/data/types";
import { AnswerCard, spellingCheck } from "./AnswerCard";
import { QueueStep } from "./QueueStep";

export function VocabStep({ level }: { level: Level }) {
  const items = useMemo(
    () => vocabItems(ES_LEARN[level.id]?.vocab ?? []).map((v, i) => ({ ...v, key: `${i}-${v.display}` })),
    [level.id],
  );
  return (
    <QueueStep
      level={level}
      step="vocab"
      title="🔤 Vocabulaire"
      intro={<>Écris chaque mot en espagnol, <b>avec son article</b> (el, la…) quand il y en a un, et <b>avec les accents</b>.</>}
      items={items}
      pass={CONFIG.pass.spelling}
      render={(it, next) => (
        <AnswerCard
          prompt={<><span className="counter">En espagnol :</span><span className="afr">{it.fr}</span></>}
          check={(t) => spellingCheck(t, it.answers, it.answers.length > 1 ? `Réponses acceptées : ${it.answers.join(" · ")}.` : "")}
          onNext={next}
        />
      )}
    />
  );
}
