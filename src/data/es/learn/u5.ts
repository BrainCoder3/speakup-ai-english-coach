import type { Learn } from "../../learnTypes";

/** Unidad 5 — Tus amigos son mis amigos. */
export const learn5: Omit<Learn, "quiz"> = {
  goal: "Présenter et décrire une personne : son physique, son caractère, ses goûts, sa famille.",
  can: ["Exprimer mes goûts et intérêts (gustar, encantar, interesar)", "Être d'accord ou non (también, tampoco, sí, no)", "Décrire le physique et le caractère de quelqu'un", "Parler de ma famille avec les possessifs"],
  theory: [
    {
      title: "Le verbe gustar",
      explain: ["En espagnol, c'est la chose qui « plaît » : elle est le sujet. Donc <b>gusta</b> + nom singulier ou verbe, <b>gustan</b> + nom pluriel.", "La personne est indiquée par le pronom : (A mí) <b>me</b>, (A ti) <b>te</b>, (A él / ella / usted) <b>le</b>, (A nosotros) <b>nos</b>, (A vosotros) <b>os</b>, (A ellos / ustedes) <b>les</b>. L'article est obligatoire : Me gusta <b>el</b> cine."],
      table: { head: ["", "", "+ singulier / verbe", "+ pluriel"], rows: [["(A mí)", "me", "gust<b>a</b> el cine", "gust<b>an</b> las películas"], ["(A ti)", "te", "gusta ir al cine", "gustan los libros"], ["(A él / ella)", "le", "gusta bailar", "gustan los perros"], ["(A nosotros)", "nos", "gusta el jazz", "gustan las fiestas"]] },
      examples: [{ es: "A mi padre le gusta el fútbol, pero a mí me gustan más los videojuegos.", fr: "Mon père aime le foot, mais moi je préfère les jeux vidéo." }],
    },
    {
      title: "Degrés : encantar, mucho, bastante, nada",
      explain: ["Du plus au moins : <b>me encanta</b> (j'adore) > me gusta <b>mucho</b> > me gusta <b>bastante</b> > <b>no</b> me gusta <b>mucho</b> > <b>no</b> me gusta > <b>no</b> me gusta <b>nada</b>.", "On ne dit jamais « me encanta mucho ». <b>y + no = ni</b> : No me gusta el fútbol <b>ni</b> el tenis."],
      examples: [{ es: "Me encanta el flamenco, pero no me gusta nada el reguetón.", fr: "J'adore le flamenco, mais je n'aime pas du tout le reggaeton." }],
    },
    {
      title: "Être d'accord ou pas : también, tampoco, sí, no",
      explain: ["Phrase affirmative : Me encanta el golf. → <b>A mí también</b> (moi aussi) / <b>A mí no</b> (pas moi).", "Phrase négative : No me gusta nada el golf. → <b>A mí tampoco</b> (moi non plus) / <b>A mí sí</b> (moi si)."],
      examples: [{ es: "No me gustan los lunes. — A mí tampoco.", fr: "Je n'aime pas les lundis. — Moi non plus." }],
    },
    {
      title: "Les possessifs",
      explain: ["<b>mi / mis</b> (mon, ma, mes), <b>tu / tus</b> (ton, ta, tes), <b>su / sus</b> (son, sa, ses, et leur(s), votre (usted)).", "Ils s'accordent avec l'objet possédé, pas avec le possesseur : Sara vive con <b>sus</b> padres. Jamais d'article devant : <b>mi</b> amigo (pas « el mi amigo »)."],
      examples: [{ es: "Mis abuelos viven en el campo con su perro.", fr: "Mes grands-parents vivent à la campagne avec leur chien." }],
    },
    {
      title: "Décrire une personne",
      explain: ["Physique : <b>Es</b> alto/a, bajo/a, delgado/a, moreno/a, rubio/a, calvo… · <b>Tiene</b> <b>el</b> pelo largo / corto / rizado / liso, <b>los</b> ojos verdes, barba, bigote. (On dit « tiene <b>el</b> pelo rubio », jamais « su pelo »).", "Caractère : <b>Es / Parece</b> simpático, divertido, tímido, serio, inteligente, sociable… <b>Un poco</b> seulement avec un défaut : es un poco tímido."],
      examples: [{ es: "Mi profesor es alto, tiene barba y parece muy serio, pero es muy divertido.", fr: "Mon prof est grand, il a une barbe et il a l'air très sérieux, mais il est très drôle." }],
    },
    {
      title: "Les accents diacritiques",
      explain: ["Un accent écrit distingue deux mots qui s'écrivent pareil : <b>mi</b> (mon) / <b>mí</b> (moi) · <b>tu</b> (ton) / <b>tú</b> (toi) · <b>el</b> (le) / <b>él</b> (lui) · <b>te</b> / <b>té</b> (thé) · <b>que</b> / <b>qué</b> · <b>como</b> / <b>cómo</b> · <b>porque</b> / <b>por qué</b>."],
      examples: [{ es: "A mí me gusta tu casa. ¿Tú vives aquí?", fr: "Moi j'aime ta maison. Toi, tu vis ici ?" }],
    },
  ],
  vocab: [
    { theme: "La famille", words: [{ es: "los padres", fr: "les parents" }, { es: "el padre / la madre", fr: "le père / la mère" }, { es: "los hijos", fr: "les enfants" }, { es: "el hermano / la hermana", fr: "le frère / la sœur" }, { es: "los abuelos", fr: "les grands-parents" }, { es: "el tío / la tía", fr: "l'oncle / la tante" }, { es: "el primo / la prima", fr: "le cousin / la cousine" }, { es: "el novio / la novia", fr: "le copain / la copine" }, { es: "la pareja", fr: "le / la partenaire" }] },
    { theme: "Caractère", words: [{ es: "divertido/a", fr: "drôle" }, { es: "aburrido/a", fr: "ennuyeux" }, { es: "simpático/a", fr: "sympathique" }, { es: "tímido/a", fr: "timide" }, { es: "serio/a", fr: "sérieux" }, { es: "abierto/a", fr: "ouvert" }, { es: "alegre", fr: "joyeux" }, { es: "inteligente", fr: "intelligent" }, { es: "sociable", fr: "sociable" }] },
    { theme: "Musique", words: [{ es: "el / la cantante", fr: "le chanteur / la chanteuse" }, { es: "el grupo de música", fr: "le groupe" }, { es: "tocar un instrumento", fr: "jouer d'un instrument" }, { es: "ir a conciertos", fr: "aller à des concerts" }, { es: "la música clásica", fr: "la musique classique" }] },
  ],
  phonetics: { title: "L'intonation des questions", explain: "Une question fermée (réponse sí / no) MONTE à la fin : ¿Te gusta el jazz? ↗. Une question avec un mot interrogatif (qué, cómo…) monte au début puis descend : ¿Qué música te gusta? ↘. C'est l'intonation qui distingue « Te gusta. » de « ¿Te gusta? ».", examples: ["¿Te gusta el jazz?", "¿Qué música te gusta?", "¿Tienes hermanos?", "Tienes hermanos."] },
  culture: "La famille compte beaucoup dans les pays hispaniques : on déjeune souvent le dimanche avec les grands-parents, oncles et cousins. On utilise aussi « mi pareja » pour parler de son/sa partenaire sans préciser le statut.",
};
