/** Central configuration: AI model, GPU options and passing scores. */
export const CONFIG = {
  ollamaUrl: process.env.OLLAMA_URL ?? "http://127.0.0.1:11434",
  /** First installed model from this list is used. */
  models: ["qwen3:4b-instruct-2507-q4_K_M", "qwen3:4b-instruct", "llama3.2:3b", "gemma3:4b"],
  /** Small context + every layer on the GPU (a 4B model fits a 4 GB card). */
  gpuOptions: { num_ctx: 2048, num_gpu: 99 },
  keepAlive: "60m",

  /** Passing scores (0-100): you cannot move on until you reach them. */
  pass: {
    learn: 80, // quiz on the unit theory (Spanish course)
    spelling: 80, // vocabulary written from memory, first try (Spanish)
    exercises: 80, // fill-in-the-blank exercises, first try (Spanish)
    translation: 75, // French → Spanish sentences, first try
    writing: 75, // written text, after correcting every mistake
    repeat: 85, // each "listen & repeat" sentence
    listen: 70, // each listening-comprehension question
    answer: 70, // each spoken answer (any grammar fix = fail)
    speak: 75, // long speaking task, after correcting your mistakes
    mission: 75, // average over the role-play mission
    drill: 80, // repeating a corrected sentence in a conversation
  },
  drillMaxTries: 3,
  answerFallbackAfter: 2,

  /** Short answers end on a pause; long ones end when you say "I'm done recording". */
  speech: { silenceMs: 1800, maxMs: 25000, longSilenceMs: 20000, longMaxMs: 240000 },
  storageKey: "speakup:v2",
} as const;
