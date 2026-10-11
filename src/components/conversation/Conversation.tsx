"use client";
/** Spoken conversation with mandatory spoken corrections. Must be inside <PanelProvider>. */
import { useEffect, useRef } from "react";
import { store } from "@/lib/store/store";
import { Composer } from "./Composer";
import { MessageItem } from "./MessageItem";
import { useConversation, type ConversationOptions } from "./useConversation";

export function Conversation(props: ConversationOptions) {
  const c = useConversation(props);
  const list = useRef<HTMLDivElement>(null);
  const { showText, allowTyping } = store.settings();

  useEffect(() => {
    list.current?.scrollTo({ top: list.current.scrollHeight, behavior: "smooth" });
  }, [c.msgs]);

  return (
    <div className="convo">
      <div className="messages" ref={list} aria-live="polite">
        {c.msgs.map((m) => (
          <MessageItem key={m.id} m={m} showText={showText} onFixDone={c.fixDone} onBadge={c.focusCard} />
        ))}
      </div>
      <Composer
        busy={c.busy}
        done={c.done}
        live={c.live}
        hint={c.hint}
        allowTyping={allowTyping}
        turns={c.turns}
        maxTurns={props.maxTurns}
        onMic={c.listenTurn}
        onHelp={c.help}
        onText={c.learnerTurn}
      />
    </div>
  );
}
