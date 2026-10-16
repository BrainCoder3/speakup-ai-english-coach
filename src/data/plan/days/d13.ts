import type { PlanDay } from "../types";

export const d13: PlanDay = {
  day: 13, title: "Propositions relatives (who, which, that, whose, where)", level: "B2",
  grammar: {
    explain: [
      "<b>who</b> (personnes), <b>which</b> (choses), <b>that</b> (les deux, à l'oral), <b>whose</b> (dont / possession : the man <b>whose</b> car…), <b>where</b> (lieu), <b>when</b> (temps).",
      "Relative <b>déterminative</b> (indispensable au sens) : pas de virgule, <b>that</b> possible : The book <b>that</b> I bought is great.",
      "Relative <b>explicative</b> (info en plus) : entre virgules, <b>jamais that</b> : My brother, <b>who</b> lives in Paris, is a doctor.",
      "On peut supprimer le pronom quand il est complément : The film (that) I saw. Et « what » = ce que : <b>What</b> I need is time (jamais « the thing what »).",
    ],
    examples: [
      { en: "She's the colleague who helped me most.", fr: "C'est la collègue qui m'a le plus aidé." },
      { en: "That's the man whose son plays for Arsenal.", fr: "C'est l'homme dont le fils joue à Arsenal." },
      { en: "The town where I grew up has changed a lot.", fr: "La ville où j'ai grandi a beaucoup changé." },
    ],
    exercises: [
      { s: "The woman ___ lives next door is a pilot.", a: ["who", "that"], why: "Personne → who / that." },
      { s: "This is the laptop ___ I bought last week.", a: ["which", "that", "-", ""], why: "Chose, complément → which / that / rien." },
      { s: "I have a friend ___ father is a famous singer.", a: ["whose"], why: "Possession → whose." },
      { s: "This is the restaurant ___ we first met.", a: ["where"], why: "Lieu → where." },
      { s: "My mother, ___ is 60, still works full-time.", a: ["who"], why: "Explicative (virgules) → who, jamais that." },
      { s: "___ I don't understand is why he left. (ce que)", a: ["What"], why: "« Ce que » → what." },
      { s: "Lagos, ___ is the largest city in Nigeria, is very busy.", a: ["which"], why: "Explicative, chose → which." },
      { s: "I remember the day ___ we arrived.", a: ["when", "that", "-", ""], why: "Temps → when." },
    ],
  },
  topic: "Relations humaines",
  vocab: [
    { en: "to get on well with", fr: "bien s'entendre avec", ex: "I get on well with my colleagues." },
    { en: "to fall out with", fr: "se brouiller avec", ex: "She fell out with her best friend." },
    { en: "to make up", fr: "se réconcilier", ex: "They argued but made up quickly." },
    { en: "a close friend", fr: "un ami proche", ex: "He's one of my closest friends." },
    { en: "to look up to", fr: "admirer (quelqu'un)", ex: "I've always looked up to my uncle." },
    { en: "to rely on", fr: "compter sur", ex: "You can always rely on her." },
    { en: "to have a lot in common", fr: "avoir beaucoup en commun", ex: "We have a lot in common." },
    { en: "to drift apart", fr: "s'éloigner (peu à peu)", ex: "We drifted apart after university." },
    { en: "trustworthy", fr: "digne de confiance", ex: "He's honest and trustworthy." },
    { en: "to break up", fr: "rompre", ex: "They broke up last year." },
    { en: "to support someone", fr: "soutenir quelqu'un", ex: "My family always supports me." },
    { en: "a role model", fr: "un modèle", ex: "She's a great role model for young girls." },
  ],
  shadow: [
    "My best friend, who I've known since primary school, is someone I can always rely on.",
    "The person I look up to most is my grandmother, whose life was incredibly hard.",
    "What I value most in a friend is honesty.",
    "We fell out last year, but we made up a few weeks later.",
  ],
  speak: { prompt: "Describe the people who matter most in your life: who they are, what they do, why you look up to them. Use who, which, whose and where.", minWords: 130 },
  write: { prompt: "Write a tribute to a person who has influenced you: who they are, what they did, what you learnt from them. Use at least six relative clauses.", minWords: 130 },
  input: 4,
};
