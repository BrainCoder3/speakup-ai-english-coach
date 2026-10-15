"use client";
/** Listening comprehension: real speech, many accents, spoken answers. */
import { useState } from "react";
import { CONFIG } from "@/lib/config";
import { itemScore, stepAverage } from "@/lib/progress/rules";
import { stopHint } from "@/lib/speech/stopPhrase";
import { LISTENING, questionCount, questionIndex } from "@/data/listening";
import type { Level } from "@/data/types";
import { Celebrate, Dots } from "@/components/lesson/Celebrate";
import { completeStep, type Celebration } from "@/components/lesson/completion";
import { Icon } from "@/components/ui/Icon";
import { TextCard } from "./TextCard";

const PASS = CONFIG.pass.listen;

export function ListenStep({ level }: { level: Level }) {
  const texts = LISTENING[level.id] ?? [];
  const total = questionCount(texts);
  const qOk = (i: number) => itemScore(level.id, "listen", i) >= PASS;
  const textOk = (k: number) => texts[k].questions.every((_, q) => qOk(questionIndex(texts, k, q)));
  const firstTodo = () => Math.max(0, texts.findIndex((_, k) => !textOk(k)));
  const [k, setK] = useState(firstTodo);
  const [done, setDone] = useState<Celebration | null>(null);

  if (done) return <Celebrate c={done} />;
  if (!texts.length) return <p className="muted">Pas de texte pour ce niveau.</p>;
  const allOk = texts.every((_, n) => textOk(n));

  const next = () => {
    if (allOk) return setDone(completeStep(level, "listen", stepAverage(level.id, "listen", total)));
    setK(firstTodo());
  };

  return (
    <>
      <div className="stephead">
        <div>
          <h2>👂 Compréhension orale</h2>
          <p>
            Écoute de vrais dialogues (accents du monde entier), puis réponds à l&apos;oral. Il faut <b>{PASS}/100</b> à chaque
            question. Quand tu as fini ta réponse, dis <b>« {stopHint()} »</b>.
          </p>
        </div>
      </div>
      <Dots count={texts.length} current={k} isOk={textOk} onPick={setK} />
      <TextCard key={k} levelId={level.id} text={texts[k]} firstIndex={questionIndex(texts, k, 0)} passed={textOk(k)} />
      {textOk(k) && (
        <button className="btn primary next" onClick={next}>
          <Icon name="arrow" />{allOk ? "Valider l'épreuve" : "Texte suivant"}
        </button>
      )}
    </>
  );
}
