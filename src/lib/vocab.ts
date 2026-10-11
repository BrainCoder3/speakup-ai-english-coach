/** Vocabulary notebook with spaced repetition (Leitner boxes). */
import { store } from "@/lib/store/store";
import type { VocabWord } from "@/lib/store/types";
import { today } from "@/lib/progress/stats";

const INTERVALS = [1, 2, 4, 7, 15, 30]; // days per box

export interface NewWord {
  word: string;
  meaning_fr: string;
  example: string;
}

export const allWords = () => store.get().vocab;
export const dueWords = () => allWords().filter((w) => w.due <= today());

export function saveWord(v: NewWord): boolean {
  if (allWords().some((x) => x.word.toLowerCase() === v.word.toLowerCase())) return false;
  store.update((d) => d.vocab.unshift({ ...v, box: 0, due: today() }));
  return true;
}

/** Known: next box (longer interval). Forgotten: back to box 0, due today. */
export function gradeWord(word: VocabWord, known: boolean) {
  store.update(() => {
    word.box = known ? Math.min(word.box + 1, INTERVALS.length - 1) : 0;
    const d = new Date();
    d.setDate(d.getDate() + (known ? INTERVALS[word.box] : 0));
    word.due = d.toISOString().slice(0, 10);
  });
}

export function removeWord(word: VocabWord) {
  store.update((d) => {
    d.vocab = d.vocab.filter((w) => w !== word);
  });
}
