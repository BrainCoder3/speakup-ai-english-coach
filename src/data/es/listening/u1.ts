import type { ListeningText } from "../../types";

/** Unidad 1 — personal details, from Argentina, Spain and Equatorial Guinea. */
export const listen1: ListeningText[] = [
  {
    title: "En la escuela de idiomas", kind: "Diálogo", rate: 0.88,
    parts: [
      { speaker: "Secretaria", accent: "esES", text: "Buenos días. ¿Cómo se llama usted?" },
      { speaker: "Martín", accent: "esAR", text: "Me llamo Martín. Mi apellido es Rossi, erre, o, ese, ese, i." },
      { speaker: "Secretaria", accent: "esES", text: "¿Es usted italiano?" },
      { speaker: "Martín", accent: "esAR", text: "No, soy argentino, de Córdoba. Pero mi abuelo es italiano." },
      { speaker: "Secretaria", accent: "esES", text: "¿Cuántos años tiene?" },
      { speaker: "Martín", accent: "esAR", text: "Tengo treinta y cuatro años. Soy cocinero y trabajo en un restaurante." },
    ],
    questions: [
      { q: "¿De dónde es Martín?", answer: "Es argentino, de Córdoba." },
      { q: "¿Cuántos años tiene?", answer: "Tiene treinta y cuatro años." },
      { q: "¿A qué se dedica?", answer: "Es cocinero, trabaja en un restaurante." },
    ],
  },
  {
    title: "Mensaje de una nueva compañera", kind: "Mensaje de voz", rate: 0.88,
    parts: [
      {
        speaker: "Esperanza", accent: "esGQ",
        text: "¡Hola a todos! Me llamo Esperanza y soy de Malabo, en Guinea Ecuatorial. Tengo veintiséis años. Soy traductora: hablo español, francés e inglés. Trabajo en una empresa de telecomunicaciones. Mi correo es esperanza punto nsue arroba correo punto com. ¡Hasta pronto!",
      },
    ],
    questions: [
      { q: "¿De dónde es Esperanza?", answer: "Es de Malabo, en Guinea Ecuatorial." },
      { q: "¿Cuál es su profesión?", answer: "Es traductora." },
      { q: "¿Qué idiomas habla?", answer: "Habla español, francés e inglés." },
    ],
  },
];
