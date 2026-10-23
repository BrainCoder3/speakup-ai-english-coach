import { THEMES_A } from "./a";
import { THEMES_B } from "./b";
import { THEMES_C } from "./c";
import { THEMES_D } from "./d";
import type { Expr, ExprTheme } from "./types";

export type { Expr, ExprTheme };

export const EXPR_THEMES: ExprTheme[] = [...THEMES_A, ...THEMES_B, ...THEMES_C, ...THEMES_D];

/** Every expression of a theme, with a stable key (used by spaced repetition). */
export const themeExprs = (t: ExprTheme): Expr[] =>
  t.items.map(([en, fr, ex, use], i) => ({ key: `en:x:${t.id}:${i}`, en, fr, ex, use }));

export const themeById = (id: string) => EXPR_THEMES.find((t) => t.id === id);
