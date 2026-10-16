import type { PlanDay } from "../types";

export const d02: PlanDay = {
  day: 2, title: "Past simple ou present perfect", level: "B1",
  grammar: {
    explain: [
      "<b>Past simple</b> : action TERMINÉE à un moment précis du passé (yesterday, last year, in 2019, ago, when…) : I <b>went</b> to Ghana <b>last year</b>.",
      "<b>Present perfect</b> (have + participe) : expérience sans date (I'<b>ve been</b> to Ghana), résultat présent (I'<b>ve lost</b> my keys), ou période pas terminée (this week, today).",
      "<b>for</b> + durée (for two years) · <b>since</b> + point de départ (since 2020, since I was a child).",
      "Piège francophone : « J'ai vu ce film hier » = I <b>saw</b> it yesterday (jamais « I have seen it yesterday »).",
    ],
    examples: [
      { en: "I've never tried sushi, but I ate Korean food last week.", fr: "Je n'ai jamais goûté de sushi, mais j'ai mangé coréen la semaine dernière." },
      { en: "She has worked here for five years.", fr: "Elle travaille ici depuis cinq ans." },
      { en: "When did you arrive? — Two days ago.", fr: "Quand es-tu arrivé ? — Il y a deux jours." },
    ],
    exercises: [
      { s: "I ___ (see) that film last night.", a: ["saw"], why: "last night = moment précis terminé → past simple." },
      { s: "___ you ever ___ (be) to Canada?", a: ["Have / been", "have / been"], why: "Expérience (ever) → present perfect." },
      { s: "We ___ (live) here since 2018.", a: ["have lived", "'ve lived", "have been living", "'ve been living"], why: "since + situation qui continue → present perfect." },
      { s: "She ___ (finish) her degree two years ago.", a: ["finished"], why: "ago → past simple." },
      { s: "I can't open the door, I ___ (lose) my keys.", a: ["have lost", "'ve lost"], why: "Résultat visible maintenant → present perfect." },
      { s: "He has been a teacher ___ ten years.", a: ["for"], why: "for + durée." },
      { s: "They have known each other ___ they were kids.", a: ["since"], why: "since + point de départ." },
      { s: "When ___ you ___ (start) learning English?", a: ["did / start"], why: "Question sur un moment passé (When) → did + base verbale." },
    ],
  },
  topic: "Expériences de vie",
  vocab: [
    { en: "a once-in-a-lifetime experience", fr: "une expérience unique dans une vie", ex: "Visiting Petra was a once-in-a-lifetime experience." },
    { en: "to broaden your horizons", fr: "élargir ses horizons", ex: "Travelling really broadens your horizons." },
    { en: "a turning point", fr: "un tournant", ex: "Moving abroad was a turning point in my life." },
    { en: "to look back on", fr: "repenser à, se remémorer", ex: "I look back on those years with joy." },
    { en: "memorable", fr: "mémorable", ex: "It was a truly memorable trip." },
    { en: "to come across", fr: "tomber sur (par hasard)", ex: "I came across an old photo yesterday." },
    { en: "to set off", fr: "partir, se mettre en route", ex: "We set off at dawn." },
    { en: "to gain experience", fr: "acquérir de l'expérience", ex: "I gained a lot of experience in that job." },
    { en: "a challenge", fr: "un défi", ex: "Learning English fast is a real challenge." },
    { en: "to overcome", fr: "surmonter", ex: "She overcame many difficulties." },
    { en: "a lesson learnt", fr: "une leçon retenue", ex: "That mistake was a lesson learnt." },
    { en: "so far", fr: "jusqu'à présent", ex: "So far, I've visited six countries." },
  ],
  shadow: [
    "I've been to several countries so far, but I've never been to Asia.",
    "Last year I set off on a trip that turned out to be a turning point in my life.",
    "When I look back on it, it was a once-in-a-lifetime experience.",
    "I've learnt a lot from my mistakes, and I've overcome quite a few challenges.",
  ],
  speak: { prompt: "Talk about the most memorable experience of your life: what happened, when, and what you have learnt from it since then.", minWords: 100 },
  write: { prompt: "Write a short blog post: 'Three experiences that changed me'. Use the past simple for the stories and the present perfect for their consequences today.", minWords: 100 },
  input: 0,
};
