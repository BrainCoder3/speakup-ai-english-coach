"use client";
import Link from "next/link";
import type { StepId } from "@/data/types";
import { extraStepsOf, stepsOf, type StepDef } from "@/data/courses";
import { isStepUnlocked, levelProgress } from "@/lib/progress/rules";
import { Stars } from "@/components/ui/Icon";

/** The steps of a level (required, then optional ones); locked steps are not clickable. */
export function StepTabs({ levelId, active }: { levelId: string; active: StepId }) {
  const p = levelProgress(levelId);
  const extra = extraStepsOf(levelId);

  const tab = (s: StepDef) => {
    const unlocked = isStepUnlocked(levelId, s.id);
    const cls = `tab ${s.id === active ? "on" : ""} ${p[s.id].passed ? "ok" : ""}`;
    const inner = (
      <>
        <span>{unlocked ? s.icon : "🔒"}</span>
        {s.label}
        {p[s.id].passed && <Stars n={p[s.id].stars} />}
      </>
    );
    return unlocked ? (
      <Link key={s.id} className={cls} href={`/lesson/${levelId}/${s.id}`}>{inner}</Link>
    ) : (
      <span key={s.id} className={`${cls} locked`} aria-disabled="true">{inner}</span>
    );
  };

  return (
    <>
      <nav className="tabs">{stepsOf(levelId).map(tab)}</nav>
      {extra.length > 0 && (
        <nav className="tabs extra">
          <span className="extra-label">🎙️ Oral (facultatif) :</span>
          {extra.map(tab)}
        </nav>
      )}
    </>
  );
}
