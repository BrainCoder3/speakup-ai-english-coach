/**
 * The learner ends a long recording by saying a stop phrase,
 * e.g. "I'm done recording", "I am done", "I'm finished", "end of recording".
 */
const FILLER = String.raw`(?:(?:and|so|okay|ok|well|um|uh|that's it|that is it)[\s,]+)*`;
const PHRASE = String.raw`(?:(?:i\s*am|i'm|im)\s+(?:done|finished)(?:\s+(?:recording|speaking|talking))?|(?:(?:this|that)\s+is\s+|that's\s+)?(?:the\s+)?(?:end|stop)\s+(?:of\s+)?recording)`;
const STOP = new RegExp(String.raw`(?:^|[\s.,!?])${FILLER}${PHRASE}[\s.,!?]*$`, "i");

/** Explicit form only ("…done recording"): safe to act on while the learner is still talking. */
const EXPLICIT = /(?:recording|speaking|talking)[\s.,!?]*$/i;

/**
 * True when the transcript ends with a stop phrase. On a live (interim) transcript only the
 * explicit form counts, so "I am done with my homework" is not cut after "I am done".
 */
export const endsWithStop = (text: string, live = false) => STOP.test(text.trim()) && (!live || EXPLICIT.test(text.trim()));

/** Removes the stop phrase from the end of the transcript. */
export const withoutStop = (text: string) => text.trim().replace(STOP, "").trim();

/** Shown in the UI so the learner knows how to finish. */
export const STOP_HINT = "I'm done recording";
