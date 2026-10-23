/** Useful English expressions, grouped by theme. */

/** [expression, French meaning, example sentence containing the expression, when to use it]. */
export type ExprRow = [en: string, fr: string, ex: string, use: string];

export interface ExprTheme {
  id: string;
  title: string;
  icon: string;
  items: ExprRow[];
}

export interface Expr {
  key: string;
  en: string;
  fr: string;
  ex: string;
  use: string;
}
