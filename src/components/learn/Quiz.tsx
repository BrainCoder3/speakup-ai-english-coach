"use client";
/** Multiple-choice quiz on the unit: instant explanation after each answer, score at the end. */
import { useState } from "react";
import type { QuizQuestion } from "@/data/learnTypes";
import { Icon } from "@/components/ui/Icon";
import { ScoreRing } from "@/components/ui/ScoreRing";

/** Questions and options in a new random order for every attempt. */
function shuffled(qs: QuizQuestion[]): QuizQuestion[] {
  const mix = <T,>(a: T[]) => a.map((v) => [Math.random(), v] as const).sort((x, y) => x[0] - y[0]).map(([, v]) => v);
  return mix(qs).map((q) => {
    const order = mix(q.options.map((_, i) => i));
    return { ...q, options: order.map((i) => q.options[i]), answer: order.indexOf(q.answer) };
  });
}

interface Props {
  questions: QuizQuestion[];
  pass: number;
  onFinish: (score: number) => void;
}

export function Quiz({ questions, pass, onFinish }: Props) {
  const [qs, setQs] = useState(() => shuffled(questions));
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [good, setGood] = useState(0);
  const [missed, setMissed] = useState<QuizQuestion[]>([]);
  const done = i >= qs.length;
  const score = Math.round((good / qs.length) * 100);

  const choose = (k: number) => {
    if (picked !== null) return;
    setPicked(k);
    if (k === qs[i].answer) setGood((g) => g + 1);
    else setMissed((m) => [...m, qs[i]]);
  };
  const next = () => {
    setPicked(null);
    setI((n) => n + 1);
    if (i + 1 >= qs.length) onFinish(Math.round(((good) / qs.length) * 100));
  };
  const retry = () => {
    setQs(shuffled(questions));
    setI(0); setGood(0); setMissed([]); setPicked(null);
  };

  if (done) {
    return (
      <div className={`result ${score >= pass ? "good" : "bad"}`}>
        <ScoreRing score={score} pass={pass} />
        <div className="rbody">
          <p className="fbfr">{good} / {qs.length} bonnes réponses. {score >= pass ? "Leçon comprise !" : `Il faut ${pass} % pour valider : relis la leçon et recommence.`}</p>
          {missed.length > 0 && <ul className="missed">{missed.map((m) => <li key={m.q}><b>{m.q}</b> → {m.options[m.answer]} <small>({m.why})</small></li>)}</ul>}
          {score < pass && <button className="btn primary next" onClick={retry}><Icon name="retry" />Recommencer le quiz</button>}
        </div>
      </div>
    );
  }

  const q = qs[i];
  return (
    <div className="qcard quiz">
      <p className="counter">Question {i + 1} / {qs.length} · {good} bonne(s)</p>
      <p className="question small">{q.q}</p>
      <div className="options">
        {q.options.map((o, k) => {
          const state = picked === null ? "" : k === q.answer ? "right" : k === picked ? "wrong" : "dim";
          return <button key={o} className={`option ${state}`} onClick={() => choose(k)} disabled={picked !== null}>{o}</button>;
        })}
      </div>
      {picked !== null && (
        <>
          <p className={picked === q.answer ? "okmsg" : "warn"}>{picked === q.answer ? "✅ Exact ! " : "❌ "}{q.why}</p>
          <button className="btn primary next" onClick={next}><Icon name="arrow" />{i + 1 < qs.length ? "Question suivante" : "Voir mon score"}</button>
        </>
      )}
    </div>
  );
}
