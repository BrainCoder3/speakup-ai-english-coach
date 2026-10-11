"use client";
/** Expressions to use in the speech, ticked live as soon as they are said. */
import { usedExpressions } from "@/lib/scoring/expressions";
import { speak } from "@/lib/speech/tts";
import type { SpeakingTopic } from "@/data/types";
import { Icon } from "@/components/ui/Icon";

export function ExpressionList({ topic, said }: { topic: SpeakingTopic; said: string }) {
  const used = usedExpressions(said, topic.expressions);
  const n = used.filter(Boolean).length;
  const ok = n >= topic.mustUse;
  return (
    <section className="exprs">
      <div className="exprs-head">
        <h4>📌 Expressions à placer dans ton discours</h4>
        <span className={`exprs-count ${ok ? "ok" : ""}`}>{n} / {topic.mustUse} utilisées</span>
      </div>
      <ul>
        {topic.expressions.map((e, k) => (
          <li key={e.en} className={used[k] ? "used" : ""}>
            <span className="tick" aria-hidden="true">{used[k] ? "✓" : ""}</span>
            <b>{e.en}</b>
            <span className="fr">{e.fr}</span>
            <button className="btn ghost" onClick={() => speak(e.en.replace(/…/g, ""))} aria-label={`Écouter « ${e.en} »`}>
              <Icon name="play" />
            </button>
          </li>
        ))}
      </ul>
      <p className="muted">« … » = tes propres mots. Il faut en utiliser au moins <b>{topic.mustUse}</b> pour que le prof accepte ton discours.</p>
    </section>
  );
}
