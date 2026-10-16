import type { PlanDay } from "../types";

export const d23: PlanDay = {
  day: 23, title: "Mettre en relief : phrases clivées", level: "C1",
  grammar: {
    explain: [
      "Pour insister sur un élément, comme « C'est … qui / que » en français : <b>It was</b> Maria <b>who</b> found the solution · <b>It's</b> the price <b>that</b> worries me.",
      "<b>What</b> + phrase + <b>is / was</b> : <b>What I need is</b> a holiday · <b>What surprised me was</b> his attitude · <b>What we did was</b> (to) call the police.",
      "<b>All</b> (= la seule chose) : <b>All I want is</b> some peace. <b>The thing / reason / place … is</b> : <b>The reason why</b> I left <b>is that</b>…",
      "Très naturel à l'oral pour structurer une idée et gagner du temps pour réfléchir.",
    ],
    examples: [
      { en: "What I love about this city is the energy.", fr: "Ce que j'adore dans cette ville, c'est l'énergie." },
      { en: "It was only later that I realised my mistake.", fr: "Ce n'est que plus tard que j'ai compris mon erreur." },
      { en: "All we can do now is wait.", fr: "Tout ce qu'on peut faire maintenant, c'est attendre." },
    ],
    exercises: [
      { s: "___ I need is a good night's sleep.", a: ["What"], why: "What + phrase + is." },
      { s: "It ___ my sister who told me the news.", a: ["was"], why: "It was … who (passé)." },
      { s: "___ I want is to be happy. (tout ce que)", a: ["All"], why: "All I want is…" },
      { s: "It's the noise ___ annoys me most.", a: ["that", "which"], why: "It's … that." },
      { s: "What surprised me ___ his reaction.", a: ["was"], why: "What … was + nom." },
      { s: "The reason ___ I'm late is that I missed the bus.", a: ["why"], why: "The reason why … is that." },
      { s: "It was only when I arrived ___ I saw the problem.", a: ["that"], why: "It was only when … that." },
      { s: "What we did ___ call a taxi.", a: ["was"], why: "What we did was (to) + verbe." },
    ],
  },
  topic: "Émotions et opinions",
  vocab: [
    { en: "to be thrilled", fr: "être ravi", ex: "I was thrilled to get the job." },
    { en: "to be fed up with", fr: "en avoir marre de", ex: "I'm fed up with the traffic." },
    { en: "overwhelmed", fr: "submergé, dépassé", ex: "I felt overwhelmed by the work." },
    { en: "frustrating", fr: "frustrant", ex: "It's frustrating to wait so long." },
    { en: "to get on someone's nerves", fr: "taper sur les nerfs de quelqu'un", ex: "That noise gets on my nerves." },
    { en: "relieved", fr: "soulagé", ex: "I was relieved when he called." },
    { en: "to be over the moon", fr: "être aux anges", ex: "She was over the moon with her results." },
    { en: "to have mixed feelings", fr: "avoir des sentiments mitigés", ex: "I have mixed feelings about moving." },
    { en: "it drives me crazy", fr: "ça me rend fou", ex: "It drives me crazy when people are late." },
    { en: "to be taken aback", fr: "être décontenancé", ex: "I was taken aback by his rudeness." },
    { en: "to keep calm", fr: "garder son calme", ex: "Try to keep calm." },
    { en: "deeply", fr: "profondément", ex: "I was deeply moved by the film." },
  ],
  shadow: [
    "What really gets on my nerves is when people don't listen.",
    "It was only when I got the results that I felt truly relieved.",
    "All I wanted was a bit of respect, and what I got was silence.",
    "I have mixed feelings about it, but what matters most is that we tried.",
  ],
  speak: { prompt: "Talk about something that drives you crazy and something that makes you over the moon. Use at least five cleft sentences (What I…, It was… that, All I…).", minWords: 150 },
  write: { prompt: "Write an opinion piece: 'What is wrong with social media today'. Use cleft sentences to emphasise your main points.", minWords: 160 },
  input: 4,
};
