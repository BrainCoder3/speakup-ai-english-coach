import type { Practice } from "../../learnTypes";

/** Unidad 8 — written practice. */
export const practice8: Practice = {
  drills: [
    { s: "En mi barrio no hay ___ cine.", a: ["ningún"], hint: "aucun (masc.)", why: "No hay ningún + nom masculin." },
    { s: "No hay ___ farmacia.", a: ["ninguna"], hint: "aucune (fém.)", why: "No hay ninguna + nom féminin." },
    { s: "¿Hay ___ banco por aquí? (un, dans une question)", a: ["algún"], hint: "question", why: "Dans les questions : algún." },
    { s: "¿Hay algún gimnasio? — No, no hay ___.", a: ["ninguno"], hint: "sans le nom", why: "Sans répéter le nom : ninguno." },
    { s: "Hay ___ tráfico. (trop)", a: ["demasiado"], hint: "masc. sing.", why: "Tráfico → demasiado." },
    { s: "Hay ___ zonas verdes. (peu de)", a: ["pocas"], hint: "fém. pl.", why: "Zonas → pocas." },
    { s: "Hay ___ tiendas. (assez de)", a: ["bastantes"], hint: "pluriel", why: "Bastante + nom pluriel → bastantes." },
    { s: "¿Dónde ___ la estación de metro?", a: ["está"], hint: "localisation", why: "Lieu connu → está." },
    { s: "La farmacia está ___ cinco minutos.", a: ["a"], hint: "distance", why: "estar a + distance." },
    { s: "Está ___ final de la calle.", a: ["al"], hint: "position", why: "al final de…" },
    { s: "El banco está al ___ del supermercado. (à côté)", a: ["lado"], hint: "position", why: "al lado de = à côté de." },
    { s: "Sigue todo ___. (tout droit)", a: ["recto"], hint: "direction", why: "todo recto = tout droit." },
    { s: "Gira la segunda a la ___. (à gauche)", a: ["izquierda"], hint: "direction", why: "a la izquierda = à gauche." },
    { s: "Lo que más me gusta ___ los parques.", a: ["son"], hint: "accord", why: "Nom pluriel → son." },
    { s: "Lo que menos me gusta es ___ hay mucho ruido.", a: ["que"], hint: "+ phrase", why: "es que + phrase." },
  ],
  translate: [
    { fr: "Pardon, y a-t-il une pharmacie près d'ici ?", es: ["Perdona, ¿hay alguna farmacia por aquí cerca?", "Perdone, ¿hay alguna farmacia por aquí cerca?", "Perdona, ¿hay una farmacia por aquí cerca?"] },
    { fr: "Dans mon quartier il n'y a aucun parc.", es: ["En mi barrio no hay ningún parque."] },
    { fr: "La station de métro est à deux cents mètres.", es: ["La estación de metro está a doscientos metros.", "La estación de metro está a 200 metros."] },
    { fr: "Continue tout droit et tourne à droite.", es: ["Sigue todo recto y gira a la derecha."] },
    { fr: "Il y a trop de voitures et peu d'arbres.", es: ["Hay demasiados coches y pocos árboles."] },
    { fr: "Ce que j'aime le plus, ce sont les gens.", es: ["Lo que más me gusta es la gente."] },
    { fr: "Mon quartier est calme et bien desservi.", es: ["Mi barrio es tranquilo y está bien comunicado."] },
    { fr: "La banque est à côté de l'école.", es: ["El banco está al lado de la escuela."] },
  ],
};
