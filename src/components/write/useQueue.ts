"use client";
/**
 * A queue of written questions: a wrong answer shows the correction and the item comes back
 * at the end, so the series ends only when everything has been written correctly.
 * The score is the share of items right on the FIRST try.
 */
import { useCallback, useState } from "react";

export interface QItem {
  key: string;
}

export function useQueue<T extends QItem>(items: T[], shuffle = true) {
  const order = () => (shuffle ? [...items].sort(() => Math.random() - 0.5) : [...items]);
  const [queue, setQueue] = useState<T[]>(order);
  const [missed, setMissed] = useState<Set<string>>(new Set());
  const [round, setRound] = useState(0);

  const current = queue[0] ?? null;
  const done = queue.length === 0;
  const firstTry = items.length - missed.size;
  const score = Math.round((firstTry / Math.max(1, items.length)) * 100);

  /** Records the answer to the current item and moves on. */
  const answered = useCallback((right: boolean) => {
    setQueue((q) => {
      if (!q.length) return q;
      if (!right) setMissed((m) => new Set(m).add(q[0].key));
      return right ? q.slice(1) : [...q.slice(1), q[0]];
    });
    setRound((r) => r + 1);
  }, []);

  const restart = useCallback(() => {
    setQueue(order());
    setMissed(new Set());
    setRound((r) => r + 1);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { current, done, left: queue.length, total: items.length, missed: missed.size, score, round, answered, restart };
}
