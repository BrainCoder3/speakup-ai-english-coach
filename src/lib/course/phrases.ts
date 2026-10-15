/** Short lines the coach says out loud, in the language being learnt. */
import { lang } from "./lang";

const PHRASES = {
  great: { en: "Great!", es: "¡Muy bien!" },
  greatAnswer: { en: "Great answer!", es: "¡Muy buena respuesta!" },
  congrats: { en: "Congratulations! Well done!", es: "¡Enhorabuena! ¡Muy bien hecho!" },
  notYet: { en: "Not yet. Read your corrections and try again. You can do it!", es: "Todavía no. Lee tus correcciones e inténtalo otra vez. ¡Tú puedes!" },
  almost: { en: "Almost!", es: "¡Casi!" },
  repeatAfterMe: { en: "Repeat after me:", es: "Repite conmigo:" },
  wellDone: { en: "Great, well done!", es: "¡Genial, muy bien!" },
  later: { en: "Okay, let's keep going. We'll practise it again later.", es: "Vale, seguimos. Lo practicaremos más tarde." },
  correct: { en: "Correct!", es: "¡Correcto!" },
  listenAgain: { en: "Not quite. Listen again.", es: "No exactamente. Escucha otra vez." },
  keepGoing: { en: "Keep going! Say more, and use the expressions.", es: "¡Sigue! Habla más y usa las expresiones." },
  improved: { en: "Excellent! You really improved.", es: "¡Excelente! Has mejorado mucho." },
  lastFixes: { en: "Very good! Fix your last mistakes and you're done.", es: "¡Muy bien! Corrige tus últimos errores y has terminado." },
  sayMore: { en: "Good. Now say more, with more details.", es: "Bien. Ahora habla más, con más detalles." },
} as const;

export type PhraseKey = keyof typeof PHRASES;

export const say = (key: PhraseKey) => PHRASES[key][lang().id];

/** "You made 3 mistakes. Let's fix them together." */
export const mistakesLine = (n: number) =>
  lang().id === "es" ? `Has cometido ${n} errores. Vamos a corregirlos juntos.` : `You made ${n} mistakes. Let's fix them together.`;
