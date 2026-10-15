import type { QuizQuestion } from "../../learnTypes";

/** Unidad 3 — quiz. */
export const quiz3: QuizQuestion[] = [
  { q: "Complète : « En Chile ___ muchas montañas. »", options: ["hay", "están", "son"], answer: 0, why: "Existence → hay (invariable)." },
  { q: "Complète : « Tikal ___ en Guatemala. »", options: ["hay", "es", "está"], answer: 2, why: "Localisation → estar." },
  { q: "Laquelle est correcte ?", options: ["Hay el lago precioso.", "Hay un lago precioso.", "Está un lago precioso."], answer: 1, why: "Hay ne s'utilise jamais avec el / la : hay un…" },
  { q: "Complète : « Perú ___ muy bonito. »", options: ["es", "está", "hay"], answer: 0, why: "Description avec un adjectif → ser." },
  { q: "Complète : « En esta ciudad hay ___ contaminación. »", options: ["mucho", "mucha", "muy"], answer: 1, why: "Mucho s'accorde avec le nom : contaminación est féminin → mucha." },
  { q: "Complète : « Las selvas son ___ húmedas. »", options: ["muy", "mucho", "muchas"], answer: 0, why: "Devant un adjectif : muy (invariable)." },
  { q: "Complète : « En Galicia llueve ___. »", options: ["muy", "mucho", "mucha"], answer: 1, why: "Après un verbe : mucho (invariable)." },
  { q: "« Le plus grand musée de Madrid » :", options: ["el museo más grande de Madrid", "el más museo grande en Madrid", "el museo grande más de Madrid"], answer: 0, why: "el + nom + más + adjectif + de." },
  { q: "Pour demander la capitale du Venezuela :", options: ["¿Qué es la capital de Venezuela?", "¿Cuál es la capital de Venezuela?", "¿Dónde es la capital?"], answer: 1, why: "Pour identifier un élément dans un ensemble : ¿Cuál es…?" },
  { q: "Complète : « ¿___ lenguas oficiales hay en Perú? »", options: ["Cuántos", "Cuántas", "Cuánto"], answer: 1, why: "Cuánto s'accorde : lenguas (fém. pluriel) → cuántas." },
  { q: "« Il fait chaud » :", options: ["Es calor", "Hace calor", "Hay calor"], answer: 1, why: "Le temps qu'il fait : hace calor / frío / viento." },
  { q: "« Está nublado » signifie…", options: ["Il pleut", "C'est nuageux", "Il neige"], answer: 1, why: "nublado = nuageux ; llueve = il pleut ; nieva = il neige." },
  { q: "Conjugue estar avec yo :", options: ["esto", "estoy", "está"], answer: 1, why: "estar : estoy, estás, está…" },
  { q: "Pourquoi « Perú » a un accent écrit ?", options: ["Il finit par une voyelle mais l'accent est sur la dernière syllabe", "Tous les pays ont un accent", "Pour le différencier de « peru »"], answer: 0, why: "Voyelle finale → normalement avant-dernière ; ici c'est la dernière, donc on l'écrit." },
];
