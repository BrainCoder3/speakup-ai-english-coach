import type { Level } from "../types";

/** Unidad 5 — Tus amigos son mis amigos (livre p. 70). */
export const u5: Level = {
  id: "es5", n: 5, cefr: "A1", title: "Tus amigos son mis amigos", subtitle: "Décrire une personne, parler de ses goûts et de sa famille",
  style: "short simple Spanish sentences about family, friends, appearance, personality and likes, use gustar and encantar",
  book: { unit: 5, page: 70 },
  lesson: [
    "<b>gustar</b> : me gust<b>a</b> el cine (singulier / verbe) · me gust<b>an</b> las películas (pluriel).",
    "Réagir : <b>A mí también</b> / <b>A mí tampoco</b> (accord) · <b>A mí no</b> / <b>A mí sí</b> (désaccord).",
    "Possessifs : <b>mi / tu / su</b> padre · <b>mis / tus / sus</b> hermanos (jamais avec un article).",
    "Physique : <b>Es</b> alto, moreno… · <b>Tiene</b> el pelo largo, los ojos verdes… · Caractère : <b>es / parece</b> simpático.",
  ],
  repeat: [
    { en: "Me encanta la música africana.", fr: "J'adore la musique africaine." },
    { en: "No me gustan nada las películas de terror.", fr: "Je n'aime pas du tout les films d'horreur." },
    { en: "A mí también me gusta bailar.", fr: "Moi aussi j'aime danser." },
    { en: "Mi hermana es alta y tiene el pelo rizado.", fr: "Ma sœur est grande et a les cheveux bouclés." },
    { en: "Mis padres son muy simpáticos.", fr: "Mes parents sont très sympathiques." },
    { en: "Mi mejor amigo es divertido y un poco tímido.", fr: "Mon meilleur ami est drôle et un peu timide." },
    { en: "¿Qué tipo de música te gusta?", fr: "Quel genre de musique aimes-tu ?" },
    { en: "Tiene los ojos marrones y lleva gafas.", fr: "Il a les yeux marron et porte des lunettes." },
  ],
  questions: [
    { q: "¿Qué música te gusta?", hint: "« Me gusta / me encanta… »", example: "Me encanta el afrobeat y me gusta bastante la salsa." },
    { q: "¿Qué cosas no te gustan nada?", hint: "« No me gusta(n) nada… »", example: "No me gustan nada los días de lluvia ni el tráfico." },
    { q: "¿Cómo es tu mejor amigo o amiga?", hint: "Physique (es / tiene) + caractère", example: "Mi mejor amiga es baja, tiene el pelo largo y es muy divertida." },
    { q: "¿Cuántas personas hay en tu familia?", hint: "« En mi familia somos… Tengo dos hermanos… »", example: "En mi familia somos cinco: mis padres, mis dos hermanas y yo." },
    { q: "A mí me encanta el fútbol. ¿Y a ti?", hint: "« A mí también / A mí no… »", example: "A mí también me encanta, sobre todo los partidos de la Liga." },
  ],
  mission: {
    title: "Trouver un colocataire", turns: 6,
    brief: "Tu cherches un(e) colocataire. Tu discutes avec Sofía pour voir si vous êtes compatibles : goûts, caractère, famille, amis.",
    prompt: "You are Sofía, a young Argentinian looking for a flatmate. Chat with the learner about likes and dislikes (music, sport, cooking, going out), personality and family; react with 'a mí también / a mí tampoco / a mí no / a mí sí'. One question at a time.",
    opener: "¡Hola! Soy Sofía. Bueno, para vivir juntos tenemos que conocernos un poco. ¿Qué te gusta hacer en tu tiempo libre?",
  },
};
