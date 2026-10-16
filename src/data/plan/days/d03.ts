import type { PlanDay } from "../types";

export const d03: PlanDay = {
  day: 3, title: "« Depuis » : present perfect continuous", level: "B1+",
  grammar: {
    explain: [
      "Le français dit « Je travaille ici <b>depuis</b> deux ans » (présent). L'anglais exige le <b>present perfect</b> : I'<b>ve been working</b> here <b>for</b> two years.",
      "<b>Present perfect continuous</b> (have been + -ing) : action qui dure jusqu'à maintenant, on insiste sur la durée / l'activité (I've been waiting for an hour).",
      "Avec les verbes d'état on garde le present perfect simple : I'<b>ve known</b> him since 2015 (pas « been knowing »).",
      "Question : <b>How long have you been</b> learning English? — For six months.",
    ],
    examples: [
      { en: "I've been learning English since January.", fr: "J'apprends l'anglais depuis janvier." },
      { en: "How long have you lived in this city?", fr: "Depuis combien de temps habites-tu dans cette ville ?" },
      { en: "You look tired. — I've been running.", fr: "Tu as l'air fatigué. — J'ai couru (je viens de courir)." },
    ],
    exercises: [
      { s: "I ___ (wait) for you for half an hour!", a: ["have been waiting", "'ve been waiting"], why: "Action qui dure jusqu'à maintenant → present perfect continuous." },
      { s: "How long ___ you ___ (learn) English?", a: ["have / been learning"], why: "How long + activité qui continue." },
      { s: "She ___ (know) him since university.", a: ["has known", "'s known"], why: "know = verbe d'état → present perfect simple." },
      { s: "We ___ (work) on this project since March.", a: ["have been working", "'ve been working"], why: "« depuis » + activité → have been + -ing." },
      { s: "It ___ (rain) all day. The streets are flooded.", a: ["has been raining", "'s been raining"], why: "Durée + résultat visible." },
      { s: "I have lived here ___ five years.", a: ["for"], why: "for + durée." },
      { s: "He's been feeling better ___ last week.", a: ["since"], why: "since + point de départ." },
      { s: "Je l'attends depuis 10 minutes : I ___ ___ ___ for him for ten minutes.", a: ["have been waiting"], why: "« depuis » → have been waiting." },
    ],
  },
  topic: "Travail et projets",
  vocab: [
    { en: "to be in charge of", fr: "être responsable de", ex: "I'm in charge of the marketing team." },
    { en: "a deadline", fr: "une date limite", ex: "We're working hard to meet the deadline." },
    { en: "to meet a deadline", fr: "respecter un délai", ex: "We managed to meet the deadline." },
    { en: "a workload", fr: "une charge de travail", ex: "My workload has doubled this month." },
    { en: "to run a project", fr: "gérer un projet", ex: "She's been running this project for a year." },
    { en: "to keep up with", fr: "suivre le rythme de", ex: "It's hard to keep up with all the emails." },
    { en: "a skill set", fr: "un ensemble de compétences", ex: "This job requires a broad skill set." },
    { en: "to take on", fr: "accepter (une responsabilité), embaucher", ex: "I've taken on too much work." },
    { en: "to be swamped", fr: "être débordé", ex: "I've been swamped with work lately." },
    { en: "a promotion", fr: "une promotion", ex: "He's just got a promotion." },
    { en: "to work remotely", fr: "travailler à distance", ex: "I've been working remotely since 2021." },
    { en: "to burn out", fr: "s'épuiser (burn-out)", ex: "Take breaks or you'll burn out." },
  ],
  shadow: [
    "I've been working remotely for about two years now, and I really enjoy it.",
    "Lately I've been swamped with work, so it's been hard to keep up with everything.",
    "She's been running this project since March, and she's in charge of a team of six.",
    "How long have you been working on that report? — Since this morning!",
  ],
  speak: { prompt: "Talk about your job or your studies: how long you have been doing it, what you have been working on lately and what you find difficult.", minWords: 100 },
  write: { prompt: "Write a short professional profile (like on LinkedIn): what you do, how long you have been doing it and what you have been working on recently.", minWords: 100 },
  input: 1,
};
