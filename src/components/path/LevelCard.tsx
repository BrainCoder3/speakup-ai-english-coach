"use client";
import Link from "next/link";
import type { Level } from "@/data/types";
import { courseOf, stepsOf } from "@/data/courses";
import { isLevelPassed, isLevelUnlocked, levelProgress, nextStep } from "@/lib/progress/rules";
import { Icon, Stars } from "@/components/ui/Icon";

/** One level on the path: locked, current or passed. */
export function LevelCard({ level, current }: { level: Level; current: boolean }) {
  const STEPS = stepsOf(level.id);
  const unlocked = isLevelUnlocked(level.id);
  const passed = isLevelPassed(level.id);
  const p = levelProgress(level.id);
  const done = STEPS.filter((s) => p[s.id].passed).length;

  const body = (
    <>
      <div className="lnum">{!unlocked ? <Icon name="lock" /> : passed ? <Icon name="check" /> : level.n}</div>
      <div className="lbody">
        <div className="ltop">
          <span className="cefr">{level.cefr}</span>
          {passed ? <span className="done">Validé</span> : current ? <span className="now">En cours</span> : null}
        </div>
        <h3>{courseOf(level.id).unit} {level.n} · {level.title}</h3>
        <p>{level.subtitle}</p>
        <div className="steps">
          {STEPS.map((s) => (
            <span key={s.id} className={`step ${p[s.id].passed ? "ok" : ""}`}>
              {s.icon} {p[s.id].passed ? <Stars n={p[s.id].stars} /> : s.label}
            </span>
          ))}
        </div>
        <div className="progress"><i style={{ width: `${(done / STEPS.length) * 100}%` }} /></div>
      </div>
    </>
  );

  const cls = `level ${unlocked ? "" : "locked"} ${passed ? "passed" : ""} ${current ? "current" : ""}`;
  if (!unlocked) return <div className={cls} title="Valide le niveau précédent pour débloquer celui-ci">{body}</div>;
  return <Link className={cls} href={`/lesson/${level.id}/${nextStep(level.id)}`}>{body}</Link>;
}
