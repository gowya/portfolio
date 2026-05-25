import { Client, isFullPage } from '@notionhq/client'
import type { Project, AboutContent } from './types'
import { ALL_PROJECTS } from './projects-data'

const notion = new Client({ auth: process.env.NOTION_API_KEY })

// ─── Placeholder data sourced from projects-data.ts ──────────────────────────

const PLACEHOLDER_PROJECTS: Project[] = ALL_PROJECTS.map(
  ({ id, slug, title, description, coverImage, tags, caseStudyUrl, featured }) => ({
    id, slug, title, description, coverImage, tags, caseStudyUrl, featured,
  })
)

const PLACEHOLDER_ABOUT: AboutContent = {
  bio: "Moi c'est Margaux. Lead Design System et Product Designer chez Waalaxy, obsédée par Figma, Notion, et les interfaces qui font ce qu'elles promettent. Mon truc, c'est l'espace entre le business et l'utilisateur : comprendre pourquoi quelqu'un abandonne un parcours, trouver ce qui coince, concevoir des solutions qui convertissent sans forcer.",
  experiences: [
    {
      id: 'e1',
      company: 'Waalaxy · Montpellier',
      role: 'Lead Design System & Product Designer',
      period: 'Nov. 2023 — Présent',
      description:
        "Conception d'expériences pour des centaines de milliers d'utilisateurs. Construction et maintien du Design System from scratch. Double casquette : Product Designer sur les features produit, Lead DS sur les fondations.",
    },
    {
      id: 'e2',
      company: 'Waalaxy · Montpellier',
      role: 'Product Designer',
      period: '2022 — 2023',
      description:
        "Conception des interfaces produit, recherche utilisateur, définition des parcours clés de l'application SaaS B2B.",
    },
  ],
  formations: [
    {
      id: 'f1',
      school: 'The Design Crew',
      degree: 'Design System Expertise',
      year: 'Juin 2024',
    },
    {
      id: 'f2',
      school: 'Sup de Pub · Paris',
      degree: 'M2 Direction Artistique et de la Création · 17,21/20',
      year: 'Juin 2022',
    },
    {
      id: 'f3',
      school: 'Sup de Pub · Paris',
      degree: 'Bachelor Communication Digitale et Création',
      year: '2020',
    },
    {
      id: 'f4',
      school: 'Notion Academy',
      degree: 'Advanced · Workflows Path · Essential',
      year: 'Déc. 2025',
    },
  ],
}

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

export async function getProjects(): Promise<Project[]> {
  if (!process.env.NOTION_API_KEY || !process.env.NOTION_PROJECTS_DB_ID) {
    return PLACEHOLDER_PROJECTS
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
    return PLACEHOLDER_PROJECTS
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getProjects()
  return projects.filter((p) => p.featured).slice(0, 3)
}

export async function getAboutContent(): Promise<AboutContent> {
  if (!process.env.NOTION_API_KEY || !process.env.NOTION_ABOUT_PAGE_ID) {
    return PLACEHOLDER_ABOUT
  }

  try {
    const page = await notion.pages.retrieve({
      page_id: process.env.NOTION_ABOUT_PAGE_ID,
    })

    if (!isFullPage(page)) return PLACEHOLDER_ABOUT

    const bio = getRichText(page.properties.Bio)
    return {
      bio: bio || PLACEHOLDER_ABOUT.bio,
      experiences: PLACEHOLDER_ABOUT.experiences,
      formations: PLACEHOLDER_ABOUT.formations,
    }
  } catch (err) {
    console.error('Notion getAboutContent error:', err)
    return PLACEHOLDER_ABOUT
  }
}
