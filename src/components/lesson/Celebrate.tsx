"use client";
import Link from "next/link";
import { useEffect } from "react";
import { speak } from "@/lib/speech/tts";
import { Icon, Stars } from "@/components/ui/Icon";
import type { Celebration } from "./completion";

/** Success screen after passing a step or a whole level. */
export function Celebrate({ c }: { c: Celebration }) {
  useEffect(() => {
    speak("Congratulations! Well done!");
  }, []);
  return (
    <div className="celebrate">
      <div className="big">🏆</div>
      <h2>{c.title}</h2>
      <p>{c.text} <Stars n={c.stars} /></p>
      <Link className="btn primary" href={c.href}><Icon name="arrow" />{c.nextLabel}</Link>
    </div>
  );
}

/** Failure screen: the learner must retry. */
export function TryAgain({ score, needed, onRetry }: { score: number; needed: number; onRetry: () => void }) {
  useEffect(() => {
    speak("Not yet. Read your corrections and try again. You can do it!");
  }, []);
  return (
    <div className="celebrate fail">
      <div className="big">💪</div>
      <h2>Pas encore validé : {score}/100</h2>
      <p>Il faut {needed}/100 de moyenne. Relis tes corrections à droite, puis recommence.</p>
      <button className="btn primary" onClick={onRetry}><Icon name="retry" />Recommencer</button>
    </div>
  );
}

/** Progress dots: one per sentence / question. */
export function Dots({ count, current, isOk, onPick }: { count: number; current: number; isOk: (i: number) => boolean; onPick?: (i: number) => void }) {
  return (
    <div className="dots">
      {Array.from({ length: count }, (_, i) => (
        <button key={i} className={`dot ${isOk(i) ? "ok" : ""} ${i === current ? "cur" : ""}`} disabled={!onPick} onClick={() => onPick?.(i)}>
          {i + 1}
        </button>
      ))}
    </div>
  );
}
