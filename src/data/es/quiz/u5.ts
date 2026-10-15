import type { QuizQuestion } from "../../learnTypes";

/** Unidad 5 — quiz. */
export const quiz5: QuizQuestion[] = [
  { q: "Complète : « Me ___ los libros de aventuras. »", options: ["gusta", "gustan", "gusto"], answer: 1, why: "Los libros est pluriel → gustan." },
  { q: "Complète : « A mi madre ___ gusta cocinar. »", options: ["me", "le", "se"], answer: 1, why: "A él / a ella → le gusta." },
  { q: "Laquelle est correcte ?", options: ["Me gusta cine.", "Me gusta el cine.", "Yo gusto el cine."], answer: 1, why: "L'article est obligatoire : me gusta el cine." },
  { q: "Laquelle est INCORRECTE ?", options: ["Me encanta el jazz.", "Me gusta mucho el jazz.", "Me encanta mucho el jazz."], answer: 2, why: "On ne met pas de quantificateur avec encantar." },
  { q: "« No me gusta el fútbol. » — Tu es d'accord, tu dis…", options: ["A mí también.", "A mí tampoco.", "A mí sí."], answer: 1, why: "Accord avec une phrase négative : a mí tampoco." },
  { q: "« Me encanta bailar. » — Toi, tu n'aimes pas. Tu dis…", options: ["A mí no.", "A mí tampoco.", "A mí sí."], answer: 0, why: "Désaccord avec une phrase affirmative : a mí no." },
  { q: "« Ses parents » (d'Ana) :", options: ["su padres", "sus padres", "suyos padres"], answer: 1, why: "Le possessif s'accorde avec l'objet : padres → sus." },
  { q: "Laquelle est correcte ?", options: ["el mi hermano", "mi hermano", "mío hermano"], answer: 1, why: "Pas d'article devant le possessif." },
  { q: "« Elle a les cheveux longs » :", options: ["Tiene su pelo largo.", "Tiene el pelo largo.", "Es pelo largo."], answer: 1, why: "On dit tiene el pelo largo." },
  { q: "« Il est un peu timide » : un poco s'utilise…", options: ["avec n'importe quel adjectif", "surtout avec un défaut", "jamais"], answer: 1, why: "Un poco + adjectif négatif : un poco tímido, un poco aburrido." },
  { q: "Quel mot veut dire « toi » ?", options: ["tu", "tú", "te"], answer: 1, why: "tú (accent) = toi ; tu (sans accent) = ton." },
  { q: "« Los padres » signifie…", options: ["les pères seulement", "les parents (père et mère)", "les grands-parents"], answer: 1, why: "padre + madre = padres." },
  { q: "Dans « ¿Te gusta el jazz? » la voix…", options: ["monte à la fin", "descend à la fin", "reste plate"], answer: 0, why: "Question fermée (oui / non) : intonation montante." },
];
