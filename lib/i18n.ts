'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  createElement,
  type ReactNode,
} from 'react'
import type { Lang } from './types'

export type { Lang }

// Single import surface for content: components pull data accessors from here too.
export {
  getAllProjects,
  getFeaturedProjects,
  getProjectBySlug,
  getAllSlugs,
  getAbout,
} from './projects-data'

// ─── Strings ──────────────────────────────────────────────────────────────────

const UI_FR = {
  nav: {
    home: 'Accueil',
    work: 'Mes projets',
    about: 'Qui je suis',
    talk: 'On en parle ?',
    designSystem: 'Design System',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    navMenu: 'Menu de navigation',
    toLight: 'Passer en mode clair',
    toDark: 'Passer en mode sombre',
    switchToFr: 'Passer le site en français',
    switchToEn: 'Switch the site to English',
  },
  hero: {
    badge: 'Disponible • Montpellier & Remote',
    headlineLine1: 'Product & System',
    headlineRole: 'Designer',
    headlineTag: '• qui Vibecode',
    aria: 'Product & System Designer qui vibecode',
    sub: 'Je conçois des interfaces qui convertissent et des design systems qui tiennent dans la durée. 3,5 ans chez Waalaxy, freelance depuis.',
    ctaProjects: 'Voir mes projets',
    ctaTalk: 'On en parle ?',
    stats: [
      { value: '×2,5', label: 'sur les abonnements Business' },
      { value: '83,5%', label: 'de réussite au 1er essai' },
      { value: '1', label: 'chien en télétravail' },
    ],
  },
  ticker:
    'FIGMA · POPPY · DESIGN SYSTEM · BLEU KLEIN · SAAS B2B · PLUIE SUR VELUX · CLAUDE CODE · EAU FRAÎCHE OU VIN BLANC · RECHERCHE UTILISATEUR · COUCHERS DE SOLEIL · IA · WAALAXY · PLAYLIST EN BOUCLE · ',
  featured: {
    label: 'Travaux sélectionnés',
    title: 'Projets récents',
    viewAll: 'Voir tout',
    viewCase: 'Voir le case study →',
    viewAllProjects: 'Voir tous les projets',
  },
  aboutCta: {
    label: 'À propos',
    title: 'La designer derrière les projets',
    subtitle: 'Product Designer & AI Builder · Ex-Lead Design System chez Waalaxy',
    cta: 'Voir mon parcours',
    skills: ['Figma', 'Vibe Code', 'Design System'],
    photoAlt: 'Portrait',
  },
  footer: {
    talk: 'On en parle ?',
    work: 'Projets',
  },
  projectsPage: {
    label: 'Portfolio',
    title: 'Projets',
    subtitle:
      "Des projets qui partent de l'utilisateur, qui finissent par faire bouger les bons chiffres.",
  },
  projectGrid: {
    all: 'Tous',
    viewCase: 'Voir le case study',
    empty: 'Aucun projet pour ce filtre.',
    tags: ['Product Design', 'Conversion', 'Design System', 'IA', 'Discovery', 'Freelance'],
  },
  caseStudy: {
    back: 'Projets',
    role: 'Rôle',
    company: 'Entreprise',
    period: 'Période',
    team: 'Équipe',
    learnings: "Ce que j'ai retenu",
    previous: 'Précédent',
    next: 'Suivant',
  },
  about: {
    label: 'À propos',
    skillsLabel: 'Compétences',
    talk: 'On en parle ?',
    linkedin: 'LinkedIn ↗',
    skills: [
      'Product Design',
      'Design System',
      'Figma',
      'Storybook',
      'Notion',
      'Discovery',
      'Claude Code',
      'A/B Testing',
      'Prompting IA',
      'Mixpanel/PostHog',
      'Micro-interactions',
      'React/Next.js',
      'MCP',
      'Suite Adobe',
      'Anglais B2/C1',
    ],
  },
  timeline: {
    experience: 'Expériences',
    education: 'Formations',
  },
}

type UIStrings = typeof UI_FR

const UI_EN: UIStrings = {
  nav: {
    home: 'Home',
    work: 'Work',
    about: 'About',
    talk: "Let's talk?",
    designSystem: 'Design System',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    navMenu: 'Navigation menu',
    toLight: 'Switch to light mode',
    toDark: 'Switch to dark mode',
    switchToFr: 'Passer le site en français',
    switchToEn: 'Switch the site to English',
  },
  hero: {
    badge: 'Available • Montpellier & Remote',
    headlineLine1: 'Product & System',
    headlineRole: 'Designer',
    headlineTag: '• who Vibecodes',
    aria: 'Product & System Designer who vibecodes',
    sub: 'I design interfaces that convert and design systems built to last. 3.5 years at Waalaxy, freelance since.',
    ctaProjects: 'View my work',
    ctaTalk: "Let's talk?",
    stats: [
      { value: '×2.5', label: 'on Business subscriptions' },
      { value: '83.5%', label: 'first-try success' },
      { value: '1', label: 'dog on remote duty' },
    ],
  },
  ticker:
    'FIGMA · POPPY · DESIGN SYSTEM · BLEU KLEIN · SAAS B2B · RAIN ON SKYLIGHTS · CLAUDE CODE · COLD WATER OR WHITE WINE · USER RESEARCH · GOLDEN HOUR · AI · WAALAXY · THE SAME PLAYLIST ON REPEAT · ',
  featured: {
    label: 'Selected work',
    title: 'Recent projects',
    viewAll: 'View all',
    viewCase: 'View case study →',
    viewAllProjects: 'View all projects',
  },
  aboutCta: {
    label: 'About',
    title: 'The designer behind the work',
    subtitle: 'Product Designer & AI Builder · Former Lead Design System at Waalaxy',
    cta: 'More about me',
    skills: ['Figma', 'Vibe Code', 'Design System'],
    photoAlt: 'Portrait',
  },
  footer: {
    talk: "Let's talk?",
    work: 'Work',
  },
  projectsPage: {
    label: 'Portfolio',
    title: 'Work',
    subtitle:
      'Work that starts with the user and ends up moving the numbers that matter.',
  },
  projectGrid: {
    all: 'All',
    viewCase: 'View case study',
    empty: 'No projects match this filter.',
    tags: ['Product Design', 'Conversion', 'Design System', 'AI', 'Discovery', 'Freelance'],
  },
  caseStudy: {
    back: 'Work',
    role: 'Role',
    company: 'Company',
    period: 'Period',
    team: 'Team',
    learnings: 'What I took away',
    previous: 'Previous',
    next: 'Next',
  },
  about: {
    label: 'About',
    skillsLabel: 'Skills',
    talk: "Let's talk?",
    linkedin: 'LinkedIn ↗',
    skills: [
      'Product Design',
      'Design System',
      'Figma',
      'Storybook',
      'Notion',
      'Discovery',
      'Claude Code',
      'A/B Testing',
      'AI Prompting',
      'Mixpanel/PostHog',
      'Micro-interactions',
      'React/Next.js',
      'MCP',
      'Adobe Suite',
      'English B2/C1',
    ],
  },
  timeline: {
    experience: 'Experience',
    education: 'Education',
  },
}

const UI: Record<Lang, UIStrings> = { fr: UI_FR, en: UI_EN }

// ─── Detection + persistence ────────────────────────────────────────────────

function detectLang(): Lang {
  if (typeof window === 'undefined') return 'fr'
  try {
    const stored = localStorage.getItem('lang')
    if (stored === 'fr' || stored === 'en') return stored
  } catch {
    /* ignore */
  }
  const nav = (navigator.language || '').toLowerCase()
  // English browsers (en, en-US, en-GB, …) → EN. Everything else → FR.
  return nav.startsWith('en') ? 'en' : 'fr'
}

// ─── Context ──────────────────────────────────────────────────────────────────

type LangContextValue = { lang: Lang; setLang: (next: Lang) => void }

const LangContext = createContext<LangContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Server + first client render use 'fr' (matches the html lang) to avoid a
  // hydration mismatch; the real preference is applied in the effect below.
  const [lang, setLangState] = useState<Lang>('fr')

  useEffect(() => {
    const detected = detectLang()
    setLangState(detected)
    document.documentElement.lang = detected
  }, [])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem('lang', next)
    } catch {
      /* ignore */
    }
    document.documentElement.lang = next
  }, [])

  return createElement(LangContext.Provider, { value: { lang, setLang } }, children)
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return { lang: ctx.lang, setLang: ctx.setLang, t: UI[ctx.lang] }
}
