import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import Ticker from '@/components/home/Ticker'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import AboutCTA from '@/components/home/AboutCTA'
import { getFeaturedProjects } from '@/lib/notion'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Margaux Francillard • Product Designer qui vibecode',
  alternates: { canonical: '/' },
}

export default async function HomePage() {
  const projects = await getFeaturedProjects()

  return (
    <>
      <Hero />
      <Ticker />
      <FeaturedProjects projects={projects} />
      <AboutCTA />
    </>
  )
}
