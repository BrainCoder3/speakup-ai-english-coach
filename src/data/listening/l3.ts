import type { ListeningText } from "../types";

/** Level 3 — telling the past, in Indian and South African English. */
export const listening3: ListeningText[] = [
  {
    title: "Un voyage compliqué", kind: "Récit", rate: 0.95,
    parts: [
      {
        speaker: "Priya", accent: "in",
        text: "Last month I travelled to Mumbai for my cousin's wedding. Unfortunately, the trip started badly. My train was three hours late, so I arrived at the hotel at midnight. The next morning, I realised I had forgotten my dress at home! I called my mother and she sent it by courier. It arrived just one hour before the ceremony. In the end, the wedding was beautiful and I danced all night.",
      },
    ],
    questions: [
      { q: "Why did Priya go to Mumbai?", answer: "She went to her cousin's wedding." },
      { q: "What was the problem with the train?", answer: "It was three hours late." },
      { q: "How did she get her dress?", answer: "Her mother sent it by courier." },
    ],
  },
  {
    title: "Message vocal de Thabo", kind: "Message vocal", rate: 0.95,
    parts: [
      {
        speaker: "Thabo", accent: "za",
        text: "Hey Sarah, it's Thabo. Sorry I missed your call yesterday. I was at my brother's house in Durban, and there was no signal there. We had a great time: we went fishing in the morning and we had a big barbecue in the evening. Oh, and I saw your sister at the market on Friday. She said hi! Anyway, call me back when you can. Bye!",
      },
    ],
    questions: [
      { q: "Why did Thabo miss Sarah's call?", answer: "There was no signal at his brother's house in Durban." },
      { q: "What did they do in the morning?", answer: "They went fishing." },
      { q: "Who did Thabo see at the market?", answer: "He saw Sarah's sister." },
    ],
  },
];
