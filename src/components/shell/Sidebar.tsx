"use client";
/** Left navigation: logo, AI status, mini stats, sections. */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import { sttSupported } from "@/lib/speech/stt";
import { MiniStats } from "./MiniStats";
import { StatusBadge } from "./StatusBadge";
import { TranslateButton } from "./TranslateDialog";

const NAV = [
  { href: "/", label: "🗺️ Parcours", match: (p: string) => p === "/" || p.startsWith("/lesson") },
  { href: "/plan", label: "🚀 Anglais en 30 jours", match: (p: string) => p.startsWith("/plan") },
  { href: "/free", label: "💬 Conversation libre", match: (p: string) => p.startsWith("/free") },
  { href: "/errors", label: "🔁 Mes erreurs", match: (p: string) => p.startsWith("/errors") },
  { href: "/notebook", label: "📒 Mon carnet", match: (p: string) => p.startsWith("/notebook") },
  { href: "/settings", label: "⚙️ Réglages", match: (p: string) => p.startsWith("/settings") },
];

const noop = () => () => {};

export function Sidebar() {
  const path = usePathname();
  const micOk = useSyncExternalStore(noop, sttSupported, () => true);
  return (
    <aside className="side">
      <div className="logo">
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <rect width="40" height="40" rx="12" fill="currentColor" />
          <path d="M12 25c2.5 3 5 4.5 8 4.5s5.5-1.5 8-4.5M14 15v4M26 15v4" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
        <div>
          <b>SpeakUp</b>
          <small>Anglais & espagnol</small>
        </div>
      </div>
      <StatusBadge />
      <MiniStats />
      <nav className="nav">
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} className={n.match(path) ? "on" : ""}>
            {n.label}
          </Link>
        ))}
      </nav>
      <TranslateButton />
      {!micOk && <p className="warn">⚠️ Reconnaissance vocale indisponible ici : ouvre l&apos;app dans Edge ou Chrome.</p>}
    </aside>
  );
}
