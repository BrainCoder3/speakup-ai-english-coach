"use client";
import { useStore } from "@/lib/store/useStore";
import { summary } from "@/lib/progress/stats";
import { rankOf } from "@/lib/game/ranks";

/** Rank, XP, streak and levels passed, always visible in the sidebar. */
export function MiniStats() {
  const ready = useStore();
  const s = ready ? summary() : null;
  const r = s ? rankOf(s.xp) : null;
  return (
    <>
      <div className="rank" title={r?.next ? `Encore ${r.toNext} XP pour « ${r.next.name} »` : "Rang maximum"}>
        <span>{r?.icon ?? "🌱"} <b>{r?.name ?? "…"}</b></span>
        <span className="bar"><i style={{ transform: `scaleX(${r?.pct ?? 0})` }} /></span>
      </div>
      <div className="mini">
        <div><b>{s?.xp ?? "–"}</b><small>XP</small></div>
        <div><b>{s ? `${s.streak}🔥` : "–"}</b><small>série</small></div>
        <div><b>{s ? `${s.levelsPassed}/${s.levelsTotal}` : "–"}</b><small>niveaux</small></div>
      </div>
    </>
  );
}
