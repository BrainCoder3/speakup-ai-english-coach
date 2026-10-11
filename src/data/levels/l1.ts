import type { Level } from "../types";

/** Level 1 — Premiers pas (A1). */
export const l1: Level = {
  id: "l1", n: 1, cefr: "A1", title: "Premiers pas", subtitle: "Se présenter et saluer",
  style: "very short, simple sentences (max 10 words), very common words, present tense",
  lesson: [
    "<b>I am</b> = je suis. À l'oral on contracte : <b>I'm</b>.",
    "Se présenter : <b>My name is…</b>, <b>I'm from…</b>, <b>I live in…</b>",
    "Questions : <b>What is your name?</b> <b>Where are you from?</b>",
    "Âge : <b>I am 25 years old</b> — jamais « I have 25 years ».",
  ],
  repeat: [
    { en: "Hello, nice to meet you.", fr: "Bonjour, enchanté." },
    { en: "My name is Daniel.", fr: "Je m'appelle Daniel." },
    { en: "I am from Burkina Faso.", fr: "Je viens du Burkina Faso." },
    { en: "I live in a big city.", fr: "J'habite dans une grande ville." },
    { en: "I am twenty-five years old.", fr: "J'ai vingt-cinq ans." },
    { en: "I work in a small company.", fr: "Je travaille dans une petite entreprise." },
    { en: "What is your name?", fr: "Comment t'appelles-tu ?" },
    { en: "Where are you from?", fr: "D'où viens-tu ?" },
  ],
  questions: [
    { q: "What is your name?", hint: "Commence par « My name is… »", example: "My name is Daniel." },
    { q: "Where are you from?", hint: "« I am from… »", example: "I am from Burkina Faso." },
    { q: "Where do you live?", hint: "« I live in… »", example: "I live in Ouagadougou, in a big house." },
    { q: "What do you do?", hint: "Ton métier ou tes études : « I am a student » / « I work as… »", example: "I am a web developer." },
    { q: "What do you like to do in your free time?", hint: "« I like + verbe en -ing »", example: "I like playing football and reading." },
  ],
  mission: {
    title: "Nouveau collègue", turns: 5,
    brief: "Tu rencontres un nouveau collègue. Présente-toi (nom, origine, métier) et pose-lui au moins une question.",
    prompt: "You are Sam, a friendly new colleague meeting the learner on their first day at work. Ask simple questions about their name, where they are from, their job and hobbies, one at a time.",
    opener: "Hi! I'm Sam, I just joined the team. What's your name?",
  },
};
