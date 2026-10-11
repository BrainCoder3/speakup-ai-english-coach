"use client";
/** "Mes erreurs": every corrected sentence, reviewed until it is mastered. */
import { useState } from "react";
import { useStore } from "@/lib/store/useStore";
import { allErrors, dueErrors, MASTERED_BOX, removeError } from "@/lib/errors/bank";
import type { ErrorItem } from "@/lib/store/types";
import { DiffText } from "@/components/ui/DiffText";
import { Icon } from "@/components/ui/Icon";
import { ErrorReview } from "./ErrorReview";

export function ErrorsView() {
  const ready = useStore();
  const [review, setReview] = useState<ErrorItem[] | null>(null);
  if (!ready) return <div className="page"><p className="muted">Chargement…</p></div>;
  if (review) return <div className="page"><ErrorReview items={review} onExit={() => setReview(null)} /></div>;

  const list = allErrors();
  const due = dueErrors();
  const mastered = list.filter((e) => e.box >= MASTERED_BOX).length;
  return (
    <div className="page">
      <header className="page-head">
        <div>
          <h1>Mes erreurs</h1>
          <p>
            {list.length} erreur(s) notée(s) · {due.length} à revoir aujourd&apos;hui · {mastered} maîtrisée(s). Chaque phrase
            fausse revient (1, 3, 7, 16, 35 jours) jusqu&apos;à ce que tu la dises juste du premier coup.
          </p>
        </div>
        <button className="btn primary" disabled={!due.length} onClick={() => setReview(due)}>
          <Icon name="retry" />Réviser ({due.length})
        </button>
      </header>
      {list.length === 0 ? (
        <p className="muted">Aucune erreur pour l&apos;instant. Elles s&apos;ajoutent automatiquement quand le coach te corrige.</p>
      ) : (
        <div className="vocablist">
          {list.map((e, k) => (
            <div className="vitem" key={k}>
              <div className="vtop">
                <span className="box">{e.box >= MASTERED_BOX ? "✓ maîtrisée" : `niveau ${e.box + 1}/${MASTERED_BOX}`}</span>
                <button className="link danger" onClick={() => removeError(e)}>Supprimer</button>
              </div>
              <DiffText from={e.said} to={e.corrected} />
              <i>{e.explication}</i>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
