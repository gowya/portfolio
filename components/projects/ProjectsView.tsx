'use client'

import ProjectGrid from '@/components/projects/ProjectGrid'
import { useLang, getAllProjects } from '@/lib/i18n'

export default function ProjectsView() {
  const { t, lang } = useLang()
  const projects = getAllProjects(lang)

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
          <p className="section-label mb-4">{t.projectsPage.label}</p>
          <h1 className="text-text mb-4 tracking-tight" style={{ fontFamily: 'var(--font-italiana), Georgia, serif', fontSize: 'clamp(4rem, 8vw, 7rem)' }}>
            {t.projectsPage.title}
          </h1>
          <p className="text-muted text-lg max-w-xl leading-relaxed">
            {t.projectsPage.subtitle}
          </p>
        </div>
        {/* Fade the reed background into the page at the hero's bottom edge */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '80px',
            background: 'linear-gradient(to bottom, transparent, var(--bg))',
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
