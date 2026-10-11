import type { Level, StepId } from "../types";
import { l1 } from "./l1";
import { l2 } from "./l2";
import { l3 } from "./l3";
import { l4 } from "./l4";
import { l5 } from "./l5";
import { l6 } from "./l6";
import { l7 } from "./l7";
import { l8 } from "./l8";

/** The learning path, in order. */
export const LEVELS: Level[] = [l1, l2, l3, l4, l5, l6, l7, l8];

export const STEPS: { id: StepId; label: string; icon: string }[] = [
  { id: "repeat", label: "Écoute & répète", icon: "🎧" },
  { id: "listen", label: "Compréhension orale", icon: "👂" },
  { id: "answer", label: "Réponds à l'oral", icon: "🎤" },
  { id: "speak", label: "Parle longtemps", icon: "🗣️" },
  { id: "mission", label: "Mission", icon: "🎯" },
];

export const levelById = (id: string) => LEVELS.find((l) => l.id === id);
export const levelIndex = (id: string) => LEVELS.findIndex((l) => l.id === id);
