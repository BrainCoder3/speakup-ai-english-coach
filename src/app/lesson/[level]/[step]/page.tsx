import { notFound } from "next/navigation";
import { LessonView } from "@/components/lesson/LessonView";
import { LEVELS, STEPS } from "@/data/levels";
import type { StepId } from "@/data/types";

/** Every level × step is known at build time (static pages). */
export function generateStaticParams() {
  return LEVELS.flatMap((l) => STEPS.map((s) => ({ level: l.id, step: s.id })));
}

export default async function LessonPage({ params }: PageProps<"/lesson/[level]/[step]">) {
  const { level, step } = await params;
  if (!LEVELS.some((l) => l.id === level) || !STEPS.some((s) => s.id === step)) notFound();
  return <LessonView levelId={level} step={step as StepId} />;
}
