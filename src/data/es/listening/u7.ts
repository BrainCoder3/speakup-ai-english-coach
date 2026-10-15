import type { ListeningText } from "../../types";

/** Unidad 7 — restaurants and food, from Spain and Peru. */
export const listen7: ListeningText[] = [
  {
    title: "En el restaurante", kind: "Diálogo", rate: 0.92,
    parts: [
      { speaker: "Camarero", accent: "esES", text: "Buenas tardes. ¿Qué van a tomar de primero?" },
      { speaker: "Clienta", accent: "esES", voice: 1, text: "Para mí, gazpacho. ¿Y la sopa de qué es?" },
      { speaker: "Camarero", accent: "esES", text: "De pescado. Está muy buena." },
      { speaker: "Cliente", accent: "esPE", text: "Entonces yo, la sopa. Y de segundo, el pollo asado. ¿Viene con acompañamiento?" },
      { speaker: "Camarero", accent: "esES", text: "Sí, viene con patatas fritas o con ensalada." },
      { speaker: "Cliente", accent: "esPE", text: "Con ensalada, por favor. Y para beber, una botella de agua sin gas." },
    ],
    questions: [
      { q: "¿Qué toma la clienta de primero?", answer: "Gazpacho." },
      { q: "¿De qué es la sopa?", answer: "De pescado." },
      { q: "¿Con qué toma el pollo el cliente?", answer: "Con ensalada." },
    ],
  },
  {
    title: "La comida peruana", kind: "Pódcast", rate: 0.92,
    parts: [
      {
        speaker: "Chef", accent: "esPE",
        text: "La cocina peruana es una de las más famosas del mundo. El plato más típico es el ceviche: lleva pescado crudo, limón, cebolla, ají y sal. El pescado no se cocina: el limón lo prepara. También comemos mucho arroz, papas de muchos colores y maíz. Y para beber, la chicha morada, una bebida de maíz morado.",
      },
    ],
    questions: [
      { q: "¿Cuál es el plato más típico de Perú?", answer: "El ceviche." },
      { q: "¿Qué lleva el ceviche?", answer: "Pescado crudo, limón, cebolla, ají y sal." },
      { q: "¿De qué es la chicha morada?", answer: "De maíz morado." },
    ],
  },
];
