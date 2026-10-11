import type { ListeningText } from "../types";

/** Level 2 — daily routines, in Australian, Irish and American English. */
export const listening2: ListeningText[] = [
  {
    title: "La journée de Chloe", kind: "Monologue", rate: 0.92,
    parts: [
      {
        speaker: "Chloe", accent: "au",
        text: "G'day! I'm Chloe and I'm a nurse in Sydney. I usually get up at half past five, because my shift starts at seven. I have a quick breakfast, normally toast and a coffee, and I take the bus to the hospital. I finish work at three in the afternoon. After work, I often go to the beach with my friends. In the evening I cook dinner, I watch a bit of TV and I go to bed early, at about ten.",
      },
    ],
    questions: [
      { q: "What time does Chloe get up?", answer: "She gets up at half past five (5:30)." },
      { q: "How does she go to work?", answer: "She takes the bus." },
      { q: "What does she often do after work?", answer: "She often goes to the beach with her friends." },
    ],
  },
  {
    title: "Le week-end de Sean", kind: "Dialogue", rate: 0.92,
    parts: [
      { speaker: "Sean", accent: "ie", text: "So, what do you usually do on Saturdays, Jessica?" },
      { speaker: "Jessica", accent: "us", text: "I usually sleep late! Then I go running in the park. What about you?" },
      { speaker: "Sean", accent: "ie", text: "I never sleep late. I work in my parents' shop on Saturday mornings." },
      { speaker: "Jessica", accent: "us", text: "Every Saturday? That's a lot of work." },
      { speaker: "Sean", accent: "ie", text: "It's fine. In the afternoon I play football with my brother, and on Sundays I visit my grandmother." },
    ],
    questions: [
      { q: "What does Jessica do after she wakes up on Saturdays?", answer: "She goes running in the park." },
      { q: "Where does Sean work on Saturday mornings?", answer: "In his parents' shop." },
      { q: "Who does Sean visit on Sundays?", answer: "He visits his grandmother." },
    ],
  },
];
