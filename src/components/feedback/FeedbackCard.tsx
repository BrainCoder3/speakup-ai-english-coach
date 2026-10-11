"use client";
/** One detailed correction: diff, native version, French explanations, drill, new word. */
import { useEffect, useRef, useState } from "react";
import type { Feedback } from "@/lib/ai/tasks/correction";
import { speak } from "@/lib/speech/tts";
import { saveWord } from "@/lib/vocab";
import { Icon } from "@/components/ui/Icon";
import { DiffText } from "@/components/ui/DiffText";
import { Drill } from "@/components/drill/Drill";

export function FeedbackCard({ said, fb, focused }: { said: string; fb: Feedback; focused: boolean }) {
  const [drill, setDrill] = useState(false);
  const [saved, setSaved] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const target = fb.natural || fb.corrected;
  const tone = fb.score < 60 ? "bad" : fb.mistakes.length ? "warn" : "";
  const showNatural = fb.natural && fb.natural.toLowerCase() !== fb.corrected.toLowerCase();

  useEffect(() => {
    if (focused) ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [focused]);

  return (
    <div ref={ref} className={`fcard ${focused ? "focus" : ""}`}>
      <div className="fhead">
        <div className="score">{fb.score}<small> / 100</small></div>
        <span className={`badge ${tone}`}>{fb.mistakes.length ? "À corriger" : "Correct !"}</span>
      </div>
      <div className="label">Tu as dit → correction</div>
      <DiffText from={said} to={fb.corrected} />
      {showNatural && (<><div className="label">Plus naturel (comme un natif)</div><div className="natural">{fb.natural}</div></>)}
      {fb.mistakes.length > 0 && (
        <>
          <div className="label">Explications</div>
          <ul className="mist">
            {fb.mistakes.map((m, i) => (
              <li key={i}><b>{m.wrong}</b> → <b>{m.right}</b><span className="tag">{m.type}</span><br />{m.explication}</li>
            ))}
          </ul>
        </>
      )}
      <div className="label">Astuce</div>
      <div className="tip">{fb.tip_fr}</div>
      {fb.vocab && (
        <>
          <div className="label">Nouveau mot</div>
          <div className="vocab"><b>{fb.vocab.word}</b> — {fb.vocab.meaning_fr}<br /><i>{fb.vocab.example}</i></div>
        </>
      )}
      <div className="fbtns">
        <button className="btn" onClick={() => speak(target, { rate: 0.85 })}><Icon name="play" />Écouter la bonne phrase</button>
        <button className="btn" disabled={drill} onClick={() => setDrill(true)}><Icon name="mic" />S&apos;entraîner</button>
        {fb.vocab && (
          <button className="btn" disabled={saved} onClick={() => setSaved(saveWord(fb.vocab!) || true)}>
            <Icon name={saved ? "check" : "save"} />{saved ? "Ajouté au carnet" : "Garder le mot"}
          </button>
        )}
      </div>
      {drill && <div className="fdrill"><Drill target={target} /></div>}
    </div>
  );
}
