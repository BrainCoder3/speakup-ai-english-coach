import type { QuizQuestion } from "../../learnTypes";

/** Unidad 8 — quiz. */
export const quiz8: QuizQuestion[] = [
  { q: "Tu ne sais pas s'il y a une pharmacie. Tu demandes :", options: ["¿Dónde está la farmacia?", "¿Hay alguna farmacia por aquí cerca?", "¿Está una farmacia aquí?"], answer: 1, why: "Existence inconnue → ¿Hay alguna…?" },
  { q: "« Il n'y a aucun parc » :", options: ["Hay ningún parque.", "No hay ningún parque.", "No hay ninguno parque."], answer: 1, why: "Ningún s'utilise toujours avec no, et devient ningún devant un nom masculin." },
  { q: "« ¿Hay algún gimnasio? — No, no hay ___. »", options: ["ningún", "ninguno", "nada"], answer: 1, why: "Sans le nom : ninguno." },
  { q: "Complète : « Hay ___ tráfico. » (trop)", options: ["demasiado", "demasiados", "muy"], answer: 0, why: "Tráfico est indénombrable singulier → demasiado." },
  { q: "Complète : « Hay ___ parques. » (peu de)", options: ["poco", "pocos", "poca"], answer: 1, why: "Parques est masculin pluriel → pocos." },
  { q: "« C'est à cinq minutes » :", options: ["Está en cinco minutos.", "Está a cinco minutos.", "Es a cinco minutos."], answer: 1, why: "Distance : estar a + distance / temps." },
  { q: "« Au bout de la rue » :", options: ["al final de la calle", "en el fin de la calle", "a lo último de la calle"], answer: 0, why: "al final de…" },
  { q: "« Continue tout droit » :", options: ["Sigue todo derecho recto", "Sigue todo recto", "Ve todo directo"], answer: 1, why: "Sigue todo recto." },
  { q: "« Prends la deuxième à gauche » :", options: ["Gira la segunda a la izquierda", "Gira el segundo a la derecha", "Toma la dos izquierda"], answer: 0, why: "(la segunda calle) a la izquierda." },
  { q: "Complète : « Lo que más me gusta ___ los parques. »", options: ["es", "son", "está"], answer: 1, why: "Nom pluriel → son." },
  { q: "Complète : « Lo que menos me gusta es ___ hay mucho ruido. »", options: ["que", "de", "lo"], answer: 0, why: "Avec une phrase : es que…" },
  { q: "« Está bien comunicado » veut dire…", options: ["Il parle bien", "C'est bien desservi (transports)", "C'est bien informé"], answer: 1, why: "Bien comunicado = bien desservi par les transports." },
  { q: "Combien de syllabes dans « ciudad » ?", options: ["2 (ciu-dad)", "3 (ci-u-dad)", "1"], answer: 0, why: "iu forme une diphtongue : une seule syllabe." },
];
