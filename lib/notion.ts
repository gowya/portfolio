import { Client, isFullPage } from '@notionhq/client'
import type { Project, AboutContent, Lang } from './types'
import { PROJECTS, ABOUT } from './projects-data'

const notion = new Client({ auth: process.env.NOTION_API_KEY })

// ─── Placeholder data sourced from projects-data.ts ──────────────────────────

const placeholderProjects = (lang: Lang): Project[] =>
  PROJECTS[lang].map(
    ({ id, slug, title, description, coverImage, tags, caseStudyUrl, featured }) => ({
      id, slug, title, description, coverImage, tags, caseStudyUrl, featured,
    })
  )

// ─── Notion helpers ──────────────────────────────────────────────────────────

function slugify(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 60)
}

function getRichText(property: unknown): string {
  if (
    property &&
    typeof property === 'object' &&
    'rich_text' in property &&
    Array.isArray((property as { rich_text: unknown[] }).rich_text)
  ) {
    return (property as { rich_text: { plain_text: string }[] }).rich_text
      .map((t) => t.plain_text)
      .join('')
  }
  return ''
}

function getTitle(property: unknown): string {
  if (
    property &&
    typeof property === 'object' &&
    'title' in property &&
    Array.isArray((property as { title: unknown[] }).title)
  ) {
    return (property as { title: { plain_text: string }[] }).title
      .map((t) => t.plain_text)
      .join('')
  }
  return ''
}

function getMultiSelect(property: unknown): string[] {
  if (
    property &&
    typeof property === 'object' &&
    'multi_select' in property &&
    Array.isArray((property as { multi_select: { name: string }[] }).multi_select)
  ) {
    return (property as { multi_select: { name: string }[] }).multi_select.map(
      (s) => s.name
    )
  }
  return []
}

function getUrl(property: unknown): string | null {
  if (property && typeof property === 'object' && 'url' in property) {
    return (property as { url: string | null }).url
  }
  return null
}

function getCheckbox(property: unknown): boolean {
  if (property && typeof property === 'object' && 'checkbox' in property) {
    return Boolean((property as { checkbox: boolean }).checkbox)
  }
  return false
}

function getCoverImage(page: unknown): string | null {
  if (!page || typeof page !== 'object') return null
  const p = page as { cover?: { type: string; external?: { url: string }; file?: { url: string } } }
  if (!p.cover) return null
  if (p.cover.type === 'external') return p.cover.external?.url ?? null
  if (p.cover.type === 'file') return p.cover.file?.url ?? null
  return null
}

// ─── Public API ──────────────────────────────────────────────────────────────

export async function getProjects(lang: Lang = 'fr'): Promise<Project[]> {
  if (!process.env.NOTION_API_KEY || !process.env.NOTION_PROJECTS_DB_ID) {
    return placeholderProjects(lang)
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_PROJECTS_DB_ID,
      sorts: [{ timestamp: 'created_time', direction: 'descending' }],
    })

    return response.results.filter(isFullPage).map((page) => {
      const title = getTitle(page.properties.Name ?? page.properties.Title)
      return {
        id: page.id,
        slug: slugify(title),
        title,
        description: getRichText(page.properties.Description),
        coverImage: getCoverImage(page),
        tags: getMultiSelect(page.properties.Tags),
        caseStudyUrl: getUrl(page.properties['Case Study']),
        featured: getCheckbox(page.properties.Featured),
      }
    })
  } catch (err) {
    console.error('Notion getProjects error:', err)
    return placeholderProjects(lang)
  }
}

export async function getFeaturedProjects(lang: Lang = 'fr'): Promise<Project[]> {
  const projects = await getProjects(lang)
  return projects.filter((p) => p.featured).slice(0, 3)
}

export async function getAboutContent(lang: Lang = 'fr'): Promise<AboutContent> {
  if (!process.env.NOTION_API_KEY || !process.env.NOTION_ABOUT_PAGE_ID) {
    return ABOUT[lang]
  }

  try {
    const page = await notion.pages.retrieve({
      page_id: process.env.NOTION_ABOUT_PAGE_ID,
    })

    if (!isFullPage(page)) return ABOUT[lang]

    const bio = getRichText(page.properties.Bio)
    return {
      bio: bio || ABOUT[lang].bio,
      experiences: ABOUT[lang].experiences,
      formations: ABOUT[lang].formations,
    }
  } catch (err) {
    console.error('Notion getAboutContent error:', err)
    return ABOUT[lang]
  }
}
