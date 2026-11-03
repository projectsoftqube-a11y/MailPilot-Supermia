import { useRef } from "react";
import { menus, pagePath, type PageDef } from "../../data/pages";
import { postPath, type PostCard } from "../../data/blog/util";
import { useHeadlineSplits, useReveals, useSmoothScroll } from "../../lib/motion";
import { Footer } from "../Footer";
import { Nav } from "../Nav";
import "./Page.css";

type Group = { title: string; items: { label: string; blurb: string; href: string }[] };

const fromPages = (list: PageDef[]) => list.map((p) => ({ label: p.nav.label, blurb: p.nav.blurb, href: pagePath(p.slug) }));

export const siteMapGroups = (blogCards: PostCard[]): Group[] => [
  {
    title: "Start here",
    items: [
      { label: "Home", blurb: "MailPilot AI, the email agent by SuperMIA", href: "/" },
      { label: "All features", blurb: "Everything MailPilot does, on one page", href: "/features/" },
      ...fromPages(menus.company),
    ],
  },
  { title: "Features", items: fromPages(menus.features) },
  { title: "Solutions", items: [...fromPages(menus.solutions), ...fromPages(menus.integrations)] },
  {
    title: "Blog",
    items: [
      { label: "All articles", blurb: "Guides, comparisons and research on email", href: "/blog/" },
      ...blogCards.map((p) => ({ label: `${p.title} ${p.script ?? ""}`.trim(), blurb: p.excerpt, href: postPath(p.slug) })),
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", blurb: "How we handle your data, plainly put", href: "/privacy/" },
      { label: "Terms & Conditions", blurb: "The agreement for using MailPilot", href: "/terms/" },
    ],
  },
];

/** A plain list of every page: helps people, and gives crawlers one hop to everything. */
export function SiteMap({ blogCards }: { blogCards: PostCard[] }) {
  const groups = siteMapGroups(blogCards);
  const root = useRef<HTMLDivElement>(null);
  useSmoothScroll();
  useReveals();
  useHeadlineSplits(root);
  return (
    <div ref={root}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav current="sitemap" />
      <main id="main">
        <section className="pg-hero panel-wrap">
          <div className="panel panel--dark grain pg-hero__panel">
            <div className="shell pg-hero__copy">
              <p className="eyebrow">Sitemap</p>
              <h1 className="pg-hero__title" data-split>
                Every page, <span className="script">in one place.</span>
              </h1>
              <p className="pg-hero__lead">Features, solutions, guides and the fine print. Pick a page and go.</p>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="shell pg-map__grid" data-reveal="stagger">
            {groups.map((g) => (
              <div className="pg-map__col" key={g.title}>
                <h2>{g.title}</h2>
                <ul>
                  {g.items.map((it) => (
                    <li key={it.href}>
                      <a href={it.href}>
                        <strong>{it.label}</strong>
                        <span>{it.blurb}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
