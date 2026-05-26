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
  bio: "Lead Design System et Product Designer chez Waalaxy, obsédée par Figma, Notion, (maintenant Claude Code), et les interfaces qui font ce qu'elles promettent. Mon point d'entrée c'est toujours l'utilisateur. Ce qu'il fait, ce qu'il évite, ce qu'il cherche sans trouver les mots. Parce que c'est là que se trouvent les décisions qui font bouger les chiffres. Mon chien, lui, vient au bureau et ne comprend toujours pas pourquoi il n'a pas son propre accès Figma.",
  experiences: [
    {
      id: 'e1',
      company: 'Waalaxy · CDI · Montpellier',
      role: 'Lead Design System',
      period: 'Nov. 2023 • Présent',
      description:
        "En plus de mon rôle de product designer, je suis chargée de la construction et du maintien du Design System from scratch. Définition de la roadmap, priorisation, construction de la bibliothèque de composants dans Figma et Storybook, documentation, accompagnement des équipes produit et dev pour l'adoption du Design System.",
    },
    {
      id: 'e2',
      company: 'Waalaxy · CDI · Montpellier',
      role: 'Product Designer',
      period: 'Fev. 2023 • Présent',
      description:
        "Recherche utilisateur, conception d'expériences pour des centaines de milliers d'utilisateurs, définition des parcours clés de l'app et priorisation, mise en place des prototypes pour pouvoir tester rapidement des idées de parcours.",
    },
    {
      id: 'e3',
      company: 'Gowya Studio · Freelance · Paris',
      role: 'Brand & Web Designer',
      period: 'Avr. 2021 • Août 2023',
      description:
        "Création de sites web vitrine WordPress pour petits commerces, restaurants, golfs, etc... J'accompagne mes clients pour produire des interfaces web : UX Research & analyses concurrentielles, maquettage et prototypage Figma ",
    },
    {
      id: 'e4',
      company: 'SOS Accessoire · Alternance · Versailles',
      role: 'UX/UI Designer',
      period: 'Sept. 2020 • Août 2022',
      description:
        "Solo designer de la boîte. Maquettage, intégration et maintien du WordPress, mise en place du projet de refonte des 2 sites web de marque (blog et réservation visio) en 1 seul",
    },
  ],
  formations: [
    {
      id: 'f1',
      school: 'Notion Academy',
      degree: 'Certification Advanced · Workflows Path · Essential',
      year: '2025',
    },
    {
      id: 'f2',
      school: 'The Design Crew',
      degree: 'Design System Expertise',
      year: '2024',
      
    },
    {
      id: 'f3',
      school: 'Sup de Pub · Paris',
      degree: 'M2 Direction Artistique et de la Création · 17,5/20',
      year: '2022',
    },
    {
      id: 'f4',
      school: 'Sup de Pub · Paris',
      degree: 'Bachelor Communication Digitale et Création',
      year: '2020',
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
