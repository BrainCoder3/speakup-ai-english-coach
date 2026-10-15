import type { Learn } from "../../learnTypes";

/** Unidad 8 — El barrio ideal. */
export const learn8: Omit<Learn, "quiz"> = {
  goal: "Imaginer et décrire un quartier idéal ; demander et donner des informations pour aller quelque part.",
  can: ["Décrire un village, un quartier ou une ville", "Demander où se trouve un lieu et expliquer le chemin", "Utiliser les quantificateurs (ningún, algún, poco, bastante, mucho, demasiado)", "Dire ce qui me plaît le plus et le moins"],
  theory: [
    {
      title: "Demander où se trouve un lieu",
      explain: ["<b>¿Hay un / algún</b> banco <b>(por) aquí cerca</b>? (on ne sait pas s'il y en a) · <b>¿El hospital está (por) aquí cerca?</b> (on sait qu'il existe) · <b>¿Dónde está</b> la parada de metro? · <b>¿Está muy lejos de aquí</b> el estadio?", "Rappel : <b>hay</b> + un / una / algún (existence) ; <b>estar</b> + el / la (localisation)."],
      examples: [{ es: "¿La biblioteca está en esta calle?", fr: "La bibliothèque est dans cette rue ?" }],
    },
    {
      title: "Indiquer la localisation et le chemin",
      explain: ["Distance : Está <b>a</b> (unos) 20 minutos / <b>a</b> 200 metros · Está muy lejos / bastante cerca / <b>aquí al lado</b> / <b>aquí mismo</b>.", "Position : <b>a la derecha (de)</b>, <b>a la izquierda (de)</b>, <b>al lado (de)</b>, <b>al final (de)</b>, <b>en la esquina</b>, <b>en</b> la plaza / la calle.", "Chemin : (Sigue) <b>todo recto</b> · (Gira) <b>la primera / la segunda a la derecha</b>."],
      examples: [{ es: "Hay una al final de la calle, a la derecha, al lado de un gimnasio.", fr: "Il y en a une au bout de la rue, à droite, à côté d'une salle de sport." }],
    },
    {
      title: "Les quantificateurs",
      explain: ["Noms indénombrables (toujours au singulier) : <b>no hay</b> tráfico, <b>poco/a</b>, <b>bastante</b>, <b>mucho/a</b>, <b>demasiado/a</b> tráfico / gente.", "Noms dénombrables : <b>ningún</b> parque / <b>ninguna</b> plaza (toujours avec <b>no</b>), <b>un / algún</b>, <b>varios/as</b>, <b>pocos/as</b>, <b>bastantes</b>, <b>muchos/as</b>, <b>demasiados/as</b>.", "Sans répéter le nom : <b>ninguno</b>, <b>uno</b>, <b>alguno</b> : ¿Hay algún gimnasio? — No, no hay ninguno."],
      examples: [{ es: "En mi barrio no hay ningún parque, ¿en tu barrio hay alguno?", fr: "Dans mon quartier il n'y a aucun parc, dans le tien il y en a un ?" }],
    },
    {
      title: "Mettre en valeur ce qu'on aime",
      explain: ["<b>Lo que más / menos me gusta … es</b> + nom singulier, <b>son</b> + nom pluriel, <b>es que</b> + phrase."],
      examples: [{ es: "Lo que más me gusta es la gente y lo que menos me gusta es que hay pocas zonas verdes.", fr: "Ce que j'aime le plus, ce sont les gens, et ce que j'aime le moins, c'est qu'il y a peu d'espaces verts." }],
    },
    {
      title: "Décrire un quartier",
      explain: ["<b>Es</b> ruidoso / tranquilo / moderno / antiguo / bonito / caro / barato · <b>Es un barrio con mucho encanto</b> · <b>Hay / Tiene</b> zonas verdes, calles peatonales · <b>Tiene</b> mucha vida · <b>Está bien / mal comunicado</b>."],
      examples: [{ es: "Es un barrio antiguo y tiene mucha vida nocturna.", fr: "C'est un vieux quartier et il y a beaucoup de vie nocturne." }],
    },
  ],
  vocab: [
    { theme: "Lieux et services", words: [{ es: "la farmacia", fr: "la pharmacie" }, { es: "el banco / el cajero automático", fr: "la banque / le distributeur" }, { es: "la parada de autobús", fr: "l'arrêt de bus" }, { es: "la estación de metro", fr: "la station de métro" }, { es: "el supermercado", fr: "le supermarché" }, { es: "la biblioteca", fr: "la bibliothèque" }, { es: "el polideportivo", fr: "le complexe sportif" }, { es: "la oficina de correos", fr: "la poste" }, { es: "la gasolinera", fr: "la station-service" }, { es: "el parque", fr: "le parc" }] },
    { theme: "Mobilier urbain", words: [{ es: "el semáforo", fr: "le feu" }, { es: "la farola", fr: "le lampadaire" }, { es: "la papelera", fr: "la poubelle (de rue)" }, { es: "el banco", fr: "le banc" }, { es: "la calle peatonal", fr: "la rue piétonne" }] },
    { theme: "Adjectifs", words: [{ es: "ruidoso/a", fr: "bruyant" }, { es: "tranquilo/a", fr: "calme" }, { es: "limpio/a", fr: "propre" }, { es: "sucio/a", fr: "sale" }, { es: "antiguo/a", fr: "ancien" }, { es: "caro / barato", fr: "cher / bon marché" }] },
  ],
  phonetics: { title: "Les diphtongues", explain: "Deux voyelles dans la même syllabe se prononcent ensemble, d'un seul coup de voix : bueno (bue-no), tienda (tien-da), ciudad (ciu-dad), aire, hoy. Ne les sépare pas en deux syllabes.", examples: ["bueno", "tienda", "ciudad", "nueve", "Europa"] },
  culture: "Dans les villes hispaniques, la vie se passe beaucoup dehors : places, terrasses, marchés. Beaucoup de quartiers ont leur « mercado » couvert et leur « plaza » centrale, lieu de rencontre des habitants.",
};
