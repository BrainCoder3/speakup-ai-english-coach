import type { ListeningText } from "../types";

/** Level 5 — work and experience, in British, Indian and American English. */
export const listening5: ListeningText[] = [
  {
    title: "L'entretien d'embauche", kind: "Dialogue", rate: 1,
    parts: [
      { speaker: "Recruiter", accent: "gb", text: "Thanks for coming in, Arjun. So, how long have you worked in marketing?" },
      { speaker: "Arjun", accent: "in", text: "I've worked in marketing for about six years. I started in a small agency in Bangalore, and I've been at my current company since 2021." },
      { speaker: "Recruiter", accent: "gb", text: "And what have you achieved there?" },
      { speaker: "Arjun", accent: "in", text: "I've launched three online campaigns, and one of them doubled our sales in six months. I've also trained four junior colleagues." },
      { speaker: "Recruiter", accent: "gb", text: "Impressive. Why do you want to leave?" },
      { speaker: "Arjun", accent: "in", text: "I've learned a lot, but I'd like to work for an international company and manage a bigger team." },
    ],
    questions: [
      { q: "How long has Arjun worked in marketing?", answer: "For about six years." },
      { q: "What was the result of one of his campaigns?", answer: "It doubled the sales in six months." },
      { q: "Why does he want to leave his current company?", answer: "He wants to work for an international company and manage a bigger team." },
    ],
  },
  {
    title: "Le télétravail", kind: "Podcast", rate: 1.02,
    parts: [
      {
        speaker: "Host", accent: "us",
        text: "Welcome back to Work Talk. Today, let's talk about remote work. Since 2020, millions of people have started working from home, at least part of the week. A recent survey shows that seventy percent of remote workers feel more productive, mainly because they don't waste time commuting. However, many of them also say they feel lonely, and that it's harder to separate work from private life. So, my advice is simple: have a dedicated workspace, take real breaks, and meet your colleagues in person at least once a week.",
      },
    ],
    questions: [
      { q: "What percentage of remote workers feel more productive?", answer: "Seventy percent." },
      { q: "Why do they feel more productive?", answer: "Because they don't waste time commuting." },
      { q: "Give one piece of advice from the host.", answer: "Have a dedicated workspace, take real breaks, or meet colleagues in person once a week." },
    ],
  },
];
