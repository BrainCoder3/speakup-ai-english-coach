import type { SpeakingTopic } from "../types";

/** Long speaking tasks, levels 5-8. "…" marks where your own words go. */
export const speakingB: Record<string, SpeakingTopic[]> = {
  l5: [
    {
      title: "Ton parcours", minWords: 110, mustUse: 4,
      prompt: "Describe your education and work experience, and what you have learned.",
      expressions: [
        { en: "I have worked as …", fr: "J'ai travaillé / je travaille comme…" }, { en: "I have learned …", fr: "J'ai appris…" },
        { en: "I'm responsible for …", fr: "Je suis responsable de…" }, { en: "I have never …", fr: "Je n'ai jamais…" },
        { en: "So far, …", fr: "Jusqu'à présent…" },
      ],
    },
    {
      title: "Un défi relevé", minWords: 110, mustUse: 4,
      prompt: "Talk about a difficult problem you solved at work or at school.",
      expressions: [
        { en: "The main problem was …", fr: "Le problème principal était…" }, { en: "I decided to …", fr: "J'ai décidé de…" },
        { en: "As a result, …", fr: "Résultat…" }, { en: "It taught me …", fr: "Ça m'a appris…" },
        { en: "Looking back, …", fr: "Avec le recul…" },
      ],
    },
  ],
  l6: [
    {
      title: "Pour ou contre", minWords: 130, mustUse: 4,
      prompt: "Should university be free for everyone? Give your opinion with at least two arguments and an example.",
      expressions: [
        { en: "In my opinion, …", fr: "À mon avis…" }, { en: "First of all, …", fr: "Tout d'abord…" },
        { en: "On the other hand, …", fr: "D'un autre côté…" }, { en: "For example, …", fr: "Par exemple…" },
        { en: "To sum up, …", fr: "Pour résumer…" },
      ],
    },
    {
      title: "La technologie", minWords: 130, mustUse: 4,
      prompt: "Is technology making our lives better or worse? Defend your point of view.",
      expressions: [
        { en: "I strongly believe that …", fr: "Je suis convaincu que…" }, { en: "Some people argue that …", fr: "Certains affirment que…" },
        { en: "However, …", fr: "Cependant…" }, { en: "That's why …", fr: "C'est pourquoi…" },
        { en: "All in all, …", fr: "Tout bien considéré…" },
      ],
    },
  ],
  l7: [
    {
      title: "Pitch de projet", minWords: 150, mustUse: 4,
      prompt: "Pitch a product or business idea to investors: the problem, your solution, your customers and how you will make money.",
      expressions: [
        { en: "The problem we are solving is …", fr: "Le problème que nous résolvons est…" }, { en: "Our solution …", fr: "Notre solution…" },
        { en: "Our target customers are …", fr: "Nos clients cibles sont…" }, { en: "We will make money by …", fr: "Nous gagnerons de l'argent en… (+ -ing)" },
        { en: "What makes us different is …", fr: "Ce qui nous distingue, c'est…" },
      ],
    },
    {
      title: "Un conflit au travail", minWords: 150, mustUse: 4,
      prompt: "Explain how you would handle a disagreement with a colleague or a client.",
      expressions: [
        { en: "First, I would …", fr: "D'abord, je…(conditionnel)" }, { en: "I'd make sure that …", fr: "Je m'assurerais que…" },
        { en: "From their point of view, …", fr: "De leur point de vue…" }, { en: "We could agree on …", fr: "Nous pourrions nous mettre d'accord sur…" },
        { en: "If that didn't work, …", fr: "Si ça ne marchait pas…" },
      ],
    },
  ],
  l8: [
    {
      title: "Raconte une anecdote", minWords: 170, mustUse: 4,
      prompt: "Tell a funny or surprising true story, like a native speaker, with details and emotions.",
      expressions: [
        { en: "You won't believe what happened", fr: "Tu ne vas pas croire ce qui s'est passé" }, { en: "Out of the blue, …", fr: "Sans prévenir, tout à coup…" },
        { en: "I couldn't believe my eyes", fr: "Je n'en croyais pas mes yeux" }, { en: "To cut a long story short, …", fr: "Pour faire court…" },
        { en: "Looking back, it was …", fr: "Avec le recul, c'était…" },
      ],
    },
    {
      title: "Un sujet de société", minWords: 170, mustUse: 4,
      prompt: "Choose a social issue you care about and argue for a solution, anticipating counter-arguments.",
      expressions: [
        { en: "What really bothers me is …", fr: "Ce qui me dérange vraiment, c'est…" }, { en: "Admittedly, …", fr: "Certes…" },
        { en: "Having said that, …", fr: "Cela dit…" }, { en: "At the end of the day, …", fr: "Au bout du compte…" },
        { en: "The way I see it, …", fr: "Selon moi…" },
      ],
    },
  ],
};
