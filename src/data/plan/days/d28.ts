import type { PlanDay } from "../types";

export const d28: PlanDay = {
  day: 28, title: "Révision semaine 4 (inversion, clivées, phrasal verbs, collocations, nuance, participes)", level: "C1",
  grammar: {
    explain: [
      "Révision des structures C1 : <b>inversion</b>, <b>phrases clivées</b>, <b>phrasal verbs</b>, <b>collocations</b>, <b>hedging</b>, <b>propositions participiales</b>.",
      "Objectif : les utiliser SPONTANÉMENT. Dans ta parole d'aujourd'hui, essaie de placer au moins une structure de chaque type.",
    ],
    examples: [
      { en: "What struck me most was how quickly they came up with a solution.", fr: "Ce qui m'a le plus frappé, c'est la rapidité avec laquelle ils ont trouvé une solution." },
      { en: "Having weighed up the options, we decided to put the launch off.", fr: "Après avoir pesé les options, nous avons décidé de reporter le lancement." },
    ],
    exercises: [
      { s: "Never ___ I been so nervous.", a: ["have"], why: "Inversion : Never have I…" },
      { s: "___ I need is more practice.", a: ["What"], why: "Phrase clivée : What I need is…" },
      { s: "They called ___ the meeting because of the strike. (annulé)", a: ["off"], why: "call off = annuler." },
      { s: "You've ___ a lot of progress! (fait)", a: ["made"], why: "make progress." },
      { s: "Prices are ___ to fall next year. (probable)", a: ["likely"], why: "be likely to." },
      { s: "___ (finish) the exam, she felt relieved.", a: ["Having finished"], why: "Antériorité → Having + participe." },
      { s: "Not only ___ he arrive late, he also forgot the tickets.", a: ["did"], why: "Inversion : Not only did…" },
      { s: "I can't put ___ with this anymore.", a: ["up"], why: "put up with = supporter." },
      { s: "It ___ that nobody had noticed the error. (semblait)", a: ["seemed", "appeared"], why: "Hedging : It seemed that…" },
      { s: "Could you ___ me a favour?", a: ["do"], why: "do someone a favour." },
    ],
  },
  topic: "Révision du vocabulaire (semaine 4)",
  vocab: [
    { en: "a competitive edge", fr: "un avantage concurrentiel", ex: "Quality gives us a competitive edge." },
    { en: "to break even", fr: "atteindre la rentabilité", ex: "We broke even last year." },
    { en: "to be fed up with", fr: "en avoir marre de", ex: "I'm fed up with excuses." },
    { en: "to have mixed feelings", fr: "avoir des sentiments mitigés", ex: "I have mixed feelings." },
    { en: "to come up with", fr: "trouver (une idée)", ex: "We came up with a plan." },
    { en: "to follow up", fr: "faire un suivi", ex: "I'll follow up tomorrow." },
    { en: "to take advantage of", fr: "profiter de", ex: "Take advantage of it." },
    { en: "to draw a conclusion", fr: "tirer une conclusion", ex: "Don't draw conclusions too fast." },
    { en: "arguably", fr: "on peut dire que", ex: "It's arguably the best option." },
    { en: "to address an issue", fr: "traiter un problème", ex: "We must address this issue." },
    { en: "out of the blue", fr: "sans prévenir", ex: "She arrived out of the blue." },
    { en: "it dawned on me that", fr: "j'ai réalisé soudain que", ex: "It dawned on me that I was wrong." },
  ],
  shadow: [
    "Not only did we come up with a new strategy, but we also broke even within a year.",
    "What I find most frustrating is that nobody takes responsibility.",
    "Having weighed up the pros and cons, I'd say the plan is arguably the best option.",
    "Out of the blue, it dawned on me that we had completely misunderstood the problem.",
  ],
  speak: { prompt: "Speak for three minutes about how this month has changed your English and your life. Use at least one inversion, one cleft sentence, three phrasal verbs, three collocations and some hedging.", minWords: 180 },
  write: { prompt: "Write a C1-style essay: 'Is it possible to learn a language in one month?' Use the structures of week 4 and a clear introduction, development and conclusion.", minWords: 200 },
  input: 5,
};
