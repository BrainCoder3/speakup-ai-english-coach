import type { ListeningText } from "../types";

/** Level 4 — plans and the future, in Canadian, British and Kenyan English. */
export const listening4: ListeningText[] = [
  {
    title: "Les vacances d'été", kind: "Dialogue", rate: 1,
    parts: [
      { speaker: "Liam", accent: "ca", text: "So, have you decided what you're going to do this summer?" },
      { speaker: "Sophie", accent: "gb", text: "Yes! I'm going to visit Scotland with my boyfriend. We're going to rent a car and drive around the Highlands." },
      { speaker: "Liam", accent: "ca", text: "That sounds amazing. How long are you going to stay?" },
      { speaker: "Sophie", accent: "gb", text: "Two weeks. What about you?" },
      { speaker: "Liam", accent: "ca", text: "I'm not sure yet. I think I'll stay in Vancouver and work. Maybe I'll go camping for a weekend if the weather is nice." },
      { speaker: "Sophie", accent: "gb", text: "You should! I'll send you some photos from Scotland." },
    ],
    questions: [
      { q: "Where is Sophie going this summer?", answer: "She is going to Scotland (the Highlands)." },
      { q: "How long is she going to stay there?", answer: "Two weeks." },
      { q: "What will Liam probably do this summer?", answer: "He will stay in Vancouver and work, maybe go camping for a weekend." },
    ],
  },
  {
    title: "Le projet d'Amani", kind: "Interview radio", rate: 1,
    parts: [
      {
        speaker: "Amani", accent: "ke",
        text: "Next year, I'm going to open my own restaurant in Nairobi. I have already found the place: it's near the university, so a lot of students will come. We're going to serve traditional Kenyan food, but at low prices. I think the hardest part will be finding good cooks. My plan is to hire five people at the beginning, and if everything goes well, we will open a second restaurant in Mombasa in three years.",
      },
    ],
    questions: [
      { q: "Where is Amani going to open her restaurant?", answer: "In Nairobi, near the university." },
      { q: "What kind of food will they serve?", answer: "Traditional Kenyan food at low prices." },
      { q: "What does Amani think will be the hardest part?", answer: "Finding good cooks." },
    ],
  },
];
