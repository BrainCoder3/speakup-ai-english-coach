import type { Msg } from "@/lib/ai/client";
import type { Feedback } from "@/lib/ai/tasks/correction";
import type { DrillResult } from "@/components/drill/useDrill";

export type MsgKind = "text" | "typing" | "fix" | "ideas";

export interface ChatMsg {
  id: number;
  role: "coach" | "me";
  kind: MsgKind;
  text: string;
  /** For "fix": the sentence the learner must repeat. */
  corrected?: string;
  ideas?: { en: string; fr: string }[];
  badge?: { label: string; tone: string; cardId?: number };
}

/** What the turn logic needs from the React hook. */
export interface TurnApi {
  system: string;
  cefr: string;
  history: Msg[];
  alive: () => boolean;
  add: (m: Omit<ChatMsg, "id">) => number;
  patch: (id: number, p: Partial<ChatMsg>) => void;
  /** Resolves when the learner finished repeating the correction of message `id`. */
  waitFix: (id: number) => Promise<DrillResult>;
  pushCard: (said: string, fb: Feedback) => number;
}
