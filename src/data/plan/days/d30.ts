import type { PlanDay } from "../types";

export const d30: PlanDay = {
  day: 30, title: "Grand bilan : test final et suite du parcours", level: "C1",
  grammar: {
    explain: [
      "Dernier jour : refais le <b>test de niveau</b> (en haut de la page du programme) et compare avec ton score du jour 1.",
      "Révision générale : un exercice par grande structure du mois. Puis prépare la suite : un mois ne suffit pas pour tout fixer — continue 1 à 2 h par jour (écoute + parole + révision espacée) pour consolider.",
    ],
    examples: [
      { en: "Had I known how much I'd enjoy it, I would have started years ago.", fr: "Si j'avais su à quel point j'aimerais ça, j'aurais commencé il y a des années." },
      { en: "What this month has taught me is that consistency beats talent.", fr: "Ce que ce mois m'a appris, c'est que la régularité bat le talent." },
    ],
    exercises: [
      { s: "I ___ (learn) English every day for a month now.", a: ["have been learning", "'ve been learning"], why: "« depuis un mois » → present perfect continuous." },
      { s: "If I had started earlier, I ___ (be) fluent by now.", a: ["would be", "'d be"], why: "Conditionnel mixte." },
      { s: "She told me she ___ (finish) the project the day before.", a: ["had finished", "'d finished"], why: "Discours indirect → past perfect." },
      { s: "The report ___ (must / send) by Friday. (passif)", a: ["must be sent"], why: "Passif avec modal : must be + participe." },
      { s: "___ the difficulties, we succeeded.", a: ["Despite", "In spite of"], why: "despite + nom." },
      { s: "Rarely ___ I felt so motivated.", a: ["have"], why: "Inversion : Rarely have I…" },
      { s: "___ I appreciate most is your honesty.", a: ["What"], why: "Phrase clivée." },
      { s: "We need to come up ___ a better plan.", a: ["with"], why: "come up with." },
      { s: "He ___ ___ ___ (forget) — I reminded him twice! (impossible)", a: ["can't have forgotten", "cannot have forgotten", "couldn't have forgotten"], why: "Déduction : can't have + participe." },
      { s: "I wish I ___ (start) this programme sooner.", a: ["had started", "'d started"], why: "Regret passé → wish + past perfect." },
    ],
  },
  topic: "Le meilleur du mois",
  vocab: [
    { en: "a once-in-a-lifetime experience", fr: "une expérience unique", ex: "This month was a once-in-a-lifetime experience." },
    { en: "to look back on", fr: "repenser à", ex: "I'll look back on this month with pride." },
    { en: "to make progress", fr: "faire des progrès", ex: "I've made huge progress." },
    { en: "to get the hang of", fr: "prendre le coup de main", ex: "I've got the hang of it now." },
    { en: "in the long run", fr: "à long terme", ex: "In the long run, it will pay off." },
    { en: "to stick to a routine", fr: "s'en tenir à une routine", ex: "Stick to a daily routine." },
    { en: "to take the plunge", fr: "se jeter à l'eau", ex: "I took the plunge and spoke." },
    { en: "a turning point", fr: "un tournant", ex: "This month was a turning point." },
    { en: "to come up with", fr: "trouver (une idée)", ex: "I came up with a new plan." },
    { en: "arguably", fr: "on peut dire que", ex: "It's arguably my best month." },
    { en: "food for thought", fr: "matière à réflexion", ex: "That's food for thought." },
    { en: "at the end of the day", fr: "au bout du compte", ex: "At the end of the day, practice wins." },
  ],
  shadow: [
    "Looking back on this month, I've made far more progress than I expected.",
    "What I've learnt is that sticking to a routine matters more than talent.",
    "Had I known how effective shadowing was, I would have started much earlier.",
    "At the end of the day, the more you speak, the more confident you become.",
  ],
  speak: { prompt: "Speak for three to four minutes: your English journey this month, what you can do now that you couldn't before, your remaining weaknesses and your plan for the next three months.", minWords: 220 },
  write: { prompt: "Write a final reflective essay (introduction, body, conclusion) about your month: progress, methods that worked, difficulties and your long-term plan. Show off your best C1 structures.", minWords: 220 },
  input: 3,
};
