import type { WhenCard } from "../../learnTypes";

/** Unidad 4 — « Quand utiliser quoi ? ». */
export const when4: WhenCard[] = [
  {
    title: "Este / esta / estos / estas ou esto ?",
    rows: [
      { use: "este (masc. sing.)", when: "+ nom masculin ou pour le remplacer", ex: "Este jersey es bonito." },
      { use: "esta / estos / estas", when: "s'accordent avec le nom", ex: "Estas sandalias son caras." },
      { use: "esto (neutre)", when: "chose dont on ne sait pas le nom, jamais devant un nom", ex: "¿Qué es esto?" },
    ],
    trap: "✗ esto libro → ✓ este libro",
  },
  {
    title: "Cuesta ou cuestan ?",
    rows: [
      { use: "cuesta", when: "un seul objet", ex: "¿Cuánto cuesta esta falda?" },
      { use: "cuestan", when: "plusieurs objets (ou un nom pluriel : pantalones, gafas)", ex: "¿Cuánto cuestan estos pantalones?" },
    ],
    trap: "✗ ¿Cuánto cuesta las gafas? → ✓ ¿Cuánto cuestan las gafas?",
  },
  {
    title: "Tener que, querer ou preferir ?",
    rows: [
      { use: "tener que + infinitif", when: "obligation, nécessité", ex: "Tengo que comprar pan." },
      { use: "querer + infinitif / nom", when: "désir, intention", ex: "Quiero ir de compras." },
      { use: "preferir", when: "choix entre plusieurs options", ex: "Prefiero la camisa azul." },
    ],
    trap: "✗ Tengo comprar pan → ✓ Tengo que comprar pan",
  },
];
