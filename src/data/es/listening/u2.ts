import type { ListeningText } from "../../types";

/** Unidad 2 — motivations and free time, from Colombia, Spain and Mexico. */
export const listen2: ListeningText[] = [
  {
    title: "¿Por qué estudias español?", kind: "Entrevista", rate: 0.9,
    parts: [
      { speaker: "Periodista", accent: "esCO", text: "Hola, ¿cómo te llamas y por qué estudias español?" },
      { speaker: "Ibrahim", accent: "esES", text: "Me llamo Ibrahim, soy de Dakar. Estudio español porque mi empresa trabaja con clientes de Perú y de Colombia." },
      { speaker: "Periodista", accent: "esCO", text: "¿Y qué quieres hacer con el español?" },
      { speaker: "Ibrahim", accent: "esES", text: "Quiero viajar a Bogotá para conocer a mis clientes. Y también me interesa mucho la literatura colombiana." },
      { speaker: "Periodista", accent: "esCO", text: "¿Qué haces para aprender?" },
      { speaker: "Ibrahim", accent: "esES", text: "Veo series en español y hago un intercambio con una chica de Medellín los jueves." },
    ],
    questions: [
      { q: "¿Por qué estudia español Ibrahim?", answer: "Porque su empresa trabaja con clientes de Perú y de Colombia." },
      { q: "¿Para qué quiere viajar a Bogotá?", answer: "Para conocer a sus clientes." },
      { q: "¿Qué hace para aprender español?", answer: "Ve series en español y hace un intercambio." },
    ],
  },
  {
    title: "Mi fin de semana ideal", kind: "Pódcast", rate: 0.9,
    parts: [
      {
        speaker: "Valeria", accent: "esMX",
        text: "¡Hola, amigos del pódcast! Hoy hablamos del tiempo libre. Yo los sábados por la mañana hago deporte en el parque. Por la tarde leo un libro o escucho música. Y por la noche salgo a cenar con mis amigos. Los domingos no hago nada: veo una película en casa. ¿Y ustedes? ¿Qué hacen los fines de semana?",
      },
    ],
    questions: [
      { q: "¿Qué hace Valeria los sábados por la mañana?", answer: "Hace deporte en el parque." },
      { q: "¿Qué hace los sábados por la noche?", answer: "Sale a cenar con sus amigos." },
      { q: "¿Qué hace los domingos?", answer: "No hace nada, ve una película en casa." },
    ],
  },
];
