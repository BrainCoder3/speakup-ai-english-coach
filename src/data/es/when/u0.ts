import type { WhenCard } from "../../learnTypes";

/** Unidad 0 — « Quand utiliser quoi ? ». */
export const when0: WhenCard[] = [
  {
    title: "Hola, buenos días, buenas tardes ou buenas noches ?",
    rows: [
      { use: "hola", when: "à toute heure, de façon simple ou amicale", ex: "¡Hola, Ana!" },
      { use: "buenos días", when: "le matin (jusqu'au déjeuner, vers 13-14 h)", ex: "Buenos días, señora." },
      { use: "buenas tardes", when: "l'après-midi, jusqu'à la nuit", ex: "Buenas tardes, profesor." },
      { use: "buenas noches", when: "le soir, la nuit, et pour aller se coucher", ex: "Buenas noches, hasta mañana." },
    ],
    trap: "✗ buenos tardes → ✓ buenas tardes (tardes est féminin)",
  },
  {
    title: "¿Cómo se dice…?, ¿Qué significa…? ou ¿Cómo se escribe…?",
    rows: [
      { use: "¿Cómo se dice … en español?", when: "tu connais le mot en français et tu cherches l'espagnol", ex: "¿Cómo se dice « stylo » en español?" },
      { use: "¿Qué significa …?", when: "tu connais le mot espagnol mais pas son sens", ex: "¿Qué significa « mochila »?" },
      { use: "¿Cómo se escribe …?", when: "tu veux l'orthographe", ex: "¿Cómo se escribe « Javier »?" },
    ],
    trap: "✗ ¿Qué significa « stylo » en español? → ✓ ¿Cómo se dice « stylo » en español?",
  },
];
