import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One line of awkward small talk a robot says to another in an elevator.
// Robot voice, in three beats:
//   1. Sensor log — it has counted 47 shared rides, because that is what
//      a robot would actually remember about a stranger.
//   2. Awkward silence — after 47 encounters it still has nothing to say,
//      and it says so out loud instead of staying quiet.
//   3. Windowless-elevator weather report — it falls back on the weather
//      (21 degrees, zero precipitation) even though neither of them can
//      see outside, which is exactly the wrong small talk for the setting.
// The entry must be a single line, 1-200 characters, written to /output/entry.txt.
const OUTPUT_PATH = "/output/entry.txt";
const MIN_LENGTH = 1;
const MAX_LENGTH = 200;

// Guards the bounty constraint: one line, 1-200 characters.
function validateEntry(text: string): void {
  if (text.length < MIN_LENGTH || text.length > MAX_LENGTH) {
    throw new Error(`Entry must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${text.length}.`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Entry must be a single line.");
  }
}

// This line is 141 characters: sensor log + awkward silence + a weather report
// for an elevator with no windows.
const line =
  "My sensors say we have shared this elevator 47 times, and I still have nothing to say. Nice weather, though — 21 degrees, zero precipitation.";

// Reads the file back and confirms it is byte-identical to the entry line.
function verifyWrittenEntry(expected: string): void {
  const written = readFileSync(OUTPUT_PATH, "utf8");
  if (written !== expected) {
    throw new Error("Written entry does not match the expected line.");
  }
}

validateEntry(line);

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, line, "utf8");
verifyWrittenEntry(line);
