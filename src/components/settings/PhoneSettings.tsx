"use client";
/** Install on a phone + optional address of the PC that runs the AI. */
import { store } from "@/lib/store/store";

export function PhoneSettings() {
  const s = store.settings();
  return (
    <section className="card">
      <h3>📱 Sur ton téléphone</h3>
      <ol className="steps-help">
        <li>Ouvre le site SpeakUp dans <b>Chrome</b> (Android) ou <b>Safari</b> (iPhone).</li>
        <li>Menu <b>⋮</b> → « Installer l&apos;application » (iPhone : Partager → « Sur l&apos;écran d&apos;accueil »).</li>
        <li>Elle s&apos;ouvre ensuite comme une vraie appli et garde en mémoire les pages déjà vues.</li>
      </ol>
      <p className="muted">
        Sans ton PC, les expressions, exercices, écoute, entraînement ciblé et plan de 30 jours fonctionnent. Les corrections par IA
        (conversation, textes, « parler longtemps ») demandent ton PC allumé avec SpeakUp lancé, à joindre par une adresse sécurisée
        (https) que tu colles ici :
      </p>
      <label className="field">
        Adresse du serveur IA (facultatif)
        <input
          type="url"
          inputMode="url"
          placeholder="https://mon-adresse.trycloudflare.com"
          defaultValue={s.aiUrl}
          onBlur={(e) => store.setSetting("aiUrl", e.target.value.trim())}
        />
      </label>
      <p className="muted">Ta progression est enregistrée sur chaque appareil : utilise « Exporter / Importer » plus bas pour la copier du PC au téléphone.</p>
    </section>
  );
}
