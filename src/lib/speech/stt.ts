/**
 * Speech-to-text. Short mode resolves on a pause (repeat drills); long mode keeps
 * recording through pauses until the stop phrase ("I'm done recording", "He terminado").
 */
import { CONFIG } from "@/lib/config";
import { lang } from "@/lib/course/lang";
import { endsWithStop, withoutStop } from "./stopPhrase";
import { stopSpeaking } from "./tts";

export type Heard = { text: string; confidence: number };

let current: { stop: () => void } | null = null;
const listeners = new Set<(on: boolean) => void>();
const emit = (on: boolean) => listeners.forEach((f) => f(on));

const Ctor = () => (typeof window === "undefined" ? undefined : window.SpeechRecognition ?? window.webkitSpeechRecognition);
export const sttSupported = () => !!Ctor();
export const isListening = () => !!current;
export function onListeningChange(fn: (on: boolean) => void) {
  listeners.add(fn);
  return () => void listeners.delete(fn);
}

/** Starts listening; onInterim receives the live transcript (stop phrase removed). */
export function listen(onInterim?: (text: string) => void, opts: { long?: boolean } = {}): Promise<Heard> {
  const SR = Ctor();
  if (!SR) return Promise.reject(new Error("unsupported"));
  stop();
  stopSpeaking();
  const long = !!opts.long;
  const { silenceMs, longSilenceMs, maxMs, longMaxMs } = CONFIG.speech;
  return new Promise((resolve, reject) => {
    let finalText = "", ended = false, rec = new SR();
    const confs: number[] = [];
    let silence: ReturnType<typeof setTimeout> | undefined;
    const hard = setTimeout(() => finish(), long ? longMaxMs : maxMs);
    const handle = { stop: () => finish() };

    function start() {
      rec = new SR!();
      rec.lang = lang().speech;
      rec.interimResults = true;
      rec.continuous = true;
      rec.maxAlternatives = 1;
      rec.onresult = (e) => {
        let interim = "";
        for (let i = e.resultIndex; i < e.results.length; i++) {
          const r = e.results[i];
          if (r.isFinal) {
            finalText += r[0].transcript + "\n"; // one line per pause: natural sentence boundaries
            if (r[0].confidence > 0) confs.push(r[0].confidence);
          } else interim += r[0].transcript;
        }
        const all = (finalText + interim).trim();
        onInterim?.(withoutStop(all));
        if (endsWithStop(finalText) || endsWithStop(all, true)) {
          if (!endsWithStop(finalText)) finalText = all;
          return finish();
        }
        clearTimeout(silence);
        silence = setTimeout(finish, long ? longSilenceMs : silenceMs);
      };
      rec.onerror = (e) => void (/not-allowed/.test(e.error) && fail(new Error("mic-denied")));
      // Browsers end recognition on their own after a while: in long mode we restart.
      rec.onend = () => (long && !ended ? start() : finish());
      rec.start();
    }

    function cleanup() {
      ended = true;
      clearTimeout(silence);
      clearTimeout(hard);
      if (current !== handle) return;
      current = null;
      emit(false);
    }
    function finish() {
      if (ended) return;
      cleanup();
      try { rec.stop(); } catch { /* already stopped */ }
      const confidence = confs.length ? confs.reduce((a, b) => a + b, 0) / confs.length : 0;
      resolve({ text: withoutStop(finalText), confidence });
    }
    function fail(err: Error) {
      if (ended) return;
      cleanup();
      reject(err);
    }

    current = handle;
    emit(true);
    start();
  });
}

/** Ends the current recording early (what was said is still returned). */
export function stop() {
  current?.stop();
}
