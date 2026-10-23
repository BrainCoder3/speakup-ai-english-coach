import type { ExprTheme } from "./types";

export const THEMES_D: ExprTheme[] = [
  {
    id: "email", title: "Écrire un email", icon: "✉️",
    items: [
      ["I am writing to", "je vous écris pour", "I am writing to ask about the job offer.", "Première phrase d'un email formel."],
      ["please find attached", "veuillez trouver ci-joint", "Please find attached my CV.", "Pièce jointe, formel."],
      ["thank you for your prompt reply", "merci de votre réponse rapide", "Thank you for your prompt reply.", "Pour remercier d'une réponse vite arrivée."],
      ["do not hesitate to", "n'hésitez pas à", "Do not hesitate to contact me.", "Fin d'un email formel."],
      ["I look forward to hearing from you", "j'attends votre réponse", "I look forward to hearing from you.", "Dernière phrase classique."],
      ["with regard to", "concernant", "With regard to your request, we need more time.", "Formel, annonce le sujet."],
      ["kind regards", "cordialement", "Kind regards, Amina", "Formule de politesse finale, très courante."],
      ["I would be grateful if", "je vous serais reconnaissant de", "I would be grateful if you could send the details.", "Demande formelle."],
    ],
  },
  {
    id: "advice", title: "Conseiller et suggérer", icon: "💡",
    items: [
      ["if I were you", "à ta place", "If I were you, I'd take the earlier train.", "Toujours « were », même avec « I »."],
      ["why don't you", "pourquoi ne pas", "Why don't you ask your teacher?", "Suggestion amicale."],
      ["you'd better", "tu ferais mieux de", "You'd better leave now, or you'll miss it.", "Conseil fort ; sans « to »."],
      ["it's worth", "ça vaut la peine de", "It's worth visiting the old town.", "Suivi de « -ing »."],
      ["have you thought about", "as-tu pensé à", "Have you thought about studying abroad?", "Suivi de « -ing »."],
      ["I'd recommend", "je recommanderais", "I'd recommend the fish; it's excellent.", "Poli, très courant au restaurant."],
      ["make the most of", "profiter au maximum de", "Make the most of your free time.", "Exploiter une occasion."],
      ["take your time", "prends ton temps", "There's no rush. Take your time.", "Rassurer quelqu'un."],
    ],
  },
];
