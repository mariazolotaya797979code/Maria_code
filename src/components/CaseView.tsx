"use client";

import Image from "next/image";
import Link from "next/link";
import { relatedProjects, type Project } from "@/lib/projects";
import { useLang } from "@/lib/i18n";

export function CaseView({ project }: { project: Project }) {
  const { lang, t } = useLang();
  const related = relatedProjects(project.slug);

  return (
    <article className="mx-auto max-w-[1440px] px-5 py-12 lg:px-12 lg:py-20">
      <Link href="/work" className="kicker text-brass-deep">
        {t.case.back}
      </Link>
      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
        <div>
          <span className="kicker text-brass-deep">{t.demo}</span>
          <h1 className="display mt-4 text-6xl md:text-8xl">{project.title[lang]}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">{project.summary[lang]}</p>
        </div>
        <dl className="grid gap-4 border-t border-line pt-4 text-sm">
          <div>
            <dt className="kicker text-muted">{t.case.format}</dt>
            <dd className="mt-1">{project.format[lang]}</dd>
          </div>
          <div>
            <dt className="kicker text-muted">{t.case.timeline}</dt>
            <dd className="mt-1">{project.timeline[lang]}</dd>
          </div>
          <div>
            <dt className="kicker text-muted">{t.case.stack}</dt>
            <dd className="mt-1">{project.stack.join(" · ")}</dd>
          </div>
        </dl>
      </div>

      {project.frames.length ? (
        <div className="mt-12 grid gap-4">
          {project.frames.map((frame) => (
            <figure key={frame.src} className="relative aspect-[16/10] overflow-hidden bg-paper-deep">
              <Image
                src={frame.src}
                alt={frame.alt[lang]}
                fill
                sizes="(min-width: 1024px) 90vw, 100vw"
                className="object-cover object-top"
              />
            </figure>
          ))}
        </div>
      ) : (
        <div className="mt-12 flex min-h-64 items-end bg-paper-deep p-8">
          <p className="display text-7xl italic text-brass-deep">{project.title[lang]}</p>
        </div>
      )}

      <div className="mt-16 grid gap-12 md:grid-cols-3">
        <section>
          <h2 className="kicker text-brass-deep">{t.case.task}</h2>
          <p className="mt-4 text-lg leading-relaxed">{project.task[lang]}</p>
        </section>
        <section>
          <h2 className="kicker text-brass-deep">{t.case.built}</h2>
          <p className="mt-4 text-lg leading-relaxed">{project.built[lang]}</p>
        </section>
        <section>
          <h2 className="kicker text-brass-deep">{t.case.outcome}</h2>
          <p className="mt-4 text-lg leading-relaxed">{project.outcome[lang]}</p>
        </section>
      </div>

      <div className="mt-16 flex flex-col items-start justify-between gap-8 border-t border-line pt-10 md:flex-row md:items-end">
        <div>
          <h2 className="display text-4xl md:text-5xl">{t.case.similar}</h2>
          <ul className="mt-4 flex flex-col gap-2">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/work/${item.slug}`} className="border-b border-transparent hover:border-ink">
                  {item.title[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/start" className="rounded-full bg-ink px-6 py-3 text-paper hover:bg-brass-deep">
          {t.case.cta}
        </Link>
      </div>
    </article>
  );
}
