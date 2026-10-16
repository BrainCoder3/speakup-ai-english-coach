import type { PlanDay } from "../types";

export const d27: PlanDay = {
  day: 27, title: "Propositions participiales (Having finished…, Born in…)", level: "C1",
  grammar: {
    explain: [
      "Pour rendre une phrase plus concise et élégante, on remplace « when / because / after + sujet + verbe » par un <b>participe</b>.",
      "<b>-ing</b> (actif, en même temps) : <b>Walking</b> home, I met an old friend (= While I was walking).",
      "<b>Having + participe</b> (antériorité) : <b>Having finished</b> my work, I went out (= After I had finished).",
      "<b>Participe passé</b> (passif) : <b>Built</b> in 1890, the house is very old · <b>Born</b> in Dakar, she moved to Paris at 10. Attention : le sujet doit être le même dans les deux parties.",
    ],
    examples: [
      { en: "Having lived abroad for years, he speaks four languages.", fr: "Ayant vécu des années à l'étranger, il parle quatre langues." },
      { en: "Not knowing what to say, I stayed silent.", fr: "Ne sachant pas quoi dire, je suis resté silencieux." },
      { en: "Written in 1949, the novel is still relevant today.", fr: "Écrit en 1949, le roman est toujours d'actualité." },
    ],
    exercises: [
      { s: "___ (finish) the report, she sent it to her boss. (après avoir fini)", a: ["Having finished"], why: "Antériorité → Having + participe." },
      { s: "___ (not / know) the answer, I guessed.", a: ["Not knowing"], why: "Cause → Not + -ing." },
      { s: "___ (build) in 1850, the bridge is the oldest in the city.", a: ["Built"], why: "Sens passif → participe passé." },
      { s: "___ (walk) along the beach, we saw dolphins.", a: ["Walking"], why: "Simultanéité → -ing." },
      { s: "___ (bear) in Ghana, he grew up in London.", a: ["Born"], why: "be born → Born." },
      { s: "___ (see) the film before, I didn't want to watch it again.", a: ["Having seen"], why: "Antériorité → Having seen." },
      { s: "Students ___ (want) to join should register today.", a: ["wanting"], why: "= Students who want → wanting." },
      { s: "The money ___ (steal) from the bank was never found.", a: ["stolen"], why: "= which was stolen → stolen." },
    ],
  },
  topic: "Raconter une histoire",
  vocab: [
    { en: "all of a sudden", fr: "tout à coup", ex: "All of a sudden, the lights went out." },
    { en: "to turn out", fr: "s'avérer", ex: "It turned out to be a great day." },
    { en: "to cut a long story short", fr: "pour faire court", ex: "To cut a long story short, we got married." },
    { en: "out of the blue", fr: "sans prévenir", ex: "He called me out of the blue." },
    { en: "to burst into tears", fr: "fondre en larmes", ex: "She burst into tears." },
    { en: "a narrow escape", fr: "l'avoir échappé belle", ex: "That was a narrow escape!" },
    { en: "in the nick of time", fr: "juste à temps", ex: "We arrived in the nick of time." },
    { en: "to be at a loss for words", fr: "rester sans voix", ex: "I was at a loss for words." },
    { en: "it dawned on me that", fr: "j'ai soudain compris que", ex: "It dawned on me that I had lost my wallet." },
    { en: "to make matters worse", fr: "pour ne rien arranger", ex: "To make matters worse, it started raining." },
    { en: "eventually", fr: "finalement (au bout du compte)", ex: "We eventually found the hotel." },
    { en: "meanwhile", fr: "pendant ce temps", ex: "Meanwhile, the others were waiting." },
  ],
  shadow: [
    "Having missed the last train, we had no choice but to walk home.",
    "All of a sudden, out of the blue, my phone rang — and to make matters worse, it was my boss.",
    "It dawned on me that, having left my keys inside, I was locked out.",
    "To cut a long story short, we made it in the nick of time.",
  ],
  speak: { prompt: "Tell a funny or dramatic true story in two minutes, like a native speaker. Use storytelling expressions and at least three participle clauses.", minWords: 170 },
  write: { prompt: "Write a short story (beginning, problem, climax, ending) with at least five participle clauses and the storytelling expressions of the day.", minWords: 180 },
  input: 4,
};
