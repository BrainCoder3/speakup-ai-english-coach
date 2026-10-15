import type { ListeningText } from "../../types";

/** Unidad 5 — people, family and likes, from Argentina, Colombia and Uruguay. */
export const listen5: ListeningText[] = [
  {
    title: "Mi familia", kind: "Pódcast", rate: 0.92,
    parts: [
      {
        speaker: "Camila", accent: "esAR",
        text: "Hola, soy Camila. En mi familia somos cinco. Mi papá es alto y tiene barba; es muy divertido. Mi mamá es médica y es un poco seria, pero muy cariñosa. Tengo dos hermanos: Tomás tiene diecisiete años y le encanta el rock; Lucía tiene doce y le gustan mucho los animales. Y tenemos un perro, Toby, que es el más sociable de la casa.",
      },
    ],
    questions: [
      { q: "¿Cuántas personas hay en la familia de Camila?", answer: "Son cinco." },
      { q: "¿Cómo es el padre de Camila?", answer: "Es alto, tiene barba y es muy divertido." },
      { q: "¿Qué le gusta a Lucía?", answer: "Le gustan mucho los animales." },
    ],
  },
  {
    title: "¿Te gusta el reguetón?", kind: "Diálogo", rate: 0.92,
    parts: [
      { speaker: "Felipe", accent: "esCO", text: "Oye, Sara, ¿te gusta el reguetón?" },
      { speaker: "Sara", accent: "esUY", text: "No, no me gusta nada. Me encanta el jazz y la música clásica." },
      { speaker: "Felipe", accent: "esCO", text: "¿En serio? A mí no me gusta la música clásica. Prefiero la salsa." },
      { speaker: "Sara", accent: "esUY", text: "A mí también me gusta la salsa, pero no sé bailar." },
      { speaker: "Felipe", accent: "esCO", text: "¡Pues yo te enseño! El sábado hay un concierto en el centro." },
    ],
    questions: [
      { q: "¿Le gusta el reguetón a Sara?", answer: "No, no le gusta nada." },
      { q: "¿Qué música le encanta a Sara?", answer: "El jazz y la música clásica." },
      { q: "¿Qué hay el sábado?", answer: "Un concierto en el centro." },
    ],
  },
];
