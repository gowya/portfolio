import type { Metadata } from 'next'
import Image from 'next/image'
import Timeline from '@/components/about/Timeline'
import { getAboutContent } from '@/lib/notion'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Margaux Francillard • Lead Design System & Product Designer chez Waalaxy, basée à Montpellier. Parcours, expériences et formations.',
  alternates: { canonical: '/about' },
}

const SKILLS = [
  'Product Design',
  'Design System',
  'Figma',
  'Storybook',
  'Notion',
  'UX Research',
  'Claude Code',
  'A/B Testing',
  'Prompting IA',
  'Mixpanel/PostHog',
  'Micro-interactions',
  'HTML/CSS',
  'Suite Adobe',
  'Anglais B2/C1',
]

export default async function AboutPage() {
  const { bio, experiences, formations } = await getAboutContent()

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">

          {/* Left • sticky sidebar */}
          <aside className="lg:sticky lg:top-32 lg:self-start">

            {/* Photo */}
            <div className="relative w-40 h-40 rounded-2xl overflow-hidden mb-6 border border-border">
              <Image
                src="/margaux.png"
                alt="Margaux Francillard"
                fill
                sizes="96px"
                className="object-cover"
                priority
              />
            </div>

            <p className="section-label mb-4">À propos</p>
            <h1 className="text-text mb-6 leading-tight tracking-tight" style={{ fontFamily: 'var(--font-italiana), Georgia, serif', fontSize: 'clamp(3.5rem, 7vw, 6rem)' }}>
              Margaux
              <br />
              Francillard
            </h1>
            <p className="text-muted text-base leading-relaxed mb-8">{bio}</p>

            <div className="flex flex-col gap-3 mb-10">
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0c0YANfA-PSK7D6Lq8ZlTKa0X9DLWUhb7RpKVTlxFGiVGJg3c3fa4cm8d5c9yeSMrNk2jYJZt0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-fit"
              >
                On en parle ?
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/margaux-francillard/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-fit"
              >
                LinkedIn ↗
              </a>
            </div>

            {/* Skills */}
            <div className="pt-8 border-t border-border">
              <p className="section-label mb-4">Compétences</p>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* Right • timeline */}
          <main>
            <Timeline experiences={experiences} formations={formations} />
          </main>
        </div>
      </div>
    </div>
  )
}
