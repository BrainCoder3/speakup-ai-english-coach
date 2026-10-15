import type { ListeningText } from "../../types";

/** Unidad 4 — shopping, from Spain, Peru and Venezuela. */
export const listen4: ListeningText[] = [
  {
    title: "En una tienda de ropa", kind: "Diálogo", rate: 0.92,
    parts: [
      { speaker: "Dependienta", accent: "esES", text: "Buenas tardes. ¿Qué deseaba?" },
      { speaker: "Clienta", accent: "esPE", text: "Hola. Quería una chaqueta para el invierno. ¿Cuánto cuesta esta negra?" },
      { speaker: "Dependienta", accent: "esES", text: "Esa cuesta noventa y cinco euros." },
      { speaker: "Clienta", accent: "esPE", text: "Uf, es un poco cara. ¿Tiene algo más barato?" },
      { speaker: "Dependienta", accent: "esES", text: "Sí, esta gris cuesta sesenta euros. Es muy práctica." },
      { speaker: "Clienta", accent: "esPE", text: "Prefiero la gris, entonces. Me la llevo." },
    ],
    questions: [
      { q: "¿Qué busca la clienta?", answer: "Una chaqueta para el invierno." },
      { q: "¿Cuánto cuesta la chaqueta negra?", answer: "Noventa y cinco euros." },
      { q: "¿Qué chaqueta compra al final?", answer: "La gris, que cuesta sesenta euros." },
    ],
  },
  {
    title: "Preparando la maleta", kind: "Mensaje de voz", rate: 0.92,
    parts: [
      {
        speaker: "Andrea", accent: "esVE",
        text: "¡Hola, Luis! Mañana vamos a la playa, ¿no? Yo llevo el bañador, unas sandalias, dos camisetas y la crema solar. Tú tienes que llevar la toalla grande y el paraguas, porque dicen que llueve el domingo. Ah, y no tengo gafas de sol. ¿Tienes unas para mí? ¡Chao!",
      },
    ],
    questions: [
      { q: "¿Adónde van Andrea y Luis?", answer: "Van a la playa." },
      { q: "¿Qué tiene que llevar Luis?", answer: "La toalla grande y el paraguas." },
      { q: "¿Qué no tiene Andrea?", answer: "No tiene gafas de sol." },
    ],
  },
];
