"use client";
import { useStore } from "@/lib/store/useStore";
import { summary } from "@/lib/progress/stats";

/** XP, streak and levels passed, always visible in the sidebar. */
export function MiniStats() {
  const ready = useStore();
  const s = ready ? summary() : null;
  return (
    <div className="mini">
      <div><b>{s?.xp ?? "–"}</b><small>XP</small></div>
      <div><b>{s ? `${s.streak}🔥` : "–"}</b><small>série</small></div>
      <div><b>{s ? `${s.levelsPassed}/${s.levelsTotal}` : "–"}</b><small>niveaux</small></div>
    </div>
  );
}
