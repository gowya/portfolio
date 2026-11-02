import type { AboutContent, Lang } from './types'

const ABOUT_FR: AboutContent = {
  bio: "Product Designer, 6 ans en SaaS B2B, dont 3,5 chez Waalaxy où j'ai construit le design system WAATOM de zéro. Depuis mai 2026, je conçois et je code en freelance, avec l'IA branchée sur mes design systems.\n\nMon point d'entrée c'est toujours l'utilisateur : ce qu'il fait, ce qu'il évite, ce qu'il ne sait pas encore formuler. C'est là que se cachent les décisions qui font bouger les chiffres.\n\nPoppy, lui, a gardé son badge du bureau et réclame toujours son accès Figma.",
  experiences: [
    {
      id: 'e0',
      company: 'Freelance · Montpellier & remote',
      role: 'Product Designer & AI Builder',
      period: 'Mai 2026 → aujourd\'hui',
      description:
        "Conception et développement de produits numériques pour des startups et des TPE, de la recherche utilisateur à la mise en ligne. Vela, un SaaS de gestion de patientèle pour psys et coachs, conçu et codé en solo. Un design system branché sur Claude Code via MCP : le front généré respecte tokens et composants sans correction à la main.",
    },
    {
      id: 'e1',
      company: 'Waalaxy · CDI · Montpellier',
      role: 'Lead Design System',
      period: 'Nov. 2023 → Juil. 2026',
      description:
        "Construction, maintien et gouvernance du design system WAATOM, de zéro. Roadmap, management des devs front DS, bibliothèque de composants ISO Figma/Storybook, documentation, et accompagnement des équipes jusqu'à l'adoption.",
    },
    {
      id: 'e2',
      company: 'Waalaxy · CDI · Montpellier',
      role: 'Product Designer',
      period: 'Fév. 2023 → Juil. 2026',
      description:
        "Recherche utilisateur, conception d'expériences pour des centaines de milliers d'utilisateurs, définition et priorisation des parcours clés de l'app, prototypes pour tester vite des idées de parcours.",
    },
    {
      id: 'e3',
      company: 'Gowya Studio · Freelance · Paris',
      role: 'Product & Brand Designer',
      period: 'Avr. 2022 → Juin 2023',
      description:
        "Identités de marque, UX research et landing pages pour des petits commerces et des restaurants. Maquettes d'apps et de SaaS, relation client de A à Z. Quelques missions ponctuelles ensuite, jusqu'en 2024.",
    },
    {
      id: 'e4',
      company: 'SOS Accessoire · Alternance · Versailles',
      role: 'UX/UI Designer',
      period: 'Août 2020 → Sept. 2022',
      description:
        "Seule designer de la boîte. Refonte des 2 sites de marque jusqu'à l'intégration, première bibliothèque de composants pour uniformiser les interfaces, propositions présentées au CODIR.",
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
      degree: 'Master 2 Direction Artistique Digitale · 17,5/20',
      year: '2022',
    },
    {
      id: 'f4',
      school: 'Sup de Pub · Paris',
      degree: 'Bachelor Communication Digitale & Création',
      year: '2020',
    },
  ],
}

const ABOUT_EN: AboutContent = {
  bio: "Product Designer, 6 years in B2B SaaS, including 3.5 at Waalaxy where I built the WAATOM design system from scratch. Since May 2026, I design and code as a freelancer, with AI plugged straight into my design systems.\n\nI always start with the user: what they do, what they avoid, what they can't quite put into words yet. That's where the decisions that move the numbers are hiding.\n\nPoppy, my dog, kept his office badge and still insists on his own Figma seat.",
  experiences: [
    {
      id: 'e0',
      company: 'Freelance · Montpellier & remote',
      role: 'Product Designer & AI Builder',
      period: 'May 2026 → present',
      description:
        "Designing and building digital products for startups and small businesses, from user research to launch. Vela, a practice management SaaS for psychologists and coaches, designed and coded solo. A design system plugged into Claude Code through MCP: generated front-end code respects tokens and components with no manual fixing.",
    },
    {
      id: 'e1',
      company: 'Waalaxy · Full-time · Montpellier',
      role: 'Lead Design System',
      period: 'Nov 2023 → Jul 2026',
      description:
        "Built, maintained and governed the WAATOM design system from scratch. Roadmap, managing the front-end DS developers, a Figma/Storybook component library kept in sync, documentation, and supporting teams all the way to adoption.",
    },
    {
      id: 'e2',
      company: 'Waalaxy · Full-time · Montpellier',
      role: 'Product Designer',
      period: 'Feb 2023 → Jul 2026',
      description:
        "User research, designing experiences for hundreds of thousands of users, defining and prioritising the app's key flows, prototypes to test journey ideas fast.",
    },
    {
      id: 'e3',
      company: 'Gowya Studio · Freelance · Paris',
      role: 'Product & Brand Designer',
      period: 'Apr 2022 → Jun 2023',
      description:
        "Brand identities, UX research and landing pages for small businesses and restaurants. App and SaaS mockups, client relationship from start to finish. A few one-off projects after that, through 2024.",
    },
    {
      id: 'e4',
      company: 'SOS Accessoire · Apprenticeship · Versailles',
      role: 'UX/UI Designer',
      period: 'Aug 2020 → Sept 2022',
      description:
        "Sole designer in the company. Redesigned both brand websites through to integration, built the first component library to unify the interfaces, presented proposals to the executive committee.",
    },
  ],
  formations: [
    {
      id: 'f1',
      school: 'Notion Academy',
      degree: 'Advanced Certification · Workflows Path · Essential',
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
      degree: 'MA in Digital Art Direction · 17.5/20',
      year: '2022',
    },
    {
      id: 'f4',
      school: 'Sup de Pub · Paris',
      degree: 'BA in Digital Communication & Creative',
      year: '2020',
    },
  ],
}

export const ABOUT: Record<Lang, AboutContent> = {
  fr: ABOUT_FR,
  en: ABOUT_EN,
}
