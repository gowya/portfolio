import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import Ticker from '@/components/home/Ticker'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import AboutCTA from '@/components/home/AboutCTA'

export const metadata: Metadata = {
  title: 'Margaux Francillard • Product Designer qui vibecode',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <FeaturedProjects />
      <AboutCTA />
    </>
  )
}
