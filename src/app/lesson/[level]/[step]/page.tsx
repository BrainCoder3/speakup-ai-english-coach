import { Suspense } from "react";
import { notFound } from "next/navigation";
import { LessonView } from "@/components/lesson/LessonView";
import { ALL_LEVELS, allStepsOf } from "@/data/courses";
import type { StepId } from "@/data/types";

/** Every level × step of both courses is known at build time (static pages). */
export function generateStaticParams() {
  return ALL_LEVELS.flatMap((l) => allStepsOf(l.id).map((s) => ({ level: l.id, step: s.id })));
}

async function Lesson({ params }: { params: PageProps<"/lesson/[level]/[step]">["params"] }) {
  const { level, step } = await params;
  if (!ALL_LEVELS.some((l) => l.id === level) || !allStepsOf(level).some((s) => s.id === step)) notFound();
  return <LessonView levelId={level} step={step as StepId} />;
}

export default function LessonPage(props: PageProps<"/lesson/[level]/[step]">) {
  return (
    <Suspense fallback={<div className="page"><p className="muted">Chargement…</p></div>}>
      <Lesson params={props.params} />
    </Suspense>
  );
}
