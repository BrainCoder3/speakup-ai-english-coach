import type { ListeningText } from "../../types";

/** Unidad 0 — greetings in class, from Spain and Mexico. */
export const listen0: ListeningText[] = [
  {
    title: "Primer día de clase", kind: "Diálogo", rate: 0.85,
    parts: [
      { speaker: "Profesora", accent: "esES", text: "¡Buenos días! Me llamo Carmen. Soy la profesora de español. ¿Cómo te llamas?" },
      { speaker: "Kofi", accent: "esMX", text: "Hola, buenos días. Me llamo Kofi." },
      { speaker: "Profesora", accent: "esES", text: "¿Cómo se escribe tu nombre?" },
      { speaker: "Kofi", accent: "esMX", text: "Ca, o, efe, i. Kofi." },
      { speaker: "Profesora", accent: "esES", text: "Muy bien, gracias. Abrid el libro en la página ocho, por favor." },
    ],
    questions: [
      { q: "¿Cómo se llama la profesora?", answer: "Se llama Carmen." },
      { q: "¿Cómo se llama el estudiante?", answer: "Se llama Kofi." },
      { q: "¿En qué página abren el libro?", answer: "En la página ocho." },
    ],
  },
  {
    title: "En la clase", kind: "Diálogo", rate: 0.85,
    parts: [
      { speaker: "Lupe", accent: "esMX", text: "Perdona, ¿cómo se dice computer en español?" },
      { speaker: "Andrés", accent: "esES", text: "En España se dice ordenador. En México se dice computadora." },
      { speaker: "Lupe", accent: "esMX", text: "¡Ah, vale! ¿Y qué significa pizarra?" },
      { speaker: "Andrés", accent: "esES", text: "Es esto, mira. Aquí escribe el profesor. Bueno, hasta luego." },
      { speaker: "Lupe", accent: "esMX", text: "¡Hasta luego! ¡Gracias!" },
    ],
    questions: [
      { q: "¿Cómo se dice computer en España?", answer: "Se dice ordenador." },
      { q: "¿Y en México?", answer: "Se dice computadora." },
      { q: "¿Qué pregunta Lupe después?", answer: "Pregunta qué significa pizarra." },
    ],
  },
];
