import type { SpeakingTopic } from "../../types";

/** Long speaking tasks, units 7-9. "…" marks where your own words go. */
export const speakingEsC: Record<string, SpeakingTopic[]> = {
  es7: [
    {
      title: "La comida de mi país", minWords: 65, mustUse: 4,
      prompt: "Presenta un plato típico de tu país: qué lleva, cómo se cocina, cuándo se come y con qué.",
      expressions: [
        { en: "Un plato típico es …", fr: "Un plat typique est…" }, { en: "Lleva …", fr: "Il contient…" },
        { en: "Se come con …", fr: "Il se mange avec…" }, { en: "Lo cocinamos …", fr: "Nous le cuisinons…" },
        { en: "Normalmente desayuno …", fr: "D'habitude je prends au petit-déjeuner…" },
      ],
    },
    {
      title: "Mi menú del día", minWords: 65, mustUse: 4,
      prompt: "Inventa el menú del día de tu restaurante ideal (primero, segundo, postre y bebida) y explica los platos.",
      expressions: [
        { en: "De primero hay …", fr: "En entrée il y a…" }, { en: "De segundo …", fr: "En plat…" },
        { en: "De postre …", fr: "En dessert…" }, { en: "con patatas", fr: "avec des pommes de terre" },
        { en: "Para beber, …", fr: "Pour boire…" },
      ],
    },
  ],
  es8: [
    {
      title: "Mi barrio", minWords: 70, mustUse: 4,
      prompt: "Describe tu barrio: cómo es, qué hay, qué no hay, qué está cerca y qué es lo que más y lo que menos te gusta.",
      expressions: [
        { en: "Mi barrio es …", fr: "Mon quartier est…" }, { en: "No hay ningún …", fr: "Il n'y a aucun…" },
        { en: "Está a … minutos", fr: "C'est à … minutes" }, { en: "Lo que más me gusta es …", fr: "Ce que j'aime le plus, c'est…" },
        { en: "Lo que menos me gusta es …", fr: "Ce que j'aime le moins, c'est…" },
      ],
    },
    {
      title: "Mi barrio ideal", minWords: 70, mustUse: 4,
      prompt: "Imagina tu barrio ideal: qué hay, dónde están las cosas y cómo es la vida allí.",
      expressions: [
        { en: "En mi barrio ideal hay …", fr: "Dans mon quartier idéal il y a…" }, { en: "al lado de …", fr: "à côté de…" },
        { en: "muchas zonas verdes", fr: "beaucoup d'espaces verts" }, { en: "Está bien comunicado", fr: "C'est bien desservi" },
        { en: "No hay demasiado …", fr: "Il n'y a pas trop de…" },
      ],
    },
  ],
  es9: [
    {
      title: "Mis experiencias", minWords: 75, mustUse: 4,
      prompt: "Habla de tus experiencias: países y ciudades donde has estado, trabajos que has hecho y cosas que nunca has hecho.",
      expressions: [
        { en: "He estado en …", fr: "Je suis allé(e) à / en…" }, { en: "He trabajado de …", fr: "J'ai travaillé comme…" },
        { en: "Nunca he …", fr: "Je n'ai jamais…" }, { en: "un par de veces", fr: "deux ou trois fois" },
        { en: "alguna vez", fr: "déjà / une fois" },
      ],
    },
    {
      title: "La persona ideal para el trabajo", minWords: 75, mustUse: 4,
      prompt: "Explica por qué eres la persona ideal para un trabajo que te gusta: qué sabes hacer, qué puedes hacer y cómo eres.",
      expressions: [
        { en: "Sé …", fr: "Je sais…" }, { en: "Puedo …", fr: "Je peux…" },
        { en: "He aprendido a …", fr: "J'ai appris à…" }, { en: "Soy una persona muy …", fr: "Je suis une personne très…" },
        { en: "pero un poco …", fr: "mais un peu…" },
      ],
    },
  ],
};
