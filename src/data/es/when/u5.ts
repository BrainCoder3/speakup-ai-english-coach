import type { WhenCard } from "../../learnTypes";

/** Unidad 5 — « Quand utiliser quoi ? ». */
export const when5: WhenCard[] = [
  {
    title: "Gusta ou gustan ?",
    rows: [
      { use: "gusta", when: "+ un nom singulier ou un verbe à l'infinitif", ex: "Me gusta el fútbol. Me gusta bailar." },
      { use: "gustan", when: "+ un nom pluriel", ex: "Me gustan los perros." },
      { use: "me / te / le / nos / os / les", when: "indique À QUI ça plaît (jamais « yo gusto »)", ex: "A mi hermana le gusta la salsa." },
    ],
    trap: "✗ Me gusta los libros / Yo gusto el cine → ✓ Me gustan los libros / Me gusta el cine",
  },
  {
    title: "También, tampoco, sí ou no ?",
    rows: [
      { use: "a mí también", when: "même avis qu'une phrase POSITIVE", ex: "Me encanta el jazz. — A mí también." },
      { use: "a mí tampoco", when: "même avis qu'une phrase NÉGATIVE", ex: "No me gusta el frío. — A mí tampoco." },
      { use: "a mí no", when: "avis contraire à une phrase positive", ex: "Me gusta el café. — A mí no." },
      { use: "a mí sí", when: "avis contraire à une phrase négative", ex: "No me gusta el café. — A mí sí." },
    ],
    trap: "✗ No me gusta. — A mí también. → ✓ A mí tampoco.",
  },
  {
    title: "Es, tiene ou parece ? (décrire quelqu'un)",
    rows: [
      { use: "es + adjectif", when: "physique ou caractère", ex: "Es alto y muy simpático." },
      { use: "tiene + el / los + nom", when: "cheveux, yeux, barbe…", ex: "Tiene el pelo rizado y los ojos verdes." },
      { use: "parece + adjectif", when: "impression (on ne le connaît pas bien)", ex: "Parece bastante tímida." },
    ],
    trap: "✗ Tiene su pelo largo / Es pelo largo → ✓ Tiene el pelo largo",
  },
];
