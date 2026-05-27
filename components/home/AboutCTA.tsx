'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutCTA() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-cta-inner', {
        opacity: 0,
        y: 32,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-cta-inner',
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="px-6 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="about-cta-inner relative rounded-2xl border border-border bg-bg-card p-10 sm:p-14 overflow-hidden flex items-center gap-10">
          {/* Accent glow */}
          <div
            className="absolute -top-32 -right-32 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(184,92,42,0.12) 0%, transparent 70%)' }}
          />

          <div className="relative flex-1">
            <p className="section-label mb-5">À propos</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-text leading-tight mb-5 text-balance">
              La designer derrière les projets
            </h2>
            <p className="text-muted text-base leading-relaxed mb-8 text-balance">
              Lead DS et Product Designer chez Waalaxy depuis 3 ans. J'aime autant
              passer une après-midi sur la copy d'un écran que sur un composant
              Figma qui tient la route dans tous ses états.
            </p>
            <Link href="/about" className="btn-primary">
              En savoir plus
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Portrait photo */}
          <div className="relative hidden md:block w-48 h-56 shrink-0 self-center">
            <Image
              src="/margaux.png"
              alt="Margaux Francillard"
              fill
              sizes="192px"
              className="object-cover object-top rounded-xl border border-accent/30"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
