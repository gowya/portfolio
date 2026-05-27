'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const ITEMS = 'FIGMA · POPPY · DESIGN SYSTEM · BLEU KLEIN · SAAS B2B · PLUIE SUR VELUX · CLAUDE CODE · EAU FRAÎCHE OU VIN BLANC · RECHERCHE UTILISATEUR · COUCHERS DE SOLEIL · IA · WAALAXY · PLAYLIST EN BOUCLE · '

export default function Ticker() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track) return

    // Scroll loop — x: '-50%' = one full content-width (two copies in DOM)
    const tl = gsap.timeline({ repeat: -1 })
    tl.fromTo(track, { x: '0%' }, { x: '-50%', duration: 100, ease: 'none' })
    tlRef.current = tl

    // Entrance
    gsap.fromTo(
      container,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: 'power2.out' }
    )

    const handleEnter = () => {
      gsap.to(tl, { timeScale: 0, duration: 0.4, ease: 'power2.out' })
    }
    const handleLeave = () => {
      gsap.to(tl, { timeScale: 1, duration: 0.6, ease: 'power2.inOut' })
    }

    const isTouch = 'ontouchstart' in window
    if (!isTouch) {
      container.addEventListener('mouseenter', handleEnter)
      container.addEventListener('mouseleave', handleLeave)
    }

    return () => {
      tl.kill()
      if (!isTouch) {
        container.removeEventListener('mouseenter', handleEnter)
        container.removeEventListener('mouseleave', handleLeave)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="block overflow-hidden border-y border-border py-3.5 select-none cursor-default"
      style={{
        opacity: 0,
        maskImage:
          'linear-gradient(to right, transparent 0px, black 80px, black calc(100% - 80px), transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0px, black 80px, black calc(100% - 80px), transparent 100%)',
      }}
      aria-hidden="true"
    >
      <div ref={trackRef} className="ticker-track">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="text-[11px] md:text-xs font-semibold tracking-[0.08em] md:tracking-[0.18em] uppercase text-accent/70"
          >
            {ITEMS.repeat(6)}
          </span>
        ))}
      </div>
    </div>
  )
}
