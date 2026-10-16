import type { QuizQuestion } from "../learnTypes";

/** Placement test (day 0 and day 30): grammar and vocabulary from A2 to C1, harder at the end. */
export const PLACEMENT: QuizQuestion[] = [
  { q: "She ___ to work by bus every day.", options: ["go", "goes", "is going"], answer: 1, why: "Habitude, he/she/it → -s : she goes." },
  { q: "I ___ in Dakar since 2019.", options: ["live", "am living", "have lived"], answer: 2, why: "« depuis » + situation qui continue → present perfect." },
  { q: "___ you ever been to London?", options: ["Did", "Have", "Were"], answer: 1, why: "Expérience → present perfect : Have you ever been…?" },
  { q: "There isn't ___ milk left.", options: ["many", "much", "a few"], answer: 1, why: "Milk est indénombrable → much." },
  { q: "If it rains tomorrow, we ___ at home.", options: ["stay", "will stay", "would stay"], answer: 1, why: "Conditionnel réel (type 1) : if + présent, will + verbe." },
  { q: "He suggested ___ a taxi.", options: ["to take", "taking", "take"], answer: 1, why: "suggest + -ing." },
  { q: "The book ___ I bought yesterday is great.", options: ["who", "which", "what"], answer: 1, why: "Pour une chose : which / that." },
  { q: "I'm looking forward ___ you.", options: ["to see", "to seeing", "seeing"], answer: 1, why: "look forward to + -ing (to est une préposition)." },
  { q: "By the time we arrived, the film ___.", options: ["already started", "had already started", "has already started"], answer: 1, why: "Action antérieure à une autre action passée → past perfect." },
  { q: "If I ___ more money, I would travel more.", options: ["have", "had", "would have"], answer: 1, why: "Conditionnel irréel (type 2) : if + prétérit." },
  { q: "The report ___ by the manager last week.", options: ["was written", "wrote", "has been writing"], answer: 0, why: "Passif au passé : was + participe." },
  { q: "She told me she ___ tired.", options: ["is being", "was", "has"], answer: 1, why: "Discours indirect : le présent recule au passé." },
  { q: "You ___ have told me! I would have helped.", options: ["must", "should", "can"], answer: 1, why: "Reproche sur le passé : should have + participe." },
  { q: "Choose the most natural: « prendre une décision »", options: ["do a decision", "make a decision", "take a decision of"], answer: 1, why: "Collocation : make a decision." },
  { q: "We need to ___ a solution before Friday.", options: ["come up with", "come across", "come down"], answer: 0, why: "come up with = trouver (une idée, une solution)." },
  { q: "He can't ___ been at home; I saw him at the office.", options: ["have", "has", "had"], answer: 0, why: "Déduction sur le passé : can't have + participe." },
  { q: "I wish I ___ harder at school.", options: ["studied", "had studied", "would study"], answer: 1, why: "Regret sur le passé : wish + past perfect." },
  { q: "___ the rain, the match went ahead.", options: ["Although", "Despite", "However"], answer: 1, why: "despite + nom ; although + phrase." },
  { q: "If she had left earlier, she ___ the train.", options: ["would catch", "would have caught", "had caught"], answer: 1, why: "Type 3 : would have + participe." },
  { q: "Not only ___ late, but he also forgot the documents.", options: ["he arrived", "did he arrive", "he did arrive"], answer: 1, why: "Inversion après « Not only » : did he arrive." },
  { q: "___ I need is a good night's sleep.", options: ["That", "What", "Which"], answer: 1, why: "Phrase clivée : What I need is…" },
  { q: "« It's raining cats and dogs » means…", options: ["It's raining heavily", "Animals are outside", "The weather is changing"], answer: 0, why: "Expression idiomatique : il pleut des cordes." },
  { q: "___ finished the report, she went home.", options: ["Having", "After she", "Being"], answer: 0, why: "Proposition participiale : Having finished… = après avoir fini." },
  { q: "The results seem ___ that the plan is working.", options: ["suggesting", "to suggest", "suggest"], answer: 1, why: "seem to + verbe (prudence / hedging)." },
  { q: "Hardly ___ the house when it started to rain.", options: ["I had left", "had I left", "I left"], answer: 1, why: "Inversion après Hardly : had I left." },
  { q: "Choose the C1 word for « remettre en question »", options: ["to question", "to put in question", "to ask back"], answer: 0, why: "to question / to call into question." },
  { q: "She's very ___ — she always says exactly what she thinks.", options: ["outspoken", "outgoing", "outdated"], answer: 0, why: "outspoken = franc, qui dit ce qu'il pense." },
  { q: "It is widely ___ that exercise improves mood.", options: ["believing", "believed", "to believe"], answer: 1, why: "Passif impersonnel : It is believed that…" },
  { q: "I'd rather you ___ smoke in here.", options: ["don't", "didn't", "won't"], answer: 1, why: "I'd rather + quelqu'un + prétérit." },
  { q: "The meeting has been ___ until next week.", options: ["put off", "put out", "put up"], answer: 0, why: "put off = reporter." },
];

/** Rough CEFR estimate from the placement score (indicative only, not an official test). */
export function levelFromScore(score: number): string {
  if (score < 30) return "A2";
  if (score < 50) return "B1";
  if (score < 65) return "B1+";
  if (score < 78) return "B2";
  if (score < 90) return "B2+";
  return "C1";
}
