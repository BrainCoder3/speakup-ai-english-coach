/**
 * Accents of the English- and Spanish-speaking worlds, mapped to browser voices.
 * Edge ships "Natural" voices for most of them (en-GB, en-NG, es-MX, es-AR…).
 */
import { bestVoice, courseVoices } from "./tts";

const EN = {
  us: { lang: "en-US", label: "🇺🇸 américain" }, gb: { lang: "en-GB", label: "🇬🇧 britannique" },
  au: { lang: "en-AU", label: "🇦🇺 australien" }, in: { lang: "en-IN", label: "🇮🇳 indien" },
  ie: { lang: "en-IE", label: "🇮🇪 irlandais" }, za: { lang: "en-ZA", label: "🇿🇦 sud-africain" },
  ng: { lang: "en-NG", label: "🇳🇬 nigérian" }, ca: { lang: "en-CA", label: "🇨🇦 canadien" },
  ke: { lang: "en-KE", label: "🇰🇪 kényan" }, nz: { lang: "en-NZ", label: "🇳🇿 néo-zélandais" },
  sg: { lang: "en-SG", label: "🇸🇬 singapourien" }, ph: { lang: "en-PH", label: "🇵🇭 philippin" },
};
const ES = {
  esES: { lang: "es-ES", label: "🇪🇸 Espagne" }, esMX: { lang: "es-MX", label: "🇲🇽 Mexique" },
  esAR: { lang: "es-AR", label: "🇦🇷 Argentine" }, esCO: { lang: "es-CO", label: "🇨🇴 Colombie" },
  esCL: { lang: "es-CL", label: "🇨🇱 Chili" }, esPE: { lang: "es-PE", label: "🇵🇪 Pérou" },
  esCU: { lang: "es-CU", label: "🇨🇺 Cuba" }, esVE: { lang: "es-VE", label: "🇻🇪 Venezuela" },
  esUY: { lang: "es-UY", label: "🇺🇾 Uruguay" }, esGQ: { lang: "es-GQ", label: "🇬🇶 Guinée équatoriale" },
};

export type Accent = keyof typeof EN | keyof typeof ES;
export const ACCENTS: Record<Accent, { lang: string; label: string }> = { ...EN, ...ES };

const allVoices = () => (typeof window === "undefined" ? [] : window.speechSynthesis?.getVoices() ?? []);
const sameLang = (v: SpeechSynthesisVoice, lang: string) => v.lang.replace("_", "-").toLowerCase() === lang.toLowerCase();

/**
 * The n-th voice of an accent (n lets two speakers of a dialogue sound different).
 * Falls back to another voice of the same language when the browser has none for this accent.
 */
export function voiceFor(accent: Accent, n = 0): { voice: SpeechSynthesisVoice | null; native: boolean } {
  const list = allVoices()
    .filter((v) => sameLang(v, ACCENTS[accent].lang))
    .sort((a, b) => Number(/Natural/i.test(b.name)) - Number(/Natural/i.test(a.name)));
  if (list.length) return { voice: list[n % list.length], native: true };
  const others = courseVoices().filter((v) => /Natural/i.test(v.name));
  return { voice: others[n % Math.max(1, others.length)] ?? bestVoice(), native: false };
}
