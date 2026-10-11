import type { ListeningText } from "../types";

/** Level 8 — native speed and idioms, in Irish, New Zealand and Philippine English. */
export const listening8: ListeningText[] = [
  {
    title: "Le pire premier jour", kind: "Récit avec expressions", rate: 1.1,
    parts: [
      {
        speaker: "Declan", accent: "ie",
        text: "So, my first day at the bank. I'd been up half the night, nervous as anything, and of course I slept through my alarm. I threw on a shirt, legged it to the bus stop, and missed the bus by about two seconds. I finally turned up forty minutes late, soaked to the bone because it was lashing rain. My new boss just looked me up and down and said: well, at least you can only go up from here. I could have died. Funny thing is, five years later, she's one of my closest friends, and she still brings it up at every Christmas party.",
      },
    ],
    questions: [
      { q: "Why did Declan arrive late on his first day?", answer: "He slept through his alarm and missed the bus." },
      { q: "What was the weather like?", answer: "It was raining heavily (lashing rain); he was soaked." },
      { q: "What is his relationship with his boss today?", answer: "She is one of his closest friends." },
    ],
  },
  {
    title: "Les infos du matin", kind: "Journal radio", rate: 1.1,
    parts: [
      { speaker: "Presenter", accent: "nz", text: "Good morning, it's seven o'clock. Our top story: the city council has finally given the green light to the new light-rail line, after years of debate. Construction kicks off in June and is expected to take four years. Critics say the budget of two point three billion dollars is way over the top." },
      { speaker: "Reporter", accent: "ph", text: "Thanks. Meanwhile, in technology, a local start-up has raised fifteen million dollars to develop solar panels that work even on cloudy days. The founders say they hope to cut household energy bills by up to a third." },
      { speaker: "Presenter", accent: "nz", text: "And finally, the weather: a cold snap is on the way, so wrap up warm this weekend." },
    ],
    questions: [
      { q: "What did the city council approve?", answer: "The new light-rail line." },
      { q: "What is special about the start-up's solar panels?", answer: "They work even on cloudy days." },
      { q: "What is the advice for the weekend, and why?", answer: "Wrap up warm, because a cold snap is coming." },
    ],
  },
];
