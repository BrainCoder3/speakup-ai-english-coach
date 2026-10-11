"use client";
/**
 * Re-renders the component whenever the persisted data changes.
 * The server snapshot is a constant, so the first client render matches SSR
 * and real data appears right after hydration.
 */
import { useSyncExternalStore } from "react";
import { store } from "./store";

const subscribe = (fn: () => void) => store.subscribe(fn);
const clientVersion = () => store.version() + 1; // +1: differs from the server value
const serverVersion = () => 0;

/** Returns true once client data is available (false during SSR / hydration). */
export function useStore(): boolean {
  const v = useSyncExternalStore(subscribe, clientVersion, serverVersion);
  return v > 0;
}
