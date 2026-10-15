import type { SpeakingTopic } from "../../types";

/** Long speaking tasks, units 0-4. "…" marks where your own words go. */
export const speakingEsA: Record<string, SpeakingTopic[]> = {
  es0: [
    {
      title: "Me presento", minWords: 20, mustUse: 3,
      prompt: "Saluda, di cómo te llamas, deletrea tu nombre y di qué cosas hay en tu mochila.",
      expressions: [
        { en: "Hola, buenos días", fr: "Bonjour" }, { en: "Me llamo …", fr: "Je m'appelle…" },
        { en: "Se escribe …", fr: "Ça s'écrit…" }, { en: "En mi mochila hay …", fr: "Dans mon sac il y a…" },
        { en: "Hasta luego", fr: "À plus tard" },
      ],
    },
  ],
  es1: [
    {
      title: "Mi ficha personal", minWords: 35, mustUse: 4,
      prompt: "Preséntate: nombre, apellido, nacionalidad, edad, profesión y dónde trabajas o estudias.",
      expressions: [
        { en: "Me llamo …", fr: "Je m'appelle…" }, { en: "Soy de …", fr: "Je suis de / je viens de…" },
        { en: "Tengo … años", fr: "J'ai … ans" }, { en: "Soy estudiante", fr: "Je suis étudiant(e)" },
        { en: "Trabajo en …", fr: "Je travaille dans…" },
      ],
    },
    {
      title: "Una persona interesante", minWords: 35, mustUse: 4,
      prompt: "Presenta a una persona famosa que te gusta: nombre, nacionalidad, profesión y edad.",
      expressions: [
        { en: "Se llama …", fr: "Il / elle s'appelle…" }, { en: "Es …", fr: "Il / elle est… (nationalité, métier)" },
        { en: "Tiene … años", fr: "Il / elle a … ans" }, { en: "Trabaja como …", fr: "Il / elle travaille comme…" },
        { en: "Su nombre es …", fr: "Son nom est…" },
      ],
    },
  ],
  es2: [
    {
      title: "¿Por qué estudio español?", minWords: 45, mustUse: 4,
      prompt: "Explica por qué estudias español, qué quieres hacer con el español y qué sabes de la cultura hispana.",
      expressions: [
        { en: "Estudio español porque …", fr: "J'étudie l'espagnol parce que…" }, { en: "Quiero …", fr: "Je veux… (+ infinitif)" },
        { en: "para …", fr: "pour… (+ infinitif)" }, { en: "por …", fr: "pour / à cause de… (+ nom)" },
        { en: "Hablo …", fr: "Je parle… (langues)" },
      ],
    },
    {
      title: "Mi tiempo libre", minWords: 45, mustUse: 4,
      prompt: "Habla de las actividades que haces en tu tiempo libre y de lo que haces en clase de español.",
      expressions: [
        { en: "Leo …", fr: "Je lis…" }, { en: "Escucho …", fr: "J'écoute…" },
        { en: "Veo …", fr: "Je regarde…" }, { en: "Salgo con …", fr: "Je sors avec…" },
        { en: "Hago …", fr: "Je fais…" },
      ],
    },
  ],
};
