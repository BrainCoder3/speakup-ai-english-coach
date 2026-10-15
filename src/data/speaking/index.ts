import type { SpeakingTopic } from "../types";
import { speakingA } from "./a";
import { speakingB } from "./b";
import { ES_SPEAKING } from "../es";

/**
 * Long speaking tasks per level: talk for a while (minWords) using the given
 * expressions (mustUse), get corrected, repeat the fixes, then talk again.
 */
export const SPEAKING: Record<string, SpeakingTopic[]> = { ...speakingA, ...speakingB, ...ES_SPEAKING };
