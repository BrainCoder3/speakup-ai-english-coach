/**
 * Accents of the English-speaking world, mapped to browser voices.
 * Edge ships "Natural" voices for most of them (en-GB, en-AU, en-IN, en-NG…).
 */
import { bestVoice, englishVoices } from "./tts";

export type Accent = "us" | "gb" | "au" | "in" | "ie" | "za" | "ng" | "ca" | "ke" | "nz" | "sg" | "ph";

export const ACCENTS: Record<Accent, { lang: string; label: string }> = {
  us: { lang: "en-US", label: "🇺🇸 américain" },
  gb: { lang: "en-GB", label: "🇬🇧 britannique" },
  au: { lang: "en-AU", label: "🇦🇺 australien" },
  in: { lang: "en-IN", label: "🇮🇳 indien" },
  ie: { lang: "en-IE", label: "🇮🇪 irlandais" },
  za: { lang: "en-ZA", label: "🇿🇦 sud-africain" },
  ng: { lang: "en-NG", label: "🇳🇬 nigérian" },
  ca: { lang: "en-CA", label: "🇨🇦 canadien" },
  ke: { lang: "en-KE", label: "🇰🇪 kényan" },
  nz: { lang: "en-NZ", label: "🇳🇿 néo-zélandais" },
  sg: { lang: "en-SG", label: "🇸🇬 singapourien" },
  ph: { lang: "en-PH", label: "🇵🇭 philippin" },
};

const sameLang = (v: SpeechSynthesisVoice, lang: string) => v.lang.replace("_", "-").toLowerCase() === lang.toLowerCase();

/**
 * The n-th voice of an accent (n lets two speakers of a dialogue sound different).
 * Falls back to another English voice when the browser has none for this accent.
 */
export function voiceFor(accent: Accent, n = 0): { voice: SpeechSynthesisVoice | null; native: boolean } {
  const all = englishVoices();
  const list = all
    .filter((v) => sameLang(v, ACCENTS[accent].lang))
    .sort((a, b) => Number(/Natural/i.test(b.name)) - Number(/Natural/i.test(a.name)));
  if (list.length) return { voice: list[n % list.length], native: true };
  const others = all.filter((v) => /Natural/i.test(v.name));
  return { voice: others[n % Math.max(1, others.length)] ?? bestVoice(), native: false };
}
