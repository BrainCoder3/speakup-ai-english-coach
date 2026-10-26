"use client";
/** Rank, stats and the wall of achievements. */
import { useStore } from "@/lib/store/useStore";
import { store } from "@/lib/store/store";
import { summary } from "@/lib/progress/stats";
import { BADGES } from "@/lib/game/badges";
import { rankOf } from "@/lib/game/ranks";

export function AchievementsView() {
  const ready = useStore();
  if (!ready) return <div className="page"><p className="muted">Chargement…</p></div>;
  const s = summary();
  const r = rankOf(s.xp);
  const have = store.get().game.badges;
  const g = store.get().game;
  return (
    <div className="page">
      <header className="page-head">
        <div>
          <h1>🏆 Mes succès</h1>
          <p>{have.length}/{BADGES.length} débloqués. Chaque réponse, chaque expression et chaque jour d&apos;entraînement te rapprochent du suivant.</p>
        </div>
      </header>
      <section className="card rankcard">
        <div className="rank-big">{r.icon}</div>
        <div className="rank-info">
          <h2>Rang {r.n} · {r.name}</h2>
          <div className="meter"><i style={{ transform: `scaleX(${r.pct})` }} /><span>{s.xp} XP{r.next ? ` · encore ${r.toNext} pour « ${r.next.name} »` : " · rang maximum !"}</span></div>
          <p className="muted">🔥 Série : {s.streak} jour{s.streak > 1 ? "s" : ""} · ⚡ Record Défi éclair : {g.bestBlitz} · 🎯 Objectifs réussis : {g.goalDays.length}</p>
        </div>
      </section>
      <div className="badges">
        {BADGES.map((b) => (
          <div key={b.id} className={`badge ${have.includes(b.id) ? "on" : ""}`}>
            <span className="bicon">{have.includes(b.id) ? b.icon : "🔒"}</span>
            <b>{b.name}</b>
            <small>{b.desc}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
