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
  if (!project) return { title: 'Projet introuvable' }
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.description,
      url: `/projects/${project.slug}`,
      ...(project.coverImage && {
        images: [{ url: project.coverImage, width: 1200, height: 630, alt: project.title }],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      ...(project.coverImage && { images: [project.coverImage] }),
    },
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()
  return <CaseStudy project={project} />
}
