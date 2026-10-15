"use client";
/** A level page: header, step tabs, the active step and the corrections panel. */
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useStore } from "@/lib/store/useStore";
import { isLevelUnlocked, isStepUnlocked, nextStep } from "@/lib/progress/rules";
import { courseOf, levelById } from "@/data/courses";
import { courseOfLevel, setCourse } from "@/lib/course/lang";
import { LearnStep } from "@/components/learn/LearnStep";
import type { StepId } from "@/data/types";
import { CorrectionsPanel } from "@/components/feedback/CorrectionsPanel";
import { PanelProvider } from "@/components/feedback/PanelContext";
import { Icon } from "@/components/ui/Icon";
import { AnswerStep } from "./AnswerStep";
import { MissionStep } from "./MissionStep";
import { RepeatStep } from "./RepeatStep";
import { StepTabs } from "./StepTabs";
import { ListenStep } from "@/components/listen/ListenStep";
import { SpeakStep } from "@/components/speak/SpeakStep";
import { ReviewGate } from "@/components/errors/ReviewGate";

export function LessonView({ levelId, step }: { levelId: string; step: StepId }) {
  const ready = useStore();
  const router = useRouter();
  const level = levelById(levelId);
  const allowed = ready && !!level && isLevelUnlocked(levelId) && isStepUnlocked(levelId, step);

  // Opening a lesson switches voices, speech recognition and the AI to its language.
  useEffect(() => {
    if (ready) setCourse(courseOfLevel(levelId));
  }, [ready, levelId]);

  // No shortcuts: locked levels / steps redirect to what you can do now.
  useEffect(() => {
    if (!ready || allowed) return;
    if (level && isLevelUnlocked(levelId)) router.replace(`/lesson/${levelId}/${nextStep(levelId)}`);
    else router.replace("/");
  }, [ready, allowed, level, levelId, router]);

  if (!allowed || !level) return <div className="page"><p className="muted">Chargement…</p></div>;

  return (
    <PanelProvider>
      <div className="workspace">
        <div className="page lesson">
          <header className="page-head">
            <div>
              <Link className="link" href="/"><Icon name="back" />Parcours</Link>
              <h1>{courseOf(levelId).unit} {level.n} · {level.title} <span className="cefr">{level.cefr}</span></h1>
              <p>{level.subtitle}</p>
            </div>
          </header>
          <StepTabs levelId={levelId} active={step} />
          <ReviewGate>
            <div className="stage" key={step}>
              {step === "learn" && <LearnStep level={level} />}
              {step === "repeat" && <RepeatStep level={level} />}
              {step === "listen" && <ListenStep level={level} />}
              {step === "answer" && <AnswerStep level={level} />}
              {step === "speak" && <SpeakStep level={level} />}
              {step === "mission" && <MissionStep level={level} />}
            </div>
          </ReviewGate>
        </div>
        <CorrectionsPanel empty="Les corrections détaillées de la mission apparaîtront ici, avec les explications en français." />
      </div>
    </PanelProvider>
  );
}
