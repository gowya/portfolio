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
    sub: 'Votre produit a des clients, il lui manque une designer. Je repense vos parcours clés et je les livre directement dans votre code. Ex\u2011Lead Design System chez Waalaxy.',
    ctaTalk: 'Réserver un appel',
    ctaProjects: 'Voir mes projets',
    stepsLabel: 'Comment je livre',
    stepsIntro: 'Pas de maquette à recoder : chaque parcours arrive dans votre code, relu par votre équipe.',
    entry: 'Pour commencer : le Diagnostic, 1\u00a0semaine, 890\u00a0€ déduits du 1er mois',
    entryCta: 'Voir les offres',
  },
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
      { icon: 'ticket', title: 'Je conçois et prototype', detail: 'à partir d’un ticket Jira, ClickUp ou Asana' },
      { icon: 'pullRequest', title: 'J’ouvre une pull request', detail: 'directement sur votre GitHub' },
      { icon: 'review', title: 'Votre dev relit chaque PR', detail: 'et valide avant la mise en ligne' },
    ],
    diagnostic: {
      name: 'Diagnostic',
      tagline: 'pour savoir par où commencer',
      description:
        "En 1 semaine : votre écran le plus critique repensé et prototypé en code, à partir de l'audit de votre parcours principal et de vos priorités classées.",
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
        listLabel: 'En 2 mois :',
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
    billing: 'Facturé en début de mois. Engagement 2 mois, puis mois par mois avec un mois de préavis.',
    vat: 'TVA non applicable, art. 293 B du CGI',
    optionsLabel: 'Options',
    options: [
      { icon: 'sparkles', name: 'Règles de design pour vos outils IA', price: '900 €', includedIn: 'inclus dans Partenaire' },
      { icon: 'layout', name: 'Landing page designée et codée', price: 'dès 890 €', includedIn: '' },
      { icon: 'chart', name: 'Plan de tracking', price: '450 €', includedIn: 'inclus dans Partenaire' },
      { icon: 'route', name: 'Parcours supplémentaire audité', price: '225 €', includedIn: '' },
    ],
    faqLabel: 'Questions fréquentes',
    faq: [
      {
        question: 'En quoi c’est différent d’un designer freelance ?',
        answer: 'La plupart des designers livrent des maquettes que votre équipe doit ensuite recoder. Moi, je livre directement dans votre code, sous forme de pull request.',
      },
      {
        question: 'Une designer dans notre code, ce n’est pas risqué ?',
        answer: 'Chaque modification passe par une pull request que votre dev relit sur GitHub. Rien n’est mis en ligne sans sa validation.',
      },
      {
        question: 'Vous travaillez sur quelle stack ?',
        answer: 'Sur votre front web, quel que soit le framework : React, Next.js, Vue ou autre. Je m’adapte à votre code existant.',
      },
      {
        question: 'Vous livrez aussi des maquettes Figma ?',
        answer: 'Si vous en avez besoin. J’utilise Figma pour explorer, mais le livrable final, c’est le code.',
      },
      {
        question: 'Et si notre dev n’a pas le temps de relire ?',
        answer: 'Je m’adapte. Je peux par exemple vous livrer des prototypes codés, prêts à être intégrés quand votre équipe sera disponible.',
      },
      {
        question: 'Vous codez avec l’IA : et la confidentialité ?',
        answer: 'Je signe un NDA si vous le souhaitez, et je n’ai accès qu’au repo et aux outils nécessaires à la mission.',
      },
      {
        question: 'Dans quels outils vous travaillez ?',
        answer: 'Les vôtres : Jira, ClickUp ou Asana pour les tickets, GitHub pour le code. Et de mon côté, Claude Code pour concevoir et coder plus vite.',
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
        question: 'Et après les 2 mois ?',
        answer: 'Au bout de 2 mois, vos parcours clés sont repensés et livrés dans votre code, et votre design system a ses bases. Ensuite, on continue au mois, sans nouvel engagement. Pour arrêter, prévenez-moi un mois à l’avance : ce dernier mois reste travaillé et facturé normalement, puis la mission s’arrête.',
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
    sub: "Your product has customers. It's missing a designer. I redesign your key user journeys and ship them straight into your code. Former Lead Design System at Waalaxy.",
    ctaTalk: 'Book a call',
    ctaProjects: 'View my work',
    stepsLabel: 'How I deliver',
    stepsIntro: 'No mockup to rebuild: every journey lands in your code, reviewed by your team.',
    entry: 'To start: the Diagnostic, 1\u00a0week, €890 deducted from your 1st month',
    entryCta: 'See pricing',
  },
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
      { icon: 'ticket', title: 'I design and prototype', detail: 'from a Jira, ClickUp or Asana ticket' },
      { icon: 'pullRequest', title: 'I open a pull request', detail: 'straight on your GitHub' },
      { icon: 'review', title: 'Your dev reviews every PR', detail: 'and approves it before it goes live' },
    ],
    diagnostic: {
      name: 'Diagnostic',
      tagline: 'to know where to start',
      description:
        'In 1 week: your most critical screen redesigned and prototyped in code, based on an audit of your main user journey and your priorities ranked.',
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
        listLabel: 'In 2 months:',
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
    billing: "Billed at the start of each month. 2-month commitment, then month to month with one month's notice.",
    vat: 'VAT not applicable, art. 293 B of the French Tax Code',
    optionsLabel: 'Add-ons',
    options: [
      { icon: 'sparkles', name: 'Design rules for your AI tools', price: '€900', includedIn: 'included in Partner' },
      { icon: 'layout', name: 'Landing page, designed and coded', price: 'from €890', includedIn: '' },
      { icon: 'chart', name: 'Measurement plan', price: '€450', includedIn: 'included in Partner' },
      { icon: 'route', name: 'Extra user journey audit', price: '€225', includedIn: '' },
    ],
    faqLabel: 'FAQ',
    faq: [
      {
        question: 'How is this different from a freelance designer?',
        answer: 'Most designers hand over mockups your team then has to rebuild in code. I ship straight into your code, as a pull request.',
      },
      {
        question: 'Isn’t it risky to have a designer in our code?',
        answer: 'Every change goes through a pull request your dev reviews on GitHub. Nothing goes live without their approval.',
      },
      {
        question: 'Which stack do you work on?',
        answer: 'Your web front end, whatever the framework: React, Next.js, Vue or something else. I adapt to your existing code.',
      },
      {
        question: 'Do you also deliver Figma mockups?',
        answer: 'If you need them. I use Figma to explore, but the final deliverable is the code.',
      },
      {
        question: 'What if our dev has no time to review?',
        answer: 'I adapt. For example, I can deliver coded prototypes, ready to integrate when your team is available.',
      },
      {
        question: 'You code with AI: what about confidentiality?',
        answer: 'I sign an NDA if you want one, and I only access the repo and the tools the work needs.',
      },
      {
        question: 'Which tools do you work in?',
        answer: 'Yours: Jira, ClickUp or Asana for tickets, GitHub for code. And on my side, Claude Code to design and build faster.',
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
        question: 'What happens after 2 months?',
        answer: 'After 2 months, your key user journeys are redesigned and shipped in your code, and your design system has its foundations. Then we keep going month to month, with no new commitment. To stop, give me one month’s notice: that last month is worked and billed as usual, then the engagement ends.',
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
