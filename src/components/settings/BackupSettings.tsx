"use client";
/** Export / import / reset of the saved progress. */
import { useRouter } from "next/navigation";
import type { ChangeEvent } from "react";
import { store } from "@/lib/store/store";
import { Icon } from "@/components/ui/Icon";

export function BackupSettings() {
  const router = useRouter();

  const exportFile = () => {
    const blob = new Blob([store.exportJSON()], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `speakup-progression-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const importFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      store.importJSON(await file.text());
      alert("Progression importée ✔");
      router.push("/");
    } catch (err) {
      alert("Import impossible : " + (err as Error).message);
    }
  };

  const reset = () => {
    if (!confirm("Effacer toute ta progression, tes statistiques et ton carnet ? Cette action est définitive.")) return;
    store.reset();
    router.push("/");
  };

  return (
    <section className="card">
      <h3>Sauvegarde</h3>
      <p className="muted">Exporte ta progression pour la garder en sécurité ou la transférer sur un autre PC.</p>
      <div className="row">
        <button className="btn" onClick={exportFile}><Icon name="save" />Exporter (.json)</button>
        <label className="btn">
          Importer…
          <input type="file" accept="application/json" hidden onChange={importFile} />
        </label>
        <button className="btn danger" onClick={reset}>Tout réinitialiser</button>
      </div>
    </section>
  );
}
