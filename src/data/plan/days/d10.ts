import type { PlanDay } from "../types";

export const d10: PlanDay = {
  day: 10, title: "Obligation et conseil (must, have to, should)", level: "B2",
  grammar: {
    explain: [
      "<b>must</b> : obligation ressentie par celui qui parle (I <b>must</b> call my mum). <b>have to</b> : obligation extérieure, règle (I <b>have to</b> wear a uniform at work).",
      "Négatif : <b>mustn't</b> = interdiction (You <b>mustn't</b> smoke here) ≠ <b>don't have to</b> = pas nécessaire (You <b>don't have to</b> come = tu n'es pas obligé).",
      "Conseil : <b>should / ought to</b> (You <b>should</b> rest), plus fort : <b>had better</b> (You'<b>d better</b> leave now, sinon…).",
      "Au passé, must devient <b>had to</b> : I <b>had to</b> work late yesterday.",
    ],
    examples: [
      { en: "You don't have to pay, it's free.", fr: "Tu n'es pas obligé de payer, c'est gratuit." },
      { en: "You mustn't tell anyone.", fr: "Tu ne dois le dire à personne." },
      { en: "You'd better see a doctor.", fr: "Tu ferais mieux de voir un médecin." },
    ],
    exercises: [
      { s: "You ___ park here. It's forbidden. (interdiction)", a: ["mustn't", "must not"], why: "Interdiction → mustn't." },
      { s: "You ___ bring food, there will be plenty. (pas nécessaire)", a: ["don't have to", "do not have to", "needn't"], why: "Absence d'obligation → don't have to." },
      { s: "Yesterday I ___ work until 10 pm. (obligé)", a: ["had to"], why: "Passé de must / have to → had to." },
      { s: "You look exhausted. You ___ get some rest. (conseil)", a: ["should", "ought to"], why: "Conseil → should." },
      { s: "We'd ___ hurry or we'll miss the flight.", a: ["better"], why: "had better = ferait mieux de." },
      { s: "In my company, everyone ___ wear a badge. (règle, she/he)", a: ["has to"], why: "Règle extérieure, everyone → has to." },
      { s: "___ I bring anything to the party? (proposition)", a: ["Should", "should", "Shall", "shall"], why: "Demander un conseil / proposer → Should / Shall I…?" },
      { s: "Students ___ to submit the essay by Monday. (have, obligation)", a: ["have"], why: "have to + verbe." },
    ],
  },
  topic: "Santé et bien-être",
  vocab: [
    { en: "to get in shape", fr: "se remettre en forme", ex: "I want to get in shape before summer." },
    { en: "a balanced diet", fr: "une alimentation équilibrée", ex: "A balanced diet is essential." },
    { en: "to work out", fr: "faire du sport (salle)", ex: "I work out three times a week." },
    { en: "to get enough sleep", fr: "dormir suffisamment", ex: "Make sure you get enough sleep." },
    { en: "to recover from", fr: "se remettre de", ex: "She's recovering from the flu." },
    { en: "to be under pressure", fr: "être sous pression", ex: "I've been under a lot of pressure." },
    { en: "to unwind", fr: "décompresser", ex: "Yoga helps me unwind." },
    { en: "a check-up", fr: "un bilan de santé", ex: "I have a check-up next week." },
    { en: "to cut out sugar", fr: "supprimer le sucre", ex: "I've cut out sugar completely." },
    { en: "mental health", fr: "santé mentale", ex: "Mental health matters as much as physical health." },
    { en: "to feel run-down", fr: "être à plat, épuisé", ex: "I've been feeling run-down lately." },
    { en: "a sedentary lifestyle", fr: "un mode de vie sédentaire", ex: "A sedentary lifestyle is risky." },
  ],
  shadow: [
    "You don't have to go to the gym every day, but you should move a little.",
    "If you're feeling run-down, you'd better get enough sleep and unwind.",
    "Doctors say we must cut down on sugar and eat a balanced diet.",
    "I had to change my lifestyle completely to get back in shape.",
  ],
  speak: { prompt: "Give advice to a friend who is stressed, tired and never exercises: what they should do, must avoid and don't have to worry about.", minWords: 120 },
  write: { prompt: "Write the rules of a healthy life for busy students: obligations, prohibitions and advice (must, have to, mustn't, don't have to, should, had better).", minWords: 120 },
  input: 0,
};
