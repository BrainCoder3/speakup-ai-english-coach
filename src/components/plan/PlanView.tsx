"use client";
/** Home of the 30-day programme: method, tests, and the 4 weeks of days. */
import Link from "next/link";
import { useEffect } from "react";
import { useStore } from "@/lib/store/useStore";
import { setCourse } from "@/lib/course/lang";
import { currentDay, dayDone, dayUnlocked, doneCount, TASKS } from "@/lib/plan/progress";
import { DAYS, WEEKS } from "@/data/plan";
import { Icon } from "@/components/ui/Icon";
import { PlanIntro } from "./PlanIntro";
import { TestCard } from "./TestCard";

export function PlanView() {
  const ready = useStore();
  useEffect(() => {
    if (ready) setCourse("en");
  }, [ready]);
  if (!ready) return <div className="page"><p className="muted">Chargement…</p></div>;

  const cur = currentDay();
  const finished = DAYS.filter((d) => dayDone(d.day)).length;
  const minutes = TASKS.reduce((s, t) => s + t.minutes, 0);

  return (
    <div className="page plan">
      <header className="page-head">
        <div>
          <h1>🚀 Anglais intensif : 30 jours</h1>
          <p>{finished}/30 jours terminés · environ {Math.round(minutes / 60 * 10) / 10} h de travail par jour · du B1 vers le C1.</p>
        </div>
        <Link className="btn primary" href={`/plan/${cur}`}><Icon name="arrow" />Continuer — Jour {cur}</Link>
      </header>
      <div className="progress big"><i style={{ width: `${(finished / 30) * 100}%` }} /></div>
      <TestCard finalOpen={cur >= 28 || finished >= 27} />
      {WEEKS.map((w) => (
        <section key={w.n} className="week">
          <h2>Semaine {w.n} · {w.title}</h2>
          <p className="muted">{w.goal}</p>
          <div className="days">
            {DAYS.filter((d) => d.day >= w.days[0] && d.day <= w.days[1]).map((d) => {
              const open = dayUnlocked(d.day), done = dayDone(d.day);
              const cls = `dayc ${done ? "done" : ""} ${d.day === cur ? "cur" : ""} ${open ? "" : "locked"}`;
              const body = (
                <>
                  <span className="dnum">{done ? "✓" : open ? d.day : "🔒"}</span>
                  <b>Jour {d.day}</b>
                  <small>{d.title}</small>
                  <span className="dmeta"><span className="cefr">{d.level}</span> {doneCount(d.day)}/{TASKS.length}</span>
                </>
              );
              return open ? <Link key={d.day} className={cls} href={`/plan/${d.day}`}>{body}</Link> : <div key={d.day} className={cls}>{body}</div>;
            })}
          </div>
        </section>
      ))}
      <PlanIntro />
    </div>
  );
}
