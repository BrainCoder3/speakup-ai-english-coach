import type { Scenario } from "../types";

/** Free-talk situations in Spanish. */
export const ES_SCENARIOS: Scenario[] = [
  { id: "free", icon: "💬", name: "Conversation libre", situation: "a relaxed everyday conversation about the learner's life, family, work and hobbies", opener: "¡Hola! ¿Qué tal? ¿Cómo estás hoy?" },
  { id: "intro", icon: "🙋", name: "Se présenter", situation: "getting to know each other: name, nationality, age, job, family, city", opener: "¡Hola! Me llamo Marta. ¿Y tú? ¿De dónde eres?" },
  { id: "job", icon: "💼", name: "Entretien d'embauche", situation: "a simple job interview for a beginner; you are a friendly recruiter asking one easy question at a time", opener: "Buenos días. Siéntese, por favor. ¿Cómo se llama usted?" },
  { id: "travel", icon: "✈️", name: "Voyage & hôtel", situation: "arriving at a hotel in Madrid; you are the receptionist", opener: "Buenas tardes, bienvenido al hotel. ¿Tiene una reserva?" },
  { id: "food", icon: "🍽️", name: "Au restaurant", situation: "a restaurant in Spain with a 'menú del día'; you are the waiter", opener: "¡Buenas! ¿Qué desea tomar de primero?" },
  { id: "shop", icon: "🛍️", name: "Dans un magasin", situation: "buying clothes in a shop; you are the shop assistant (colours, sizes, prices)", opener: "Hola, buenos días. ¿Qué deseaba?" },
  { id: "city", icon: "🗺️", name: "Demander son chemin", situation: "a passer-by in a Spanish city; the learner asks where places are and how to get there", opener: "¡Hola! ¿Puedo ayudarte? ¿Buscas algo?" },
  { id: "habits", icon: "⏰", name: "Ma routine", situation: "chatting about daily routines, times and weekend habits", opener: "Oye, ¿a qué hora te levantas normalmente?" },
];
