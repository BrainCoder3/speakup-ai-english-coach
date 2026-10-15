import type { ListeningText } from "../../types";

/** Unidad 9 — experiences and skills, from Spain, Mexico and Chile. */
export const listen9: ListeningText[] = [
  {
    title: "Entrevista de trabajo", kind: "Entrevista", rate: 0.92,
    parts: [
      { speaker: "Directora", accent: "esES", voice: 1, text: "Buenos días, Kwame. ¿Ha trabajado alguna vez en un hotel?" },
      { speaker: "Kwame", accent: "esMX", text: "Sí, he trabajado dos veranos en la recepción de un hotel en Acapulco." },
      { speaker: "Directora", accent: "esES", voice: 1, text: "Muy bien. ¿Qué idiomas habla?" },
      { speaker: "Kwame", accent: "esMX", text: "Hablo inglés, francés y español. También sé un poco de alemán." },
      { speaker: "Directora", accent: "esES", voice: 1, text: "¿Sabe conducir? A veces tiene que llevar a los clientes al aeropuerto." },
      { speaker: "Kwame", accent: "esMX", text: "Sí, sé conducir y tengo carné desde hace cinco años. Soy muy puntual y responsable." },
    ],
    questions: [
      { q: "¿Dónde ha trabajado Kwame?", answer: "En la recepción de un hotel en Acapulco." },
      { q: "¿Qué idiomas habla?", answer: "Inglés, francés, español y un poco de alemán." },
      { q: "¿Sabe conducir?", answer: "Sí, sabe conducir desde hace cinco años." },
    ],
  },
  {
    title: "Una vida de aventuras", kind: "Pódcast", rate: 0.95,
    parts: [
      {
        speaker: "Matías", accent: "esCL",
        text: "Me llamo Matías y tengo cuarenta años. He vivido en cuatro países: Chile, Australia, Canadá y España. He trabajado de profesor, de cocinero y de guía de montaña. He subido a muchos volcanes, pero nunca he estado en África. Este año he dejado mi trabajo en la ciudad y me he ido a vivir al campo. No sé si es para siempre, pero estoy muy contento.",
      },
    ],
    questions: [
      { q: "¿En cuántos países ha vivido Matías?", answer: "En cuatro países." },
      { q: "¿Ha estado en África?", answer: "No, nunca ha estado en África." },
      { q: "¿Qué ha hecho este año?", answer: "Ha dejado su trabajo y se ha ido a vivir al campo." },
    ],
  },
];
