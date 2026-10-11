"use client";
/** Spaced-repetition review of the words due today. */
import { useEffect, useState } from "react";
import { gradeWord } from "@/lib/vocab";
import type { VocabWord } from "@/lib/store/types";
import { speak } from "@/lib/speech/tts";
import { Icon } from "@/components/ui/Icon";

export function Flashcards({ words, onExit }: { words: VocabWord[]; onExit: () => void }) {
  const [i, setI] = useState(0);
  const [shown, setShown] = useState(false);
  const w = words[i];

  useEffect(() => {
    if (w) speak(w.word);
  }, [w]);

  if (!w) {
    return (
      <div className="celebrate">
        <div className="big">💪</div>
        <h2>Révision terminée</h2>
        <p>{words.length} mot(s) révisé(s).</p>
        <button className="btn primary" onClick={onExit}>Retour au carnet</button>
      </div>
    );
  }

  const grade = (known: boolean) => {
    gradeWord(w, known);
    setShown(false);
    setI(i + 1);
  };

  return (
    <>
      <p className="counter">Carte {i + 1} / {words.length}</p>
      <div className="flash">
        {w.word}
        {shown && <small>{w.meaning_fr}<br /><i>{w.example}</i></small>}
      </div>
      <div className="row center">
        <button className="btn" onClick={() => setShown(true)}><Icon name="eye" />Voir la réponse</button>
        <button className="btn" onClick={() => speak(w.example)}><Icon name="play" />Écouter l&apos;exemple</button>
      </div>
      {shown && (
        <div className="row center">
          <button className="btn" onClick={() => grade(false)}>À revoir</button>
          <button className="btn primary" onClick={() => grade(true)}><Icon name="check" />Je savais</button>
        </div>
      )}
    </>
  );
}
