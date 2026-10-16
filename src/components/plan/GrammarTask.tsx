"use client";
/** Today's grammar: French explanation, spoken examples, then typed exercises (strict). */
import { useMemo } from "react";
import { CONFIG } from "@/lib/config";
import { markTask } from "@/lib/plan/progress";
import { speak } from "@/lib/speech/tts";
import type { PlanDay } from "@/data/plan/types";
import { Icon } from "@/components/ui/Icon";
import { AnswerCard, spellingCheck } from "@/components/write/AnswerCard";
import { QueueStep } from "@/components/write/QueueStep";

/** "do / want" ↔ "do want": several blanks are typed in order, separated by spaces. */
const blanks = (a: string) => a.replace(/\s*\/\s*/g, " ");

export function GrammarTask({ day }: { day: PlanDay }) {
  const items = useMemo(() => day.grammar.exercises.map((e, i) => ({ ...e, key: String(i) })), [day]);
  return (
    <>
      <section className="theory card">
        {day.grammar.explain.map((e, k) => <p key={k} dangerouslySetInnerHTML={{ __html: e }} />)}
        <ul className="texamples">
          {day.grammar.examples.map((x) => (
            <li key={x.en}>
              <button className="btn ghost" onClick={() => speak(x.en)} aria-label={`Écouter : ${x.en}`}><Icon name="play" /></button>
              <span><b>{x.en}</b><small>{x.fr}</small></span>
            </li>
          ))}
        </ul>
      </section>
      <QueueStep
        title="✍️ Exercices"
        intro={<>Complète chaque phrase. S&apos;il y a plusieurs trous, écris les mots <b>dans l&apos;ordre</b>, séparés par un espace.</>}
        items={items}
        pass={CONFIG.pass.exercises}
        onPassed={(score) => markTask(day.day, "grammar", score)}
        render={(e, next) => {
          const parts = e.s.split("___");
          return (
            <AnswerCard
              prompt={<p className="drill-sentence">{parts.map((p, k) => <span key={k}>{p}{k < parts.length - 1 && <span className="blank">____</span>}</span>)}</p>}
              placeholder="Le ou les mots qui manquent…"
              check={(t) => spellingCheck(blanks(t), e.a.map(blanks), e.why)}
              onNext={next}
            />
          );
        }}
      />
    </>
  );
}
