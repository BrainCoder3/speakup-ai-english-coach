import type { PlanDay } from "../types";

export const d09: PlanDay = {
  day: 9, title: "Conditionnels 0, 1 et 2", level: "B2",
  grammar: {
    explain: [
      "<b>Type 0</b> (vérité) : If + présent, présent → If you heat ice, it <b>melts</b>.",
      "<b>Type 1</b> (réel, possible) : If + présent, <b>will</b> + verbe → If it rains, we'<b>ll stay</b> home. (JAMAIS will après if.)",
      "<b>Type 2</b> (irréel, imaginaire) : If + <b>prétérit</b>, <b>would</b> + verbe → If I <b>had</b> more time, I <b>would travel</b>. Avec be : If I <b>were</b> you…",
      "<b>unless</b> = if not : We'll miss the bus <b>unless</b> we hurry.",
    ],
    examples: [
      { en: "If I were you, I'd take the job.", fr: "Si j'étais toi, j'accepterais le poste." },
      { en: "If you need help, just call me.", fr: "Si tu as besoin d'aide, appelle-moi." },
      { en: "What would you do if you won the lottery?", fr: "Que ferais-tu si tu gagnais au loto ?" },
    ],
    exercises: [
      { s: "If it ___ (rain) tomorrow, we'll cancel the trip.", a: ["rains"], why: "Type 1 : if + présent." },
      { s: "If I ___ (have) a car, I would drive to work.", a: ["had"], why: "Type 2 : if + prétérit." },
      { s: "If I were rich, I ___ (buy) a house by the sea.", a: ["would buy", "'d buy"], why: "Type 2 : would + verbe." },
      { s: "If you ___ (mix) red and blue, you get purple.", a: ["mix"], why: "Type 0 : présent / présent." },
      { s: "If I ___ (be) you, I'd apologise.", a: ["were", "was"], why: "If I were you (were préféré)." },
      { s: "We'll be late ___ we leave now.", a: ["unless"], why: "unless = if not." },
      { s: "She ___ (pass) the exam if she studies hard.", a: ["will pass", "'ll pass"], why: "Type 1 : will + verbe." },
      { s: "What ___ you ___ (do) if you lost your job?", a: ["would / do"], why: "Hypothèse → would + verbe." },
    ],
  },
  topic: "Environnement",
  vocab: [
    { en: "climate change", fr: "le changement climatique", ex: "Climate change affects everyone." },
    { en: "carbon footprint", fr: "empreinte carbone", ex: "Flying increases your carbon footprint." },
    { en: "renewable energy", fr: "énergie renouvelable", ex: "Solar power is a renewable energy." },
    { en: "to cut emissions", fr: "réduire les émissions", ex: "Countries must cut emissions." },
    { en: "sustainable", fr: "durable", ex: "We need a more sustainable lifestyle." },
    { en: "to go green", fr: "devenir écolo", ex: "Many companies are going green." },
    { en: "waste", fr: "déchets, gaspillage", ex: "We produce too much plastic waste." },
    { en: "drought", fr: "sécheresse", ex: "The drought destroyed the harvest." },
    { en: "to raise awareness", fr: "sensibiliser", ex: "The campaign aims to raise awareness." },
    { en: "to tackle a problem", fr: "s'attaquer à un problème", ex: "We must tackle pollution now." },
    { en: "endangered species", fr: "espèces menacées", ex: "Elephants are an endangered species." },
    { en: "deforestation", fr: "déforestation", ex: "Deforestation is a huge threat." },
  ],
  shadow: [
    "If we don't cut emissions now, climate change will get much worse.",
    "If I were a politician, I would invest massively in renewable energy.",
    "Unless we tackle plastic waste, the oceans will suffer even more.",
    "We need to raise awareness and make our lifestyles more sustainable.",
  ],
  speak: { prompt: "What would you do if you were the president of your country for one year, to fight climate change? And what will happen if nothing changes?", minWords: 120 },
  write: { prompt: "Write an opinion paragraph: 'If every person changed one habit, would it really make a difference for the planet?' Use type 1 and type 2 conditionals.", minWords: 120 },
  input: 3,
};
