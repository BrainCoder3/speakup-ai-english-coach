import type { Learn } from "../../learnTypes";

/** Unidad 7 — ¡A comer! */
export const learn7: Omit<Learn, "quiz"> = {
  goal: "Se débrouiller dans les bars et restaurants, demander et donner des informations sur la nourriture.",
  can: ["Commander au restaurant et demander l'addition", "Demander ce qu'est un plat et ce qu'il contient", "Utiliser lo, la, los, las pour ne pas répéter", "Parler de mes habitudes alimentaires"],
  theory: [
    {
      title: "Demander des informations sur un plat",
      explain: ["<b>¿Qué es</b> la merluza? — Un pescado. · <b>¿Qué lleva</b> el guacamole? — (Lleva) aguacate, tomate, cebolla, limón y sal.", "<b>de</b> pour l'ingrédient principal : tortilla <b>de</b> patatas, sopa <b>de</b> verduras · <b>con</b> pour l'accompagnement : pollo <b>con</b> ensalada o <b>con</b> patatas."],
      examples: [{ es: "¿La sopa de qué es? — De pescado.", fr: "La soupe est à quoi ? — Au poisson." }],
    },
    {
      title: "Au bar et au restaurant",
      explain: ["Dans un lieu public on utilise <b>usted / ustedes</b>.", "Serveur : ¿Qué desea(n)? · ¿Qué le pongo? · ¿Para beber? · ¿Alguna cosa de postre?", "Client : <b>Primero</b> (quiero) sopa y <b>después</b> pollo · <b>Para mí</b>, la ensalada · ¿Qué hay de primero? · Perdone, <b>¿me pone</b> otra agua? · <b>¿me trae</b> más pan? · ¿Cuánto es? · <b>La cuenta, por favor</b>."],
      examples: [{ es: "Para mí, de primero, gazpacho, y de segundo, merluza.", fr: "Pour moi, en entrée, un gaspacho, et en plat, du merlu." }],
    },
    {
      title: "Les verbes poner et traer",
      explain: ["Irréguliers à la 1re personne : <b>pongo</b>, <b>traigo</b>. Au bar, « ¿Qué le pongo? » = « Qu'est-ce que je vous sers ? »."],
      table: { head: ["", "PONER", "TRAER"], rows: [["yo", "<b>pongo</b>", "<b>traigo</b>"], ["tú", "pones", "traes"], ["él / ella / usted", "pone", "trae"], ["nosotros/as", "ponemos", "traemos"], ["vosotros/as", "ponéis", "traéis"], ["ellos / ustedes", "ponen", "traen"]] },
      examples: [{ es: "¿Me trae la carta, por favor? — Sí, ahora mismo.", fr: "Vous m'apportez la carte ? — Oui, tout de suite." }],
    },
    {
      title: "Les pronoms COD : lo, la, los, las",
      explain: ["Ils remplacent un complément direct déjà connu : masculin <b>lo / los</b>, féminin <b>la / las</b>. Ils se placent devant le verbe conjugué.", "Si le COD est en tête de phrase, on le reprend aussi : <b>El pescado lo</b> cocino al vapor.", "Pas de pronom quand le nom n'a pas d'article : ¿Esta sopa lleva cebolla? — No, no lleva."],
      examples: [{ es: "¿Dónde compras la fruta? — La compro en el mercado.", fr: "Où achètes-tu les fruits ? — Je les achète au marché." }, { es: "Las patatas, ¿cómo las comes? — Fritas.", fr: "Les pommes de terre, comment tu les manges ? — Frites." }],
    },
    {
      title: "Les façons de cuisiner",
      explain: ["crudo (cru), cocido (bouilli), frito (frit), a la plancha (grillé à la plaque), al horno / asado (au four, rôti), al vapor (vapeur), guisado (en ragoût). Ils s'accordent : patatas frit<b>as</b>."],
      examples: [{ es: "Prefiero el pollo asado y las verduras al vapor.", fr: "Je préfère le poulet rôti et les légumes vapeur." }],
    },
  ],
  vocab: [
    { theme: "Aliments", words: [{ es: "el pan", fr: "le pain" }, { es: "el arroz", fr: "le riz" }, { es: "la carne", fr: "la viande" }, { es: "el pollo", fr: "le poulet" }, { es: "el pescado", fr: "le poisson" }, { es: "los huevos", fr: "les œufs" }, { es: "las patatas", fr: "les pommes de terre" }, { es: "la cebolla", fr: "l'oignon" }, { es: "el tomate", fr: "la tomate" }, { es: "los frijoles / las judías", fr: "les haricots" }, { es: "el queso", fr: "le fromage" }, { es: "la leche", fr: "le lait" }, { es: "el plátano", fr: "la banane" }, { es: "la naranja", fr: "l'orange" }] },
    { theme: "Boissons", words: [{ es: "el agua (con / sin gas)", fr: "l'eau (gazeuse / plate)" }, { es: "el zumo / el jugo", fr: "le jus" }, { es: "el café", fr: "le café" }, { es: "el té", fr: "le thé" }, { es: "el refresco", fr: "le soda" }] },
    { theme: "Mettre la table", words: [{ es: "el plato", fr: "l'assiette" }, { es: "el vaso", fr: "le verre" }, { es: "el tenedor", fr: "la fourchette" }, { es: "el cuchillo", fr: "le couteau" }, { es: "la cuchara", fr: "la cuillère" }, { es: "la servilleta", fr: "la serviette" }] },
  ],
  phonetics: { title: "Les sons ch et j", explain: "« ch » se prononce « tch » : chocolate, leche, churros. Le « j » (et « g » devant e, i) est un son raclé au fond de la gorge, plus fort que le « r » français : jamón, ajo, gente, naranja.", examples: ["leche", "chorizo", "jamón", "naranja", "gente"] },
  culture: "En Espagne, beaucoup de restaurants proposent à midi un « menú del día » : entrée, plat, dessert, pain et boisson pour un prix fixe. On partage aussi des « tapas ». Au Mexique les tortillas sont des galettes de maïs ; en Espagne la tortilla est une omelette de pommes de terre.",
};
