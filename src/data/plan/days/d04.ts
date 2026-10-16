import type { PlanDay } from "../types";

export const d04: PlanDay = {
  day: 4, title: "Poser des questions (auxiliaires, question tags)", level: "B1+",
  grammar: {
    explain: [
      "En anglais, une question demande un <b>auxiliaire avant le sujet</b> : <b>Do</b> you like…? <b>Did</b> she call? <b>Have</b> you seen…? <b>Is</b> he coming? (pas « You like…? » comme en français oral).",
      "Mot interrogatif + auxiliaire + sujet + verbe : <b>Where do you live?</b> <b>What did he say?</b> Après do/does/did, le verbe est à la base : What <b>does</b> she <b>want</b>?",
      "Question sur le sujet : pas d'auxiliaire → <b>Who called you?</b> <b>What happened?</b>",
      "<b>Question tags</b> (n'est-ce pas ?) : phrase positive → tag négatif : You're tired, <b>aren't you?</b> · She can swim, <b>can't she?</b> · They left, <b>didn't they?</b>",
    ],
    examples: [
      { en: "What do you do for a living?", fr: "Qu'est-ce que tu fais dans la vie ?" },
      { en: "Who told you that?", fr: "Qui t'a dit ça ?" },
      { en: "You haven't finished yet, have you?", fr: "Tu n'as pas encore fini, si ?" },
    ],
    exercises: [
      { s: "Where ___ you ___ (go) last weekend?", a: ["did / go"], why: "Passé → did + base verbale." },
      { s: "What ___ she ___ (do) for a living?", a: ["does / do"], why: "Présent, she → does + base verbale." },
      { s: "___ you ever ___ (try) Ethiopian food?", a: ["Have / tried", "have / tried"], why: "Expérience → Have + participe." },
      { s: "Who ___ (break) the window? (passé)", a: ["broke"], why: "Question sur le sujet → pas d'auxiliaire." },
      { s: "You're coming tonight, ___ you?", a: ["aren't"], why: "Positive (are) → tag négatif aren't." },
      { s: "She didn't call, ___ she?", a: ["did"], why: "Négative → tag positif did." },
      { s: "How long ___ it ___ (take) to get there?", a: ["does / take"], why: "Présent, it → does + base." },
      { s: "They can speak Spanish, ___ they?", a: ["can't", "cannot"], why: "can → tag can't." },
    ],
  },
  topic: "Conversation et small talk",
  vocab: [
    { en: "to make small talk", fr: "faire la conversation (banalités)", ex: "I'm not great at making small talk." },
    { en: "to break the ice", fr: "briser la glace", ex: "A joke is a good way to break the ice." },
    { en: "to catch up (with someone)", fr: "prendre des nouvelles (de quelqu'un)", ex: "Let's meet for coffee and catch up." },
    { en: "by the way", fr: "au fait", ex: "By the way, did you get my message?" },
    { en: "to get to know someone", fr: "apprendre à connaître quelqu'un", ex: "I'd love to get to know you better." },
    { en: "What have you been up to?", fr: "Qu'est-ce que tu deviens ?", ex: "Long time no see! What have you been up to?" },
    { en: "to have a lot in common", fr: "avoir beaucoup en commun", ex: "We have a lot in common." },
    { en: "to change the subject", fr: "changer de sujet", ex: "He quickly changed the subject." },
    { en: "anyway", fr: "bref, enfin bref", ex: "Anyway, I'd better get going." },
    { en: "I see what you mean", fr: "je vois ce que tu veux dire", ex: "I see what you mean, but I disagree." },
    { en: "to keep in touch", fr: "rester en contact", ex: "Let's keep in touch!" },
    { en: "to run into someone", fr: "croiser quelqu'un par hasard", ex: "I ran into my old teacher yesterday." },
  ],
  shadow: [
    "Long time no see! What have you been up to lately?",
    "By the way, did you manage to finish that project you were telling me about?",
    "You're from Abidjan, aren't you? I think we have a lot in common.",
    "Anyway, it was great to catch up. Let's keep in touch!",
  ],
  speak: { prompt: "Imagine you meet someone new at a party. Ask and answer at least six questions out loud (job, origin, hobbies, plans) and add a few question tags.", minWords: 90 },
  write: { prompt: "Write 10 interesting questions you could ask a new friend, then answer five of them about yourself in full sentences.", minWords: 100 },
  input: 2,
};
