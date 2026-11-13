import type { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/projects-data'
import { SITE_URL } from '@/lib/links'

const STATIC_PAGES = ['', '/projects', '/about', '/pricing', '/design-system']

// Lists every public page, case studies included. Slugs come from lib/projects,
// so a new case study appears here without touching this file.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [...STATIC_PAGES, ...getAllSlugs().map((slug) => `/projects/${slug}`)]
  return pages.map((path) => ({ url: `${SITE_URL}${path}` }))
}
