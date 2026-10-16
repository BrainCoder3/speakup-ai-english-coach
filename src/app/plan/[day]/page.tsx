import { Suspense } from "react";
import { notFound } from "next/navigation";
import { PlanDayView } from "@/components/plan/PlanDayView";

/** The 30 days are known at build time (static pages). */
export function generateStaticParams() {
  return Array.from({ length: 30 }, (_, i) => ({ day: String(i + 1) }));
}

async function Day({ params }: { params: PageProps<"/plan/[day]">["params"] }) {
  const n = Number((await params).day);
  if (!Number.isInteger(n) || n < 1 || n > 30) notFound();
  return <PlanDayView n={n} />;
}

export default function PlanDayPage(props: PageProps<"/plan/[day]">) {
  return (
    <Suspense fallback={<div className="page"><p className="muted">Chargement…</p></div>}>
      <Day params={props.params} />
    </Suspense>
  );
}
