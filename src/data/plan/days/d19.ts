import type { PlanDay } from "../types";

export const d19: PlanDay = {
  day: 19, title: "Souhaits et regrets (wish, if only, I'd rather, it's time)", level: "B2+",
  grammar: {
    explain: [
      "Souhait sur le <b>présent</b> : <b>wish / if only + prétérit</b> → I wish I <b>had</b> more time · If only I <b>were</b> taller.",
      "Regret sur le <b>passé</b> : <b>wish / if only + past perfect</b> → I wish I <b>had studied</b> harder.",
      "Agacement / souhait de changement : <b>wish + would</b> → I wish you <b>would stop</b> talking!",
      "<b>I'd rather</b> + verbe (je préférerais) · <b>I'd rather you + prétérit</b> (I'd rather you <b>didn't</b> smoke) · <b>It's (high) time</b> + prétérit : It's time we <b>left</b>.",
    ],
    examples: [
      { en: "I wish I could speak English fluently.", fr: "J'aimerais savoir parler anglais couramment." },
      { en: "If only I hadn't said that!", fr: "Si seulement je n'avais pas dit ça !" },
      { en: "It's high time we made a decision.", fr: "Il est grand temps qu'on prenne une décision." },
    ],
    exercises: [
      { s: "I wish I ___ (have) a bigger flat. (maintenant)", a: ["had"], why: "Souhait sur le présent → prétérit." },
      { s: "I wish I ___ (study) harder at school. (regret)", a: ["had studied", "'d studied"], why: "Regret passé → past perfect." },
      { s: "If only I ___ (be) rich!", a: ["were", "was"], why: "If only + prétérit (were)." },
      { s: "I wish you ___ (stop) interrupting me! (agacement)", a: ["would stop"], why: "Agacement → wish + would." },
      { s: "I'd rather ___ (stay) at home tonight.", a: ["stay"], why: "I'd rather + base verbale." },
      { s: "I'd rather you ___ (not / tell) anyone.", a: ["didn't tell", "did not tell"], why: "I'd rather + quelqu'un + prétérit." },
      { s: "It's time we ___ (go) home.", a: ["went"], why: "It's time + prétérit." },
      { s: "I wish I ___ speak Chinese. (pouvoir, maintenant)", a: ["could"], why: "wish + could pour une capacité." },
    ],
  },
  topic: "Rêves et aspirations",
  vocab: [
    { en: "a dream come true", fr: "un rêve devenu réalité", ex: "Living in London is a dream come true." },
    { en: "to fulfil a dream", fr: "réaliser un rêve", ex: "She fulfilled her dream of becoming a pilot." },
    { en: "to long for", fr: "désirer ardemment", ex: "I long for a quieter life." },
    { en: "a bucket list", fr: "liste de choses à faire avant de mourir", ex: "Seeing the Northern Lights is on my bucket list." },
    { en: "to settle down", fr: "se poser, s'installer", ex: "They want to settle down and have kids." },
    { en: "wishful thinking", fr: "prendre ses désirs pour des réalités", ex: "Winning the lottery is just wishful thinking." },
    { en: "to make the most of", fr: "profiter au maximum de", ex: "Make the most of your youth." },
    { en: "to be torn between", fr: "être tiraillé entre", ex: "I'm torn between two jobs." },
    { en: "a calling", fr: "une vocation", ex: "Teaching is her calling." },
    { en: "to live up to expectations", fr: "être à la hauteur des attentes", ex: "The film didn't live up to expectations." },
    { en: "to have no regrets", fr: "n'avoir aucun regret", ex: "I've made mistakes but I have no regrets." },
    { en: "if only", fr: "si seulement", ex: "If only I had more time!" },
  ],
  shadow: [
    "I wish I had started learning English earlier, but it's never too late.",
    "If only I could travel the world and make the most of every moment!",
    "I'd rather live a simple life than chase money all the time.",
    "It's high time I fulfilled the dreams on my bucket list.",
  ],
  speak: { prompt: "Talk about your dreams and regrets: what you wish were different now, what you wish you had done differently, and what is on your bucket list.", minWords: 150 },
  write: { prompt: "Write a reflective text: 'Five things I wish I had known at 18'. Use wish, if only, I'd rather and it's time.", minWords: 150 },
  input: 4,
};
