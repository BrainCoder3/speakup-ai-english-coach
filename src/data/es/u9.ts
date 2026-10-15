import type { Level } from "../types";

/** Unidad 9 — ¿Sabes conducir? (livre p. 126). */
export const u9: Level = {
  id: "es9", n: 9, cefr: "A1", title: "¿Sabes conducir?", subtitle: "Parler de ses expériences, de ses compétences et de ses qualités",
  style: "short simple Spanish sentences, use the pretérito perfecto (he viajado, has estado…), saber and poder, character adjectives",
  book: { unit: 9, page: 126 },
  lesson: [
    "Passé composé : <b>he, has, ha, hemos, habéis, han</b> + participe (<b>-ado</b> / <b>-ido</b>) : He viajado, has comido.",
    "Participes irréguliers : <b>hecho, dicho, escrito, puesto, abierto, vuelto, roto, visto</b>.",
    "Combien de fois : <b>nunca, una vez, un par de veces, varias / muchas veces</b> · ¿Has estado <b>alguna vez</b> en…?",
    "<b>saber</b> + infinitif = savoir faire (sé nadar) · <b>poder</b> + infinitif = pouvoir (no puedo, no tengo tiempo).",
  ],
  repeat: [
    { en: "He viajado a Senegal y a Marruecos.", fr: "J'ai voyagé au Sénégal et au Maroc." },
    { en: "¿Has estado alguna vez en América Latina?", fr: "Es-tu déjà allé en Amérique latine ?" },
    { en: "No, nunca he estado allí.", fr: "Non, je n'y suis jamais allé." },
    { en: "Sé hablar tres idiomas y sé cocinar muy bien.", fr: "Je sais parler trois langues et je sais très bien cuisiner." },
    { en: "Hoy no puedo salir porque tengo que trabajar.", fr: "Aujourd'hui je ne peux pas sortir parce que je dois travailler." },
    { en: "He trabajado de camarero un par de veces.", fr: "J'ai travaillé comme serveur deux ou trois fois." },
    { en: "Soy una persona responsable y muy puntual.", fr: "Je suis une personne responsable et très ponctuelle." },
    { en: "Conduce bastante bien, pero un poco rápido.", fr: "Il conduit plutôt bien, mais un peu vite." },
  ],
  questions: [
    { q: "¿Has estado alguna vez en un país hispanohablante?", hint: "« Sí, he estado en… / No, nunca he estado en… »", example: "No, nunca he estado en un país hispanohablante, pero quiero ir a México." },
    { q: "¿Qué cosas interesantes has hecho en tu vida?", hint: "« He + participe… »", example: "He vivido en tres ciudades, he aprendido a conducir y he escrito un blog." },
    { q: "¿Qué sabes hacer muy bien?", hint: "« Sé + infinitif… »", example: "Sé cocinar muy bien y sé tocar la guitarra." },
    { q: "¿Qué no sabes hacer?", hint: "« No sé… »", example: "No sé nadar y no sé bailar salsa." },
    { q: "¿Cómo eres? Describe tu carácter.", hint: "« Soy… pero un poco… »", example: "Soy sociable, trabajador y responsable, pero un poco impaciente." },
  ],
  mission: {
    title: "Entretien pour un job d'été", turns: 6,
    brief: "Tu passes un entretien pour un travail d'été dans un hôtel en Espagne. Parle de tes expériences (pretérito perfecto), de ce que tu sais faire et de ton caractère.",
    prompt: "You are a hotel manager in Spain interviewing the learner for a summer job (reception, restaurant or animation). Ask about past experience (¿Has trabajado alguna vez…?), languages and skills (¿Sabes…?), availability (¿Puedes…?) and personality. Use simple A1 Spanish. One question at a time.",
    opener: "Buenos días, encantado. Buscamos personal para el verano. Dígame, ¿ha trabajado alguna vez en un hotel o en un restaurante?",
  },
};
