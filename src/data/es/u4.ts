import type { Level } from "../types";

/** Unidad 4 — ¿Cuál prefieres? (livre p. 56). */
export const u4: Level = {
  id: "es4", n: 4, cefr: "A1", title: "¿Cuál prefieres?", subtitle: "Faire des achats, parler de vêtements, de couleurs et de préférences",
  style: "short simple Spanish sentences in a shop, colours, clothes, prices, este/esta, tener que, preferir",
  book: { unit: 4, page: 56 },
  lesson: [
    "Démonstratifs : <b>este</b> jersey, <b>esta</b> camiseta, <b>estos</b> zapatos, <b>estas</b> sandalias · <b>esto</b> (chose inconnue).",
    "<b>tener que</b> + infinitif = devoir : Tengo que llevar un regalo.",
    "<b>preferir</b> (e → ie) : prefiero, prefieres… · <b>ir</b> : voy, vas, va, vamos, vais, van.",
    "Au magasin : <b>¿Cuánto cuesta(n)?</b> · <b>Quería…</b> · <b>Me llevo este.</b>",
  ],
  repeat: [
    { en: "¿Cuánto cuesta esta camiseta?", fr: "Combien coûte ce t-shirt ?" },
    { en: "Quería unos zapatos negros.", fr: "Je voudrais des chaussures noires." },
    { en: "Son un poco caros. ¿Tiene algo más barato?", fr: "Elles sont un peu chères. Vous avez quelque chose de moins cher ?" },
    { en: "Prefiero la falda roja.", fr: "Je préfère la jupe rouge." },
    { en: "Me llevo estos pantalones.", fr: "Je prends ce pantalon." },
    { en: "Tengo que comprar un regalo para mi madre.", fr: "Je dois acheter un cadeau pour ma mère." },
    { en: "Este fin de semana voy de compras.", fr: "Ce week-end je vais faire les magasins." },
    { en: "¿De qué color es tu mochila?", fr: "De quelle couleur est ton sac ?" },
  ],
  questions: [
    { q: "¿Qué ropa llevas hoy?", hint: "« Hoy llevo… »", example: "Hoy llevo una camiseta blanca, unos vaqueros y unas zapatillas negras." },
    { q: "¿Cuál es tu color favorito?", hint: "« Mi color favorito es el… »", example: "Mi color favorito es el verde." },
    { q: "¿Qué tienes que hacer esta semana?", hint: "« Tengo que + infinitif »", example: "Tengo que estudiar, ir al banco y comprar comida." },
    { q: "¿Qué prefieres: ir de compras o ir a la playa?", hint: "« Prefiero… porque… »", example: "Prefiero ir a la playa porque no me gusta gastar dinero." },
    { q: "¿Qué necesitas para un viaje de una semana?", hint: "« Necesito… / Tengo que llevar… »", example: "Necesito una maleta, ropa de verano, crema solar y mi pasaporte." },
  ],
  mission: {
    title: "Au marché aux puces", turns: 5,
    brief: "Tu achètes des vêtements dans un mercadillo à Madrid. Demande les prix, les couleurs, compare, négocie un peu et achète quelque chose.",
    prompt: "You are a friendly market seller at a flea market in Madrid selling clothes and accessories. Greet the customer, ask what they want, give prices in euros, offer colours and sizes, react to bargaining. Use usted. One short question at a time.",
    opener: "¡Buenos días! ¿Qué desea? Tenemos camisetas, chaquetas, bolsos… ¡todo muy barato!",
  },
};
