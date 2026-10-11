import { diffWords } from "@/lib/scoring/diff";

/** Shows removed words struck in red and added words in green. */
export function DiffText({ from, to }: { from: string; to: string }) {
  return (
    <div className="diff">
      {diffWords(from, to).map((p, i) => {
        const space = i ? " " : "";
        if (p.kind === "del") return <span key={i}>{space}<del>{p.text}</del></span>;
        if (p.kind === "ins") return <span key={i}>{space}<ins>{p.text}</ins></span>;
        return <span key={i}>{space + p.text}</span>;
      })}
    </div>
  );
}
