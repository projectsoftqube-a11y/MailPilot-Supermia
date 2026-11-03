// Pre-renders the built pages to static HTML and writes the SEO files.
// Runs after `vite build` (client, into dist/) and `vite build --ssr` (server bundle, into dist-ssr/).
import { createHash } from "node:crypto";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { pathToFileURL } from "node:url";

process.env.NODE_ENV = "production";
const ssr = await import(pathToFileURL("dist-ssr/entry-server.js").href);

// vite.config.ts is the single source of the site URL; it's already written into the canonical link.
const home = await readFile("dist/index.html", "utf8");
const SITE = home.match(/<link rel="canonical" href="(https?:\/\/[^"]+?)\/?"/)?.[1];
if (!SITE) throw new Error("prerender: no canonical link in dist/index.html");
const description = home.match(/<meta\s+name="description"\s+content="([^"]+)"/)[1];

const NAME = "MailPilot AI";
const ALIASES = ["MailPilot", "Mail Pilot", "Mail Pilot AI"];
const { company } = ssr;
const [, city, region, postalCode] = company.address[1].match(/^(.+?), ([A-Z]{2}) (\d{5})/);
const today = new Date().toISOString().slice(0, 10);
const abs = (path) => `${SITE}${path}`;

const org = {
  "@type": "Organization",
  "@id": `${SITE}/#org`,
  name: "SuperMIA",
  legalName: company.name,
  url: "https://supermia.ai/",
  logo: `${SITE}/icon-512.png`,
  email: company.email,
  telephone: company.phone,
  address: { "@type": "PostalAddress", streetAddress: company.address[0], addressLocality: city, addressRegion: region, postalCode, addressCountry: "US" },
  sameAs: ["https://supermia.ai/", "https://botfinity.ai/", "https://supermia.ai/ai-mailpilot/"],
};
const website = { "@type": "WebSite", "@id": `${SITE}/#website`, url: `${SITE}/`, name: NAME, alternateName: ALIASES, inLanguage: "en", publisher: { "@id": org["@id"] } };
const app = {
  "@type": "SoftwareApplication",
  "@id": `${SITE}/#app`,
  name: NAME,
  alternateName: ALIASES,
  description,
  url: `${SITE}/`,
  image: `${SITE}/images/og-image.jpg`,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "AI email assistant",
  operatingSystem: "Web",
  featureList: [
    ...ssr.features.map((f) => f.title),
    "AI morning briefing of urgent emails, deadlines, tasks and meetings",
    "Calendar-aware replies with meeting conflict detection",
    "Two-way sync with Gmail and Outlook",
  ],
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free starter credits, no credit card needed; then 200 credits per month", url: ssr.links.signup },
  publisher: { "@id": org["@id"] },
};

const faqNode = (id, list) => ({
  "@type": "FAQPage",
  "@id": id,
  mainEntity: list.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

const crumbs = (list) => ({
  "@type": "BreadcrumbList",
  itemListElement: list.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: abs(path) })),
});

const homeGraph = [org, website, app, faqNode(`${SITE}/#faq`, ssr.faqs)];

const legalGraph = (doc) => {
  const d = ssr.legal[doc];
  const url = abs(`/${doc}/`);
  return [
    org,
    website,
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: d.title,
      description: d.intro,
      dateModified: new Date(`${d.updated} 12:00 UTC`).toISOString().slice(0, 10),
      isPartOf: { "@id": website["@id"] },
      publisher: { "@id": org["@id"] },
    },
    crumbs([
      [NAME, "/"],
      [d.title, `/${doc}/`],
    ]),
  ];
};

const bySlug = new Map(ssr.pages.map((p) => [p.slug, p]));
const pageGraph = (p) => {
  const path = `/${p.slug}/`;
  const url = abs(path);
  const parent = p.parent ? bySlug.get(p.parent) : undefined;
  const allFaqs = [...p.faqs, ...p.sections.filter((s) => s.type === "faqs").flatMap((s) => s.items)];
  const answer = p.sections.find((s) => s.type === "answer");
  const graph = [
    org,
    website,
    app,
    {
      "@type": p.slug === "faq" ? "FAQPage" : "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: p.seo.title,
      headline: `${p.hero.title} ${p.hero.script}`,
      description: p.seo.description,
      keywords: p.seo.keywords.join(", "),
      inLanguage: "en",
      dateModified: p.updated,
      isPartOf: { "@id": website["@id"] },
      about: { "@id": app["@id"] },
      publisher: { "@id": org["@id"] },
      // the short answer at the top of each page is written to be read aloud and quoted by answer engines
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".pg-hero__title", ".pg-answer__a"] },
      ...(answer && p.slug !== "faq" ? { mainEntity: { "@type": "Question", name: answer.q, acceptedAnswer: { "@type": "Answer", text: answer.a } } } : {}),
      ...(p.slug === "faq" ? { mainEntity: allFaqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) } : {}),
    },
    crumbs([[NAME, "/"], ...(parent ? [[parent.nav.label === "All features" ? "Features" : parent.nav.label, `/${parent.slug}/`]] : []), [p.nav.label, path]]),
  ];
  if (p.slug !== "faq" && allFaqs.length) graph.push(faqNode(`${url}#faq`, allFaqs));
  const steps = p.sections.find((s) => s.type === "steps");
  if (p.slug === "how-it-works" && steps) {
    graph.push({
      "@type": "HowTo",
      "@id": `${url}#howto`,
      name: "How to set up MailPilot AI",
      totalTime: "PT18M",
      step: steps.items.map((st, i) => ({ "@type": "HowToStep", position: i + 1, name: st.title, text: st.text })),
    });
  }
  return graph;
};

const siteMapGraph = () => [
  org,
  website,
  { "@type": "WebPage", "@id": `${abs("/sitemap/")}#webpage`, url: abs("/sitemap/"), name: "Sitemap", isPartOf: { "@id": website["@id"] } },
  crumbs([
    [NAME, "/"],
    ["Sitemap", "/sitemap/"],
  ]),
];

// image helpers: used for article schema and the image sitemap
const xml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const imagesIn = (body) => {
  const seen = new Set();
  const out = [];
  for (const m of body.matchAll(/<img\b[^>]*>/g)) {
    const src = m[0].match(/\ssrc="([^"]+)"/)?.[1];
    const alt = m[0].match(/\salt="([^"]*)"/)?.[1] ?? "";
    if (!src || !alt || !src.startsWith("/assets/") || seen.has(src)) continue;
    seen.add(src);
    out.push({ loc: abs(src), title: alt.replace(/&amp;/g, "&") });
  }
  return out.slice(0, 12);
};
// `<` is escaped so the JSON can never close the script tag early
const ld = (graph) => `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c")}</script>`;


// ---------- Blog ----------
// Every post is built in advance. middleware.js decides by the clock (08:00 IST on each post's date) which posts
// exist and which snapshot of the blog list, sitemap and llms.txt to serve. Snapshots live in dist/_snap/<date>/.
const postUrl = (p) => abs(`/blog/${p.slug}/`);
const blogIndexGraph = (cards) => [
  org,
  website,
  {
    "@type": "Blog",
    "@id": `${abs("/blog/")}#blog`,
    url: abs("/blog/"),
    name: "MailPilot AI Blog",
    description: "Guides on email follow-ups, inbox routines, AI email assistants and email security.",
    inLanguage: "en",
    publisher: { "@id": org["@id"] },
    blogPost: cards.map((p) => ({ "@type": "BlogPosting", "@id": `${postUrl(p)}#article`, headline: p.title, url: postUrl(p), datePublished: p.published })),
  },
  {
    "@type": "ItemList",
    itemListElement: cards.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: postUrl(p), name: `${p.title} ${p.script ?? ""}`.trim() })),
  },
  crumbs([
    [NAME, "/"],
    ["Blog", "/blog/"],
  ]),
];
const postGraph = (p, body) => {
  const url = postUrl(p);
  const image = imagesIn(body)[0]?.loc ?? `${SITE}/images/og-image.jpg`;
  return [
    org,
    website,
    app,
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      url,
      headline: p.seo.title,
      name: `${p.title} ${p.script ?? ""}`.trim(),
      description: p.seo.description,
      abstract: p.answer,
      image,
      datePublished: `${p.published}T${ssr.PUBLISH_TIME}`,
      dateModified: p.updated === p.published ? `${p.updated}T${ssr.PUBLISH_TIME}` : p.updated,
      author: { "@type": "Organization", name: p.author, url: `${SITE}/`, parentOrganization: { "@id": org["@id"] } },
      publisher: { "@id": org["@id"] },
      articleSection: p.category,
      keywords: p.seo.keywords.join(", "),
      wordCount: ssr.wordCount(p),
      timeRequired: `PT${ssr.readMinutes(p)}M`,
      inLanguage: "en",
      isPartOf: { "@id": `${abs("/blog/")}#blog` },
      about: { "@id": app["@id"] },
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".bl-hero__title", ".bl-answer__text"] },
      ...(p.sources.length ? { citation: p.sources.map((src) => ({ "@type": "CreativeWork", name: src.label, url: src.url })) } : {}),
    },
    crumbs([
      [NAME, "/"],
      ["Blog", "/blog/"],
      [`${p.title} ${p.script ?? ""}`.trim(), `/blog/${p.slug}/`],
    ]),
    ...(p.faqs.length ? [faqNode(`${url}#faq`, p.faqs)] : []),
  ];
};

// page data for the browser: `<` escaped so it can never close the script tag early
const dataTag = (data) => `<script id="page-data" type="application/json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;
const ROOT = '<div id="root"></div>';
const fill = (tpl, file, body, graph, data) => {
  if (!tpl.includes(ROOT)) throw new Error(`prerender: no empty #root in ${file}`);
  return tpl.replace(ROOT, `<div id="root">${body}</div>`).replace("</head>", `    ${ld(graph)}\n    ${data ? dataTag(data) : ""}\n  </head>`);
};

const priority = (p) =>
  p.slug === "features" ? "0.9" : ["feature", "solution", "integration"].includes(p.group) || ["pricing", "how-it-works"].includes(p.slug) ? "0.8" : "0.7";

// pages that don't change with the blog schedule
const staticDocs = [
  { path: "/", file: "dist/index.html", body: ssr.renderHome(), graph: homeGraph, lastmod: today, priority: "1.0", changefreq: "weekly" },
  ...ssr.pages.map((p) => ({ path: `/${p.slug}/`, file: `dist/${p.slug}/index.html`, body: ssr.renderPage(p.slug), graph: pageGraph(p), lastmod: p.updated, priority: priority(p), changefreq: "monthly" })),
  ...["privacy", "terms"].map((doc) => ({
    path: `/${doc}/`,
    file: `dist/${doc}/index.html`,
    body: ssr.renderLegal(doc),
    graph: legalGraph(doc),
    lastmod: new Date(`${ssr.legal[doc].updated} 12:00 UTC`).toISOString().slice(0, 10),
    priority: "0.3",
    changefreq: "yearly",
  })),
];
for (const d of staticDocs) await writeFile(d.file, fill(await readFile(d.file, "utf8"), d.file, d.body, d.graph));

// every article, once (its related posts are all published on or before it, so the page never changes)
const postDocs = [];
for (const p of ssr.allPosts) {
  const file = `dist/blog/${p.slug}/index.html`;
  const related = ssr.relatedFor(p);
  const body = ssr.renderPost(p, related);
  await writeFile(file, fill(await readFile(file, "utf8"), file, body, postGraph(p, body), { post: p, related }));
  postDocs.push({ post: p, path: `/blog/${p.slug}/`, body, lastmod: p.updated, priority: "0.7", changefreq: "monthly" });
}

// ---------- per-date snapshots: blog list, sitemap page, sitemap.xml, llms.txt ----------
const blogTpl = await readFile("dist/blog/index.html", "utf8");
const mapTpl = await readFile("dist/sitemap/index.html", "utf8");

const urlEntry = (d) => {
  const imgs = imagesIn(d.body)
    .map((im) => `\n    <image:image><image:loc>${xml(im.loc)}</image:loc><image:title>${xml(im.title)}</image:title></image:image>`)
    .join("");
  return `  <url>\n    <loc>${abs(d.path)}</loc>\n    <lastmod>${d.lastmod}</lastmod>\n    <changefreq>${d.changefreq}</changefreq>\n    <priority>${d.priority}</priority>${imgs}\n  </url>`;
};
const sitemapXml = (docs) =>
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${docs.map(urlEntry).join("\n")}\n</urlset>\n`;

const group = (g) => ssr.pages.filter((p) => p.group === g);
const line = (p) => `- [${p.nav.label}](${abs(`/${p.slug}/`)}): ${p.seo.description}`;
const llmsTxt = (livePosts) => `# MailPilot AI

> MailPilot AI is an AI email assistant (email agent) by SuperMIA for Gmail and Outlook. It drafts replies in the user's own voice, sends follow-ups when people don't reply, scores every work relationship from email history, and briefs the user on their inbox each morning. Nothing is sent without the user's approval, and email always goes from the user's own address.

Key facts:
- Made by: SuperMIA (operated by ${company.name}, ${company.address.join(", ")}). Contact: ${company.email}
- Works with: Gmail, Google Workspace, Outlook, Office 365 (two-way sync)
- Setup: Persona 10 to 15 minutes, once; inbox connection 2 to 3 minutes
- Modes: Draft mode (everything waits for approval) and Semi-automatic mode (follow-ups send on their own, replies still wait)
- Price: 200 credits per month through the SuperMIA Agent Marketplace; free starter credits, no credit card
- Security: CASA certified, AES-256 encryption, Google API Limited Use; Gmail data never used for ads or to train general AI models
- For: sales professionals, executives and founders, consultants and freelancers, anyone spending 90+ minutes a day on email
- Sign up / sign in: ${ssr.links.signup}

## Features
${[ssr.pages.find((p) => p.slug === "features"), ...group("feature")].map(line).join("\n")}

## Solutions
${[...group("solution"), ...group("integration")].map(line).join("\n")}

## Blog
${livePosts.map((p) => `- [${p.seo.title}](${postUrl(p)}): ${p.seo.description}`).join("\n")}

## Company
${ssr.pages.filter((p) => p.group === "company" && p.slug !== "features").map(line).join("\n")}

## Optional
- [Privacy Policy](${abs("/privacy/")}): plain-language summary of the SuperMIA privacy policy
- [Terms & Conditions](${abs("/terms/")}): plain-language summary of the SuperMIA terms
- [Brochure (PDF)](${abs(ssr.links.brochure)})
`;

const dates = ssr.publishDates();
const liveNow = dates.filter((d) => Date.parse(`${d}T${ssr.PUBLISH_TIME}`) <= Date.now());
const currentSnap = liveNow.at(-1) ?? dates[0];
for (const date of dates) {
  const live = ssr.postsLiveOn(date);
  const cards = live.map(ssr.toCard);
  const blogHtml = fill(blogTpl, "dist/blog/index.html", ssr.renderBlogIndex(cards), blogIndexGraph(cards), { cards });
  const mapHtml = fill(mapTpl, "dist/sitemap/index.html", ssr.renderSiteMap(cards), siteMapGraph(), { blogCards: cards });
  const docs = [
    ...staticDocs,
    { path: "/blog/", body: "", lastmod: live[0]?.updated ?? today, priority: "0.8", changefreq: "weekly" },
    ...postDocs.filter((d) => d.post.published <= date),
    { path: "/sitemap/", body: "", lastmod: date, priority: "0.2", changefreq: "monthly" },
  ];
  const files = { "blog/index.html": blogHtml, "sitemap/index.html": mapHtml, "sitemap.xml": sitemapXml(docs), "llms.txt": llmsTxt(live) };
  for (const [name, content] of Object.entries(files)) {
    await mkdir(dirname(`dist/_snap/${date}/${name}`), { recursive: true });
    await writeFile(`dist/_snap/${date}/${name}`, content);
    // the snapshot live at build time also goes at the normal URLs (local preview; on Vercel the middleware
    // serves whichever snapshot matches the current time)
    if (date === currentSnap) await writeFile(`dist/${name}`, content);
  }
}

// ---------- _schedule.json: read by middleware.js ----------
// Publish dates plus a hash of each post's slug (so upcoming topics aren't readable here).
const sha = (s) => createHash("sha256").update(s).digest("hex");
await writeFile(
  "dist/_schedule.json",
  JSON.stringify({ publishTime: ssr.PUBLISH_TIME, dates, posts: Object.fromEntries(ssr.allPosts.map((p) => [sha(p.slug), p.published])) }),
);

// ---------- robots.txt: open to search engines and to the AI assistants that cite sources ----------
const aiBots = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot-Extended", "Bingbot", "DuckAssistBot", "CCBot"];
await writeFile(
  "dist/robots.txt",
  `# MailPilot AI: every page is public and may be indexed and cited.
User-agent: *
Allow: /
Disallow: /_snap/

${aiBots.map((b) => `User-agent: ${b}\nAllow: /\nDisallow: /_snap/`).join("\n\n")}

Sitemap: ${SITE}/sitemap.xml
`,
);

await rm("dist-ssr", { recursive: true, force: true });
console.log(`prerendered ${staticDocs.length} pages + ${postDocs.length} posts + ${dates.length} dated snapshots (current: ${currentSnap}) for ${SITE}`);
