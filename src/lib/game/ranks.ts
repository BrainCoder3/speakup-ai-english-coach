/** Player ranks, from the XP earned anywhere in the app. */
const RANKS = [
  { at: 0, icon: "🌱", name: "Curieux" }, { at: 100, icon: "📘", name: "Apprenti" }, { at: 250, icon: "🧭", name: "Explorateur" },
  { at: 500, icon: "💬", name: "Bavard" }, { at: 900, icon: "🎯", name: "Habitué" }, { at: 1400, icon: "🚀", name: "Confirmé" },
  { at: 2000, icon: "🧠", name: "Expert" }, { at: 3000, icon: "🎓", name: "Maître" }, { at: 4500, icon: "👑", name: "Légende" },
  { at: 7000, icon: "🌍", name: "Polyglotte" },
];

export function rankOf(xp: number) {
  const i = RANKS.reduce((k, r, n) => (xp >= r.at ? n : k), 0);
  const cur = RANKS[i], next = RANKS[i + 1] ?? null;
  return { ...cur, n: i + 1, next, pct: next ? (xp - cur.at) / (next.at - cur.at) : 1, toNext: next ? next.at - xp : 0 };
}
