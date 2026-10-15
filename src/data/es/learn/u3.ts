import type { Learn } from "../../learnTypes";

/** Unidad 3 — ¿Dónde está Santiago? */
export const learn3: Omit<Learn, "quiz"> = {
  goal: "Décrire des lieux, exprimer l'existence et la localisation, parler du climat et du temps qu'il fait.",
  can: ["Dire ce qu'il y a dans un pays ou une ville (hay)", "Dire où se trouve un lieu (estar)", "Décrire et définir avec ser, muy, mucho", "Utiliser le superlatif et les mots interrogatifs (qué, cuál, cuántos, dónde, cómo)"],
  theory: [
    {
      title: "Exprimer l'existence : hay",
      explain: ["<b>Hay</b> (du verbe haber) = il y a. Il est <b>invariable</b> : hay un lago, hay dos lenguas, hay muchos parques.", "Jamais <b>hay</b> + el / la : on dit <b>Hay un</b> lago precioso (pas « hay el lago »). Négation : <b>No hay</b> petróleo."],
      examples: [{ es: "En Ciudad de México hay una plaza muy famosa.", fr: "À Mexico il y a une place très célèbre." }, { es: "En Paraguay hay dos lenguas oficiales.", fr: "Au Paraguay il y a deux langues officielles." }],
    },
    {
      title: "Exprimer la localisation : estar",
      explain: ["Pour dire <b>où</b> se trouve quelque chose : <b>estar</b>."],
      table: { head: ["", "ESTAR"], rows: [["yo", "est<b>oy</b>"], ["tú", "est<b>ás</b>"], ["él / ella / usted", "est<b>á</b>"], ["nosotros/as", "estamos"], ["vosotros/as", "estáis"], ["ellos / ustedes", "están"]] },
      examples: [{ es: "¿Dónde está Panamá? — En Centroamérica.", fr: "Où est le Panama ? — En Amérique centrale." }],
    },
    {
      title: "Décrire et définir : ser",
      explain: ["<b>ser + adjectif</b> pour décrire : Perú <b>es</b> muy bonito. <b>ser + nom</b> pour définir : México <b>es</b> un país muy turístico.", "Retenir : <b>hay</b> = existence, <b>estar</b> = localisation, <b>ser</b> = description / définition."],
      examples: [{ es: "Los peruanos son muy amables.", fr: "Les Péruviens sont très aimables." }],
    },
    {
      title: "Le superlatif",
      explain: ["<b>el / la / los / las + nom + más + adjectif + de</b> : el museo más famoso de Madrid."],
      examples: [{ es: "El Everest es la montaña más alta del mundo.", fr: "L'Everest est la plus haute montagne du monde." }],
    },
    {
      title: "Muy, mucho, mucha, muchos, muchas",
      explain: ["<b>mucho/a/os/as + nom</b> (s'accorde) : mucho café, mucha contaminación, muchos tipos, muchas ciudades.", "<b>muy + adjectif</b> (invariable) : muy grande. <b>verbe + mucho</b> (invariable) : llueve mucho."],
      examples: [{ es: "En el sur llueve mucho y las montañas son muy altas.", fr: "Dans le sud il pleut beaucoup et les montagnes sont très hautes." }],
    },
    {
      title: "Poser des questions : qué, cuál, cuántos, dónde, cómo",
      explain: ["<b>¿Dónde…?</b> = où · <b>¿Cómo es…?</b> = comment est… · <b>¿Cuántos/as…?</b> = combien (accord : cuántas lenguas).", "<b>¿Qué es…?</b> pour définir (¿Qué es el mate?) · <b>¿Qué + nom?</b> · <b>¿Cuál / Cuáles…?</b> pour identifier dans un ensemble (¿Cuál es la capital de Venezuela?)."],
      examples: [{ es: "¿Cuántas lenguas oficiales hay en Perú? — Dos.", fr: "Combien de langues officielles y a-t-il au Pérou ? — Deux." }],
    },
    {
      title: "Le temps qu'il fait",
      explain: ["<b>Hace</b> calor / frío / viento / sol · <b>Llueve</b> · <b>Nieva</b> · <b>Está</b> nublado · <b>Hay</b> nubes. <b>El clima es</b> tropical / seco / húmedo / templado."],
      examples: [{ es: "En invierno hace frío y nieva en la montaña.", fr: "En hiver il fait froid et il neige en montagne." }],
    },
  ],
  vocab: [
    { theme: "Géographie", words: [{ es: "el volcán", fr: "le volcan" }, { es: "la montaña", fr: "la montagne" }, { es: "la cordillera", fr: "la chaîne de montagnes" }, { es: "el desierto", fr: "le désert" }, { es: "el río", fr: "le fleuve" }, { es: "el lago", fr: "le lac" }, { es: "la selva", fr: "la jungle" }, { es: "la costa", fr: "la côte" }, { es: "la isla", fr: "l'île" }, { es: "la catarata", fr: "la cascade" }] },
    { theme: "Données sur un pays", words: [{ es: "la capital", fr: "la capitale" }, { es: "la moneda", fr: "la monnaie" }, { es: "la población", fr: "la population" }, { es: "la lengua oficial", fr: "la langue officielle" }, { es: "el plato típico", fr: "le plat typique" }] },
    { theme: "Points cardinaux et saisons", words: [{ es: "el norte", fr: "le nord" }, { es: "el sur", fr: "le sud" }, { es: "el este", fr: "l'est" }, { es: "el oeste", fr: "l'ouest" }, { es: "la primavera", fr: "le printemps" }, { es: "el verano", fr: "l'été" }, { es: "el otoño", fr: "l'automne" }, { es: "el invierno", fr: "l'hiver" }] },
  ],
  phonetics: { title: "L'accent tonique", explain: "Chaque mot a une syllabe plus forte. Mot terminé par une voyelle, -n ou -s → accent sur l'avant-dernière syllabe (mon-TA-ña). Autre consonne → sur la dernière (ca-pi-TAL). Quand un mot ne suit pas ces règles, on écrit l'accent : Pe-RÚ, a-le-MÁN, MÉ-xi-co, ÁR-bol.", examples: ["capital", "montaña", "Perú", "México", "árbol"] },
  culture: "« Santiago » est le nom de plusieurs villes : Santiago du Chili (capitale), Santiago de Cuba et Saint-Jacques-de-Compostelle en Espagne, fin du célèbre pèlerinage. Le Chili est si long qu'il a des déserts au nord et des glaciers au sud.",
};
