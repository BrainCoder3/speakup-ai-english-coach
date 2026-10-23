"use client";
/** One theme: 1) read and listen 2) type them from memory 3) use them in your own text. */
import Link from "next/link";
import { useEffect, useState } from "react";
import { useStore } from "@/lib/store/useStore";
import { setCourse } from "@/lib/course/lang";
import { themeById, themeExprs } from "@/data/expressions";
import { themeItems } from "@/lib/expressions/items";
import { isStudied, markStudied } from "@/lib/expressions/progress";
import { Session } from "@/components/train/Session";
import { Icon } from "@/components/ui/Icon";
import { ExprCard } from "./ExprCard";
import { UseIt } from "./UseIt";

export function ThemeView({ id }: { id: string }) {
  const ready = useStore();
  const [testing, setTesting] = useState(0);
  const theme = themeById(id);

  // Expressions are English: switch the voices, the AI and the checks to it.
  useEffect(() => {
    if (ready) setCourse("en");
  }, [ready]);

  if (!ready || !theme) return <div className="page"><p className="muted">Chargement…</p></div>;
  const start = () => {
    markStudied(theme);
    setTesting(1);
  };

  return (
    <div className="page exprs-page">
      <header className="page-head">
        <div>
          <Link className="link" href="/expressions"><Icon name="back" />Expressions</Link>
          <h1>{theme.icon} {theme.title}</h1>
          <p>{theme.items.length} expressions. Lis chaque exemple à voix haute dans ta tête, écoute-le, puis passe au test.</p>
        </div>
      </header>
      <ul className="xlist">{themeExprs(theme).map((x) => <ExprCard key={x.key} x={x} />)}</ul>
      {testing ? (
        <section className="card">
          <h3>🧠 Test : retape l&apos;expression de mémoire</h3>
          <Session pool={themeItems(theme)} onExit={() => setTesting(0)} />
        </section>
      ) : (
        <button className="btn primary next" onClick={start}><Icon name="arrow" />{isStudied(theme) ? "Me tester à nouveau" : "J'ai lu : me tester"}</button>
      )}
      {isStudied(theme) && <UseIt theme={theme} />}
    </div>
  );
}
