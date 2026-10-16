import type { PlanDay } from "../types";

export const d05: PlanDay = {
  day: 5, title: "Les articles : a, the ou rien", level: "B1+",
  grammar: {
    explain: [
      "<b>Rien (zéro article)</b> pour parler d'une chose EN GÉNÉRAL : <b>Life</b> is short. I love <b>music</b>. <b>Dogs</b> are loyal. (Le français dit « la vie », « la musique », « les chiens » : piège n°1 !)",
      "<b>the</b> : chose précise, déjà connue ou unique : <b>the</b> music in this film, <b>the</b> sun, <b>the</b> President.",
      "<b>a / an</b> : une chose parmi d'autres, et toujours devant un métier : She's <b>an</b> engineer (pas « She's engineer »). <b>an</b> devant un SON voyelle : an hour, a university.",
      "Pas d'article : repas (have <b>breakfast</b>), langues (<b>English</b>), sports, la plupart des pays (<b>France</b>, mais <b>the</b> USA, <b>the</b> UK), <b>go to work / school / bed</b>.",
    ],
    examples: [
      { en: "Education is the key to the future.", fr: "L'éducation est la clé de l'avenir." },
      { en: "He's a doctor and she's an architect.", fr: "Il est médecin et elle est architecte." },
      { en: "I usually go to bed at eleven.", fr: "Je vais généralement me coucher à onze heures." },
    ],
    exercises: [
      { s: "___ money doesn't buy happiness. (en général)", a: ["-", "Ø", "no article", ""], why: "Généralité → pas d'article. Écris « - » pour « rien »." },
      { s: "My sister is ___ nurse.", a: ["a"], why: "Métier → a / an." },
      { s: "Can you close ___ window, please? (celle de la pièce)", a: ["the"], why: "Chose précise connue → the." },
      { s: "It takes ___ hour to get there.", a: ["an"], why: "hour se prononce avec un son voyelle → an." },
      { s: "She studies at ___ university in Lagos.", a: ["a"], why: "university commence par le son « you » → a." },
      { s: "I love ___ Nigerian music. (en général)", a: ["-", "Ø", "no article", ""], why: "Généralité → pas d'article." },
      { s: "He lives in ___ United States.", a: ["the"], why: "the USA / the United States / the UK." },
      { s: "We had ___ lunch at noon.", a: ["-", "Ø", "no article", ""], why: "Pas d'article devant les repas." },
    ],
  },
  topic: "Voyages",
  vocab: [
    { en: "a layover", fr: "une escale", ex: "We had a six-hour layover in Istanbul." },
    { en: "off the beaten track", fr: "hors des sentiers battus", ex: "I prefer places off the beaten track." },
    { en: "to get around", fr: "se déplacer", ex: "It's easy to get around by train." },
    { en: "a breathtaking view", fr: "une vue à couper le souffle", ex: "The hotel has a breathtaking view." },
    { en: "jet lag", fr: "le décalage horaire", ex: "I'm still suffering from jet lag." },
    { en: "to book in advance", fr: "réserver à l'avance", ex: "It's cheaper to book in advance." },
    { en: "a tourist trap", fr: "un piège à touristes", ex: "That restaurant is a real tourist trap." },
    { en: "to go sightseeing", fr: "faire du tourisme, visiter", ex: "We went sightseeing all day." },
    { en: "a round trip", fr: "un aller-retour", ex: "A round trip costs 300 dollars." },
    { en: "to travel light", fr: "voyager léger", ex: "I always travel light, with just a backpack." },
    { en: "a must-see", fr: "un incontournable", ex: "The old town is a must-see." },
    { en: "to soak up the atmosphere", fr: "s'imprégner de l'ambiance", ex: "We sat in the square soaking up the atmosphere." },
  ],
  shadow: [
    "Travel broadens the mind, especially when you go off the beaten track.",
    "The view from the top was absolutely breathtaking.",
    "If you want a good deal, it's better to book in advance and travel light.",
    "After a long layover in Paris, I was suffering from terrible jet lag.",
  ],
  speak: { prompt: "Describe the best trip you have taken or a trip you dream of: where, how you got around, what you saw and what advice you would give.", minWords: 110 },
  write: { prompt: "Write a short travel guide for your city: what to see, how to get around, tourist traps to avoid. Pay attention to a / the / no article.", minWords: 110 },
  input: 0,
};
