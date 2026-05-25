'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Project } from '@/lib/types'

gsap.registerPlugin(ScrollTrigger)

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block">
    <article
      className="project-card group relative bg-bg-card border border-border rounded-2xl overflow-hidden transition-colors hover:border-accent/30"
      style={{ '--index': index } as React.CSSProperties}
    >
      {/* Cover image / placeholder */}
      <div className="relative aspect-[16/9] bg-surface overflow-hidden">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center">
              <span className="text-muted text-xs font-display font-bold">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>
            </div>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300" />
      </div>

      {/* Card body */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-display font-semibold text-lg text-text mb-2 leading-snug group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <span className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium text-accent group-hover:gap-2.5 transition-all">
          Voir le case study
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </article>
    </Link>
  )
}

export default function FeaturedProjects({ projects }: { projects: Project[] }) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.section-header', {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.section-header',
          start: 'top 85%',
        },
      })

      gsap.from('.project-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.project-card',
          start: 'top 85%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="section-header flex items-end justify-between mb-12">
          <div>
            <p className="section-label mb-3">Travaux sélectionnés</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-text">
              Projets récents
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-muted hover:text-text transition-colors"
          >
            Voir tout
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 sm:hidden text-center">
          <Link href="/projects" className="btn-ghost">
            Voir tous les projets
          </Link>
        </div>
      </div>
    </section>
  )
}
