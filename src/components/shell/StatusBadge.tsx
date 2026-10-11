"use client";
/** Connects to the local AI once (and loads it on the GPU), then shows the status. */
import { useEffect, useState } from "react";

type Status = { kind: "" | "ok" | "err"; text: string };

export function StatusBadge() {
  const [s, setS] = useState<Status>({ kind: "", text: "Chargement de l'IA sur la carte graphique…" });

  useEffect(() => {
    let alive = true;
    fetch("/api/models")
      .then((r) => r.json() as Promise<{ ok: boolean; model?: string; error?: string }>)
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
