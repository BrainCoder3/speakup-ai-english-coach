import type { SpeakingTopic } from "../../types";

/** Long speaking tasks, units 3-6. "…" marks where your own words go. */
export const speakingEsB: Record<string, SpeakingTopic[]> = {
  es3: [
    {
      title: "Mi país", minWords: 50, mustUse: 4,
      prompt: "Presenta tu país: dónde está, la capital, el clima, qué hay y cuál es el lugar más bonito.",
      expressions: [
        { en: "Mi país está en …", fr: "Mon pays se trouve en / au…" }, { en: "En mi país hay …", fr: "Dans mon pays il y a…" },
        { en: "El clima es …", fr: "Le climat est…" }, { en: "Hace mucho calor", fr: "Il fait très chaud" },
        { en: "La ciudad más … es …", fr: "La ville la plus … est…" },
      ],
    },
    {
      title: "Un país hispano", minWords: 50, mustUse: 4,
      prompt: "Habla de un país de habla hispana que te interesa: dónde está, qué hay, cómo es el clima y por qué quieres ir.",
      expressions: [
        { en: "… está en …", fr: "… se trouve en / au…" }, { en: "Hay muchos …", fr: "Il y a beaucoup de…" },
        { en: "Es un país muy …", fr: "C'est un pays très…" }, { en: "Llueve …", fr: "Il pleut…" },
        { en: "Quiero ir porque …", fr: "Je veux y aller parce que…" },
      ],
    },
  ],
  es4: [
    {
      title: "Mi ropa favorita", minWords: 55, mustUse: 4,
      prompt: "Describe la ropa que llevas normalmente, tu color favorito y qué ropa prefieres para trabajar y para salir.",
      expressions: [
        { en: "Normalmente llevo …", fr: "D'habitude je porte…" }, { en: "Mi color favorito es el …", fr: "Ma couleur préférée est le…" },
        { en: "Prefiero …", fr: "Je préfère…" }, { en: "Para salir, …", fr: "Pour sortir…" },
        { en: "No me pongo nunca …", fr: "Je ne mets jamais…" },
      ],
    },
    {
      title: "Preparo un viaje", minWords: 55, mustUse: 4,
      prompt: "Vas de viaje una semana. Explica adónde vas, qué tienes que comprar y qué necesitas llevar.",
      expressions: [
        { en: "Voy a …", fr: "Je vais à / en…" }, { en: "Tengo que …", fr: "Je dois…" },
        { en: "Necesito …", fr: "J'ai besoin de…" }, { en: "Voy a llevar …", fr: "Je vais emporter…" },
        { en: "¿Cuánto cuesta …?", fr: "Combien coûte… ?" },
      ],
    },
  ],
  es5: [
    {
      title: "Mi familia", minWords: 60, mustUse: 4,
      prompt: "Presenta a tu familia: cuántos sois, cómo son físicamente y de carácter, y qué les gusta.",
      expressions: [
        { en: "En mi familia somos …", fr: "Dans ma famille nous sommes…" }, { en: "Mi … es …", fr: "Mon / ma … est…" },
        { en: "Tiene el pelo …", fr: "Il / elle a les cheveux…" }, { en: "Le encanta …", fr: "Il / elle adore…" },
        { en: "No le gusta nada …", fr: "Il / elle n'aime pas du tout…" },
      ],
    },
    {
      title: "Mi mejor amigo", minWords: 60, mustUse: 4,
      prompt: "Describe a tu mejor amigo o amiga y compara vuestros gustos.",
      expressions: [
        { en: "Mi mejor amigo se llama …", fr: "Mon meilleur ami s'appelle…" }, { en: "Es un poco …", fr: "Il est un peu…" },
        { en: "A los dos nos gusta …", fr: "Nous aimons tous les deux…" }, { en: "A mí también", fr: "Moi aussi" },
        { en: "pero a mí no", fr: "mais pas moi" },
      ],
    },
  ],
  es6: [
    {
      title: "Mi día a día", minWords: 65, mustUse: 4,
      prompt: "Cuenta un día normal de tu semana, con las horas, y di qué haces los fines de semana.",
      expressions: [
        { en: "Me levanto a las …", fr: "Je me lève à…" }, { en: "Primero …", fr: "D'abord…" },
        { en: "Después …", fr: "Ensuite…" }, { en: "Los sábados …", fr: "Le samedi…" },
        { en: "Me acuesto …", fr: "Je me couche…" },
      ],
    },
    {
      title: "Mis hábitos", minWords: 65, mustUse: 4,
      prompt: "Habla de tus hábitos: qué haces siempre, a menudo, a veces y nunca (deporte, comida, salir, estudiar).",
      expressions: [
        { en: "Siempre …", fr: "Toujours…" }, { en: "A menudo …", fr: "Souvent…" },
        { en: "A veces …", fr: "Parfois…" }, { en: "veces a la semana", fr: "fois par semaine" },
        { en: "Casi nunca …", fr: "Presque jamais…" },
      ],
    },
  ],
};
