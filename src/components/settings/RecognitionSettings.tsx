"use client";
/** Which English accent the speech recogniser expects: the closest one understands you best. */
import { store } from "@/lib/store/store";

const ACCENTS: [string, string][] = [
  ["en-US", "Américain (par défaut)"],
  ["en-GB", "Britannique"],
  ["en-NG", "Nigérian (Afrique de l'Ouest)"],
  ["en-GH", "Ghanéen (Afrique de l'Ouest)"],
  ["en-ZA", "Sud-africain"],
  ["en-KE", "Kényan (Afrique de l'Est)"],
  ["en-IN", "Indien"],
];

export function RecognitionSettings() {
  const current = store.settings().recoLang;
  return (
    <section className="card">
      <h3>🎙️ Reconnaissance de ta voix (anglais)</h3>
      <p className="muted">
        Si le micro comprend mal, essaie l&apos;accent le plus proche du tien : les accents africains sont souvent mieux reconnus avec « Nigérian » ou
        « Ghanéen ». Parle à 20-30 cm du micro, dans un endroit calme.
      </p>
      <select value={current} onChange={(e) => store.setSetting("recoLang", e.target.value)}>
        {ACCENTS.map(([code, label]) => <option key={code} value={code}>{label}</option>)}
      </select>
    </section>
  );
}
