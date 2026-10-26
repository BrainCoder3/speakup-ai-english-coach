"use client";
/** Settings page: voice, behaviour, backup, system info. */
import { CONFIG } from "@/lib/config";
import { store } from "@/lib/store/store";
import type { Settings } from "@/lib/store/types";
import { useStore } from "@/lib/store/useStore";
import { BackupSettings } from "./BackupSettings";
import { PhoneSettings } from "./PhoneSettings";
import { VoiceSettings } from "./VoiceSettings";

type Flag = "silent" | "handsfree" | "showText" | "allowTyping";
const FLAGS: [Flag, string][] = [
  ["silent", "🤫 Mode silencieux (sans micro) : l'anglais se valide à l'écrit, avec les mêmes corrections"],
  ["handsfree", "Mode mains libres : le micro se relance tout seul après le coach"],
  ["showText", "Afficher le texte du coach (décoche pour entraîner l'écoute)"],
  ["allowTyping", "Autoriser le clavier en conversation (déconseillé : parle !)"],
];

export function SettingsView() {
  const ready = useStore();
  if (!ready) return <div className="page"><p className="muted">Chargement…</p></div>;
  const s: Settings = store.settings();

  return (
    <div className="page settings">
      <header className="page-head">
        <div>
          <h1>Réglages</h1>
          <p>Ta progression est sauvegardée automatiquement dans ce navigateur.</p>
        </div>
      </header>
      <VoiceSettings />
      <section className="card">
        <h3>Conversation</h3>
        {FLAGS.map(([k, label]) => (
          <label className="check" key={k}>
            <input type="checkbox" checked={s[k]} onChange={(e) => store.setSetting(k, e.target.checked)} /> {label}
          </label>
        ))}
      </section>
      <PhoneSettings />
      <BackupSettings />
      <section className="card">
        <h3>Système</h3>
        <p className="muted">
          IA locale via Ollama ({CONFIG.ollamaUrl}) · modèles : {CONFIG.models[0]} · seuils : répétition {CONFIG.pass.repeat},
          réponses {CONFIG.pass.answer}, mission {CONFIG.pass.mission}.
        </p>
      </section>
    </div>
  );
}
