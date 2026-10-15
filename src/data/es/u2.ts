import type { Level } from "../types";

/** Unidad 2 — Quiero aprender español (livre p. 28). */
export const u2: Level = {
  id: "es2", n: 2, cefr: "A1", title: "Quiero aprender español", subtitle: "Parler de ses motivations, de ses activités et de la culture hispanique",
  style: "short simple Spanish sentences, present tense of regular verbs, ask why the learner studies Spanish and what they like doing",
  book: { unit: 2, page: 28 },
  lesson: [
    "Articles : <b>el / la / los / las</b> (le, la, les) · <b>un / una / unos / unas</b> (un, une, des).",
    "Présent régulier : habl<b>o</b>, habl<b>as</b>, habl<b>a</b>… · com<b>o</b>, com<b>es</b>… · escrib<b>o</b>, escrib<b>es</b>…",
    "<b>¿Por qué?</b> → <b>porque</b> + verbe · <b>por</b> + nom · <b>para</b> + infinitif (but).",
    "<b>querer</b> + infinitif : qu<b>ie</b>ro viajar, qu<b>ie</b>res aprender…",
  ],
  repeat: [
    { en: "Estudio español porque quiero viajar por Latinoamérica.", fr: "J'étudie l'espagnol parce que je veux voyager en Amérique latine." },
    { en: "Aprendo español para trabajar en México.", fr: "J'apprends l'espagnol pour travailler au Mexique." },
    { en: "Hablo francés, inglés y un poco de español.", fr: "Je parle français, anglais et un peu espagnol." },
    { en: "Me interesa mucho la música latina.", fr: "La musique latine m'intéresse beaucoup." },
    { en: "Los fines de semana veo series y leo novelas.", fr: "Le week-end je regarde des séries et je lis des romans." },
    { en: "Quiero hacer un intercambio con un nativo.", fr: "Je veux faire un échange avec un natif." },
    { en: "Escribo mensajes en español a mis amigos.", fr: "J'écris des messages en espagnol à mes amis." },
    { en: "¿Por qué estudias español?", fr: "Pourquoi étudies-tu l'espagnol ?" },
  ],
  questions: [
    { q: "¿Por qué estudias español?", hint: "« Porque… » / « Para… » / « Por mi trabajo »", example: "Estudio español porque quiero vivir en España y para encontrar un buen trabajo." },
    { q: "¿Qué idiomas hablas?", hint: "« Hablo… »", example: "Hablo francés, inglés y un poco de español." },
    { q: "¿Qué haces en tu tiempo libre?", hint: "« Leo… Escucho… Veo… Salgo con… »", example: "Leo libros, escucho música y salgo con mis amigos." },
    { q: "¿Qué te interesa de la cultura hispana?", hint: "« Me interesa(n)… la música, la comida… »", example: "Me interesan la música, la comida y el cine mexicano." },
    { q: "¿Qué quieres hacer este fin de semana?", hint: "« Quiero + infinitif »", example: "Quiero ir al cine y visitar a mi familia." },
  ],
  mission: {
    title: "Échange linguistique", turns: 5,
    brief: "Tu fais un intercambio avec Pablo, un Mexicain qui apprend le français. Explique pourquoi tu apprends l'espagnol, ce que tu aimes faire et ce que tu veux faire.",
    prompt: "You are Pablo, a friendly Mexican doing a language exchange with the learner. Ask why they study Spanish, which languages they speak, what they do in their free time and what they want to do in a Spanish-speaking country. One short question at a time.",
    opener: "¡Hola! Soy Pablo, de Guadalajara. Oye, ¿por qué estudias español?",
  },
};
