/** XP, streak days and badge awards: every part of the app earns through here. */
import { store } from "@/lib/store/store";
import { today } from "@/lib/progress/stats";
import { BADGES, type Badge } from "./badges";

const subs = new Set<(b: Badge) => void>();
/** Notifies the UI (toast) when a badge is earned. */
export function onBadge(fn: (b: Badge) => void) {
  subs.add(fn);
  return () => void subs.delete(fn);
}

/** Awards any badge whose condition is now met. */
export function checkBadges() {
  const have = store.get().game.badges;
  const fresh = BADGES.filter((b) => !have.includes(b.id) && b.earned());
  if (!fresh.length) return;
  store.update((d) => void d.game.badges.push(...fresh.map((b) => b.id)));
  fresh.forEach((b) => subs.forEach((f) => f(b)));
}

/** Any practice counts for the daily streak, spoken or not. */
export function addXp(n: number) {
  store.update((d) => {
    d.stats.xp += n;
    if (!d.stats.days.includes(today())) d.stats.days.push(today());
  });
  checkBadges();
}
