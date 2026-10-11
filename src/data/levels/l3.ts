import type { Level } from "../types";

/** Level 3 — Raconter le passé (A2). */
export const l3: Level = {
  id: "l3", n: 3, cefr: "A2", title: "Raconter le passé", subtitle: "Prétérit (past simple)",
  style: "simple sentences, past simple, common irregular verbs",
  lesson: [
    "Le <b>prétérit</b> raconte une action terminée : yesterday, last week, in 2020.",
    "Verbes réguliers : <b>+ed</b> (work<b>ed</b>, play<b>ed</b>, visit<b>ed</b>).",
    "Irréguliers clés : go → <b>went</b>, buy → <b>bought</b>, eat → <b>ate</b>, see → <b>saw</b>, have → <b>had</b>.",
    "Question / négation : <b>Did</b> you go? / I <b>didn't</b> go (verbe à la base).",
  ],
  repeat: [
    { en: "Yesterday I went to the market.", fr: "Hier, je suis allé au marché." },
    { en: "I bought some fruit and vegetables.", fr: "J'ai acheté des fruits et des légumes." },
    { en: "Last weekend we visited my grandparents.", fr: "Le week-end dernier, nous avons rendu visite à mes grands-parents." },
    { en: "I didn't watch the match on Saturday.", fr: "Je n'ai pas regardé le match samedi." },
    { en: "She called me last night.", fr: "Elle m'a appelé hier soir." },
    { en: "We ate rice and chicken for dinner.", fr: "Nous avons mangé du riz et du poulet au dîner." },
    { en: "Did you see the new film?", fr: "As-tu vu le nouveau film ?" },
    { en: "It was a really good day.", fr: "C'était une très bonne journée." },
  ],
  questions: [
    { q: "What did you do yesterday?", hint: "« Yesterday I… » + prétérit", example: "Yesterday I worked and then I went to the market." },
    { q: "Where did you go last weekend?", hint: "« Last weekend I went to… »", example: "Last weekend I went to my uncle's house." },
    { q: "What did you eat last night?", hint: "eat → ate", example: "Last night I ate fish and rice." },
    { q: "Did you watch a film recently? Which one?", hint: "« Yes, I watched… » / « No, I didn't… »", example: "Yes, I watched an action film on Friday." },
    { q: "Tell me about a great day you had.", hint: "Raconte avec 2 ou 3 verbes au prétérit", example: "Last year I went to the beach with my friends and we had a lot of fun." },
  ],
  mission: {
    title: "Ton week-end", turns: 5,
    brief: "Un ami te demande comment s'est passé ton week-end. Raconte au prétérit.",
    prompt: "You are a friend asking the learner about their last weekend: where they went, what they did, who they saw, what they ate. React and ask follow-up questions in the past tense.",
    opener: "Hey! How was your weekend? What did you do?",
  },
};
