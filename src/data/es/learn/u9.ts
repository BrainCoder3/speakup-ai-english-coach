import type { Learn } from "../../learnTypes";

/** Unidad 9 — ¿Sabes conducir? */
export const learn9: Omit<Learn, "quiz"> = {
  goal: "Choisir la personne idéale pour un travail : parler d'expériences passées, de compétences et de qualités.",
  can: ["Raconter mes expériences avec le passé composé (pretérito perfecto)", "Dire combien de fois j'ai fait quelque chose", "Distinguer saber (savoir faire) et poder (pouvoir)", "Décrire mes qualités et mes défauts"],
  theory: [
    {
      title: "Le pretérito perfecto (passé composé)",
      explain: ["Présent de <b>haber</b> + participe. Il sert à parler d'<b>expériences</b> sans dire quand : He viajado por todo el mundo.", "Le participe ne change jamais et on ne sépare jamais haber du participe."],
      table: { head: ["", "HABER", "+ participe"], rows: [["yo", "<b>he</b>", "estado"], ["tú", "<b>has</b>", "tenido"], ["él / ella / usted", "<b>ha</b>", "vivido"], ["nosotros/as", "<b>hemos</b>", "viajado"], ["vosotros/as", "<b>habéis</b>", "comido"], ["ellos / ustedes", "<b>han</b>", "salido"]] },
      examples: [{ es: "Hemos vivido dos años en Dakar.", fr: "Nous avons vécu deux ans à Dakar." }],
    },
    {
      title: "Le participe",
      explain: ["Verbes en -ar → <b>-ado</b> (viajado, hablado) ; en -er / -ir → <b>-ido</b> (comido, vivido, ido).", "Irréguliers à apprendre par cœur : hacer → <b>hecho</b>, decir → <b>dicho</b>, escribir → <b>escrito</b>, poner → <b>puesto</b>, abrir → <b>abierto</b>, volver → <b>vuelto</b>, romper → <b>roto</b>, ver → <b>visto</b>.", "Avec un verbe pronominal, le pronom va devant haber : Nunca <b>me he</b> bañado en un río."],
      examples: [{ es: "¿Qué has hecho hoy? — He escrito un correo y he visto una película.", fr: "Qu'as-tu fait aujourd'hui ? — J'ai écrit un e-mail et j'ai vu un film." }],
    },
    {
      title: "Dire combien de fois",
      explain: ["¿Has estado <b>alguna vez</b> en Cuba? — No, <b>nunca</b> · Sí, <b>una vez</b> · Sí, <b>más de una vez</b> · Sí, <b>un par de veces</b> (deux fois) · Sí, <b>varias / muchas veces</b>.", "Négation : il faut un mot négatif <b>devant</b> le verbe : <b>Nunca</b> he estado en Japón = <b>No</b> he estado <b>nunca</b> en Japón."],
      examples: [{ es: "He montado a caballo muchas veces, pero nunca he esquiado.", fr: "J'ai fait du cheval souvent, mais je n'ai jamais skié." }],
    },
    {
      title: "Saber et poder + infinitif",
      explain: ["<b>saber</b> = ce qu'on a appris : Sé ruso, sé tocar la guitarra. Attention : yo <b>sé</b> (avec accent).", "<b>poder</b> (o → ue) = être capable dans une situation ou avoir la possibilité : No <b>puedo</b> leer esto, no llevo las gafas. Puedo hablar ahora, tengo tiempo."],
      table: { head: ["", "SABER", "PODER"], rows: [["yo", "<b>sé</b>", "p<b>ue</b>do"], ["tú", "sabes", "p<b>ue</b>des"], ["él / ella / usted", "sabe", "p<b>ue</b>de"], ["nosotros/as", "sabemos", "podemos"], ["vosotros/as", "sabéis", "podéis"], ["ellos / ustedes", "saben", "p<b>ue</b>den"]] },
      examples: [{ es: "¿Sabes conducir? — Sí, pero ahora no puedo porque no tengo aquí las gafas.", fr: "Tu sais conduire ? — Oui, mais là je ne peux pas, je n'ai pas mes lunettes." }],
    },
    {
      title: "Évaluer une compétence et décrire un caractère",
      explain: ["Conduce <b>muy bien</b> · <b>bastante bien</b> (= no conduce nada mal) · <b>bastante mal</b> · <b>muy mal</b> · <b>fatal</b> (très mal).", "Adjectifs invariables : en <b>-e</b> (inteligente, paciente, responsable), en <b>-ista</b> (optimista, egoísta), en <b>-al</b> (puntual, normal)."],
      examples: [{ es: "Es muy puntual y optimista, pero un poco despistado.", fr: "Il est très ponctuel et optimiste, mais un peu tête en l'air." }],
    },
  ],
  vocab: [
    { theme: "Caractère", words: [{ es: "puntual ≠ impuntual", fr: "ponctuel ≠ en retard" }, { es: "organizado/a", fr: "organisé" }, { es: "trabajador/a", fr: "travailleur" }, { es: "responsable", fr: "responsable" }, { es: "paciente ≠ impaciente", fr: "patient ≠ impatient" }, { es: "generoso/a ≠ egoísta", fr: "généreux ≠ égoïste" }, { es: "creativo/a", fr: "créatif" }, { es: "despistado/a", fr: "distrait" }, { es: "ambicioso/a", fr: "ambitieux" }, { es: "amable", fr: "aimable" }] },
    { theme: "Professions", words: [{ es: "el / la policía", fr: "le policier" }, { es: "el / la médico/a", fr: "le médecin" }, { es: "el / la agricultor/a", fr: "l'agriculteur" }, { es: "el / la maestro/a", fr: "l'instituteur" }, { es: "el / la vendedor/a", fr: "le vendeur" }, { es: "el / la recepcionista", fr: "le réceptionniste" }, { es: "el / la taxista", fr: "le chauffeur de taxi" }] },
    { theme: "Compétences et changements", words: [{ es: "conducir", fr: "conduire" }, { es: "nadar", fr: "nager" }, { es: "cocinar", fr: "cuisiner" }, { es: "tocar la guitarra", fr: "jouer de la guitare" }, { es: "dejar el trabajo", fr: "quitter son travail" }, { es: "cambiar de casa", fr: "déménager" }, { es: "irse a vivir a otro país", fr: "partir vivre dans un autre pays" }] },
  ],
  phonetics: { title: "Les sons /p/, /t/, /k/", explain: "En espagnol, p, t et k (c, qu) se prononcent sans souffle d'air, plus doucement qu'en anglais : place la main devant la bouche, tu ne dois presque rien sentir. Le t se fait avec la langue contre les dents.", examples: ["puntual", "taxista", "pequeño", "tocar", "creativo"] },
  culture: "En Espagne, on utilise beaucoup le pretérito perfecto pour les actions d'aujourd'hui (Hoy he comido paella). Dans une grande partie de l'Amérique latine, on préfère le passé simple (Hoy comí paella) : les deux sont corrects.",
};
