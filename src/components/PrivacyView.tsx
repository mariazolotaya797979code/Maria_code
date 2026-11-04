"use client";

import { useLang } from "@/lib/i18n";

export function PrivacyView() {
  const { t } = useLang();
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 lg:px-12 lg:py-24">
      <h1 className="display text-6xl md:text-7xl">{t.privacy.title}</h1>
      <p className="mt-4 text-sm text-muted">{t.privacy.updated}</p>
      <div className="mt-10 flex flex-col gap-6 text-lg leading-relaxed">
        {t.privacy.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
