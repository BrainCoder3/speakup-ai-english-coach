"use client";
/** One expression: meaning, example with the expression highlighted, when to use it, audio. */
import { setCourse } from "@/lib/course/lang";
import { speak } from "@/lib/speech/tts";
import type { Expr } from "@/data/expressions";
import { Icon } from "@/components/ui/Icon";

const reEscape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function ExprCard({ x }: { x: Expr }) {
  const [before, hit, after] = x.ex.split(new RegExp(`(${reEscape(x.en)})`, "i"));
  const play = () => {
    setCourse("en");
    speak(x.ex);
  };
  return (
    <li className="xcard">
      <div className="xhead">
        <b className="xen">{x.en}</b>
        <span className="xfr">{x.fr}</span>
        <button className="btn ghost" onClick={play} aria-label={`Écouter « ${x.en} »`}><Icon name="play" /></button>
      </div>
      <p className="xex">{before}<mark>{hit}</mark>{after}</p>
      <p className="muted xuse">💡 {x.use}</p>
    </li>
  );
}
