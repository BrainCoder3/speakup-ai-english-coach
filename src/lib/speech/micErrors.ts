/** Plain-French explanation of why the microphone could not be used. */
export function micMessage(e: unknown): string {
  switch ((e as Error)?.message) {
    case "mic-denied":
      return "Autorise le micro : clique sur le cadenas à gauche de l'adresse, puis « Micro » → Autoriser.";
    case "mic-missing":
      return "Aucun micro trouvé. Branche un micro ou choisis-le dans les paramètres son de l'appareil.";
    case "network":
      return "La reconnaissance vocale de Chrome/Edge a besoin d'Internet. Vérifie ta connexion.";
    case "mic-unavailable":
      return "Le micro ne répond pas. Ferme les autres applications qui l'utilisent (Teams, Zoom…) puis réessaie.";
    default:
      return "Micro indisponible : utilise Edge ou Chrome et autorise le micro.";
  }
}
