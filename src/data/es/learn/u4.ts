import type { Learn } from "../../learnTypes";

/** Unidad 4 — ¿Cuál prefieres? */
export const learn4: Omit<Learn, "quiz"> = {
  goal: "Faire des achats : identifier des objets, exprimer un besoin, demander un prix, parler de ses préférences.",
  can: ["Désigner des objets (este, esta, estos, estas, esto)", "Demander et comprendre un prix (cuesta / cuestan, nombres jusqu'à un million)", "Dire ce que je dois faire (tener que) et ce que je préfère (preferir)", "Décrire des vêtements (couleur, matière, motif) et utiliser llevar"],
  theory: [
    {
      title: "Les démonstratifs",
      explain: ["<b>este</b> jersey, <b>esta</b> camiseta, <b>estos</b> zapatos, <b>estas</b> sandalias (= ce / cette / ces, tout près de moi).", "Ils peuvent remplacer le nom quand on sait de quoi on parle : Pues yo prefiero <b>este</b>. <b>esto</b> est neutre : pour une chose dont on ne connaît pas le nom (¿Qué es esto?)."],
      examples: [{ es: "Estas botas, ¿cuánto cuestan? — Cuarenta euros.", fr: "Ces bottes, combien elles coûtent ? — Quarante euros." }],
    },
    {
      title: "El / la / los / las + adjectif ou + de",
      explain: ["Pour ne pas répéter le nom : el coche nuevo → <b>el nuevo</b> · la camiseta azul → <b>la azul</b> · la camiseta de tirantes → <b>la de tirantes</b>."],
      examples: [{ es: "¿Qué camiseta prefieres? — La de rayas.", fr: "Quel t-shirt préfères-tu ? — Celui à rayures." }],
    },
    {
      title: "Qué + nom / cuál / cuáles",
      explain: ["<b>¿Qué + nom?</b> pour choisir entre plusieurs objets du même type : ¿Qué falda prefieres?", "<b>¿Cuál / Cuáles?</b> quand on sait déjà de quel objet on parle, sans répéter le nom : Hay muchas camisas, ¿<b>cuál</b> compro?"],
      examples: [{ es: "¿Cuáles crees que son más elegantes?", fr: "Lesquels tu trouves plus élégants ?" }],
    },
    {
      title: "Cuesta / cuestan, et les grands nombres",
      explain: ["¿Cuánto <b>cuesta</b> este vestido? (singulier) · ¿Cuánto <b>cuestan</b> estos vestidos? (pluriel).", "100 = <b>cien</b>, 101 = <b>ciento uno</b>, 200 = <b>doscientos/as</b>, 500 = <b>quinientos</b>, 700 = <b>setecientos</b>, 900 = <b>novecientos</b>, 1000 = <b>mil</b>, 1 000 000 = <b>un millón</b>. Les centaines s'accordent : doscient<b>as</b> personas."],
      examples: [{ es: "Este ordenador cuesta quinientos cincuenta euros.", fr: "Cet ordinateur coûte 550 euros." }],
    },
    {
      title: "Exprimer une nécessité : tener que + infinitif",
      explain: ["<b>tener que</b> + infinitif = devoir, il faut que je… : tengo que, tienes que, tiene que…"],
      examples: [{ es: "Esta noche voy a una fiesta. Tengo que llevar un regalo.", fr: "Ce soir je vais à une fête. Je dois apporter un cadeau." }],
    },
    {
      title: "Les verbes preferir et ir",
      explain: ["<b>preferir</b> (e → ie) et <b>ir</b> (très irrégulier)."],
      table: { head: ["", "PREFERIR", "IR"], rows: [["yo", "pref<b>ie</b>ro", "<b>voy</b>"], ["tú", "pref<b>ie</b>res", "<b>vas</b>"], ["él / ella / usted", "pref<b>ie</b>re", "<b>va</b>"], ["nosotros/as", "preferimos", "<b>vamos</b>"], ["vosotros/as", "preferís", "<b>vais</b>"], ["ellos / ustedes", "pref<b>ie</b>ren", "<b>van</b>"]] },
      examples: [{ es: "Vamos al mercado. ¿Prefieres ir en autobús o a pie?", fr: "On va au marché. Tu préfères y aller en bus ou à pied ?" }],
    },
    {
      title: "Acheter dans un magasin",
      explain: ["Vendeur : ¿Qué desea? · Sí, tenemos estos · ¿Alguna cosa más? · Son 45 euros.", "Client : <b>Quería</b> unos zapatos · ¿Cuánto cuestan? · Son un poco caros, ¿tiene algo más barato? · <b>Me llevo</b> los negros · Aquí tiene."],
      examples: [{ es: "Quería una chaqueta de cuero. ¿La tiene en negro?", fr: "Je voudrais une veste en cuir. Vous l'avez en noir ?" }],
    },
  ],
  vocab: [
    { theme: "Couleurs", words: [{ es: "blanco/a", fr: "blanc" }, { es: "negro/a", fr: "noir" }, { es: "rojo/a", fr: "rouge" }, { es: "amarillo/a", fr: "jaune" }, { es: "azul", fr: "bleu" }, { es: "verde", fr: "vert" }, { es: "gris", fr: "gris" }, { es: "marrón", fr: "marron" }, { es: "naranja", fr: "orange" }, { es: "rosa", fr: "rose" }] },
    { theme: "Vêtements et accessoires", words: [{ es: "la camiseta", fr: "le t-shirt" }, { es: "la camisa", fr: "la chemise" }, { es: "el jersey", fr: "le pull" }, { es: "los pantalones", fr: "le pantalon" }, { es: "los vaqueros", fr: "le jean" }, { es: "la falda", fr: "la jupe" }, { es: "el vestido", fr: "la robe" }, { es: "la chaqueta", fr: "la veste" }, { es: "el abrigo", fr: "le manteau" }, { es: "los zapatos", fr: "les chaussures" }, { es: "las zapatillas deportivas", fr: "les baskets" }, { es: "el bolso", fr: "le sac à main" }, { es: "las gafas", fr: "les lunettes" }] },
    { theme: "Llevar et ir", words: [{ es: "llevar", fr: "porter / emporter" }, { es: "llevarse", fr: "prendre (acheter)" }, { es: "caro / barato", fr: "cher / bon marché" }, { es: "de rayas / de cuadros", fr: "à rayures / à carreaux" }, { es: "ir de viaje", fr: "partir en voyage" }, { es: "ir al gimnasio", fr: "aller à la salle de sport" }] },
  ],
  phonetics: { title: "La erre (r et rr)", explain: "Le « r » espagnol est roulé avec la pointe de la langue. Simple et léger entre deux voyelles (pero, caro). Fort et roulé plusieurs fois au début d'un mot, après n, l, s, et quand on écrit rr (rojo, perro, Enrique).", examples: ["pero / perro", "caro / carro", "rojo", "regalo", "marrón"] },
  culture: "Les « mercadillos » (marchés aux puces) sont très populaires en Espagne, comme El Rastro à Madrid le dimanche matin. En Amérique latine, on parle souvent en pesos ; on dit aussi « la remera » (Argentine) pour le t-shirt.",
};
