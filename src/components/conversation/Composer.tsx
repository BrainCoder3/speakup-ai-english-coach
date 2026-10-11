"use client";
/** Bottom bar: big mic button, help, optional typing, turn counter. */
import { useEffect, useState, type FormEvent } from "react";
import { useListening } from "@/lib/speech/useListening";
import { Icon } from "@/components/ui/Icon";

interface Props {
  busy: boolean;
  done: boolean;
  live: string;
  hint: string;
  allowTyping: boolean;
  turns: number;
  maxTurns?: number;
  onMic: () => void;
  onHelp: () => void;
  onText: (text: string) => void;
}

export function Composer(p: Props) {
  const recording = useListening();
  const [text, setText] = useState("");

  // Ctrl + Space toggles the microphone.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space" && e.ctrlKey) {
        e.preventDefault();
        p.onMic();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [p.onMic]); // eslint-disable-line react-hooks/exhaustive-deps

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim()) p.onText(text.trim());
    setText("");
  };

  return (
    <div className="composer">
      <div className="live">{p.live}</div>
      <div className="cbar">
        <button className="tool" onClick={p.onHelp} title="Idées de réponses">
          <Icon name="help" />
          <span>Aide</span>
        </button>
        <button className={`mic ${recording ? "rec" : ""} ${p.busy ? "busy" : ""}`} disabled={p.done} onClick={p.onMic} aria-label="Parler">
          <Icon name="mic" size={32} />
        </button>
        {p.allowTyping ? (
          <form className="type" onSubmit={submit}>
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder="…ou écris en anglais" autoComplete="off" />
            <button aria-label="Envoyer"><Icon name="send" /></button>
          </form>
        ) : (
          <div className="must-speak">
            🎙️ Ici on parle : appuie sur le micro (ou <kbd>Ctrl</kbd>+<kbd>Espace</kbd>)
          </div>
        )}
        {p.maxTurns ? (
          <div className="turns">
            <b>{p.turns}</b>/{p.maxTurns}
            <small>échanges</small>
          </div>
        ) : null}
      </div>
      <p className="hint">{p.hint}</p>
    </div>
  );
}
