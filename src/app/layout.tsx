import type { Metadata, Viewport } from "next";
import { Nunito, Young_Serif } from "next/font/google";
import { BadgeToast } from "@/components/shell/BadgeToast";
import { PwaRegister } from "@/components/shell/PwaRegister";
import { Sidebar } from "@/components/shell/Sidebar";
import "@/styles/base.css";
import "@/styles/shell.css";
import "@/styles/path.css";
import "@/styles/lesson.css";
import "@/styles/drill.css";
import "@/styles/conversation.css";
import "@/styles/panel.css";
import "@/styles/practice.css";
import "@/styles/learn.css";
import "@/styles/write.css";
import "@/styles/plan.css";
import "@/styles/train.css";
import "@/styles/expressions.css";
import "@/styles/misc.css";

const body = Nunito({ variable: "--font-body", subsets: ["latin"], weight: ["500", "600", "700", "800", "900"] });
const display = Young_Serif({ variable: "--font-display", subsets: ["latin"], weight: "400" });

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const viewport: Viewport = { themeColor: "#0f6e64", width: "device-width", initialScale: 1, viewportFit: "cover" };

export const metadata: Metadata = {
  manifest: `${BASE}/manifest.webmanifest`,
  icons: { icon: `${BASE}/icon-192.png`, apple: `${BASE}/apple-touch-icon.png` },
  appleWebApp: { capable: true, title: "SpeakUp", statusBarStyle: "default" },
  title: "SpeakUp — Coach de langues",
  description: "Coach d'anglais et d'espagnol oral, gratuit et local : parcours par niveaux, correction de prononciation et de grammaire par IA.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${body.variable} ${display.variable}`}>
      <body>
        <PwaRegister />
        <BadgeToast />
        <div className="app">
          <Sidebar />
          <main className="view">{children}</main>
        </div>
      </body>
    </html>
  );
}
