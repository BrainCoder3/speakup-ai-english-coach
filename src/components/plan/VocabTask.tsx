"use client";
/** Today's 12 expressions: listen, then write each one from its French meaning; all go to the notebook. */
import { useMemo } from "react";
import { CONFIG } from "@/lib/config";
import { markTask } from "@/lib/plan/progress";
import { speak } from "@/lib/speech/tts";
import { saveWord } from "@/lib/vocab";
import type { PlanDay } from "@/data/plan/types";
import { AnswerCard, spellingCheck } from "@/components/write/AnswerCard";
import { QueueStep } from "@/components/write/QueueStep";

/** "to take after" accepts "take after" too; "a bargain" accepts "bargain". */
const accepted = (en: string) => [...new Set([en, en.replace(/^to\s+/i, ""), en.replace(/^(a|an|the)\s+/i, "")])];

export function VocabTask({ day }: { day: PlanDay }) {
  const items = useMemo(() => day.vocab.map((v, i) => ({ ...v, key: String(i) })), [day]);
  const finish = (score: number) => {
    day.vocab.forEach((v) => saveWord({ word: v.en, meaning_fr: v.fr, example: v.ex }));
    markTask(day.day, "vocab", score);
  };

  return (
    <>
      <section className="card">
        <h3>{day.topic} — écoute et lis d&apos;abord</h3>
        <div className="vwords">
          {day.vocab.map((v) => (
            <button key={v.en} className="vword" onClick={() => speak(`${v.en}. ${v.ex}`)}>
              <b>{v.en}</b><small>{v.fr}</small><i className="vex">{v.ex}</i>
            </button>
          ))}
        </div>
        <p className="muted">Ces expressions iront dans « Mon carnet » et reviendront en révision espacée.</p>
      </section>
      <QueueStep
        title="🔤 Écris-les de mémoire"
        intro={<>Le sens est donné en français : écris l&apos;expression anglaise (le « to » des verbes est facultatif).</>}
        items={items}
        pass={CONFIG.pass.spelling}
        onPassed={finish}
        render={(v, next) => (
          <AnswerCard
            prompt={<><span className="counter">En anglais :</span><span className="afr">{v.fr}</span></>}
            placeholder="L'expression en anglais…"
            check={(t) => spellingCheck(t, accepted(v.en), `Exemple : ${v.ex}`)}
            onNext={next}
          />
        )}
      />
    </>
  );
}
