/** Which expression themes are studied, and how well they are known (spaced-repetition boxes). */
import { store } from "@/lib/store/store";
import { addXp } from "@/lib/game/xp";
import { themeExprs, type ExprTheme } from "@/data/expressions";

export const isStudied = (t: ExprTheme) => store.get().expr.includes(t.id);

export function markStudied(t: ExprTheme) {
  if (isStudied(t)) return;
  store.update((d) => void d.expr.push(t.id));
  addXp(10);
}

/** An expression is "known" once it was recalled correctly twice in a row (box 2+). */
export function knownCount(t: ExprTheme): number {
  const train = store.get().train;
  return themeExprs(t).filter((x) => (train[x.key]?.box ?? 0) >= 2).length;
}
