"use client";
/** AI review of a long speech: score, feedback and every corrected sentence. */
import type { SpeechReview } from "@/lib/ai/tasks/speaking";
import { speak } from "@/lib/speech/tts";
import { DiffText } from "@/components/ui/DiffText";
import { Icon } from "@/components/ui/Icon";
import { ScoreRing } from "@/components/ui/ScoreRing";

export function ReviewCard({ r, pass, round }: { r: SpeechReview; pass: number; round: number }) {
  return (
    <div className="review">
      <div className="result">
        <ScoreRing score={r.score} pass={pass} />
        <div className="rbody">
          <div className="label">Essai {round} · {r.words} mots · {r.fixes.length} erreur{r.fixes.length > 1 ? "s" : ""}</div>
          <p className="fbfr">{r.feedback_fr}</p>
          {!r.on_topic && <p className="warn">Tu t&apos;es éloigné du sujet : reste centré sur la consigne.</p>}
        </div>
      </div>
      {r.fixes.length > 0 && (
        <ol className="fixes">
          {r.fixes.map((f, k) => (
            <li key={k}>
              <DiffText from={f.said} to={f.corrected} />
              <p className="expl">💡 {f.explication}</p>
              <button className="btn ghost" onClick={() => speak(f.corrected)}><Icon name="play" />Écouter la bonne phrase</button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
