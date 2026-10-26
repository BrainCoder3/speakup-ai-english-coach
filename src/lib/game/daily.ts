/** Three small goals per day; doing all of them gives a bonus. */
import { store } from "@/lib/store/store";
import { today } from "@/lib/progress/stats";
import { addXp, checkBadges } from "./xp";

export const DAILY = [
  { id: "train", icon: "🧠", label: "Faire la séance d'entraînement ciblé", href: "/train" },
  { id: "expr", icon: "📚", label: "Étudier et tester un thème d'expressions", href: "/expressions" },
  { id: "blitz", icon: "⚡", label: "Jouer un Défi éclair (onglet Entraînement)", href: "/train" },
] as const;

export type DailyId = (typeof DAILY)[number]["id"];
export const GOAL_BONUS = 30;

export const dailyDone = (): string[] => {
  const d = store.get().game.daily;
  return d.date === today() ? d.tasks : [];
};

export function markDaily(id: DailyId) {
  if (dailyDone().includes(id)) return;
  store.update((d) => {
    if (d.game.daily.date !== today()) d.game.daily = { date: today(), tasks: [] };
    d.game.daily.tasks.push(id);
  });
  if (dailyDone().length === DAILY.length && !store.get().game.goalDays.includes(today())) {
    store.update((d) => void d.game.goalDays.push(today()));
    addXp(GOAL_BONUS);
  }
  checkBadges();
}
