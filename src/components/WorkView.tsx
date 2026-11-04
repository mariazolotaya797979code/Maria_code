"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { dataProjects, visualProjects, type Category } from "@/lib/projects";
import { useLang } from "@/lib/i18n";
import { WorkCard } from "@/components/WorkCard";

const filters: Array<"all" | Category> = [
  "all",
  "landing",
  "bot",
  "system",
  "automation",
  "product",
  "data",
];

export function WorkView() {
  const { t, lang } = useLang();
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");

  const visual = useMemo(() => {
    if (filter === "data") return [];
    if (filter === "all") return visualProjects;
    return visualProjects.filter((project) => project.category === filter);
  }, [filter]);

  const studies = filter === "all" || filter === "data" ? dataProjects : [];

  return (
    <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-12 lg:py-24">
      <p className="kicker text-brass-deep">{t.demo}</p>
      <h1 className="display mt-4 text-6xl md:text-8xl">{t.workPage.title}</h1>
      <p className="mt-5 max-w-2xl text-lg text-muted">{t.workPage.lead}</p>
      <div className="mt-10 flex flex-wrap gap-2" role="toolbar" aria-label={t.workPage.title}>
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
            className={`rounded-full border px-4 py-2 text-sm ${
              filter === item ? "border-ink bg-ink text-paper" : "border-line text-ink hover:border-ink"
            }`}
          >
            {t.filters[item]}
          </button>
        ))}
      </div>

      {visual.length ? (
        <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2">
          {visual.map((project) => (
            <WorkCard key={project.slug} project={project} />
          ))}
        </div>
      ) : null}

      {studies.length ? (
        <div className="mt-20">
          <h2 className="display text-5xl">{t.workPage.dataTitle}</h2>
          <p className="mt-3 max-w-2xl text-muted">{t.workPage.dataLead}</p>
          <ul className="mt-8 border-t border-line">
            {studies.map((project) => (
              <li key={project.slug} className="border-b border-line">
                <Link href={`/work/${project.slug}`} className="grid gap-3 py-6 md:grid-cols-[14rem_1fr_auto] md:items-baseline">
                  <span className="display text-4xl">{project.title[lang]}</span>
                  <span className="text-muted">{project.summary[lang]}</span>
                  <span className="kicker text-brass-deep">{t.demo}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {!visual.length && !studies.length ? <p className="mt-12 text-muted">{t.workPage.empty}</p> : null}
    </div>
  );
}
