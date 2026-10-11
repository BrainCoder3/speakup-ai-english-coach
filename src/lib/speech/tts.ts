/** Text-to-speech with the browser voices (Edge "Natural" voices sound best). */
import { store } from "@/lib/store/store";

const PREFS = [/Ava.*Natural/i, /Andrew.*Natural/i, /Emma.*Natural/i, /Brian.*Natural/i, /Jenny.*Natural/i,
  /Aria.*Natural/i, /Guy.*Natural/i, /Sonia.*Natural/i, /Natural/i, /Google US English/i, /Zira/i, /David/i];

let pending = 0;
let waiters: (() => void)[] = [];
const synth = () => (typeof window !== "undefined" ? window.speechSynthesis : undefined);

export const englishVoices = (): SpeechSynthesisVoice[] =>
  (synth()?.getVoices() ?? []).filter((v) => /^en[-_]/i.test(v.lang));

export function bestVoice(): SpeechSynthesisVoice | null {
  const list = englishVoices();
  const saved = list.find((v) => v.name === store.settings().voice);
  if (saved) return saved;
  for (const re of PREFS) {
    const v = list.find((x) => re.test(x.name) && /en-US|en-GB/i.test(x.lang));
    if (v) return v;
  }
  return list[0] ?? null;
}

/** Short display name, e.g. "Ava ★ Natural (en-US)". */
export const voiceLabel = (v: SpeechSynthesisVoice) =>
  `${v.name.replace(/^Microsoft /, "").replace(/ Online \(Natural\)/, " ★ Natural").replace(/ - English.*$/, "")} (${v.lang})`;

function release() {
  pending = Math.max(0, pending - 1);
  if (!pending) {
    const w = waiters;
    waiters = [];
    w.forEach((f) => f());
  }
}

/** Queues a sentence; resolves when it has been spoken. */
export function speak(text: string, opts: { rate?: number } = {}): Promise<void> {
  return new Promise((resolve) => {
    const s = synth();
    if (!s || !text.trim()) return resolve();
    const u = new SpeechSynthesisUtterance(text);
    const v = bestVoice();
    if (v) u.voice = v;
    u.lang = v?.lang ?? "en-US";
    u.rate = opts.rate ?? store.settings().rate;
    pending++;
    u.onend = u.onerror = () => {
      release();
      resolve();
    };
    s.speak(u);
  });
}

/** Resolves when nothing is being spoken. */
export const whenIdle = () =>
  new Promise<void>((r) => (pending || synth()?.speaking ? waiters.push(r) : r()));

export function stopSpeaking() {
  synth()?.cancel();
  pending = 0;
  const w = waiters;
  waiters = [];
  w.forEach((f) => f());
}
