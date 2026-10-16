/** Why this works: what fast learners in any field have in common, and how it maps here. */
const ROWS = [
  { who: "🎻 Le musicien", does: "isole la mesure qu'il rate et la répète lentement, au lieu de rejouer tout le morceau", here: "La séance cible d'abord les exercices que tu rates le plus (pratique délibérée)." },
  { who: "🩺 L'étudiant en médecine", does: "révise ses fiches juste avant de les oublier (1, 3, 7, 15 jours…)", here: "Chaque réponse juste repousse la question ; une erreur la ramène aujourd'hui (répétition espacée)." },
  { who: "♟️ Le joueur d'échecs", does: "résout des problèmes mélangés, sans savoir à l'avance quel motif chercher", here: "Grammaire, vocabulaire et erreurs de semaines différentes sont mélangés (pratique entrelacée)." },
  { who: "🏃 L'athlète", does: "fait des séries courtes et intenses avec un coach qui corrige tout de suite", here: "20 questions, réponse tapée de mémoire, correction immédiate (effet test + feedback)." },
  { who: "✈️ Le pilote", does: "répète la même manœuvre au simulateur, de plus en plus vite", here: "Fluidité 4/3/2 : tu racontes la même chose en 4, 3 puis 2 minutes — ton débit monte." },
];

export function MethodCard() {
  return (
    <section className="card method-card">
      <h3>🧠 Ce qui fait progresser vite, dans tous les domaines</h3>
      <div className="ttable-wrap">
        <table className="ttable">
          <thead><tr><th>Les meilleurs…</th><th>font comme ça</th><th>Ici</th></tr></thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.who}><td><b>{r.who}</b></td><td>{r.does}</td><td>{r.here}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="muted">
        Repères de recherche : se tester bat la relecture (≈61 % retenu après une semaine contre ≈40 %) ; les exercices mélangés font
        nettement mieux au test que les exercices par blocs, même s&apos;ils semblent plus durs sur le moment ; les 1 000 mots les plus
        fréquents couvrent ≈80 % d&apos;un texte ; les diplomates américains (FSI) ajoutent 3-4 h de travail personnel par jour aux cours.
        <b> Une séance qui te paraît difficile est souvent celle qui te fait le plus progresser.</b>
      </p>
    </section>
  );
}
