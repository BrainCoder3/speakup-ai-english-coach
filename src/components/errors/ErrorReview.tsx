"use client";
/** Review session: see what you said wrong, say the correct sentence from memory. */
import { useState } from "react";
import { CONFIG } from "@/lib/config";
import { gradeError } from "@/lib/errors/bank";
import type { ErrorItem } from "@/lib/store/types";
import { Drill } from "@/components/drill/Drill";
import { Icon } from "@/components/ui/Icon";

export function ErrorReview({ items, onExit }: { items: ErrorItem[]; onExit: () => void }) {
  const [queue, setQueue] = useState(items);
  const [result, setResult] = useState<boolean | null>(null);
  const [round, setRound] = useState(0);
  const e = queue[0];

  if (!e) {
    return (
      <div className="celebrate">
        <div className="big">🧠</div>
        <h2>Révision terminée !</h2>
        <p>Chaque erreur revient plus tard, jusqu&apos;à ce que la bonne forme devienne un réflexe.</p>
        <button className="btn primary" onClick={onExit}><Icon name="arrow" />Retour</button>
      </div>
    );
  }

  const next = () => {
    // A failed sentence goes back to the end of the queue: you'll say it again today.
    setQueue((q) => (result ? q.slice(1) : [...q.slice(1), q[0]]));
    setResult(null);
    setRound((r) => r + 1);
  };

  return (
    <div className="zone">
      <div className="stephead">
        <div>
          <h2>🔁 Révision de mes erreurs</h2>
          <p>Il en reste <b>{queue.length}</b>. Lis ce que tu avais dit, puis dis la phrase <b>correcte de mémoire</b>.</p>
        </div>
        <button className="btn" onClick={onExit}><Icon name="back" />Quitter</button>
      </div>
      <div className="qcard">
        <p className="counter">Tu avais dit :</p>
        <p className="wrong">« {e.said} »</p>
        <p className="expl">💡 {e.explication}</p>
        <Drill
          key={round}
          target={e.corrected}
          pass={CONFIG.pass.drill}
          maxTries={2}
          autoplay={false}
          hideText
          onDone={(r) => {
            gradeError(e, r.passed && r.tries === 1);
            setResult(r.passed);
          }}
        />
        {result !== null && (
          <button className="btn primary next" onClick={next}>
            <Icon name="arrow" />{result ? "Suivante" : "Je la retenterai à la fin"}
          </button>
        )}
      </div>
    </div>
  );
}
