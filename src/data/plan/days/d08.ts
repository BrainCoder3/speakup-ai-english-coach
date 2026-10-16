import type { PlanDay } from "../types";

export const d08: PlanDay = {
  day: 8, title: "Parler du futur (will, going to, présent continu)", level: "B2",
  grammar: {
    explain: [
      "<b>going to</b> : intention déjà décidée (I'm <b>going to</b> apply for that job) ou prédiction basée sur un indice (Look at those clouds, it's <b>going to</b> rain).",
      "<b>will</b> : décision sur le moment (I'<b>ll</b> get it!), promesse, opinion sur l'avenir (I think she'<b>ll</b> win).",
      "<b>Présent continu</b> : rendez-vous fixé (I'<b>m meeting</b> Ana at six). <b>Présent simple</b> : horaires (The train <b>leaves</b> at 8).",
      "Après <b>when, as soon as, before, after, until, if</b> → présent, jamais will : I'll call you <b>when I arrive</b>.",
    ],
    examples: [
      { en: "I'm going to start a business next year.", fr: "Je vais créer une entreprise l'année prochaine." },
      { en: "I'll text you as soon as I get home.", fr: "Je t'envoie un message dès que j'arrive à la maison." },
      { en: "We're flying to Nairobi on Friday.", fr: "On prend l'avion pour Nairobi vendredi." },
    ],
    exercises: [
      { s: "The phone's ringing. — I ___ (answer) it! (décision immédiate)", a: ["'ll answer", "will answer"], why: "Décision sur le moment → will." },
      { s: "I ___ (study) medicine next year. I've already enrolled.", a: ["am going to study", "'m going to study", "am studying", "'m studying"], why: "Décision prise → going to (ou présent continu)." },
      { s: "I'll call you when I ___ (arrive).", a: ["arrive"], why: "Après when → présent." },
      { s: "Look at that driver! He ___ (crash)!", a: ["is going to crash", "'s going to crash"], why: "Prédiction avec un indice → going to." },
      { s: "We ___ (meet) the clients at 3 pm tomorrow. It's in the diary.", a: ["are meeting", "'re meeting"], why: "Rendez-vous fixé → présent continu." },
      { s: "The train ___ (leave) at 7.45.", a: ["leaves"], why: "Horaire officiel → présent simple." },
      { s: "As soon as she ___ (finish), we'll leave.", a: ["finishes"], why: "Après as soon as → présent." },
      { s: "I promise I ___ (not / tell) anyone.", a: ["won't tell", "will not tell"], why: "Promesse → will / won't." },
    ],
  },
  topic: "Ambitions et projets",
  vocab: [
    { en: "to set a goal", fr: "se fixer un objectif", ex: "I've set myself a clear goal for this year." },
    { en: "to achieve a goal", fr: "atteindre un objectif", ex: "She achieved her goal of running a marathon." },
    { en: "a long-term plan", fr: "un projet à long terme", ex: "What's your long-term plan?" },
    { en: "to look forward to", fr: "avoir hâte de", ex: "I'm looking forward to starting my new job." },
    { en: "to be determined to", fr: "être déterminé à", ex: "I'm determined to speak fluent English." },
    { en: "to go for it", fr: "foncer, tenter sa chance", ex: "If you really want it, go for it!" },
    { en: "a career path", fr: "un parcours professionnel", ex: "He chose an unusual career path." },
    { en: "to follow your dreams", fr: "suivre ses rêves", ex: "Never stop following your dreams." },
    { en: "to work towards", fr: "travailler en vue de", ex: "I'm working towards a promotion." },
    { en: "a milestone", fr: "une étape importante", ex: "Graduating was a big milestone." },
    { en: "to take a risk", fr: "prendre un risque", ex: "Starting a business means taking a risk." },
    { en: "in the long run", fr: "à long terme", ex: "In the long run, it will pay off." },
  ],
  shadow: [
    "Next year I'm going to start my own business, and I'm really looking forward to it.",
    "I'm determined to achieve my goals, even if I have to take a few risks.",
    "I'll let you know as soon as I hear from them.",
    "In the long run, I think all this hard work will pay off.",
  ],
  speak: { prompt: "Talk about your plans and ambitions for the next five years: what you are going to do, what you think will happen and what you are working towards.", minWords: 120 },
  write: { prompt: "Write a letter to yourself to be opened in five years: your goals, the steps you are going to take and your predictions.", minWords: 120 },
  input: 0,
};
