"use client";
/** Placement test (day 0) and final test (day 30): same 30 questions, level estimate, comparison. */
import { useState } from "react";
import { levelFromScore, PLACEMENT } from "@/data/plan/placement";
import { planState, saveTest } from "@/lib/plan/progress";
import { Quiz } from "@/components/learn/Quiz";
import { Icon } from "@/components/ui/Icon";

export function TestCard({ finalOpen }: { finalOpen: boolean }) {
  const [running, setRunning] = useState<"placement" | "final" | null>(null);
  const p = planState();

  if (running) {
    return (
      <section className="card">
        <h3>{running === "placement" ? "🧭 Test de niveau" : "🏁 Test final"} — 30 questions, du A2 au C1</h3>
        <Quiz questions={PLACEMENT} pass={0} onFinish={(s) => saveTest(running, s)} />
        <button className="btn next" onClick={() => setRunning(null)}><Icon name="back" />Revenir au programme</button>
      </section>
    );
  }

  return (
    <section className="card tests">
      <div>
        <h3>🧭 Test de niveau</h3>
        {p.placement === null ? (
          <p className="muted">Commence par ce test (10 min) pour connaître ton point de départ.</p>
        ) : (
          <p>Départ : <b>{p.placement} %</b> → niveau estimé <span className="cefr">{levelFromScore(p.placement)}</span></p>
        )}
        <button className="btn" onClick={() => setRunning("placement")}><Icon name="arrow" />{p.placement === null ? "Passer le test" : "Refaire le test"}</button>
      </div>
      <div>
        <h3>🏁 Test final</h3>
        {p.final === null ? (
          <p className="muted">{finalOpen ? "Tu as atteint la dernière semaine : mesure tes progrès !" : "Disponible à partir du jour 28."}</p>
        ) : (
          <p>Arrivée : <b>{p.final} %</b> → niveau estimé <span className="cefr">{levelFromScore(p.final)}</span>
            {p.placement !== null && <> · progression <b>{p.final - p.placement >= 0 ? "+" : ""}{p.final - p.placement} points</b></>}</p>
        )}
        <button className="btn" disabled={!finalOpen} onClick={() => setRunning("final")}><Icon name="arrow" />Passer le test final</button>
      </div>
      <p className="muted small-note">Estimation indicative (grammaire + vocabulaire), pas un certificat officiel. Pour une certification : Cambridge C1 Advanced, IELTS ou TOEFL.</p>
    </section>
  );
}
