/**
 * Tiny external store persisted in localStorage.
 * Mutations go through update(); React components subscribe with useStore().
 */
import { CONFIG } from "@/lib/config";
import { defaults, type AppData, type Settings } from "./types";

let data: AppData | null = null;
let version = 0;
const listeners = new Set<() => void>();

function read(): AppData {
  if (typeof window === "undefined") return defaults();
  try {
    const raw = localStorage.getItem(CONFIG.storageKey);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<AppData>;
      const d = defaults();
      return { ...d, ...parsed, settings: { ...d.settings, ...parsed.settings }, stats: { ...d.stats, ...parsed.stats } };
    }
  } catch {
    /* corrupted or blocked storage */
  }
  return defaults();
}

function persist() {
  try {
    localStorage.setItem(CONFIG.storageKey, JSON.stringify(data));
  } catch {
    /* quota / private mode */
  }
}

function emit() {
  version++;
  listeners.forEach((f) => f());
}

export const store = {
  get(): AppData {
    if (!data) data = read();
    return data;
  },
  /** Bumps on every change; used as the snapshot for useSyncExternalStore. */
  version: () => version,
  subscribe(fn: () => void) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  },
  update(fn: (d: AppData) => void) {
    fn(this.get());
    persist();
    emit();
  },
  settings: (): Settings => store.get().settings,
  setSetting<K extends keyof Settings>(key: K, value: Settings[K]) {
    this.update((d) => {
      d.settings[key] = value;
    });
  },
  exportJSON: () => JSON.stringify(store.get(), null, 2),
  importJSON(text: string) {
    const parsed = JSON.parse(text) as AppData;
    if (!parsed || typeof parsed !== "object" || !parsed.levels || !parsed.stats) throw new Error("Fichier de sauvegarde invalide");
    data = { ...defaults(), ...parsed };
    persist();
    emit();
  },
  reset() {
    data = defaults();
    persist();
    emit();
  },
};
