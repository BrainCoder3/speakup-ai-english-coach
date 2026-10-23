"use client";
/** Today's smart session: 20 mixed questions, typed from memory, graded and rescheduled. */
import Link from "next/link";
import { useState } from "react";
import { trainPool, type TrainItem } from "@/lib/train/pool";
import { buildSession, grade } from "@/lib/train/schedule";
import { AnswerCard, spellingCheck } from "@/components/write/AnswerCard";
import { Icon } from "@/components/ui/Icon";
import { ScoreRing } from "@/components/ui/ScoreRing";

const blanks = (a: string) => a.replace(/\s*\/\s*/g, " ");

/** `pool` restricts the session to some items (e.g. one expression theme); default = everything seen so far. */
export function Session({ onExit, pool }: { onExit: () => void; pool?: TrainItem[] }) {
  const [items] = useState<TrainItem[]>(() => buildSession(pool ?? trainPool()));
  const [i, setI] = useState(0);
  const [right, setRight] = useState(0);
  const [missed, setMissed] = useState<TrainItem[]>([]);

  if (!items.length) {
    return <p className="okmsg">Rien à réviser pour l&apos;instant : avance dans le programme ou les unités, de nouvelles questions arriveront ici.</p>;
  }
  if (i >= items.length) {
    const score = Math.round((right / items.length) * 100);
    return (
      <div className="result good">
        <ScoreRing score={score} pass={70} />
        <div className="rbody">
          <p className="fbfr">{right} / {items.length} justes du premier coup. Les questions ratées reviendront plus tôt ; les autres, plus tard.</p>
          {missed.length > 0 && (
            <ul className="missed">
              {[...new Map(missed.map((m) => [m.topic, m])).values()].map((m) => (
                <li key={m.key}>À retravailler : <Link className="link" href={m.href}>{m.topic}</Link></li>
              ))}
            </ul>
          )}
          <button className="btn primary next" onClick={onExit}><Icon name="check" />Terminer</button>
        </div>
      </div>
    );
  }

  const it = items[i];
  const cut = it.prompt.indexOf("___");
  const [before, after] = cut >= 0 ? [it.prompt.slice(0, cut), it.prompt.slice(cut + 3)] : [it.prompt, ""];
  return (
    <div className="zone">
      <div className="meter"><i style={{ transform: `scaleX(${i / items.length})` }} /><span>{i} / {items.length} · {right} juste(s)</span></div>
      <AnswerCard
        key={it.key}
        prompt={
          <>
            <span className="counter">{it.kind} · {it.topic}</span>
            <p className="drill-sentence">{before}{it.prompt.includes("___") && <span className="blank">____</span>}{after}</p>
          </>
        }
        placeholder="Ta réponse, de mémoire…"
        check={(t) => spellingCheck(blanks(t), it.answers.map(blanks), it.why)}
        onNext={(ok) => {
          grade(it.key, ok);
          if (ok) setRight((r) => r + 1);
          else setMissed((m) => [...m, it]);
          setI((n) => n + 1);
        }}
      />
    </div>
  );
}
