import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ThemeView } from "@/components/expressions/ThemeView";
import { EXPR_THEMES, themeById } from "@/data/expressions";

/** Every theme is known at build time (static pages). */
export function generateStaticParams() {
  return EXPR_THEMES.map((t) => ({ theme: t.id }));
}

async function Theme({ params }: { params: PageProps<"/expressions/[theme]">["params"] }) {
  const { theme } = await params;
  if (!themeById(theme)) notFound();
  return <ThemeView id={theme} />;
}

export default function ThemePage(props: PageProps<"/expressions/[theme]">) {
  return (
    <Suspense fallback={<div className="page"><p className="muted">Chargement…</p></div>}>
      <Theme params={props.params} />
    </Suspense>
  );
}
