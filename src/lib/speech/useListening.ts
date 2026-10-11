"use client";
import { useEffect, useState } from "react";
import { onListeningChange } from "./stt";

/** True while the microphone is recording. */
export function useListening(): boolean {
  const [on, setOn] = useState(false);
  useEffect(() => onListeningChange(setOn), []);
  return on;
}
