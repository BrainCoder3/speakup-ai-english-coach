"use client";
import { useStore } from "@/lib/store/useStore";
import { summary } from "@/lib/progress/stats";
import { LEVELS } from "@/data/levels";

/** XP, streak and levels passed, always visible in the sidebar. */
export function MiniStats() {
  const ready = useStore();
  const s = ready ? summary() : null;
  return (
    <div className="mini">
      <div><b>{s?.xp ?? "–"}</b><small>XP</small></div>
      <div><b>{s ? `${s.streak}🔥` : "–"}</b><small>série</small></div>
      <div><b>{s ? `${s.levelsPassed}/${LEVELS.length}` : "–"}</b><small>niveaux</small></div>
    </div>
  );
}
