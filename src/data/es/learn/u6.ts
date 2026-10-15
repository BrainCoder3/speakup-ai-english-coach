import type { Learn } from "../../learnTypes";

/** Unidad 6 — Día a día. */
export const learn6: Omit<Learn, "quiz"> = {
  goal: "Connaître les habitudes des gens : parler de sa journée, de la fréquence et de l'heure.",
  can: ["Demander et dire l'heure", "Raconter ma journée dans l'ordre (primero, después, luego)", "Conjuguer les verbes pronominaux et irréguliers du présent", "Dire à quelle fréquence je fais quelque chose"],
  theory: [
    {
      title: "L'heure",
      explain: ["<b>¿Qué hora es?</b> — <b>Es la una</b> (singulier) / <b>Son las</b> dos, tres… · <b>y cinco, y cuarto, y media</b> · <b>menos veinte, menos cuarto</b> · <b>en punto</b> (pile).", "<b>¿A qué hora…?</b> — <b>A la</b> una / <b>A las</b> seis de la mañana, de la tarde, de la noche."],
      examples: [{ es: "Son las ocho menos veinte.", fr: "Il est huit heures moins vingt." }, { es: "¿A qué hora llega el avión? — A las diez de la noche.", fr: "À quelle heure arrive l'avion ? — À dix heures du soir." }],
    },
    {
      title: "Les verbes pronominaux",
      explain: ["Ils se conjuguent avec <b>me, te, se, nos, os, se</b> : levantarse, ducharse, acostarse, vestirse, despertarse.", "Le pronom s'accorde avec le sujet : (Yo) <b>me</b> ducho siempre antes de acostar<b>me</b>."],
      table: { head: ["", "LEVANTARSE"], rows: [["yo", "<b>me</b> levanto"], ["tú", "<b>te</b> levantas"], ["él / ella / usted", "<b>se</b> levanta"], ["nosotros/as", "<b>nos</b> levantamos"], ["vosotros/as", "<b>os</b> levantáis"], ["ellos / ustedes", "<b>se</b> levantan"]] },
      examples: [{ es: "Nos levantamos tarde los domingos.", fr: "Nous nous levons tard le dimanche." }],
    },
    {
      title: "Les verbes irréguliers du présent",
      explain: ["La voyelle du radical change à <b>toutes les personnes sauf nosotros et vosotros</b> : <b>o → ue</b> (volver, dormir, poder, acostarse) · <b>e → ie</b> (empezar, querer, preferir, despertarse) · <b>e → i</b> (vestirse, pedir, servir).", "Certains verbes ont un <b>-go</b> à la 1re personne : salir → <b>salgo</b>, hacer → <b>hago</b>, poner → <b>pongo</b>."],
      table: { head: ["", "VOLVER (o>ue)", "EMPEZAR (e>ie)", "VESTIRSE (e>i)", "SALIR"], rows: [["yo", "v<b>ue</b>lvo", "emp<b>ie</b>zo", "me v<b>i</b>sto", "sal<b>go</b>"], ["tú", "v<b>ue</b>lves", "emp<b>ie</b>zas", "te v<b>i</b>stes", "sales"], ["él / ella", "v<b>ue</b>lve", "emp<b>ie</b>za", "se v<b>i</b>ste", "sale"], ["nosotros", "volvemos", "empezamos", "nos vestimos", "salimos"], ["vosotros", "volvéis", "empezáis", "os vestís", "salís"], ["ellos", "v<b>ue</b>lven", "emp<b>ie</b>zan", "se v<b>i</b>sten", "salen"]] },
      examples: [{ es: "Duermo ocho horas y empiezo a trabajar a las nueve.", fr: "Je dors huit heures et je commence à travailler à neuf heures." }],
    },
    {
      title: "Ordonner les actions",
      explain: ["<b>Primero</b>… <b>después</b>… <b>luego</b>… · <b>antes de</b> + infinitif · <b>después de</b> + infinitif."],
      examples: [{ es: "Me lavo los dientes después de comer.", fr: "Je me brosse les dents après avoir mangé." }],
    },
    {
      title: "La fréquence",
      explain: ["(Casi) <b>siempre</b> · (casi) <b>todos los</b> días / <b>todas las</b> semanas · <b>normalmente</b> · <b>a menudo</b> · <b>a veces</b> · <b>una vez a la</b> semana / <b>al</b> mes · (casi) <b>nunca</b>.", "Jours : <b>el</b> lunes = ce lundi-là ; <b>los</b> lunes = tous les lundis. Pas d'article pour dire quel jour on est : Hoy es lunes."],
      examples: [{ es: "Los viernes por la noche salgo con mis compañeros.", fr: "Le vendredi soir je sors avec mes collègues." }],
    },
  ],
  vocab: [
    { theme: "Jours et moments", words: [{ es: "lunes", fr: "lundi" }, { es: "martes", fr: "mardi" }, { es: "miércoles", fr: "mercredi" }, { es: "jueves", fr: "jeudi" }, { es: "viernes", fr: "vendredi" }, { es: "sábado", fr: "samedi" }, { es: "domingo", fr: "dimanche" }, { es: "el fin de semana", fr: "le week-end" }, { es: "por la mañana", fr: "le matin" }, { es: "al mediodía", fr: "à midi" }, { es: "por la tarde", fr: "l'après-midi" }, { es: "por la noche", fr: "le soir / la nuit" }] },
    { theme: "Activités quotidiennes", words: [{ es: "levantarse", fr: "se lever" }, { es: "ducharse", fr: "se doucher" }, { es: "lavarse los dientes", fr: "se brosser les dents" }, { es: "vestirse", fr: "s'habiller" }, { es: "desayunar", fr: "prendre le petit-déjeuner" }, { es: "comer / almorzar", fr: "déjeuner" }, { es: "cenar", fr: "dîner" }, { es: "hacer la cama", fr: "faire son lit" }, { es: "salir del trabajo", fr: "sortir du travail" }, { es: "acostarse", fr: "se coucher" }] },
  ],
  phonetics: { title: "L'intonation de l'énumération", explain: "Quand on énumère, la voix monte légèrement sur chaque élément pour montrer que la liste continue, puis descend sur le dernier, après « y ».", examples: ["Me levanto, me ducho, desayuno y salgo.", "Lunes, martes y miércoles."] },
  culture: "En Espagne, les horaires sont tardifs : on déjeune vers 14 h et on dîne vers 21 h-22 h. Beaucoup de magasins ferment l'après-midi pour la pause. En Amérique latine, on mange en général plus tôt.",
};
