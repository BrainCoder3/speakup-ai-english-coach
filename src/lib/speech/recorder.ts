/**
 * One recording session. Short mode resolves on a pause (repeat drills); long mode keeps recording
 * through pauses until stopped (mic pressed again, "I'm done recording", "He terminado", or a long silence).
 */
import { CONFIG } from "@/lib/config";
import { lang } from "@/lib/course/lang";
import { store } from "@/lib/store/store";
import { pickAlternative } from "./alternatives";
import { endsWithStop, withoutStop } from "./stopPhrase";

export type Heard = { text: string; confidence: number };
export interface RecordOptions {
  long?: boolean;
  /** Repeat drills: the recogniser reading closest to this text wins. */
  expected?: string;
}

export function record(SR: new () => SpeechRecognitionLike, onInterim: ((text: string) => void) | undefined, opts: RecordOptions) {
  const long = !!opts.long;
  const { silenceMs, finalPauseMs, noSpeechMs, longStartMs, longSilenceMs, maxMs, longMaxMs } = CONFIG.speech;
  let finalText = "", ended = false, rec = new SR(), quick = 0, startedAt = 0, heardSomething = false;
  const confs: number[] = [];
  let silence: ReturnType<typeof setTimeout> | undefined, hard: ReturnType<typeof setTimeout> | undefined;
  let done: (h: Heard) => void = () => {}, failWith: (e: Error) => void = () => {};
  const arm = (ms: number) => {
    clearTimeout(silence);
    silence = setTimeout(finish, ms);
  };
  const close = () => {
    ended = true;
    clearTimeout(silence);
    clearTimeout(hard);
  };
  function finish() {
    if (ended) return;
    close();
    try { rec.stop(); } catch { /* already stopped */ }
    done({ text: withoutStop(finalText), confidence: confs.length ? confs.reduce((a, b) => a + b, 0) / confs.length : 0 });
  }
  function fail(err: Error) {
    if (ended) return;
    close();
    failWith(err);
  }

  function start() {
    rec = new SR();
    startedAt = Date.now();
    rec.lang = lang().id === "en" ? store.settings().recoLang || lang().speech : lang().speech;
    rec.interimResults = true;
    rec.continuous = true;
    rec.maxAlternatives = 5;
    rec.onresult = (e) => {
      heardSomething = true;
      quick = 0;
      let interim = "", gotFinal = false;
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const r = e.results[i];
        if (r.isFinal) {
          const alt = pickAlternative(r, opts.expected);
          finalText += alt.text + "\n"; // one line per pause: natural sentence boundaries
          if (alt.confidence > 0) confs.push(alt.confidence);
          gotFinal = true;
        } else interim += r[0].transcript;
      }
      const all = (finalText + interim).trim();
      onInterim?.(withoutStop(all));
      if (endsWithStop(finalText) || endsWithStop(all, true)) {
        if (!endsWithStop(finalText)) finalText = all;
        return finish();
      }
      // Short answer: a finished sentence ends it quickly; long answer: wait for the learner.
      arm(long ? longSilenceMs : gotFinal ? finalPauseMs : silenceMs);
    };
    rec.onerror = (e) => {
      if (/not-allowed|service-not-allowed/.test(e.error)) fail(new Error("mic-denied"));
      else if (e.error === "audio-capture") fail(new Error("mic-missing"));
      else if (e.error === "network") fail(new Error("network"));
    };
    // Browsers end recognition on their own after a while: in long mode we restart (unless it keeps dying at once).
    rec.onend = () => {
      if (!long || ended) return finish();
      quick = Date.now() - startedAt < 700 && !heardSomething ? quick + 1 : 0;
      return quick >= 4 ? fail(new Error("mic-unavailable")) : start();
    };
    rec.start();
  }

  const promise = new Promise<Heard>((resolve, reject) => {
    done = resolve;
    failWith = reject;
    hard = setTimeout(finish, long ? longMaxMs : maxMs);
    arm(long ? longStartMs : noSpeechMs);
    start();
  });
  return { promise, stop: finish };
}
