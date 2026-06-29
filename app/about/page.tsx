import type { Metadata } from 'next'
import AboutView from '@/components/about/AboutView'

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Margaux Francillard • Lead Design System & Product Designer chez Waalaxy, basée à Montpellier. Parcours, expériences et formations.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return <AboutView />
}
