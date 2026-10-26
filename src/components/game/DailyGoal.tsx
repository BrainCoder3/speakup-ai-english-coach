"use client";
/** Today's three small goals, with a bonus when they are all done. */
import Link from "next/link";
import { DAILY, GOAL_BONUS, dailyDone } from "@/lib/game/daily";

export function DailyGoal() {
  const done = dailyDone();
  const all = done.length === DAILY.length;
  return (
    <section className={`card daily ${all ? "all" : ""}`}>
      <div className="daily-head">
        <h3>🎯 Objectif du jour</h3>
        <span className="pill">{done.length}/{DAILY.length}</span>
      </div>
      <ul>
        {DAILY.map((t) => (
          <li key={t.id} className={done.includes(t.id) ? "ok" : ""}>
            <span className="tick" aria-hidden="true">{done.includes(t.id) ? "✓" : ""}</span>
            <span>{t.icon} {t.label}</span>
            {!done.includes(t.id) && <Link className="link" href={t.href}>Y aller →</Link>}
          </li>
        ))}
      </ul>
      <p className="muted">{all ? `🎉 Objectif atteint : +${GOAL_BONUS} XP de bonus. Reviens demain pour garder ta série !` : `Les 3 objectifs réussis = +${GOAL_BONUS} XP de bonus. Compte aussi pour ta série 🔥.`}</p>
    </section>
  );
}
