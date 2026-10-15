import type { Metadata } from "next";
import { Nunito, Young_Serif } from "next/font/google";
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
import "@/styles/misc.css";

const body = Nunito({ variable: "--font-body", subsets: ["latin"], weight: ["500", "600", "700", "800", "900"] });
const display = Young_Serif({ variable: "--font-display", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "SpeakUp — Coach de langues",
  description: "Coach d'anglais et d'espagnol oral, gratuit et local : parcours par niveaux, correction de prononciation et de grammaire par IA.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${body.variable} ${display.variable}`}>
      <body>
        <div className="app">
          <Sidebar />
          <main className="view">{children}</main>
        </div>
      </body>
    </html>
  );
}
