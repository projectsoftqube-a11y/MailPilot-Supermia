import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { links, platforms } from "../data/content";
import { menus, pagePath, type PageDef } from "../data/pages";
import { getLenis } from "../lib/motion";
import { Icon } from "./page/icons";
import { Photo, PlatformIcon } from "./ui";
import "./Nav.css";

type MenuId = "features" | "solutions";
type Item = { label: string; href: string; menu?: MenuId; match: (slug: string) => boolean };

const items: Item[] = [
  { label: "Features", href: "/features/", menu: "features", match: (s) => s === "features" || s.startsWith("features/") },
  { label: "Solutions", href: "/solutions/sales/", menu: "solutions", match: (s) => s.startsWith("solutions/") || s.startsWith("integrations/") },
  { label: "How it works", href: "/how-it-works/", match: (s) => s === "how-it-works" },
  { label: "Pricing", href: "/pricing/", match: (s) => s === "pricing" },
  { label: "Blog", href: "/blog/", match: (s) => s === "blog" || s.startsWith("blog/") },
  { label: "FAQ", href: "/faq/", match: (s) => s === "faq" },
];

function MenuLink({ p, onClick }: { p: PageDef; onClick?: () => void }) {
  return (
    <a className="mega__link" href={pagePath(p.slug)} onClick={onClick}>
      <span className="mega__icon">
        <Icon name={p.nav.icon} size={18} />
      </span>
      <span>
        <strong>{p.nav.label}</strong>
        <em>{p.nav.blurb}</em>
      </span>
    </a>
  );
}

/** `current` = the inner page's slug; omitted on the home page. */
export function Nav({ current }: { current?: string }) {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<MenuId | null>(null);
  const linksRef = useRef<HTMLElement>(null);
  const indicator = useRef<HTMLSpanElement>(null);
  const hoverPill = useRef<HTMLSpanElement>(null);
  const header = useRef<HTMLElement>(null);
  const closeTimer = useRef(0);
  const active = current ? items.findIndex((it) => it.match(current)) : -1;

  // Hide on scroll down, show on scroll up; reading progress along the pill.
  useEffect(() => {
    let last = window.scrollY;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      if (y > 480 && y > last + 4) {
        setHidden(true);
        setMenu(null);
      } else if (y < last - 4 || y < 480) setHidden(false);
      last = y;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      header.current?.style.setProperty("--p", String(max > 0 ? Math.min(1, y / max) : 0));
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
  }, []);

  // The bronze pill marks the section of the site you're in.
  useEffect(() => {
    const ind = indicator.current;
    const host = linksRef.current;
    if (!ind || !host) return;
    const place = () => {
      const a = host.querySelectorAll<HTMLElement>(".nav__item")[active];
      if (!a) {
        ind.style.opacity = "0";
        return;
      }
      ind.style.opacity = "1";
      ind.style.width = `${a.offsetWidth}px`;
      ind.style.transform = `translateX(${a.offsetLeft}px)`;
    };
    place();
    document.fonts?.ready?.then(place);
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [active]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) getLenis()?.stop();
    else getLenis()?.start();
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      setMenu(null);
    };
    const onDown = (e: PointerEvent) => {
      if (!header.current?.contains(e.target as Node)) setMenu(null);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, []);

  // a soft pill that glides to whichever link the mouse is on (it appears in place, then slides between links)
  const showHover = (e: React.PointerEvent<HTMLElement>, id?: MenuId) => {
    if (e.pointerType !== "mouse") return;
    window.clearTimeout(closeTimer.current);
    setMenu(id ?? null);
    const h = hoverPill.current;
    if (!h) return;
    const a = e.currentTarget;
    if (h.style.opacity !== "1") {
      h.style.transition = "none";
      h.style.width = `${a.offsetWidth}px`;
      h.style.transform = `translateX(${a.offsetLeft}px)`;
      void h.offsetWidth;
      h.style.transition = "";
    }
    h.style.width = `${a.offsetWidth}px`;
    h.style.transform = `translateX(${a.offsetLeft}px)`;
    h.style.opacity = "1";
  };
  const hideHover = () => {
    if (hoverPill.current) hoverPill.current.style.opacity = "0";
  };
  const keepMenu = () => window.clearTimeout(closeTimer.current);
  const leaveMenu = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMenu(null), 160);
  };

  return (
    <header className={`nav ${hidden && !open ? "is-hidden" : ""} ${open ? "is-open" : ""} ${menu ? "has-menu" : ""}`} ref={header}>
      <div className="nav__pill" onPointerLeave={leaveMenu} onPointerEnter={keepMenu}>
        <Logo className="nav__logo" href={current ? "/" : "#top"} />
        <nav className="nav__links" aria-label="Primary" ref={linksRef} onPointerLeave={hideHover}>
          <span className="nav__hover" ref={hoverPill} aria-hidden="true" />
          <span className="nav__indicator" ref={indicator} aria-hidden="true" />
          {items.map((item, i) =>
            item.menu ? (
              <button
                key={item.label}
                type="button"
                className={`nav__item nav__trigger ${i === active ? "is-active" : ""} ${menu === item.menu ? "is-open" : ""}`}
                aria-expanded={menu === item.menu}
                aria-controls={`mega-${item.menu}`}
                onPointerEnter={(e) => showHover(e, item.menu)}
                onClick={() => setMenu((m) => (m === item.menu ? null : item.menu!))}
              >
                <span className="nav__roll">
                  <span>{item.label}</span>
                  <span aria-hidden="true">{item.label}</span>
                </span>
                <ChevronDown size={14} className="nav__chev" aria-hidden="true" />
              </button>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={`nav__item ${i === active ? "is-active" : ""}`}
                aria-current={i === active ? "page" : undefined}
                onPointerEnter={(e) => showHover(e)}
              >
                <span className="nav__roll">
                  <span>{item.label}</span>
                  <span aria-hidden="true">{item.label}</span>
                </span>
              </a>
            ),
          )}
        </nav>
        <div className="nav__actions">
          <a className="nav__login" href={links.login}>
            Sign in
          </a>
          <a className="nav__cta" href={links.signup}>
            Start free <ArrowUpRight size={16} />
          </a>
          <button
            className="nav__burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="burger" aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
        </div>
        <span className="nav__progress" aria-hidden="true" />
      </div>

      {/* Desktop menus: they drop out from under the pill */}
      <div className="mega-wrap" onPointerEnter={keepMenu} onPointerLeave={leaveMenu}>
        <div id="mega-features" className={`mega ${menu === "features" ? "is-open" : ""}`} inert={menu !== "features"}>
          <div className="mega__main">
            <p className="mega__kicker">What MailPilot does</p>
            <div className="mega__grid">
              {menus.features.map((p) => (
                <MenuLink key={p.slug} p={p} onClick={() => setMenu(null)} />
              ))}
            </div>
          </div>
          <a className="mega__promo" href="/how-it-works/">
            <Photo name="pg-how-hero" fallbackName="seal-hand" className="mega__photo" />
            <span className="mega__promo-copy">
              <em>new here?</em>
              <strong>See how MailPilot works in four steps</strong>
              <span>
                How it works <ArrowUpRight size={15} />
              </span>
            </span>
          </a>
          <a className="mega__all" href="/features/">
            All features <ArrowUpRight size={15} />
          </a>
        </div>

        <div id="mega-solutions" className={`mega mega--solutions ${menu === "solutions" ? "is-open" : ""}`} inert={menu !== "solutions"}>
          <div className="mega__main">
            <p className="mega__kicker">By role</p>
            <div className="mega__grid mega__grid--one">
              {menus.solutions.map((p) => (
                <MenuLink key={p.slug} p={p} onClick={() => setMenu(null)} />
              ))}
            </div>
          </div>
          <div className="mega__main">
            <p className="mega__kicker">Works with</p>
            <div className="mega__grid mega__grid--one">
              {menus.integrations.map((p) => (
                <a key={p.slug} className="mega__link" href={pagePath(p.slug)} onClick={() => setMenu(null)}>
                  <span className="mega__icon mega__icon--paper">
                    <PlatformIcon name={p.slug.endsWith("gmail") ? "Gmail" : "Outlook"} size={20} />
                  </span>
                  <span>
                    <strong>{p.nav.label}</strong>
                    <em>{p.nav.blurb}</em>
                  </span>
                </a>
              ))}
            </div>
          </div>
          <a className="mega__promo" href="/security/">
            <Photo name="pg-security-hero" fallbackName="letter-sealed" className="mega__photo" />
            <span className="mega__promo-copy">
              <em>before you connect</em>
              <strong>How we keep your inbox private</strong>
              <span>
                Security &amp; privacy <ArrowUpRight size={15} />
              </span>
            </span>
          </a>
        </div>
      </div>

      <div className="nav__sheet" id="mobile-menu" aria-hidden={!open} inert={!open}>
        <p className="nav__sheet-kicker">where to?</p>
        <ul>
          {[{ label: "Home", href: "/" }, ...items.filter((it) => it.menu !== "solutions")].map((item, i) => (
              <li key={item.href} style={{ ["--i" as string]: i }}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  <span>0{i + 1}</span>
                  {item.label}
                  <ArrowUpRight size={22} className="nav__sheet-arrow" />
                </a>
              </li>
            ))}
        </ul>
        <div className="nav__sheet-groups">
          <div>
            <p>Features</p>
            {menus.features.map((p) => (
              <a key={p.slug} href={pagePath(p.slug)} onClick={() => setOpen(false)}>
                {p.nav.label}
              </a>
            ))}
          </div>
          <div>
            <p>Solutions</p>
            {[...menus.solutions, ...menus.integrations].map((p) => (
              <a key={p.slug} href={pagePath(p.slug)} onClick={() => setOpen(false)}>
                {p.nav.label}
              </a>
            ))}
          </div>
        </div>
        <div className="nav__sheet-foot">
          <div className="nav__sheet-cta">
            <a className="btn btn--bronze btn--arrow" href={links.signup}>
              Start with MailPilot free
              <span className="btn__arrow" aria-hidden="true">
                <ArrowUpRight size={18} />
              </span>
            </a>
            <a className="btn btn--ghost" href={links.login}>
              Sign in
            </a>
          </div>
          <p className="nav__sheet-meta">
            <a href={links.email}>
              <Mail size={15} /> hello@supermia.ai
            </a>
            <span className="nav__sheet-icons" aria-label="Works with Gmail and Outlook">
              {platforms.map((p) => (
                <PlatformIcon key={p.name} name={p.name} size={16} />
              ))}
            </span>
          </p>
        </div>
      </div>
    </header>
  );
}
