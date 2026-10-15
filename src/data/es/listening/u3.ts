import type { ListeningText } from "../../types";

/** Unidad 3 — places and weather, from Chile and Cuba. */
export const listen3: ListeningText[] = [
  {
    title: "Chile, un país muy largo", kind: "Reportaje", rate: 0.92,
    parts: [
      {
        speaker: "Guía", accent: "esCL",
        text: "Chile está en el sur de América. Es un país muy largo y estrecho, entre la cordillera de los Andes y el océano Pacífico. En el norte está el desierto de Atacama, el desierto más seco del mundo. En el centro está Santiago, la capital, con más de seis millones de habitantes. Y en el sur hay lagos, volcanes y glaciares. Allí hace mucho frío y llueve mucho.",
      },
    ],
    questions: [
      { q: "¿Dónde está el desierto de Atacama?", answer: "En el norte de Chile." },
      { q: "¿Cuál es la capital de Chile?", answer: "Santiago." },
      { q: "¿Qué tiempo hace en el sur?", answer: "Hace mucho frío y llueve mucho." },
    ],
  },
  {
    title: "El tiempo en Cuba", kind: "Llamada", rate: 0.92,
    parts: [
      { speaker: "Yanet", accent: "esCU", text: "¡Oye, Carlos! Te llamo desde La Habana. Aquí hace muchísimo calor, unos treinta y cuatro grados." },
      { speaker: "Carlos", accent: "esES", text: "¡Qué envidia! En Madrid hace frío y está nublado. ¿Y llueve mucho allí?" },
      { speaker: "Yanet", accent: "esCU", text: "En verano sí, llueve casi todas las tardes. El clima es tropical. Pero hay playas preciosas y la gente es muy simpática." },
    ],
    questions: [
      { q: "¿Desde dónde llama Yanet?", answer: "Desde La Habana, en Cuba." },
      { q: "¿Qué tiempo hace en Madrid?", answer: "Hace frío y está nublado." },
      { q: "¿Cómo es el clima en Cuba?", answer: "Es tropical, hace calor y llueve en verano." },
    ],
  },
];
