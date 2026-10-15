/**
 * The learner ends a long recording by saying a stop phrase:
 * "I'm done recording" / "I'm done" / "end of recording" in English,
 * "He terminado" / "Ya terminé" / "Fin de la grabación" in Spanish (both always work).
 */
import { lang } from "@/lib/course/lang";

const FILLER = String.raw`(?:(?:and|so|okay|ok|well|um|uh|that's it|that is it|y|bueno|pues|vale|eso es todo)[\s,]+)*`;
const EN = String.raw`(?:i\s*am|i'm|im)\s+(?:done|finished)(?:\s+(?:recording|speaking|talking))?|(?:(?:this|that)\s+is\s+|that's\s+)?(?:the\s+)?(?:end|stop)\s+(?:of\s+)?recording`;
const ES = String.raw`(?:ya\s+)?(?:he\s+terminado|termin[eé]|acab[eé]|he\s+acabado)(?:\s+de\s+(?:grabar|hablar))?|(?:es\s+el\s+)?fin\s+de\s+(?:la\s+)?grabaci[oó]n`;
const STOP = new RegExp(String.raw`(?:^|[\s.,!?¡¿])${FILLER}(?:${EN}|${ES})[\s.,!?]*$`, "i");

/** Explicit form only ("…done recording", "…de grabar"): safe to act on while the learner is still talking. */
const EXPLICIT = /(?:recording|speaking|talking|grabar|hablar|grabaci[oó]n|he terminado)[\s.,!?]*$/i;

/**
 * True when the transcript ends with a stop phrase. On a live (interim) transcript only the
 * explicit form counts, so "I am done with my homework" is not cut after "I am done".
 */
export const endsWithStop = (text: string, live = false) => STOP.test(text.trim()) && (!live || EXPLICIT.test(text.trim()));

/** Removes the stop phrase from the end of the transcript. */
export const withoutStop = (text: string) => text.trim().replace(STOP, "").trim();

/** Shown in the UI so the learner knows how to finish. */
export const stopHint = () => lang().stopHint;
