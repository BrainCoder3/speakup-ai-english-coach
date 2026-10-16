import type { PlanDay } from "../types";

export const d15: PlanDay = {
  day: 15, title: "Conditionnel 3 et conditionnels mixtes", level: "B2+",
  grammar: {
    explain: [
      "<b>Type 3</b> (passé irréel, regret) : If + <b>past perfect</b>, <b>would have</b> + participe → If I <b>had studied</b>, I <b>would have passed</b>.",
      "<b>Mixte passé → présent</b> : If I <b>had taken</b> that job, I <b>would be</b> rich now.",
      "<b>Mixte présent → passé</b> : If I <b>were</b> more organised, I <b>wouldn't have missed</b> the deadline.",
      "À l'oral : I'd have = <b>I would have</b> (prononcé « I'd've »). Jamais « if I would have ».",
    ],
    examples: [
      { en: "If we had left earlier, we wouldn't have missed the plane.", fr: "Si on était partis plus tôt, on n'aurait pas raté l'avion." },
      { en: "If she hadn't moved abroad, she wouldn't speak English so well now.", fr: "Si elle n'était pas partie à l'étranger, elle ne parlerait pas si bien anglais aujourd'hui." },
    ],
    exercises: [
      { s: "If I ___ (know) about the party, I would have come.", a: ["had known", "'d known"], why: "Type 3 : if + past perfect." },
      { s: "If you had asked me, I ___ (help) you.", a: ["would have helped", "'d have helped"], why: "Type 3 : would have + participe." },
      { s: "She ___ (not / fail) if she had studied harder.", a: ["wouldn't have failed", "would not have failed"], why: "Type 3 négatif." },
      { s: "If I had saved more money, I ___ (be) on holiday now.", a: ["would be", "'d be"], why: "Mixte : passé → conséquence présente." },
      { s: "If he ___ (be) more careful, he wouldn't have had the accident.", a: ["were", "had been"], why: "Mixte (trait permanent) ou type 3." },
      { s: "We would have won if our best player ___ (not / get) injured.", a: ["hadn't got", "had not got", "hadn't gotten", "had not gotten"], why: "Type 3 : if + past perfect." },
      { s: "If I ___ (take) that job in London, I would speak better English today.", a: ["had taken", "'d taken"], why: "Mixte : if + past perfect, would + verbe." },
      { s: "What would you have done if you ___ (lose) your passport?", a: ["had lost", "'d lost"], why: "Type 3." },
    ],
  },
  topic: "Décisions et regrets",
  vocab: [
    { en: "to regret doing", fr: "regretter d'avoir fait", ex: "I regret not taking that opportunity." },
    { en: "a missed opportunity", fr: "une occasion manquée", ex: "It was a missed opportunity." },
    { en: "in hindsight", fr: "avec le recul", ex: "In hindsight, I should have stayed." },
    { en: "to weigh up the pros and cons", fr: "peser le pour et le contre", ex: "I weighed up the pros and cons." },
    { en: "a tough decision", fr: "une décision difficile", ex: "It was a tough decision to leave." },
    { en: "to make up your mind", fr: "se décider", ex: "I can't make up my mind." },
    { en: "to have second thoughts", fr: "avoir des doutes, hésiter", ex: "I'm having second thoughts about the move." },
    { en: "to take the plunge", fr: "se jeter à l'eau", ex: "She finally took the plunge and quit." },
    { en: "to learn the hard way", fr: "apprendre à ses dépens", ex: "I learnt that lesson the hard way." },
    { en: "no regrets", fr: "aucun regret", ex: "I took the risk and I have no regrets." },
    { en: "to turn down an offer", fr: "refuser une offre", ex: "He turned down a great offer." },
    { en: "a blessing in disguise", fr: "un mal pour un bien", ex: "Losing that job was a blessing in disguise." },
  ],
  shadow: [
    "In hindsight, if I had weighed up the pros and cons, I wouldn't have turned down that offer.",
    "If I hadn't taken the plunge, I wouldn't be living abroad now.",
    "Losing that job turned out to be a blessing in disguise.",
    "I learnt the hard way that you should never make decisions when you're angry.",
  ],
  speak: { prompt: "Talk about an important decision in your life. What would have happened if you had chosen differently? How would your life be different today?", minWords: 140 },
  write: { prompt: "Write about a turning point in your life using at least four third or mixed conditionals: what happened, and how things would be different now.", minWords: 140 },
  input: 3,
};
