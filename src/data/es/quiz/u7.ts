import type { QuizQuestion } from "../../learnTypes";

/** Unidad 7 — quiz. */
export const quiz7: QuizQuestion[] = [
  { q: "Pour demander les ingrédients d'un plat :", options: ["¿Qué tiene en el plato?", "¿Qué lleva?", "¿Qué pone?"], answer: 1, why: "¿Qué lleva el guacamole?" },
  { q: "« Omelette de pommes de terre » :", options: ["tortilla con patatas", "tortilla de patatas", "tortilla a patatas"], answer: 1, why: "de = ingrédient principal." },
  { q: "« Viande avec des frites » :", options: ["carne de patatas fritas", "carne con patatas fritas", "carne en patatas fritas"], answer: 1, why: "con = accompagnement." },
  { q: "« Je mets / je sers » (poner, yo) :", options: ["pono", "pongo", "ponio"], answer: 1, why: "poner : yo pongo." },
  { q: "« J'apporte » (traer, yo) :", options: ["traigo", "traio", "trago"], answer: 0, why: "traer : yo traigo." },
  { q: "« El café, ¿cómo ___ tomas? »", options: ["la", "lo", "le"], answer: 1, why: "Café est masculin singulier → lo." },
  { q: "« Las patatas, ¿cómo ___ comes? »", options: ["los", "las", "les"], answer: 1, why: "Patatas est féminin pluriel → las." },
  { q: "« ¿Esta sopa lleva cebolla? — No, no ___. »", options: ["la lleva", "lleva", "lo lleva"], answer: 1, why: "Nom sans article (cebolla) → pas de pronom." },
  { q: "Au restaurant, pour l'entrée tu dis…", options: ["De primero…", "Por primero…", "En primero…"], answer: 0, why: "De primero…, de segundo…, de postre…" },
  { q: "Pour demander l'addition :", options: ["La factura, por favor.", "La cuenta, por favor.", "El pago, por favor."], answer: 1, why: "La cuenta, por favor / ¿Cuánto es?" },
  { q: "« A la plancha » signifie…", options: ["frit", "grillé (sur une plaque)", "cru"], answer: 1, why: "A la plancha = cuit sur une plaque chaude." },
  { q: "Dans un restaurant, on s'adresse au client avec…", options: ["tú", "usted", "vosotros"], answer: 1, why: "Dans les lieux publics, on utilise usted / ustedes." },
  { q: "Le « j » de « jamón » se prononce…", options: ["comme le j français", "raclé dans la gorge", "comme un y"], answer: 1, why: "La jota est un son guttural raclé." },
];
