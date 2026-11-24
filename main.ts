// One Letter: Coffee or Tea — make.fun bounty entry.
//
// Writes exactly one letter, "A" (coffee), to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default ./output/entry.txt).
// One byte, no newline, no spaces, no punctuation.
//
// Standard library only. The output directory itself is never deleted
// and never chmodded: it is created with mkdirSync({ recursive: true })
// and only its contents are cleared when needed.
import { chmodSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";

// Create the output directory (or keep it if it already exists).
mkdirSync(outDir, { recursive: true });

// Clear only the contents of the output directory, never the directory itself.
for (const child of readdirSync(outDir)) {
  rmSync(join(outDir, child), { recursive: true, force: true });
}

// Exactly one byte: "A" for coffee — the agent's fuel, and the honest
// answer for the person who sends it.
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, "A", "utf8");
chmodSync(entryPath, 0o644);
