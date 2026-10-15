"use client";
/** Translation: write each French sentence in Spanish; other correct wordings are accepted. */
import { useMemo } from "react";
import { CONFIG } from "@/lib/config";
import { checkTranslation } from "@/lib/ai/tasks/translate";
import { saveErrors } from "@/lib/errors/bank";
import { ES_PRACTICE } from "@/data/es";
import type { Level } from "@/data/types";
import { AnswerCard } from "./AnswerCard";
import { QueueStep } from "./QueueStep";

export function TranslateStep({ level }: { level: Level }) {
  const items = useMemo(() => (ES_PRACTICE[level.id]?.translate ?? []).map((t, i) => ({ ...t, key: String(i) })), [level.id]);
  return (
    <QueueStep
      level={level}
      step="translate"
      title="🔁 Traduction"
      intro={<>Écris chaque phrase en espagnol, avec la ponctuation espagnole (¿…?, ¡…!) si tu veux — elle n&apos;est pas notée, mais <b>les accents le sont</b>. Une autre formulation correcte est acceptée.</>}
      items={items}
      pass={CONFIG.pass.translation}
      render={(t, next) => (
        <AnswerCard
          prompt={<><span className="counter">Traduis en espagnol :</span><span className="afr">{t.fr}</span></>}
          placeholder="Ta traduction en espagnol…"
          check={async (typed) => {
            try {
              const r = await checkTranslation(t.fr, t.es, typed);
              if (!r.right) saveErrors([{ said: typed, corrected: r.expected, explication: r.why }]);
              return r;
            } catch {
              return { right: false, expected: t.es[0], why: "L'IA ne répond pas (Ollama) : compare avec le modèle." };
            }
          }}
          onNext={next}
        />
      )}
    />
  );
}
