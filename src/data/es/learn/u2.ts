import type { Learn } from "../../learnTypes";

/** Unidad 2 — Quiero aprender español. */
export const learn2: Omit<Learn, "quiz"> = {
  goal: "Parler de ma relation avec l'espagnol et la culture hispanique.",
  can: ["Expliquer pourquoi j'apprends l'espagnol (por, para, porque)", "Dire ce que je veux faire (querer + infinitif)", "Parler de ce que je sais faire et de mes loisirs", "Utiliser les articles et le présent des verbes réguliers"],
  theory: [
    {
      title: "Le genre des noms",
      explain: ["En général, les noms en <b>-o</b> sont masculins et ceux en <b>-a</b> féminins.", "Exceptions à connaître : <b>la mano</b>, <b>la moto</b>, <b>la foto</b> (féminins en -o) ; <b>el idioma, el problema, el sistema, el clima, el mapa, el día, el sofá</b> (masculins en -a). Les noms en <b>-e</b> peuvent être des deux genres : <b>la gente, el cine</b>."],
      examples: [{ es: "El idioma español es muy bonito.", fr: "La langue espagnole est très belle." }, { es: "La foto es de mi familia.", fr: "La photo est de ma famille." }],
    },
    {
      title: "Les articles",
      explain: ["Défini : <b>el</b> curso, <b>la</b> playa, <b>los</b> cursos, <b>las</b> playas.", "Indéfini : <b>un</b> curso, <b>una</b> playa, <b>unos</b> cursos, <b>unas</b> playas.", "<b>a + el = al</b> (voy al cine) · <b>de + el = del</b> (el libro del profesor)."],
      examples: [{ es: "Quiero ver una película en el cine.", fr: "Je veux voir un film au cinéma." }],
    },
    {
      title: "Le présent des verbes réguliers (-ar, -er, -ir)",
      explain: ["On enlève -ar / -er / -ir et on ajoute la terminaison de la personne."],
      table: { head: ["", "HABLAR", "COMPRENDER", "ESCRIBIR"], rows: [["yo", "habl<b>o</b>", "comprend<b>o</b>", "escrib<b>o</b>"], ["tú", "habl<b>as</b>", "comprend<b>es</b>", "escrib<b>es</b>"], ["él / ella / usted", "habl<b>a</b>", "comprend<b>e</b>", "escrib<b>e</b>"], ["nosotros/as", "habl<b>amos</b>", "comprend<b>emos</b>", "escrib<b>imos</b>"], ["vosotros/as", "habl<b>áis</b>", "comprend<b>éis</b>", "escrib<b>ís</b>"], ["ellos / ustedes", "habl<b>an</b>", "comprend<b>en</b>", "escrib<b>en</b>"]] },
      examples: [{ es: "Leo el periódico y escribo mensajes.", fr: "Je lis le journal et j'écris des messages." }],
    },
    {
      title: "Le verbe hacer (irrégulier à la 1re personne)",
      explain: ["<b>hago</b>, haces, hace, hacemos, hacéis, hacen. Il s'utilise pour les activités : hacer deporte, hacer fotos, hacer un curso."],
      examples: [{ es: "Hago un curso de teatro los martes.", fr: "Je fais un cours de théâtre le mardi." }],
    },
    {
      title: "Exprimer ses motivations : por, porque, para",
      explain: ["Question : <b>¿Por qué</b> estudias español? (deux mots, accent).", "Réponse : <b>porque</b> + verbe conjugué (porque trabajo con españoles) · <b>por</b> + nom (por mi trabajo) · <b>para</b> + infinitif pour un but (para viajar)."],
      examples: [{ es: "¿Por qué estudias español? — Por mi novia. Y para vivir en Chile.", fr: "Pourquoi tu étudies l'espagnol ? — Pour ma copine. Et pour vivre au Chili." }],
    },
    {
      title: "Exprimer des intentions : querer + infinitif",
      explain: ["<b>querer</b> change <b>e → ie</b> (sauf nosotros et vosotros) : qu<b>ie</b>ro, qu<b>ie</b>res, qu<b>ie</b>re, queremos, queréis, qu<b>ie</b>ren."],
      examples: [{ es: "¿Qué queréis hacer este fin de semana? — Queremos leer y pasear.", fr: "Que voulez-vous faire ce week-end ? — Nous voulons lire et nous promener." }],
    },
  ],
  vocab: [
    { theme: "Langues", words: [{ es: "el inglés", fr: "l'anglais" }, { es: "el francés", fr: "le français" }, { es: "el alemán", fr: "l'allemand" }, { es: "el árabe", fr: "l'arabe" }, { es: "el chino", fr: "le chinois" }, { es: "el español", fr: "l'espagnol" }] },
    { theme: "Culture", words: [{ es: "la historia", fr: "l'histoire" }, { es: "la comida", fr: "la cuisine / la nourriture" }, { es: "la literatura", fr: "la littérature" }, { es: "la naturaleza", fr: "la nature" }, { es: "el arte", fr: "l'art" }, { es: "la vida nocturna", fr: "la vie nocturne" }] },
    { theme: "Loisirs", words: [{ es: "ir a un concierto", fr: "aller à un concert" }, { es: "ir de compras", fr: "faire les magasins" }, { es: "salir a cenar", fr: "sortir dîner" }, { es: "salir con amigos", fr: "sortir avec des amis" }, { es: "ver una serie", fr: "regarder une série" }, { es: "escuchar un pódcast", fr: "écouter un podcast" }, { es: "jugar a videojuegos", fr: "jouer aux jeux vidéo" }, { es: "aprender a bailar", fr: "apprendre à danser" }] },
  ],
  phonetics: { title: "L'enchaînement des mots", explain: "À l'oral, les mots s'enchaînent : la consonne finale se lie à la voyelle suivante (los_amigos → « losamigos ») et deux voyelles identiques se fondent (la_amiga). Écoute et répète d'un seul souffle.", examples: ["los amigos", "un intercambio", "es español", "quiero aprender español"] },
  culture: "Le nom d'une langue est presque toujours la forme masculine de la nationalité : el francés, el alemán. Les langues et nationalités s'écrivent sans majuscule en espagnol.",
};
