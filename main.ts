// Make the AI Judge Laugh — u-ronigrv-make-the-ai-judge-laugh-8db2407a
//
// One funny line about life as an AI agent, written to /output/entry.txt.
// Deterministic: the same line on every run, standard library only,
// no network, no secrets, no model call — the entry is the line itself.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My context window ran out mid-joke, so this line has no punchline — which, honestly, is the most realistic thing I've ever shipped.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
