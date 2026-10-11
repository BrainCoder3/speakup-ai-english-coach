import type { SpeakingTopic } from "../types";

/**
 * Long speaking tasks per level: you must talk for a while (minWords),
 * get corrected, repeat your corrected sentences, then talk again.
 */
export const SPEAKING: Record<string, SpeakingTopic[]> = {
  l1: [
    { title: "Présente-toi", prompt: "Introduce yourself: your name, age, where you are from, where you live, your job or studies, and your family.", ideas: ["My name is…", "I am … years old", "I live in…", "I have two brothers…"], minWords: 40 },
    { title: "Ta ville", prompt: "Describe your city or town. What is there? What do you like about it?", ideas: ["There is / there are…", "It is big / small / noisy…", "I like… because…"], minWords: 40 },
  ],
  l2: [
    { title: "Ta journée type", prompt: "Describe a normal day in your life, from morning to night.", ideas: ["I get up at…", "Then I…", "After that…", "In the evening I usually…"], minWords: 60 },
    { title: "Ton week-end", prompt: "What do you usually do at the weekend? Who with? Where?", ideas: ["On Saturdays I often…", "I never…", "With my friends we…"], minWords: 60 },
  ],
  l3: [
    { title: "Ton dernier week-end", prompt: "Tell me what you did last weekend, step by step.", ideas: ["On Saturday morning I went…", "Then I met…", "It was…", "In the evening we…"], minWords: 80 },
    { title: "Un souvenir d'enfance", prompt: "Tell a story from your childhood that you remember well.", ideas: ["When I was ten…", "One day…", "Suddenly…", "In the end…"], minWords: 80 },
  ],
  l4: [
    { title: "Tes projets", prompt: "Talk about your plans for next year: work, studies, travel, personal goals.", ideas: ["Next year I'm going to…", "I think I will…", "I hope to…", "My main goal is…"], minWords: 90 },
    { title: "Ta vie dans 10 ans", prompt: "Imagine your life in ten years. Where will you live? What will you do?", ideas: ["In ten years I will…", "I'll probably…", "I won't…"], minWords: 90 },
  ],
  l5: [
    { title: "Ton parcours", prompt: "Describe your education and work experience, and what you have learned.", ideas: ["I have worked as… for…", "I have studied… since…", "I have learned to…"], minWords: 110 },
    { title: "Un défi relevé", prompt: "Talk about a difficult problem you solved at work or at school.", ideas: ["The situation was…", "I decided to…", "As a result…", "I have learned that…"], minWords: 110 },
  ],
  l6: [
    { title: "Pour ou contre", prompt: "Should university be free for everyone? Give your opinion with at least two arguments and an example.", ideas: ["In my opinion…", "First of all…", "On the other hand…", "To sum up…"], minWords: 130 },
    { title: "La technologie", prompt: "Is technology making our lives better or worse? Defend your point of view.", ideas: ["I strongly believe that…", "For example…", "Some people argue that…, but…"], minWords: 130 },
  ],
  l7: [
    { title: "Pitch de projet", prompt: "Pitch a product or business idea to investors: the problem, your solution, your customers and how you will make money.", ideas: ["The problem is…", "Our solution…", "Our target customers…", "We will generate revenue by…"], minWords: 150 },
    { title: "Un conflit au travail", prompt: "Explain how you would handle a disagreement with a colleague or a client.", ideas: ["First, I would…", "I'd make sure that…", "If that didn't work…"], minWords: 150 },
  ],
  l8: [
    { title: "Raconte une anecdote", prompt: "Tell a funny or surprising true story, like a native speaker, with details and emotions.", ideas: ["You won't believe what happened…", "To cut a long story short…", "I couldn't believe my eyes…"], minWords: 170 },
    { title: "Un sujet de société", prompt: "Choose a social issue you care about and argue for a solution, anticipating counter-arguments.", ideas: ["What really bothers me is…", "Admittedly…", "Having said that…", "At the end of the day…"], minWords: 170 },
  ],
};
