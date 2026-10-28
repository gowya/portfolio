'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Block, Metric } from '@/lib/types'
import { useLang, getProjectBySlug, getAllProjects } from '@/lib/i18n'

gsap.registerPlugin(ScrollTrigger)

// ─── Block renderer ──────────────────────────────────────────────────────────

function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case 'p':
      return (
        <p className="text-muted leading-relaxed mb-5 text-[1.0625rem]">
          {block.text}
        </p>
      )

    case 'h3':
      return (
        <h3 className="font-display font-semibold text-lg text-text mb-3 mt-8">
          {block.text}
        </h3>
      )

    case 'quote':
      return (
        <blockquote className="border-l-2 border-accent pl-5 my-7">
          <p className="text-text/90 leading-relaxed italic text-[1.0625rem]">
            {block.text}
          </p>
          {block.source && (
            <cite className="block mt-2 text-muted text-sm not-italic">
              • {block.source}
            </cite>
          )}
        </blockquote>
      )

    case 'callout':
      return (
        <div className="bg-surface border border-border rounded-xl p-5 my-6">
          <p className="text-text/90 text-sm leading-relaxed">{block.text}</p>
        </div>
      )

    case 'link':
      return (
        <p className="my-6">
          <a
            href={block.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2"
          >
            {block.label} ↗
          </a>
        </p>
      )

    case 'list':
      return (
        <ul className="space-y-3 mb-6">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-muted text-[1.0625rem] leading-relaxed">
              <span className="text-accent mt-1.5 shrink-0 text-xs">◆</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )

    case 'img':
      return (
        <figure className={block.portrait ? 'my-8 max-w-[280px] mx-auto' : 'my-8'}>
          <div className="relative rounded-xl overflow-hidden border border-border bg-bg-card">
            <Image
              src={block.src}
              alt={block.caption ?? ''}
              width={1200}
              height={800}
              className="w-full h-auto"
              unoptimized={block.src.endsWith('.gif')}
            />
          </div>
          {block.caption && (
            <figcaption className="text-muted text-xs text-center mt-3">
              {block.caption}
            </figcaption>
          )}
        </figure>
      )

    case 'video':
      return (
        <figure className="my-8">
          <div className="relative rounded-xl overflow-hidden border border-border bg-bg-card">
            <video
              src={block.src}
              poster={block.poster}
              // autoplay : une démo en boucle, muette, comme un GIF. Sinon : un film avec ses contrôles.
              {...(block.autoplay
                ? { autoPlay: true, muted: true, loop: true }
                : { controls: true })}
              playsInline
              preload="metadata"
              className="w-full h-auto block"
              aria-label={block.caption}
            />
          </div>
          {block.caption && (
            <figcaption className="text-muted text-xs text-center mt-3">
              {block.caption}
            </figcaption>
          )}
        </figure>
      )

    case 'grid':
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
          {block.images.map((img, i) => (
            <figure key={i}>
              <div className="relative rounded-xl overflow-hidden border border-border bg-bg-card">
                <Image
                  src={img.src}
                  alt={img.caption ?? ''}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              {img.caption && (
                <figcaption className="text-muted text-xs text-center mt-2">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )

    default:
      return null
  }
}

// ─── Metrics bar ─────────────────────────────────────────────────────────────

function MetricsBar({ metrics }: { metrics: Metric[] }) {
  if (metrics.length === 0) return null
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-20">
      {metrics.map((m, i) => (
        <div
          key={i}
          className="bg-bg-card border border-border rounded-xl p-5 sm:p-6"
        >
          <div className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-accent mb-1 leading-tight break-words">
            {m.value}
          </div>
          <div className="text-muted text-xs sm:text-sm leading-snug">{m.label}</div>
        </div>
      ))}
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function CaseStudy({ slug }: { slug: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { t, lang } = useLang()

  const project = getProjectBySlug(slug, lang)

  // adjacent project navigation
  const all = getAllProjects(lang)
  const idx = all.findIndex((p) => p.slug === slug)
  const prev = all[idx - 1] ?? null
  const next = all[idx + 1] ?? null

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cs-header > *', {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
      })

      gsap.from('.cs-section', {
        opacity: 0,
        y: 28,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cs-section',
          start: 'top 88%',
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [slug])

  if (!project) return null

  return (
    <div ref={ref} className="min-h-screen pt-24 pb-32">
      {/* Back navigation */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-muted text-sm hover:text-text transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M12 7H2M7 12l-5-5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {t.caseStudy.back}
        </Link>
      </div>

      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 mb-14 cs-header">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
          <span className="tag">{project.status}</span>
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-text mb-6 tracking-tight leading-[1.05]">
          {project.title}
        </h1>

        <p className="text-muted text-lg mb-8 max-w-2xl leading-relaxed">
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted text-sm border-t border-border pt-6">
          <span>
            <span className="text-text/60 mr-1.5">{t.caseStudy.role}</span>
            {project.role}
          </span>
          <span>
            <span className="text-text/60 mr-1.5">{t.caseStudy.company}</span>
            {project.company}
          </span>
          <span>
            <span className="text-text/60 mr-1.5">{t.caseStudy.period}</span>
            {project.period}
          </span>
          {project.team && (
            <span>
              <span className="text-text/60 mr-1.5">{t.caseStudy.team}</span>
              {project.team}
            </span>
          )}
        </div>
      </header>

      {/* Cover image */}
      {project.coverVideo ? (
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border bg-bg-card">
            <video
              src={project.coverVideo}
              poster={project.coverImage ?? undefined}
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
              aria-label={project.title}
            />
          </div>
        </div>
      ) : project.coverImage && (
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="(max-width: 1280px) 100vw, 1152px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Metrics */}
      <div className="max-w-6xl mx-auto px-6">
        <MetricsBar metrics={project.metrics} />
      </div>

      {/* Intro */}
      {project.intro && (
        <div className="max-w-3xl mx-auto px-6 mb-16">
          <p className="text-text/80 text-lg sm:text-xl leading-relaxed border-l-2 border-accent pl-6">
            {project.intro}
          </p>
        </div>
      )}

      {/* Sections */}
      <div className="max-w-3xl mx-auto px-6">
        {project.sections.map((section, si) => (
          <section key={si} className="cs-section mb-16">
            <div className="mb-7">
              <p className="section-label mb-2">
                {String(si + 1).padStart(2, '0')}
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-text">
                {section.title}
              </h2>
            </div>
            {section.blocks.map((block, bi) => (
              <BlockRenderer key={bi} block={block} />
            ))}
          </section>
        ))}

        {/* Learnings */}
        {project.learnings && (
          <div className="cs-section bg-bg-card border border-border rounded-2xl p-8 mb-16">
            <p className="section-label mb-4">{t.caseStudy.learnings}</p>
            <p className="text-text/85 leading-relaxed text-[1.0625rem]">
              {project.learnings}
            </p>
          </div>
        )}
      </div>

      {/* Adjacent project nav */}
      {(prev || next) && (
        <div className="max-w-6xl mx-auto px-6 mt-24 pt-10 border-t border-border">
          <div className="flex justify-between gap-4">
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="group flex flex-col gap-1 max-w-xs"
              >
                <span className="text-muted text-xs flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M10 6H2M6 10l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t.caseStudy.previous}
                </span>
                <span className="text-text text-sm font-medium leading-snug group-hover:text-accent transition-colors">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}

            {next && (
              <Link
                href={`/projects/${next.slug}`}
                className="group flex flex-col gap-1 max-w-xs text-right ml-auto"
              >
                <span className="text-muted text-xs flex items-center gap-1.5 justify-end">
                  {t.caseStudy.next}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-text text-sm font-medium leading-snug group-hover:text-accent transition-colors">
                  {next.title}
                </span>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
