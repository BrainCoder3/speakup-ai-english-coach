import type { QuizQuestion } from "../../learnTypes";

/** Unidad 6 — quiz. */
export const quiz6: QuizQuestion[] = [
  { q: "Il est 1 h 00 :", options: ["Son las una.", "Es la una.", "Es una hora."], answer: 1, why: "Une heure est au singulier : es la una." },
  { q: "Il est 4 h 15 :", options: ["Son las cuatro y cuarto.", "Son las cuatro y quince minutos y cuarto.", "Es las cuatro cuarto."], answer: 0, why: "y cuarto = et quart." },
  { q: "Il est 9 h 45 :", options: ["Son las nueve y tres cuartos.", "Son las diez menos cuarto.", "Son las nueve menos cuarto."], answer: 1, why: "On dit l'heure suivante moins le quart : las diez menos cuarto." },
  { q: "Conjugue levantarse avec tú :", options: ["se levantas", "te levantas", "te levanta"], answer: 1, why: "tú → te levantas." },
  { q: "Conjugue volver avec yo :", options: ["volvo", "vuelvo", "vuelvio"], answer: 1, why: "volver : o → ue (vuelvo)." },
  { q: "Conjugue empezar avec nosotros :", options: ["empiezamos", "empezamos", "empizamos"], answer: 1, why: "Pas de changement pour nosotros : empezamos." },
  { q: "Conjugue vestirse avec ella :", options: ["se veste", "se viste", "se vieste"], answer: 1, why: "vestirse : e → i (se viste)." },
  { q: "« Je sors » :", options: ["salo", "salgo", "sallo"], answer: 1, why: "salir : yo salgo (-go)." },
  { q: "« Tous les samedis je joue au foot » :", options: ["El sábado juego al fútbol", "Los sábados juego al fútbol", "Sábados juego al fútbol"], answer: 1, why: "Habitude → los sábados." },
  { q: "« Une fois par semaine » :", options: ["una vez por semana", "una vez a la semana", "un tiempo a la semana"], answer: 1, why: "una vez a la semana / al mes." },
  { q: "Complète : « Me lavo los dientes ___ comer. » (après)", options: ["después", "después de", "luego de que"], answer: 1, why: "después de + infinitif." },
  { q: "Quel jour : « miércoles » ?", options: ["mardi", "mercredi", "jeudi"], answer: 1, why: "martes = mardi, miércoles = mercredi, jueves = jeudi." },
  { q: "« Casi nunca » signifie…", options: ["presque toujours", "presque jamais", "parfois"], answer: 1, why: "casi = presque, nunca = jamais." },
];
