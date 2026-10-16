import type { PlanDay } from "../types";

export const d20: PlanDay = {
  day: 20, title: "Articuler ses idées (connecteurs logiques)", level: "B2+",
  grammar: {
    explain: [
      "Opposition : <b>although / even though + phrase</b> (Although it rained, we went out) · <b>despite / in spite of + nom ou -ing</b> (Despite the rain…) · <b>however / nevertheless</b> en début de phrase, suivis d'une virgule · <b>whereas / while</b> (alors que).",
      "Cause / conséquence : <b>because of / due to + nom</b> · <b>therefore / as a result / consequently</b> · <b>so that</b> (pour que).",
      "Ajout : <b>moreover, furthermore, in addition, not only… but also</b>. Exemple / précision : <b>for instance, such as, in other words</b>.",
      "Conclure : <b>to sum up, all in all, on balance</b>. Ce sont ces mots qui font passer un discours de B1 à C1.",
    ],
    examples: [
      { en: "Despite having little experience, she got the job.", fr: "Malgré son peu d'expérience, elle a obtenu le poste." },
      { en: "The plan is expensive. However, it will save time.", fr: "Le plan est cher. Cependant, il fera gagner du temps." },
      { en: "He speaks three languages, whereas I only speak one.", fr: "Il parle trois langues, alors que je n'en parle qu'une." },
    ],
    exercises: [
      { s: "___ the traffic, we arrived on time. (malgré)", a: ["Despite", "despite", "In spite of", "in spite of"], why: "despite + nom." },
      { s: "___ it was late, we kept working. (bien que)", a: ["Although", "although", "Even though", "even though"], why: "although + phrase complète." },
      { s: "The flight was cancelled ___ the storm.", a: ["because of", "due to"], why: "because of / due to + nom." },
      { s: "Sales fell. ___, the company cut costs. (par conséquent)", a: ["As a result", "Therefore", "Consequently"], why: "Conséquence → As a result / Therefore." },
      { s: "I like tea, ___ my wife prefers coffee. (alors que)", a: ["whereas", "while"], why: "Contraste → whereas." },
      { s: "It's a great idea. ___, it's too expensive. (cependant)", a: ["However", "Nevertheless"], why: "However en début de phrase + virgule." },
      { s: "She is ___ talented but also very hard-working.", a: ["not only"], why: "not only … but also." },
      { s: "I left early ___ that I could catch the train. (pour que)", a: ["so"], why: "so that + phrase (but)." },
    ],
  },
  topic: "Éducation et argumentation",
  vocab: [
    { en: "to argue that", fr: "soutenir que", ex: "Some argue that exams are useless." },
    { en: "a valid point", fr: "un argument valable", ex: "You make a valid point." },
    { en: "on the one hand… on the other hand", fr: "d'un côté… de l'autre", ex: "On the one hand it's cheap; on the other hand it's slow." },
    { en: "to back up an argument", fr: "étayer un argument", ex: "Back up your argument with data." },
    { en: "lifelong learning", fr: "l'apprentissage tout au long de la vie", ex: "Lifelong learning is essential today." },
    { en: "a degree", fr: "un diplôme universitaire", ex: "She has a degree in economics." },
    { en: "to drop out", fr: "abandonner ses études", ex: "He dropped out of university." },
    { en: "critical thinking", fr: "l'esprit critique", ex: "Schools should teach critical thinking." },
    { en: "to be counterproductive", fr: "être contre-productif", ex: "Too much pressure is counterproductive." },
    { en: "it goes without saying", fr: "il va sans dire", ex: "It goes without saying that practice matters." },
    { en: "to a certain extent", fr: "dans une certaine mesure", ex: "I agree to a certain extent." },
    { en: "a compelling argument", fr: "un argument convaincant", ex: "She made a compelling argument." },
  ],
  shadow: [
    "On the one hand, university gives you a degree; on the other hand, it's very expensive.",
    "Despite its advantages, online learning can be isolating. However, it's very flexible.",
    "Some people argue that exams are useless, whereas others believe they're essential.",
    "To sum up, I agree to a certain extent, but critical thinking matters more than grades.",
  ],
  speak: { prompt: "Debate with yourself: 'Is a university degree still necessary today?' Give arguments for and against, linked with however, although, despite, whereas, as a result, to sum up.", minWords: 150 },
  write: { prompt: "Write a structured argumentative essay (introduction, two arguments, counter-argument, conclusion): 'Should school be free for everyone?' Use at least eight linking words.", minWords: 160 },
  input: 3,
};
