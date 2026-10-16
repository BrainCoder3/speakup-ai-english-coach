import type { PlanDay } from "../types";

export const d24: PlanDay = {
  day: 24, title: "Phrasal verbs (verbes à particule) essentiels", level: "C1",
  grammar: {
    explain: [
      "Les natifs utilisent les <b>phrasal verbs</b> partout à l'oral : <b>find out</b> (découvrir) plutôt que discover, <b>put off</b> (reporter) plutôt que postpone.",
      "<b>Séparables</b> (avec un objet) : turn <b>the TV</b> off / turn off <b>the TV</b>, mais avec un pronom : turn <b>it</b> off (jamais « turn off it »).",
      "<b>Inséparables</b> : look <b>after</b> the kids, come <b>across</b> a problem, get <b>over</b> an illness.",
      "<b>À trois mots</b> : put up <b>with</b> (supporter), look forward <b>to</b>, come up <b>with</b> (trouver une idée), run out <b>of</b> (manquer de), get on <b>with</b>.",
    ],
    examples: [
      { en: "We've run out of milk.", fr: "On n'a plus de lait." },
      { en: "I can't put up with this noise any longer.", fr: "Je ne supporte plus ce bruit." },
      { en: "The meeting has been put off until Monday.", fr: "La réunion a été reportée à lundi." },
    ],
    exercises: [
      { s: "Can you ___ out what time the shop opens? (découvrir)", a: ["find"], why: "find out = découvrir, se renseigner." },
      { s: "The meeting was put ___ until next week. (reportée)", a: ["off"], why: "put off = reporter." },
      { s: "We've run ___ ___ coffee. (plus de)", a: ["out of"], why: "run out of = manquer de." },
      { s: "She came ___ ___ a brilliant idea. (a trouvé)", a: ["up with"], why: "come up with = trouver (une idée)." },
      { s: "The TV is too loud, please turn ___ down.", a: ["it"], why: "Pronom entre verbe et particule : turn it down." },
      { s: "I can't put up ___ his behaviour.", a: ["with"], why: "put up with = supporter." },
      { s: "It took him weeks to get ___ the flu. (se remettre)", a: ["over"], why: "get over = se remettre de." },
      { s: "Could you look ___ my cat this weekend? (s'occuper de)", a: ["after"], why: "look after = s'occuper de." },
    ],
  },
  topic: "Phrasal verbs du travail",
  vocab: [
    { en: "to set up", fr: "créer, mettre en place", ex: "She set up her own company." },
    { en: "to carry out", fr: "réaliser, effectuer", ex: "We carried out a survey." },
    { en: "to take over", fr: "reprendre, prendre le contrôle", ex: "A big group took over the company." },
    { en: "to lay off", fr: "licencier (économique)", ex: "They laid off 200 workers." },
    { en: "to follow up", fr: "faire un suivi, relancer", ex: "I'll follow up with an email." },
    { en: "to deal with", fr: "gérer, s'occuper de", ex: "I'll deal with the client." },
    { en: "to point out", fr: "faire remarquer", ex: "She pointed out a mistake." },
    { en: "to back down", fr: "faire marche arrière, céder", ex: "He refused to back down." },
    { en: "to call off", fr: "annuler", ex: "They called off the strike." },
    { en: "to fill in for", fr: "remplacer (quelqu'un)", ex: "Can you fill in for me tomorrow?" },
    { en: "to catch up on", fr: "rattraper (du retard)", ex: "I need to catch up on my emails." },
    { en: "to hand in", fr: "remettre, rendre", ex: "Hand in your report by Friday." },
  ],
  shadow: [
    "We need to come up with a solution before the client calls the deal off.",
    "Could you follow up on that email and point out the mistakes in the contract?",
    "I'm going to stay late to catch up on my work, so I can't put it off any longer.",
    "When the company was taken over, they laid off half of the staff.",
  ],
  speak: { prompt: "Describe a busy week at work or school using at least ten phrasal verbs (set up, deal with, put off, catch up on, come up with…).", minWords: 150 },
  write: { prompt: "Write a professional email to your team about a project delay, using at least eight phrasal verbs naturally.", minWords: 150 },
  input: 2,
};
