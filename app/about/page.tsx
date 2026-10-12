import type { Metadata } from 'next'
import AboutView from '@/components/about/AboutView'

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Margaux Francillard, Product Designer & AI Builder basée à Montpellier, ex-Lead Design System chez Waalaxy. Parcours, expériences et formations.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return <AboutView />
}
