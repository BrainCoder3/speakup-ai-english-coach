/** Practice statistics: words spoken, scores, weak points, streak. */
import { store } from "@/lib/store/store";
import { LEVELS } from "@/data/levels";
import { isLevelPassed } from "./rules";

export const today = () => new Date().toISOString().slice(0, 10);

export function trackSpeech(text: string) {
  store.update((d) => {
    d.stats.turns++;
    d.stats.words += text.split(/\s+/).filter(Boolean).length;
    if (!d.stats.days.includes(today())) d.stats.days.push(today());
    d.stats.xp += 1;
  });
}

export function trackScore(kind: "pron" | "grammar", score: number) {
  store.update((d) => {
    const list = kind === "pron" ? d.stats.pron : d.stats.scores;
    list.push(score);
    if (list.length > 50) list.splice(0, list.length - 50);
  });
}

export function trackMistakes(types: string[]) {
  store.update((d) => types.forEach((t) => (d.stats.mistakes[t] = (d.stats.mistakes[t] ?? 0) + 1)));
}

export function streak(): number {
  const days = new Set(store.get().stats.days);
  const d = new Date();
  if (!days.has(d.toISOString().slice(0, 10))) d.setDate(d.getDate() - 1); // today not practised yet
  let n = 0;
  while (days.has(d.toISOString().slice(0, 10))) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}

const average = (a: number[]) => (a.length ? Math.round(a.reduce((x, y) => x + y, 0) / a.length) : null);

export function summary() {
  const s = store.get().stats;
  return {
    xp: s.xp,
    streak: streak(),
    words: s.words,
    grammar: average(s.scores.slice(-20)),
    pron: average(s.pron.slice(-20)),
    levelsPassed: LEVELS.filter((l) => isLevelPassed(l.id)).length,
    weakPoints: Object.entries(s.mistakes).sort((a, b) => b[1] - a[1]).slice(0, 3),
  };
}
