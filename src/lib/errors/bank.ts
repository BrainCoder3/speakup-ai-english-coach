/**
 * Personal error bank: every sentence you got wrong comes back (spaced repetition)
 * until you can say it correctly from memory several times in a row.
 */
import { store } from "@/lib/store/store";
import type { ErrorItem } from "@/lib/store/types";
import { today } from "@/lib/progress/stats";

const INTERVALS = [0, 1, 3, 7, 16, 35]; // days before the next review, per box
export const MASTERED_BOX = INTERVALS.length - 1;
/** Above this many due errors, new lessons wait until you have reviewed. */
export const MAX_DUE = 10;

const key = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ").trim();

export const allErrors = () => store.get().errors ?? [];
export const dueErrors = () => allErrors().filter((e) => e.box < MASTERED_BOX && e.due <= today());

export function saveErrors(list: { said: string; corrected: string; explication: string }[]) {
  const fresh = list.filter((e) => e.corrected.trim() && !allErrors().some((x) => key(x.corrected) === key(e.corrected)));
  if (!fresh.length) return;
  store.update((d) => {
    d.errors = [...fresh.map((e) => ({ ...e, box: 0, due: today() })), ...(d.errors ?? [])].slice(0, 300);
  });
}

/** Said correctly: longer interval. Wrong: back to the start, due again today. */
export function gradeError(e: ErrorItem, ok: boolean) {
  store.update(() => {
    e.box = ok ? Math.min(e.box + 1, MASTERED_BOX) : 0;
    const d = new Date();
    d.setDate(d.getDate() + INTERVALS[e.box]);
    e.due = d.toISOString().slice(0, 10);
  });
}

export function removeError(e: ErrorItem) {
  store.update((d) => {
    d.errors = (d.errors ?? []).filter((x) => x !== e);
  });
}
