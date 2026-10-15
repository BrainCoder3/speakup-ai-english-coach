/** What happens when a step is passed: stars, XP, next step or next level. */
import { CONFIG } from "@/lib/config";
import { passStep } from "@/lib/progress/rules";
import { allStepsOf, courseOf, levelIndex, nextStepHref, stepsOf } from "@/data/courses";
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
  const STEPS = stepsOf(level.id);
  const { levels, unit } = courseOf(level.id);
  const idx = STEPS.findIndex((s) => s.id === step);
  if (idx === -1) {
    // Optional step (e.g. speaking in the Spanish course): back to the required path.
    return {
      title: `Épreuve facultative validée : ${allStepsOf(level.id).find((s) => s.id === step)?.label}`,
      text: `Moyenne ${avg}/100.`,
      stars: r.stars,
      nextLabel: "Retour au parcours",
      href: nextStepHref(level.id),
    };
  }
  if (idx === STEPS.length - 1 && r.levelDone) {
    const next = levels[levelIndex(level.id) + 1];
    return {
      title: `${unit} ${level.n} validé${unit === "Unidad" ? "e" : ""} !`,
      text: next ? `Score ${avg}/100. ${unit} ${next.n} « ${next.title} » débloqué${unit === "Unidad" ? "e" : ""}.` : `Score ${avg}/100. Tu as terminé tout le parcours. Bravo !`,
      stars: r.stars,
      nextLabel: next ? `Commencer : ${unit} ${next.n}` : "Retour au parcours",
      href: next ? `/lesson/${next.id}/${STEPS[0].id}` : "/",
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
