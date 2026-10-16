import type { PlanDay } from "../types";

export const d16: PlanDay = {
  day: 16, title: "La voix passive (tous les temps)", level: "B2+",
  grammar: {
    explain: [
      "<b>be</b> (au temps voulu) + <b>participe passé</b> : English <b>is spoken</b> here · The bridge <b>was built</b> in 1990 · The results <b>have been published</b> · It <b>will be done</b> tomorrow · It <b>is being repaired</b>.",
      "On l'utilise quand l'auteur de l'action est inconnu, évident ou moins important. L'auteur est introduit par <b>by</b>.",
      "Passif impersonnel (C1, très écrit) : <b>It is said that</b>… / He <b>is said to be</b>… · <b>It is believed that</b>… · She <b>is thought to have left</b>.",
      "<b>have / get something done</b> : faire faire → I <b>had my car repaired</b> (le garagiste l'a réparée).",
    ],
    examples: [
      { en: "The new vaccine has been tested on thousands of people.", fr: "Le nouveau vaccin a été testé sur des milliers de personnes." },
      { en: "It is widely believed that the economy will recover.", fr: "On pense largement que l'économie va se redresser." },
      { en: "I'm getting my hair cut tomorrow.", fr: "Je me fais couper les cheveux demain." },
    ],
    exercises: [
      { s: "This bridge ___ (build) in 1965.", a: ["was built"], why: "Passif au passé simple : was + participe." },
      { s: "The results ___ just ___ (publish).", a: ["have / been published"], why: "Present perfect passif : have been + participe." },
      { s: "Your order ___ (deliver) tomorrow.", a: ["will be delivered"], why: "Futur passif." },
      { s: "The road ___ (repair) at the moment.", a: ["is being repaired"], why: "Continu passif : is being + participe." },
      { s: "It ___ (say) that the CEO will resign.", a: ["is said"], why: "Passif impersonnel : It is said that…" },
      { s: "He is believed ___ (be) the richest man in the country.", a: ["to be"], why: "be believed / said + to + verbe." },
      { s: "I need to have my phone ___ (repair).", a: ["repaired"], why: "have something + participe passé." },
      { s: "The thief ___ (catch) by the police yesterday.", a: ["was caught"], why: "Passé passif, catch → caught." },
    ],
  },
  topic: "Science et technologie",
  vocab: [
    { en: "a breakthrough", fr: "une percée, avancée majeure", ex: "It's a major medical breakthrough." },
    { en: "cutting-edge", fr: "de pointe", ex: "They use cutting-edge technology." },
    { en: "to carry out research", fr: "mener des recherches", ex: "Research was carried out in 2024." },
    { en: "artificial intelligence", fr: "l'intelligence artificielle", ex: "Artificial intelligence is changing jobs." },
    { en: "to roll out", fr: "déployer, lancer", ex: "The update will be rolled out next week." },
    { en: "data privacy", fr: "la protection des données", ex: "Data privacy is a big concern." },
    { en: "user-friendly", fr: "facile à utiliser", ex: "The app is very user-friendly." },
    { en: "to become obsolete", fr: "devenir obsolète", ex: "Some jobs will become obsolete." },
    { en: "a device", fr: "un appareil", ex: "We use many devices every day." },
    { en: "to back up", fr: "sauvegarder", ex: "Always back up your files." },
    { en: "groundbreaking", fr: "révolutionnaire", ex: "Her research was groundbreaking." },
    { en: "to be addicted to", fr: "être accro à", ex: "Many teenagers are addicted to their phones." },
  ],
  shadow: [
    "It is widely believed that artificial intelligence will transform the job market.",
    "The research was carried out over five years and the results have just been published.",
    "A new update is being rolled out this week, so please back up your files.",
    "This groundbreaking technology was developed by a small team in Nairobi.",
  ],
  speak: { prompt: "Talk about an invention or technology that has changed the world. When was it invented, how is it used today, and how will it be improved?", minWords: 140 },
  write: { prompt: "Write a short news report about a (real or invented) scientific breakthrough. Use at least six passive forms, including 'It is said / believed that'.", minWords: 140 },
  input: 3,
};
