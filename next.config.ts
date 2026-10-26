import type { NextConfig } from "next";

/**
 * `PAGES=1 next build` makes a fully static site (GitHub Pages, installable on a phone).
 * It lives under /<repo>, and has no /api routes (scripts/build-pages.mjs removes them for that build).
 */
const REPO = "speakup-ai-english-coach";
const pages = process.env.PAGES === "1";

const nextConfig: NextConfig = {
  // Partial prerendering cannot be combined with a static export.
  ...(pages ? {} : { cacheComponents: true, partialPrefetching: true }),
  env: { NEXT_PUBLIC_BASE_PATH: pages ? `/${REPO}` : "", NEXT_PUBLIC_STATIC: pages ? "1" : "" },
  ...(pages ? { output: "export" as const, basePath: `/${REPO}`, trailingSlash: true, images: { unoptimized: true } } : {}),
};

export default nextConfig;
