import type { Level } from "../types";

/** Level 6 — Donner son avis (B1+). */
export const l6: Level = {
  id: "l6", n: 6, cefr: "B1+", title: "Donner son avis", subtitle: "Opinion, accord, justification",
  style: "natural English with opinion phrases, linking words, 2-3 sentences",
  lesson: [
    "Avis : <b>In my opinion…</b>, <b>I think…</b>, <b>I believe…</b>",
    "Accord : <b>I agree</b> / <b>I don't agree</b> — jamais « I am agree ».",
    "Justifier : <b>because…</b>, <b>that's why…</b>, <b>for example…</b>",
    "Nuancer : <b>It depends on…</b> (pas « depends of »), <b>On the one hand… on the other hand…</b>",
  ],
  repeat: [
    { en: "In my opinion, technology helps students learn faster.", fr: "À mon avis, la technologie aide les élèves à apprendre plus vite." },
    { en: "I agree with you, but it depends on the situation.", fr: "Je suis d'accord, mais ça dépend de la situation." },
    { en: "I don't think that's a good idea.", fr: "Je ne pense pas que ce soit une bonne idée." },
    { en: "On the one hand it's cheap, on the other hand it's slow.", fr: "D'un côté c'est bon marché, de l'autre c'est lent." },
    { en: "That's a fair point, but I see it differently.", fr: "C'est un argument valable, mais je vois les choses autrement." },
    { en: "For example, many people work from home now.", fr: "Par exemple, beaucoup de gens travaillent de chez eux maintenant." },
    { en: "That's why I prefer to study in the morning.", fr: "C'est pour ça que je préfère étudier le matin." },
    { en: "What do you think about social media?", fr: "Que penses-tu des réseaux sociaux ?" },
  ],
  questions: [
    { q: "Do you think social media is good or bad for young people? Why?", hint: "Avis + « because » + exemple", example: "I think it's both: it helps young people learn, but they spend too much time on it." },
    { q: "Is it better to live in a city or in a village?", hint: "« On the one hand… on the other hand… »", example: "On the one hand the city has more jobs, on the other hand the village is calmer." },
    { q: "Should everyone learn English? Why?", hint: "Avis + 2 raisons", example: "Yes, because it opens doors for work and you can travel more easily." },
    { q: "What is the best way to learn a new skill?", hint: "« In my opinion, the best way is to… »", example: "In my opinion, the best way is to practise a little every day." },
    { q: "Do you prefer working alone or in a team? Explain.", hint: "« I prefer… because… »", example: "I prefer working in a team because we share ideas and solve problems faster." },
  ],
  mission: {
    title: "Débat", turns: 6,
    brief: "Débat amical : donne ton avis, justifie-le et réponds aux contre-arguments.",
    prompt: "You are a friendly debate partner. Propose a topic (technology, education, work, Africa's future), ask for the learner's opinion, then politely challenge it with counter-arguments.",
    opener: "Here's a topic: should schools teach coding from primary school? What's your opinion?",
  },
};
