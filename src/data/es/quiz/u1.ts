import type { QuizQuestion } from "../../learnTypes";

/** Unidad 1 — quiz. */
export const quiz1: QuizQuestion[] = [
  { q: "« J'ai 25 ans » se dit…", options: ["Soy 25 años", "Tengo 25 años", "Estoy 25 años"], answer: 1, why: "L'âge se dit avec tener : tengo … años." },
  { q: "Conjugue ser avec « tú » :", options: ["es", "eres", "sois"], answer: 1, why: "tú eres (él es, vosotros sois)." },
  { q: "Le féminin de « francés » est…", options: ["francesa", "francésa", "francés"], answer: 0, why: "Consonne + a, et l'accent écrit disparaît : francesa." },
  { q: "Quelle nationalité est invariable (même forme au masculin et au féminin) ?", options: ["italiano", "alemán", "canadiense"], answer: 2, why: "Les mots en -e (canadiense, estadounidense) sont invariables." },
  { q: "« Ella es periodista » : periodista au masculin donne…", options: ["periodisto", "periodista", "periodistor"], answer: 1, why: "Les métiers en -ista sont invariables." },
  { q: "Comment demander poliment « Comment vous appelez-vous ? » à un inconnu ?", options: ["¿Cómo te llamas?", "¿Cómo se llama usted?", "¿Cómo os llamáis?"], answer: 1, why: "Usted se conjugue comme él / ella : se llama." },
  { q: "« Vosotros » s'utilise surtout…", options: ["en Espagne", "au Mexique", "en Argentine"], answer: 0, why: "Vosotros est utilisé en Espagne ; en Amérique latine on dit ustedes." },
  { q: "Comment dit-on 32 ?", options: ["treintidós", "treinta y dos", "trenta dos"], answer: 1, why: "À partir de 31 : treinta y uno, treinta y dos…" },
  { q: "Comment dit-on 21 ?", options: ["veinte y uno", "veintiuno", "vientiuno"], answer: 1, why: "De 21 à 29 on écrit en un seul mot : veintiuno." },
  { q: "« ¿A qué te dedicas? » veut dire…", options: ["Quel âge as-tu ?", "Qu'est-ce que tu fais dans la vie ?", "Où habites-tu ?"], answer: 1, why: "C'est la question sur le métier." },
  { q: "Complète : « Trabajo ___ un banco. »", options: ["en", "de", "a"], answer: 0, why: "Trabajar en + lieu ; trabajar de / como + métier." },
  { q: "« El apellido » c'est…", options: ["le prénom", "le nom de famille", "le surnom"], answer: 1, why: "nombre = prénom, apellido = nom de famille." },
  { q: "Combien de voyelles (sons) a l'espagnol ?", options: ["5", "12", "16"], answer: 0, why: "Seulement 5 sons : a, e, i, o, u, toujours nets." },
];
