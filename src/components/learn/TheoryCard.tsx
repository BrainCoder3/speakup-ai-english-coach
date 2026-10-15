"use client";
/** One grammar / communication point: French explanation, optional table, spoken examples. */
import { speak } from "@/lib/speech/tts";
import type { TheoryPoint } from "@/data/learnTypes";
import { Icon } from "@/components/ui/Icon";

export function TheoryCard({ point, n }: { point: TheoryPoint; n: number }) {
  return (
    <section className="card theory">
      <h3><span className="tnum">{n}</span>{point.title}</h3>
      {point.explain.map((e, k) => <p key={k} dangerouslySetInnerHTML={{ __html: e }} />)}
      {point.table && (
        <div className="ttable-wrap">
          <table className="ttable">
            <thead><tr>{point.table.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
            <tbody>
              {point.table.rows.map((r, i) => (
                <tr key={i}>{r.map((c, j) => <td key={j} dangerouslySetInnerHTML={{ __html: c }} />)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <ul className="texamples">
        {point.examples.map((x) => (
          <li key={x.es}>
            <button className="btn ghost" onClick={() => speak(x.es)} aria-label={`Écouter : ${x.es}`}><Icon name="play" /></button>
            <span><b>{x.es}</b><small>{x.fr}</small></span>
          </li>
        ))}
      </ul>
    </section>
  );
}
