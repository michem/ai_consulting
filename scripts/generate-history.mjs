// Generates lib/history.json: git commit history per content file.
// Runs before build/dev. When git or the .git directory is unavailable
// (e.g. a file-upload deployment), the committed snapshot is left as-is.
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const contentDir = path.join(root, "content");
const outFile = path.join(root, "lib", "history.json");

function gitAvailable() {
  try {
    execFileSync("git", ["rev-parse", "--is-inside-work-tree"], {
      cwd: root,
      stdio: ["ignore", "pipe", "ignore"],
    });
    return true;
  } catch {
    return false;
  }
}

if (!gitAvailable()) {
  console.log("[history] git not available; keeping committed lib/history.json snapshot");
  process.exit(0);
}

const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));
const history = {};
const SEP = "\u001f";

for (const file of files) {
  const slug = file.replace(/\.md$/, "");
  try {
    const out = execFileSync(
      "git",
      [
        "log",
        "--follow",
        `--format=%H${SEP}%h${SEP}%aI${SEP}%s`,
        "--",
        path.join("content", file),
      ],
      { cwd: root, encoding: "utf8" }
    );
    history[slug] = out
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        const [hash, shortHash, date, ...rest] = line.split(SEP);
        return { hash, shortHash, date, subject: rest.join(SEP) };
      });
  } catch (err) {
    console.warn(`[history] failed for ${file}: ${err.message}`);
    history[slug] = [];
  }
}

const total = Object.values(history).reduce((n, c) => n + c.length, 0);
if (total === 0) {
  console.log("[history] git log returned no commits (shallow clone?); keeping existing snapshot");
  process.exit(0);
}

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(history, null, 2) + "\n");
console.log(`[history] wrote ${outFile}: ${files.length} files, ${total} commits`);
