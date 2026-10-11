import type { ListeningText } from "../types";

/** Level 7 — business, in American, Singaporean, South African and British English. */
export const listening7: ListeningText[] = [
  {
    title: "Réunion de lancement", kind: "Réunion", rate: 1.05,
    parts: [
      { speaker: "Rachel", accent: "us", text: "Okay everyone, let's get started. The goal of this meeting is to agree on the launch date for the new app. Wei Ling, where are we on development?" },
      { speaker: "Wei Ling", accent: "sg", text: "We're about two weeks behind schedule. The payment feature took longer than expected, and we still need to fix some bugs on Android." },
      { speaker: "Rachel", accent: "us", text: "So realistically, is the end of March still possible?" },
      { speaker: "Wei Ling", accent: "sg", text: "To be honest, I'd rather go for mid-April. If we rush it, we risk getting bad reviews from the very first day." },
      { speaker: "Rachel", accent: "us", text: "Fair enough. Let's tentatively say April fifteenth, and we'll review progress next Monday. Can you send me an updated plan by Friday?" },
    ],
    questions: [
      { q: "What is the goal of the meeting?", answer: "To agree on the launch date for the new app." },
      { q: "Why is the team behind schedule?", answer: "The payment feature took longer, and there are still bugs on Android." },
      { q: "What does Rachel ask Wei Ling to do by Friday?", answer: "To send an updated plan." },
    ],
  },
  {
    title: "Négociation avec un fournisseur", kind: "Négociation", rate: 1.05,
    parts: [
      { speaker: "Pieter", accent: "za", text: "We're happy with the quality of your coffee, but the price is a bit high for us. Is there any flexibility?" },
      { speaker: "Hannah", accent: "gb", text: "I understand. If you commit to a twelve-month contract, we could offer an eight percent discount." },
      { speaker: "Pieter", accent: "za", text: "Eight percent is a good start. Could you also include free delivery? Shipping costs are a big issue for us." },
      { speaker: "Hannah", accent: "gb", text: "Free delivery would only be possible for orders over five hundred kilos. Would that work for you?" },
      { speaker: "Pieter", accent: "za", text: "That should be fine. Send me the proposal in writing and I'll discuss it with my partners." },
    ],
    questions: [
      { q: "What does Pieter think about the price?", answer: "He thinks it is a bit high." },
      { q: "What discount does Hannah offer, and on what condition?", answer: "Eight percent if they sign a twelve-month contract." },
      { q: "When is the delivery free?", answer: "For orders over five hundred kilos." },
    ],
  },
];
