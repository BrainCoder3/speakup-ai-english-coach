import type { WhenCard } from "../../learnTypes";

/** Unidad 1 — « Quand utiliser quoi ? ». */
export const when1: WhenCard[] = [
  {
    title: "Ser ou tener ?",
    rows: [
      { use: "ser", when: "identité, nationalité, origine (ser de), métier", ex: "Soy Aminata, soy burkinesa, soy de Bobo, soy enfermera." },
      { use: "tener", when: "l'âge, ce qu'on possède", ex: "Tengo 25 años y tengo dos hermanos." },
    ],
    trap: "✗ Soy 25 años → ✓ Tengo 25 años",
  },
  {
    title: "Tú, usted, vosotros ou ustedes ?",
    rows: [
      { use: "tú", when: "une personne, relation familière (amis, famille, collègues jeunes)", ex: "¿Cómo te llamas?" },
      { use: "usted", when: "une personne, politesse (inconnu, client, personne âgée) — verbe à la 3e personne", ex: "¿Cómo se llama usted?" },
      { use: "vosotros", when: "plusieurs personnes, familier — en Espagne seulement", ex: "¿De dónde sois?" },
      { use: "ustedes", when: "plusieurs personnes : politesse en Espagne, toujours en Amérique latine", ex: "¿De dónde son ustedes?" },
    ],
    trap: "✗ ¿Usted tienes móvil? → ✓ ¿Usted tiene móvil? (usted se conjugue comme él)",
  },
  {
    title: "Trabajo en, trabajo de / como, soy… ?",
    rows: [
      { use: "trabajo en + lieu", when: "pour dire où tu travailles", ex: "Trabajo en un banco." },
      { use: "trabajo de / como + métier", when: "pour dire ta fonction", ex: "Trabajo como camarero." },
      { use: "soy + métier (sans article)", when: "pour dire ta profession", ex: "Soy profesora." },
    ],
    trap: "✗ Soy una profesora → ✓ Soy profesora (pas d'article après ser + métier)",
  },
];
