/**
 * Speech-to-text entry point: one recording at a time, with a "is the mic on?" signal for the UI.
 * The recording logic itself lives in recorder.ts.
 */
import { startMeter, stopMeter } from "./micLevel";
import { record, type Heard, type RecordOptions } from "./recorder";
import { stopSpeaking } from "./tts";

export type { Heard };

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
export function listen(onInterim?: (text: string) => void, opts: RecordOptions = {}): Promise<Heard> {
  const SR = Ctor();
  if (!SR) return Promise.reject(new Error("unsupported"));
  stop();
  stopSpeaking();
  const rec = record(SR, onInterim, opts);
  const handle = { stop: rec.stop };
  current = handle;
  emit(true);
  void startMeter();
  return rec.promise.finally(() => {
    stopMeter();
    if (current !== handle) return;
    current = null;
    emit(false);
  });
}

/** Ends the current recording early (what was said is still returned). */
export function stop() {
  current?.stop();
}
