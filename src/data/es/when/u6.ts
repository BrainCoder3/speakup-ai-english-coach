import type { WhenCard } from "../../learnTypes";

/** Unidad 6 — « Quand utiliser quoi ? ». */
export const when6: WhenCard[] = [
  {
    title: "Es la una ou son las… ?",
    rows: [
      { use: "es la una", when: "uniquement pour 1 h (singulier)", ex: "Es la una y media." },
      { use: "son las…", when: "toutes les autres heures", ex: "Son las tres y cuarto." },
      { use: "a la una / a las…", when: "à quelle heure a lieu une action", ex: "Como a las dos." },
    ],
    trap: "✗ Son la una / Es las tres → ✓ Es la una / Son las tres",
  },
  {
    title: "El lunes ou los lunes ?",
    rows: [
      { use: "el lunes", when: "un lundi précis (ce lundi-là)", ex: "El lunes tengo un examen." },
      { use: "los lunes", when: "tous les lundis (habitude)", ex: "Los lunes voy al gimnasio." },
      { use: "sans article", when: "pour dire quel jour on est", ex: "Hoy es lunes." },
    ],
    trap: "✗ En lunes voy al gimnasio → ✓ Los lunes voy al gimnasio",
  },
  {
    title: "Verbe normal ou pronominal ?",
    rows: [
      { use: "levantarse, ducharse, acostarse, vestirse…", when: "action qu'on fait sur soi-même : me, te, se…", ex: "Me levanto a las siete." },
      { use: "levantar, duchar, acostar…", when: "action sur quelqu'un / quelque chose d'autre", ex: "Levanto la mesa. Acuesto a mi hijo." },
    ],
    trap: "✗ Yo levanto a las siete → ✓ Me levanto a las siete",
  },
];
