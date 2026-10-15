/**
 * The courses: English (8 levels) and Spanish (the 10 units of Aula Internacional Plus 1).
 * Level ids are unique across courses ("l1", "es0"…), so progress never collides.
 */
import type { CourseId } from "@/lib/course/lang";
import { courseOfLevel } from "@/lib/course/lang";
import { LEVELS } from "./levels";
import { ES_LEVELS } from "./es";
import type { Level, StepId } from "./types";

export interface StepDef {
  id: StepId;
  label: string;
  icon: string;
}

const STEP: Record<StepId, StepDef> = {
  learn: { id: "learn", label: "Comprendre la leçon", icon: "📖" },
  vocab: { id: "vocab", label: "Vocabulaire", icon: "🔤" },
  drill: { id: "drill", label: "Exercices", icon: "✍️" },
  translate: { id: "translate", label: "Traduction", icon: "🔁" },
  write: { id: "write", label: "Rédaction", icon: "📝" },
  repeat: { id: "repeat", label: "Écoute & répète", icon: "🎧" },
  listen: { id: "listen", label: "Compréhension orale", icon: "👂" },
  answer: { id: "answer", label: "Réponds à l'oral", icon: "🎤" },
  speak: { id: "speak", label: "Parle longtemps", icon: "🗣️" },
  mission: { id: "mission", label: "Mission", icon: "🎯" },
};

export interface Course {
  id: CourseId;
  title: string;
  subtitle: string;
  /** "Niveau" or "Unidad". */
  unit: string;
  levels: Level[];
  /** Required steps, in order: the last one validates the level. */
  steps: StepDef[];
  /** Optional steps, open as soon as the level is (not needed to pass). */
  extra: StepDef[];
}

export const COURSES: Record<CourseId, Course> = {
  en: {
    id: "en", title: "Anglais", subtitle: "8 niveaux, de A1 à C1", unit: "Niveau", levels: LEVELS,
    steps: [STEP.repeat, STEP.listen, STEP.answer, STEP.speak, STEP.mission],
    extra: [],
  },
  es: {
    id: "es", title: "Espagnol", subtitle: "Aula Internacional Plus 1 · A1 · 10 unités", unit: "Unidad", levels: ES_LEVELS,
    // Written Spanish first: understand, spell, apply the rules, translate, write. Speaking is optional.
    steps: [STEP.learn, STEP.vocab, STEP.drill, STEP.translate, STEP.write],
    extra: [STEP.repeat, STEP.listen, STEP.answer, STEP.speak, STEP.mission],
  },
};

export const ALL_LEVELS: Level[] = [...LEVELS, ...ES_LEVELS];

export const courseOf = (levelId: string) => COURSES[courseOfLevel(levelId)];
export const levelById = (id: string) => ALL_LEVELS.find((l) => l.id === id);
/** Position of a level inside its own course. */
export const levelIndex = (id: string) => courseOf(id).levels.findIndex((l) => l.id === id);
export const stepsOf = (levelId: string) => courseOf(levelId).steps;
export const extraStepsOf = (levelId: string) => courseOf(levelId).extra;
export const allStepsOf = (levelId: string) => [...stepsOf(levelId), ...extraStepsOf(levelId)];
export const nextStepHref = (levelId: string) => `/lesson/${levelId}/${stepsOf(levelId)[0].id}`;
