"use client";

import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/lib/projects";
import { useLang } from "@/lib/i18n";
import { WorkCard } from "@/components/WorkCard";

export function HomeView() {
  const { t } = useLang();

  return (
    <>
      <section className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-[1440px] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div className="order-2 flex flex-col justify-end px-5 pt-10 pb-12 lg:order-1 lg:px-12 lg:pb-16">
          <p className="kicker text-brass-deep">{t.hero.kicker}</p>
          <h1 className="display mt-6 text-[clamp(3.1rem,6.4vw,6.1rem)]">
            {t.hero.lines.map((line) => (
              <span key={line.text} className={`block ${line.italic ? "italic text-brass-deep" : ""}`}>
                {line.text}
              </span>
            ))}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">{t.hero.lead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/start" className="rounded-full bg-ink px-6 py-3 text-center text-paper hover:bg-brass-deep">
              {t.hero.primary}
            </Link>
            <Link
              href="/work"
              className="rounded-full border border-line px-6 py-3 text-center hover:border-ink"
            >
              {t.hero.secondary}
            </Link>
          </div>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-muted">{t.hero.note}</p>
        </div>
        <div className="relative order-1 min-h-[78svh] lg:order-2 lg:min-h-full">
          <Image
            src="/portrait.jpg"
            alt="Maria"
            fill
            priority
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="object-cover object-[center_18%]"
          />
        </div>
      </section>

      <section id="work" className="mx-auto max-w-[1440px] px-5 py-24 lg:px-12 lg:py-32">
        <SectionHeading index={t.selected.index} title={t.selected.title} lead={t.selected.lead} />
        <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <WorkCard key={project.slug} project={project} large={index === 0} />
          ))}
        </div>
        <Link href="/work" className="mt-12 inline-block border-b border-ink pb-1">
          {t.selected.all}
        </Link>
      </section>

      <section id="formats" className="border-t border-line">
        <div className="mx-auto max-w-[1440px] px-5 py-24 lg:px-12 lg:py-32">
          <SectionHeading index={t.formats.index} title={t.formats.title} lead={t.formats.lead} />
          <ol className="mt-12">
            {t.formats.items.map((item, index) => (
              <li key={item.name} className="grid gap-3 border-t border-line py-7 md:grid-cols-[8rem_1fr_auto] md:items-baseline md:gap-8">
                <span className="display text-3xl italic text-brass-deep">0{index + 1}</span>
                <div>
                  <h3 className="display text-4xl md:text-5xl">{item.name}</h3>
                  <p className="mt-2 max-w-xl text-muted">{item.text}</p>
                </div>
                <p className="kicker text-muted">{item.time}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="method" className="border-t border-line">
        <div className="mx-auto max-w-[1440px] px-5 py-24 lg:px-12 lg:py-32">
          <SectionHeading index={t.method.index} title={t.method.title} />
          <ol className="mt-12 grid gap-10 md:grid-cols-3">
            {t.method.steps.map((step, index) => (
              <li key={step.title} className="border-t border-ink pt-6">
                <span className="kicker text-brass-deep">0{index + 1}</span>
                <h3 className="display mt-4 text-5xl">{step.title}</h3>
                <p className="mt-4 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line bg-paper-deep/50">
        <div className="mx-auto max-w-[1440px] px-5 py-24 lg:px-12 lg:py-32">
          <SectionHeading index={t.voices.index} title={t.voices.title} lead={t.voices.lead} />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {t.voices.items.map((item) => (
              <figure key={item.role} className="flex min-h-64 flex-col justify-between border border-line bg-paper p-7">
                <div>
                  <span className="kicker text-brass-deep">{t.demo}</span>
                  <blockquote className="display mt-6 text-3xl italic leading-snug md:text-4xl">
                    {item.quote}
                  </blockquote>
                </div>
                <figcaption className="mt-8 text-sm text-muted">{item.role}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1440px] px-5 py-24 lg:px-12 lg:py-28">
          <p className="kicker text-brass">{t.world.kicker}</p>
          <h2 className="display mt-5 max-w-4xl text-5xl text-paper md:text-7xl">{t.world.title}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/75">{t.world.lead}</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-24 lg:px-12 lg:py-32">
        <h2 className="display max-w-4xl text-5xl md:text-7xl">{t.close.title}</h2>
        <p className="mt-6 max-w-xl text-lg text-muted">{t.close.lead}</p>
        <Link href="/start" className="mt-8 inline-block rounded-full bg-ink px-6 py-3 text-paper hover:bg-brass-deep">
          {t.close.cta}
        </Link>
      </section>
    </>
  );
}

function SectionHeading({ index, title, lead }: { index: string; title: string; lead?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="kicker text-brass-deep">{index}</p>
      <h2 className="display mt-4 text-5xl md:text-7xl">{title}</h2>
      {lead ? <p className="mt-5 text-lg leading-relaxed text-muted">{lead}</p> : null}
    </div>
  );
}
