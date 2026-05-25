'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Experience, Formation } from '@/lib/types'

gsap.registerPlugin(ScrollTrigger)

function TimelineItem({
  period,
  title,
  subtitle,
  description,
}: {
  period: string
  title: string
  subtitle: string
  description?: string
}) {
  return (
    <div className="timeline-item group flex gap-6 sm:gap-10">
      {/* Left: period */}
      <div className="w-28 sm:w-36 shrink-0 pt-0.5">
        <span className="text-xs font-medium text-muted">{period}</span>
      </div>

      {/* Center: line */}
      <div className="flex flex-col items-center">
        <div className="w-2 h-2 rounded-full bg-border group-hover:bg-accent transition-colors mt-1.5 shrink-0" />
        <div className="w-px flex-1 bg-border mt-2" />
      </div>

      {/* Right: content */}
      <div className="pb-10">
        <h3 className="font-display font-semibold text-text mb-0.5">{title}</h3>
        <p className="text-accent text-sm mb-2">{subtitle}</p>
        {description && (
          <p className="text-muted text-sm leading-relaxed max-w-lg">{description}</p>
        )}
      </div>
    </div>
  )
}

export default function Timeline({
  experiences,
  formations,
}: {
  experiences: Experience[]
  formations: Formation[]
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.timeline-item', {
        opacity: 0,
        x: -20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.timeline-item',
          start: 'top 85%',
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="space-y-16">
      {/* Experiences */}
      <div>
        <p className="section-label mb-8">Expériences</p>
        <div>
          {experiences.map((exp) => (
            <TimelineItem
              key={exp.id}
              period={exp.period}
              title={exp.role}
              subtitle={exp.company}
              description={exp.description}
            />
          ))}
        </div>
      </div>

      {/* Formations */}
      <div>
        <p className="section-label mb-8">Formations</p>
        <div>
          {formations.map((f) => (
            <TimelineItem
              key={f.id}
              period={f.year}
              title={f.degree}
              subtitle={f.school}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
