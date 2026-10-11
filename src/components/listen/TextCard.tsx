"use client";
/** A listening text: play it (accents), answer its questions, then read the transcript. */
import { useState } from "react";
import { ACCENTS } from "@/lib/speech/accents";
import type { ListeningText } from "@/data/types";
import { Icon } from "@/components/ui/Icon";
import { ListenQuestion } from "./ListenQuestion";
import { usePlayer } from "./usePlayer";

interface Props {
  levelId: string;
  text: ListeningText;
  firstIndex: number;
  passed: boolean;
}

export function TextCard({ levelId, text, firstIndex, passed }: Props) {
  const player = usePlayer(text);
  const [showText, setShowText] = useState(false);
  const accents = [...new Set(text.parts.map((p) => p.accent))];
  const passage = text.parts.map((p) => `${p.speaker}: ${p.text}`).join("\n");
  const canRead = passed || player.plays >= 3;

  return (
    <div className="lcard">
      <div className="lcard-head">
        <div>
          <span className="kind">{text.kind}</span>
          <h3>{text.title}</h3>
          <p className="accents">{accents.map((a) => <span key={a} className="accent">{ACCENTS[a].label}</span>)}</p>
        </div>
        <div className="qctrls">
          {player.playing ? (
            <button className="btn" onClick={player.halt}><Icon name="slow" />Stop</button>
          ) : (
            <>
              <button className="btn primary" onClick={() => player.play()}><Icon name="play" />Écouter</button>
              <button className="btn" onClick={() => player.play(true)}><Icon name="slow" />Lentement</button>
            </>
          )}
          <button className="btn" disabled={!canRead} onClick={() => setShowText((v) => !v)} title={canRead ? "" : "Écoute au moins 3 fois avant de lire"}>
            <Icon name="eye" />{showText ? "Cacher le texte" : canRead ? "Voir le texte" : `Texte après 3 écoutes (${player.plays}/3)`}
          </button>
        </div>
      </div>
      {player.missingAccents.length > 0 && (
        <p className="warn">Ce navigateur n&apos;a pas la voix {player.missingAccents.map((a) => ACCENTS[a].label).join(", ")} : ouvre SpeakUp dans Microsoft Edge pour entendre le vrai accent.</p>
      )}
      <p className="muted">Écoute sans lire, puis réponds à l&apos;oral avec une phrase complète. Écoutes : {player.plays}</p>
      <div className={`transcript ${showText ? "" : "hidden"}`}>
        {text.parts.map((p, k) => (
          <p key={k} className={player.line === k ? "now" : ""}>
            {text.parts.length > 1 && <b>{p.speaker} : </b>}
            {showText ? p.text : player.line === k ? "🔊 …" : ""}
          </p>
        ))}
      </div>
      <div className="lqs">
        {text.questions.map((q, k) => (
          <ListenQuestion key={k} levelId={levelId} index={firstIndex + k} n={k + 1} passage={passage} q={q.q} expected={q.answer} />
        ))}
      </div>
    </div>
  );
}
