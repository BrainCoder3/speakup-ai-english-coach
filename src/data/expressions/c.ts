import type { ExprTheme } from "./types";

export const THEMES_C: ExprTheme[] = [
  {
    id: "money", title: "Argent et achats", icon: "💰",
    items: [
      ["an arm and a leg", "les yeux de la tête", "That watch costs an arm and a leg.", "Très cher : « cost an arm and a leg »."],
      ["a bargain", "une bonne affaire", "At that price, it's a bargain.", "Quelque chose de bon marché pour sa qualité."],
      ["break the bank", "casser la tirelire", "A small gift won't break the bank.", "Souvent à la forme négative."],
      ["make ends meet", "joindre les deux bouts", "Many families struggle to make ends meet.", "Avoir juste assez d'argent."],
      ["I'll take it", "je le prends", "This jacket fits well. I'll take it.", "Pour acheter en magasin."],
      ["get a refund", "être remboursé", "The phone is broken. Can I get a refund?", "Au service client."],
      ["split the bill", "partager l'addition", "Shall we split the bill?", "Au restaurant."],
      ["out of my budget", "hors de mon budget", "That flat is out of my budget.", "Refuser poliment un prix."],
    ],
  },
  {
    id: "idioms", title: "Idiomes courants", icon: "🎭",
    items: [
      ["a piece of cake", "un jeu d'enfant", "The exam was a piece of cake.", "Très facile."],
      ["break the ice", "briser la glace", "He told a joke to break the ice.", "Détendre l'ambiance au début."],
      ["hit the nail on the head", "mettre le doigt dessus", "You hit the nail on the head.", "Dire exactement ce qu'il faut."],
      ["once in a blue moon", "tous les trente-six du mois", "We see each other once in a blue moon.", "Très rarement."],
      ["the ball is in your court", "c'est à toi de jouer", "I've made my offer. The ball is in your court.", "C'est à l'autre de décider."],
      ["let the cat out of the bag", "vendre la mèche", "Don't let the cat out of the bag!", "Révéler un secret."],
      ["kill two birds with one stone", "faire d'une pierre deux coups", "Let's kill two birds with one stone and shop on the way home.", "Régler deux choses en une fois."],
      ["the last straw", "la goutte d'eau", "Losing my keys was the last straw.", "Ce qui fait déborder le vase."],
    ],
  },
  {
    id: "phrasal", title: "Verbes à particule", icon: "🧩",
    items: [
      ["figure out", "comprendre, trouver", "I can't figure out this problem.", "Résoudre en réfléchissant."],
      ["come up with", "trouver (une idée)", "Can you come up with a better idea?", "Idée, solution, excuse."],
      ["look forward to", "avoir hâte de", "I look forward to hearing from you.", "Suivi de « -ing » : to est une préposition."],
      ["put off", "reporter", "Don't put off your homework.", "Remettre à plus tard."],
      ["give up", "abandonner", "Never give up on your dreams.", "Arrêter d'essayer."],
      ["run out of", "manquer de", "We always run out of milk by Friday.", "Plus de stock."],
      ["carry on", "continuer", "Please carry on with your work.", "Poursuivre malgré une interruption."],
      ["turn down", "refuser", "I had to turn down the invitation.", "Offre, invitation, proposition."],
    ],
  },
  {
    id: "travel", title: "Voyage et sorties", icon: "✈️",
    items: [
      ["check in", "s'enregistrer", "You can check in online.", "Aéroport et hôtel."],
      ["how far is it", "c'est à quelle distance", "How far is it to the airport?", "Demander la distance."],
      ["I'm just looking", "je regarde seulement", "Can I help you? — I'm just looking, thanks.", "Réponse au vendeur."],
      ["get lost", "se perdre", "I always get lost in big cities.", "Aussi impoli : « Get lost! » = va-t'en !"],
      ["on the way", "en chemin", "I'll buy bread on the way.", "Pendant le trajet."],
      ["book a table", "réserver une table", "I'd like to book a table for two.", "Au restaurant, par téléphone."],
      ["a one-way ticket", "un aller simple", "A one-way ticket to Paris, please.", "Aller-retour : « return ticket »."],
      ["jet lag", "décalage horaire", "I'm suffering from jet lag.", "Après un long vol."],
    ],
  },
];
