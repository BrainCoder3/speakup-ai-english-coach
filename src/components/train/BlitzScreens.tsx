"use client";
/** Start and end screens of the ⚡ Défi éclair. */
import { Confetti } from "@/components/ui/Confetti";
import { Icon } from "@/components/ui/Icon";

export function BlitzReady({ best, onStart }: { best: number; onStart: () => void }) {
  return (
    <section className="card blitz">
      <h3>⚡ Défi éclair : 60 secondes</h3>
      <p className="muted">Réponds à un maximum de questions tapées. Chaque bonne réponse rapporte des points, et <b>3 bonnes d&apos;affilée</b> font monter le combo (jusqu&apos;à 40 points par réponse). Ton record : <b>{best}</b>.</p>
      <button className="btn primary" onClick={onStart}><Icon name="arrow" />C&apos;est parti !</button>
    </section>
  );
}

export function BlitzOver({ score, right, wrong, best, record, xp, onAgain }: {
  score: number; right: number; wrong: number; best: number; record: boolean; xp: number; onAgain: () => void;
}) {
  return (
    <section className="card blitz over">
      {record && <Confetti />}
      <h3>{record ? "🎉 Nouveau record !" : "Temps écoulé !"}</h3>
      <p className="bigscore">{score} <small>points</small></p>
      <p className="muted">{right} juste{right > 1 ? "s" : ""} · {wrong} raté{wrong > 1 ? "s" : ""} · record : {Math.max(best, score)} · +{xp} XP</p>
      <button className="btn primary" onClick={onAgain}><Icon name="retry" />Rejouer</button>
    </section>
  );
}
