/** Speech-to-text: listen() resolves with what was said once the learner pauses. */
import { CONFIG } from "@/lib/config";
import { stopSpeaking } from "./tts";

export interface Heard {
  text: string;
  confidence: number;
}

let current: SpeechRecognitionLike | null = null;
const listeners = new Set<(on: boolean) => void>();
const emit = (on: boolean) => listeners.forEach((f) => f(on));

const Ctor = () => (typeof window === "undefined" ? undefined : window.SpeechRecognition ?? window.webkitSpeechRecognition);
export const sttSupported = () => !!Ctor();
export const isListening = () => !!current;
export function onListeningChange(fn: (on: boolean) => void) {
  listeners.add(fn);
  return () => void listeners.delete(fn);
}

/** Starts listening; onInterim receives the live transcript. */
export function listen(onInterim?: (text: string) => void): Promise<Heard> {
  const SR = Ctor();
  if (!SR) return Promise.reject(new Error("unsupported"));
  stop();
  stopSpeaking();
  return new Promise((resolve, reject) => {
    const rec = new SR();
    rec.lang = CONFIG.speech.lang;
    rec.interimResults = true;
    rec.continuous = true;
    rec.maxAlternatives = 1;
    let finalText = "";
    const confs: number[] = [];
    let silence: ReturnType<typeof setTimeout> | undefined;
    const hard = setTimeout(() => rec.stop(), CONFIG.speech.maxMs);

    rec.onresult = (e) => {
      let interim = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const r = e.results[i];
        if (r.isFinal) {
          finalText += r[0].transcript + " ";
          if (r[0].confidence > 0) confs.push(r[0].confidence);
        } else interim += r[0].transcript;
      }
      onInterim?.((finalText + interim).trim());
      clearTimeout(silence);
      silence = setTimeout(() => rec.stop(), CONFIG.speech.silenceMs);
    };
    rec.onerror = (e) => {
      if (e.error === "not-allowed" || e.error === "service-not-allowed") {
        cleanup();
        reject(new Error("mic-denied"));
      }
    };
    rec.onend = () => {
      cleanup();
      const confidence = confs.length ? confs.reduce((a, b) => a + b, 0) / confs.length : 0;
      resolve({ text: finalText.trim(), confidence });
    };
    function cleanup() {
      clearTimeout(silence);
      clearTimeout(hard);
      if (current === rec) {
        current = null;
        emit(false);
      }
    }
    current = rec;
    emit(true);
    rec.start();
  });
}

/** Ends the current utterance early (it is still returned). */
export function stop() {
  current?.stop();
}
