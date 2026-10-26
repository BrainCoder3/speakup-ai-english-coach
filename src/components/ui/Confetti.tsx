/** A burst of confetti (pure CSS, deterministic positions). */
const COLORS = ["#0f6e64", "#e8a33d", "#d9534f", "#3b82f6", "#8b5cf6", "#2fa36b"];

export function Confetti({ count = 36 }: { count?: number }) {
  return (
    <div className="confetti" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <i
          key={i}
          style={{
            left: `${(i * 37 + 11) % 100}%`,
            background: COLORS[i % COLORS.length],
            animationDelay: `${((i * 13) % 10) / 10}s`,
            animationDuration: `${2.2 + ((i * 7) % 10) / 10}s`,
            transform: `rotate(${(i * 53) % 360}deg)`,
          }}
        />
      ))}
    </div>
  );
}
