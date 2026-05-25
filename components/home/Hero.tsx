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
        .from(
          '.hero-line',
          {
            yPercent: 110,
            duration: 1,
            stagger: 0.08,
          },
          '-=0.3'
        )
        .from(
          '.hero-sub',
          {
            opacity: 0,
            y: 16,
            duration: 0.7,
          },
          '-=0.5'
        )
        .from(
          '.hero-ctas',
          {
            opacity: 0,
            y: 12,
            duration: 0.6,
          },
          '-=0.4'
        )
        .from(
          '.hero-meta',
          {
            opacity: 0,
            duration: 0.6,
          },
          '-=0.4'
        )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-end pb-20 pt-36 px-6"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      <div className="max-w-6xl mx-auto w-full">
        {/* Badge */}
        <div className="hero-badge mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.12em] uppercase text-muted border border-border rounded-full px-3.5 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Disponible — Marseille
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold mb-8" aria-label="Product & System Designer — SaaS B2B">
          <span className="clip-text block">
            <span className="hero-line block text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-[-0.03em] text-text">
              Product &amp; System
            </span>
          </span>
          <span className="clip-text block">
            <span className="hero-line block text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-[-0.03em]">
              <span className="text-text">Designer</span>
              <span className="text-muted italic font-medium text-[0.75em]"> — SaaS B2B</span>
            </span>
          </span>
        </h1>

        {/* Sub */}
        <p className="hero-sub max-w-xl text-muted text-lg leading-relaxed mb-10 text-balance">
          Je conçois des interfaces qui convertissent et des design systems
          qui tiennent dans la durée — chez Waalaxy depuis 3 ans.
        </p>

        {/* CTAs */}
        <div className="hero-ctas flex flex-wrap gap-3">
          <Link href="/projects" className="btn-primary">
            Voir mes projets
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <a href="mailto:margaux@waalaxy.com" className="btn-ghost">
            Me contacter
          </a>
        </div>

        {/* Meta */}
        <div className="hero-meta flex items-center gap-6 mt-16 pt-8 border-t border-border">
          <p className="text-muted text-sm">
            <span className="text-text font-medium">3+ ans</span> chez Waalaxy
          </p>
          <span className="w-px h-4 bg-border" />
          <p className="text-muted text-sm">
            <span className="text-text font-medium">9</span> projets documentés
          </p>
          <span className="w-px h-4 bg-border" />
          <p className="text-muted text-sm">
            Figma · Design System · IA
          </p>
        </div>
      </div>
    </section>
  )
}
