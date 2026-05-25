import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import AboutCTA from '@/components/home/AboutCTA'
import { getFeaturedProjects } from '@/lib/notion'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Margaux Francillard — Product Designer spécialisée IA',
  alternates: { canonical: '/' },
}

export default async function HomePage() {
  const projects = await getFeaturedProjects()

  return (
    <>
      <Hero />
      <FeaturedProjects projects={projects} />
      <AboutCTA />
    </>
  )
}
