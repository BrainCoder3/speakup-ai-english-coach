"use client";
/** 4/3/2 fluency drill: same story three times, less time each round; speaking rate shown. */
import { useState } from "react";
import { activeCourse } from "@/lib/course/lang";
import { currentDay } from "@/lib/plan/progress";
import { stopHint } from "@/lib/speech/stopPhrase";
import { store } from "@/lib/store/store";
import { DAYS } from "@/data/plan";
import { SPEAKING } from "@/data/speaking";
import { Icon } from "@/components/ui/Icon";
import { ROUNDS, useFluency } from "./useFluency";

/** Topics: today's programme prompt (English) or the current unit's topics (Spanish). */
function topics(): string[] {
  if (activeCourse() === "en") return [DAYS[currentDay() - 1].speak.prompt, ...DAYS.slice(0, currentDay()).map((d) => d.speak.prompt).reverse()];
  return Object.entries(SPEAKING).filter(([k]) => k.startsWith("es")).flatMap(([, t]) => t.map((x) => x.prompt));
}

export function Fluency432() {
  const list = topics();
  const [topic, setTopic] = useState(list[0] ?? "Talk about your day.");
  const [run, setRun] = useState(0);
  return (
    <div className="zone">
      <p className="muted">
        Raconte <b>la même histoire trois fois</b> : 4 minutes, puis 3, puis 2. Ne prépare rien par écrit. À chaque tour, va plus vite
        et plus directement à l&apos;essentiel. Termine un tour en avance en disant « {stopHint()} ».
      </p>
      <label className="topic-pick">
        Sujet :
        <select value={topic} onChange={(e) => { setTopic(e.target.value); setRun((r) => r + 1); }}>
          {[...new Set(list)].slice(0, 12).map((t) => <option key={t} value={t}>{t.length > 90 ? `${t.slice(0, 90)}…` : t}</option>)}
        </select>
      </label>
      <FluencyRounds key={`${topic}-${run}`} topic={topic} onRestart={() => setRun((r) => r + 1)} />
      <History />
    </div>
  );
}

function FluencyRounds({ topic, onRestart }: { topic: string; onRestart: () => void }) {
  const f = useFluency(topic);
  const gain = f.wpm.length > 1 ? Math.round(((f.wpm[f.wpm.length - 1] - f.wpm[0]) / Math.max(1, f.wpm[0])) * 100) : null;
  return (
    <div className="qcard">
      <p className="question small">{topic}</p>
      <div className="rounds">
        {ROUNDS.map((s, k) => (
          <div key={s} className={`round ${k === f.round ? "cur" : ""} ${k < f.round ? "ok" : ""}`}>
            <b>{s / 60} min</b><small>{f.wpm[k] ? `${f.wpm[k]} mots/min` : k === f.round && f.left !== null ? `${Math.floor(f.left / 60)}:${String(f.left % 60).padStart(2, "0")}` : "—"}</small>
          </div>
        ))}
      </div>
      {f.live && <div className="live">{f.live}</div>}
      {f.error && <p className="warn">{f.error}</p>}
      {!f.done && (f.left === null
        ? <button className="btn mic-btn big" onClick={f.start}><Icon name="mic" />Tour {f.round + 1} : parler {ROUNDS[f.round] / 60} min</button>
        : <button className="btn mic-btn big rec" onClick={f.finish}><Icon name="mic" />J&apos;écoute… (clique pour finir)</button>)}
      {f.done && (
        <p className="okmsg">
          ✅ Débit : {f.wpm.join(" → ")} mots/min{gain !== null ? ` (${gain >= 0 ? "+" : ""}${gain} %)` : ""}. Un natif parle à ~150 mots/min : refais l&apos;exercice demain sur un nouveau sujet.
          <button className="btn small" onClick={onRestart}><Icon name="retry" />Recommencer</button>
        </p>
      )}
    </div>
  );
}

function History() {
  const runs = store.get().fluency.slice(0, 5);
  if (!runs.length) return null;
  return (
    <div className="card">
      <h4>Tes dernières séances 4/3/2</h4>
      <ul className="missed">{runs.map((r, k) => <li key={k}>{r.date} : <b>{r.wpm.join(" → ")}</b> mots/min — <small>{r.topic.slice(0, 60)}…</small></li>)}</ul>
    </div>
  );
}
