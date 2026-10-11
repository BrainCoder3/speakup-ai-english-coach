"use client";
/** One comprehension question, answered out loud. */
import { CONFIG } from "@/lib/config";
import { itemScore } from "@/lib/progress/rules";
import { speak } from "@/lib/speech/tts";
import { useListening } from "@/lib/speech/useListening";
import { STOP_HINT } from "@/lib/speech/stopPhrase";
import { Icon, Typing } from "@/components/ui/Icon";
import { ScoreRing } from "@/components/ui/ScoreRing";
import { useListenAnswer } from "./useListenAnswer";

interface Props {
  levelId: string;
  index: number;
  n: number;
  passage: string;
  q: string;
  expected: string;
  /** Show the model answer after several failed tries. */
  revealAfter?: number;
}

export function ListenQuestion({ levelId, index, n, passage, q, expected, revealAfter = 3 }: Props) {
  const { state: s, answer } = useListenAnswer({ levelId, index, passage, question: q, expected });
  const recording = useListening();
  const pass = CONFIG.pass.listen;
  const g = s.grade;
  const done = itemScore(levelId, "listen", index) >= pass;
  const failedTries = g && !g.understood ? s.tries : 0;

  return (
    <div className={`lq ${done ? "ok" : ""}`}>
      <div className="lq-head">
        <span className="lq-n">{done ? "✓" : n}</span>
        <p className="lq-q">{q}</p>
        <button className="btn ghost" onClick={() => speak(q)} aria-label="Écouter la question"><Icon name="play" /></button>
        <button className={`btn mic-btn ${recording ? "rec" : ""}`} disabled={s.grading} onClick={answer}>
          <Icon name="mic" />{recording ? `J'écoute… dis « ${STOP_HINT} »` : done ? "Répondre encore" : "Répondre"}
        </button>
      </div>
      {s.live && <div className="live">{s.live}</div>}
      {s.error && <p className="warn">{s.error}</p>}
      {s.grading && <p className="muted"><Typing /> Vérification…</p>}
      {g && !s.grading && (
        <div className={`result ${g.understood ? "good" : "bad"}`}>
          <ScoreRing score={g.score} pass={pass} />
          <div className="rbody">
            <div className="label">Tu as dit : « {s.said} »</div>
            <p className="fbfr">{g.feedback_fr}</p>
            {g.understood && <p className="muted">Phrase modèle : <b>{g.corrected}</b></p>}
            {!g.understood && <p className="warn">Réécoute le passage et réessaie.</p>}
            {failedTries >= revealAfter && <p className="muted">Réponse attendue : <b>{expected}</b> (redis-la avec tes mots pour valider)</p>}
          </div>
        </div>
      )}
    </div>
  );
}
