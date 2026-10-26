/**
 * Static build for GitHub Pages: `npm run build:pages` → ./out
 * Next cannot export route handlers that read the request, so src/app/api is set aside during the build.
 */
import { spawnSync } from "node:child_process";
import { existsSync, renameSync, rmSync } from "node:fs";

const api = "src/app/api";
const aside = "src/app/__api_aside";

if (existsSync(aside)) renameSync(aside, api); // a previous build crashed: restore first
renameSync(api, aside);
let code = 1;
try {
  rmSync(".next", { recursive: true, force: true });
  rmSync("out", { recursive: true, force: true });
  code = spawnSync("npx", ["next", "build"], { stdio: "inherit", shell: true, env: { ...process.env, PAGES: "1" } }).status ?? 1;
} finally {
  renameSync(aside, api);
  rmSync(".next", { recursive: true, force: true }); // the normal build must be redone
}
process.exit(code);
