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
    repeat: 85, // each "listen & repeat" sentence
    answer: 70, // each spoken answer (any grammar fix = fail)
    mission: 75, // average over the role-play mission
    drill: 80, // repeating a corrected sentence in a conversation
  },
  drillMaxTries: 3,
  answerFallbackAfter: 2,

  speech: { lang: "en-US", silenceMs: 1800, maxMs: 25000 },
  storageKey: "speakup:v2",
} as const;
