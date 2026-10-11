"use client";
/** Step 3 — role-play mission graded on the average of every exchange. */
import { useState } from "react";
import { CONFIG } from "@/lib/config";
import { tutorSystem } from "@/lib/ai/prompts/conversation";
import { levelProgress, recordMissionAttempt } from "@/lib/progress/rules";
import type { Level } from "@/data/types";
import { Conversation } from "@/components/conversation/Conversation";
import { usePanel } from "@/components/feedback/PanelContext";
import { Icon } from "@/components/ui/Icon";
import { Celebrate, TryAgain } from "./Celebrate";
import { completeStep, missionPassed, type Celebration } from "./completion";

type Phase = { kind: "brief" } | { kind: "talk"; run: number } | { kind: "won"; c: Celebration } | { kind: "lost"; avg: number };

export function MissionStep({ level }: { level: Level }) {
  const m = level.mission;
  const { clear } = usePanel();
  const [phase, setPhase] = useState<Phase>({ kind: "brief" });
  const best = levelProgress(level.id).mission.best ?? 0;

  const start = () => {
    clear();
    setPhase((p) => ({ kind: "talk", run: (p.kind === "talk" ? p.run : 0) + 1 }));
  };
  const finished = (avg: number) => {
    recordMissionAttempt(level.id, avg);
    setPhase(missionPassed(avg) ? { kind: "won", c: completeStep(level, "mission", avg) } : { kind: "lost", avg });
  };

  if (phase.kind === "won") return <Celebrate c={phase.c} />;
  if (phase.kind === "lost") return <TryAgain score={phase.avg} needed={CONFIG.pass.mission} onRetry={start} />;

  return (
    <>
      <div className="stephead">
        <div>
          <h2>🎯 Mission : {m.title}</h2>
          <p>{m.brief}</p>
          <p className="muted">
            {m.turns} échanges · moyenne exigée <b>{CONFIG.pass.mission}/100</b>
            {best ? ` · ton meilleur score : ${best}` : ""}. Le coach te corrige à l&apos;oral et tu dois répéter avant de continuer.
          </p>
        </div>
        {phase.kind === "brief" && (
          <button className="btn primary" onClick={start}><Icon name="mic" />Commencer la mission</button>
        )}
      </div>
      {phase.kind === "talk" && (
        <Conversation
          key={phase.run}
          system={tutorSystem({ cefr: level.cefr, style: level.style, situation: m.prompt })}
          opener={m.opener}
          cefr={level.cefr}
          maxTurns={m.turns}
          onFinished={finished}
        />
      )}
    </>
  );
}
