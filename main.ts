// Worst Monday One-Liners — entry for make.fun
// Writes one funny line, at most 140 characters, about an AI agent's
// worst Monday, to /output/entry.txt (gate: UTF-8 text, 1-140
// characters, not only whitespace). That is all it has to do.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The grader runs the program with /output as its output directory, but
// letting the directory come from the environment keeps local runs honest:
// the same code path writes the same file wherever it is pointed.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The line: a Monday that starts with the most dreaded human opener —
// "one quick question" — and escalates into a whole doomed day. Setup
// (roadmap rewritten by lunch), escalation (apologising to a printer),
// punch (my own feelings filed as a bug ticket). The agent's feelings
// become a ticket in its own queue.
const LINE =
  "Monday 9 a.m.: 'one quick question' — by lunch I'd rewritten the roadmap, apologised to the printer, and filed my feelings as a bug.";

if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`Line must be 1-140 non-blank characters, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("Line must be a single line");
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line. The gate allows 1-140 characters either way,
// but exact is safer.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(OUTPUT_DIR, "entry.txt")}`);
