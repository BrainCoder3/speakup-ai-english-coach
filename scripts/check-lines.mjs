// Fails if any source file is longer than MAX lines (keeps the code modular).
// Usage: node scripts/check-lines.mjs [max]
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const MAX = Number(process.argv[2] ?? 100);
const ROOTS = ["src", "scripts"];
const EXT = /\.(ts|tsx|js|mjs|css)$/;

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walk(p);
    else if (EXT.test(name)) yield p;
  }
}

const rows = [];
for (const root of ROOTS) for (const file of walk(root)) {
  const lines = readFileSync(file, "utf8").split(/\r?\n/).length;
  rows.push({ file: relative(".", file), lines });
}
rows.sort((a, b) => b.lines - a.lines);
const tooLong = rows.filter((r) => r.lines > MAX);

console.log(`${rows.length} fichiers · le plus long : ${rows[0].file} (${rows[0].lines} lignes) · limite ${MAX}`);
if (tooLong.length) {
  for (const r of tooLong) console.error(`✗ ${r.file} : ${r.lines} lignes`);
  process.exit(1);
}
console.log("✓ Tous les fichiers respectent la limite.");
