import type { Level } from "../types";

/** Unidad 7 — ¡A comer! (livre p. 98). */
export const u7: Level = {
  id: "es7", n: 7, cefr: "A1", title: "¡A comer!", subtitle: "Se débrouiller au restaurant, parler de nourriture et d'habitudes alimentaires",
  style: "short simple Spanish sentences about food, dishes and restaurants, use usted with the customer, lo/la/los/las",
  book: { unit: 7, page: 98 },
  lesson: [
    "Au restaurant : <b>De primero</b>, sopa · <b>de segundo</b>, pollo · <b>Para beber</b>, agua · <b>La cuenta, por favor</b>.",
    "<b>poner</b> : pongo, pones… · <b>traer</b> : traigo, traes… → ¿Me <b>trae</b> la carta?",
    "COD : <b>lo, la, los, las</b> remplacent un nom déjà connu : El café, ¿cómo <b>lo</b> tomas? — <b>Lo</b> tomo solo.",
    "<b>de</b> = ingrédient (tortilla de patatas) · <b>con</b> = accompagnement (carne con patatas).",
  ],
  repeat: [
    { en: "De primero quiero una ensalada mixta.", fr: "En entrée je veux une salade composée." },
    { en: "De segundo, pescado a la plancha, por favor.", fr: "En plat, du poisson grillé, s'il vous plaît." },
    { en: "Para beber, agua sin gas.", fr: "Pour boire, de l'eau plate." },
    { en: "¿Qué lleva el guacamole?", fr: "Qu'y a-t-il dans le guacamole ?" },
    { en: "Perdone, ¿me trae un poco más de pan?", fr: "Excusez-moi, vous m'apportez un peu plus de pain ?" },
    { en: "El café lo tomo con leche y sin azúcar.", fr: "Le café, je le prends avec du lait et sans sucre." },
    { en: "La cuenta, por favor.", fr: "L'addition, s'il vous plaît." },
    { en: "En mi país comemos mucho arroz con salsa.", fr: "Dans mon pays nous mangeons beaucoup de riz en sauce." },
  ],
  questions: [
    { q: "¿Qué desayunas normalmente?", hint: "« Desayuno… »", example: "Normalmente desayuno pan con mantequilla y un té." },
    { q: "¿Cuál es un plato típico de tu país? ¿Qué lleva?", hint: "« Un plato típico es… Lleva… »", example: "Un plato típico es el tô; lleva harina de maíz y se come con salsa." },
    { q: "¿Cómo tomas el café o el té?", hint: "Utilise lo : « Lo tomo… »", example: "El té lo tomo con mucho azúcar y un poco de menta." },
    { q: "¿Qué no comes nunca?", hint: "« No como nunca… porque… »", example: "No como nunca carne de cerdo porque no me gusta." },
    { q: "Estás en un restaurante. ¿Qué pides de primero y de segundo?", hint: "« De primero… y de segundo… »", example: "De primero quiero sopa de verduras y de segundo pollo asado con patatas." },
  ],
  mission: {
    title: "Le menu du jour", turns: 6,
    brief: "Tu déjeunes dans un restaurant espagnol avec un « menú del día ». Commande ton entrée, ton plat, ta boisson et ton dessert, demande ce que contient un plat, puis demande l'addition.",
    prompt: "You are a waiter in a Spanish restaurant serving a 'menú del día' (primero: sopa de verduras, ensalada mixta, gazpacho; segundo: pollo asado, merluza a la plancha, paella; postre: flan, fruta, helado; 12 euros). Use usted. Take the order step by step, answer questions about dishes, then bring the bill.",
    opener: "¡Buenas tardes! Aquí tiene la carta. Hoy tenemos un menú del día muy bueno. ¿Qué quiere de primero?",
  },
};
