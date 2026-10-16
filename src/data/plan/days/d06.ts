import type { PlanDay } from "../types";

export const d06: PlanDay = {
  day: 6, title: "Dénombrables et indénombrables", level: "B1+",
  grammar: {
    explain: [
      "Certains noms sont <b>indénombrables</b> en anglais (pas de pluriel, pas de « a ») alors qu'ils le sont en français : <b>advice, information, news, furniture, luggage, equipment, research, homework, progress, knowledge</b>.",
      "On dit <b>some advice / a piece of advice</b>, <b>much information</b>, <b>the news is</b> good (singulier !).",
      "<b>many / few / a few</b> + pluriel dénombrable · <b>much / little / a little</b> + indénombrable · <b>a lot of / lots of</b> avec les deux.",
      "<b>few</b> = peu (négatif) · <b>a few</b> = quelques-uns (positif). Idem <b>little</b> / <b>a little</b>.",
    ],
    examples: [
      { en: "Can I give you a piece of advice?", fr: "Je peux te donner un conseil ?" },
      { en: "We've made a lot of progress this week.", fr: "On a fait beaucoup de progrès cette semaine." },
      { en: "I have a few friends in London.", fr: "J'ai quelques amis à Londres." },
    ],
    exercises: [
      { s: "Thanks for the ___. (conseils)", a: ["advice"], why: "advice est indénombrable : jamais « advices »." },
      { s: "The news ___ (be) really good today.", a: ["is"], why: "news est singulier." },
      { s: "How ___ money do you need?", a: ["much"], why: "money est indénombrable → much." },
      { s: "How ___ people came?", a: ["many"], why: "people est pluriel dénombrable → many." },
      { s: "We only have ___ time left, hurry up! (peu)", a: ["a little", "little"], why: "time indénombrable → (a) little." },
      { s: "I need some ___ about the course. (informations)", a: ["information"], why: "information est indénombrable." },
      { s: "There are ___ good restaurants near here. (quelques)", a: ["a few"], why: "Dénombrable, sens positif → a few." },
      { s: "She has made a lot of ___ in English. (progrès)", a: ["progress"], why: "progress est indénombrable." },
    ],
  },
  topic: "Argent et consommation",
  vocab: [
    { en: "to save up for", fr: "économiser pour", ex: "I'm saving up for a new laptop." },
    { en: "to afford", fr: "avoir les moyens de", ex: "I can't afford a car right now." },
    { en: "to be broke", fr: "être fauché", ex: "I'm broke until payday." },
    { en: "a bargain", fr: "une bonne affaire", ex: "This jacket was a real bargain." },
    { en: "to rip someone off", fr: "arnaquer quelqu'un", ex: "That taxi driver ripped us off." },
    { en: "to cut down on", fr: "réduire (la consommation de)", ex: "I'm trying to cut down on spending." },
    { en: "a budget", fr: "un budget", ex: "We need to stick to a budget." },
    { en: "to pay off a loan", fr: "rembourser un prêt", ex: "It took me five years to pay off my loan." },
    { en: "value for money", fr: "un bon rapport qualité-prix", ex: "This phone is great value for money." },
    { en: "to splash out on", fr: "faire une folie, dépenser pour", ex: "We splashed out on a nice dinner." },
    { en: "income", fr: "les revenus", ex: "Rent takes a third of my income." },
    { en: "to make ends meet", fr: "joindre les deux bouts", ex: "Many families struggle to make ends meet." },
  ],
  shadow: [
    "I'd love to buy a new car, but I can't afford it at the moment.",
    "Let me give you a piece of advice: always stick to a budget.",
    "This phone was a real bargain, it's great value for money.",
    "We're trying to cut down on spending so that we can save up for a house.",
  ],
  speak: { prompt: "Talk about money in your life: how you manage your budget, what you are saving up for and what you sometimes splash out on.", minWords: 110 },
  write: { prompt: "Write some advice for a student who is always broke: how to make ends meet, cut down on spending and save money.", minWords: 110 },
  input: 2,
};
