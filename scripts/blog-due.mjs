// Lists the blog schedule: `node scripts/blog-due.mjs --list` (or `npm run blog:schedule`).
// Without --list it reports whether a post is due today. On Vercel, posts go live at 08:00 IST on their date via
// middleware.js (no rebuild needed); this script is for checking the schedule locally.
import { appendFileSync } from "node:fs";
import { allPosts } from "../src/data/blog/index.ts";

const today = process.env.BLOG_NOW ?? new Date().toISOString().slice(0, 10);
const schedule = [...allPosts].sort((a, b) => (a.published < b.published ? -1 : 1));

if (process.argv.includes("--list")) {
  for (const p of schedule) console.log(`${p.published}  ${p.published <= today ? "live     " : "scheduled"}  /blog/${p.slug}/`);
  const next = schedule.find((p) => p.published > today);
  console.log(next ? `\nnext: ${next.published}  ${next.seo.title}` : "\nno more scheduled posts");
  process.exit(0);
}

const due = schedule.filter((p) => p.published === today);
console.log(due.length ? `due today (${today}): ${due.map((p) => p.slug).join(", ")}` : `nothing due today (${today})`);
if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `due=${due.length ? "true" : "false"}\n`);
