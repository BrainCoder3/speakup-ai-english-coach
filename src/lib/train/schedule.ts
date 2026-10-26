/**
 * Smart session = retrieval practice + spacing + interleaving + focus on weaknesses.
 * Due and often-missed items come first, a few new items are added, and topics are mixed.
 */
import { store } from "@/lib/store/store";
import { addXp } from "@/lib/game/xp";
import { today } from "@/lib/progress/stats";
import type { TrainCard } from "@/lib/store/types";
import type { TrainItem } from "./pool";

const INTERVALS = [0, 1, 3, 7, 15, 30, 60]; // days, per box
const MAX_NEW = 8;

const card = (key: string): TrainCard | undefined => store.get().train[key];
const isDue = (key: string) => (card(key)?.due ?? "") <= today();

/** Higher = more urgent: missed often, overdue, low box. */
function priority(item: TrainItem): number {
  const c = card(item.key);
  if (!c) return 1 + Math.random();
  return 3 + c.miss * 2 - c.box + Math.random();
}

/** Same-topic items are spread apart (interleaving). */
function interleave(items: TrainItem[]): TrainItem[] {
  const out: TrainItem[] = [];
  const rest = [...items];
  while (rest.length) {
    const i = rest.findIndex((x) => x.topic !== out[out.length - 1]?.topic);
    out.push(...rest.splice(i === -1 ? 0 : i, 1));
  }
  return out;
}

export function buildSession(pool: TrainItem[], size = 20): TrainItem[] {
  const seen = pool.filter((x) => card(x.key) && isDue(x.key)).sort((a, b) => priority(b) - priority(a));
  // At most MAX_NEW new items when there is enough to review; more when there is not.
  const newCount = Math.max(MAX_NEW, size - seen.length);
  const fresh = pool.filter((x) => !card(x.key)).sort(() => Math.random() - 0.5).slice(0, newCount);
  const picked = [...seen.slice(0, size - Math.min(fresh.length, MAX_NEW)), ...fresh].slice(0, size);
  return interleave(picked.sort(() => Math.random() - 0.5));
}

/** Right on the first try → next box (longer wait); wrong → back to box 0, due today. */
export function grade(key: string, right: boolean) {
  addXp(right ? 2 : 1);
  store.update((d) => {
    const c = (d.train[key] ??= { box: 0, due: today(), seen: 0, miss: 0 });
    c.seen++;
    if (!right) c.miss++;
    c.box = right ? Math.min(c.box + 1, INTERVALS.length - 1) : 0;
    const due = new Date();
    due.setDate(due.getDate() + INTERVALS[c.box]);
    c.due = due.toISOString().slice(0, 10);
  });
}

export const dueCount = (pool: TrainItem[]) => pool.filter((x) => !card(x.key) || isDue(x.key)).length;

/** Topics with the worst error rate (at least 3 attempts). */
export function weakTopics(pool: TrainItem[], n = 6) {
  const by = new Map<string, { topic: string; href: string; seen: number; miss: number }>();
  for (const x of pool) {
    const c = card(x.key);
    if (!c) continue;
    const t = by.get(x.topic) ?? { topic: x.topic, href: x.href, seen: 0, miss: 0 };
    t.seen += c.seen;
    t.miss += c.miss;
    by.set(x.topic, t);
  }
  return [...by.values()].filter((t) => t.seen >= 3).map((t) => ({ ...t, rate: Math.round((100 * t.miss) / t.seen) }))
    .sort((a, b) => b.rate - a.rate).slice(0, n);
}
