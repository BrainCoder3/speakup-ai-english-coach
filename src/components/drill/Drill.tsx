"use client";
/** "Listen & repeat" card. Clicking a word replays it slowly. */
import { useState } from "react";
import { CONFIG } from "@/lib/config";
import { speak } from "@/lib/speech/tts";
import { useListening } from "@/lib/speech/useListening";
import { Icon } from "@/components/ui/Icon";
import { MicMeter } from "@/components/ui/MicMeter";
import { ScoreRing } from "@/components/ui/ScoreRing";
import { useDrill, drillMessage, type DrillResult } from "./useDrill";

interface Props {
  target: string;
  fr?: string;
  pass?: number;
  maxTries?: number;
  autoplay?: boolean;
  hideText?: boolean;
  onDone?: (r: DrillResult) => void;
}

const sayWord = (w: string) => speak(w.replace(/[^\p{L}\p{N}'-]/gu, ""), { rate: 0.8 });

export function Drill({ target, fr, pass = CONFIG.pass.drill, maxTries = Infinity, autoplay = true, hideText = false, onDone }: Props) {
  const { state: s, attempt } = useDrill(target, pass, maxTries, autoplay, onDone);
  const recording = useListening();
  const [revealed, setRevealed] = useState(false);
  const masked = hideText && !revealed && s.score === null;
  const words = s.tokens ?? target.split(/\s+/).map((text) => ({ text, ok: true }));
  const passed = s.score !== null && s.score >= pass;

  return (
    <div className={`drill-card ${passed ? "passed" : ""}`}>
      <div className={`drill-target ${masked ? "masked" : ""}`}>
        {words.map((w, i) => (
          <button key={i} type="button" className={`w ${s.tokens ? (w.ok ? "ok" : "miss") : ""}`} onClick={() => sayWord(w.text)}>
            {w.text}
          </button>
        ))}
      </div>
      {fr && <div className="drill-fr">{fr}</div>}
      <div className="drill-ctrls">
        <button className="btn" onClick={() => speak(target)}><Icon name="play" />Écouter</button>
        <button className="btn" onClick={() => speak(target, { rate: 0.7 })}><Icon name="slow" />Lentement</button>
        {masked && <button className="btn" onClick={() => setRevealed(true)}><Icon name="eye" />Voir le texte</button>}
        <button className={`btn mic-btn ${recording ? "rec" : ""}`} disabled={s.finished} onClick={attempt}>
          <Icon name="mic" />
          {recording ? "J'écoute… (fais une pause à la fin)" : "Répéter"}
        </button>
      </div>
      <div className="drill-live">{s.live}</div>
      <MicMeter />
      {s.error && <p className="warn">{s.error}</p>}
      {s.score !== null && (
        <div className="drill-result" aria-live="polite">
          <ScoreRing score={s.score} pass={pass} />
          <div>
            <p className="msg">{drillMessage(s.score, pass)}</p>
            <p className="heard">
              Compris : « {s.heard} » · essai {s.tries}
              {Number.isFinite(maxTries) ? `/${maxTries}` : ""} · objectif {pass}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
