import type { ListeningText } from "../../types";

/** Unidad 8 — neighbourhoods and directions, from Colombia and Spain. */
export const listen8: ListeningText[] = [
  {
    title: "¿Dónde está la farmacia?", kind: "Diálogo", rate: 0.92,
    parts: [
      { speaker: "Turista", accent: "esES", text: "Perdone, ¿hay alguna farmacia por aquí cerca?" },
      { speaker: "Señora", accent: "esCO", text: "Sí, claro. Siga todo recto por esta calle y gire la segunda a la derecha. La farmacia está al lado de un banco." },
      { speaker: "Turista", accent: "esES", text: "¿Está muy lejos?" },
      { speaker: "Señora", accent: "esCO", text: "No, no, está a cinco minutos a pie. Y en la esquina hay una parada de bus, si la necesita." },
      { speaker: "Turista", accent: "esES", text: "Muchas gracias, muy amable." },
    ],
    questions: [
      { q: "¿Qué busca el turista?", answer: "Una farmacia." },
      { q: "¿Al lado de qué está la farmacia?", answer: "Al lado de un banco." },
      { q: "¿A cuántos minutos está?", answer: "A cinco minutos a pie." },
    ],
  },
  {
    title: "Mi barrio", kind: "Pódcast", rate: 0.92,
    parts: [
      {
        speaker: "Nerea", accent: "esES", voice: 1,
        text: "Vivo en Lavapiés, un barrio antiguo de Madrid. Es un barrio con mucho encanto y mucha vida: hay gente de todo el mundo, bares, teatros y un mercado precioso. Está muy bien comunicado, la estación de metro está aquí al lado. Lo que menos me gusta es que hay pocas zonas verdes y por la noche es un poco ruidoso. Pero lo que más me gusta es la gente.",
      },
    ],
    questions: [
      { q: "¿Cómo es el barrio de Nerea?", answer: "Antiguo, con mucho encanto y mucha vida." },
      { q: "¿Qué es lo que menos le gusta?", answer: "Que hay pocas zonas verdes y por la noche es ruidoso." },
      { q: "¿Qué es lo que más le gusta?", answer: "La gente." },
    ],
  },
];
