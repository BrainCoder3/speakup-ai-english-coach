"use client";
/** "Quand utiliser quoi ?": for each tricky choice, which form, when, an example and the classic trap. */
import { speak } from "@/lib/speech/tts";
import type { WhenCard } from "@/data/learnTypes";
import { Icon } from "@/components/ui/Icon";

export function WhenCards({ cards }: { cards: WhenCard[] }) {
  if (!cards.length) return null;
  return (
    <section className="card when">
      <h3>🧭 Quand utiliser quoi ?</h3>
      {cards.map((c) => (
        <div key={c.title} className="wcard">
          <h4>{c.title}</h4>
          <div className="ttable-wrap">
            <table className="ttable">
              <thead><tr><th>On utilise…</th><th>Quand ?</th><th>Exemple</th></tr></thead>
              <tbody>
                {c.rows.map((r) => (
                  <tr key={r.use}>
                    <td><b>{r.use}</b></td>
                    <td>{r.when}</td>
                    <td>
                      <button className="btn ghost" onClick={() => speak(r.ex)} aria-label={`Écouter : ${r.ex}`}><Icon name="play" /></button>
                      <i>{r.ex}</i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="trap">⚠️ Piège : {c.trap}</p>
        </div>
      ))}
    </section>
  );
}
