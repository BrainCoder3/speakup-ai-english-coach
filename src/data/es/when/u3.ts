import type { WhenCard } from "../../learnTypes";

/** Unidad 3 — « Quand utiliser quoi ? ». */
export const when3: WhenCard[] = [
  {
    title: "Hay, estar ou ser ?",
    rows: [
      { use: "hay", when: "dire qu'une chose EXISTE (+ un, una, nombre, nom sans article)", ex: "En Lima hay un museo muy famoso." },
      { use: "estar", when: "dire OÙ se trouve une chose précise (+ el, la, nom propre)", ex: "El museo está en el centro." },
      { use: "ser", when: "décrire ou définir", ex: "Lima es una ciudad muy grande." },
    ],
    trap: "✗ Hay el museo en el centro → ✓ El museo está en el centro · ✗ Lima es en Perú → ✓ Lima está en Perú",
  },
  {
    title: "Muy ou mucho ?",
    rows: [
      { use: "muy + adjectif / adverbe", when: "intensifier une qualité (invariable)", ex: "Es muy bonito. Está muy lejos." },
      { use: "mucho/a/os/as + nom", when: "une grande quantité (s'accorde avec le nom)", ex: "Hay muchas playas y mucho turismo." },
      { use: "verbe + mucho", when: "intensifier une action (invariable)", ex: "Llueve mucho." },
    ],
    trap: "✗ Es mucho bonito / Hay muy turistas → ✓ Es muy bonito / Hay muchos turistas",
  },
  {
    title: "Qué ou cuál ?",
    rows: [
      { use: "¿qué es…?", when: "demander une définition", ex: "¿Qué es el mate? — Una infusión." },
      { use: "¿qué + nom?", when: "choisir / identifier avec le nom exprimé", ex: "¿Qué ciudad es más grande?" },
      { use: "¿cuál es / cuáles son…?", when: "identifier un élément d'un ensemble, sans nom après", ex: "¿Cuál es la capital de Bolivia?" },
    ],
    trap: "✗ ¿Qué es la capital de Chile? → ✓ ¿Cuál es la capital de Chile?",
  },
];
