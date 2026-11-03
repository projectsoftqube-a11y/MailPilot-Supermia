import { useRef } from "react";
import { ArrowRight, ArrowUpRight, CalendarDays, FileCode2, FileText, Scale, ShieldCheck } from "lucide-react";
import { links } from "../../data/content";
import { menus, pagePath, type IconKey, type PageDef } from "../../data/pages";
import { postPath, type PostCard } from "../../data/blog/util";
import { useHeadlineSplits, useReveals, useSmoothScroll } from "../../lib/motion";
import { FinalCta } from "../FinalCta";
import { Footer } from "../Footer";
import { Nav } from "../Nav";
import { BtnArrow } from "../ui";
import { Icon } from "./icons";
import { Title } from "./Page";
import "./Page.css";

type Link = { label: string; blurb: string; href: string; icon: IconKey };
type Group = { id: string; title: string; script: string; lead: string; items: Link[] };

const fromPages = (list: PageDef[]): Link[] => list.map((p) => ({ label: p.nav.label, blurb: p.nav.blurb, href: pagePath(p.slug), icon: p.nav.icon }));

const shortDate = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

/** The product pages, in the order a new visitor would want them. */
export const siteMapGroups = (): Group[] => [
  {
    id: "start",
    title: "Start",
    script: "here.",
    lead: "What MailPilot AI is, how it works, what it costs and how your data is kept safe.",
    items: [
      { label: "Home", blurb: "MailPilot AI, the email agent by SuperMIA", href: "/", icon: "mail" },
      { label: "All features", blurb: "Everything MailPilot does, on one page", href: "/features/", icon: "layers" },
      ...fromPages(menus.company),
    ],
  },
  {
    id: "features",
    title: "Every",
    script: "feature.",
    lead: "One page per job: writing replies, chasing follow-ups, tracking relationships and briefing your day.",
    items: fromPages(menus.features),
  },
  {
    id: "solutions",
    title: "Built for",
    script: "your work.",
    lead: "How MailPilot fits sales teams, executives and consultants, and the inboxes it connects to.",
    items: [...fromPages(menus.solutions), ...fromPages(menus.integrations)],
  },
];

const files = [
  { label: "Privacy Policy", blurb: "How we handle your data, plainly put", href: "/privacy/", Icon: ShieldCheck },
  { label: "Terms & Conditions", blurb: "The agreement for using MailPilot", href: "/terms/", Icon: Scale },
  { label: "sitemap.xml", blurb: "Every URL, for search engines", href: "/sitemap.xml", Icon: FileCode2 },
  { label: "llms.txt", blurb: "A plain summary, for AI assistants", href: "/llms.txt", Icon: FileText },
];

/** Every page in one place: helps people, and gives crawlers one hop to everything. */
export function SiteMap({ blogCards }: { blogCards: PostCard[] }) {
  const groups = siteMapGroups();
  const posts = [...blogCards].sort((a, b) => b.published.localeCompare(a.published));
  const root = useRef<HTMLDivElement>(null);
  useSmoothScroll();
  useReveals();
  useHeadlineSplits(root);

  const index = [
    ...groups.map((g) => ({ id: g.id, label: `${g.title} ${g.script.replace(".", "")}`, count: g.items.length })),
    { id: "blog", label: "The blog", count: posts.length },
    { id: "legal", label: "Legal & files", count: files.length },
  ];
  const total = groups.reduce((n, g) => n + g.items.length, 0) + posts.length + 3; // + blog list, privacy, terms

  return (
    <div ref={root}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav current="sitemap" />
      <main id="main">
        <section className="pg-hero panel-wrap">
          <div className="panel panel--dark grain pg-hero__panel">
            <div className="shell pg-hero__grid">
              <div className="pg-hero__copy">
                <p className="eyebrow pg-in">Sitemap</p>
                <Title as="h1" className="pg-hero__title" title="Every page," script="in one place." />
                <p className="pg-hero__lead pg-in">
                  Features, solutions, guides and the fine print: all {total} pages of MailPilot AI by SuperMIA. Pick a section, or jump straight to a page.
                </p>
                <div className="pg-hero__ctas pg-in">
                  <a className="btn btn--bronze btn--arrow" href={links.signup}>
                    Start free
                    <BtnArrow />
                  </a>
                  <a className="btn btn--ghost" href={links.demo}>
                    <CalendarDays size={17} /> Book a demo
                  </a>
                </div>
              </div>

              <nav className="pg-index pg-float" aria-label="Sitemap sections">
                <p className="pg-index__head">
                  <span className="script">site index</span>
                  <span>{total} pages</span>
                </p>
                <ol>
                  {index.map((s, i) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`}>
                        <em>{String(i + 1).padStart(2, "0")}</em>
                        <strong>{s.label}</strong>
                        <span className="pg-index__dots" aria-hidden="true" />
                        <b>{s.count}</b>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        </section>

        <section className="section pg-map">
          <div className="shell">
            {groups.map((g, gi) => (
              <div className="pg-map__row" id={g.id} key={g.id}>
                <div className="pg-map__label">
                  <span className="pg-map__num">{String(gi + 1).padStart(2, "0")}</span>
                  <Title title={g.title} script={g.script} className="pg-map__title" />
                  <p data-reveal>{g.lead}</p>
                  <span className="pg-map__count">{g.items.length} pages</span>
                </div>
                <ul className="pg-map__links" data-reveal="stagger">
                  {g.items.map((it) => (
                    <li key={it.href}>
                      <a className="pg-map__card" href={it.href}>
                        <span className="pg-card__icon">
                          <Icon name={it.icon} size={18} />
                        </span>
                        <span className="pg-map__text">
                          <strong>{it.label}</strong>
                          <span>{it.blurb}</span>
                        </span>
                        <ArrowUpRight className="pg-map__arrow" size={18} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="pg-band pg-band--warm">
          <section className="section pg-map">
            <div className="shell pg-map__row pg-map__row--solo" id="blog">
              <div className="pg-map__label">
                <span className="pg-map__num">04</span>
                <Title title="The" script="blog." className="pg-map__title" />
                <p data-reveal>Practical guides, honest comparisons and sourced research on email. A new article every Tuesday.</p>
                <a className="btn btn--sm pg-map__all" href="/blog/">
                  All articles <ArrowRight size={16} />
                </a>
              </div>
              <ol className="pg-map__posts" data-reveal="stagger">
                {posts.map((p) => (
                  <li key={p.slug}>
                    <a className="pg-map__post" href={postPath(p.slug)}>
                      <span className="pg-map__meta">
                        <span className="pg-map__cat">{p.category}</span>
                        <time dateTime={p.published}>{shortDate(p.published)}</time>
                        <span>{p.minutes} min read</span>
                      </span>
                      <strong>
                        {p.title} {p.script ? <span className="script">{p.script}</span> : null}
                      </strong>
                      <ArrowUpRight className="pg-map__arrow" size={18} />
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </div>

        <section className="section pg-map">
          <div className="shell pg-map__row pg-map__row--solo" id="legal">
            <div className="pg-map__label">
              <span className="pg-map__num">05</span>
              <Title title="The fine" script="print." className="pg-map__title" />
              <p data-reveal>The binding legal pages, plus the machine-readable files search engines and AI assistants use to find every page.</p>
            </div>
            <ul className="pg-map__links" data-reveal="stagger">
              {files.map(({ label, blurb, href, Icon: I }) => (
                <li key={href}>
                  <a className="pg-map__card" href={href}>
                    <span className="pg-card__icon">
                      <I size={18} strokeWidth={1.9} aria-hidden="true" />
                    </span>
                    <span className="pg-map__text">
                      <strong>{label}</strong>
                      <span>{blurb}</span>
                    </span>
                    <ArrowUpRight className="pg-map__arrow" size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
