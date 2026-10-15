/**
 * Spanish course, following the syllabus of the textbook "Aula Internacional Plus 1" (A1):
 * same units, goals, grammar, vocabulary and phonetics — with original sentences and exercises.
 */
import type { Learn } from "../learnTypes";
import type { Level, ListeningText, SpeakingTopic } from "../types";
import { u0 } from "./u0";
import { u1 } from "./u1";
import { u2 } from "./u2";
import { u3 } from "./u3";
import { u4 } from "./u4";
import { u5 } from "./u5";
import { u6 } from "./u6";
import { u7 } from "./u7";
import { u8 } from "./u8";
import { u9 } from "./u9";
import { LEARN_PARTS } from "./learn";
import { QUIZZES } from "./quiz";
import { LISTEN_PARTS } from "./listening";
import { speakingEsA } from "./speaking/a";
import { speakingEsB } from "./speaking/b";
import { speakingEsC } from "./speaking/c";

export const ES_LEVELS: Level[] = [u0, u1, u2, u3, u4, u5, u6, u7, u8, u9];

/** Theory + quiz of each unit, keyed by level id ("es0"…). */
export const ES_LEARN: Record<string, Learn> = Object.fromEntries(
  ES_LEVELS.map((l, i) => [l.id, { ...LEARN_PARTS[i], quiz: QUIZZES[i] }]),
);

export const ES_LISTENING: Record<string, ListeningText[]> = Object.fromEntries(ES_LEVELS.map((l, i) => [l.id, LISTEN_PARTS[i]]));

export const ES_SPEAKING: Record<string, SpeakingTopic[]> = { ...speakingEsA, ...speakingEsB, ...speakingEsC };
