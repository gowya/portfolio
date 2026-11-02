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
    title: 'Votre produit a des clients. Il lui manque une designer.',
    subtitle: 'Je repense vos parcours clés et je les livre directement dans votre code.',
    steps: [
      { icon: 'ticket', title: 'Un ticket dans votre outil', detail: 'Jira, ClickUp, Asana' },
      { icon: 'pullRequest', title: 'Une pull request', detail: 'sur votre GitHub' },
      { icon: 'review', title: 'Relue par votre dev', detail: 'avant la mise en ligne' },
    ],
    diagnostic: {
      name: 'Diagnostic',
      tagline: 'pour savoir par où commencer',
      description:
        "En 1 semaine : l'audit de votre parcours principal, vos priorités classées et votre écran le plus critique en prototype codé.",
      price: '890 €',
      note: 'déduit du 1er mois',
    },
    from: 'dès',
    perMonth: '/mois',
    plans: [
      {
        name: 'Designer embarquée',
        badge: 'Recommandée',
        featured: true,
        price: '3 590 €',
        meta: '2 à 3 jours par semaine',
        listLabel: 'En 3 mois :',
        deliverables: [
          'vos parcours clés repensés, un par un',
          'prototypés puis livrés dans votre code',
          'les bases de votre design system',
        ],
      },
      {
        name: 'Partenaire',
        badge: 'un seul client à la fois',
        featured: false,
        price: '5 390 €',
        meta: '3 à 4 jours par semaine',
        listLabel: 'Tout Designer embarquée, plus :',
        deliverables: [
          'vos données analysées pour prioriser',
          'un plan de tracking prêt pour votre dev',
          "des cycles d'itération courts",
          'des règles de design et workflows IA pour avancer sans moi',
        ],
      },
    ],
    billing: 'Facturé en début de mois. Engagement 3 mois, puis mois par mois avec un mois de préavis.',
    vat: 'TVA non applicable, art. 293 B du CGI',
    optionsLabel: 'Options',
    options: [
      { icon: 'sparkles', name: 'Règles de design pour vos outils IA', price: '900 €', includedIn: 'inclus dans Partenaire' },
      { icon: 'layout', name: 'Landing page designée et codée', price: 'dès 890 €', includedIn: '' },
      { icon: 'chart', name: 'Plan de tracking', price: '450 €', includedIn: 'inclus dans Partenaire' },
      { icon: 'route', name: 'Parcours supplémentaire audité', price: '450 €', includedIn: '' },
    ],
    faqLabel: 'Questions fréquentes',
    faq: [
      {
        question: 'Qui relit le code que vous livrez ?',
        answer: 'Votre dev relit chaque pull request sur GitHub, avant la mise en ligne.',
      },
      {
        question: 'Dans quels outils vous travaillez ?',
        answer: 'Les vôtres : Jira, ClickUp ou Asana pour les tickets, GitHub pour le code.',
      },
      {
        question: 'Comment on se parle au quotidien ?',
        answer: 'Sur Slack ou en Meet, les jours où je suis avec vous.',
      },
      {
        question: 'Pourquoi commencer par le Diagnostic ?',
        answer: "Pour savoir par où commencer avant de s'engager au mois. Les 890 € sont déduits du premier mois.",
      },
      {
        question: 'Et après les 3 mois ?',
        answer: 'On continue au mois, et vous pouvez arrêter avec un mois de préavis.',
      },
    ],
    cta: 'Réserver un appel',
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
    title: "Your product has customers. It's missing a designer.",
    subtitle: 'I redesign your key user journeys and ship them straight into your code.',
    steps: [
      { icon: 'ticket', title: 'A ticket in your tool', detail: 'Jira, ClickUp, Asana' },
      { icon: 'pullRequest', title: 'A pull request', detail: 'on your GitHub' },
      { icon: 'review', title: 'Reviewed by your dev', detail: 'before it goes live' },
    ],
    diagnostic: {
      name: 'Diagnostic',
      tagline: 'to know where to start',
      description:
        'In 1 week: an audit of your main user journey, your priorities ranked and your most critical screen as a coded prototype.',
      price: '€890',
      note: 'deducted from your 1st month',
    },
    from: 'from',
    perMonth: '/month',
    plans: [
      {
        name: 'Embedded designer',
        badge: 'Recommended',
        featured: true,
        price: '€3,590',
        meta: '2 to 3 days a week',
        listLabel: 'In 3 months:',
        deliverables: [
          'your key user journeys redesigned, one by one',
          'prototyped, then shipped into your code',
          'the foundations of your design system',
        ],
      },
      {
        name: 'Partner',
        badge: 'one client at a time',
        featured: false,
        price: '€5,390',
        meta: '3 to 4 days a week',
        listLabel: 'Everything in Embedded designer, plus:',
        deliverables: [
          'your data analysed to set priorities',
          'a measurement plan ready for your dev',
          'short iteration cycles',
          'design rules and AI workflows to keep moving without me',
        ],
      },
    ],
    billing: "Billed at the start of each month. 3-month commitment, then month to month with one month's notice.",
    vat: 'VAT not applicable, art. 293 B of the French Tax Code',
    optionsLabel: 'Add-ons',
    options: [
      { icon: 'sparkles', name: 'Design rules for your AI tools', price: '€900', includedIn: 'included in Partner' },
      { icon: 'layout', name: 'Landing page, designed and coded', price: 'from €890', includedIn: '' },
      { icon: 'chart', name: 'Measurement plan', price: '€450', includedIn: 'included in Partner' },
      { icon: 'route', name: 'Extra user journey audit', price: '€450', includedIn: '' },
    ],
    faqLabel: 'FAQ',
    faq: [
      {
        question: 'Who reviews the code you ship?',
        answer: 'Your dev reviews every pull request on GitHub before it goes live.',
      },
      {
        question: 'Which tools do you work in?',
        answer: 'Yours: Jira, ClickUp or Asana for tickets, GitHub for code.',
      },
      {
        question: 'How do we stay in touch day to day?',
        answer: 'On Slack or Meet, on the days I work with you.',
      },
      {
        question: 'Why start with the Diagnostic?',
        answer: 'To know where to start before committing monthly. The €890 is deducted from your first month.',
      },
      {
        question: 'What happens after 3 months?',
        answer: "We keep going month to month, and you can stop with one month's notice.",
      },
    ],
    cta: 'Book a call',
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
