import type { WhenCard } from "../../learnTypes";

/** Unidad 8 — « Quand utiliser quoi ? ». */
export const when8: WhenCard[] = [
  {
    title: "Ningún, algún ou un ?",
    rows: [
      { use: "no hay ningún / ninguna", when: "aucun (toujours avec no)", ex: "No hay ningún cine." },
      { use: "¿hay algún / alguna…?", when: "surtout dans les questions : « y a-t-il un… ? »", ex: "¿Hay alguna farmacia por aquí?" },
      { use: "ninguno / alguno / uno", when: "sans répéter le nom", ex: "No, no hay ninguno." },
    ],
    trap: "✗ Hay ningún parque → ✓ No hay ningún parque",
  },
  {
    title: "Hay un… ou está el… ? (en ville)",
    rows: [
      { use: "¿hay un / algún…?", when: "tu ne sais pas si ce lieu existe", ex: "¿Hay un banco por aquí?" },
      { use: "¿dónde está el / la…?", when: "tu sais qu'il existe, tu cherches où", ex: "¿Dónde está la estación?" },
    ],
    trap: "✗ ¿Dónde hay la estación? → ✓ ¿Dónde está la estación?",
  },
  {
    title: "Poco, bastante, mucho ou demasiado ?",
    rows: [
      { use: "poco/a/os/as", when: "en petite quantité", ex: "Hay poca gente." },
      { use: "bastante(s)", when: "en quantité suffisante, assez", ex: "Hay bastantes tiendas." },
      { use: "mucho/a/os/as", when: "en grande quantité", ex: "Hay muchos parques." },
      { use: "demasiado/a/os/as", when: "trop (excès, négatif)", ex: "Hay demasiado tráfico." },
    ],
    trap: "✗ Hay demasiado coches → ✓ Hay demasiados coches (accord)",
  },
];
