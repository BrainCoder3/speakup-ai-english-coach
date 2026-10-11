"use client";
/** "Comment dit-on… ?" — French to natural spoken English. */
import { useRef, useState, type FormEvent } from "react";
import { translate } from "@/lib/ai/tasks/exercises";
import { speak } from "@/lib/speech/tts";
import { Typing } from "@/components/ui/Icon";

type Result = { en: string; alternatives: string[]; note_fr: string };

export function TranslateButton() {
  const dlg = useRef<HTMLDialogElement>(null);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState<Result | null>(null);
  const [error, setError] = useState("");

  const run = async (e: FormEvent) => {
    e.preventDefault();
    if (!q.trim()) return;
    setLoading(true);
    setError("");
    try {
      const r = await translate(q.trim(), "B1");
      setRes(r);
      speak(r.en);
    } catch {
      setError("Traduction indisponible.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button className="btn" onClick={() => dlg.current?.showModal()}>🔤 Comment dit-on… ?</button>
      <dialog ref={dlg}>
        <form className="dlg" onSubmit={run}>
          <h3>Comment dit-on… ?</h3>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Écris en français : « Je cherche du travail »" />
          <div className="sayout">
            {loading && <Typing />}
            {error && <p className="warn">{error}</p>}
            {res && !loading && (
              <>
                <div className="en">
                  {res.en}
                  <button type="button" className="btn small" onClick={() => speak(res.en)}>Écouter</button>
                </div>
                <ul>{res.alternatives.slice(0, 2).map((a) => <li key={a}>{a}</li>)}</ul>
                <p>{res.note_fr}</p>
              </>
            )}
          </div>
          <div className="row end">
            <button type="button" className="btn" onClick={() => dlg.current?.close()}>Fermer</button>
            <button className="btn primary">Traduire</button>
          </div>
        </form>
      </dialog>
    </>
  );
}
