import type { PlanDay } from "../types";

export const d22: PlanDay = {
  day: 22, title: "L'inversion pour insister (Never have I…, Not only…)", level: "C1",
  grammar: {
    explain: [
      "Registre soutenu (C1) : après un adverbe <b>négatif ou restrictif</b> placé en tête, on inverse <b>auxiliaire + sujet</b>, comme dans une question.",
      "<b>Never have I</b> seen such a mess · <b>Rarely do</b> we agree · <b>Not only did</b> he lie, but he also… · <b>Hardly had</b> I arrived <b>when</b>… · <b>No sooner had</b> she left <b>than</b>…",
      "<b>Under no circumstances should</b> you… · <b>Only then did</b> I realise… · <b>Little did</b> I know that…",
      "Sans auxiliaire dans la phrase de base, on ajoute <b>do / does / did</b> : He rarely smiles → <b>Rarely does he smile</b>.",
    ],
    examples: [
      { en: "Never have I felt so proud.", fr: "Jamais je ne me suis senti aussi fier." },
      { en: "Little did we know that it would change our lives.", fr: "Nous étions loin de nous douter que ça changerait nos vies." },
      { en: "Not only is it cheaper, but it's also faster.", fr: "Non seulement c'est moins cher, mais c'est aussi plus rapide." },
    ],
    exercises: [
      { s: "Never ___ I seen such a beautiful sunset.", a: ["have"], why: "Never + have + sujet + participe." },
      { s: "Rarely ___ he arrive on time.", a: ["does"], why: "Présent sans auxiliaire → does." },
      { s: "Not only ___ she win the race, but she also broke the record.", a: ["did"], why: "Passé sans auxiliaire → did." },
      { s: "Hardly ___ we sat down when the phone rang.", a: ["had"], why: "Hardly had + sujet + participe … when." },
      { s: "No sooner had he left ___ it started to rain.", a: ["than"], why: "No sooner … than." },
      { s: "Under no circumstances ___ you open this door.", a: ["should"], why: "Under no circumstances + should + sujet." },
      { s: "Little ___ I know what was waiting for me.", a: ["did"], why: "Little did + sujet + base verbale." },
      { s: "Only then ___ I understand the problem.", a: ["did"], why: "Only then + did + sujet." },
    ],
  },
  topic: "Business et entreprise",
  vocab: [
    { en: "to launch a product", fr: "lancer un produit", ex: "We're launching a new product in May." },
    { en: "a stakeholder", fr: "une partie prenante", ex: "All stakeholders must agree." },
    { en: "revenue", fr: "le chiffre d'affaires", ex: "Revenue grew by 20%." },
    { en: "a competitive edge", fr: "un avantage concurrentiel", ex: "Innovation gives us a competitive edge." },
    { en: "to break even", fr: "atteindre le seuil de rentabilité", ex: "We broke even after two years." },
    { en: "to scale up", fr: "passer à l'échelle", ex: "We need funding to scale up." },
    { en: "a target market", fr: "un marché cible", ex: "Young people are our target market." },
    { en: "to negotiate a deal", fr: "négocier un accord", ex: "She negotiated a great deal." },
    { en: "a start-up", fr: "une start-up", ex: "He works for a fintech start-up." },
    { en: "to outsource", fr: "externaliser", ex: "They outsourced customer service." },
    { en: "market share", fr: "part de marché", ex: "We've increased our market share." },
    { en: "to pitch an idea", fr: "présenter une idée (pour convaincre)", ex: "I pitched my idea to investors." },
  ],
  shadow: [
    "Not only did we break even in our first year, but we also increased our market share.",
    "Never have I seen a start-up scale up so quickly.",
    "Little did they know that their competitive edge would disappear within months.",
    "Under no circumstances should we outsource our core business.",
  ],
  speak: { prompt: "Pitch a business idea to investors for two minutes. Include at least three inversions (Not only…, Never have…, Little did…) and the business vocabulary.", minWords: 150 },
  write: { prompt: "Write the story of a successful company (real or invented) in a formal style, using at least four inversions.", minWords: 160 },
  input: 3,
};
