"use client";
/** One chat bubble (coach or learner), with replay / translate actions. */
import { useState } from "react";
import { CONFIG } from "@/lib/config";
import { speak } from "@/lib/speech/tts";
import { toFrench } from "@/lib/ai/tasks/exercises";
import { Icon, Typing } from "@/components/ui/Icon";
import { Drill } from "@/components/drill/Drill";
import type { DrillResult } from "@/components/drill/useDrill";
import type { ChatMsg } from "./types";

interface Props {
  m: ChatMsg;
  showText: boolean;
  onFixDone: (id: number, r: DrillResult) => void;
  onBadge: (cardId: number) => void;
}

function CoachActions({ text, onToggle }: { text: string; onToggle: () => void }) {
  const [fr, setFr] = useState<string | null>(null);
  return (
    <>
      <div className="acts">
        <button onClick={() => speak(text)}><Icon name="play" size={15} />Réécouter</button>
        <button onClick={() => speak(text, { rate: 0.72 })}><Icon name="slow" size={15} />Lentement</button>
        <button onClick={onToggle}><Icon name="eye" size={15} />Texte</button>
        <button disabled={fr !== null} onClick={async () => { setFr("…"); setFr(await toFrench(text).catch(() => "Traduction indisponible.")); }}>
          <Icon name="translate" size={15} />Traduire
        </button>
      </div>
      {fr && <div className="tip">🇫🇷 {fr}</div>}
    </>
  );
}

export function MessageItem({ m, showText, onFixDone, onBadge }: Props) {
  const [hidden, setHidden] = useState(!showText);
  const coach = m.role === "coach";
  const cls = `msg ${coach ? "coach" : "me"}${coach && hidden && m.kind === "text" ? " hidden-text" : ""}`;

  return (
    <div className={cls}>
      <span className="who">{coach ? (m.kind === "ideas" ? "Idées de réponses" : "Coach") : "Toi"}</span>
      <div className="bubble">
        {m.kind === "typing" && <Typing />}
        {m.kind === "text" && m.text}
        {m.kind === "fix" && (
          <>
            <b>Petite correction :</b> {m.text}
            <br />
            <span className="say">Répète : « {m.corrected} »</span>
          </>
        )}
        {m.kind === "ideas" && (
          <>
            {m.ideas?.map((a, i) => (
              <div className="idea" key={i}><b>{a.en}</b><br /><span>{a.fr}</span></div>
            ))}
            <div className="idea-hint">À toi : dis une de ces phrases (ou la tienne) au micro.</div>
          </>
        )}
      </div>
      {m.kind === "fix" && m.corrected && (
        <Drill target={m.corrected} autoplay={false} maxTries={CONFIG.drillMaxTries} onDone={(r) => onFixDone(m.id, r)} />
      )}
      {coach && m.kind === "text" && <CoachActions text={m.text} onToggle={() => setHidden((h) => !h)} />}
      {m.badge && (
        <button className={`badge ${m.badge.tone}`} onClick={() => m.badge?.cardId && onBadge(m.badge.cardId)}>
          {m.badge.label}
        </button>
      )}
    </div>
  );
}
