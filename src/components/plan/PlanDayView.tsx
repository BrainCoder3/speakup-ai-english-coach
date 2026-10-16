"use client";
/** One day of the programme: 7 tasks, opened one at a time, ticked as they are completed. */
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useStore } from "@/lib/store/useStore";
import { setCourse } from "@/lib/course/lang";
import { dayDone, dayUnlocked, doneCount, taskDone, taskScore, TASKS, type PlanTask } from "@/lib/plan/progress";
import { DAYS } from "@/data/plan";
import { Icon } from "@/components/ui/Icon";
import { GrammarTask } from "./GrammarTask";
import { ProductionTask } from "./ProductionTask";
import { ShadowTask } from "./ShadowTask";
import { InputTask, ReviewTask } from "./SimpleTasks";
import { VocabTask } from "./VocabTask";

export function PlanDayView({ n }: { n: number }) {
  const ready = useStore();
  const router = useRouter();
  const day = DAYS[n - 1];
  const [open, setOpen] = useState<PlanTask | null>(null);
  const finished = ready && day ? doneCount(n) : 0;

  const [seen, setSeen] = useState(finished);
  // A task has just been completed: move on to the next one not done yet.
  if (finished !== seen) {
    setSeen(finished);
    setOpen(null);
  }

  useEffect(() => {
    if (!ready) return;
    setCourse("en");
    if (!day || !dayUnlocked(n)) router.replace("/plan");
  }, [ready, day, n, router]);
  if (!ready || !day || !dayUnlocked(n)) return <div className="page"><p className="muted">Chargement…</p></div>;

  const first = TASKS.find((t) => !taskDone(n, t.id))?.id ?? null;
  const shown = open ?? first;
  const body = (t: PlanTask) =>
    t === "review" ? <ReviewTask day={day} /> : t === "grammar" ? <GrammarTask day={day} /> : t === "vocab" ? <VocabTask day={day} />
      : t === "shadow" ? <ShadowTask day={day} /> : t === "input" ? <InputTask day={day} /> : <ProductionTask day={day} kind={t === "speak" ? "speak" : "write"} />;

  return (
    <div className="page plan-day">
      <header className="page-head">
        <div>
          <Link className="link" href="/plan"><Icon name="back" />Programme 30 jours</Link>
          <h1>Jour {n} · {day.title} <span className="cefr">{day.level}</span></h1>
          <p>Thème du vocabulaire : {day.topic}. Fais les tâches dans l&apos;ordre ; les 5 marquées ★ valident la journée.</p>
        </div>
        {dayDone(n) && n < 30 && <Link className="btn primary" href={`/plan/${n + 1}`}><Icon name="arrow" />Jour {n + 1}</Link>}
      </header>
      {dayDone(n) && <p className="okmsg">🎉 Journée validée ! Reviens demain pour le jour {Math.min(30, n + 1)} — la régularité est la clé.</p>}
      <div className="tasks">
        {TASKS.map((t) => {
          const done = taskDone(n, t.id), isOpen = shown === t.id;
          return (
            <section key={t.id} className={`task ${done ? "done" : ""} ${isOpen ? "open" : ""}`}>
              <button className="task-head" onClick={() => setOpen(isOpen ? null : t.id)} aria-expanded={isOpen}>
                <span className="tick">{done ? "✓" : t.icon}</span>
                <b>{t.label}{t.core ? " ★" : ""}</b>
                <small>~{t.minutes} min{done && taskScore(n, t.id) > 1 ? ` · ${taskScore(n, t.id)}/100` : ""}</small>
              </button>
              {isOpen && <div className="task-body">{body(t.id)}</div>}
            </section>
          );
        })}
      </div>
    </div>
  );
}
