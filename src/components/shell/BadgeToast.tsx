"use client";
/** Pops up for a few seconds when a new achievement is earned. */
import { useEffect, useState } from "react";
import { onBadge } from "@/lib/game/xp";
import type { Badge } from "@/lib/game/badges";

export function BadgeToast() {
  const [queue, setQueue] = useState<Badge[]>([]);

  useEffect(() => onBadge((b) => setQueue((q) => [...q, b])), []);
  useEffect(() => {
    if (!queue.length) return;
    const t = setTimeout(() => setQueue((q) => q.slice(1)), 4500);
    return () => clearTimeout(t);
  }, [queue]);

  const b = queue[0];
  if (!b) return null;
  return (
    <div className="toast" role="status" aria-live="polite">
      <span className="ticon">{b.icon}</span>
      <div><small>Nouveau succès !</small><b>{b.name}</b><span>{b.desc}</span></div>
    </div>
  );
}
