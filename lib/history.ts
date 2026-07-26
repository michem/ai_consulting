import fs from "fs";
import path from "path";

export interface Commit {
  hash: string;
  shortHash: string;
  date: string; // ISO date
  subject: string;
}

export type HistoryMap = Record<string, Commit[]>;

let cached: HistoryMap | null = null;

/**
 * Version history per content file, generated at build time by
 * scripts/generate-history.mjs from `git log --follow`. A committed
 * snapshot serves as fallback for builds without a .git directory.
 */
export function getHistory(): HistoryMap {
  if (cached) return cached;
  const file = path.join(process.cwd(), "lib", "history.json");
  try {
    cached = JSON.parse(fs.readFileSync(file, "utf8")) as HistoryMap;
  } catch {
    cached = {};
  }
  return cached;
}

export function getHistoryForSlug(slug: string): Commit[] {
  return getHistory()[slug] ?? [];
}
