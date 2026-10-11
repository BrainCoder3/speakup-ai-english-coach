/** What happens when a step is passed: stars, XP, next step or next level. */
import { CONFIG } from "@/lib/config";
import { passStep } from "@/lib/progress/rules";
import { LEVELS, STEPS, levelIndex } from "@/data/levels";
import type { Level, StepId } from "@/data/types";

export interface Celebration {
  title: string;
  text: string;
  stars: number;
  nextLabel: string;
  href: string;
}

export function completeStep(level: Level, step: StepId, avg: number): Celebration {
  const r = passStep(level.id, step, avg);
  const idx = STEPS.findIndex((s) => s.id === step);
  if (step === "mission" && r.levelDone) {
    const next = LEVELS[levelIndex(level.id) + 1];
    return {
      title: `Niveau ${level.n} validé !`,
      text: next ? `Score ${avg}/100. Le niveau ${next.n} « ${next.title} » est débloqué.` : `Score ${avg}/100. Tu as terminé tout le parcours. Bravo !`,
      stars: r.stars,
      nextLabel: next ? `Commencer le niveau ${next.n}` : "Retour au parcours",
      href: next ? `/lesson/${next.id}/repeat` : "/",
    };
  }
  const next = STEPS[idx + 1];
  return {
    title: `Épreuve validée : ${STEPS[idx].label}`,
    text: `Moyenne ${avg}/100.`,
    stars: r.stars,
    nextLabel: `Étape suivante : ${next.label}`,
    href: `/lesson/${level.id}/${next.id}`,
  };
}

export const missionPassed = (avg: number) => avg >= CONFIG.pass.mission;
