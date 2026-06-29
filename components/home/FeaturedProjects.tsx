'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Project } from '@/lib/types'
import { applyCardHoverAnimation } from '@/lib/cardHoverAnimation'
import { useLang, getFeaturedProjects } from '@/lib/i18n'

gsap.registerPlugin(ScrollTrigger)

function ProjectCard({ project, isHero }: { project: Project; isHero: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { t } = useLang()

  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    return applyCardHoverAnimation(card)
  }, [])

  return (
    <Link href={`/projects/${project.slug}`} className="block h-full">
      <div
        ref={cardRef}
        className="feat-card relative overflow-hidden h-full flex flex-col"
        style={{
          background: 'var(--bg-card)',
          border: '0.5px solid var(--border)',
          borderRadius: '12px',
          padding: isHero ? '40px' : '32px',
          minHeight: isHero ? '260px' : '200px',
          willChange: 'transform',
        }}
      >
        {/* Content — sits above utility-injected overlay via DOM order */}
        <div className="relative z-10 flex flex-col flex-1">
          <p
            className="font-sans text-muted mb-4"
            style={{ fontSize: '11px', letterSpacing: '0.08em', opacity: 0.5, textTransform: 'uppercase' }}
          >
            {project.tags.slice(0, 3).join(' · ')}
          </p>

          <h3
            className="font-sans font-bold text-text leading-tight mb-3"
            style={{ fontSize: isHero ? 'clamp(1.4rem, 2.5vw, 1.9rem)' : 'clamp(1.1rem, 1.8vw, 1.4rem)' }}
          >
            {project.title}
          </h3>

          <p className="text-muted text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>

          <div className="mt-auto pt-5">
            <span data-card-cta className="inline-flex items-center gap-1" style={{ fontSize: '13px', color: 'var(--accent)' }}>
              {t.featured.viewCase}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null)
  const { t, lang } = useLang()
  const projects = getFeaturedProjects(lang)

  const bySlug = (slug: string, fallback: number) =>
    projects.find((p) => p.slug === slug) ?? projects[fallback]

  const hero  = bySlug('parcours-upgrade', 0)
  const card1 = bySlug('trial-by-card',    1)
  const card2 = bySlug('csv-import',       2)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.section-header', {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.section-header', start: 'top 85%', once: true },
      })

      gsap.from('.feat-card', {
        opacity: 0,
        y: 28,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        immediateRender: false,
        scrollTrigger: { trigger: '.feat-card', start: 'top 88%', once: true },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  if (!hero || !card1 || !card2) return null

  return (
    <section ref={sectionRef} className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="section-header flex items-end justify-between mb-12">
          <div>
            <p className="section-label mb-3">{t.featured.label}</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-text">
              {t.featured.title}
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-muted hover:text-text transition-colors"
          >
            {t.featured.viewAll}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Hero card */}
        <div className="mb-5">
          <ProjectCard project={hero} isHero={true} />
        </div>

        {/* Two small cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <ProjectCard project={card1} isHero={false} />
          <ProjectCard project={card2} isHero={false} />
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 sm:hidden text-center">
          <Link href="/projects" className="btn-ghost">
            {t.featured.viewAllProjects}
          </Link>
        </div>
      </div>
    </section>
  )
}
