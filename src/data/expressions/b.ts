import type { ExprTheme } from "./types";

export const THEMES_B: ExprTheme[] = [
  {
    id: "linking", title: "Relier ses idées", icon: "🔗",
    items: [
      ["on the other hand", "d'un autre côté", "The flat is cheap. On the other hand, it's far from the centre.", "Pour opposer deux aspects."],
      ["as a result", "par conséquent", "He missed the bus. As a result, he was late.", "Annonce la conséquence."],
      ["in addition", "de plus", "In addition, we offer free delivery.", "Ajoute un argument, un peu formel."],
      ["even so", "malgré cela", "It was raining. Even so, we went out.", "Concession : « malgré tout »."],
      ["for instance", "par exemple", "Many cities are crowded. For instance, Lagos.", "Synonyme de « for example »."],
      ["as a matter of fact", "en fait, à vrai dire", "As a matter of fact, I live next door.", "Pour apporter une précision, souvent surprenante."],
      ["in the long run", "à long terme", "Saving money pays off in the long run.", "Opposé de « in the short term »."],
      ["all in all", "tout compte fait", "All in all, it was a great trip.", "Pour conclure."],
    ],
  },
  {
    id: "time", title: "Temps et organisation", icon: "⏰",
    items: [
      ["running late", "être en retard", "I'm running late, so start without me.", "On le dit en cours de route."],
      ["in the nick of time", "juste à temps", "We got to the station in the nick of time.", "Idiome : à la toute dernière seconde."],
      ["sooner or later", "tôt ou tard", "Sooner or later, you'll have to decide.", "Inévitable."],
      ["from now on", "désormais", "From now on, I'll wake up at six.", "Pour une nouvelle résolution."],
      ["at the last minute", "à la dernière minute", "She cancelled at the last minute.", "Souvent négatif."],
      ["once in a while", "de temps en temps", "I eat fast food once in a while.", "Plus rare que « sometimes »."],
      ["ahead of schedule", "en avance sur le planning", "The project was finished ahead of schedule.", "Travail, projets."],
      ["behind schedule", "en retard sur le planning", "The work is behind schedule.", "Opposé de « ahead of schedule »."],
    ],
  },
  {
    id: "work", title: "Travail et études", icon: "💼",
    items: [
      ["get the hang of", "prendre le pli", "It's hard at first, but you'll get the hang of it.", "Pour une compétence qui devient facile."],
      ["meet the deadline", "respecter l'échéance", "We must meet the deadline on Friday.", "Collocation : on « meet » un délai."],
      ["work overtime", "faire des heures sup", "I had to work overtime all week.", "« overtime » = heures supplémentaires."],
      ["take on", "se charger de", "I can't take on any more work this month.", "Accepter une responsabilité."],
      ["keep up with", "suivre le rythme de", "It's hard to keep up with the news.", "Rester au niveau, à jour."],
      ["bear in mind", "garder à l'esprit", "Bear in mind that the office closes at five.", "Un peu soutenu, très utile à l'écrit."],
      ["get in touch", "contacter", "Please get in touch if you have questions.", "Pour inviter à écrire ou appeler."],
      ["on the same page", "sur la même longueur d'onde", "Let's make sure we're all on the same page.", "Être d'accord sur ce qui est prévu."],
    ],
  },
  {
    id: "feelings", title: "Émotions et réactions", icon: "😄",
    items: [
      ["over the moon", "aux anges", "She was over the moon about the news.", "Très heureux."],
      ["under the weather", "patraque", "I feel a bit under the weather today.", "Un peu malade, sans gravité."],
      ["on cloud nine", "sur un nuage", "He's on cloud nine since he got the job.", "Euphorique."],
      ["fed up with", "en avoir marre de", "I'm fed up with this noise.", "Informel, suivi d'un nom ou « -ing »."],
      ["get on my nerves", "m'énerver", "That constant humming will get on my nerves.", "Informel."],
      ["I can't wait", "j'ai hâte", "I can't wait to see you!", "Suivi de « to + verbe »."],
      ["driving me crazy", "me rend fou", "This traffic is driving me crazy.", "Se conjugue : « drive someone crazy »."],
      ["I'm so relieved", "quel soulagement", "I passed! I'm so relieved.", "Après un stress."],
    ],
  },
];
