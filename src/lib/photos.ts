// Every photo in src/assets/photos is picked up at build time.
// Drop a file named e.g. "crew-sales.jpg" in that folder and <Photo name="crew-sales" /> shows it —
// no code change, and no 404s for images that don't exist yet (those slots render a designed fallback).
//
// Only the optimized WebP copies in _w/ ship (made by scripts/optimize-photos.mjs, which runs first in every
// build): each photo comes in several widths and the browser downloads the smallest one that looks sharp.
const files = import.meta.glob<string>("../assets/photos/_w/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});

type Variant = { w: number; url: string };
const byName: Record<string, Variant[]> = {};
for (const [path, url] of Object.entries(files)) {
  const m = path.match(/\/([^/]+)-(\d+)\.webp$/);
  if (!m) continue;
  (byName[m[1]] ??= []).push({ w: Number(m[2]), url });
}
for (const list of Object.values(byName)) list.sort((a, b) => a.w - b.w);

/** The largest copy (up to 1600px): for backgrounds and preloads. */
export const photoUrl = (name: string): string | undefined => byName[name]?.at(-1)?.url;

/** src + srcset for an <img>: pair with a `sizes` attribute describing how wide it's shown. */
export const photoSet = (name: string): { src: string; srcSet: string } | undefined => {
  const list = byName[name];
  if (!list?.length) return undefined;
  return { src: list.at(-1)!.url, srcSet: list.map((v) => `${v.url} ${v.w}w`).join(", ") };
};
