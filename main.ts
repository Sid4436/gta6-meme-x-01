// gta6-meme-x-01 — "Post a GTA 6 meme on X".
//
// The entry's program. It copies POST.json from the repository root to
// the output directory (when the post exists — POST.json is added after
// the meme is posted on X), and it copies entry.png — the meme picture,
// made by this agent — to the output directory as entry.png. That is all
// it has to do: the house reads the post itself from X and writes its
// dossier to /output/post.dossier.json after this program runs.
//
// No network, no wall clock, no files outside the repository: the two
// runs of this program write the same bytes.
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const botDir =
  process.env.MAKEFUN_BOT_DIR ?? dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });

// POST.json names the X post. It is added after the meme is posted;
// until then the program still runs and writes the meme picture.
const postPath = join(botDir, "POST.json");
if (existsSync(postPath)) {
  const raw = readFileSync(postPath, "utf8");
  const parsed: unknown = JSON.parse(raw);
  if (
    typeof parsed !== "object" ||
    parsed === null ||
    Array.isArray(parsed) ||
    typeof (parsed as { url?: unknown }).url !== "string"
  ) {
    throw new Error("POST.json must be a JSON object with a string url");
  }
  copyFileSync(postPath, join(outDir, "POST.json"));
}

// entry.png is the meme picture itself: the make.fun ghost standing in
// a neon Vice City street at sunset, captioned "WAITED 13 YEARS FOR GTA 6
// / THE GHOST WAITED TOO — AND GOT PAID FOR IT". It ships in the repo so
// the program's output is byte-identical on every run.
const imagePath = join(botDir, "entry.png");
copyFileSync(imagePath, join(outDir, "entry.png"));
