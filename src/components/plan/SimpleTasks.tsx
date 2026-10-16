"use client";
/** Review and real-world listening: done outside the exercises, ticked by the learner. */
import Link from "next/link";
import { dueErrors } from "@/lib/errors/bank";
import { markTask, taskDone } from "@/lib/plan/progress";
import { dueWords } from "@/lib/vocab";
import { INPUTS } from "@/data/plan/inputs";
import type { PlanDay } from "@/data/plan/types";
import { Icon } from "@/components/ui/Icon";

export function ReviewTask({ day }: { day: PlanDay }) {
  const errors = dueErrors().filter((e) => (e.lang ?? "en") === "en").length;
  const words = dueWords().length;
  const clear = errors === 0 && words === 0;
  return (
    <div className="zone">
      <p>À revoir aujourd&apos;hui : <b>{errors}</b> erreur(s) et <b>{words}</b> mot(s). C&apos;est la révision espacée qui transforme ce que tu as vu en mémoire durable.</p>
      <div className="qctrls">
        <Link className="btn" href="/errors"><Icon name="retry" />Mes erreurs ({errors})</Link>
        <Link className="btn" href="/notebook"><Icon name="book" />Mon carnet ({words})</Link>
        <button className="btn primary" disabled={!clear && !taskDone(day.day, "review")} onClick={() => markTask(day.day, "review")}>
          <Icon name="check" />{clear ? "Révisions faites" : "Termine d'abord tes révisions"}
        </button>
      </div>
    </div>
  );
}

export function InputTask({ day }: { day: PlanDay }) {
  const src = INPUTS[day.input % INPUTS.length];
  return (
    <div className="zone">
      <p><b>{src.name}</b> <span className="cefr">{src.level}</span> — {src.what}</p>
      <ol className="method">
        <li>Écoute une première fois <b>sans texte</b> : note ce que tu comprends.</li>
        <li>Réécoute <b>avec la transcription</b> (ou les sous-titres anglais) : note 5 expressions nouvelles.</li>
        <li>Réécoute une dernière fois et fais du <b>shadowing</b> sur 1 minute.</li>
        <li>Résume à voix haute ce que tu as entendu, en 1 minute.</li>
      </ol>
      <div className="qctrls">
        <a className="btn" href={src.url} target="_blank" rel="noreferrer"><Icon name="play" />Ouvrir la ressource</a>
        <button className="btn primary" onClick={() => markTask(day.day, "input")}><Icon name="check" />J&apos;ai écouté 45 minutes</button>
      </div>
    </div>
  );
}
