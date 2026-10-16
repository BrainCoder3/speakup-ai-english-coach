import type { PlanDay } from "../types";

export const d18: PlanDay = {
  day: 18, title: "Déduire et supposer (must have, can't have, might have)", level: "B2+",
  grammar: {
    explain: [
      "Présent : <b>must</b> (j'en suis sûr), <b>might / may / could</b> (peut-être), <b>can't</b> (impossible) → He <b>must be</b> tired. That <b>can't be</b> true.",
      "Passé : modal + <b>have + participe</b> → She <b>must have left</b> (elle a dû partir) · They <b>might have got</b> lost · He <b>can't have seen</b> us.",
      "Reproches et regrets : <b>should have</b> (aurait dû) / <b>shouldn't have</b> · <b>could have</b> (aurait pu) → You <b>should have told</b> me!",
      "À l'oral, have est réduit : must've, should've, could've (jamais « must of »).",
    ],
    examples: [
      { en: "The lights are off; they must have gone out.", fr: "Les lumières sont éteintes ; ils ont dû sortir." },
      { en: "She can't have forgotten, I reminded her twice.", fr: "Elle n'a pas pu oublier, je le lui ai rappelé deux fois." },
      { en: "You should have called me.", fr: "Tu aurais dû m'appeler." },
    ],
    exercises: [
      { s: "He isn't answering. He ___ ___ (be) asleep. (sûrement)", a: ["must be"], why: "Déduction certaine au présent → must be." },
      { s: "The ground is wet. It ___ ___ ___ (rain) last night.", a: ["must have rained"], why: "Déduction sur le passé → must have + participe." },
      { s: "She ___ ___ ___ (see) me, she wasn't there. (impossible)", a: ["can't have seen", "cannot have seen", "couldn't have seen"], why: "Impossible au passé → can't have." },
      { s: "They're late. They ___ ___ ___ (miss) the bus. (peut-être)", a: ["might have missed", "may have missed", "could have missed"], why: "Possibilité passée → might have." },
      { s: "You ___ ___ ___ (tell) me earlier! (reproche)", a: ["should have told"], why: "Reproche → should have + participe." },
      { s: "I ___ ___ ___ (eat) so much. I feel sick. (regret)", a: ["shouldn't have eaten", "should not have eaten"], why: "Regret → shouldn't have." },
      { s: "That ___ ___ (be) Sarah — she's in Japan this week. (impossible)", a: ["can't be", "cannot be"], why: "Impossibilité au présent → can't be." },
      { s: "We ___ ___ ___ (win) if we had trained more. (aurait pu)", a: ["could have won"], why: "Possibilité non réalisée → could have." },
    ],
  },
  topic: "Mystères et faits divers",
  vocab: [
    { en: "a witness", fr: "un témoin", ex: "The police are looking for witnesses." },
    { en: "a suspect", fr: "un suspect", ex: "The suspect was arrested this morning." },
    { en: "evidence", fr: "des preuves", ex: "There isn't enough evidence." },
    { en: "to break into", fr: "entrer par effraction", ex: "Someone broke into my car." },
    { en: "to get away with", fr: "s'en tirer sans punition", ex: "He thought he could get away with it." },
    { en: "a clue", fr: "un indice", ex: "The detective found an important clue." },
    { en: "to figure out", fr: "comprendre, trouver", ex: "I can't figure out what happened." },
    { en: "to go missing", fr: "disparaître", ex: "A painting went missing from the museum." },
    { en: "to be accused of", fr: "être accusé de", ex: "He was accused of fraud." },
    { en: "unsolved", fr: "non élucidé", ex: "It remains an unsolved mystery." },
    { en: "a far-fetched theory", fr: "une théorie tirée par les cheveux", ex: "That's a far-fetched theory." },
    { en: "to jump to conclusions", fr: "tirer des conclusions hâtives", ex: "Don't jump to conclusions." },
  ],
  shadow: [
    "The thief must have broken in through the window, because the door was still locked.",
    "He can't have got away with it; there was far too much evidence.",
    "She might have gone missing on purpose — but that sounds a bit far-fetched.",
    "Let's not jump to conclusions until we've figured out what really happened.",
  ],
  speak: { prompt: "Your neighbour's car disappeared last night. Speculate about what might have happened, what must have happened and what can't have happened.", minWords: 140 },
  write: { prompt: "Write a short mystery story with an open ending, then add a paragraph of deductions using must have, might have, can't have and should have.", minWords: 140 },
  input: 4,
};
