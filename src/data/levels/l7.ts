import type { Level } from "../types";

/** Level 7 — Business (B2). */
export const l7: Level = {
  id: "l7", n: 7, cefr: "B2", title: "Business", subtitle: "Réunions et négociation",
  style: "professional, polite and precise business English, 2-3 sentences",
  lesson: [
    "Politesse pro : <b>Could you…?</b> <b>Would it be possible to…?</b>",
    "Proposer : <b>How about…?</b> <b>We could…</b> <b>I'd suggest…</b>",
    "Négocier : <b>Our budget is…</b>, <b>Can we meet halfway?</b>",
    "Conclure : <b>Let's move forward with…</b>, <b>I'll send you a proposal.</b>",
  ],
  repeat: [
    { en: "Thank you for taking the time to meet with us.", fr: "Merci d'avoir pris le temps de nous rencontrer." },
    { en: "Could you walk me through your proposal?", fr: "Pourriez-vous me présenter votre proposition en détail ?" },
    { en: "Our main priority is to reduce costs.", fr: "Notre priorité principale est de réduire les coûts." },
    { en: "Would it be possible to extend the deadline?", fr: "Serait-il possible de prolonger le délai ?" },
    { en: "I'd suggest we start with a small pilot project.", fr: "Je suggère de commencer par un petit projet pilote." },
    { en: "That price is a bit higher than we expected.", fr: "Ce prix est un peu plus élevé que prévu." },
    { en: "Can we meet halfway on the budget?", fr: "Pouvons-nous trouver un compromis sur le budget ?" },
    { en: "I'll send you a detailed proposal by Friday.", fr: "Je vous enverrai une proposition détaillée d'ici vendredi." },
  ],
  questions: [
    { q: "Can you briefly present your company or a project you work on?", hint: "Quoi, pour qui, quel résultat", example: "We build websites and mobile apps for small businesses that want to sell online." },
    { q: "A client says your price is too high. What do you answer?", hint: "Valeur + proposition de compromis", example: "I understand. Our price includes support, but we could start with a smaller package." },
    { q: "How would you convince a client to choose your service?", hint: "Bénéfices concrets + preuve", example: "I would show them our past results and offer a free trial for one month." },
    { q: "Your project is late. How do you explain it to your manager?", hint: "Cause + solution + nouveau délai", example: "We had a technical issue with the server, but we fixed it and we'll deliver next Monday." },
    { q: "What makes a good business partner?", hint: "2 qualités + pourquoi", example: "A good partner is reliable and honest, because trust makes long-term work possible." },
  ],
  mission: {
    title: "Négociation client", turns: 6,
    brief: "Un client potentiel trouve ton offre intéressante mais trop chère et trop lente. Négocie un accord.",
    prompt: "You are a demanding but fair potential client. You like the learner's service but think the price is too high and the timeline too long. Negotiate, ask for guarantees, and only agree if they make a reasonable offer.",
    opener: "Thanks for the presentation. I like your service, but honestly the price is higher than we expected. What can you do?",
  },
};
