import type { PlanDay } from "../types";

export const d01: PlanDay = {
  day: 1, title: "Present simple ou present continuous", level: "B1",
  grammar: {
    explain: [
      "<b>Present simple</b> : habitudes, vérités, emplois du temps (I <b>work</b> in a bank. Water <b>boils</b> at 100 °C). Avec he/she/it : <b>-s</b>.",
      "<b>Present continuous</b> (be + -ing) : action en cours MAINTENANT ou situation temporaire (I'<b>m working</b> from home this week).",
      "<b>Verbes d'état</b> jamais en -ing : know, believe, like, love, want, need, understand, belong, seem. On dit <b>I know</b>, jamais « I'm knowing ».",
      "Piège francophone : « Je travaille en ce moment » = I'<b>m working</b> right now, pas « I work right now ».",
    ],
    examples: [
      { en: "She usually takes the bus, but today she's driving.", fr: "D'habitude elle prend le bus, mais aujourd'hui elle conduit." },
      { en: "I don't understand what he means.", fr: "Je ne comprends pas ce qu'il veut dire." },
      { en: "Prices are rising fast this year.", fr: "Les prix augmentent vite cette année." },
    ],
    exercises: [
      { s: "Listen! Someone ___ (knock) at the door.", a: ["is knocking", "'s knocking"], why: "Action en cours (Listen!) → present continuous." },
      { s: "My brother ___ (work) in a hospital.", a: ["works"], why: "Situation permanente, he → works." },
      { s: "I ___ (not / understand) this question.", a: ["don't understand", "do not understand"], why: "understand est un verbe d'état → simple." },
      { s: "We ___ (stay) with friends until we find a flat.", a: ["are staying", "'re staying"], why: "Situation temporaire → continuous." },
      { s: "She ___ (not / like) coffee.", a: ["doesn't like", "does not like"], why: "Négation au présent simple avec she : doesn't + base verbale." },
      { s: "___ you ___ (want) some tea?", a: ["Do / want", "do / want"], why: "want est un verbe d'état ; question → Do + sujet + base verbale." },
      { s: "The sun ___ (rise) in the east.", a: ["rises"], why: "Vérité générale → présent simple." },
      { s: "Look, it ___ (rain) again!", a: ["is raining", "'s raining"], why: "En train de se passer → continuous." },
    ],
  },
  topic: "Personnalité et habitudes",
  vocab: [
    { en: "a morning person", fr: "quelqu'un du matin", ex: "I'm definitely not a morning person." },
    { en: "outgoing", fr: "extraverti, sociable", ex: "She's very outgoing and makes friends easily." },
    { en: "laid-back", fr: "décontracté, cool", ex: "My boss is quite laid-back." },
    { en: "hard-working", fr: "travailleur", ex: "He's the most hard-working person I know." },
    { en: "reliable", fr: "fiable", ex: "You can count on her, she's reliable." },
    { en: "to get into the habit of", fr: "prendre l'habitude de", ex: "I've got into the habit of reading every night." },
    { en: "to stick to a routine", fr: "s'en tenir à une routine", ex: "It's hard to stick to a routine on holiday." },
    { en: "to be used to", fr: "être habitué à", ex: "I'm used to getting up early." },
    { en: "a daily routine", fr: "une routine quotidienne", ex: "Exercise is part of my daily routine." },
    { en: "to take after", fr: "tenir de (ressembler à)", ex: "She takes after her mother." },
    { en: "easy-going", fr: "facile à vivre", ex: "My flatmate is really easy-going." },
    { en: "stubborn", fr: "têtu", ex: "He's too stubborn to admit he's wrong." },
  ],
  shadow: [
    "I'm not really a morning person, so I usually need two coffees before I start working.",
    "These days I'm trying to stick to a routine, but it isn't always easy.",
    "My sister is very outgoing, whereas I'm a bit more laid-back.",
    "I take after my father: we're both stubborn but reliable.",
  ],
  speak: { prompt: "Describe your personality and your daily routine. What do you usually do, and what are you doing differently these days?", minWords: 90 },
  write: { prompt: "Write an email to a new colleague introducing yourself: your personality, your habits and what you are working on at the moment.", minWords: 90 },
  input: 0,
};
