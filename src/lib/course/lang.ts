/**
 * The language being learnt. The active course is stored in the settings; opening a lesson
 * switches to that lesson's course, so speech, voices, scoring and AI prompts all follow it.
 */
import { store } from "@/lib/store/store";

export type CourseId = "en" | "es";

export interface LangInfo {
  id: CourseId;
  /** Name used in AI prompts. */
  name: string;
  /** French name for the UI ("anglais"). */
  fr: string;
  flag: string;
  /** Speech recognition locale. */
  speech: string;
  /** Voices of this language. */
  voices: RegExp;
  /** Preferred voices, best first. */
  prefs: RegExp[];
  /** What to say to end a long recording. */
  stopHint: string;
  /** Sample line to try a voice. */
  sample: string;
}

export const LANGS: Record<CourseId, LangInfo> = {
  en: {
    id: "en", name: "English", fr: "anglais", flag: "🇬🇧", speech: "en-US", voices: /^en[-_]/i,
    prefs: [/Ava.*Natural/i, /Andrew.*Natural/i, /Emma.*Natural/i, /Brian.*Natural/i, /Jenny.*Natural/i, /Aria.*Natural/i, /Guy.*Natural/i, /Sonia.*Natural/i, /Natural/i, /Google US English/i, /Zira/i, /David/i],
    stopHint: "I'm done recording", sample: "Hi! This is my voice. Shall we practise?",
  },
  es: {
    id: "es", name: "Spanish", fr: "espagnol", flag: "🇪🇸", speech: "es-ES", voices: /^es[-_]/i,
    prefs: [/Elvira.*Natural/i, /Alvaro.*Natural/i, /Ximena.*Natural/i, /es-ES.*Natural/i, /Natural/i, /Google español/i, /Helena/i, /Pablo/i, /Laura/i],
    stopHint: "He terminado", sample: "¡Hola! Esta es mi voz. ¿Practicamos?",
  },
};

export const courseOfLevel = (levelId: string): CourseId => (levelId.startsWith("es") ? "es" : "en");
export const activeCourse = (): CourseId => store.settings().course ?? "en";
export const lang = (): LangInfo => LANGS[activeCourse()];

/** Makes `id` the active course (no-op when it already is). */
export function setCourse(id: CourseId) {
  if (activeCourse() !== id) store.setSetting("course", id);
}
