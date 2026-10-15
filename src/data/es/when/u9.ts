import type { WhenCard } from "../../learnTypes";

/** Unidad 9 — « Quand utiliser quoi ? ». */
export const when9: WhenCard[] = [
  {
    title: "Saber ou poder ?",
    rows: [
      { use: "saber + infinitif", when: "compétence apprise", ex: "Sé conducir. Sé nadar." },
      { use: "poder + infinitif", when: "possibilité ou permission dans une situation", ex: "Hoy no puedo conducir: no tengo el coche." },
    ],
    trap: "✗ Puedo nadar (pour dire que j'ai appris) → ✓ Sé nadar",
  },
  {
    title: "Pretérito perfecto ou présent ?",
    rows: [
      { use: "he + participe", when: "expérience de ta vie, sans date précise (alguna vez, nunca, varias veces)", ex: "He estado en México dos veces." },
      { use: "présent", when: "habitude ou situation actuelle", ex: "Vivo en Dakar y trabajo en un banco." },
    ],
    trap: "✗ Nunca estoy en Japón (expérience) → ✓ Nunca he estado en Japón",
  },
  {
    title: "Nunca avant ou après le verbe ?",
    rows: [
      { use: "nunca + verbe", when: "nunca devant : pas de no", ex: "Nunca he estado en Cuba." },
      { use: "no + verbe + nunca", when: "nunca après : il faut no devant le verbe", ex: "No he estado nunca en Cuba." },
    ],
    trap: "✗ He estado nunca en Cuba → ✓ Nunca he estado / No he estado nunca en Cuba",
  },
];
