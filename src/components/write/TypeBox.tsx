"use client";
/** Text input (or textarea) with buttons for Spanish characters, inserted at the cursor. */
import { useRef, type KeyboardEvent } from "react";

const KEYS = ["á", "é", "í", "ó", "ú", "ü", "ñ", "¿", "¡"];

interface Props {
  value: string;
  onChange: (v: string) => void;
  onEnter?: () => void;
  multiline?: boolean;
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
}

export function TypeBox({ value, onChange, onEnter, multiline, placeholder, disabled, autoFocus }: Props) {
  const ref = useRef<HTMLInputElement & HTMLTextAreaElement>(null);

  const insert = (ch: string) => {
    const el = ref.current;
    const start = el?.selectionStart ?? value.length, end = el?.selectionEnd ?? value.length;
    onChange(value.slice(0, start) + ch + value.slice(end));
    requestAnimationFrame(() => {
      el?.focus();
      el?.setSelectionRange(start + ch.length, start + ch.length);
    });
  };
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && onEnter) {
      e.preventDefault();
      onEnter();
    }
  };
  const common = {
    ref, value, disabled, autoFocus, placeholder, spellCheck: false, autoComplete: "off", lang: "es",
    onChange: (e: { target: { value: string } }) => onChange(e.target.value),
    onKeyDown: onKey,
  };

  return (
    <div className="typebox">
      {multiline ? <textarea {...common} rows={7} /> : <input {...common} />}
      <div className="accent-keys" aria-label="Caractères espagnols">
        {KEYS.map((k) => (
          <button key={k} type="button" disabled={disabled} onClick={() => insert(k)}>{k}</button>
        ))}
      </div>
    </div>
  );
}
