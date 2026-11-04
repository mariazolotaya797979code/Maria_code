"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/i18n";
import type { Lang } from "@/lib/copy";

const links = [
  { href: "/work", key: "work" },
  { href: "/#formats", key: "formats" },
  { href: "/#method", key: "method" },
] as const;

export function Header() {
  const { t, lang, setLang } = useLang();
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [solid, setSolid] = useState(false);
  const open = menuPath === pathname;

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <a
      href="#content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-paper focus:px-4 focus:py-2"
    >
      {t.skip}
    </a>
    <header
      className={`sticky top-0 z-40 border-b transition-colors ${
        solid || open ? "border-line bg-paper/95 backdrop-blur" : "border-transparent bg-paper/80"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between gap-6 px-5 lg:px-12">
        <Link href="/" className="display text-[2rem] italic leading-none">
          Maria
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Maria">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.95rem] text-muted transition-colors hover:text-ink"
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {t.nav[link.key]}
            </Link>
          ))}
          <LanguageSwitch lang={lang} setLang={setLang} />
          <Link
            href="/start"
            className="rounded-full bg-ink px-4 py-2 text-[0.92rem] text-paper transition-colors hover:bg-brass-deep"
          >
            {t.nav.brief}
          </Link>
        </nav>
        <button
          type="button"
          className="kicker text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setMenuPath(open ? null : pathname)}
        >
          {open ? t.nav.close : t.nav.menu}
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-paper px-5 py-8 md:hidden"
          aria-label="Maria"
        >
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="display text-5xl" onClick={() => setMenuPath(null)}>
                {t.nav[link.key]}
              </Link>
            ))}
            <Link href="/start" className="display text-5xl italic text-brass-deep" onClick={() => setMenuPath(null)}>
              {t.nav.brief}
            </Link>
            <LanguageSwitch lang={lang} setLang={setLang} />
          </div>
        </nav>
      ) : null}
      </header>
    </>
  );
}

function LanguageSwitch({ lang, setLang }: { lang: Lang; setLang: (lang: Lang) => void }) {
  return (
    <div className="flex items-center gap-2 text-[0.82rem] tracking-[0.14em]">
      {(["ru", "en"] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLang(item)}
          aria-pressed={lang === item}
          className={lang === item ? "text-brass-deep" : "text-muted"}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
