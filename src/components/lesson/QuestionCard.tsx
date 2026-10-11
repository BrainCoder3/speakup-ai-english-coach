"use client";
/** One spoken question: listen, answer, get graded; retry until it passes. */
import { useEffect, useState } from "react";
import { CONFIG } from "@/lib/config";
import { speak } from "@/lib/speech/tts";
import { useListening } from "@/lib/speech/useListening";
import type { Level, Question } from "@/data/types";
import { Drill } from "@/components/drill/Drill";
import { DiffText } from "@/components/ui/DiffText";
import { Icon, Typing } from "@/components/ui/Icon";
import { ScoreRing } from "@/components/ui/ScoreRing";
import { useAnswer } from "./useAnswer";

interface Props {
  level: Level;
  index: number;
  item: Question;
  onPassed: () => void;
}

export function QuestionCard({ level, index, item, onPassed }: Props) {
  const { state: s, answer, acceptFallback } = useAnswer(level, index, item);
  const recording = useListening();
  const [hint, setHint] = useState(false);
  const [example, setExample] = useState(false);
  const pass = CONFIG.pass.answer;
  const g = s.grade;
  const ok = !!g && g.score >= pass;

  useEffect(() => {
    speak(item.q);
  }, [item.q]);
  useEffect(() => {
    if (ok) onPassed();
  }, [ok]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="qcard">
      <p className="counter">Question {index + 1} / {level.questions.length}</p>
      <div className="question">{item.q}</div>
      <div className="qctrls">
        <button className="btn" onClick={() => speak(item.q)}><Icon name="play" />Réécouter</button>
        <button className="btn" onClick={() => setHint(true)}><Icon name="bulb" />Indice</button>
        <button className="btn" onClick={() => { setExample(true); speak(item.example); }}><Icon name="help" />Exemple de réponse</button>
        <button className={`btn mic-btn big ${recording ? "rec" : ""}`} disabled={s.grading} onClick={answer}>
          <Icon name="mic" />{recording ? "J'écoute…" : "Répondre"}
        </button>
      </div>
      {hint && <div className="qhint">{item.hint}</div>}
      {example && <div className="qexample"><b>{item.example}</b><br /><small>Inspire-toi de l&apos;idée, mais réponds avec tes propres mots.</small></div>}
      <div className="live">{s.live}</div>
      {s.error && <p className="warn">{s.error}</p>}
      {s.grading && <p className="muted"><Typing /> Correction en cours…</p>}
      {g && !s.grading && (
        <div className={`result ${ok ? "good" : "bad"}`}>
          <ScoreRing score={g.score} pass={pass} />
          <div className="rbody">
            <div className="label">Tu as dit → correction</div>
            <DiffText from={s.said} to={g.corrected} />
            <p className="fbfr">{g.feedback_fr}</p>
            {!ok && <p className="warn">Objectif {pass}/100 : corrige-toi et réessaie !{s.fails >= CONFIG.answerFallbackAfter ? " Ou répète la bonne réponse ci-dessous pour valider." : ""}</p>}
          </div>
        </div>
      )}
      {g && !ok && s.fails >= CONFIG.answerFallbackAfter && (
        <Drill key={g.corrected} target={g.corrected} pass={CONFIG.pass.drill} onDone={(r) => { if (r.passed) { acceptFallback(); onPassed(); } }} />
      )}
    </div>
  );
}
