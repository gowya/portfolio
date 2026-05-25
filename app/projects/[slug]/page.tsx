import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProjectBySlug, getAllSlugs } from '@/lib/projects-data'
import CaseStudy from '@/components/projects/CaseStudy'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()
  return <CaseStudy project={project} />
}
