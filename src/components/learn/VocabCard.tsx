"use client";
/** Unit vocabulary by theme; click a word to hear it. Plus phonetics and culture notes. */
import { speak } from "@/lib/speech/tts";
import type { Learn } from "@/data/learnTypes";
import { Icon } from "@/components/ui/Icon";

export function VocabCard({ vocab }: { vocab: Learn["vocab"] }) {
  return (
    <section className="card">
      <h3><Icon name="book" />Vocabulaire de l&apos;unité <small className="muted">(clique pour écouter)</small></h3>
      {vocab.map((g) => (
        <div key={g.theme} className="vgroup">
          <h4>{g.theme}</h4>
          <div className="vwords">
            {g.words.map((w) => (
              <button key={w.es} className="vword" onClick={() => speak(w.es)}>
                <b>{w.es}</b><small>{w.fr}</small>
              </button>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export function PhoneticsCard({ p, culture }: { p: Learn["phonetics"]; culture: string }) {
  return (
    <div className="twocol">
      <section className="card">
        <h3>🔊 Phonétique : {p.title}</h3>
        <p>{p.explain}</p>
        <div className="vwords">
          {p.examples.map((e) => (
            <button key={e} className="vword" onClick={() => speak(e, { rate: 0.8 })}><b>{e}</b></button>
          ))}
        </div>
      </section>
      <section className="card">
        <h3>🌎 Culture</h3>
        <p>{culture}</p>
      </section>
    </div>
  );
}
