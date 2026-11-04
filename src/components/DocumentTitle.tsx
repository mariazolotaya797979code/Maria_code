"use client";

import { usePathname } from "next/navigation";
import { useLang } from "@/lib/i18n";
import { getProject } from "@/lib/projects";

export function DocumentTitle() {
  const { lang, t } = useLang();
  const pathname = usePathname();
  const slug = pathname.startsWith("/work/") ? pathname.slice("/work/".length) : "";
  const project = slug ? getProject(slug) : undefined;

  let title = t.meta.title;
  if (project) title = `${project.title[lang]} — Maria`;
  else if (pathname === "/start") title = `${t.brief.title} — Maria`;
  else if (pathname === "/work") title = `${t.workPage.title} — Maria`;
  else if (pathname === "/privacy") title = `${t.privacy.title} — Maria`;

  return <title>{title}</title>;
}
