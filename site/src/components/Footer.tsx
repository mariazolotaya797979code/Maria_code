"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-14 lg:px-12">
        <p className="display text-[18vw] leading-none text-ink/15 lg:text-[10rem]">Maria</p>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="flex flex-col gap-2 text-lg">
            <a href={site.telegramUrl} target="_blank" rel="noopener noreferrer">
              Telegram · @{site.telegram}
            </a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div className="flex max-w-sm flex-col items-start gap-3 text-sm text-muted md:items-end">
            <p>{t.footer.note}</p>
            <Link href="/privacy" className="text-ink underline decoration-line underline-offset-4">
              {t.footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
