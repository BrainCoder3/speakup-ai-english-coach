"use client";
/** Step 1 — listen & repeat every sentence with ≥ CONFIG.pass.repeat. */
import { useState } from "react";
import { CONFIG } from "@/lib/config";
import { itemScore, recordItem, stepAverage } from "@/lib/progress/rules";
import { speak } from "@/lib/speech/tts";
import type { Level } from "@/data/types";
import { Drill } from "@/components/drill/Drill";
import { Icon } from "@/components/ui/Icon";
import { Celebrate, Dots } from "./Celebrate";
import { completeStep, type Celebration } from "./completion";

const PASS = CONFIG.pass.repeat;

export function LessonNotes({ notes }: { notes: string[] }) {
  return (
    <section className="card lessoncard">
      <h3><Icon name="bulb" />À retenir</h3>
      <ul>{notes.map((n, i) => <li key={i} dangerouslySetInnerHTML={{ __html: n }} />)}</ul>
    </section>
  );
}

export function RepeatStep({ level }: { level: Level }) {
  const items = level.repeat;
  const ok = (i: number) => itemScore(level.id, "repeat", i) >= PASS;
  const firstTodo = () => Math.max(0, items.findIndex((_, i) => !ok(i)));
  const [i, setI] = useState(firstTodo);
  const [hide, setHide] = useState(false);
  const [canGoOn, setCanGoOn] = useState(false);
  const [done, setDone] = useState<Celebration | null>(null);

  if (done) return <Celebrate c={done} />;
  const allOk = items.every((_, k) => ok(k));

  const go = (k: number) => { setI(k); setCanGoOn(false); };
  const next = () => {
    if (allOk) return setDone(completeStep(level, "repeat", stepAverage(level.id, "repeat", items.length)));
    go(firstTodo());
  };

  return (
    <>
      <LessonNotes notes={level.lesson} />
      <div className="stephead">
        <div>
          <h2>🎧 Écoute & répète</h2>
          <p>Écoute la phrase, puis répète-la. Il faut <b>{PASS}/100</b> sur chaque phrase pour avancer.</p>
        </div>
        <label className="check">
          <input type="checkbox" checked={hide} onChange={(e) => setHide(e.target.checked)} /> Mode écoute seule (texte caché)
        </label>
      </div>
      <Dots count={items.length} current={i} isOk={ok} onPick={go} />
      <div className="zone">
        <p className="counter">Phrase {i + 1} / {items.length}</p>
        <Drill
          key={`${i}-${hide}`}
          target={items[i].en}
          fr={items[i].fr}
          pass={PASS}
          hideText={hide}
          onDone={(r) => {
            recordItem(level.id, "repeat", i, r.score);
            setCanGoOn(true);
            speak("Great!");
          }}
        />
        {(canGoOn || ok(i)) && (
          <button className="btn primary next" onClick={next}>
            <Icon name="arrow" />{allOk ? "Valider l'épreuve" : "Phrase suivante"}
          </button>
        )}
      </div>
    </>
  );
}
