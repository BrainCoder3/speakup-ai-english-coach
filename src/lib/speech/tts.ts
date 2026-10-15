/** Text-to-speech with the browser voices (Edge "Natural" voices sound best). */
import { store } from "@/lib/store/store";
import { lang } from "@/lib/course/lang";

let pending = 0;
let waiters: (() => void)[] = [];
const synth = () => (typeof window !== "undefined" ? window.speechSynthesis : undefined);

/** Every voice of the language being learnt. */
export const courseVoices = (): SpeechSynthesisVoice[] =>
  (synth()?.getVoices() ?? []).filter((v) => lang().voices.test(v.lang));

export function bestVoice(): SpeechSynthesisVoice | null {
  const list = courseVoices();
  const saved = list.find((v) => v.name === store.settings().voice);
  if (saved) return saved;
  for (const re of lang().prefs) {
    const v = list.find((x) => re.test(x.name));
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
export function speak(text: string, opts: { rate?: number; voice?: SpeechSynthesisVoice | null } = {}): Promise<void> {
  return new Promise((resolve) => {
    const s = synth();
    if (!s || !text.trim()) return resolve();
    const u = new SpeechSynthesisUtterance(text);
    const v = opts.voice ?? bestVoice();
    if (v) u.voice = v;
    u.lang = v?.lang ?? lang().speech;
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
