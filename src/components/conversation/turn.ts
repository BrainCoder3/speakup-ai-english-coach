/**
 * One learner turn:
 *  1. quick check — on a mistake the coach corrects OUT LOUD and the learner must repeat
 *  2. the coach answers (streamed + spoken)
 *  3. detailed French feedback in the background (returns the score)
 */
import { quickCheck, analyse } from "@/lib/ai/tasks/correction";
import { speak } from "@/lib/speech/tts";
import { trackMistakes, trackScore, trackSpeech } from "@/lib/progress/stats";
import { saveErrors } from "@/lib/errors/bank";
import { coachReply } from "./coachReply";
import type { TurnApi } from "./types";

const lastCoachLine = (api: TurnApi) => [...api.history].reverse().find((m) => m.role === "assistant")?.content ?? "";

async function spokenCorrection(api: TurnApi, text: string, context: string) {
  try {
    const q = await quickCheck(text, context);
    if (!api.alive() || !q.hasError) return;
    saveErrors([{ said: text, corrected: q.corrected, explication: q.fix }]);
    const id = api.add({ role: "coach", kind: "fix", text: q.fix, corrected: q.corrected });
    await speak(`Almost! ${q.fix} Repeat after me: ${q.corrected}`);
    if (!api.alive()) return;
    const r = await api.waitFix(id);
    if (api.alive()) await speak(r.passed ? "Great, well done!" : "Okay, let's keep going. We'll practise it again later.");
  } catch {
    /* the spoken correction is best-effort */
  }
}

function detailedFeedback(api: TurnApi, text: string, context: string, meId: number): Promise<number | null> {
  return analyse(text, context, api.cefr)
    .then((fb) => {
      if (!api.alive()) return fb.score;
      const cardId = api.pushCard(text, fb);
      const n = fb.mistakes.length;
      const label = n ? `${fb.score}/100 · ${n} correction${n > 1 ? "s" : ""}` : `${fb.score}/100 · Parfait !`;
      api.patch(meId, { badge: { label, tone: fb.score < 60 ? "bad" : n ? "warn" : "", cardId } });
      trackScore("grammar", fb.score);
      trackMistakes(fb.mistakes.map((m) => m.type));
      return fb.score;
    })
    .catch(() => {
      api.patch(meId, { badge: { label: "Analyse indisponible", tone: "warn" } });
      return null;
    });
}

/**
 * Runs the turn; resolves when the coach has answered.
 * The detailed score is returned wrapped, so `await` does not wait for it.
 */
export async function runTurn(api: TurnApi, text: string): Promise<{ score: Promise<number | null> }> {
  const meId = api.add({ role: "me", kind: "text", text, badge: { label: "Analyse…", tone: "" } });
  trackSpeech(text);
  const context = lastCoachLine(api);
  api.history.push({ role: "user", content: text });
  await spokenCorrection(api, text, context);
  if (api.alive()) await coachReply(api);
  return { score: detailedFeedback(api, text, context, meId) };
}

export { lastCoachLine };
