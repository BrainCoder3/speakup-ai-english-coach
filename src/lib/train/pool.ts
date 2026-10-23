/**
 * Everything the learner has already met, as typed recall items: grammar exercises,
 * vocabulary and their own mistakes — in the active language only.
 */
import { activeCourse } from "@/lib/course/lang";
import { allErrors } from "@/lib/errors/bank";
import { dayUnlocked } from "@/lib/plan/progress";
import { isLevelUnlocked } from "@/lib/progress/rules";
import { vocabItems } from "@/lib/scoring/vocabItems";
import { exprItems } from "@/lib/expressions/items";
import { DAYS } from "@/data/plan";
import { ES_LEARN, ES_LEVELS, ES_PRACTICE } from "@/data/es";

export interface TrainItem {
  key: string;
  kind: "grammaire" | "vocabulaire" | "expressions" | "mes erreurs";
  /** Topic used for interleaving and weak-point stats. */
  topic: string;
  /** Where to study it again. */
  href: string;
  prompt: string;
  answers: string[];
  why: string;
}

const blanks = (a: string) => a.replace(/\s*\/\s*/g, " ");
const hash = (s: string) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) | 0, 7).toString(36);

function english(): TrainItem[] {
  return DAYS.filter((d) => dayUnlocked(d.day)).flatMap((d) => [
    ...d.grammar.exercises.map((e, i) => ({
      key: `en:g:${d.day}:${i}`, kind: "grammaire" as const, topic: d.title, href: `/plan/${d.day}`,
      prompt: e.s, answers: e.a.map(blanks), why: e.why,
    })),
    ...d.vocab.map((v, i) => ({
      key: `en:v:${d.day}:${i}`, kind: "vocabulaire" as const, topic: d.topic, href: `/plan/${d.day}`,
      prompt: `En anglais : ${v.fr}`, answers: [v.en, v.en.replace(/^to\s+/i, "")], why: `Exemple : ${v.ex}`,
    })),
  ]);
}

function spanish(): TrainItem[] {
  return ES_LEVELS.filter((l) => isLevelUnlocked(l.id)).flatMap((l) => [
    ...(ES_PRACTICE[l.id]?.drills ?? []).map((e, i) => ({
      key: `es:g:${l.id}:${i}`, kind: "grammaire" as const, topic: `Unidad ${l.n} · ${l.title}`, href: `/lesson/${l.id}/drill`,
      prompt: `${e.s}  (${e.hint})`, answers: e.a, why: e.why,
    })),
    ...vocabItems(ES_LEARN[l.id]?.vocab ?? []).map((v, i) => ({
      key: `es:v:${l.id}:${i}`, kind: "vocabulaire" as const, topic: `Unidad ${l.n} · vocabulaire`, href: `/lesson/${l.id}/vocab`,
      prompt: `En espagnol : ${v.fr}`, answers: v.answers, why: "",
    })),
  ]);
}

function mistakes(): TrainItem[] {
  const course = activeCourse();
  return allErrors()
    .filter((e) => (e.lang ?? "en") === course)
    .map((e) => ({
      key: `err:${hash(e.corrected)}`, kind: "mes erreurs" as const, topic: "Mes erreurs", href: "/errors",
      prompt: `Corrige : « ${e.said} »`, answers: [e.corrected], why: e.explication,
    }));
}

/** Every item available today for the active language. */
export const trainPool = (): TrainItem[] => [
  ...(activeCourse() === "es" ? spanish() : [...english(), ...exprItems()]),
  ...mistakes(),
];
