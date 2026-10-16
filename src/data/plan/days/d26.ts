import type { PlanDay } from "../types";

export const d26: PlanDay = {
  day: 26, title: "Nuancer et adoucir (hedging)", level: "C1",
  grammar: {
    explain: [
      "Un locuteur C1 évite les affirmations trop catégoriques. Il <b>nuance</b> : <b>It seems / appears that</b>… · <b>tend to</b> (Young people tend to…) · <b>is likely / unlikely to</b>.",
      "Adverbes de prudence : <b>arguably</b> (on peut dire que), <b>presumably</b>, <b>apparently</b>, <b>to some extent</b>, <b>broadly speaking</b>.",
      "Modaux de prudence : <b>may, might, could</b> (This <b>could</b> be a solution). Verbes : <b>suggest, indicate</b> (The data <b>suggest</b> that…).",
      "Adoucir un désaccord : <b>I see your point, but…</b> · <b>I'm not sure I agree</b> · <b>Wouldn't it be better to…?</b>",
    ],
    examples: [
      { en: "It would seem that the plan has failed.", fr: "Il semblerait que le plan ait échoué." },
      { en: "Prices are likely to rise next year.", fr: "Les prix vont probablement augmenter l'an prochain." },
      { en: "This is arguably the best book of the decade.", fr: "C'est sans doute le meilleur livre de la décennie." },
    ],
    exercises: [
      { s: "It ___ that the meeting has been cancelled. (semble)", a: ["seems", "appears"], why: "It seems / appears that…" },
      { s: "People ___ to spend more in December. (ont tendance)", a: ["tend"], why: "tend to + verbe." },
      { s: "The price is ___ to increase. (probable)", a: ["likely"], why: "be likely to." },
      { s: "The results ___ that the drug is effective. (suggèrent)", a: ["suggest", "indicate"], why: "The results suggest that…" },
      { s: "This ___ be the reason. (pourrait)", a: ["could", "might", "may"], why: "Modal de prudence." },
      { s: "I see your ___, but I'm not convinced.", a: ["point"], why: "I see your point." },
      { s: "It is ___ the most important issue today. (on peut dire que)", a: ["arguably"], why: "arguably = on peut soutenir que." },
      { s: "I agree ___ some extent.", a: ["to"], why: "to some extent." },
    ],
  },
  topic: "Société et politique",
  vocab: [
    { en: "inequality", fr: "les inégalités", ex: "Inequality is growing in many countries." },
    { en: "to raise taxes", fr: "augmenter les impôts", ex: "The government plans to raise taxes." },
    { en: "a controversial issue", fr: "un sujet controversé", ex: "Immigration is a controversial issue." },
    { en: "public opinion", fr: "l'opinion publique", ex: "Public opinion has changed." },
    { en: "to have a say in", fr: "avoir son mot à dire", ex: "Citizens should have a say in decisions." },
    { en: "to address an issue", fr: "traiter un problème", ex: "The law addresses this issue." },
    { en: "unemployment", fr: "le chômage", ex: "Youth unemployment is high." },
    { en: "to implement a policy", fr: "mettre en œuvre une politique", ex: "It's hard to implement this policy." },
    { en: "a short-term solution", fr: "une solution à court terme", ex: "It's only a short-term solution." },
    { en: "to be in favour of", fr: "être pour", ex: "I'm in favour of free education." },
    { en: "to be opposed to", fr: "être opposé à", ex: "Many are opposed to the reform." },
    { en: "a grey area", fr: "une zone grise", ex: "This is a legal grey area." },
  ],
  shadow: [
    "It would seem that most people are in favour of the reform, at least to some extent.",
    "Young people tend to be more open to change, although there are exceptions.",
    "This is arguably the most controversial issue of our time.",
    "I see your point, but wouldn't it be better to address the root causes?",
  ],
  speak: { prompt: "Give a balanced opinion on a controversial issue in your country. Use hedging (it seems, tend to, arguably, likely, to some extent) and polite disagreement.", minWords: 160 },
  write: { prompt: "Write a balanced report on a social problem (unemployment, inequality, housing…): causes, possible solutions, your cautious conclusion. Use hedging language.", minWords: 170 },
  input: 5,
};
