import type { ListeningText } from "../types";

/** Level 6 — opinions and debate, in Australian, Irish and Nigerian English. */
export const listening6: ListeningText[] = [
  {
    title: "Débat : les réseaux sociaux", kind: "Débat radio", rate: 1.02,
    parts: [
      { speaker: "Host", accent: "au", voice: 1, text: "Today's question: should children under fifteen be allowed on social media? Ciara, what's your view?" },
      { speaker: "Ciara", accent: "ie", text: "Honestly, I don't think they should. Studies show that heavy use is linked to anxiety and poor sleep, and young kids just aren't ready to deal with online bullying." },
      { speaker: "Host", accent: "au", voice: 1, text: "Jack, I believe you disagree?" },
      { speaker: "Jack", accent: "au", text: "I do, to some extent. Banning it completely won't work, because kids will find a way around it. In my opinion, it's better to teach them how to use it safely, and parents should set clear limits." },
      { speaker: "Ciara", accent: "ie", text: "I see your point, but that puts a lot of pressure on parents who don't understand these apps themselves." },
    ],
    questions: [
      { q: "What is Ciara's opinion?", answer: "Children under fifteen should not be allowed on social media." },
      { q: "Which problems does Ciara mention?", answer: "Anxiety, poor sleep and online bullying." },
      { q: "What does Jack suggest instead of a ban?", answer: "Teaching kids to use it safely, with clear limits set by parents." },
    ],
  },
  {
    title: "Faut-il apprendre à coder ?", kind: "Opinion", rate: 1.02,
    parts: [
      {
        speaker: "Chinedu", accent: "ng",
        text: "People often ask me whether everyone should learn to code. My answer is yes, but not for the reason you think. Not everybody needs to become a programmer. However, coding teaches you to break a big problem into small steps, and that skill is useful in every job. Some people argue that artificial intelligence will soon write all the code. That may be partly true, but if you don't understand the basics, you won't be able to check whether the machine is right. So, start small: thirty minutes a day is enough.",
      },
    ],
    questions: [
      { q: "According to Chinedu, what does coding teach you?", answer: "To break a big problem into small steps." },
      { q: "What argument about artificial intelligence does he mention?", answer: "Some people say AI will soon write all the code." },
      { q: "How much time does he recommend each day?", answer: "Thirty minutes a day." },
    ],
  },
];
