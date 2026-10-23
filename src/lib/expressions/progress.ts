/** Which expression themes are studied, and how well they are known (spaced-repetition boxes). */
import { store } from "@/lib/store/store";
import { themeExprs, type ExprTheme } from "@/data/expressions";

export const isStudied = (t: ExprTheme) => store.get().expr.includes(t.id);

export function markStudied(t: ExprTheme) {
  store.update((d) => {
    if (!d.expr.includes(t.id)) d.expr.push(t.id);
  });
}

/** An expression is "known" once it was recalled correctly twice in a row (box 2+). */
export function knownCount(t: ExprTheme): number {
  const train = store.get().train;
  return themeExprs(t).filter((x) => (train[x.key]?.box ?? 0) >= 2).length;
}
