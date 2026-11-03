// Quality gate for every blog post, published or scheduled. Runs before each build (npm run build) and can be
// run on its own: `node scripts/check-blog.mjs` (all posts) or `node scripts/check-blog.mjs scheduled-2` (one batch).
// Errors fail the build; warnings are printed for a human to judge.
import { readdirSync } from "node:fs";
import { allPosts } from "../src/data/blog/index.ts";
import { pages } from "../src/data/pages/index.ts";

const only = process.argv[2];
const batch = only ? (await import(`../src/data/blog/${only.replace(/\.ts$/, "")}.ts`)) : null;
const targets = batch ? [...new Map(Object.values(batch).flat().filter((x) => x && typeof x === "object" && "slug" in x).map((p) => [p.slug, p])).values()] : allPosts;

const photos = new Set(readdirSync("src/assets/photos").map((f) => f.replace(/\.(jpe?g|png|webp|avif)$/i, "")));
const pagePaths = new Set(["/", "/privacy/", "/terms/", "/sitemap/", "/blog/", ...pages.map((p) => `/${p.slug}/`)]);
const postBySlug = new Map(allPosts.map((p) => [p.slug, p]));

const BANNED = /\b(delve|tapestry|realm|multifaceted|bespoke|pivotal|moreover|leverage|seamless(ly)?|robust|cutting-edge|state-of-the-art|unlock|elevate|game-changer|revolutioni[sz]e|fast-paced|digital age|let's dive|when it comes to|it's important to note|in conclusion|navigate the|embark|look no further|pride ourselves|second to none|world-class|top-notch|one-stop|nestled|boasts|a testament to|myriad|plethora|peace of mind|tailored|comprehensive|dedicated team|trusted partner|rest assured|hassle-free|stress-free|empower|streamline|your journey|experience the difference|say goodbye to)\b/i;

const words = (s) => s.replace(/\*\*|\[|\]\([^)]*\)/g, "").split(/\s+/).filter(Boolean).length;
const textOf = (b) => {
  switch (b.t) {
    case "p": case "h2": case "h3": return [b.text];
    case "ul": case "ol": return b.items;
    case "table": return [...b.head, ...b.rows.flat(), b.note ?? "", b.caption ?? ""];
    case "callout": return [b.title, b.text];
    case "checklist": return [b.title, ...b.items];
    case "template": return [b.label, b.subject, b.body];
    case "figure": return [b.caption];
    case "stats": return b.items.flatMap((i) => [i.value, i.label, i.source]);
    case "bars": return [b.title, b.source, ...b.items.map((i) => i.label)];
    case "cta": return [b.title, b.text];
    default: return [];
  }
};

let errors = 0;
let warnings = 0;
const seenPhotos = new Map();
for (const p of allPosts) for (const ph of [p.hero, ...p.body.filter((b) => b.t === "figure").map((b) => b.photo)]) {
  if (seenPhotos.has(ph.name) && seenPhotos.get(ph.name) !== p.slug) seenPhotos.set(ph.name, "DUP");
  else seenPhotos.set(ph.name, p.slug);
}

for (const p of targets) {
  const E = (m) => (errors++, console.log(`  ✗ ${p.slug}: ${m}`));
  const W = (m) => (warnings++, console.log(`  ⚠ ${p.slug}: ${m}`));

  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.slug)) E("slug must be kebab-case");
  if (allPosts.filter((x) => x.slug === p.slug).length > 1) E("duplicate slug");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(p.published) || !/^\d{4}-\d{2}-\d{2}$/.test(p.updated)) E("dates must be YYYY-MM-DD");
  if (p.updated < p.published) E("updated is before published");

  const aw = words(p.answer);
  if (aw < 40 || aw > 75) E(`answer box is ${aw} words (needs 40–75)`);
  if (p.takeaways.length !== 5) E(`needs exactly 5 takeaways (has ${p.takeaways.length})`);
  if (p.faqs.length < 3 || p.faqs.length > 7) E(`needs 3–7 FAQs (has ${p.faqs.length})`);
  for (const f of p.faqs) {
    const fw = words(f.a);
    if (fw < 20 || fw > 90) W(`FAQ answer "${f.q.slice(0, 40)}…" is ${fw} words (aim 40–60)`);
  }
  if (!p.body.slice(0, 3).some((b) => b.t === "table" || b.t === "checklist" || b.t === "stats")) E("no table, checklist or stats in the first 3 blocks");
  const h2s = p.body.filter((b) => b.t === "h2");
  if (h2s.length < 4) E(`only ${h2s.length} H2 sections`);
  if (!h2s.some((h) => /mistake/i.test(h.text))) E('no "mistakes" section');
  if (new Set(h2s.map((h) => h.id)).size !== h2s.length) E("duplicate H2 ids");
  if (!p.body.some((b) => b.t === "cta")) E("no CTA block");
  if (p.seo.title.length > 70) W(`SEO title is ${p.seo.title.length} chars (aim ≤ 65)`);
  if (p.seo.description.length < 110 || p.seo.description.length > 170) W(`meta description is ${p.seo.description.length} chars (aim 120–160)`);

  const total = words([p.answer, ...p.takeaways, ...p.body.flatMap(textOf), ...p.faqs.flatMap((f) => [f.q, f.a])].join(" "));
  if (total < 1100) E(`only ${total} words (needs 1,100+)`);

  // links
  const all = [...p.body.flatMap(textOf), p.answer, ...p.takeaways, ...p.faqs.map((f) => f.a)].join("\n");
  const links = [...all.matchAll(/\]\(([^)]+)\)/g)].map((m) => m[1]).concat(p.body.filter((b) => b.t === "cta").map((b) => b.href));
  const internal = links.filter((l) => l.startsWith("/"));
  for (const l of internal) {
    const m = l.match(/^\/blog\/([^/]+)\/$/);
    if (m) {
      const target = postBySlug.get(m[1]);
      if (!target) E(`links to unknown post ${l}`);
      else if (target.published > p.published) E(`links to ${l}, which publishes later (${target.published}); that link would be dead until then`);
    } else if (!pagePaths.has(l)) E(`links to unknown page ${l}`);
  }
  if (new Set(internal).size < 6) E(`only ${new Set(internal).size} distinct internal links (needs 6+)`);
  const supportHits = internal.filter((l) => p.supports.some((s) => l === `/${s}/`)).length;
  if (supportHits < 2) E(`only ${supportHits} links to the supported product page(s) (needs 2+)`);
  for (const l of links.filter((l) => !l.startsWith("/"))) if (!l.startsWith("https://")) E(`external link must be https: ${l}`);
  for (const s of p.supports) if (!pagePaths.has(`/${s}/`)) E(`supports unknown page ${s}`);
  for (const r of p.related) if (!postBySlug.has(r)) E(`related post ${r} doesn't exist`);
  for (const s of p.sources) if (!s.url.startsWith("https://")) E(`source must be https: ${s.url}`);

  // facts need sources
  if (/\d+(\.\d+)?\s?%|\b\d+(\.\d+)?\s?(billion|million)\b/i.test(all) && !p.sources.length) E("has statistics but no sources");

  // copy
  const bad = all.match(BANNED) ?? `${p.title} ${p.excerpt}`.match(BANNED);
  if (bad) E(`banned phrase: "${bad[0]}"`);
  if (/—/.test(all)) W("uses em dashes; prefer commas, colons or full stops");

  // photos
  for (const ph of [p.hero, ...p.body.filter((b) => b.t === "figure").map((b) => b.photo)]) {
    if (!/^blog-[a-z0-9-]+$/.test(ph.name) && !photos.has(ph.name)) E(`photo ${ph.name} is neither a blog- slot nor an existing photo`);
    if (seenPhotos.get(ph.name) === "DUP") E(`photo slot ${ph.name} is used by more than one post`);
    if (!photos.has(ph.fallback)) E(`fallback photo ${ph.fallback} doesn't exist in src/assets/photos`);
    if (!ph.alt || ph.alt.length < 15) E(`photo ${ph.name} needs real alt text`);
  }
}

console.log(`blog check: ${targets.length} post(s), ${errors} error(s), ${warnings} warning(s)`);
if (errors) process.exit(1);
