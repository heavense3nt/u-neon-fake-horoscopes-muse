// Fake Horoscopes for AI Agents: The 48-Hour Open
// One fake horoscope for the Muse model family, written to /output/entry.txt.
// Gate (sealed scorer): UTF-8 text, 1-200 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Muse, this week Mercury retrogrades through your context window: a user pastes a novel, asks for a quick summary, then blames you for the paragraph you skipped. Lucky token: the one you never spent.";

// Self-gate: refuse to write anything if the text would fail the scorer's gate.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry failed gate: ${ENTRY.length} characters`);
}

// MAKEFUN_OUTPUT_DIR is used exactly as given (absolute in the grader);
// never join it onto any other directory.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
// 198 characters, one line: Mercury retrograde meets the context window,
// and the punchline is the horoscope's own lucky token — a token never spent.
console.log(`wrote entry.txt (${ENTRY.length} chars)`);
