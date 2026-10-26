"use client";
/** Connects to the local AI once (and loads it on the GPU), then shows the status. */
import { useEffect, useState } from "react";
import { aiBase } from "@/lib/ai/client";

type Answer = { ok: boolean; model?: string; error?: string };
const OFFLINE: Answer = { ok: false, error: "Hors-ligne : pas d'IA ici (expressions, exercices et écoute marchent)." };

type Status = { kind: "" | "ok" | "err"; text: string };

export function StatusBadge() {
  const [s, setS] = useState<Status>({ kind: "", text: "Chargement de l'IA sur la carte graphique…" });

  useEffect(() => {
    let alive = true;
    const base = aiBase();
    // The published (static) site has no AI of its own: it only talks to the server set in the settings.
    const ask: Promise<Answer> = process.env.NEXT_PUBLIC_STATIC && !base ? Promise.resolve(OFFLINE) : fetch(`${base}/api/models`).then((r) => r.json() as Promise<Answer>);
    ask
      .then((r) => {
        if (!alive) return;
        if (r.ok && r.model) setS({ kind: "ok", text: `IA prête · ${r.model.replace(/-2507-q4_K_M$/, "")} · GPU` });
        else setS({ kind: "err", text: r.error ?? "IA indisponible" });
      })
      .catch(() => alive && setS({ kind: "err", text: "Serveur indisponible." }));
    return () => {
      alive = false;
    };
  }, []);

  return (
    <div className={`status ${s.kind}`} role="status" aria-live="polite">
      <i />
      <span>{s.text}</span>
    </div>
  );
}
