"use client";
/** Too many unreviewed mistakes? New lessons wait: fix the old errors first. */
import Link from "next/link";
import type { ReactNode } from "react";
import { dueErrors, MAX_DUE } from "@/lib/errors/bank";
import { activeCourse } from "@/lib/course/lang";
import { Icon } from "@/components/ui/Icon";

export function ReviewGate({ children }: { children: ReactNode }) {
  const due = dueErrors().filter((e) => (e.lang ?? "en") === activeCourse()).length;
  if (due >= MAX_DUE) {
    return (
      <div className="celebrate fail">
        <div className="big">🔁</div>
        <h2>{due} erreurs t&apos;attendent</h2>
        <p>Avant d&apos;apprendre du nouveau, redis correctement les phrases où tu t&apos;es trompé. C&apos;est là qu&apos;on progresse le plus.</p>
        <Link className="btn primary" href="/errors"><Icon name="retry" />Réviser mes erreurs</Link>
      </div>
    );
  }
  return (
    <>
      {due > 0 && (
        <p className="gate-note">
          🔁 {due} erreur{due > 1 ? "s" : ""} à revoir aujourd&apos;hui · <Link className="link" href="/errors">Réviser maintenant</Link>
          {" "}(au-delà de {MAX_DUE}, les leçons attendent)
        </p>
      )}
      {children}
    </>
  );
}
