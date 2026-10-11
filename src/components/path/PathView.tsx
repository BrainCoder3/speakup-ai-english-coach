"use client";
/** Home: KPIs + the 8 levels (locked until the previous one is passed). */
import Link from "next/link";
import { useStore } from "@/lib/store/useStore";
import { currentLevelIndex, nextStep } from "@/lib/progress/rules";
import { summary } from "@/lib/progress/stats";
import { LEVELS } from "@/data/levels";
import { Icon } from "@/components/ui/Icon";
import { LevelCard } from "./LevelCard";

export function PathView() {
  const ready = useStore();
  if (!ready) return <div className="page"><p className="muted">Chargement de ta progression…</p></div>;

  const s = summary();
  const cur = currentLevelIndex();
  const level = LEVELS[cur];
  const kpis: [string | number, string][] = [
    [`${s.levelsPassed}/${LEVELS.length}`, "niveaux validés"],
    [s.xp, "XP"],
    [`${s.streak} 🔥`, "jours d'affilée"],
    [s.pron ?? "–", "prononciation moy."],
    [s.grammar ?? "–", "grammaire moy."],
  ];

  return (
    <div className="page">
      <header className="page-head">
        <div>
          <h1>Ton parcours</h1>
          <p>Valide chaque épreuve pour débloquer le niveau suivant. Pas de raccourci : il faut parler !</p>
        </div>
        <Link className="btn primary" href={`/lesson/${level.id}/${nextStep(level.id)}`}>
          <Icon name="arrow" />Continuer — Niveau {level.n}
        </Link>
      </header>
      <div className="kpis">
        {kpis.map(([v, l]) => (
          <div className="kpi" key={l}><b>{v}</b><small>{l}</small></div>
        ))}
      </div>
      {s.weakPoints.length > 0 && (
        <p className="muted">À travailler : {s.weakPoints.map(([k, n]) => `${k} (${n})`).join(", ")}</p>
      )}
      <div className="levels">
        {LEVELS.map((l, i) => <LevelCard key={l.id} level={l} index={i} current={i === cur} />)}
      </div>
    </div>
  );
}
