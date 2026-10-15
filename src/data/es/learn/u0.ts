import type { Learn } from "../../learnTypes";

/** Unidad 0 — En el aula: theory explained in French. */
export const learn0: Omit<Learn, "quiz"> = {
  goal: "Apprendre à se présenter, à poser des questions en classe, à saluer et à prendre congé.",
  can: ["Dire comment je m'appelle et demander le nom de quelqu'un", "Saluer selon le moment de la journée et dire au revoir", "Compter de 1 à 10 et épeler un mot", "Demander comment on dit, écrit ou prononce un mot"],
  theory: [
    {
      title: "Se présenter : le verbe llamarse",
      explain: ["En espagnol on dit « je m'appelle » avec <b>me llamo</b> (du verbe <b>llamarse</b>).", "Pour demander : <b>¿Cómo te llamas?</b> (tu) — et pour répondre à son tour : <b>¿Y tú?</b>"],
      examples: [{ es: "Hola, me llamo Ana. ¿Y tú?", fr: "Salut, je m'appelle Ana. Et toi ?" }, { es: "Me llamo Moussa.", fr: "Je m'appelle Moussa." }],
    },
    {
      title: "Saluer et prendre congé",
      explain: ["<b>Hola</b> = salut / bonjour (à toute heure). <b>Buenos días</b> = le matin, <b>Buenas tardes</b> = l'après-midi, <b>Buenas noches</b> = le soir et la nuit.", "<b>¿Qué tal?</b> / <b>¿Cómo estás?</b> = ça va ? — Pour partir : <b>Adiós</b>, <b>Hasta luego</b> (à plus tard), <b>Hasta pronto</b> (à bientôt), <b>Chau</b> (Amérique latine)."],
      examples: [{ es: "Buenas tardes, ¿cómo estás?", fr: "Bonjour (l'après-midi), comment vas-tu ?" }, { es: "¡Hasta luego!", fr: "À plus tard !" }],
    },
    {
      title: "Les questions utiles en classe",
      explain: ["<b>¿Cómo se dice … en español?</b> = comment dit-on … ? · <b>¿Qué significa …?</b> = que signifie … ?", "<b>¿Cómo se escribe …?</b> = comment ça s'écrit ? · <b>¿Cómo se pronuncia …?</b> · <b>¿Puedes repetir, por favor?</b> · <b>¿Puedes hablar más alto / más despacio?</b>"],
      examples: [{ es: "¿Cómo se escribe ventana? ¿Con be o con uve?", fr: "Comment s'écrit « ventana » ? Avec un b ou un v ?" }, { es: "¿Qué significa vale?", fr: "Que signifie « vale » ? (= d'accord)" }],
    },
    {
      title: "L'alphabet espagnol",
      explain: ["Il a 27 lettres : en plus de l'alphabet français, il y a le <b>ñ</b> (eñe) : España, niño.", "Noms des lettres : a, be, ce, de, e, efe, ge, <b>hache</b> (h, muette), i, <b>jota</b> (j), ca, ele, eme, ene, <b>eñe</b>, o, pe, cu, <b>erre</b>, ese, te, u, <b>uve</b> (v), uve doble (w), equis, ye (y), <b>zeta</b>."],
      examples: [{ es: "Ese, a, ere, a: Sara.", fr: "S-A-R-A : Sara." }, { es: "El nombre Javier se escribe con jota.", fr: "Le prénom Javier s'écrit avec un j." }],
    },
    {
      title: "Les nombres de 1 à 10",
      explain: ["<b>uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez</b> (et <b>cero</b> = 0)."],
      examples: [{ es: "Página cinco, actividad siete.", fr: "Page cinq, activité sept." }],
    },
  ],
  vocab: [
    { theme: "Les objets de la classe", words: [{ es: "la silla", fr: "la chaise" }, { es: "la mesa", fr: "la table" }, { es: "la pizarra", fr: "le tableau" }, { es: "el libro", fr: "le livre" }, { es: "el cuaderno", fr: "le cahier" }, { es: "el bolígrafo", fr: "le stylo" }, { es: "la mochila", fr: "le sac à dos" }, { es: "el estuche", fr: "la trousse" }, { es: "el ordenador", fr: "l'ordinateur" }, { es: "la tableta", fr: "la tablette" }, { es: "la hoja de papel", fr: "la feuille" }, { es: "la papelera", fr: "la corbeille" }, { es: "el proyector", fr: "le projecteur" }] },
    { theme: "Petits mots de la classe", words: [{ es: "gracias", fr: "merci" }, { es: "por favor", fr: "s'il te plaît" }, { es: "vale", fr: "d'accord" }, { es: "lo siento", fr: "désolé" }, { es: "la página", fr: "la page" }, { es: "la actividad", fr: "l'activité" }] },
  ],
  phonetics: {
    title: "L'intonation des questions avec un mot interrogatif",
    explain: "Dans une question qui commence par un mot interrogatif (¿Cómo…?, ¿Qué…?), la voix monte sur ce mot puis DESCEND à la fin. La réponse est dite avec une intonation descendante, simple.",
    examples: ["¿Cómo te llamas?", "¿Qué significa vale?", "¿Cómo se dice book en español?"],
  },
  culture: "On parle espagnol dans 21 pays, dont la Guinée équatoriale en Afrique. « Vale » (d'accord) est très typique d'Espagne ; en Amérique latine on entend plutôt « dale », « bueno » ou « está bien ».",
};
