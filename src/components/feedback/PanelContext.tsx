"use client";
/** Shared state of the corrections panel (cards + focused card). */
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { Feedback } from "@/lib/ai/tasks/correction";

export interface Card {
  id: number;
  said: string;
  fb: Feedback;
}

interface PanelApi {
  cards: Card[];
  focusId: number | null;
  push: (said: string, fb: Feedback) => number;
  focus: (id: number) => void;
  clear: () => void;
}

const Ctx = createContext<PanelApi | null>(null);
let nextId = 1;

export function PanelProvider({ children }: { children: ReactNode }) {
  const [cards, setCards] = useState<Card[]>([]);
  const [focusId, setFocus] = useState<number | null>(null);
  const push = useCallback((said: string, fb: Feedback) => {
    const id = nextId++;
    setCards((c) => [{ id, said, fb }, ...c]);
    return id;
  }, []);
  const clear = useCallback(() => setCards([]), []);
  const api = useMemo(() => ({ cards, focusId, push, focus: setFocus, clear }), [cards, focusId, push, clear]);
  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function usePanel(): PanelApi {
  const v = useContext(Ctx);
  if (!v) throw new Error("usePanel must be used inside <PanelProvider>");
  return v;
}
