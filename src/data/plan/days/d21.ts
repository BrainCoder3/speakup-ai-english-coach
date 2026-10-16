import type { PlanDay } from "../types";

export const d21: PlanDay = {
  day: 21, title: "Révision semaine 3 (conditionnels, passif, discours indirect, déduction, wish, connecteurs)", level: "B2+",
  grammar: {
    explain: [
      "Révision : <b>if + past perfect / would have</b>, <b>passif</b>, <b>discours indirect</b>, <b>must have / can't have</b>, <b>wish + prétérit / past perfect</b>, <b>although / despite / however</b>.",
      "Tu es maintenant au cœur du B2+. Pour viser le C1, varie tes structures : n'utilise jamais deux fois la même dans une même réponse.",
    ],
    examples: [
      { en: "Although the project was delayed, it was eventually completed.", fr: "Bien que le projet ait pris du retard, il a finalement été terminé." },
      { en: "I wish I had known; I would have come.", fr: "Si seulement j'avais su ; je serais venu." },
    ],
    exercises: [
      { s: "If she ___ (call) me, I would have helped her.", a: ["had called", "'d called"], why: "Type 3 : if + past perfect." },
      { s: "The castle ___ (build) in the 15th century.", a: ["was built"], why: "Passif passé." },
      { s: "« I'm busy. » → He said he ___ busy.", a: ["was"], why: "Discours indirect : présent → prétérit." },
      { s: "The street is wet. It ___ ___ ___ (rain).", a: ["must have rained"], why: "Déduction passée." },
      { s: "I wish I ___ (not / spend) so much money last month.", a: ["hadn't spent", "had not spent"], why: "Regret passé → past perfect." },
      { s: "___ the noise, I managed to sleep. (malgré)", a: ["Despite", "In spite of"], why: "despite + nom." },
      { s: "She asked me ___ I wanted to join them. (si)", a: ["if", "whether"], why: "Question oui/non rapportée." },
      { s: "It is ___ (believe) that the company will close.", a: ["believed"], why: "Passif impersonnel." },
      { s: "It's high time you ___ (find) a job.", a: ["found"], why: "It's time + prétérit." },
      { s: "You ___ ___ ___ (warn) me! (reproche)", a: ["should have warned"], why: "Reproche → should have." },
    ],
  },
  topic: "Révision du vocabulaire (semaine 3)",
  vocab: [
    { en: "in hindsight", fr: "avec le recul", ex: "In hindsight, it was a mistake." },
    { en: "to take the plunge", fr: "se jeter à l'eau", ex: "I finally took the plunge." },
    { en: "a breakthrough", fr: "une avancée majeure", ex: "It was a real breakthrough." },
    { en: "cutting-edge", fr: "de pointe", ex: "Cutting-edge research." },
    { en: "biased", fr: "partial", ex: "The article is biased." },
    { en: "to deny", fr: "nier", ex: "He denied everything." },
    { en: "evidence", fr: "des preuves", ex: "There's no evidence." },
    { en: "to figure out", fr: "comprendre, trouver", ex: "I figured it out." },
    { en: "to make the most of", fr: "profiter au maximum de", ex: "Make the most of today." },
    { en: "to be torn between", fr: "être tiraillé entre", ex: "I'm torn between two options." },
    { en: "to back up an argument", fr: "étayer un argument", ex: "Back it up with facts." },
    { en: "to a certain extent", fr: "dans une certaine mesure", ex: "I agree to a certain extent." },
  ],
  shadow: [
    "In hindsight, I should have taken the plunge much earlier.",
    "Although the evidence was weak, the journalist claimed the minister had lied.",
    "It is widely believed that this breakthrough will change medicine forever.",
    "I wish I had known then what I know now.",
  ],
  speak: { prompt: "Tell the story of a mistake you (or someone) made: what happened, what must have gone wrong, what people said, what you wish had happened, and what you learnt.", minWords: 160 },
  write: { prompt: "Write a formal complaint email about a bad service: report what you were told, what should have happened and what you would like now. Use passives and linking words.", minWords: 160 },
  input: 7,
};
