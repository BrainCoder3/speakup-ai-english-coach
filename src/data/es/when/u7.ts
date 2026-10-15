import type { WhenCard } from "../../learnTypes";

/** Unidad 7 — « Quand utiliser quoi ? ». */
export const when7: WhenCard[] = [
  {
    title: "De ou con ? (les plats)",
    rows: [
      { use: "de", when: "l'ingrédient principal, ce dont c'est fait", ex: "Sopa de verduras, tortilla de patatas." },
      { use: "con", when: "ce qui accompagne", ex: "Pollo con patatas, café con leche." },
    ],
    trap: "✗ tortilla con patatas (si c'est l'omelette de pommes de terre) → ✓ tortilla de patatas",
  },
  {
    title: "Lo, la, los, las ou rien ?",
    rows: [
      { use: "lo / los", when: "remplace un nom masculin déjà mentionné (avec article)", ex: "El café lo tomo solo." },
      { use: "la / las", when: "remplace un nom féminin déjà mentionné", ex: "Las patatas las como fritas." },
      { use: "rien", when: "le nom n'a pas d'article (quantité indéfinie)", ex: "¿Lleva cebolla? — No, no lleva." },
    ],
    trap: "✗ Compro la fruta y como la (après le verbe) → ✓ Compro la fruta y la como",
  },
];
