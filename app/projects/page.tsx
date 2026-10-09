import type { Metadata } from 'next'
import ProjectsView from '@/components/projects/ProjectsView'

export const metadata: Metadata = {
  title: 'Projets',
  description:
    'Tous mes projets de product design : interfaces IA, design systems, discovery.',
  alternates: { canonical: '/projects' },
}

export default function ProjectsPage() {
  return <ProjectsView />
}
