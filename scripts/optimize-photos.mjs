// Makes small, modern copies of every photo so pages load fast. Runs first in `npm run build` (and on its own:
// `node scripts/optimize-photos.mjs`).
//
// For each master in src/assets/photos/ (jpg, png, webp, avif) it writes WebP copies at 480, 800, 1200 and 1600px
// wide (never wider than the original) to src/assets/photos/_w/<name>-<width>.webp. Only those copies ship: the
// browser picks the smallest one that looks sharp (srcset), so a card downloads ~40 KB instead of ~200 KB.
// Up-to-date copies are skipped, so it only does work when a photo is added or changed. Commit the _w folder.
import { existsSync, mkdirSync, readdirSync, statSync, unlinkSync } from "node:fs";
import { join, parse } from "node:path";
import sharp from "sharp";

const SRC = "src/assets/photos";
const OUT = join(SRC, "_w");
const WIDTHS = [480, 800, 1200, 1600];
const QUALITY = 72;

mkdirSync(OUT, { recursive: true });
const masters = readdirSync(SRC).filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f) && statSync(join(SRC, f)).isFile());

let made = 0;
const keep = new Set();
for (const file of masters) {
  const src = join(SRC, file);
  const { name } = parse(file);
  const srcTime = statSync(src).mtimeMs;
  const { width = 0 } = await sharp(src).metadata();
  // every standard width up to the original, plus the original width itself when it's smaller than 1600
  const widths = [...new Set([...WIDTHS.filter((w) => w <= width), Math.min(width, WIDTHS.at(-1))])].sort((a, b) => a - b);
  for (const w of widths) {
    const out = join(OUT, `${name}-${w}.webp`);
    keep.add(out);
    if (existsSync(out) && statSync(out).mtimeMs >= srcTime) continue;
    await sharp(src).resize({ width: w, withoutEnlargement: true }).webp({ quality: QUALITY, effort: 5 }).toFile(out);
    made++;
  }
}

// remove copies whose master was deleted or renamed
let removed = 0;
for (const f of readdirSync(OUT)) {
  const p = join(OUT, f);
  if (!keep.has(p)) {
    unlinkSync(p);
    removed++;
  }
}
console.log(`photos: ${masters.length} masters, ${made} copies made, ${removed} stale removed, ${keep.size} copies total`);
