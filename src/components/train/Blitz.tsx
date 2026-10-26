"use client";
/** ⚡ Défi éclair: 60 seconds, as many typed answers as you can; a combo raises the points per answer. */
import { useEffect, useState } from "react";
import { activeCourse } from "@/lib/course/lang";
import { markDaily } from "@/lib/game/daily";
import { addXp, checkBadges } from "@/lib/game/xp";
import { store } from "@/lib/store/store";
import { checkSpelling } from "@/lib/scoring/spelling";
import { trainPool, type TrainItem } from "@/lib/train/pool";
import { grade } from "@/lib/train/schedule";
import { EXPR_THEMES } from "@/data/expressions";
import { themeItems } from "@/lib/expressions/items";
import { TypeBox } from "@/components/write/TypeBox";
import { BlitzOver, BlitzReady } from "./BlitzScreens";

const SECONDS = 60;
const blanks = (a: string) => a.replace(/\s*\/\s*/g, " ");
const points = (combo: number) => 10 + 5 * Math.min(6, Math.floor(combo / 3));
const START = { i: 0, combo: 0, score: 0, right: 0, wrong: 0, flash: "" };

/** Everything seen so far, topped up with all the expressions so a new learner can play at once. */
function makeDeck(): TrainItem[] {
  const all = [...trainPool(), ...(activeCourse() === "en" ? EXPR_THEMES.flatMap(themeItems) : [])];
  const unique = [...new Map(all.map((x) => [x.key, x])).values()];
  return unique.sort(() => Math.random() - 0.5);
}

export function Blitz() {
  const [phase, setPhase] = useState<"ready" | "play" | "over">("ready");
  const [deck, setDeck] = useState<TrainItem[]>([]);
  const [g, setG] = useState(START);
  const [left, setLeft] = useState(SECONDS);
  const [typed, setTyped] = useState("");
  const [startBest, setStartBest] = useState(0);
  const best = store.get().game.bestBlitz;
  const it = deck[g.i];

  useEffect(() => {
    if (phase !== "play") return;
    const t0 = Date.now();
    const timer = setInterval(() => {
      const rest = Math.max(0, SECONDS - (Date.now() - t0) / 1000);
      setLeft(rest);
      if (rest <= 0) setPhase("over");
    }, 200);
    return () => clearInterval(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "over") return;
    store.update((d) => {
      d.game.blitzRuns++;
      d.game.bestBlitz = Math.max(d.game.bestBlitz, g.score);
    });
    addXp(5 + Math.floor(g.score / 10));
    markDaily("blitz");
    checkBadges();
  }, [phase, g.score]);

  const record = phase === "over" && g.score > 0 && g.score > startBest;

  const start = () => {
    setStartBest(store.get().game.bestBlitz);
    setDeck(makeDeck());
    setG(START);
    setLeft(SECONDS);
    setTyped("");
    setPhase("play");
  };

  const submit = () => {
    if (!typed.trim() || !it) return;
    const right = checkSpelling(typed, it.answers.map(blanks)).kind === "right";
    grade(it.key, right);
    setG((p) => (right
      ? { ...p, i: p.i + 1, combo: p.combo + 1, score: p.score + points(p.combo), right: p.right + 1, flash: "" }
      : { ...p, i: p.i + 1, combo: 0, wrong: p.wrong + 1, flash: it.answers[0] }));
    setTyped("");
    if (g.i + 1 >= deck.length) setPhase("over"); // out of questions: the round simply ends
  };

  if (phase === "ready") return <BlitzReady best={best} onStart={start} />;
  if (phase === "over") return <BlitzOver score={g.score} right={g.right} wrong={g.wrong} best={best} record={record} xp={5 + Math.floor(g.score / 10)} onAgain={start} />;
  return (
    <section className="card blitz">
      <div className="meter"><i style={{ transform: `scaleX(${left / SECONDS})` }} /><span>{Math.ceil(left)} s · {g.score} pts · combo ×{g.combo}</span></div>
      {g.flash && <p className="warn">❌ Réponse : <b>{g.flash}</b></p>}
      {it && <p className="drill-sentence">{it.prompt.replace("___", "_____")}</p>}
      <TypeBox value={typed} onChange={setTyped} onEnter={submit} placeholder="Tape et appuie sur Entrée…" autoFocus />
    </section>
  );
}
