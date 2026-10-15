import type { Learn } from "../../learnTypes";

/** Unidad 1 — Nosotros y nosotras. */
export const learn1: Omit<Learn, "quiz"> = {
  goal: "Mieux connaître les autres : se présenter et demander des informations personnelles.",
  can: ["Donner mon nom, ma nationalité, mon âge, mon métier", "Poser les mêmes questions à quelqu'un (tú et usted)", "Accorder nationalités et professions au masculin et au féminin", "Compter jusqu'à 100"],
  theory: [
    {
      title: "Les pronoms sujets",
      explain: ["yo, <b>tú</b> (tu), él / ella / <b>usted</b> (vous de politesse), nosotros / nosotras, <b>vosotros / vosotras</b> (vous, en Espagne), ellos / ellas / <b>ustedes</b>.", "En Amérique latine, <b>ustedes</b> sert pour « vous » pluriel (poli ou non) et certains pays disent <b>vos</b> au lieu de tú. On omet souvent le pronom : la terminaison du verbe suffit (<b>Soy</b> de Dakar)."],
      examples: [{ es: "¿Usted es el señor García?", fr: "Vous êtes M. García ?" }, { es: "Somos de Abiyán.", fr: "Nous sommes d'Abidjan." }],
    },
    {
      title: "Les verbes ser, tener et llamarse",
      explain: ["<b>ser</b> = être (identité, nationalité, métier). <b>tener</b> = avoir (et l'âge !). <b>llamarse</b> = s'appeler (verbe pronominal : me, te, se…)."],
      table: { head: ["", "SER", "TENER", "LLAMARSE"], rows: [["yo", "<b>soy</b>", "<b>tengo</b>", "me llamo"], ["tú", "<b>eres</b>", "tienes", "te llamas"], ["él / ella / usted", "es", "tiene", "se llama"], ["nosotros/as", "somos", "tenemos", "nos llamamos"], ["vosotros/as", "sois", "tenéis", "os llamáis"], ["ellos / ellas / ustedes", "son", "tienen", "se llaman"]] },
      examples: [{ es: "Ella se llama Fatou, es senegalesa y tiene treinta años.", fr: "Elle s'appelle Fatou, elle est sénégalaise et a trente ans." }],
    },
    {
      title: "Le genre des nationalités",
      explain: ["Masculin en <b>-o</b> → féminin en <b>-a</b> : italiano / italiana, argentino / argentina.", "Masculin en consonne → on <b>ajoute -a</b> : francés / francesa, alemán / alemana, español / española (l'accent écrit disparaît).", "Invariables : en <b>-a</b>, <b>-e</b>, <b>-í</b> : belga, canadiense, estadounidense, marroquí."],
      examples: [{ es: "Pierre es francés y Claire es francesa.", fr: "Pierre est français et Claire est française." }, { es: "Mi amiga es canadiense.", fr: "Mon amie est canadienne." }],
    },
    {
      title: "Le genre des professions",
      explain: ["<b>-o → -a</b> : cocinero / cocinera, enfermero / enfermera. Consonne <b>+ a</b> : profesor / profesora.", "Invariables en <b>-ista</b> et <b>-ante / -ente</b> : periodista, deportista, estudiante, comercial. Aussi : policía, chófer, modelo."],
      examples: [{ es: "Mi madre es profesora y mi padre es periodista.", fr: "Ma mère est professeure et mon père est journaliste." }],
    },
    {
      title: "Parler de soi : les questions clés",
      explain: ["¿Cómo te llamas? / ¿Cómo se llama (usted)? · ¿Cuál es tu apellido? · ¿De dónde eres? · ¿Cuántos años tienes? · ¿A qué te dedicas? / ¿En qué trabajas? · ¿Tienes móvil / correo electrónico?", "Réponses : <b>Soy</b> estudiante · <b>Trabajo en</b> un banco · <b>Trabajo de / como</b> camarero."],
      examples: [{ es: "¿A qué se dedica usted? — Trabajo en una agencia de viajes.", fr: "Que faites-vous ? — Je travaille dans une agence de voyages." }],
    },
    {
      title: "Les nombres de 0 à 100",
      explain: ["16-19 : dieciséis… · 21-29 en un mot : <b>veintiuno, veintidós…</b> · à partir de 31 : <b>treinta y uno</b>, cuarenta y dos… · 100 = <b>cien</b>."],
      examples: [{ es: "Mi número es el seis, cuarenta y dos, treinta y uno.", fr: "Mon numéro est le 6 42 31." }],
    },
  ],
  vocab: [
    { theme: "Professions", words: [{ es: "científico/a", fr: "scientifique" }, { es: "cocinero/a", fr: "cuisinier" }, { es: "diseñador/a", fr: "designer" }, { es: "periodista", fr: "journaliste" }, { es: "traductor/a", fr: "traducteur" }, { es: "enfermero/a", fr: "infirmier" }, { es: "camarero/a", fr: "serveur" }, { es: "secretario/a", fr: "secrétaire" }, { es: "deportista", fr: "sportif" }, { es: "comercial", fr: "commercial" }] },
    { theme: "Lieux de travail", words: [{ es: "un hospital", fr: "un hôpital" }, { es: "un banco", fr: "une banque" }, { es: "una tienda", fr: "un magasin" }, { es: "una empresa", fr: "une entreprise" }, { es: "una escuela", fr: "une école" }, { es: "un taller", fr: "un atelier, un garage" }, { es: "un despacho", fr: "un bureau, un cabinet" }] },
    { theme: "Données personnelles", words: [{ es: "el nombre", fr: "le prénom" }, { es: "el apellido", fr: "le nom de famille" }, { es: "la edad", fr: "l'âge" }, { es: "el móvil / el celular", fr: "le portable" }, { es: "el correo electrónico", fr: "l'e-mail" }] },
  ],
  phonetics: { title: "Les voyelles", explain: "L'espagnol n'a que 5 voyelles, toujours prononcées pareil et bien nettes : a, e, i, o, u. Le « u » se dit « ou », le « e » se dit « é ». Pas de voyelles nasales comme en français : « un » se dit « oun ».", examples: ["mesa", "cine", "uno", "Perú", "alemán"] },
  culture: "Les Hispaniques ont souvent deux noms de famille : celui du père puis celui de la mère (Gabriel García Márquez). Pour saluer, on se fait deux bises en Espagne, et une seule dans la plupart des pays d'Amérique latine.",
};
