"use client";
/** Production: write a short text that uses the theme's expressions; the coach corrects it sentence by sentence. */
import { useState } from "react";
import { countWords, reviewSpeech, type SpeechReview } from "@/lib/ai/tasks/speaking";
import { saveErrors } from "@/lib/errors/bank";
import { trackScore } from "@/lib/progress/stats";
import { usedExpressions } from "@/lib/scoring/expressions";
import type { ExprTheme } from "@/data/expressions";
import { ReviewCard } from "@/components/speak/ReviewCard";
import { TypeBox } from "@/components/write/TypeBox";
import { Icon, Typing } from "@/components/ui/Icon";

const NEED = 3;

export function UseIt({ theme }: { theme: ExprTheme }) {
  const [text, setText] = useState("");
  const [review, setReview] = useState<SpeechReview | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const exprs = theme.items.map(([en, fr]) => ({ en, fr }));
  const used = usedExpressions(text, exprs);
  const n = used.filter(Boolean).length;
  const words = countWords(text);

  const submit = async () => {
    if (n < NEED || words < 20) return setError(`Il faut au moins ${NEED} expressions et 20 mots (tu en as ${n} et ${words}).`);
    setBusy(true);
    setError("");
    try {
      const r = await reviewSpeech({ topic: `Write about: ${theme.title}`, said: text, cefr: "B1", expressions: exprs.map((e) => e.en) });
      trackScore("grammar", r.score);
      saveErrors(r.fixes);
      setReview(r);
    } catch {
      setError("L'IA ne répond pas. Vérifie Ollama, puis réessaie.");
    }
    setBusy(false);
  };

  return (
    <section className="card useit">
      <h3>✍️ Utilise-les : écris un petit texte</h3>
      <p className="muted">Écris au moins 20 mots en plaçant <b>{NEED} expressions</b> de ce thème, telles quelles. Le coach corrige chaque phrase.</p>
      <ul className="chips-used">
        {theme.items.map(([en], k) => <li key={en} className={used[k] ? "on" : ""}>{used[k] ? "✓ " : ""}{en}</li>)}
      </ul>
      <TypeBox multiline value={text} onChange={(v) => { setText(v); setReview(null); }} placeholder="Écris ici, en anglais…" disabled={busy} />
      <div className="meter"><i style={{ transform: `scaleX(${Math.min(1, n / NEED)})` }} /><span>{n}/{NEED} expressions · {words} mots</span></div>
      {error && <p className="warn">{error}</p>}
      <button className="btn primary" disabled={busy || !text.trim()} onClick={submit}><Icon name="check" />Faire corriger mon texte</button>
      {busy && <p className="muted"><Typing /> Le coach lit ton texte phrase par phrase…</p>}
      {review && <ReviewCard r={review} pass={75} round={1} />}
    </section>
  );
}
