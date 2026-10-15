import type { WhenCard } from "../../learnTypes";

/** Unidad 2 — « Quand utiliser quoi ? ». */
export const when2: WhenCard[] = [
  {
    title: "Porque, por, para ou por qué ?",
    rows: [
      { use: "¿por qué?", when: "pour POSER la question (deux mots, accent)", ex: "¿Por qué estudias español?" },
      { use: "porque + verbe conjugué", when: "pour RÉPONDRE avec une cause", ex: "Porque trabajo con mexicanos." },
      { use: "por + nom", when: "la cause est un nom", ex: "Por mi trabajo." },
      { use: "para + infinitif", when: "le but, l'objectif", ex: "Para viajar por Latinoamérica." },
    ],
    trap: "✗ Estudio español para mi trabajo (cause) → ✓ por mi trabajo",
  },
  {
    title: "El / la ou un / una ?",
    rows: [
      { use: "el, la, los, las", when: "chose précise, connue, ou en général (gustos)", ex: "El libro de español está en la mesa." },
      { use: "un, una, unos, unas", when: "chose non précisée, mentionnée pour la première fois", ex: "Quiero un libro de cocina." },
    ],
    trap: "✗ la problema, el foto → ✓ el problema, la foto (le genre ne suit pas toujours -o / -a)",
  },
];
