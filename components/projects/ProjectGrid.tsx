'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Project } from '@/lib/types'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const gridRef = useRef<HTMLDivElement>(null)
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort()

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
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-12">
          <button
            onClick={() => setActiveTag(null)}
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
              className={`tag cursor-pointer transition-colors ${
                activeTag === tag ? 'border-accent/50 text-accent' : 'hover:border-text/30 hover:text-text'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((project, i) => (
          <Link key={project.id} href={`/projects/${project.slug}`} className="block project-item">
          <article
            className="group bg-bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/30 transition-colors h-full"
          >
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
                  <span className="font-display font-bold text-4xl text-border">
                    {i + 1 < 10 ? `0${i + 1}` : i + 1}
                  </span>
                </div>
              )}
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="font-display font-semibold text-xl text-text mb-3 leading-snug group-hover:text-accent transition-colors">
                {project.title}
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                {project.description}
              </p>

              <span className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-accent group-hover:gap-2.5 transition-all">
                Voir le case study
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M2 6.5h9M6.5 2l4.5 4.5L6.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </article>
          </Link>
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
