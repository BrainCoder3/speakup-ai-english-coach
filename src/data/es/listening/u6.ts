import type { ListeningText } from "../../types";

/** Unidad 6 — daily routines, from Mexico and Spain. */
export const listen6: ListeningText[] = [
  {
    title: "Un día en la vida de una enfermera", kind: "Reportaje", rate: 0.92,
    parts: [
      {
        speaker: "Rocío", accent: "esMX",
        text: "Trabajo en un hospital de Monterrey. Me levanto a las cinco y cuarto, me ducho y desayuno un café con pan dulce. Empiezo a trabajar a las siete en punto. Al mediodía como algo rápido en la cafetería. Salgo del hospital a las tres y vuelvo a casa en metro. Por la tarde voy al gimnasio dos veces a la semana. Ceno a las ocho y me acuesto pronto, a las diez.",
      },
    ],
    questions: [
      { q: "¿A qué hora se levanta Rocío?", answer: "A las cinco y cuarto." },
      { q: "¿Cómo vuelve a casa?", answer: "En metro." },
      { q: "¿Cuántas veces a la semana va al gimnasio?", answer: "Dos veces a la semana." },
    ],
  },
  {
    title: "¿Quedamos el viernes?", kind: "Llamada", rate: 0.95,
    parts: [
      { speaker: "Jorge", accent: "esES", text: "¡Hola, Inés! ¿Quedamos el viernes para cenar?" },
      { speaker: "Inés", accent: "esES", voice: 1, text: "El viernes no puedo, los viernes tengo clase de baile hasta las nueve y media. ¿Y el sábado?" },
      { speaker: "Jorge", accent: "esES", text: "El sábado por la mañana trabajo, pero por la noche estoy libre." },
      { speaker: "Inés", accent: "esES", voice: 1, text: "¡Perfecto! ¿A qué hora? ¿A las nueve?" },
      { speaker: "Jorge", accent: "esES", text: "Mejor a las nueve y media. ¡Hasta el sábado!" },
    ],
    questions: [
      { q: "¿Por qué no puede Inés el viernes?", answer: "Porque los viernes tiene clase de baile." },
      { q: "¿Qué hace Jorge el sábado por la mañana?", answer: "Trabaja." },
      { q: "¿A qué hora quedan al final?", answer: "A las nueve y media del sábado." },
    ],
  },
];
