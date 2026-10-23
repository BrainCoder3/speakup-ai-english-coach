"use client";
/** Useful expressions: themes to study, then typed from memory with spaced repetition. */
import Link from "next/link";
import { useStore } from "@/lib/store/useStore";
import { activeCourse } from "@/lib/course/lang";
import { EXPR_THEMES } from "@/data/expressions";
import { isStudied, knownCount } from "@/lib/expressions/progress";
import { dueCount } from "@/lib/train/schedule";
import { exprItems } from "@/lib/expressions/items";
import { CourseSwitch } from "@/components/shell/CourseSwitch";
import { Icon } from "@/components/ui/Icon";

export function ExpressionsView() {
  const ready = useStore();
  if (!ready) return <div className="page"><p className="muted">Chargement…</p></div>;

  const total = EXPR_THEMES.reduce((n, t) => n + t.items.length, 0);
  const known = EXPR_THEMES.reduce((n, t) => n + knownCount(t), 0);
  const due = dueCount(exprItems());
  return (
    <div className="page exprs-page">
      <header className="page-head">
        <div>
          <h1>📚 Expressions utiles</h1>
          <p>{total} expressions que les anglophones emploient tout le temps. Tu les lis, tu les comprends, tu les retapes de mémoire, puis tu les utilises dans tes phrases.</p>
        </div>
        {due > 0 && <Link className="btn primary" href="/train"><Icon name="retry" />Réviser ({due} à revoir)</Link>}
      </header>
      <CourseSwitch />
      {activeCourse() === "es" && <p className="warn">Cette section est en anglais : repasse sur « Anglais » pour la suivre.</p>}
      <div className="kpis">
        <div className="kpi"><b>{EXPR_THEMES.filter(isStudied).length}/{EXPR_THEMES.length}</b><small>thèmes étudiés</small></div>
        <div className="kpi"><b>{known}/{total}</b><small>expressions maîtrisées</small></div>
      </div>
      <div className="themes">
        {EXPR_THEMES.map((t) => (
          <Link key={t.id} href={`/expressions/${t.id}`} className={`theme ${isStudied(t) ? "seen" : ""}`}>
            <span className="ticon" aria-hidden="true">{t.icon}</span>
            <b>{t.title}</b>
            <small>{isStudied(t) ? `${knownCount(t)}/${t.items.length} maîtrisées` : `${t.items.length} expressions à découvrir`}</small>
          </Link>
        ))}
      </div>
    </div>
  );
}
