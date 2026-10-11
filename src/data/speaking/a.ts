import type { SpeakingTopic } from "../types";

/** Long speaking tasks, levels 1-4. "…" marks where your own words go. */
export const speakingA: Record<string, SpeakingTopic[]> = {
  l1: [
    {
      title: "Présente-toi", minWords: 40, mustUse: 4,
      prompt: "Introduce yourself: your name, age, where you are from, where you live, your job or studies, and your family.",
      expressions: [
        { en: "My name is …", fr: "Je m'appelle…" }, { en: "I am … years old", fr: "J'ai … ans" },
        { en: "I come from …", fr: "Je viens de…" }, { en: "I live in …", fr: "J'habite à / en…" },
        { en: "There are … people in my family", fr: "Nous sommes … dans ma famille" },
      ],
    },
    {
      title: "Ta ville", minWords: 40, mustUse: 4,
      prompt: "Describe your city or town. What is there? What do you like about it?",
      expressions: [
        { en: "There is a …", fr: "Il y a un(e)… (singulier)" }, { en: "There are many …", fr: "Il y a beaucoup de… (pluriel)" },
        { en: "It is very …", fr: "C'est très…" }, { en: "My favourite place is …", fr: "Mon endroit préféré est…" },
        { en: "I like it because …", fr: "Je l'aime parce que…" },
      ],
    },
  ],
  l2: [
    {
      title: "Ta journée type", minWords: 60, mustUse: 4,
      prompt: "Describe a normal day in your life, from morning to night.",
      expressions: [
        { en: "I usually …", fr: "D'habitude, je…" }, { en: "First, …", fr: "D'abord…" },
        { en: "After that, …", fr: "Après ça…" }, { en: "In the evening, …", fr: "Le soir…" },
        { en: "I never …", fr: "Je ne … jamais" },
      ],
    },
    {
      title: "Ton week-end", minWords: 60, mustUse: 4,
      prompt: "What do you usually do at the weekend? Who with? Where?",
      expressions: [
        { en: "At the weekend, …", fr: "Le week-end…" }, { en: "I often …", fr: "Je … souvent" },
        { en: "I sometimes …", fr: "Je … parfois" }, { en: "With my friends, …", fr: "Avec mes amis…" },
        { en: "I really enjoy …", fr: "J'adore vraiment… (+ -ing)" },
      ],
    },
  ],
  l3: [
    {
      title: "Ton dernier week-end", minWords: 80, mustUse: 4,
      prompt: "Tell me what you did last weekend, step by step.",
      expressions: [
        { en: "Last weekend, …", fr: "Le week-end dernier…" }, { en: "First, I went …", fr: "D'abord, je suis allé…" },
        { en: "Then …", fr: "Ensuite…" }, { en: "After that, …", fr: "Après ça…" },
        { en: "It was really …", fr: "C'était vraiment…" },
      ],
    },
    {
      title: "Un souvenir d'enfance", minWords: 80, mustUse: 4,
      prompt: "Tell a story from your childhood that you remember well.",
      expressions: [
        { en: "When I was …", fr: "Quand j'avais / j'étais…" }, { en: "One day, …", fr: "Un jour…" },
        { en: "Suddenly, …", fr: "Soudain…" }, { en: "I felt …", fr: "Je me suis senti…" },
        { en: "In the end, …", fr: "Finalement…" },
      ],
    },
  ],
  l4: [
    {
      title: "Tes projets", minWords: 90, mustUse: 4,
      prompt: "Talk about your plans for next year: work, studies, travel, personal goals.",
      expressions: [
        { en: "I'm going to …", fr: "Je vais… (projet décidé)" }, { en: "I'm planning to …", fr: "Je prévois de…" },
        { en: "I hope to …", fr: "J'espère…" }, { en: "I'd like to …", fr: "J'aimerais…" },
        { en: "If everything goes well, …", fr: "Si tout se passe bien…" },
      ],
    },
    {
      title: "Ta vie dans 10 ans", minWords: 90, mustUse: 4,
      prompt: "Imagine your life in ten years. Where will you live? What will you do?",
      expressions: [
        { en: "In ten years, …", fr: "Dans dix ans…" }, { en: "I will probably …", fr: "Je vais probablement…" },
        { en: "I think I'll …", fr: "Je pense que je vais…" }, { en: "I won't …", fr: "Je ne … pas (futur)" },
        { en: "By then, …", fr: "D'ici là…" },
      ],
    },
  ],
};
