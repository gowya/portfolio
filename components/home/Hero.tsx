'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

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
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Reeded glass texture — theme-aware */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'var(--hero-reed-top), var(--hero-reed-glow), var(--hero-reed-stripes)',
          backgroundSize: '100% 100%, 100% 100%, 6px 100%',
        }}
      />

      <div className="max-w-6xl mx-auto w-full">
        {/* Badge */}
        <div className="hero-badge mb-10">
          <span className="inline-flex items-center gap-2 text-[0.6rem] font-sans font-medium tracking-[0.22em] uppercase text-muted/70 border border-border/50 rounded-full px-3 py-1.5">
            <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
            Montpellier & Remote
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-10" aria-label="Product & System Designer qui vibecode">
          {/* Line 1 */}
          <span className="block overflow-hidden">
            <span className="hero-line block font-black text-[clamp(3rem,8vw,8rem)] leading-[0.92] tracking-[-0.02em] text-text" style={{ fontFamily: 'var(--font-italiana), Georgia, serif' }}>
              Product &amp; System
            </span>
          </span>

          {/* Line 2: Designer + QUI VIBECODE inline on md+, stacked on mobile */}
          <span className="block" style={{ overflow: 'visible', paddingBottom: '0.2em' }}>
            <span className="hero-line flex flex-wrap md:flex-nowrap md:justify-start" style={{ overflow: 'visible', alignItems: 'flex-end' }}>
              <span
                className="block font-black text-[clamp(4rem,10vw,9.5rem)] leading-[0.88] tracking-[-0.03em] text-text"
                style={{ fontFamily: 'var(--font-italiana), Georgia, serif' }}
              >
                Designer
              </span>
              <span
                className="block mt-2 md:mt-0 md:ml-[0.4em] font-medium text-[clamp(1.3rem,1.5vw,1.75rem)] uppercase tracking-[0.22em] text-accent whitespace-nowrap"
                style={{ fontFamily: 'var(--font-grotesk), system-ui, sans-serif', marginBottom: '0.15em' }}
              >
                • qui Vibecode
              </span>
            </span>
          </span>
        </h1>

        {/* Sub */}
        <p className="hero-sub max-w-lg text-muted text-[0.9rem] leading-relaxed mb-10 text-balance">
          Je conçois des interfaces qui convertissent et des design systems qui tiennent dans la durée 
          • 3 ans chez Waalaxy.
        </p>

        {/* CTAs */}
        <div className="hero-ctas flex flex-wrap gap-3 mb-20">
          <Link href="/projects" className="btn-primary">
            Voir mes projets
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0c0YANfA-PSK7D6Lq8ZlTKa0X9DLWUhb7RpKVTlxFGiVGJg3c3fa4cm8d5c9yeSMrNk2jYJZt0" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            On en parle ?
          </a>
        </div>

        {/* Stats — 2 cols on mobile, 3 on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-3 border-t border-border pt-10 gap-0">
          <div className="hero-stat pr-4 sm:pr-8 border-r border-border">
            <div className="font-sans font-black italic text-[1.5rem] sm:text-5xl md:text-6xl text-accent leading-none mb-2">x2,5</div>
            <div className="text-muted text-[9px] sm:text-[0.65rem] tracking-[0.12em] sm:tracking-[0.2em] uppercase">sur la conversion</div>
          </div>
          <div className="hero-stat pl-4 sm:px-8 md:border-r border-border">
            <div className="font-sans font-black italic text-[1.5rem] sm:text-5xl md:text-6xl text-accent leading-none mb-2">83,5%</div>
            <div className="text-muted text-[9px] sm:text-[0.65rem] tracking-[0.12em] sm:tracking-[0.2em] uppercase">d'utilisation au 1er essai</div>
          </div>
          <div className="hero-stat hidden md:block pl-8">
            <div className="font-sans font-black italic text-5xl md:text-6xl text-text/30 leading-none mb-2">1</div>
            <div className="text-muted text-[0.65rem] tracking-[0.2em] uppercase">chien au bureau</div>
          </div>
        </div>
      </div>
    </section>
  )
}
