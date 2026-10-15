import type { Practice } from "../../learnTypes";

/** Unidad 4 — written practice. */
export const practice4: Practice = {
  drills: [
    { s: "___ camiseta es muy bonita. (ce t-shirt-ci)", a: ["Esta", "esta"], hint: "démonstratif", why: "Camiseta est féminin singulier → esta." },
    { s: "___ zapatos son caros.", a: ["Estos", "estos"], hint: "démonstratif", why: "Zapatos masculin pluriel → estos." },
    { s: "¿Qué es ___? (chose inconnue)", a: ["esto"], hint: "neutre", why: "Pour une chose sans nom : esto." },
    { s: "¿Cuánto ___ este vestido?", a: ["cuesta"], hint: "costar", why: "Un seul objet → cuesta." },
    { s: "¿Cuánto ___ estas gafas?", a: ["cuestan"], hint: "costar", why: "Gafas est pluriel → cuestan." },
    { s: "Tengo ___ comprar un regalo.", a: ["que"], hint: "obligation", why: "tener que + infinitif." },
    { s: "Yo ___ la falda azul.", a: ["prefiero"], hint: "preferir", why: "preferir : e → ie (prefiero)." },
    { s: "Nosotros ___ el rojo.", a: ["preferimos"], hint: "preferir", why: "Pas de diphtongue avec nosotros." },
    { s: "Yo ___ al mercado los domingos.", a: ["voy"], hint: "ir", why: "ir, yo : voy." },
    { s: "¿Tú ___ de compras hoy?", a: ["vas"], hint: "ir", why: "ir, tú : vas." },
    { s: "Ellos ___ a la playa.", a: ["van"], hint: "ir", why: "ir, ellos : van." },
    { s: "Quiero la camiseta azul y mi hermana quiere ___ roja.", a: ["la"], hint: "sans répéter le nom", why: "la camiseta roja → la roja." },
    { s: "¿___ falda prefieres?", a: ["Qué"], hint: "+ nom", why: "Qué + nom pour choisir." },
    { s: "500 = ___", a: ["quinientos"], hint: "nombre", why: "500 = quinientos." },
    { s: "100 = ___", a: ["cien"], hint: "nombre", why: "100 tout seul = cien." },
    { s: "Unos pantalones ___ (noirs).", a: ["negros"], hint: "accord", why: "Pantalones masculin pluriel → negros." },
  ],
  translate: [
    { fr: "Combien coûte ce pull ?", es: ["¿Cuánto cuesta este jersey?"] },
    { fr: "Je voudrais des chaussures noires.", es: ["Quería unos zapatos negros.", "Quiero unos zapatos negros."] },
    { fr: "Je dois acheter un cadeau pour ma mère.", es: ["Tengo que comprar un regalo para mi madre."] },
    { fr: "Je préfère la jupe rouge.", es: ["Prefiero la falda roja."] },
    { fr: "Nous allons au marché.", es: ["Vamos al mercado.", "Nosotros vamos al mercado."] },
    { fr: "C'est un peu cher. Vous avez quelque chose de moins cher ?", es: ["Es un poco caro. ¿Tiene algo más barato?"] },
    { fr: "Je prends les bleues. (les chaussures)", es: ["Me llevo los azules."] },
    { fr: "Ces sandales coûtent quarante euros.", es: ["Estas sandalias cuestan cuarenta euros.", "Estas sandalias cuestan 40 euros."] },
  ],
};
