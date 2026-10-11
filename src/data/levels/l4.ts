import type { Level } from "../types";

/** Level 4 — Projets & futur (A2+). */
export const l4: Level = {
  id: "l4", n: 4, cefr: "A2+", title: "Projets & futur", subtitle: "going to, will",
  style: "clear sentences, future forms (going to, will, present continuous for arrangements)",
  lesson: [
    "<b>be going to</b> : projet déjà décidé — I'm going to travel.",
    "<b>will</b> : décision sur le moment, promesse, prédiction — I'll call you.",
    "<b>Present continuous</b> pour un rendez-vous fixé : I'm meeting him tomorrow.",
    "Marqueurs : <b>tomorrow, next week, next year, soon</b>.",
  ],
  repeat: [
    { en: "Next year I'm going to learn to drive.", fr: "L'année prochaine, je vais apprendre à conduire." },
    { en: "I'm going to visit my cousin in July.", fr: "Je vais rendre visite à mon cousin en juillet." },
    { en: "I think it will rain tomorrow.", fr: "Je pense qu'il pleuvra demain." },
    { en: "Don't worry, I'll help you.", fr: "Ne t'inquiète pas, je vais t'aider." },
    { en: "We're meeting the client on Monday.", fr: "Nous rencontrons le client lundi." },
    { en: "What are you going to do this weekend?", fr: "Que vas-tu faire ce week-end ?" },
    { en: "I hope I will find a better job.", fr: "J'espère trouver un meilleur emploi." },
    { en: "She's going to start a new business.", fr: "Elle va lancer une nouvelle entreprise." },
  ],
  questions: [
    { q: "What are you going to do this weekend?", hint: "« This weekend I'm going to… »", example: "This weekend I'm going to visit my parents." },
    { q: "What are your plans for next year?", hint: "« Next year I'm going to… »", example: "Next year I'm going to improve my English and change jobs." },
    { q: "Where would you like to travel one day?", hint: "« I'd like to go to… because… »", example: "I'd like to go to Canada because I want to see the snow." },
    { q: "What will you do after this lesson?", hint: "« After this lesson, I'll… »", example: "After this lesson, I'll have dinner with my family." },
    { q: "What is your biggest goal for the next five years?", hint: "Explique ton objectif et pourquoi", example: "In five years, I'm going to run my own company." },
  ],
  mission: {
    title: "Organiser un voyage", turns: 5,
    brief: "Tu organises un voyage avec un ami : destination, dates, transport, activités.",
    prompt: "You are a friend planning a trip with the learner. Discuss the destination, dates, transport, budget and activities. Encourage future forms.",
    opener: "I'm so excited about our trip! Where do you think we should go?",
  },
};
