import type { Level } from "../types";

/** Unidad 0 — En el aula (livre p. 10). */
export const u0: Level = {
  id: "es0", n: 0, cefr: "A1", title: "En el aula", subtitle: "Se présenter, saluer, demander des choses en classe",
  style: "very short, simple Spanish sentences (max 8 words), use tú, very common words, speak slowly",
  book: { unit: 0, page: 10 },
  lesson: [
    "Se présenter : <b>Me llamo…</b> · demander : <b>¿Cómo te llamas?</b>",
    "Saluer : <b>Hola, Buenos días, Buenas tardes, Buenas noches</b> · prendre congé : <b>Adiós, Hasta luego, Hasta pronto</b>.",
    "En classe : <b>¿Cómo se dice…?</b> <b>¿Qué significa…?</b> <b>¿Cómo se escribe…?</b> <b>¿Puedes repetir, por favor?</b>",
    "En espagnol, les questions s'écrivent avec <b>¿ … ?</b> et les exclamations avec <b>¡ … !</b>",
  ],
  repeat: [
    { en: "Hola, me llamo Daniel. ¿Y tú?", fr: "Bonjour, je m'appelle Daniel. Et toi ?" },
    { en: "¿Cómo te llamas?", fr: "Comment tu t'appelles ?" },
    { en: "Buenos días, ¿qué tal?", fr: "Bonjour, ça va ?" },
    { en: "Hasta luego, hasta mañana.", fr: "À plus tard, à demain." },
    { en: "¿Cómo se dice cahier en español?", fr: "Comment dit-on « cahier » en espagnol ?" },
    { en: "¿Qué significa pizarra?", fr: "Que signifie « pizarra » ?" },
    { en: "¿Puedes repetir, por favor?", fr: "Tu peux répéter, s'il te plaît ?" },
    { en: "¿Puedes hablar más despacio?", fr: "Tu peux parler plus lentement ?" },
  ],
  questions: [
    { q: "Hola, ¿cómo te llamas?", hint: "« Me llamo… »", example: "Me llamo Daniel." },
    { q: "¿Cómo se escribe tu nombre?", hint: "Épelle avec l'alphabet espagnol : de, a, ene, i, e, ele…", example: "De, a, ene, i, e, ele." },
    { q: "¿Qué tal?", hint: "« Bien, gracias. ¿Y tú? »", example: "Muy bien, gracias. ¿Y tú?" },
    { q: "¿Qué cosas hay en tu mochila?", hint: "« En mi mochila hay un libro, un cuaderno… »", example: "En mi mochila hay un libro, un cuaderno y un bolígrafo." },
    { q: "¿Cómo se dice « merci » en español?", hint: "« Se dice… »", example: "Se dice gracias." },
  ],
  mission: {
    title: "Premier jour de cours", turns: 4,
    brief: "C'est ton premier cours d'espagnol. Le professeur te salue : présente-toi, épelle ton nom et demande comment on dit un mot.",
    prompt: "You are Lucía, a friendly Spanish teacher on the first day of class. Greet the learner, ask their name, ask them to spell it, and invite them to ask how to say a word in Spanish. One very short question at a time.",
    opener: "¡Hola! Me llamo Lucía, soy tu profesora. ¿Cómo te llamas?",
  },
};
