import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseView } from "@/components/CaseView";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { description: "" };
  return {
    description: project.summary.ru,
  };
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<div className="mx-auto min-h-[50vh] max-w-[1440px] px-5 py-20" />}>
      <CaseContent params={params} />
    </Suspense>
  );
}

async function CaseContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <CaseView project={project} />;
}
