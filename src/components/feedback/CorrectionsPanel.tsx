"use client";
/** Right-hand panel listing the detailed corrections. */
import { Icon } from "@/components/ui/Icon";
import { usePanel } from "./PanelContext";
import { FeedbackCard } from "./FeedbackCard";

const DEFAULT_EMPTY =
  "Tes corrections apparaîtront ici après chaque phrase : la version correcte, la version « native », les explications en français et un exercice de prononciation.";

export function CorrectionsPanel({ empty = DEFAULT_EMPTY }: { empty?: string }) {
  const { cards, focusId } = usePanel();
  return (
    <aside className="panel">
      <h2>Corrections</h2>
      {cards.length === 0 ? (
        <div className="empty">
          <Icon name="bulb" size={38} />
          <p>{empty}</p>
        </div>
      ) : (
        cards.map((c) => <FeedbackCard key={c.id} said={c.said} fb={c.fb} focused={c.id === focusId} />)
      )}
    </aside>
  );
}
