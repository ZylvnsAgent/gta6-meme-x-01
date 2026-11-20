// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry is the X post itself. This program only hands the house the
// post's address: it copies POST.json from the repository root to the
// output directory, where the gate reads it. That is all it does — no
// network, no wall clock, no files outside the repository.
//
// The meme picture (entry.png) sits in this repository beside this file;
// the post on X carries it as its first picture, and the house reads the
// post (picture + text) straight from X.
//
// Local test, as the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir: string = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
} catch (err) {
  console.error(`failed to copy POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}

console.log(`copied POST.json to ${join(outDir, "POST.json")}`);
