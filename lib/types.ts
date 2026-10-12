export type Lang = 'fr' | 'en'

export interface Project {
  id: string
  slug: string
  title: string
  description: string
  coverImage: string | null
  tags: string[]
  caseStudyUrl: string | null
  featured: boolean
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string
}

export interface Formation {
  id: string
  school: string
  degree: string
  year: string
}

export interface AboutContent {
  bio: string
  experiences: Experience[]
  formations: Formation[]
}

// ─── Case study content types ────────────────────────────────────────────────

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'quote'; text: string; source?: string }
  | { type: 'img'; src: string; caption?: string }
  | { type: 'grid'; images: Array<{ src: string; caption?: string }> }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; text: string }
  | { type: 'link'; href: string; label: string }

export interface CaseStudySection {
  title: string
  blocks: Block[]
}

export interface Metric {
  value: string
  label: string
}

export interface ProjectDetail extends Project {
  tagline: string
  role: string
  company: string
  period: string
  status: string
  team?: string
  metrics: Metric[]
  intro: string
  sections: CaseStudySection[]
  learnings: string
}
