"use client";
/** Targeted training: smart mixed session, 4/3/2 fluency and weak points — for the active language. */
import Link from "next/link";
import { useState } from "react";
import { useStore } from "@/lib/store/useStore";
import { lang } from "@/lib/course/lang";
import { trainPool } from "@/lib/train/pool";
import { dueCount, weakTopics } from "@/lib/train/schedule";
import { CourseSwitch } from "@/components/shell/CourseSwitch";
import { Icon } from "@/components/ui/Icon";
import { Blitz } from "./Blitz";
import { Fluency432 } from "./Fluency432";
import { MethodCard } from "./MethodCard";
import { Session } from "./Session";

type Tab = "session" | "blitz" | "fluency";

export function TrainView() {
  const ready = useStore();
  const [tab, setTab] = useState<Tab>("session");
  const [running, setRunning] = useState(0);
  if (!ready) return <div className="page"><p className="muted">Chargement…</p></div>;

  const pool = trainPool();
  const weak = weakTopics(pool);
  return (
    <div className="page train">
      <header className="page-head">
        <div>
          <h1>🧠 Entraînement ciblé — {lang().fr} {lang().flag}</h1>
          <p>{pool.length} questions déjà vues dans ton parcours · {dueCount(pool)} à travailler aujourd&apos;hui. 15 minutes par jour suffisent.</p>
        </div>
      </header>
      <CourseSwitch />
      <div className="seg">
        <button className={tab === "session" ? "on" : ""} onClick={() => setTab("session")}>🎯 Séance du jour</button>
        <button className={tab === "blitz" ? "on" : ""} onClick={() => setTab("blitz")}>⚡ Défi éclair</button>
        <button className={tab === "fluency" ? "on" : ""} onClick={() => setTab("fluency")}>⏱️ Fluidité 4/3/2</button>
      </div>
      {tab === "session" && (running ? (
        <Session key={running} onExit={() => setRunning(0)} />
      ) : (
        <section className="card">
          <h3>🎯 20 questions mélangées, tirées de tout ce que tu as appris</h3>
          <p className="muted">D&apos;abord tes questions ratées et celles qui arrivent à échéance, puis quelques nouvelles. Réponds de mémoire.</p>
          <button className="btn primary" onClick={() => setRunning(Date.now())}><Icon name="arrow" />Commencer la séance</button>
        </section>
      ))}
      {tab === "blitz" && <Blitz />}
      {tab === "fluency" && <Fluency432 />}
      {weak.length > 0 && (
        <section className="card">
          <h3>📉 Tes points faibles (taux d&apos;erreur)</h3>
          <ul className="weak">
            {weak.map((w) => (
              <li key={w.topic}>
                <span className="wbar"><i style={{ transform: `scaleX(${w.rate / 100})` }} /></span>
                <b>{w.rate} %</b> <Link className="link" href={w.href}>{w.topic}</Link> <small className="muted">({w.miss}/{w.seen})</small>
              </li>
            ))}
          </ul>
        </section>
      )}
      <MethodCard />
    </div>
  );
}
