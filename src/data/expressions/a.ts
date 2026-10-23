import type { ExprTheme } from "./types";

export const THEMES_A: ExprTheme[] = [
  {
    id: "smalltalk", title: "Conversation courante", icon: "💬",
    items: [
      ["long time no see", "ça fait longtemps !", "Hey Sam, long time no see! How have you been?", "Informel : retrouvailles entre amis."],
      ["how's it going", "comment ça va ?", "Hi Mark, how's it going?", "Informel. On répond : « Not bad, thanks. »"],
      ["catch up", "se donner des nouvelles", "We should grab a coffee and catch up soon.", "Très courant : « catch up with someone »."],
      ["by the way", "au fait", "By the way, did you finish the report?", "Pour changer légèrement de sujet."],
      ["it's been a while", "ça fait un moment", "It's been a while since we last met.", "Neutre, à l'oral comme à l'écrit."],
      ["take care", "prends soin de toi", "Take care, and say hi to your family.", "Pour dire au revoir chaleureusement."],
      ["keep in touch", "restons en contact", "Let's keep in touch after the course.", "À la fin d'une rencontre."],
      ["see you around", "à la prochaine", "Okay, see you around!", "Très informel, sans date précise."],
    ],
  },
  {
    id: "opinions", title: "Donner son avis", icon: "🗣️",
    items: [
      ["in my opinion", "à mon avis", "In my opinion, the second plan is better.", "Neutre et poli, parfait pour débattre."],
      ["as far as I'm concerned", "en ce qui me concerne", "As far as I'm concerned, the meeting was a waste of time.", "Pour marquer sa position personnelle."],
      ["I couldn't agree more", "je suis tout à fait d'accord", "A: This film is amazing. B: I couldn't agree more.", "Accord très fort (la forme négative est positive !)."],
      ["I see your point", "je comprends ton point de vue", "I see your point, but I still disagree.", "Pour désaccorder poliment, avant « but »."],
      ["to be honest", "pour être honnête", "To be honest, I didn't like the ending.", "Précède une opinion franche."],
      ["I'm not so sure", "je n'en suis pas si sûr", "I'm not so sure that's a good idea.", "Désaccord doux, plus poli que « I disagree »."],
      ["it depends on", "ça dépend de", "It depends on the weather.", "Suivi d'un nom ou d'un « -ing »."],
      ["I tend to think", "j'ai tendance à penser", "I tend to think that practice matters more than talent.", "Opinion nuancée, très naturelle."],
    ],
  },
  {
    id: "help", title: "Demander de l'aide, clarifier", icon: "🙋",
    items: [
      ["give me a hand", "me donner un coup de main", "Could you give me a hand with these boxes?", "Courant, poli : « Could you… ? »"],
      ["I didn't catch that", "je n'ai pas bien entendu", "Sorry, I didn't catch that. Could you repeat it?", "Quand on n'a pas compris à l'oral."],
      ["what do you mean by", "qu'entends-tu par", "What do you mean by 'soon'?", "Pour faire préciser un mot."],
      ["spell that", "épeler", "Could you spell that for me, please?", "Pour un nom ou une adresse."],
      ["I'm not following", "je ne te suis pas", "I'm afraid I'm not following you.", "Poli, avec « I'm afraid »."],
      ["to put it another way", "autrement dit", "To put it another way, we need more time.", "Pour reformuler."],
      ["slow down", "ralentir, parler moins vite", "Could you slow down a little, please?", "Très utile pour s'entraîner à comprendre."],
      ["does that make sense", "est-ce que c'est clair ?", "I'll explain again. Does that make sense?", "Vérifier que l'autre a compris."],
    ],
  },
  {
    id: "polite", title: "Politesse et excuses", icon: "🙏",
    items: [
      ["I'm terribly sorry", "je suis vraiment désolé", "I'm terribly sorry for being late.", "Excuses fortes, polies."],
      ["no worries", "pas de souci", "Thanks for waiting. — No worries!", "Informel, réponse à un merci ou à des excuses."],
      ["would you mind", "cela vous dérangerait-il", "Would you mind opening the window?", "Suivi de « -ing » ; on répond « Not at all »."],
      ["I really appreciate it", "je vous en suis reconnaissant", "Thanks for your help. I really appreciate it.", "Plus fort que « thank you »."],
      ["it's my pleasure", "avec plaisir", "Thank you! — It's my pleasure.", "Réponse polie à un merci."],
      ["I was wondering if", "je me demandais si", "I was wondering if you could help me.", "Demande très polie, très naturelle."],
      ["don't mention it", "de rien", "Thanks! — Don't mention it.", "Réponse à un merci."],
      ["my apologies", "mes excuses", "My apologies for the confusion.", "Plutôt formel, à l'écrit surtout."],
    ],
  },
];
