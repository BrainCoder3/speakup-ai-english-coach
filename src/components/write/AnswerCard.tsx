"use client";
/**
 * One written question: type, check, read the correction.
 * After a mistake the right answer must be copied out once before moving on.
 */
import { useState, type ReactNode } from "react";
import { accentHint, checkSpelling } from "@/lib/scoring/spelling";
import { speak } from "@/lib/speech/tts";
import { DiffText } from "@/components/ui/DiffText";
import { Icon, Typing } from "@/components/ui/Icon";
import { TypeBox } from "./TypeBox";

export interface Checked {
  right: boolean;
  /** The correct version to learn. */
  expected: string;
  /** Why (French). */
  why: string;
}

interface Props {
  prompt: ReactNode;
  hint?: string;
  placeholder?: string;
  check: (typed: string) => Checked | Promise<Checked>;
  onNext: (right: boolean) => void;
}

export function AnswerCard({ prompt, hint, placeholder, check, onNext }: Props) {
  const [typed, setTyped] = useState("");
  const [busy, setBusy] = useState(false);
  const [res, setRes] = useState<(Checked & { said: string }) | null>(null);
  const [copy, setCopy] = useState("");
  const copied = !!res && checkSpelling(copy, [res.expected]).kind === "right";

  const submit = async () => {
    if (!typed.trim() || busy) return;
    if (res) return (res.right || copied) && onNext(res.right);
    setBusy(true);
    try {
      const r = await check(typed);
      setRes({ ...r, said: typed });
      speak(r.expected);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className={`qcard answer ${res ? (res.right ? "good" : "bad") : ""}`}>
      <div className="aprompt">{prompt}</div>
      {hint && !res && <p className="muted">💡 {hint}</p>}
      <TypeBox value={typed} onChange={setTyped} onEnter={submit} disabled={!!res || busy} placeholder={placeholder ?? "Écris ta réponse en espagnol…"} autoFocus />
      {busy && <p className="muted"><Typing /> Vérification…</p>}
      {!res && !busy && <button className="btn primary next" onClick={submit} disabled={!typed.trim()}><Icon name="check" />Vérifier</button>}
      {res && (
        <div className="afeedback">
          <p className={res.right ? "okmsg" : "warn"}>{res.right ? "✅ Juste !" : "❌ Pas tout à fait."} {res.why}</p>
          {!res.right && <div className="adiff"><DiffText from={res.said} to={res.expected} /></div>}
          <p className="aexpected">
            <b>{res.expected}</b>
            <button className="btn ghost" onClick={() => speak(res.expected)} aria-label="Écouter"><Icon name="play" /></button>
          </p>
          {!res.right && (
            <>
              <p className="muted">Recopie la bonne réponse pour la retenir :</p>
              <TypeBox value={copy} onChange={setCopy} onEnter={() => copied && onNext(false)} placeholder={res.expected} autoFocus />
            </>
          )}
          <button className="btn primary next" disabled={!res.right && !copied} onClick={() => onNext(res.right)}>
            <Icon name="arrow" />Suivant
          </button>
        </div>
      )}
    </div>
  );
}

/** Static check: exact spelling, with a precise message when only accents are wrong. */
export function spellingCheck(typed: string, answers: string[], why: string): Checked {
  const v = checkSpelling(typed, answers);
  if (v.kind === "right") return { right: true, expected: v.expected, why };
  if (v.kind === "accent") return { right: false, expected: v.expected, why: `${accentHint(typed, v.expected)} ${why}` };
  return { right: false, expected: v.expected, why };
}
