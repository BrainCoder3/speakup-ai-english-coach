"use client";
/** One long speaking task: prompt, recording, review, corrections drill, talk again. */
import { CONFIG } from "@/lib/config";
import { countWords } from "@/lib/ai/tasks/speaking";
import { speak } from "@/lib/speech/tts";
import { useListening } from "@/lib/speech/useListening";
import type { Level, SpeakingTopic } from "@/data/types";
import { Drill } from "@/components/drill/Drill";
import { Icon, Typing } from "@/components/ui/Icon";
import { MicMeter } from "@/components/ui/MicMeter";
import { ExpressionList } from "./ExpressionList";
import { ReviewCard } from "./ReviewCard";
import { needExpr, useSpeakTask } from "./useSpeakTask";

export function TopicCard({ level, index, topic }: { level: Level; index: number; topic: SpeakingTopic }) {
  const { state: s, talk, fixDone, startFixes, restart, minWords } = useSpeakTask(level.id, level.cefr, index, topic);
  const recording = useListening();
  const pass = CONFIG.pass.speak;
  const words = countWords(`${s.transcript} ${s.live}`);
  const canTalk = s.phase === "ready" || s.phase === "short";
  const fix = s.review?.fixes[s.fixIndex];

  return (
    <div className="lcard">
      <div className="lcard-head">
        <div>
          <span className="kind">Essai {s.round}{s.round === 1 ? " · premier jet" : " · on recommence, en mieux"}</span>
          <h3>{topic.title}</h3>
          <p className="question small">{topic.prompt}</p>
        </div>
        <button className="btn" onClick={() => speak(topic.prompt)}><Icon name="play" />Écouter la consigne</button>
      </div>
      {s.phase !== "passed" && <ExpressionList topic={topic} said={`${s.transcript} ${s.live}`} />}

      {canTalk && (
        <>
          <div className="meter">
            <i style={{ transform: `scaleX(${Math.min(1, words / minWords)})` }} />
            <span>{words} / {minWords} mots minimum</span>
          </div>
          {s.round > 1 && <p className="muted">Reparle du même sujet, plus longtemps, <b>sans refaire tes erreurs</b>.</p>}
          {s.phase === "short" && !recording && <p className="warn">Pas encore assez : continue (ce que tu as déjà dit est gardé) jusqu&apos;à {minWords} mots et {needExpr(topic)} expressions.</p>}
          <div className="qctrls">
            <button className={`btn mic-btn big ${recording ? "rec" : ""}`} onClick={talk}>
              <Icon name="mic" />{recording ? "✅ J'ai fini (appuie ici pour envoyer)" : s.transcript ? "Continuer à parler" : "Commencer à parler"}
            </button>
            {s.transcript && !recording && <button className="btn" onClick={restart}><Icon name="retry" />Repartir de zéro</button>}
          </div>
          <div className="live">{`${s.transcript} ${s.live}`.trim()}</div>
          <MicMeter />
        </>
      )}
      {s.error && <p className="warn">{s.error}</p>}
      {s.phase === "reviewing" && (
        <div className="meter"><i style={{ transform: `scaleX(${s.progress[0] / s.progress[1]})` }} /><span><Typing /> Le prof analyse ton discours phrase par phrase… {s.progress[0]}/{s.progress[1]}</span></div>
      )}
      {s.review && (s.phase === "review" || s.phase === "fix" || s.phase === "passed") && <ReviewCard r={s.review} pass={pass} round={s.round} />}

      {s.phase === "review" && (
        <button className="btn primary next" onClick={startFixes}>
          <Icon name="arrow" />{s.passAfterFixes ? "Corriger mes dernières erreurs pour valider" : s.review?.fixes.length ? "Répéter mes phrases corrigées" : "Reparler, encore plus longtemps"}
        </button>
      )}
      {s.phase === "fix" && fix && (
        <div className="fixdrill">
          <p className="counter">Correction {s.fixIndex + 1} / {s.review!.fixes.length} : répète la bonne phrase</p>
          <Drill key={`${s.round}-${s.fixIndex}`} target={fix.corrected} pass={CONFIG.pass.drill} maxTries={CONFIG.drillMaxTries} onDone={() => setTimeout(fixDone, 1300)} />
        </div>
      )}
      {s.phase === "passed" && <p className="okmsg">✅ Sujet validé : {s.review?.score}/100. Tu as progressé !</p>}
    </div>
  );
}
