import type { Level } from "../types";

/** Level 8 — Comme un natif (B2+ / C1). */
export const l8: Level = {
  id: "l8", n: 8, cefr: "B2+ / C1", title: "Comme un natif", subtitle: "Expressions et récits",
  style: "fluent, idiomatic native English with phrasal verbs, 2-3 sentences",
  lesson: [
    "Expressions : <b>to be on the same page</b>, <b>take it easy</b>, <b>figure out</b>.",
    "Raconter : <b>At first…</b>, <b>Then…</b>, <b>Eventually…</b>, <b>In the end…</b>",
    "Adoucir : <b>kind of</b>, <b>a bit</b>, <b>I guess</b>, <b>to be honest…</b>",
    "Phrasal verbs : <b>come up with, run out of, look forward to, give up</b>.",
  ],
  repeat: [
    { en: "To be honest, I didn't see that coming.", fr: "Pour être honnête, je ne m'y attendais pas." },
    { en: "Let's make sure we're on the same page.", fr: "Assurons-nous d'être sur la même longueur d'onde." },
    { en: "We came up with a brilliant idea.", fr: "Nous avons eu une idée brillante." },
    { en: "I'm really looking forward to meeting you.", fr: "J'ai vraiment hâte de te rencontrer." },
    { en: "We ran out of time, so we had to stop.", fr: "Nous avons manqué de temps, alors nous avons dû arrêter." },
    { en: "At first it was hard, but eventually I figured it out.", fr: "Au début c'était dur, mais j'ai fini par comprendre." },
    { en: "It's not a big deal, take it easy.", fr: "Ce n'est pas grave, détends-toi." },
    { en: "I've been meaning to tell you something.", fr: "Ça fait un moment que je veux te dire quelque chose." },
  ],
  questions: [
    { q: "Tell me about a challenge you overcame. How did it end?", hint: "At first… then… eventually… in the end…", example: "At first I was scared to speak English, but I practised every day and eventually I felt confident." },
    { q: "What's something you're really looking forward to?", hint: "« I'm looking forward to + -ing »", example: "I'm really looking forward to travelling with my friends next summer." },
    { q: "Describe a funny or surprising situation that happened to you.", hint: "Raconte avec du suspense", example: "Once I waved at someone I thought was my friend, but it was a total stranger." },
    { q: "If you could change one thing in your country, what would it be?", hint: "« If I could…, I would… »", example: "If I could change one thing, I would make internet access free for every school." },
    { q: "What advice would you give to someone learning English?", hint: "2 conseils concrets", example: "Don't be afraid of mistakes and try to speak a little every single day." },
  ],
  mission: {
    title: "Au café", turns: 7,
    brief: "Discussion détendue avec un ami natif : raconte une histoire et utilise des expressions naturelles.",
    prompt: "You are a native English-speaking friend chatting at a café. Be casual and idiomatic, share short stories of your own, and encourage the learner to tell stories and use natural expressions.",
    opener: "Hey, good to see you! So, what's new? Anything exciting happened lately?",
  },
};
