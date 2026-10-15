import type { Practice } from "../../learnTypes";

/** Unidad 5 — written practice. */
export const practice5: Practice = {
  drills: [
    { s: "Me ___ el cine.", a: ["gusta"], hint: "gustar", why: "El cine (singulier) → gusta." },
    { s: "Me ___ las películas de acción.", a: ["gustan"], hint: "gustar", why: "Las películas (pluriel) → gustan." },
    { s: "Nos ___ bailar.", a: ["gusta"], hint: "gustar + verbe", why: "+ infinitif → gusta." },
    { s: "A mi padre ___ gusta el fútbol.", a: ["le"], hint: "pronom", why: "A él → le gusta." },
    { s: "¿A ti ___ gusta el jazz?", a: ["te"], hint: "pronom", why: "A ti → te gusta." },
    { s: "A mis amigos ___ encanta la salsa.", a: ["les"], hint: "pronom", why: "A ellos → les." },
    { s: "Me encanta el rock. — A mí ___. (moi aussi)", a: ["también"], hint: "accord", why: "Phrase positive + même avis → también." },
    { s: "No me gusta el frío. — A mí ___. (moi non plus)", a: ["tampoco"], hint: "accord", why: "Phrase négative + même avis → tampoco." },
    { s: "No me gusta nada el reguetón. — A mí ___. (moi si)", a: ["sí"], hint: "désaccord", why: "Contre une phrase négative → a mí sí." },
    { s: "___ hermanos viven en Abiyán. (mes)", a: ["Mis", "mis"], hint: "possessif", why: "Pluriel → mis." },
    { s: "Ana vive con ___ padres. (ses)", a: ["sus"], hint: "possessif", why: "Padres pluriel → sus." },
    { s: "Mi hermana tiene ___ pelo largo.", a: ["el"], hint: "article", why: "On dit tener el pelo…" },
    { s: "Mi abuelo es ___ (chauve).", a: ["calvo"], hint: "physique", why: "Calvo = chauve." },
    { s: "Mi profesora es muy ___ (sympathique).", a: ["simpática"], hint: "accord", why: "Féminin : simpática (accent)." },
    { s: "¿___ te llamas? (comment)", a: ["Cómo"], hint: "interrogatif", why: "Question → accent : ¿Cómo?" },
    { s: "A ___ me gusta el té. (moi)", a: ["mí"], hint: "pronom tonique", why: "mí (moi) avec accent ; mi = mon." },
  ],
  translate: [
    { fr: "J'adore la musique africaine.", es: ["Me encanta la música africana."] },
    { fr: "Je n'aime pas du tout les lundis.", es: ["No me gustan nada los lunes."] },
    { fr: "Mon frère est grand et il a les yeux verts.", es: ["Mi hermano es alto y tiene los ojos verdes."] },
    { fr: "Mes parents sont très sympathiques.", es: ["Mis padres son muy simpáticos."] },
    { fr: "Elle aime beaucoup lire.", es: ["Le gusta mucho leer.", "A ella le gusta mucho leer."] },
    { fr: "Je n'aime pas le football. — Moi non plus.", es: ["No me gusta el fútbol. — A mí tampoco.", "No me gusta el fútbol. A mí tampoco."] },
    { fr: "Ma meilleure amie est un peu timide.", es: ["Mi mejor amiga es un poco tímida."] },
    { fr: "Ils ont l'air très sérieux.", es: ["Parecen muy serios."] },
  ],
};
