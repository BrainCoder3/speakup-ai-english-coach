import type { Level } from "../types";

/** Level 5 — Au travail (B1). */
export const l5: Level = {
  id: "l5", n: 5, cefr: "B1", title: "Au travail", subtitle: "Expérience et present perfect",
  style: "natural professional English, present perfect for experience, 1-3 sentences",
  lesson: [
    "<b>Present perfect</b> (have + participe) pour l'expérience : I <b>have worked</b> here for two years.",
    "<b>for</b> = pendant une durée (for two years) ; <b>since</b> = depuis un point (since 2022).",
    "Pas de date précise avec le present perfect : on ne dit pas « I have worked yesterday ».",
    "Vocabulaire : <b>skills, experience, team, deadline, responsible for</b>.",
  ],
  repeat: [
    { en: "I have worked as a developer for three years.", fr: "Je travaille comme développeur depuis trois ans." },
    { en: "I have never managed a big team.", fr: "Je n'ai jamais dirigé une grande équipe." },
    { en: "I am responsible for the company website.", fr: "Je suis responsable du site de l'entreprise." },
    { en: "I have just finished an important project.", fr: "Je viens de terminer un projet important." },
    { en: "We have worked together since last year.", fr: "Nous travaillons ensemble depuis l'année dernière." },
    { en: "I'm good at solving problems.", fr: "Je suis doué pour résoudre les problèmes." },
    { en: "Could you tell me more about the position?", fr: "Pourriez-vous m'en dire plus sur le poste ?" },
    { en: "I work well under pressure.", fr: "Je travaille bien sous pression." },
  ],
  questions: [
    { q: "Can you tell me about your work experience?", hint: "« I have worked as… for… »", example: "I have worked as a sales assistant for two years." },
    { q: "How long have you worked in your current job or studied in your school?", hint: "« for » + durée / « since » + point de départ", example: "I have studied at this university since 2023." },
    { q: "What are your main strengths?", hint: "« I'm good at… », « I'm very… »", example: "I'm good at communication and I'm very organised." },
    { q: "Tell me about a problem you solved at work or school.", hint: "Raconte au prétérit : situation, action, résultat", example: "Our website was very slow, so I optimised the images and it became twice as fast." },
    { q: "Why should we hire you?", hint: "2 qualités + une preuve", example: "You should hire me because I learn fast and I have already led successful projects." },
  ],
  mission: {
    title: "Entretien d'embauche", turns: 6,
    brief: "Tu passes un entretien. Le coach est le recruteur. Parle de ton expérience, tes qualités et ta motivation.",
    prompt: "You are a professional but friendly recruiter interviewing the learner for a job. Ask typical interview questions one at a time (experience, strengths, a challenge, motivation, salary expectations).",
    opener: "Good morning, thanks for coming in. To start, could you tell me a bit about yourself?",
  },
};
