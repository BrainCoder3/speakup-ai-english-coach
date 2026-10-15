import type { Level } from "../types";

/** Unidad 8 — El barrio ideal (livre p. 112). */
export const u8: Level = {
  id: "es8", n: 8, cefr: "A1", title: "El barrio ideal", subtitle: "Décrire un quartier, demander et indiquer un chemin, dire ce qu'on aime le plus",
  style: "short simple Spanish sentences about neighbourhoods, places in a city, directions and distances",
  book: { unit: 8, page: 112 },
  lesson: [
    "Demander : <b>¿Hay una / alguna farmacia por aquí cerca?</b> · <b>¿Dónde está la parada de metro?</b>",
    "Situer : <b>Está a 200 metros / a cinco minutos</b> · <b>muy cerca / lejos de aquí</b> · <b>a la derecha / a la izquierda</b> · <b>al lado de</b> · <b>al final de</b> la calle.",
    "Quantité : no hay <b>ningún</b> parque · hay <b>algún</b> banco · <b>pocos / bastantes / muchos / demasiados</b> coches.",
    "<b>Lo que más me gusta es</b> + nom · <b>es que</b> + phrase.",
  ],
  repeat: [
    { en: "Perdona, ¿hay alguna farmacia por aquí cerca?", fr: "Pardon, y a-t-il une pharmacie près d'ici ?" },
    { en: "Sí, hay una al final de la calle, a la derecha.", fr: "Oui, il y en a une au bout de la rue, à droite." },
    { en: "El mercado está a cinco minutos a pie.", fr: "Le marché est à cinq minutes à pied." },
    { en: "Sigue todo recto y gira la segunda a la izquierda.", fr: "Continue tout droit et prends la deuxième à gauche." },
    { en: "En mi barrio no hay ningún cine.", fr: "Dans mon quartier il n'y a aucun cinéma." },
    { en: "Hay demasiado tráfico y poca gente en la calle.", fr: "Il y a trop de circulation et peu de monde dans la rue." },
    { en: "Lo que más me gusta de mi barrio es la gente.", fr: "Ce que j'aime le plus dans mon quartier, ce sont les gens." },
    { en: "Mi barrio es tranquilo y está bien comunicado.", fr: "Mon quartier est calme et bien desservi." },
  ],
  questions: [
    { q: "¿Cómo es tu barrio?", hint: "« Mi barrio es… Hay… Tiene… »", example: "Mi barrio es tranquilo y bastante bonito; hay muchas tiendas y un mercado." },
    { q: "¿Qué hay cerca de tu casa?", hint: "« Cerca de mi casa hay… Está a … minutos »", example: "Cerca de mi casa hay una farmacia y una parada de autobús a dos minutos." },
    { q: "¿Qué no hay en tu barrio?", hint: "« No hay ningún / ninguna… »", example: "En mi barrio no hay ningún cine ni ninguna biblioteca." },
    { q: "¿Qué es lo que más te gusta de tu ciudad?", hint: "« Lo que más me gusta es… »", example: "Lo que más me gusta es la gente y lo que menos me gusta es el tráfico." },
    { q: "Explícame cómo ir de tu casa a la panadería más cercana.", hint: "« Sales de casa, giras a la derecha, sigues todo recto… »", example: "Sales de casa, giras a la derecha y la panadería está al final de la calle, al lado del banco." },
  ],
  mission: {
    title: "Perdu en ville", turns: 6,
    brief: "Tu es à Bogotá et tu cherches plusieurs endroits (pharmacie, distributeur, station de métro). Demande ton chemin à un passant et vérifie que tu as compris.",
    prompt: "You are a friendly passer-by in Bogotá. The learner is lost and asks for places (pharmacy, cash machine, metro/bus stop, a café). Answer with simple directions (todo recto, a la derecha, a la izquierda, al lado de, al final de, a X minutos) and ask questions back. One step at a time.",
    opener: "¡Hola! ¿Te puedo ayudar? Pareces un poco perdido. ¿Qué buscas?",
  },
};
