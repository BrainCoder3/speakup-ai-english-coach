import type { QuizQuestion } from "../../learnTypes";

/** Unidad 2 — quiz. */
export const quiz2: QuizQuestion[] = [
  { q: "Quel est le bon article ? « ___ problema »", options: ["la", "el", "lo"], answer: 1, why: "Problema est masculin malgré le -a : el problema." },
  { q: "Quel est le bon article ? « ___ mano »", options: ["el", "la", "los"], answer: 1, why: "Mano est féminin malgré le -o : la mano." },
  { q: "« Je vais au cinéma » :", options: ["Voy a el cine", "Voy al cine", "Voy en cine"], answer: 1, why: "a + el = al." },
  { q: "Conjugue « escribir » avec nosotros :", options: ["escribemos", "escribimos", "escribamos"], answer: 1, why: "Verbes en -ir : -imos (escribimos)." },
  { q: "Conjugue « hablar » avec ellos :", options: ["hablen", "hablan", "hablon"], answer: 1, why: "Verbes en -ar : ellos -an." },
  { q: "« Je fais du sport » :", options: ["Haco deporte", "Hago deporte", "Hace deporte"], answer: 1, why: "Hacer est irrégulier à yo : hago." },
  { q: "Complète : « Estudio español ___ quiero viajar. »", options: ["para", "por", "porque"], answer: 2, why: "Porque + verbe conjugué." },
  { q: "Complète : « Estudio español ___ trabajar en Perú. »", options: ["para", "porque", "por qué"], answer: 0, why: "Para + infinitif pour exprimer un but." },
  { q: "Complète : « Estudio español ___ mi trabajo. »", options: ["para", "por", "porque"], answer: 1, why: "Por + nom pour la cause." },
  { q: "« ¿___ estudias español? » (Pourquoi)", options: ["Porque", "Por qué", "Para qué"], answer: 1, why: "La question s'écrit en deux mots avec accent : ¿Por qué?" },
  { q: "Conjugue querer avec yo :", options: ["quero", "quiero", "quiere"], answer: 1, why: "querer : e → ie (quiero, quieres, quiere…)." },
  { q: "Avec nosotros, querer devient…", options: ["quieremos", "queremos", "quiremos"], answer: 1, why: "Pas de diphtongue pour nosotros et vosotros : queremos." },
  { q: "Comment se prononce « los amigos » ?", options: ["en séparant bien les mots", "en liant : « losamigos »", "en ajoutant un son entre les deux"], answer: 1, why: "La consonne finale se lie à la voyelle suivante." },
];
