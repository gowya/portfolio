'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { useLang } from '@/lib/i18n'
import { BOOKING_URL } from '@/lib/links'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { t } = useLang()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      tl.from('.hero-badge', {
        opacity: 0,
        y: 12,
        duration: 0.6,
      })
        .fromTo(
          '.hero-line',
          { yPercent: 110, filter: 'brightness(2)' },
          { yPercent: 0, filter: 'brightness(1)', duration: 1, stagger: 0.1 },
          '-=0.3'
        )
        .from(
          '.hero-sub',
          { opacity: 0, y: 16, duration: 0.7 },
          '-=0.5'
        )
        .from(
          '.hero-ctas',
          { opacity: 0, y: 12, duration: 0.6 },
          '-=0.4'
        )
        .from(
          '.hero-stat',
          { opacity: 0, y: 16, duration: 0.5, stagger: 0.1 },
          '-=0.3'
        )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-end pb-20 pt-36 px-6"
      style={{
        backgroundColor: 'var(--hero-bg)',
        backgroundImage: 'var(--hero-photo-overlay), url(/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Reeded glass texture: theme-aware */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'var(--hero-reed-top), var(--hero-reed-glow), var(--hero-reed-stripes)',
          backgroundSize: '100% 100%, 100% 100%, 6px 100%',
        }}
      />

      {/* Bottom fade: blends the hero photo into the page background */}
      <div
        className="absolute inset-x-0 bottom-0 h-64 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, color-mix(in srgb, var(--bg) 45%, transparent) 45%, color-mix(in srgb, var(--bg) 85%, transparent) 75%, var(--bg) 100%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full">
        {/* Badge */}
        <div className="hero-badge mb-10">
          <span className="section-label tracking-[0.12em] sm:tracking-[0.2em] inline-flex items-center gap-2 border border-border/50 rounded-full px-3 py-1.5">
            <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
            {t.hero.badge}
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-10" aria-label={t.hero.aria}>
          {/* Line 1 */}
          <span className="block overflow-hidden">
            <span className="hero-line block font-black text-[clamp(3rem,8vw,8rem)] leading-[0.92] tracking-[-0.02em] text-text" style={{ fontFamily: 'var(--font-italiana), Georgia, serif' }}>
              {t.hero.headlineLine1}
            </span>
          </span>

          {/* Line 2: Designer + QUI VIBECODE inline on md+, stacked on mobile */}
          <span className="block" style={{ overflow: 'visible', paddingBottom: '0.2em' }}>
            <span className="hero-line flex flex-wrap md:flex-nowrap md:justify-start" style={{ overflow: 'visible', alignItems: 'flex-end' }}>
              <span
                className="block font-black text-[clamp(4rem,10vw,9.5rem)] leading-[0.88] tracking-[-0.03em] text-text"
                style={{ fontFamily: 'var(--font-italiana), Georgia, serif' }}
              >
                {t.hero.headlineRole}
              </span>
              <span
                className="block mt-2 md:mt-0 md:ml-[0.4em] font-medium text-[clamp(1.3rem,1.5vw,1.75rem)] uppercase tracking-[0.22em] text-accent whitespace-nowrap"
                style={{ fontFamily: 'var(--font-grotesk), system-ui, sans-serif', marginBottom: '0.15em' }}
              >
                {t.hero.headlineTag}
              </span>
            </span>
          </span>
        </h1>

        {/* Sub */}
        <p className="hero-sub lead max-w-2xl mb-10 text-balance">
          {t.hero.sub}
        </p>

        {/* CTAs */}
        <div className="hero-ctas flex flex-wrap gap-3 mb-20">
          <Link href="/projects" className="btn-primary">
            {t.hero.ctaProjects}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            {t.hero.ctaTalk}
          </a>
        </div>

        {/* How I deliver • design → pull request → dev review, then the entry offer */}
        <div className="border-t border-border pt-8">
          <p className="hero-stat section-label mb-3">{t.hero.stepsLabel}</p>
          <p className="hero-stat text-base font-medium text-text mb-6">{t.hero.stepsIntro}</p>
          <ol className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-0 mb-8">
            {t.pricing.steps.map((step, i) => (
              <li
                key={step.title}
                className={`hero-stat flex items-baseline gap-3 lg:px-6 lg:first:pl-0 ${i < 2 ? 'lg:border-r border-border' : ''}`}
              >
                <span className="w-8 shrink-0 font-sans font-black italic text-accent text-xl leading-none tabular-nums">0{i + 1}</span>
                <div>
                  <p className="text-base text-text">{step.title}</p>
                  <p className="text-sm text-muted">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link
            href="/pricing"
            className="hero-stat group inline-flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted hover:text-text transition-colors"
          >
            <span>{t.hero.entry}</span>
            <span className="text-accent underline underline-offset-4 decoration-accent/40 group-hover:decoration-accent">
              {t.hero.entryCta} →
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
