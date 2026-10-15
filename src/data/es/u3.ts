import type { Level } from "../types";

/** Unidad 3 — ¿Dónde está Santiago? (livre p. 42). */
export const u3: Level = {
  id: "es3", n: 3, cefr: "A1", title: "¿Dónde está Santiago?", subtitle: "Décrire des lieux, dire ce qu'il y a et où c'est, parler du climat",
  style: "short simple Spanish sentences about countries, places and weather, use hay, estar, ser, muy and mucho",
  book: { unit: 3, page: 42 },
  lesson: [
    "<b>hay</b> = il y a (invariable, jamais avec el / la) : Hay <b>un</b> lago precioso.",
    "<b>estar</b> = être situé : Tikal <b>está</b> en Guatemala · estoy, estás, está, estamos, estáis, están.",
    "<b>ser</b> pour décrire / définir : Perú <b>es</b> muy bonito · México <b>es</b> un país turístico.",
    "<b>muy</b> + adjectif · verbe + <b>mucho</b> · <b>mucho/a/os/as</b> + nom.",
  ],
  repeat: [
    { en: "Santiago es la capital de Chile.", fr: "Santiago est la capitale du Chili." },
    { en: "En Perú hay muchas montañas.", fr: "Au Pérou il y a beaucoup de montagnes." },
    { en: "Las islas Galápagos están en Ecuador.", fr: "Les îles Galápagos sont en Équateur." },
    { en: "En el sur de Argentina hace mucho frío.", fr: "Dans le sud de l'Argentine il fait très froid." },
    { en: "En Cuba el clima es tropical.", fr: "À Cuba le climat est tropical." },
    { en: "El Amazonas es el río más largo de América.", fr: "L'Amazone est le plus long fleuve d'Amérique." },
    { en: "¿Cuántos habitantes hay en México?", fr: "Combien d'habitants y a-t-il au Mexique ?" },
    { en: "¿Cuál es la moneda de Colombia?", fr: "Quelle est la monnaie de la Colombie ?" },
  ],
  questions: [
    { q: "¿Dónde está tu país?", hint: "« Mi país está en… (el oeste de África…) »", example: "Burkina Faso está en el oeste de África." },
    { q: "¿Qué hay en tu país?", hint: "« En mi país hay… »", example: "En mi país hay muchos mercados, parques naturales y dos estaciones." },
    { q: "¿Cómo es el clima en tu ciudad?", hint: "« Hace calor / frío… Llueve… El clima es… »", example: "En mi ciudad hace mucho calor y llueve mucho en agosto." },
    { q: "¿Cuál es la ciudad más grande de tu país?", hint: "« La ciudad más grande es… »", example: "La ciudad más grande de mi país es Uagadugú." },
    { q: "¿Qué lugar de tu país es muy bonito?", hint: "« … es muy bonito porque… »", example: "Banfora es muy bonita porque hay cascadas y lagos." },
  ],
  mission: {
    title: "Concours sur le monde hispanique", turns: 5,
    brief: "Tu participes à un quiz radio sur ton pays et le monde hispanique. Réponds avec des phrases complètes (hay, está, es, el más…).",
    prompt: "You are the host of a fun radio quiz. Ask the learner simple questions about their own country (where it is, the capital, the climate, typical food, the biggest city) and one easy question about a Spanish-speaking country. One question at a time.",
    opener: "¡Bienvenido al concurso! Primera pregunta: ¿de qué país eres y dónde está?",
  },
};
