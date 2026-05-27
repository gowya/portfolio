import type { Metadata } from 'next'
import ProjectGrid from '@/components/projects/ProjectGrid'
import { getProjects } from '@/lib/notion'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Projets',
  description:
    'Tous mes projets de product design • interfaces IA, design systems, recherche utilisateur.',
  alternates: { canonical: '/projects' },
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="min-h-screen pb-20">
      <header
        className="relative pt-40 pb-20 px-6"
        style={{
          backgroundImage: [
            'radial-gradient(ellipse 80% 35% at 50% 0%, rgba(160,80,20,0.18) 0%, transparent 60%)',
            'var(--hero-reed-stripes)',
          ].join(', '),
          backgroundSize: '100% 100%, 6px 100%',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-4">Portfolio</p>
          <h1 className="text-text mb-4 tracking-tight" style={{ fontFamily: 'var(--font-italiana), Georgia, serif', fontSize: 'clamp(4rem, 8vw, 7rem)' }}>
            Projets
          </h1>
          <p className="text-muted text-lg max-w-xl leading-relaxed">
            Des projets qui partent de l'utilisateur, qui finissent par faire bouger les bons chiffres.
          </p>
        </div>
        {/* Fade the reed background into the page at the hero's bottom edge */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '80px',
            background: 'linear-gradient(to bottom, transparent, #0a0a0a)',
          }}
        />
      </header>

      <div className="px-6 pt-8">
        <div className="max-w-6xl mx-auto">
          <ProjectGrid projects={projects} />
        </div>
      </div>
    </div>
  )
}
