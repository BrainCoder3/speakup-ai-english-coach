"use client";
/** Live microphone level while recording; warns when nothing is heard for a few seconds. */
import { useEffect, useRef, useState } from "react";
import { meterSupported, onLevel } from "@/lib/speech/micLevel";
import { useListening } from "@/lib/speech/useListening";

export function MicMeter() {
  const on = useListening();
  const [level, setLevel] = useState(0);
  const [quiet, setQuiet] = useState(false);
  const lastSound = useRef(0);

  useEffect(() => {
    if (!on) return;
    lastSound.current = Date.now();
    const off = onLevel((v) => {
      setLevel(v);
      if (v > 0.06) {
        lastSound.current = Date.now();
        setQuiet(false);
      }
    });
    const timer = setInterval(() => setQuiet(Date.now() - lastSound.current > 5000), 1000);
    return () => {
      off();
      clearInterval(timer);
      setQuiet(false);
    };
  }, [on]);

  if (!on || !meterSupported()) return null;
  return (
    <div className="micmeter" aria-live="polite">
      <span className="bar"><i style={{ transform: `scaleX(${level})` }} /></span>
      {quiet ? <small className="warn">🔇 Je n&apos;entends pas ta voix : parle plus fort ou rapproche-toi du micro.</small> : <small>🎙️ Je t&apos;entends</small>}
    </div>
  );
}
