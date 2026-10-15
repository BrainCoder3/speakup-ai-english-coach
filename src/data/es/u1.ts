import type { Level } from "../types";

/** Unidad 1 — Nosotros y nosotras (livre p. 14). */
export const u1: Level = {
  id: "es1", n: 1, cefr: "A1", title: "Nosotros y nosotras", subtitle: "Donner et demander des informations personnelles",
  style: "very short, simple Spanish sentences (max 10 words), present tense, use tú, ask about name, origin, age, job",
  book: { unit: 1, page: 14 },
  lesson: [
    "<b>ser</b> (identité, origine, métier) : soy, eres, es, somos, sois, son.",
    "<b>tener</b> (âge, choses) : tengo, tienes, tiene… → <b>Tengo 25 años</b> (jamais « soy 25 años »).",
    "<b>llamarse</b> : me llamo, te llamas, se llama, nos llamamos, os llamáis, se llaman.",
    "Nationalités et métiers : <b>-o → -a</b> (italiano / italiana), consonne <b>+ a</b> (francés / francesa), invariables en <b>-e, -ista</b> (belga, estudiante, periodista).",
  ],
  repeat: [
    { en: "Me llamo Aminata y soy de Burkina Faso.", fr: "Je m'appelle Aminata et je viens du Burkina Faso." },
    { en: "Tengo veintiocho años.", fr: "J'ai vingt-huit ans." },
    { en: "Soy francesa, de Lyon.", fr: "Je suis française, de Lyon." },
    { en: "Mi apellido es Ouédraogo.", fr: "Mon nom de famille est Ouédraogo." },
    { en: "Soy enfermera y trabajo en un hospital.", fr: "Je suis infirmière et je travaille dans un hôpital." },
    { en: "¿De dónde eres?", fr: "D'où viens-tu ?" },
    { en: "¿A qué te dedicas?", fr: "Qu'est-ce que tu fais (comme métier) ?" },
    { en: "¿Tienes correo electrónico?", fr: "Tu as une adresse e-mail ?" },
  ],
  questions: [
    { q: "¿Cómo te llamas y cuál es tu apellido?", hint: "« Me llamo… Mi apellido es… »", example: "Me llamo Daniel y mi apellido es Kaboré." },
    { q: "¿De dónde eres?", hint: "« Soy de… » ou « Soy + nationalité »", example: "Soy de Burkina Faso, soy burkinés." },
    { q: "¿Cuántos años tienes?", hint: "« Tengo … años » (verbe tener !)", example: "Tengo veinticinco años." },
    { q: "¿A qué te dedicas?", hint: "« Soy… » / « Trabajo en… » / « Trabajo como… »", example: "Soy estudiante y trabajo como camarero en un restaurante." },
    { q: "¿Qué idiomas hablas?", hint: "« Hablo francés, … »", example: "Hablo francés, mooré y un poco de español." },
  ],
  mission: {
    title: "Inscription à l'école de langues", turns: 5,
    brief: "Tu t'inscris dans une école de langues à Madrid. La secrétaire remplit ta fiche : nom, prénom, nationalité, âge, profession, téléphone.",
    prompt: "You are Rosa, the friendly secretary of a language school in Madrid filling in a registration form. Ask the learner, one by one: name, surname, nationality, age, job, phone number or email. Use usted.",
    opener: "Buenos días. Vamos a hacer su ficha de inscripción. ¿Cómo se llama usted?",
  },
};
