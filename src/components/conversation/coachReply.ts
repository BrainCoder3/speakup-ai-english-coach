/** Streams the coach's answer and speaks it sentence by sentence while it is written. */
import { reply } from "@/lib/ai/tasks/exercises";
import { speak } from "@/lib/speech/tts";
import type { TurnApi } from "./types";

export async function coachReply(api: TurnApi): Promise<void> {
  const id = api.add({ role: "coach", kind: "typing", text: "" });
  let spoken = 0;
  let text = "";
  try {
    text = await reply([{ role: "system", content: api.system }, ...api.history.slice(-12)], (full) => {
      if (!api.alive()) return;
      api.patch(id, { kind: "text", text: full });
      const m = full.slice(spoken).match(/^[\s\S]*?[.!?](\s|$)/);
      if (m) {
        speak(m[0].trim());
        spoken += m[0].length;
      }
    });
  } catch {
    api.patch(id, { kind: "text", text: "Oups, l'IA ne répond pas. Vérifie qu'Ollama est ouvert." });
    return;
  }
  if (!api.alive()) return;
  const rest = text.slice(spoken).trim();
  if (rest) speak(rest);
  api.patch(id, { kind: "text", text });
  api.history.push({ role: "assistant", content: text });
}

/** Opening line of the conversation (spoken, then the learner answers). */
export async function coachSays(api: TurnApi, text: string): Promise<void> {
  api.add({ role: "coach", kind: "text", text });
  api.history.push({ role: "assistant", content: text });
  await speak(text);
}
