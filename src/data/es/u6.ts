import type { Level } from "../types";

/** Unidad 6 — Día a día (livre p. 84). */
export const u6: Level = {
  id: "es6", n: 6, cefr: "A1", title: "Día a día", subtitle: "Parler de ses habitudes, de la fréquence et de l'heure",
  style: "short simple Spanish sentences about daily routines, times and frequency, use reflexive verbs and irregular present",
  book: { unit: 6, page: 84 },
  lesson: [
    "L'heure : <b>Es la una</b> · <b>Son las</b> dos y cuarto / y media / menos cuarto · <b>¿A qué hora…?</b> <b>A las</b> siete.",
    "Pronominaux : <b>me</b> levanto, <b>te</b> duchas, <b>se</b> acuesta, <b>nos</b> vestimos…",
    "Irréguliers : <b>o → ue</b> (vuelvo, duermo, puedo) · <b>e → ie</b> (empiezo, quiero) · <b>e → i</b> (me visto, pido) · <b>-go</b> (salgo, hago, pongo).",
    "Fréquence : siempre, todos los días, a menudo, a veces, una vez a la semana, casi nunca, nunca.",
  ],
  repeat: [
    { en: "Normalmente me levanto a las seis y media.", fr: "D'habitude je me lève à six heures et demie." },
    { en: "Primero me ducho y después desayuno.", fr: "D'abord je me douche et ensuite je prends le petit-déjeuner." },
    { en: "Empiezo a trabajar a las ocho.", fr: "Je commence à travailler à huit heures." },
    { en: "Vuelvo a casa por la tarde.", fr: "Je rentre à la maison l'après-midi." },
    { en: "Los sábados salgo con mis amigos.", fr: "Le samedi je sors avec mes amis." },
    { en: "Voy al gimnasio dos veces a la semana.", fr: "Je vais à la salle de sport deux fois par semaine." },
    { en: "Casi nunca me acuesto antes de las once.", fr: "Je ne me couche presque jamais avant onze heures." },
    { en: "¿Qué hora es? Son las tres menos cuarto.", fr: "Quelle heure est-il ? Il est trois heures moins le quart." },
  ],
  questions: [
    { q: "¿A qué hora te levantas normalmente?", hint: "« Me levanto a las… »", example: "Normalmente me levanto a las seis y cuarto." },
    { q: "¿Qué haces por la mañana antes de salir de casa?", hint: "« Primero… después… luego… »", example: "Primero me ducho, después me visto y luego desayuno pan con café." },
    { q: "¿Qué haces los fines de semana?", hint: "« Los sábados… Los domingos… »", example: "Los sábados salgo con mis amigos y los domingos como con mi familia." },
    { q: "¿Con qué frecuencia haces deporte?", hint: "« Siempre / a menudo / dos veces a la semana / nunca… »", example: "Hago deporte tres veces a la semana, normalmente por la tarde." },
    { q: "¿A qué hora te acuestas?", hint: "« Me acuesto a las… »", example: "Me acuesto a las once menos cuarto, casi siempre." },
  ],
  mission: {
    title: "Enquête sur les habitudes", turns: 6,
    brief: "Une journaliste fait une enquête sur les habitudes des gens. Réponds à ses questions sur ta journée, tes horaires et ce que tu fais souvent ou jamais.",
    prompt: "You are a Spanish journalist doing a street survey about daily habits. Ask the learner what time they get up, what they do in the morning, when they eat, how often they do sport or go out, and what time they go to bed. One question at a time.",
    opener: "¡Hola! Estoy haciendo una encuesta sobre los hábitos. ¿Puedo hacerte unas preguntas? Primero: ¿a qué hora te levantas?",
  },
};
