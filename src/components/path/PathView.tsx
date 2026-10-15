"use client";
/** Home: KPIs + the 8 levels (locked until the previous one is passed). */
import Link from "next/link";
import { useStore } from "@/lib/store/useStore";
import { currentLevelIndex, nextStep } from "@/lib/progress/rules";
import { summary } from "@/lib/progress/stats";
import { COURSES } from "@/data/courses";
import { activeCourse } from "@/lib/course/lang";
import { CourseSwitch } from "@/components/shell/CourseSwitch";
import { Icon } from "@/components/ui/Icon";
import { LevelCard } from "./LevelCard";

export function PathView() {
  const ready = useStore();
  if (!ready) return <div className="page"><p className="muted">Chargement de ta progression…</p></div>;

  const s = summary();
  const course = COURSES[activeCourse()];
  const cur = currentLevelIndex(course.id);
  const level = course.levels[cur];
  const kpis: [string | number, string][] = [
    [`${s.levelsPassed}/${s.levelsTotal}`, course.id === "es" ? "unités validées" : "niveaux validés"],
    [s.xp, "XP"],
    [`${s.streak} 🔥`, "jours d'affilée"],
    [s.pron ?? "–", "prononciation moy."],
    [s.grammar ?? "–", "grammaire moy."],
  ];

  return (
    <div className="page">
      <header className="page-head">
        <div>
          <h1>Ton parcours : {course.title}</h1>
          <p>{course.subtitle}. Valide chaque épreuve pour débloquer la suite. Pas de raccourci : il faut parler !</p>
        </div>
        <Link className="btn primary" href={`/lesson/${level.id}/${nextStep(level.id)}`}>
          <Icon name="arrow" />Continuer — {course.unit} {level.n}
        </Link>
      </header>
      <CourseSwitch />
      <div className="kpis">
        {kpis.map(([v, l]) => (
          <div className="kpi" key={l}><b>{v}</b><small>{l}</small></div>
        ))}
      </div>
      {s.weakPoints.length > 0 && (
        <p className="muted">À travailler : {s.weakPoints.map(([k, n]) => `${k} (${n})`).join(", ")}</p>
      )}
      <div className="levels">
        {course.levels.map((l, i) => <LevelCard key={l.id} level={l} current={i === cur} />)}
      </div>
    </div>
  );
}
