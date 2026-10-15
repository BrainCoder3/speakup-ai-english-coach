"use client";
/** Free conversation: choose a situation and a level, then just talk. */
import { useState } from "react";
import { store } from "@/lib/store/store";
import { useStore } from "@/lib/store/useStore";
import { tutorSystem } from "@/lib/ai/prompts/conversation";
import { FREE_LEVELS, SCENARIOS as EN_SCENARIOS, type FreeLevel } from "@/data/scenarios";
import { ES_SCENARIOS } from "@/data/es/scenarios";
import { activeCourse, lang } from "@/lib/course/lang";
import { CourseSwitch } from "@/components/shell/CourseSwitch";
import { Conversation } from "@/components/conversation/Conversation";
import { CorrectionsPanel } from "@/components/feedback/CorrectionsPanel";
import { PanelProvider } from "@/components/feedback/PanelContext";
import { Icon } from "@/components/ui/Icon";

export function FreeTalkView() {
  const ready = useStore();
  const [run, setRun] = useState(0);
  if (!ready) return <div className="page"><p className="muted">Chargement…</p></div>;

  const s = store.settings();
  const SCENARIOS = activeCourse() === "es" ? ES_SCENARIOS : EN_SCENARIOS;
  const scenario = SCENARIOS.find((x) => x.id === s.freeScenario) ?? SCENARIOS[0];
  const lvl = FREE_LEVELS[s.freeLevel] ?? FREE_LEVELS.intermediate;
  const restart = () => setRun((r) => r + 1);

  return (
    <PanelProvider key={`${s.course}-${scenario.id}-${s.freeLevel}-${run}`}>
      <div className="workspace">
        <div className="page free">
          <header className="page-head">
            <div>
              <h1>Conversation libre en {lang().fr} {lang().flag}</h1>
              <p>Entraînement sans examen : le coach te corrige quand même à l&apos;oral.</p>
            </div>
            <button className="btn" onClick={restart}><Icon name="retry" />Nouvelle conversation</button>
          </header>
          <CourseSwitch />
          <div className="pickers">
            <div className="seg">
              {(Object.keys(FREE_LEVELS) as FreeLevel[]).map((k) => (
                <button key={k} className={k === s.freeLevel ? "on" : ""} onClick={() => store.setSetting("freeLevel", k)}>
                  {FREE_LEVELS[k].label}
                </button>
              ))}
            </div>
            <div className="chips">
              {SCENARIOS.map((x) => (
                <button key={x.id} className={x.id === scenario.id ? "on" : ""} onClick={() => store.setSetting("freeScenario", x.id)}>
                  {x.icon} {x.name}
                </button>
              ))}
            </div>
          </div>
          <Conversation
            system={tutorSystem({ cefr: lvl.cefr, style: lvl.style, situation: scenario.situation })}
            opener={scenario.opener}
            cefr={lvl.cefr}
          />
        </div>
        <CorrectionsPanel />
      </div>
    </PanelProvider>
  );
}
