'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SKILLS = ['Figma', 'Vibe Code', 'Design System']

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
        <div className="about-cta-inner relative rounded-2xl border border-border bg-bg-card overflow-hidden flex items-stretch">
          {/* Accent glow */}
          <div
            className="absolute -top-32 -left-32 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(184,92,42,0.12) 0%, transparent 70%)' }}
          />

          {/* Left: text content — 60% */}
          <div className="relative flex-[3] p-10 sm:p-14 flex flex-col justify-center min-h-[320px]">
            <p className="section-label mb-5">À propos</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-text leading-tight mb-4 text-balance">
              La designer derrière les projets
            </h2>
            <p className="mb-5" style={{ fontSize: '14px', color: '#7A6A58', lineHeight: 1.6 }}>
              Lead Design System &amp; Product Designer · Waalaxy · Nov. 2023 → Présent
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="font-sans"
                  style={{
                    fontSize: '12px',
                    color: '#B85C2A',
                    border: '1px solid rgba(184,92,42,0.3)',
                    borderRadius: '4px',
                    padding: '3px 10px',
                    letterSpacing: '0.02em',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
            <Link href="/about" className="btn-primary w-fit">
              Voir mon parcours
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Right: portrait photo — 40% */}
          <div className="relative flex-[2] hidden md:block">
            <Image
              src="/margaux.png"
              alt="Portrait"
              fill
              sizes="(max-width: 1280px) 40vw, 480px"
              className="object-cover object-top"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'rgba(184,92,42,0.08)', mixBlendMode: 'multiply' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
