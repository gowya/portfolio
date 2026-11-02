import type { ProjectDetail, AboutContent, Lang } from './types'
import { PROJECTS_ORDERED } from './projects'
import { ABOUT } from './about-data'

// Content lives in one file per case study (lib/projects/<slug>.ts) and in lib/about-data.ts.
// This module only assembles it and exposes the accessors used by the app.

export const PROJECTS: Record<Lang, ProjectDetail[]> = {
  fr: PROJECTS_ORDERED.map((p) => p.fr),
  en: PROJECTS_ORDERED.map((p) => p.en),
}

export function getAllProjects(lang: Lang): ProjectDetail[] {
  return PROJECTS[lang]
}

export function getFeaturedProjects(lang: Lang): ProjectDetail[] {
  return PROJECTS[lang].filter((p) => p.featured).slice(0, 3)
}

export function getProjectBySlug(slug: string, lang: Lang = 'fr'): ProjectDetail | undefined {
  return PROJECTS[lang].find((p) => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return PROJECTS.fr.map((p) => p.slug)
}

export { ABOUT }

export function getAbout(lang: Lang): AboutContent {
  return ABOUT[lang]
}
