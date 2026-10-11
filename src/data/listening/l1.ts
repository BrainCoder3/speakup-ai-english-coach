import type { ListeningText } from "../types";

/** Level 1 — introductions, in British and Nigerian / American English. */
export const listening1: ListeningText[] = [
  {
    title: "Le nouveau voisin", kind: "Monologue", rate: 0.9,
    parts: [
      {
        speaker: "Oliver", accent: "gb",
        text: "Hello! My name is Oliver. I am thirty years old and I am from Manchester, in England. I live in a small flat near the station. I am a teacher at a primary school. In my free time, I like cooking and playing the guitar. I have a sister. Her name is Emma, and she lives in London.",
      },
    ],
    questions: [
      { q: "Where is Oliver from?", answer: "He is from Manchester, in England." },
      { q: "What is his job?", answer: "He is a teacher at a primary school." },
      { q: "What does he like doing in his free time?", answer: "He likes cooking and playing the guitar." },
    ],
  },
  {
    title: "Au café", kind: "Dialogue", rate: 0.9,
    parts: [
      { speaker: "Grace", accent: "ng", text: "Hi! Is this seat free?" },
      { speaker: "Mike", accent: "us", text: "Yes, sure. Please sit down. I'm Mike, by the way." },
      { speaker: "Grace", accent: "ng", text: "Nice to meet you, Mike. I'm Grace. I'm from Lagos, in Nigeria." },
      { speaker: "Mike", accent: "us", text: "Oh, cool! I'm from Chicago. What do you do here, Grace?" },
      { speaker: "Grace", accent: "ng", text: "I'm a nurse. I work at the hospital across the street. And you?" },
      { speaker: "Mike", accent: "us", text: "I'm a student. I study computer science. I come to this café every morning." },
    ],
    questions: [
      { q: "Where is Grace from?", answer: "She is from Lagos, in Nigeria." },
      { q: "What is Grace's job?", answer: "She is a nurse at the hospital across the street." },
      { q: "What does Mike study?", answer: "He studies computer science." },
    ],
  },
];
