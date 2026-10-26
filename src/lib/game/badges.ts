/** Achievements, computed from the saved progress. */
import { store } from "@/lib/store/store";
import { streak } from "@/lib/progress/stats";
import { isLevelPassed } from "@/lib/progress/rules";
import { dayDone } from "@/lib/plan/progress";
import { knownCount } from "@/lib/expressions/progress";
import { ALL_LEVELS } from "@/data/courses";
import { EXPR_THEMES } from "@/data/expressions";

export interface Badge {
  id: string;
  icon: string;
  name: string;
  desc: string;
  earned: () => boolean;
}

const g = () => store.get();
const known = () => EXPR_THEMES.reduce((n, t) => n + knownCount(t), 0);
const planDays = () => Array.from({ length: 30 }, (_, i) => i + 1).filter(dayDone).length;
const passedSteps = () => Object.values(g().levels).some((lp) => Object.values(lp).some((s) => s.passed));

export const BADGES: Badge[] = [
  { id: "first", icon: "👣", name: "Premier pas", desc: "Valider ta première épreuve", earned: passedSteps },
  { id: "level1", icon: "🏅", name: "Niveau validé", desc: "Valider un niveau entier", earned: () => ALL_LEVELS.some((l) => isLevelPassed(l.id)) },
  { id: "streak3", icon: "🔥", name: "Sur la lancée", desc: "3 jours d'affilée", earned: () => streak() >= 3 },
  { id: "streak7", icon: "🔥", name: "Une semaine !", desc: "7 jours d'affilée", earned: () => streak() >= 7 },
  { id: "streak30", icon: "🌋", name: "Inarrêtable", desc: "30 jours d'affilée", earned: () => streak() >= 30 },
  { id: "xp500", icon: "⭐", name: "500 XP", desc: "Gagner 500 points d'expérience", earned: () => g().stats.xp >= 500 },
  { id: "xp2000", icon: "🌟", name: "2 000 XP", desc: "Gagner 2 000 points d'expérience", earned: () => g().stats.xp >= 2000 },
  { id: "expr5", icon: "📚", name: "Curieux d'expressions", desc: "Étudier 5 thèmes d'expressions", earned: () => g().expr.length >= 5 },
  { id: "exprAll", icon: "🎓", name: "Bibliothèque complète", desc: "Étudier les 14 thèmes d'expressions", earned: () => g().expr.length >= EXPR_THEMES.length },
  { id: "known25", icon: "🧩", name: "25 expressions en poche", desc: "Maîtriser 25 expressions (2 réussites de suite)", earned: () => known() >= 25 },
  { id: "known75", icon: "💎", name: "75 expressions en poche", desc: "Maîtriser 75 expressions", earned: () => known() >= 75 },
  { id: "blitz20", icon: "⚡", name: "Éclair", desc: "Marquer 200 points au Défi éclair", earned: () => g().game.bestBlitz >= 200 },
  { id: "blitz50", icon: "🌩️", name: "Foudroyant", desc: "Marquer 500 points au Défi éclair", earned: () => g().game.bestBlitz >= 500 },
  { id: "goal3", icon: "🎯", name: "Régulier", desc: "Réussir 3 objectifs du jour", earned: () => g().game.goalDays.length >= 3 },
  { id: "plan7", icon: "🚀", name: "Première semaine du plan", desc: "Finir 7 jours du programme de 30 jours", earned: () => planDays() >= 7 },
  { id: "plan30", icon: "🏆", name: "30 jours terminés", desc: "Finir le programme complet", earned: () => planDays() >= 30 },
];
