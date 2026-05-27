'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Project } from '@/lib/types'
import { applyCardHoverAnimation } from '@/lib/cardHoverAnimation'

gsap.registerPlugin(ScrollTrigger)

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const articleRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = articleRef.current
    if (!el) return

    return applyCardHoverAnimation(el)
  }, [])

  return (
    <Link href={`/projects/${project.slug}`} className="block project-item">
      <article
        ref={articleRef}
        className="relative bg-bg-card border border-border rounded-2xl overflow-hidden h-full"
        style={{ willChange: 'transform' }}
      >
        <div className="relative p-6 sm:p-7">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <h2 className="font-display font-semibold text-lg text-text mb-3 leading-snug">
            {project.title}
          </h2>
          <p className="text-muted text-sm leading-relaxed">
            {project.description}
          </p>

          <span data-card-cta className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-accent">
            Voir le case study
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M2 6.5h9M6.5 2l4.5 4.5L6.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </article>
    </Link>
  )
}

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const gridRef = useRef<HTMLDivElement>(null)
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const allTags = ['Product Design', 'Conversion', 'Design System', 'IA', 'UX Research', 'Freelance']

  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-item', {
        opacity: 0,
        y: 32,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.project-item',
          start: 'top 88%',
        },
      })
    }, gridRef)

    return () => ctx.revert()
  }, [filtered.length])

  return (
    <div ref={gridRef}>
      {/* Tag filter */}
      <div className="flex flex-wrap gap-2 mb-12">
        <button
          onClick={() => setActiveTag(null)}
          aria-pressed={activeTag === null}
          className={`tag cursor-pointer transition-colors ${
            activeTag === null ? 'border-accent/50 text-accent' : 'hover:border-text/30 hover:text-text'
          }`}
        >
          Tous
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            aria-pressed={activeTag === tag}
            className={`tag cursor-pointer transition-colors ${
              activeTag === tag ? 'border-accent/50 text-accent' : 'hover:border-text/30 hover:text-text'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
        {filtered.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-muted text-center py-16">
          Aucun projet pour ce filtre.
        </p>
      )}
    </div>
  )
}
