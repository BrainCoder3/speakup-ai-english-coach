"use client";
/** Vocabulary notebook: saved words + flashcard review. */
import { useState } from "react";
import { useStore } from "@/lib/store/useStore";
import { allWords, dueWords, removeWord } from "@/lib/vocab";
import type { VocabWord } from "@/lib/store/types";
import { speak } from "@/lib/speech/tts";
import { Icon } from "@/components/ui/Icon";
import { Flashcards } from "./Flashcards";

export function NotebookView() {
  const ready = useStore();
  const [review, setReview] = useState<VocabWord[] | null>(null);
  if (!ready) return <div className="page"><p className="muted">Chargement…</p></div>;
  if (review) return <div className="page"><Flashcards words={review} onExit={() => setReview(null)} /></div>;

  const list = allWords();
  const due = dueWords();
  return (
    <div className="page">
      <header className="page-head">
        <div>
          <h1>Mon carnet</h1>
          <p>{list.length} mot(s) · {due.length} à réviser aujourd&apos;hui. Ajoute des mots depuis les corrections (« Garder le mot »).</p>
        </div>
        <button className="btn primary" disabled={!due.length} onClick={() => setReview(due)}>
          <Icon name="book" />Réviser ({due.length})
        </button>
      </header>
      {list.length === 0 ? (
        <p className="muted">Ton carnet est vide pour l&apos;instant.</p>
      ) : (
        <div className="vocablist">
          {list.map((w) => (
            <div className="vitem" key={w.word}>
              <div className="vtop"><b>{w.word}</b><span className="box">boîte {w.box + 1}/6</span></div>
              <div>{w.meaning_fr}</div>
              <i>{w.example}</i>
              <div className="vbtns">
                <button className="link" onClick={() => speak(`${w.word}. ${w.example}`)}><Icon name="play" />Écouter</button>
                <button className="link danger" onClick={() => removeWord(w)}>Supprimer</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
