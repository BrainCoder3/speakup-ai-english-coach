"use client";
/** Coach voice and speaking speed. */
import { useEffect, useState } from "react";
import { store } from "@/lib/store/store";
import { bestVoice, englishVoices, speak, voiceLabel } from "@/lib/speech/tts";

export function VoiceSettings() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const rate = store.settings().rate;

  // Voices load asynchronously in most browsers.
  useEffect(() => {
    const load = () => setVoices(englishVoices());
    load();
    window.speechSynthesis?.addEventListener("voiceschanged", load);
    return () => window.speechSynthesis?.removeEventListener("voiceschanged", load);
  }, []);

  const current = bestVoice();
  return (
    <section className="card">
      <h3>Voix du coach</h3>
      <select
        value={current?.name ?? ""}
        onChange={(e) => {
          store.setSetting("voice", e.target.value);
          speak("Hi! This is my voice. Shall we practise?");
        }}
      >
        {voices.length === 0 && <option>Aucune voix anglaise</option>}
        {voices.map((v) => (
          <option key={v.name} value={v.name}>{voiceLabel(v)}</option>
        ))}
      </select>
      <p className="muted">Astuce : dans Microsoft Edge, choisis une voix ★ Natural (Ava, Andrew, Emma…) pour un accent réaliste.</p>
      <label className="range">
        <span>Vitesse</span>
        <input type="range" min={0.7} max={1.2} step={0.05} value={rate} onChange={(e) => store.setSetting("rate", Number(e.target.value))} />
        <output>{rate.toFixed(2)}×</output>
      </label>
    </section>
  );
}
