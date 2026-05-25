import type { Metadata } from 'next'
import ProjectGrid from '@/components/projects/ProjectGrid'
import { getProjects } from '@/lib/notion'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Projets',
  description:
    'Tous mes projets de product design — interfaces IA, design systems, recherche utilisateur.',
  alternates: { canonical: '/projects' },
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-16">
          <p className="section-label mb-4">Portfolio</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-text mb-4 tracking-tight">
            Projets
          </h1>
          <p className="text-muted text-lg max-w-xl leading-relaxed">
            Design d'interfaces IA, design systems, et expériences utilisateur
            pensées pour des produits qui comptent.
          </p>
        </header>

        <ProjectGrid projects={projects} />
      </div>
    </div>
  )
}
