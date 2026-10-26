/**
 * Live microphone level (0..1) while recording, so the learner can see that the mic hears them.
 * Skipped on touch phones: there, a second mic stream can mute the speech recogniser.
 */
type Listener = (level: number) => void;

const listeners = new Set<Listener>();
let stream: MediaStream | null = null;
let ctx: AudioContext | null = null;
let timer: ReturnType<typeof setInterval> | undefined;
let token = 0; // a stop requested while the mic permission is pending cancels the start

export const meterSupported = () =>
  typeof window !== "undefined" && !!navigator.mediaDevices?.getUserMedia && !window.matchMedia("(pointer: coarse)").matches;

export function onLevel(fn: Listener) {
  listeners.add(fn);
  return () => void listeners.delete(fn);
}

export async function startMeter() {
  if (!meterSupported() || stream) return;
  const mine = ++token;
  try {
    const s = await navigator.mediaDevices.getUserMedia({ audio: true });
    if (mine !== token) return s.getTracks().forEach((t) => t.stop());
    stream = s;
    ctx = new AudioContext();
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 512;
    ctx.createMediaStreamSource(stream).connect(analyser);
    const data = new Uint8Array(analyser.fftSize);
    timer = setInterval(() => {
      analyser.getByteTimeDomainData(data);
      const peak = data.reduce((m, v) => Math.max(m, Math.abs(v - 128)), 0) / 128;
      listeners.forEach((f) => f(Math.min(1, peak * 3)));
    }, 80);
  } catch {
    stopMeter();
  }
}

export function stopMeter() {
  token++;
  clearInterval(timer);
  stream?.getTracks().forEach((t) => t.stop());
  void ctx?.close().catch(() => {});
  stream = null;
  ctx = null;
  listeners.forEach((f) => f(0));
}
