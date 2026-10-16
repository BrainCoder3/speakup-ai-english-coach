import type { PlanDay } from "../types";

export const d29: PlanDay = {
  day: 29, title: "Présenter et débattre comme un pro (signposting)", level: "C1",
  grammar: {
    explain: [
      "Un orateur C1 <b>guide</b> son auditoire avec des « panneaux » (signposting) : <b>To begin with</b>… · <b>Moving on to</b>… · <b>As I mentioned earlier</b>… · <b>Let me give you an example</b>… · <b>To wrap up</b>…",
      "Gagner du temps naturellement : <b>That's a good question.</b> · <b>Let me think about that for a second.</b> · <b>How can I put it?</b> · <b>The way I see it,</b>…",
      "Débattre : <b>I take your point, but</b>… · <b>That may be true, however</b>… · <b>With all due respect,</b>… · <b>Let's not forget that</b>… · <b>Could you elaborate on that?</b>",
      "Conclure avec force : <b>All things considered,</b>… · <b>At the end of the day,</b>… · <b>The bottom line is</b>…",
    ],
    examples: [
      { en: "Moving on to my second point, let's look at the costs.", fr: "Passons à mon deuxième point : regardons les coûts." },
      { en: "With all due respect, I don't think that's accurate.", fr: "Sauf votre respect, je ne pense pas que ce soit exact." },
      { en: "The bottom line is that we need to act now.", fr: "L'essentiel, c'est que nous devons agir maintenant." },
    ],
    exercises: [
      { s: "___ begin with, let me introduce myself.", a: ["To"], why: "To begin with = pour commencer." },
      { s: "Moving ___ to my next point…", a: ["on"], why: "Moving on to… = passons à…" },
      { s: "As I ___ earlier, the budget is limited. (ai mentionné)", a: ["mentioned", "said"], why: "As I mentioned earlier." },
      { s: "I take your ___, but I see it differently.", a: ["point"], why: "I take your point." },
      { s: "With all due ___, that's not what the data shows.", a: ["respect"], why: "With all due respect." },
      { s: "Could you ___ on that? (développer)", a: ["elaborate"], why: "elaborate on = développer." },
      { s: "The bottom ___ is that we must change.", a: ["line"], why: "The bottom line is… = l'essentiel." },
      { s: "All things ___, it was a success. (tout bien considéré)", a: ["considered"], why: "All things considered." },
    ],
  },
  topic: "Débat et présentation",
  vocab: [
    { en: "to wrap up", fr: "conclure, terminer", ex: "Let me wrap up with a few words." },
    { en: "to elaborate on", fr: "développer (une idée)", ex: "Could you elaborate on that?" },
    { en: "to get the point across", fr: "faire passer le message", ex: "She got her point across clearly." },
    { en: "a key takeaway", fr: "un point clé à retenir", ex: "The key takeaway is simple." },
    { en: "to play devil's advocate", fr: "se faire l'avocat du diable", ex: "Let me play devil's advocate." },
    { en: "to sit on the fence", fr: "ne pas prendre position", ex: "Stop sitting on the fence!" },
    { en: "a counter-argument", fr: "un contre-argument", ex: "Consider the counter-arguments." },
    { en: "to be on the same page", fr: "être sur la même longueur d'onde", ex: "Let's make sure we're on the same page." },
    { en: "to put forward an idea", fr: "avancer une idée", ex: "He put forward an interesting idea." },
    { en: "food for thought", fr: "matière à réflexion", ex: "Your talk gave me food for thought." },
    { en: "to stand your ground", fr: "maintenir sa position", ex: "She stood her ground in the debate." },
    { en: "at the end of the day", fr: "au bout du compte", ex: "At the end of the day, it's your choice." },
  ],
  shadow: [
    "To begin with, I'd like to put forward an idea that might seem surprising.",
    "I take your point, but let me play devil's advocate for a moment.",
    "Moving on to my second argument, the key takeaway is that prevention is cheaper than cure.",
    "To wrap up, all things considered, the bottom line is that we must act now.",
  ],
  speak: { prompt: "Give a three-minute presentation on a topic you care about, with an introduction, three clear points (signposting), a counter-argument and a strong conclusion.", minWords: 200 },
  write: { prompt: "Write the script of a 3-minute talk (like a TED talk) on an idea worth sharing. Use signposting, hedging and a memorable conclusion.", minWords: 200 },
  input: 3,
};
