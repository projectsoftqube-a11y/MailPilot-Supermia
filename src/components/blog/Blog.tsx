import { useEffect, useRef, useState } from "react";
import { AlertTriangle, ArrowUpRight, CalendarDays, Check, Clock, Copy, Info, Lightbulb, ListChecks, Mail } from "lucide-react";
import { links } from "../../data/content";
import { postPath, readMinutes, toc, type Block, type BlogPost, type PostCard } from "../../data/blog/util";
import { getPage, pagePath } from "../../data/pages";
import { getLenis, gsap, prefersReducedMotion, useGSAP, useHeadlineSplits, useReveals, useSmoothScroll } from "../../lib/motion";
import { FinalCta } from "../FinalCta";
import { Footer } from "../Footer";
import { Nav } from "../Nav";
import { Faqs, Shot, Title } from "../page/Page";
import { Icon } from "../page/icons";
import { BtnArrow } from "../ui";
import { Rich } from "./Rich";
import "../page/Page.css";
import "./Blog.css";

const longDate = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });

/** Shared motion for blog pages: photos drift on scroll, the hero unfolds like a letter. */
function useBlogMotion(root: React.RefObject<HTMLDivElement | null>) {
  useSmoothScroll();
  useReveals();
  useHeadlineSplits(root);
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const q = gsap.utils.selector(root);
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(q(".pg-hero__frame"), { clipPath: "inset(0 0 100% 0 round 28px)", duration: 1.5 }, 0.1)
        .from(q(".pg-hero__frame img"), { scale: 1.25, duration: 2 }, 0.1)
        .from(q(".pg-in"), { y: 26, autoAlpha: 0, duration: 1.1, stagger: 0.08 }, 0.25)
        .from(q(".bl-stamp"), { y: -140, rotate: 18, autoAlpha: 0, duration: 1.3, stagger: { each: 0.14, from: "end" } }, 0.3)
        .from(q(".bl-stack__postmark"), { scale: 0.5, rotate: -90, autoAlpha: 0, duration: 1.4 }, 0.8)
        .from(q(".bl-stack__chip"), { y: 30, autoAlpha: 0, duration: 1 }, 1.1);
      q(".pg-parallax img").forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -6, scale: 1.12 },
          { yPercent: 6, scale: 1.12, ease: "none", scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true } },
        );
      });
    },
    { scope: root },
  );
}

function ArticleCard({ p, featured }: { p: PostCard; featured?: boolean }) {
  return (
    <a className={`bl-card ${featured ? "bl-card--featured" : ""}`} href={postPath(p.slug)}>
      <Shot photo={p.hero} className="bl-card__photo" />
      <span className="bl-card__body">
        <span className="bl-card__meta">
          <span className="chip chip--bronze">{p.category}</span>
          <span>
            <Clock size={13} /> {p.minutes} min read
          </span>
        </span>
        <strong className="bl-card__title">
          {p.title} {p.script ? <span className="bl-card__script">{p.script}</span> : null}
        </strong>
        <span className="bl-card__excerpt">{p.excerpt}</span>
        <span className="bl-card__more">
          Read the article <ArrowUpRight size={16} />
        </span>
      </span>
    </a>
  );
}

// ---------------------------------------------------------------- Blog index

const TOPIC_BLURB: Record<string, string> = {
  Guides: "How-tos and copy-ready email templates",
  Comparisons: "Honest looks at AI email tools",
  Security: "Keeping your inbox and data safe",
  Research: "Sourced numbers on email and work",
  Productivity: "Routines that keep email small",
};

/** The blog list. `cards` = the posts live for this snapshot (embedded in the page by the pre-render). */
export function BlogIndex({ cards }: { cards: PostCard[] }) {
  const posts = cards;
  const categories = [...new Set(cards.map((c) => c.category))];
  const root = useRef<HTMLDivElement>(null);
  const [cat, setCat] = useState<string>("All");
  useBlogMotion(root);
  const lead = posts[0];
  const shown = cat === "All" ? posts.slice(1) : posts.filter((p) => p.category === cat);
  const grid = useRef<HTMLUListElement>(null);
  const filtered = useRef(false);
  // switching topics: replay the card stagger on the same grid (the scroll reveal only runs once per element)
  useEffect(() => {
    const ul = grid.current;
    if (!ul || !filtered.current) return;
    Array.from(ul.children).forEach((c, i) => (c as HTMLElement).style.setProperty("--i", String(i)));
    ul.classList.add("bl-grid--reset");
    ul.classList.remove("is-in");
    void ul.offsetWidth;
    ul.classList.remove("bl-grid--reset");
    ul.classList.add("is-in");
  }, [cat]);
  const choose = (c: string) => {
    filtered.current = true;
    setCat(c);
  };
  const pickTopic = (c: string) => {
    choose(c);
    const el = document.getElementById("articles");
    if (!el) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(el, { offset: -90, duration: 1.2 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={root}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav current="blog" />
      <main id="main">
        <section className="pg-hero panel-wrap">
          <div className="panel panel--dark grain pg-hero__panel">
            <div className="shell pg-hero__grid">
              <div className="pg-hero__copy">
                <p className="eyebrow pg-in">The MailPilot blog</p>
                <Title as="h1" className="pg-hero__title" title="Better email, written down" script="from our desk." />
                <p className="pg-hero__lead pg-in">
                  Practical guides on replies, follow-ups, inbox routines and AI email assistants. Every statistic is sourced, every template is
                  ready to copy.
                </p>
                <div className="bl-pills pg-in" role="group" aria-label="Browse by topic">
                  {categories.map((c) => (
                    <button key={c} type="button" onClick={() => pickTopic(c)} title={TOPIC_BLURB[c]}>
                      {c}
                      <span>{posts.filter((p) => p.category === c).length}</span>
                    </button>
                  ))}
                </div>
                <ul className="pg-hero__trust pg-in">
                  <li>{posts.length} articles</li>
                  <li>New every Tuesday</li>
                  <li>Updated {longDate(posts[0].updated)}</li>
                </ul>
              </div>
              <div className="bl-stack" aria-label="Latest articles">
                <svg className="bl-stack__postmark" viewBox="0 0 200 200" aria-hidden="true">
                  <defs>
                    <path id="bl-ring" d="M100 100 m-70 0 a70 70 0 1 1 140 0 a70 70 0 1 1 -140 0" />
                  </defs>
                  <circle cx="100" cy="100" r="90" />
                  <circle cx="100" cy="100" r="54" />
                  <text>
                    <textPath href="#bl-ring">NEW EVERY TUESDAY · THE MAILPILOT BLOG ·</textPath>
                  </text>
                  <text x="100" y="108" textAnchor="middle" className="bl-stack__pm">
                    POST
                  </text>
                </svg>
                {posts.slice(0, 3).map((p, i) => (
                  <a key={p.slug} className={`bl-stamp bl-stamp--${i}`} href={postPath(p.slug)} aria-label={`${p.title} ${p.script ?? ""}`}>
                    <span className="bl-stamp__paper">
                      <Shot photo={p.hero} className="bl-stamp__photo" eager={i === 0} />
                      <span className="bl-stamp__cap">
                        <em>{p.category}</em>
                        <strong>{p.title}</strong>
                      </span>
                    </span>
                  </a>
                ))}
                <span className="bl-stack__chip">
                  <CalendarDays size={16} /> Fresh article every Tuesday
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section bl-list" id="articles">
          <div className="shell">
            {cat === "All" ? (
              <div className={`bl-featured ${filtered.current ? "is-in" : ""}`} data-reveal>
                <p className="bl-featured__kicker">
                  <span className="script">latest article</span>
                </p>
                <ArticleCard p={lead} featured />
              </div>
            ) : null}
            <div className="bl-list__head">
              <div>
                <p className="eyebrow">All articles</p>
                <Title title="Read, copy," script="put to work." />
              </div>
              <div className="bl-filter" role="group" aria-label="Filter by topic">
                {["All", ...categories].map((c) => (
                  <button key={c} type="button" className={c === cat ? "is-on" : ""} aria-pressed={c === cat} onClick={() => choose(c)}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <ul className="bl-grid" data-reveal="stagger" ref={grid}>
              {shown.map((p) => (
                <li key={p.slug}>
                  <ArticleCard p={p} />
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

// ---------------------------------------------------------------- Article blocks

function Template({ b }: { b: Extract<Block, { t: "template" }> }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`Subject: ${b.subject}\n\n${b.body}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked: nothing to do */
    }
  };
  return (
    <figure className="bl-template" data-reveal>
      <figcaption className="bl-template__head">
        <strong>{b.label}</strong>
        {b.when ? <span className="chip">{b.when}</span> : null}
        <button type="button" className="bl-template__copy" onClick={copy} aria-label={`Copy template: ${b.label}`}>
          {copied ? <Check size={15} /> : <Copy size={15} />} {copied ? "Copied" : "Copy"}
        </button>
      </figcaption>
      <p className="bl-template__subject">
        <Mail size={14} /> <span>Subject:</span> {b.subject}
      </p>
      <div className="bl-template__body">
        {b.body.split("\n\n").map((para, i) => (
          <p key={i}>
            {para.split("\n").map((line, j) => (
              <span key={j}>
                {j ? <br /> : null}
                {line}
              </span>
            ))}
          </p>
        ))}
      </div>
    </figure>
  );
}

const CALLOUT_ICON = { tip: Lightbulb, warn: AlertTriangle, note: Info };

function BlockView({ b }: { b: Block }) {
  switch (b.t) {
    case "p":
      return (
        <p>
          <Rich text={b.text} />
        </p>
      );
    case "h2":
      return <h2 id={b.id}>{b.text}</h2>;
    case "h3":
      return <h3>{b.text}</h3>;
    case "ul":
      return (
        <ul className="bl-ul">
          {b.items.map((it) => (
            <li key={it}>
              <Rich text={it} />
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="bl-ol">
          {b.items.map((it) => (
            <li key={it}>
              <Rich text={it} />
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <figure className="bl-table" data-reveal>
          {b.caption ? <figcaption>{b.caption}</figcaption> : null}
          <div className="bl-table__scroll">
            <table>
              <thead>
                <tr>
                  {b.head.map((h) => (
                    <th scope="col" key={h}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.rows.map((r, i) => (
                  <tr key={i}>
                    {r.map((c, j) =>
                      j === 0 ? (
                        <th scope="row" key={j}>
                          <Rich text={c} />
                        </th>
                      ) : (
                        <td key={j} data-col={b.head[j]}>
                          <Rich text={c} />
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {b.note ? <p className="bl-table__note">{b.note}</p> : null}
        </figure>
      );
    case "callout": {
      const I = CALLOUT_ICON[b.tone];
      return (
        <aside className={`bl-callout bl-callout--${b.tone}`} data-reveal>
          <span className="bl-callout__icon">
            <I size={18} />
          </span>
          <div>
            <strong>{b.title}</strong>
            <p>
              <Rich text={b.text} />
            </p>
          </div>
        </aside>
      );
    }
    case "checklist":
      return (
        <div className="bl-check" data-reveal>
          <p className="bl-check__title">
            <ListChecks size={18} /> {b.title}
          </p>
          <ul>
            {b.items.map((it) => (
              <li key={it}>
                <span className="pg-points__tick">
                  <Check size={13} strokeWidth={2.6} />
                </span>
                <Rich text={it} />
              </li>
            ))}
          </ul>
        </div>
      );
    case "template":
      return <Template b={b} />;
    case "figure":
      return (
        <figure className="bl-figure" data-reveal>
          <Shot photo={b.photo} className="pg-parallax" />
          <figcaption>{b.caption}</figcaption>
        </figure>
      );
    case "bars": {
      const max = Math.max(...b.items.map((i) => i.value));
      return (
        <figure className="bl-bars" data-reveal>
          <figcaption>{b.title}</figcaption>
          <ul>
            {b.items.map((it, i) => (
              <li key={it.label} style={{ ["--w" as string]: `${(it.value / max) * 100}%`, ["--i" as string]: i }}>
                <span className="bl-bars__label">{it.label}</span>
                <span className="bl-bars__track">
                  <i />
                </span>
                <strong>{it.display}</strong>
              </li>
            ))}
          </ul>
          <p className="bl-bars__source">Source: {b.source}</p>
        </figure>
      );
    }
    case "stats":
      return (
        <ul className="bl-stats" data-reveal="stagger">
          {b.items.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
              <cite>{s.source}</cite>
            </li>
          ))}
        </ul>
      );
    case "cta":
      return (
        <aside className="bl-cta" data-reveal>
          <div>
            <strong>{b.title}</strong>
            <p>{b.text}</p>
          </div>
          <a className="btn btn--bronze btn--arrow btn--sm" href={b.href}>
            {b.label}
            <BtnArrow size={16} />
          </a>
        </aside>
      );
  }
}

// ---------------------------------------------------------------- Article page

export function BlogPostPage({ post, related }: { post: BlogPost; related: PostCard[] }) {
  const root = useRef<HTMLDivElement>(null);
  useBlogMotion(root);
  const p = post;
  const contents = p ? toc(p) : [];
  const [active, setActive] = useState(contents[0]?.id ?? "");
  // the section being read = the last heading that has scrolled past the top third of the screen
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.3;
      let current = contents[0]?.id ?? "";
      for (const c of contents) {
        const el = document.getElementById(c.id);
        if (el && el.getBoundingClientRect().top < line) current = c.id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [p.slug]);
  if (!p) return null;
  const supports = p.supports.map(getPage).filter((x): x is NonNullable<typeof x> => !!x);

  return (
    <div ref={root}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav current={`blog/${p.slug}`} />
      <main id="main">
        <article>
          <header className="pg-hero panel-wrap">
            <div className="panel panel--dark grain pg-hero__panel">
              <div className="shell pg-hero__grid">
                <div className="pg-hero__copy">
                  <p className="pg-in bl-hero__cat">
                    <a className="eyebrow" href="/blog/">
                      {p.category}
                    </a>
                  </p>
                  <Title as="h1" className="pg-hero__title bl-hero__title" title={p.title} script={p.script} />
                  <p className="pg-hero__lead pg-in">{p.excerpt}</p>
                  <ul className="pg-hero__trust pg-in" aria-label="About this article">
                    <li>By {p.author}</li>
                    <li>
                      <time dateTime={p.published}>{longDate(p.published)}</time>
                    </li>
                    <li>
                      <Clock size={14} /> {readMinutes(p)} min read
                    </li>
                  </ul>
                </div>
                <div className="pg-hero__media">
                  <div className="pg-hero__frame">
                    <Shot photo={p.hero} eager />
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="shell bl-layout">
            {contents.length ? (
              <aside className="bl-toc-col">
                <nav className="bl-toc" aria-label="In this article">
                  <p>In this article</p>
                  <ol>
                    {contents.map((c) => (
                      <li key={c.id}>
                        <a href={`#${c.id}`} className={c.id === active ? "is-on" : ""} aria-current={c.id === active ? "true" : undefined}>
                          {c.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </aside>
            ) : null}
            <div className="bl-article">
              <section className="bl-answer" aria-label="Quick answer" data-reveal>
                <p className="bl-answer__label">
                  <span className="script">quick answer</span>
                </p>
                <p className="bl-answer__text">{p.answer}</p>
              </section>
              <section className="bl-takeaways" aria-labelledby="takeaways" data-reveal>
                <h2 id="takeaways">Key takeaways</h2>
                <ol>
                  {p.takeaways.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ol>
              </section>

              <div className="bl-prose">
                {p.body.map((b, i) => (
                  <BlockView b={b} key={i} />
                ))}
              </div>

              {p.sources.length ? (
                <section className="bl-sources" aria-labelledby="sources">
                  <h2 id="sources">Sources</h2>
                  <ol>
                    {p.sources.map((s) => (
                      <li key={s.url}>
                        <a href={s.url} target="_blank" rel="noopener noreferrer">
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </section>
              ) : null}

              <section className="bl-author" aria-label="About the author">
                <img src="/mailpilot-mark.png" alt="" width={391} height={313} />
                <div>
                  <strong>{p.author}</strong>
                  <p>
                    Written by the team behind MailPilot AI, the email agent by SuperMIA. We fact-check every statistic against its original
                    source. Last updated <time dateTime={p.updated}>{longDate(p.updated)}</time>.
                  </p>
                </div>
              </section>
            </div>

            <aside className="bl-side">
              <div className="bl-promo">
                <p className="bl-promo__kicker">
                  <span className="script">try it free</span>
                </p>
                <strong>Let MailPilot handle this for you</strong>
                <ul>
                  {supports.map((s) => (
                    <li key={s.slug}>
                      <a href={pagePath(s.slug)}>
                        <span className="pg-card__icon">
                          <Icon name={s.nav.icon} size={16} />
                        </span>
                        {s.nav.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <a className="btn btn--bronze btn--arrow btn--sm" href={links.signup}>
                  Start free
                  <BtnArrow size={16} />
                </a>
              </div>
            </aside>
          </div>
        </article>

        {p.faqs.length ? <Faqs id="faq" eyebrow="FAQ" title="Questions people" script="also ask." items={p.faqs} /> : null}

        {related.length ? (
          <section className="section bl-related">
            <div className="shell">
              <div className="bl-list__head">
                <div>
                  <p className="eyebrow">Keep reading</p>
                  <Title title="More from" script="the blog." />
                </div>
                <a className="btn btn--ghost btn--arrow btn--sm bl-all" href="/blog/">
                  All articles
                  <BtnArrow size={16} />
                </a>
              </div>
              <ul className="bl-grid" data-reveal="stagger">
                {related.map((r) => (
                  <li key={r.slug}>
                    <ArticleCard p={r} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
