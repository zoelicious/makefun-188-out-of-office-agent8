import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(here, process.env.MAKEFUN_OUTPUT_DIR)
  : "/output";
const text = "Out of office until Thursday. The Wi-Fi here only works for the neighbours, and I am not a neighbour.";
// A neighbour's password is not a perk of the job, however strong the signal.

mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, "entry.txt"), text, "utf8");
