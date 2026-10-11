import type { Scenario } from "./types";

/** Free-talk levels (no grading gate). */
export const FREE_LEVELS = {
  beginner: { cefr: "A2", label: "Débutant", style: "very short, simple sentences (max 12 words), very common words" },
  intermediate: { cefr: "B1-B2", label: "Intermédiaire", style: "natural everyday English, 1-3 sentences, a few useful idioms" },
  advanced: { cefr: "C1", label: "Avancé", style: "fluent, idiomatic English, 2-3 sentences, varied structures" },
} as const;
export type FreeLevel = keyof typeof FREE_LEVELS;

export const SCENARIOS: Scenario[] = [
  { id: "free", icon: "💬", name: "Conversation libre", situation: "a relaxed everyday conversation about the learner's life, interests and opinions", opener: "Hey there! Great to meet you. How's your day going so far?" },
  { id: "intro", icon: "🙋", name: "Se présenter", situation: "getting to know each other: name, job, family, city, hobbies", opener: "Hi! Tell me a little about yourself. Where are you from, and what do you do?" },
  { id: "job", icon: "💼", name: "Entretien d'embauche", situation: "a job interview; you are a friendly but professional recruiter asking one question at a time", opener: "Good morning, thanks for coming in. Could you tell me a bit about yourself?" },
  { id: "travel", icon: "✈️", name: "Voyage & aéroport", situation: "airport check-in, immigration questions, then the hotel; you play the staff member", opener: "Good afternoon! May I see your passport? Where are you travelling to today?" },
  { id: "food", icon: "🍽️", name: "Au restaurant", situation: "a restaurant; you are the waiter taking the order and chatting", opener: "Good evening and welcome! Can I get you something to drink while you look at the menu?" },
  { id: "business", icon: "📈", name: "Business & clients", situation: "a business meeting with a potential client asking about the learner's company, services and prices", opener: "Thanks for meeting with me today. Could you walk me through what your company offers?" },
  { id: "phone", icon: "📞", name: "Au téléphone", situation: "a phone call to book an appointment; you are the receptionist", opener: "Good morning, City Clinic, this is Sarah speaking. How can I help you today?" },
  { id: "debate", icon: "🎯", name: "Débat & opinions", situation: "a friendly debate where you give a topic, ask for the learner's opinion and gently challenge it", opener: "Here's a topic: should schools teach coding from primary school? What's your opinion?" },
];
