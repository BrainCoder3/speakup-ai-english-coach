/** Stroke icons (24x24). */
const PATHS = {
  play: "M11 5 6 9H2v6h4l5 4V5ZM15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14",
  slow: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM12 7v5l3 2",
  mic: "M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3ZM5 10a7 7 0 0 0 14 0M12 17v5M8 22h8",
  eye: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
  lock: "M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4",
  check: "M20 6 9 17l-5-5",
  arrow: "M5 12h14M13 6l6 6-6 6",
  back: "M19 12H5M11 6l-6 6 6 6",
  retry: "M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5",
  bulb: "M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z",
  book: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Zm0 0A2.5 2.5 0 0 0 6.5 22H20v-5",
  save: "M19 21 12 16l-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",
  translate: "m5 8 6 6M4 14l6-6 2-3M2 5h12M22 22l-5-10-5 10M14 18h6",
  help: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01",
  send: "m22 2-7 20-4-9-9-4 20-7Z",
} as const;

export type IconName = keyof typeof PATHS;

export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" className="icon">
      <path d={PATHS[name]} />
    </svg>
  );
}

export const Stars = ({ n }: { n: number }) => <em className="stars">{"★".repeat(n) + "☆".repeat(3 - n)}</em>;

export const Typing = () => (
  <span className="typing" aria-label="…">
    <i />
    <i />
    <i />
  </span>
);
