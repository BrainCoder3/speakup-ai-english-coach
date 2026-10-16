import type { PlanDay } from "../types";

export const d25: PlanDay = {
  day: 25, title: "Collocations : make, do, take, have", level: "C1",
  grammar: {
    explain: [
      "Une <b>collocation</b>, c'est une association de mots naturelle pour un natif. Les connaître fait sonner ton anglais C1 immédiatement.",
      "<b>make</b> (créer, produire) : make a decision, a mistake, progress, an effort, money, a difference, sense, a complaint.",
      "<b>do</b> (activité, travail) : do your homework, research, business, the shopping, a favour, your best, harm.",
      "<b>take</b> : take a break, a risk, notes, part in, responsibility, advantage of · <b>have</b> : have a look, a chat, a go, fun, an argument.",
    ],
    examples: [
      { en: "You're making great progress!", fr: "Tu fais de grands progrès !" },
      { en: "Could you do me a favour?", fr: "Tu pourrais me rendre un service ?" },
      { en: "Let's take a break and have a chat.", fr: "Faisons une pause et discutons un peu." },
    ],
    exercises: [
      { s: "I need to ___ a decision by tomorrow.", a: ["make"], why: "make a decision." },
      { s: "Could you ___ me a favour?", a: ["do"], why: "do someone a favour." },
      { s: "Everyone ___ mistakes.", a: ["makes"], why: "make a mistake." },
      { s: "Let's ___ a short break.", a: ["take", "have"], why: "take / have a break." },
      { s: "She's ___ research on climate change.", a: ["doing"], why: "do research." },
      { s: "That doesn't ___ sense.", a: ["make"], why: "make sense." },
      { s: "He ___ part in the competition last year.", a: ["took"], why: "take part in." },
      { s: "Just ___ your best, that's all that matters.", a: ["do"], why: "do your best." },
    ],
  },
  topic: "Collocations utiles",
  vocab: [
    { en: "to make an effort", fr: "faire un effort", ex: "Make an effort to speak every day." },
    { en: "to make a difference", fr: "faire la différence", ex: "Small changes can make a difference." },
    { en: "to do harm", fr: "faire du mal, nuire", ex: "A little rest never did anyone any harm." },
    { en: "to take responsibility for", fr: "assumer la responsabilité de", ex: "Take responsibility for your mistakes." },
    { en: "to take advantage of", fr: "profiter de", ex: "Take advantage of this opportunity." },
    { en: "to pay attention to", fr: "faire attention à", ex: "Pay attention to the details." },
    { en: "to raise a question", fr: "soulever une question", ex: "This raises an important question." },
    { en: "to draw a conclusion", fr: "tirer une conclusion", ex: "It's too early to draw a conclusion." },
    { en: "to meet someone's needs", fr: "répondre aux besoins", ex: "The product meets our needs." },
    { en: "a heavy workload", fr: "une lourde charge de travail", ex: "I have a heavy workload." },
    { en: "to reach an agreement", fr: "parvenir à un accord", ex: "They reached an agreement." },
    { en: "a strong argument", fr: "un argument solide", ex: "That's a strong argument." },
  ],
  shadow: [
    "If you make an effort every day, you'll make real progress.",
    "We need to take advantage of this opportunity and take responsibility for the results.",
    "It's too early to draw a conclusion, but it raises an important question.",
    "After hours of negotiation, they finally reached an agreement.",
  ],
  speak: { prompt: "Talk about how you have been learning English this month, using at least twelve collocations with make, do, take and have.", minWords: 150 },
  write: { prompt: "Write advice for someone who wants to change their life in one year. Use at least twelve collocations (make, do, take, have, pay, reach, draw…).", minWords: 160 },
  input: 6,
};
