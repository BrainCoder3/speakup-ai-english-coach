"use client";
/** One written composition: instructions, expressions, text area, review, copy-out of corrections. */
import { CONFIG } from "@/lib/config";
import { countWords } from "@/lib/ai/tasks/speaking";
import type { Level, SpeakingTopic } from "@/data/types";
import { ExpressionList } from "@/components/speak/ExpressionList";
import { ReviewCard } from "@/components/speak/ReviewCard";
import { Icon, Typing } from "@/components/ui/Icon";
import { AnswerCard, spellingCheck } from "./AnswerCard";
import { TypeBox } from "./TypeBox";
import { useWriteTask } from "./useWriteTask";

export function WriteCard({ level, index, topic }: { level: Level; index: number; topic: SpeakingTopic }) {
  const { state: s, setText, submit, fixDone, startCopy, minWords } = useWriteTask(level.id, level.cefr, index, topic);
  const words = countWords(s.text);
  const fix = s.review?.fixes[s.fixIndex];

  return (
    <div className="lcard">
      <div className="lcard-head">
        <div>
          <span className="kind">Brouillon {s.round}{s.round === 1 ? " · premier jet" : " · réécris-le, sans les erreurs"}</span>
          <h3>{topic.title}</h3>
          <p className="question small">{topic.prompt}</p>
        </div>
      </div>
      {s.phase !== "passed" && <ExpressionList topic={topic} said={s.text} />}

      {s.phase === "write" && (
        <>
          <div className="meter">
            <i style={{ transform: `scaleX(${Math.min(1, words / minWords)})` }} />
            <span>{words} / {minWords} mots minimum</span>
          </div>
          {s.round > 1 && <p className="muted">Réécris ton texte <b>de mémoire</b>, plus long, en évitant tes erreurs.</p>}
          <TypeBox value={s.text} onChange={setText} multiline placeholder="Écris ton texte en espagnol…" />
          {s.error && <p className="warn">{s.error}</p>}
          <button className="btn primary next" onClick={submit} disabled={!s.text.trim()}><Icon name="check" />Faire corriger mon texte</button>
        </>
      )}
      {s.phase === "reviewing" && (
        <div className="meter"><i style={{ transform: `scaleX(${s.progress[0] / s.progress[1]})` }} /><span><Typing /> Le prof corrige ton texte phrase par phrase… {s.progress[0]}/{s.progress[1]}</span></div>
      )}
      {s.review && s.phase !== "write" && s.phase !== "reviewing" && <ReviewCard r={s.review} pass={CONFIG.pass.writing} round={s.round} />}
      {s.phase === "review" && (
        <button className="btn primary next" onClick={startCopy}>
          <Icon name="arrow" />{s.passAfterFixes ? "Recopier mes dernières corrections pour valider" : s.review?.fixes.length ? "Recopier mes phrases corrigées" : "Réécrire, encore plus long"}
        </button>
      )}
      {s.phase === "copy" && fix && (
        <div className="fixdrill">
          <p className="counter">Correction {s.fixIndex + 1} / {s.review!.fixes.length} : écris la phrase correcte</p>
          <AnswerCard
            key={`${s.round}-${s.fixIndex}`}
            prompt={<><span className="counter">Tu avais écrit :</span><span className="wrong">{fix.said}</span><small className="expl">💡 {fix.explication}</small></>}
            placeholder="La phrase corrigée…"
            check={(t) => spellingCheck(t, [fix.corrected], fix.explication)}
            onNext={() => fixDone()}
          />
        </div>
      )}
      {s.phase === "passed" && <p className="okmsg">✅ Rédaction validée : {s.review?.score}/100. Tu écris de mieux en mieux !</p>}
    </div>
  );
}
