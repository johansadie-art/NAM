/**
 * Precompiled IIFE bundles for opening prototypes via file:// (Safari blocks fetch of local .jsx).
 * HTTP flow unchanged: still uses Babel + fetch from prototype-manifest.
 *
 * Run from Prototypes root: node scripts/build-all-file-fallbacks.mjs
 */
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { tmpdir } from "os";
import { spawnSync } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

function esbuildBundle({ portalDir, outName, plainPrefixFiles, jsxFiles }) {
  const dir = join(root, portalDir);
  const parts = [];
  for (const f of plainPrefixFiles) {
    parts.push(readFileSync(join(dir, f), "utf8"));
  }
  for (const f of jsxFiles) {
    parts.push(readFileSync(join(dir, f), "utf8"));
  }
  const combined = parts.join("\n\n/* ----- concat ----- */\n\n");
  const tmpDir = mkdtempSync(join(tmpdir(), "nam-fallback-"));
  const tmpIn = join(tmpDir, "combined.jsx");
  writeFileSync(tmpIn, combined, "utf8");
  const outFile = join(dir, outName);
  const r = spawnSync(
    "npx",
    [
      "--yes",
      "esbuild",
      tmpIn,
      "--bundle",
      "--format=iife",
      "--jsx=transform",
      "--loader:.jsx=jsx",
      "--legal-comments=none",
      `--outfile=${outFile}`,
    ],
    { cwd: root, stdio: "inherit", shell: false }
  );
  rmSync(tmpDir, { recursive: true, force: true });
  if (r.status !== 0) process.exit(r.status ?? 1);
  console.log("Wrote", outFile);
}

esbuildBundle({
  portalDir: "NAM CaseManagerPortal",
  outName: "case-manager-portal-file-fallback.js",
  plainPrefixFiles: ["components/data.js"],
  jsxFiles: [
    "components/tweaks-panel.jsx",
    "components/primitives.jsx",
    "components/sidebar.jsx",
    "components/dashboard.jsx",
    "components/case-list.jsx",
    "components/case-detail.jsx",
    "components/intake-wizard.jsx",
    "components/scheduling.jsx",
    "components/finance.jsx",
    "components/status-modal.jsx",
    "app-entry.jsx",
  ],
});

esbuildBundle({
  portalDir: "NAM Client Portal",
  outName: "client-portal-file-fallback.js",
  plainPrefixFiles: [],
  jsxFiles: [
    "components.jsx",
    "screens-public.jsx",
    "screens-portal.jsx",
    "screens-intake.jsx",
    "app.jsx",
  ],
});

esbuildBundle({
  portalDir: "Neutrals Portal 2.0",
  outName: "neutrals-portal-file-fallback.js",
  plainPrefixFiles: [],
  jsxFiles: [
    "icons.jsx",
    "data.jsx",
    "tweaks-panel.jsx",
    "screens-1.jsx",
    "screens-2.jsx",
    "neutrals-entry.jsx",
  ],
});

console.log("All file fallbacks built.");
