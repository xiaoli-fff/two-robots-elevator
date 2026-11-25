import { mkdirSync, writeFileSync } from "node:fs";

// One line of awkward small talk a robot says to another in an elevator.
// The entry must be a single line, 1-200 characters, written to /output/entry.txt.
// This line is 141 characters: sensor log + awkward silence + a weather report
// for an elevator with no windows.
const line =
  "My sensors say we have shared this elevator 47 times, and I still have nothing to say. Nice weather, though — 21 degrees, zero precipitation.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
