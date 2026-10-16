import type { PlanDay } from "../types";

export const d11: PlanDay = {
  day: 11, title: "Verbe + -ing ou verbe + to", level: "B2",
  grammar: {
    explain: [
      "<b>+ -ing</b> : enjoy, avoid, finish, mind, suggest, consider, keep, can't stand, look forward to, be used to → I <b>enjoy reading</b>.",
      "<b>+ to</b> : want, decide, hope, plan, agree, refuse, manage, promise, learn, would like → She <b>decided to leave</b>.",
      "Après une <b>préposition</b> : toujours -ing → I'm interested <b>in learning</b>, good <b>at cooking</b>, <b>instead of</b> waiting.",
      "Sens différent : <b>stop doing</b> (arrêter) / <b>stop to do</b> (s'arrêter pour) · <b>remember doing</b> (se souvenir) / <b>remember to do</b> (penser à) · <b>try doing</b> (essayer pour voir) / <b>try to do</b> (s'efforcer).",
    ],
    examples: [
      { en: "I stopped smoking two years ago.", fr: "J'ai arrêté de fumer il y a deux ans." },
      { en: "Remember to lock the door.", fr: "Pense à fermer la porte à clé." },
      { en: "He's thinking about changing jobs.", fr: "Il pense à changer de travail." },
    ],
    exercises: [
      { s: "I really enjoy ___ (cook) for my friends.", a: ["cooking"], why: "enjoy + -ing." },
      { s: "She decided ___ (quit) her job.", a: ["to quit"], why: "decide + to." },
      { s: "Do you mind ___ (open) the window?", a: ["opening"], why: "mind + -ing." },
      { s: "I'm interested in ___ (learn) Japanese.", a: ["learning"], why: "Après préposition → -ing." },
      { s: "We managed ___ (finish) on time.", a: ["to finish"], why: "manage + to." },
      { s: "Don't forget ___ (call) your mother.", a: ["to call"], why: "forget / remember to do = penser à faire." },
      { s: "He stopped ___ (smoke) last year. (il ne fume plus)", a: ["smoking"], why: "stop doing = arrêter une activité." },
      { s: "I'm looking forward to ___ (meet) you.", a: ["meeting"], why: "look forward to + -ing." },
    ],
  },
  topic: "Loisirs et passions",
  vocab: [
    { en: "to take up a hobby", fr: "se mettre à un loisir", ex: "I've taken up photography." },
    { en: "to be into something", fr: "être fan de quelque chose", ex: "I'm really into jazz." },
    { en: "to be keen on", fr: "aimer beaucoup", ex: "She's keen on hiking." },
    { en: "to give up", fr: "abandonner, arrêter", ex: "I gave up the guitar after a year." },
    { en: "a pastime", fr: "un passe-temps", ex: "Reading is my favourite pastime." },
    { en: "to binge-watch", fr: "regarder en rafale (séries)", ex: "We binge-watched the whole series." },
    { en: "to unwind", fr: "se détendre", ex: "Music helps me unwind." },
    { en: "to be hooked on", fr: "être accro à", ex: "I'm hooked on this podcast." },
    { en: "to have a go at", fr: "essayer, tenter", ex: "Why don't you have a go at surfing?" },
    { en: "spare time", fr: "temps libre", ex: "What do you do in your spare time?" },
    { en: "to get the hang of", fr: "prendre le coup de main", ex: "I'm finally getting the hang of it." },
    { en: "a passion for", fr: "une passion pour", ex: "He has a real passion for football." },
  ],
  shadow: [
    "I've recently taken up photography, and I'm completely hooked on it.",
    "I avoid watching TV late at night because I can't stop binge-watching.",
    "I'd really like to learn the piano, but I keep putting it off.",
    "It took me a while, but I'm finally getting the hang of it.",
  ],
  speak: { prompt: "Talk about your hobbies: what you enjoy doing, what you have given up, what you would like to learn and what you are looking forward to trying.", minWords: 120 },
  write: { prompt: "Write a short article: 'Why everyone should take up a new hobby this year'. Use at least eight verbs followed by -ing or to.", minWords: 120 },
  input: 4,
};
