"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { useLang } from "@/lib/i18n";

export function WorkCard({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const { lang, t } = useLang();
  const cover = project.frames[0];

  return (
    <article className={large ? "md:col-span-2" : undefined}>
      <Link href={`/work/${project.slug}`} className="group block">
        <div
          className={`relative overflow-hidden bg-paper-deep ${
            large ? "aspect-[16/10] md:aspect-[16/8]" : "aspect-[4/5] sm:aspect-[5/4]"
          }`}
        >
          {cover ? (
            <Image
              src={cover.src}
              alt={cover.alt[lang]}
              fill
              sizes={large ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
              className="object-cover object-top motion-safe:transition motion-safe:duration-700 motion-safe:group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full flex-col justify-between p-6">
              <span className="kicker text-brass-deep">{t.filters[project.category]}</span>
              <span className="display text-7xl italic text-brass-deep/80">
                {project.title[lang].slice(0, 1)}
              </span>
            </div>
          )}
          <span className="absolute top-4 left-4 border border-brass-deep/50 bg-paper/90 px-2 py-1 kicker text-brass-deep">
            {t.demo}
          </span>
        </div>
        <div className="mt-4 flex items-baseline justify-between gap-4">
          <h3 className="display text-4xl md:text-5xl">{project.title[lang]}</h3>
          <span className="kicker shrink-0 text-muted">{t.filters[project.category]}</span>
        </div>
        <p className="mt-2 max-w-xl text-muted">{project.summary[lang]}</p>
      </Link>
    </article>
  );
}
