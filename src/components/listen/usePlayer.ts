"use client";
/** Plays a listening text line by line, each speaker with their own accent and voice. */
import { useCallback, useEffect, useRef, useState } from "react";
import { voiceFor } from "@/lib/speech/accents";
import { speak, stopSpeaking } from "@/lib/speech/tts";
import type { ListeningText } from "@/data/types";

export function usePlayer(text: ListeningText) {
  const [line, setLine] = useState(-1);
  const [plays, setPlays] = useState(0);
  const run = useRef(0);
  const [, setVoices] = useState(0);

  // Voices load asynchronously: re-check accents once they are available.
  useEffect(() => {
    const synth = window.speechSynthesis;
    const update = () => setVoices((n) => n + 1);
    synth?.addEventListener("voiceschanged", update);
    return () => synth?.removeEventListener("voiceschanged", update);
  }, []);

  // Two speakers sharing an accent get two different voices.
  const voiceOf = useCallback((k: number) => {
    const p = text.parts[k];
    const sameAccent = [...new Set(text.parts.filter((x) => x.accent === p.accent).map((x) => x.speaker))];
    return voiceFor(p.accent, p.voice ?? sameAccent.indexOf(p.speaker));
  }, [text]);

  const play = useCallback(async (slow = false) => {
    stopSpeaking();
    const id = ++run.current;
    setPlays((n) => n + 1);
    for (let k = 0; k < text.parts.length; k++) {
      if (run.current !== id) return;
      setLine(k);
      await speak(text.parts[k].text, { voice: voiceOf(k).voice, rate: (text.rate ?? 1) * (slow ? 0.75 : 1) });
    }
    if (run.current === id) setLine(-1);
  }, [text, voiceOf]);

  const halt = useCallback(() => {
    run.current++;
    stopSpeaking();
    setLine(-1);
  }, []);

  useEffect(() => halt, [halt]);

  const missingAccents = text.parts.filter((_, k) => !voiceOf(k).native).map((p) => p.accent);
  return { line, playing: line >= 0, plays, play, halt, missingAccents: [...new Set(missingAccents)] };
}
