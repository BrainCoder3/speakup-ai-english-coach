/** Expressions as typed-recall items: the example sentence with the expression blanked out. */
import { store } from "@/lib/store/store";
import { EXPR_THEMES, themeExprs, type Expr, type ExprTheme } from "@/data/expressions";
import type { TrainItem } from "@/lib/train/pool";

const reEscape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function exprItem(t: ExprTheme, x: Expr): TrainItem {
  const blanked = x.ex.replace(new RegExp(reEscape(x.en), "i"), "___");
  return {
    key: x.key, kind: "expressions", topic: t.title, href: `/expressions/${t.id}`,
    prompt: `${blanked}  (= ${x.fr})`, answers: [x.en], why: `${x.use} Exemple : ${x.ex}`,
  };
}

export const themeItems = (t: ExprTheme): TrainItem[] => themeExprs(t).map((x) => exprItem(t, x));

/** Items of every theme the learner has studied. */
export const exprItems = (): TrainItem[] =>
  EXPR_THEMES.filter((t) => store.get().expr.includes(t.id)).flatMap(themeItems);
