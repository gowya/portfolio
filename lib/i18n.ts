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
    pricing: 'Tarifs',
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
    tags: ['Conversion', 'Design System', 'IA', 'Discovery', 'Freelance'],
  },
  caseStudy: {
    back: 'Projets',
    liveDemo: 'Voir la démo en ligne',
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
  pricing: {
    label: 'Tarifs',
    title: 'Une designer qui code, au rythme de votre produit.',
    subtitle: 'Pour les produits qui ont des clients, mais pas encore de designer.',
    diagnostic: {
      step: 'Étape 1 · Diagnostic',
      description:
        "Audit de votre parcours principal et de votre interface, priorités claires, et l'écran le plus critique repensé en prototype codé.",
      meta: 'Livré en 1 semaine',
      price: '890 €',
      note: 'déduit du 1er mois',
      cta: 'Commencer',
    },
    monthlyStep: 'Étape 2 · on continue ensemble, au mois',
    commitment: '−20 % avec engagement 3 mois',
    withoutCommitment: 'Sans engagement :',
    perMonth: '/mois',
    plans: [
      {
        name: 'Temps partiel',
        badge: 'Recommandée',
        featured: true,
        oldPrice: '4 500 €',
        price: '3 590 €',
        meta: '2 à 3 jours par semaine',
        description:
          'Je deviens votre designer : design system, prototypes et intégration du front, directement dans votre code.',
      },
      {
        name: 'Partenaire',
        badge: '1 place',
        featured: false,
        oldPrice: '6 750 €',
        price: '5 390 €',
        meta: '3 à 4 jours par semaine',
        description:
          "Tout le temps partiel, plus le pilotage : analyse de vos données, cycles d'itération, et des workflows IA pour que votre équipe avance aussi sans moi.",
      },
    ],
    optionsLabel: 'Options',
    optionsNote: "À ajouter à n'importe quelle offre, ou seules.",
    options: [
      {
        icon: 'layout',
        name: 'Landing page designée et codée',
        description: 'Avec les bases de votre identité visuelle : couleurs, typo, ton.',
        price: 'dès 890 €',
        includedIn: '',
      },
      {
        icon: 'sparkles',
        name: 'Règles de design pour vos outils IA',
        description: 'Pour que Cursor ou Claude produisent des écrans cohérents.',
        price: '900 €',
        includedIn: '',
      },
      {
        icon: 'chart',
        name: 'Plan de mesure',
        description: "Ce qu'il faut suivre pour prioriser, prêt à transmettre à votre dev.",
        price: '450 €',
        includedIn: 'Inclus dans Partenaire',
      },
      {
        icon: 'route',
        name: 'Parcours supplémentaire audité',
        description: 'En plus de celui du Diagnostic.',
        price: '450 €',
        includedIn: '',
      },
    ],
    cta: 'On en parle ?',
    vat: 'TVA non applicable, art. 293 B du CGI',
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
    pricing: 'Pricing',
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
    tags: ['Conversion', 'Design System', 'AI', 'Discovery', 'Freelance'],
  },
  caseStudy: {
    back: 'Work',
    liveDemo: 'See the live demo',
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
  pricing: {
    label: 'Pricing',
    title: 'A designer who codes, at the pace of your product.',
    subtitle: 'For products that have customers, but no designer yet.',
    diagnostic: {
      step: 'Step 1 · Diagnostic',
      description:
        'An audit of your main user journey and your interface, clear priorities, and your most critical screen redesigned as a coded prototype.',
      meta: 'Delivered in 1 week',
      price: '€890',
      note: 'deducted from your 1st month',
      cta: 'Get started',
    },
    monthlyStep: 'Step 2 · we keep going together, monthly',
    commitment: '−20% with a 3-month commitment',
    withoutCommitment: 'Without commitment:',
    perMonth: '/month',
    plans: [
      {
        name: 'Part-time',
        badge: 'Recommended',
        featured: true,
        oldPrice: '€4,500',
        price: '€3,590',
        meta: '2 to 3 days a week',
        description:
          'I become your designer: design system, prototypes and front-end integration, right in your codebase.',
      },
      {
        name: 'Partner',
        badge: '1 spot',
        featured: false,
        oldPrice: '€6,750',
        price: '€5,390',
        meta: '3 to 4 days a week',
        description:
          'Everything in Part-time, plus steering: analysing your data, iteration cycles, and AI workflows so your team keeps moving without me.',
      },
    ],
    optionsLabel: 'Add-ons',
    optionsNote: 'Add them to any plan, or book them on their own.',
    options: [
      {
        icon: 'layout',
        name: 'Landing page, designed and coded',
        description: 'Including the basics of your visual identity: colours, type, tone.',
        price: 'from €890',
        includedIn: '',
      },
      {
        icon: 'sparkles',
        name: 'Design rules for your AI tools',
        description: 'So Cursor or Claude produce consistent screens.',
        price: '€900',
        includedIn: '',
      },
      {
        icon: 'chart',
        name: 'Measurement plan',
        description: 'What to track to prioritise, ready to hand over to your dev.',
        price: '€450',
        includedIn: 'Included in Partner',
      },
      {
        icon: 'route',
        name: 'Extra user journey audit',
        description: 'On top of the one in the Diagnostic.',
        price: '€450',
        includedIn: '',
      },
    ],
    cta: "Let's talk?",
    vat: 'VAT not applicable, art. 293 B of the French Tax Code',
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
