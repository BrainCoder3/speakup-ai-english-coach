import type { Practice } from "../../learnTypes";

/** Unidad 2 — written practice. */
export const practice2: Practice = {
  drills: [
    { s: "___ problema es difícil.", a: ["el", "El"], hint: "article", why: "Problema est masculin : el problema." },
    { s: "___ foto es bonita.", a: ["la", "La"], hint: "article", why: "Foto (fotografía) est féminin : la foto." },
    { s: "Mañana voy ___ cine.", a: ["al"], hint: "a + el", why: "a + el = al." },
    { s: "Es el libro ___ profesor.", a: ["del"], hint: "de + el", why: "de + el = del." },
    { s: "Yo ___ inglés y francés.", a: ["hablo"], hint: "hablar", why: "-ar, yo : hablo." },
    { s: "Nosotros ___ en un restaurante.", a: ["comemos"], hint: "comer", why: "-er, nosotros : comemos." },
    { s: "Ellos ___ mensajes.", a: ["escriben"], hint: "escribir", why: "-ir, ellos : escriben." },
    { s: "¿Tú ___ el periódico?", a: ["lees"], hint: "leer", why: "-er, tú : lees." },
    { s: "Vosotros ___ en Madrid.", a: ["vivís"], hint: "vivir", why: "-ir, vosotros : vivís." },
    { s: "Yo ___ deporte los sábados.", a: ["hago"], hint: "hacer", why: "hacer est irrégulier à yo : hago." },
    { s: "¿Qué ___ hacer tú este fin de semana?", a: ["quieres"], hint: "querer", why: "querer : e → ie (quieres)." },
    { s: "Nosotros ___ viajar a Cuba.", a: ["queremos"], hint: "querer", why: "Pas de diphtongue avec nosotros : queremos." },
    { s: "Estudio español ___ quiero vivir en Chile.", a: ["porque"], hint: "cause + verbe", why: "porque + verbe conjugué." },
    { s: "Estudio español ___ trabajar en México.", a: ["para"], hint: "but + infinitif", why: "para + infinitif = but." },
    { s: "Estudio español ___ mi novia.", a: ["por"], hint: "cause + nom", why: "por + nom = cause." },
    { s: "¿___ estudias español?", a: ["Por qué", "por qué"], hint: "question « pourquoi »", why: "La question : ¿Por qué? (deux mots, accent)." },
  ],
  translate: [
    { fr: "J'étudie l'espagnol parce que je veux voyager.", es: ["Estudio español porque quiero viajar."] },
    { fr: "J'apprends l'espagnol pour travailler en Espagne.", es: ["Aprendo español para trabajar en España.", "Estudio español para trabajar en España."] },
    { fr: "Nous lisons des livres et nous écoutons de la musique.", es: ["Leemos libros y escuchamos música."] },
    { fr: "Le week-end je fais du sport.", es: ["Los fines de semana hago deporte.", "El fin de semana hago deporte."] },
    { fr: "Pourquoi étudies-tu l'espagnol ?", es: ["¿Por qué estudias español?"] },
    { fr: "Je parle français, anglais et un peu d'espagnol.", es: ["Hablo francés, inglés y un poco de español."] },
    { fr: "Ils veulent aller au cinéma.", es: ["Quieren ir al cine.", "Ellos quieren ir al cine."] },
    { fr: "Le problème est la langue.", es: ["El problema es el idioma.", "El problema es la lengua."] },
  ],
};
