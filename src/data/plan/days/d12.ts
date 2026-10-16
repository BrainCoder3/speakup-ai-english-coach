import type { PlanDay } from "../types";

export const d12: PlanDay = {
  day: 12, title: "Comparer (comparatifs, superlatifs, the more… the more)", level: "B2",
  grammar: {
    explain: [
      "Adjectif court : <b>-er / the -est</b> (cheap → cheaper → the cheapest). Long : <b>more / the most</b> (more expensive). Irréguliers : good → <b>better</b> → <b>the best</b>, bad → <b>worse</b> → <b>the worst</b>, far → <b>further</b>.",
      "Égalité : <b>as … as</b> (She's <b>as tall as</b> me) · infériorité : <b>not as … as</b> / <b>less … than</b>.",
      "Nuancer (C1) : <b>much / far / a lot</b> + comparatif (far better), <b>slightly / a bit</b> (slightly cheaper), <b>nowhere near as</b> good as.",
      "<b>The more</b> you practise, <b>the better</b> you get (plus… plus…).",
    ],
    examples: [
      { en: "Living in the city is far more expensive than living in the country.", fr: "Vivre en ville est bien plus cher que vivre à la campagne." },
      { en: "The sooner we start, the better.", fr: "Plus tôt on commence, mieux c'est." },
      { en: "It's not as easy as it looks.", fr: "Ce n'est pas aussi facile que ça en a l'air." },
    ],
    exercises: [
      { s: "This flat is ___ (big) than the old one.", a: ["bigger"], why: "Adjectif court → -er (doublement du g)." },
      { s: "It's the ___ (good) film I've ever seen.", a: ["best"], why: "good → better → the best." },
      { s: "Today is ___ (bad) than yesterday.", a: ["worse"], why: "bad → worse." },
      { s: "Lagos is ___ ___ (expensive) than Accra.", a: ["more expensive"], why: "Adjectif long → more." },
      { s: "He's ___ tall ___ his brother. (aussi … que)", a: ["as / as"], why: "Égalité : as … as." },
      { s: "The ___ you read, the more you learn.", a: ["more"], why: "the more … the more." },
      { s: "The new phone is ___ better than the old one. (bien meilleur)", a: ["much", "far", "a lot"], why: "Renforcer un comparatif : much / far / a lot." },
      { s: "This is the most ___ (interesting) book on the topic.", a: ["interesting"], why: "the most + adjectif long." },
    ],
  },
  topic: "Villes et logement",
  vocab: [
    { en: "the cost of living", fr: "le coût de la vie", ex: "The cost of living keeps rising." },
    { en: "crowded", fr: "bondé", ex: "The buses are always crowded." },
    { en: "a vibrant city", fr: "une ville dynamique, vivante", ex: "Lagos is a vibrant city." },
    { en: "the suburbs", fr: "la banlieue", ex: "We moved to the suburbs." },
    { en: "rent", fr: "le loyer", ex: "Rent is very high in the centre." },
    { en: "to commute", fr: "faire la navette (domicile-travail)", ex: "I commute an hour each way." },
    { en: "a traffic jam", fr: "un embouteillage", ex: "I was stuck in a traffic jam." },
    { en: "public transport", fr: "les transports en commun", ex: "Public transport here is excellent." },
    { en: "a neighbourhood", fr: "un quartier", ex: "It's a quiet neighbourhood." },
    { en: "to move house", fr: "déménager", ex: "We're moving house next month." },
    { en: "quality of life", fr: "qualité de vie", ex: "The quality of life is better here." },
    { en: "urban sprawl", fr: "l'étalement urbain", ex: "Urban sprawl is a big problem." },
  ],
  shadow: [
    "The cost of living in the capital is far higher than in smaller towns.",
    "The longer I live here, the more I appreciate this neighbourhood.",
    "Public transport isn't as reliable as it should be, so I often get stuck in traffic jams.",
    "In my opinion, quality of life matters much more than a bigger salary.",
  ],
  speak: { prompt: "Compare two cities you know (or city life and country life): cost of living, transport, atmosphere, quality of life. Which is better for you and why?", minWords: 130 },
  write: { prompt: "Write a comparison essay: 'Living in a big city vs living in a small town'. Use comparatives, superlatives, as…as and the more…the more.", minWords: 130 },
  input: 1,
};
