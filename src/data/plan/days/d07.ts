import type { PlanDay } from "../types";

export const d07: PlanDay = {
  day: 7, title: "Révision semaine 1 (temps, questions, articles, quantités)", level: "B1+",
  grammar: {
    explain: [
      "Révision : <b>présent simple / continu</b>, <b>past simple / present perfect</b>, <b>« depuis » = present perfect (continuous)</b>, <b>questions avec auxiliaire</b>, <b>articles</b>, <b>dénombrables</b>.",
      "Méthode : avant chaque réponse, demande-toi « quel est l'indice ? » (yesterday → past simple, since → present perfect, en général → pas d'article…).",
    ],
    examples: [
      { en: "I've been living in Accra since last year, and I love it.", fr: "J'habite à Accra depuis l'année dernière et j'adore." },
      { en: "Where did you buy that furniture?", fr: "Où as-tu acheté ces meubles ?" },
    ],
    exercises: [
      { s: "I ___ (study) English for three months now.", a: ["have been studying", "'ve been studying", "have studied", "'ve studied"], why: "« depuis trois mois » → present perfect." },
      { s: "She ___ (call) me yesterday evening.", a: ["called"], why: "yesterday → past simple." },
      { s: "What ___ he usually ___ (have) for breakfast?", a: ["does / have"], why: "Habitude, he → does + base." },
      { s: "Right now I ___ (read) a great book.", a: ["am reading", "'m reading"], why: "En ce moment → continuous." },
      { s: "___ life in big cities is stressful.", a: ["-", "Ø", "no article", ""], why: "Généralité → pas d'article." },
      { s: "Could you give me some ___? (conseils)", a: ["advice"], why: "advice : indénombrable." },
      { s: "He's ___ engineer.", a: ["an"], why: "Métier + son voyelle → an." },
      { s: "You haven't seen my phone, ___ you?", a: ["have"], why: "Négative → tag positif." },
      { s: "There isn't ___ traffic today.", a: ["much"], why: "traffic indénombrable → much." },
      { s: "We ___ (know) each other since 2015.", a: ["have known", "'ve known"], why: "know = verbe d'état → present perfect simple." },
    ],
  },
  topic: "Révision du vocabulaire de la semaine",
  vocab: [
    { en: "reliable", fr: "fiable", ex: "She's the most reliable person on the team." },
    { en: "to be used to", fr: "être habitué à", ex: "I'm used to working late." },
    { en: "a turning point", fr: "un tournant", ex: "That job was a turning point." },
    { en: "to come across", fr: "tomber sur", ex: "I came across an interesting article." },
    { en: "to meet a deadline", fr: "respecter un délai", ex: "We must meet the deadline." },
    { en: "to be swamped", fr: "être débordé", ex: "I'm swamped this week." },
    { en: "to catch up", fr: "prendre des nouvelles, rattraper", ex: "Let's catch up soon." },
    { en: "to break the ice", fr: "briser la glace", ex: "He told a joke to break the ice." },
    { en: "off the beaten track", fr: "hors des sentiers battus", ex: "We found a village off the beaten track." },
    { en: "to afford", fr: "avoir les moyens de", ex: "We can't afford it." },
    { en: "to make ends meet", fr: "joindre les deux bouts", ex: "It's hard to make ends meet." },
    { en: "value for money", fr: "rapport qualité-prix", ex: "It's good value for money." },
  ],
  shadow: [
    "I've been swamped this week, but I've finally met the deadline.",
    "We came across a little village off the beaten track, and the view was breathtaking.",
    "Life in big cities is expensive, and many people struggle to make ends meet.",
    "It was great to catch up with you. We have so much in common, don't we?",
  ],
  speak: { prompt: "Summarise your first week of this programme: what you have learnt, what you have been finding difficult and what you are going to focus on next week.", minWords: 120 },
  write: { prompt: "Write a short story (real or invented) about a trip that went wrong. Use at least three tenses from this week and the vocabulary of the week.", minWords: 120 },
  input: 3,
};
