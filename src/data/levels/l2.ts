import type { Level } from "../types";

/** Level 2 — Ma journée (A1+). */
export const l2: Level = {
  id: "l2", n: 2, cefr: "A1+", title: "Ma journée", subtitle: "Routine et présent simple",
  style: "short simple sentences (max 12 words), everyday vocabulary, present simple",
  lesson: [
    "Le <b>présent simple</b> décrit les habitudes : I work, I eat, I go.",
    "Avec <b>he / she / it</b>, on ajoute <b>-s</b> : she work<b>s</b>, he go<b>es</b>.",
    "Négation : <b>I don't</b>… / <b>she doesn't</b>… (le verbe ne prend plus de -s).",
    "Fréquence avant le verbe : <b>always, usually, sometimes, never</b>.",
  ],
  repeat: [
    { en: "I usually wake up at six o'clock.", fr: "Je me réveille d'habitude à six heures." },
    { en: "I take a shower and get dressed.", fr: "Je prends une douche et je m'habille." },
    { en: "I have breakfast with my family.", fr: "Je prends le petit-déjeuner en famille." },
    { en: "She goes to work by bus.", fr: "Elle va au travail en bus." },
    { en: "He doesn't drink coffee in the morning.", fr: "Il ne boit pas de café le matin." },
    { en: "We have lunch at one o'clock.", fr: "Nous déjeunons à une heure." },
    { en: "I usually go to bed at eleven.", fr: "Je me couche d'habitude à onze heures." },
    { en: "What time do you get up?", fr: "À quelle heure te lèves-tu ?" },
  ],
  questions: [
    { q: "What time do you usually wake up?", hint: "« I usually wake up at… »", example: "I usually wake up at six." },
    { q: "What do you eat for breakfast?", hint: "« I eat… and I drink… »", example: "I usually eat bread and drink tea." },
    { q: "How do you go to work or school?", hint: "« I go to work by bus / on foot »", example: "I go to work by motorbike." },
    { q: "What do you do in the evening?", hint: "Plusieurs activités avec « and »", example: "In the evening, I watch TV and call my friends." },
    { q: "What does your best friend do?", hint: "Attention au -s avec he / she", example: "My best friend works in a bank." },
  ],
  mission: {
    title: "Ta routine", turns: 5,
    brief: "Un ami veut connaître ta journée type. Décris ton matin, ton travail et ta soirée.",
    prompt: "You are a curious friend asking the learner about their daily routine: mornings, work or studies, meals and evenings. One question at a time.",
    opener: "So tell me, what does a normal day look like for you?",
  },
};
