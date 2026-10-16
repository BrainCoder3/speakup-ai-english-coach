import type { PlanDay } from "../types";

export const d17: PlanDay = {
  day: 17, title: "Le discours indirect (reported speech)", level: "B2+",
  grammar: {
    explain: [
      "Avec un verbe introducteur au passé (said, told), les temps <b>reculent</b> : présent → prétérit, present perfect / prétérit → past perfect, will → <b>would</b>, can → <b>could</b>, must → <b>had to</b>.",
      "<b>say</b> (something) / <b>tell</b> + quelqu'un : She <b>said</b> (that)… / She <b>told me</b> (that)… — jamais « said me ».",
      "Questions rapportées : ordre de phrase affirmative, sans do/did : He asked me <b>where I lived</b> (pas « where did I live ») · oui/non → <b>if / whether</b>.",
      "Ordres et conseils : <b>tell / ask / advise + someone + to</b> : She told me <b>to wait</b>. Verbes variés (C1) : <b>admit, deny, suggest, insist, warn, claim</b>.",
    ],
    examples: [
      { en: "He told me he would call back later.", fr: "Il m'a dit qu'il rappellerait plus tard." },
      { en: "She asked me whether I had ever been to Kenya.", fr: "Elle m'a demandé si j'étais déjà allé au Kenya." },
      { en: "The doctor advised me to rest.", fr: "Le médecin m'a conseillé de me reposer." },
    ],
    exercises: [
      { s: "« I am tired. » → She said she ___ tired.", a: ["was"], why: "Présent → prétérit." },
      { s: "« I will help you. » → He said he ___ help me.", a: ["would"], why: "will → would." },
      { s: "« I have finished. » → She told me she ___ finished.", a: ["had"], why: "Present perfect → past perfect." },
      { s: "« Where do you live? » → He asked me where I ___.", a: ["lived"], why: "Question rapportée : ordre affirmatif, temps reculé." },
      { s: "« Are you coming? » → She asked ___ I was coming.", a: ["if", "whether"], why: "Question oui/non → if / whether." },
      { s: "« Sit down. » → The teacher told us ___ sit down.", a: ["to"], why: "Ordre → tell + quelqu'un + to." },
      { s: "He ___ me that he was leaving. (say / tell)", a: ["told"], why: "tell + quelqu'un." },
      { s: "She ___ that she had made a mistake. (a reconnu)", a: ["admitted"], why: "admit = reconnaître, avouer." },
    ],
  },
  topic: "Médias et actualité",
  vocab: [
    { en: "breaking news", fr: "dernière minute", ex: "We interrupt this programme for breaking news." },
    { en: "a headline", fr: "un gros titre", ex: "It made the headlines yesterday." },
    { en: "fake news", fr: "fausses informations", ex: "Fake news spreads fast online." },
    { en: "a reliable source", fr: "une source fiable", ex: "Always check for a reliable source." },
    { en: "biased", fr: "partial, orienté", ex: "That newspaper is very biased." },
    { en: "to go viral", fr: "devenir viral", ex: "The video went viral overnight." },
    { en: "to claim", fr: "affirmer, prétendre", ex: "He claims he's innocent." },
    { en: "to deny", fr: "nier", ex: "The minister denied the rumours." },
    { en: "a press conference", fr: "une conférence de presse", ex: "She announced it at a press conference." },
    { en: "to cover a story", fr: "couvrir un sujet", ex: "Many journalists covered the story." },
    { en: "according to", fr: "selon", ex: "According to the report, prices rose." },
    { en: "to spread misinformation", fr: "propager de la désinformation", ex: "Bots spread misinformation." },
  ],
  shadow: [
    "According to the report, the minister denied that he had known about the problem.",
    "She told me the video had gone viral overnight.",
    "Journalists asked whether the government would change its position.",
    "Be careful: that website is biased and often spreads misinformation.",
  ],
  speak: { prompt: "Report a conversation or an interview you heard recently (or a news story): who said what, what they claimed, denied and suggested.", minWords: 140 },
  write: { prompt: "Write a short news article reporting what three people said about a local event. Use reported speech and verbs like claim, deny, admit, suggest.", minWords: 140 },
  input: 5,
};
