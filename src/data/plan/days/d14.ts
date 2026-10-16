import type { PlanDay } from "../types";

export const d14: PlanDay = {
  day: 14, title: "Révision semaine 2 (futur, conditionnels, modaux, -ing / to, comparaison, relatives)", level: "B2",
  grammar: {
    explain: [
      "Révision : <b>will / going to / présent continu</b>, <b>if + présent / if + prétérit</b>, <b>must / have to / mustn't / don't have to / should</b>, <b>verbe + -ing ou + to</b>, <b>comparatifs</b>, <b>relatives</b>.",
      "Défi du jour : relis tes rédactions de la semaine et note tes 5 erreurs les plus fréquentes dans « Mes erreurs ».",
    ],
    examples: [
      { en: "If I had more time, I'd take up the piano, which I've always wanted to learn.", fr: "Si j'avais plus de temps, je me mettrais au piano, que j'ai toujours voulu apprendre." },
      { en: "You don't have to agree, but you should listen.", fr: "Tu n'es pas obligé d'être d'accord, mais tu devrais écouter." },
    ],
    exercises: [
      { s: "If I ___ (know) the answer, I would tell you.", a: ["knew"], why: "Type 2 : if + prétérit." },
      { s: "I'll phone you when I ___ (get) there.", a: ["get"], why: "Après when → présent." },
      { s: "You ___ wear a suit; it's a casual party. (pas nécessaire)", a: ["don't have to", "do not have to", "needn't"], why: "Pas obligé → don't have to." },
      { s: "She avoided ___ (answer) the question.", a: ["answering"], why: "avoid + -ing." },
      { s: "They promised ___ (help) us.", a: ["to help"], why: "promise + to." },
      { s: "This exam was ___ (difficult) than I expected.", a: ["more difficult"], why: "Adjectif long → more." },
      { s: "The teacher ___ class I attend is from Kenya.", a: ["whose"], why: "Possession → whose." },
      { s: "Look out! You ___ (fall)! (prédiction évidente)", a: ["are going to fall", "'re going to fall"], why: "Indice visible → going to." },
      { s: "If you ___ (not / hurry), you'll miss the bus.", a: ["don't hurry", "do not hurry"], why: "Type 1 : if + présent." },
      { s: "That's the hotel ___ we stayed last summer.", a: ["where"], why: "Lieu → where." },
    ],
  },
  topic: "Révision du vocabulaire (semaine 2)",
  vocab: [
    { en: "to look forward to", fr: "avoir hâte de", ex: "I'm looking forward to the weekend." },
    { en: "in the long run", fr: "à long terme", ex: "In the long run, it's worth it." },
    { en: "to tackle a problem", fr: "s'attaquer à un problème", ex: "We must tackle the problem." },
    { en: "sustainable", fr: "durable", ex: "Sustainable growth is possible." },
    { en: "to unwind", fr: "décompresser", ex: "I need to unwind after work." },
    { en: "to feel run-down", fr: "être à plat", ex: "I feel a bit run-down." },
    { en: "to take up", fr: "se mettre à (un loisir)", ex: "I took up running." },
    { en: "to get the hang of", fr: "prendre le coup de main", ex: "You'll get the hang of it." },
    { en: "to commute", fr: "faire la navette", ex: "I commute by train." },
    { en: "the cost of living", fr: "le coût de la vie", ex: "The cost of living is high." },
    { en: "to get on well with", fr: "bien s'entendre avec", ex: "I get on well with him." },
    { en: "to rely on", fr: "compter sur", ex: "I rely on my friends." },
  ],
  shadow: [
    "If I had more spare time, I'd take up a new sport and finally get in shape.",
    "The more I practise, the more confident I feel when I speak.",
    "You don't have to be perfect; you just have to keep going.",
    "The friend I rely on most is the one who always tells me the truth.",
  ],
  speak: { prompt: "Talk for two minutes: 'My life one year from now.' Use future forms, conditionals, comparisons and at least three expressions from this week.", minWords: 140 },
  write: { prompt: "Write a 'for and against' essay: 'Should everyone work from home?' Use conditionals, modals, comparatives and relative clauses.", minWords: 140 },
  input: 5,
};
