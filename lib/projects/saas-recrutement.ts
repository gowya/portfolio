// SaaS recrutement (Recruitment SaaS)
import type { LocalizedProject } from '../types'

export const saasRecrutement: LocalizedProject = {
  fr: {
    id: '7',
    slug: 'saas-recrutement',
    title: 'Marketplace de recrutement : deux personas, un produit',
    tagline: "Deux types d'utilisateurs, une seule cohérence de produit",
    description:
      "Conception d'une marketplace qui met en relation chasseurs de têtes et candidats : UX à double entrée, onboarding distinct pour chaque profil, logique de matching et interfaces adaptées.",
    coverImage: '/projects/saas-recrutement.png',
    tags: ['Freelance'],
    caseStudyUrl: null,
    featured: false,
    role: 'Product Designer',
    company: 'Kilpailutapalkkasi.fi',
    period: '2022',
    status: 'Livré',
    metrics: [
      { value: '2', label: "types d'utilisateurs distincts" },
      { value: '3 sem.', label: 'de conception end-to-end' },
    ],
    intro:
      "Kilpailutapalkkasi.fi est une application web finlandaise de type marketplace à double entrée : d'un côté des chasseurs de têtes qui proposent des opportunités sur mesure, de l'autre des candidats qui connaissent leur valeur et cherchent à aller plus loin. Le défi UX principal : concevoir une expérience cohérente pour deux types d'utilisateurs aux besoins opposés, sans créer deux produits distincts.",
    sections: [
      {
        title: 'Le défi de la double entrée',
        blocks: [
          {
            type: 'p',
            text: "Les marketplaces à double entrée posent un problème fondamental de conception : l'offre et la demande ont des modèles mentaux différents. Un chasseur de têtes pense en termes de profils à trouver et d'opportunités à proposer. Un candidat pense en termes d'offres à évaluer et de valeur à mettre en avant. Si on leur montre la même interface, aucun des deux n'est bien servi.",
          },
          {
            type: 'list',
            items: [
              "Cartographie des deux parcours utilisateurs en parallèle, pour identifier les points de contact partagés vs les surfaces spécifiques à chaque rôle",
              "Onboarding bifurqué : dès le premier écran, l'utilisateur choisit son rôle et entre dans un parcours d'inscription adapté à ses besoins spécifiques",
              "Dashboard distinct par rôle : le chasseur de têtes voit ses recherches actives et candidats en cours de traitement ; le candidat voit ses candidatures et les offres recommandées",
            ],
          },
        ],
      },
      {
        title: 'Conception des interfaces',
        blocks: [
          {
            type: 'p',
            text: "Le parti pris visuel : une charte graphique commune (couleurs, typographie, composants) appliquée à des layouts différents selon le rôle. La cohérence visuelle donne l'impression d'un seul produit ; la différenciation des layouts respecte les besoins réels de chaque utilisateur.",
          },
          {
            type: 'img',
            src: '/projects/saas-recrutement/image.png',
            caption: "Interface principale de la marketplace, vue candidat",
          },
          {
            type: 'p',
            text: "La fonctionnalité centrale, le matching, devait être transparente pour les deux parties. J'ai conçu un système de tags de compétences partagé, visible des deux côtés, pour que les critères de matching soient compréhensibles et éditables par chacun.",
          },
        ],
      },
      {
        title: 'Contraintes et arbitrages',
        blocks: [
          {
            type: 'callout',
            text: "Une contrainte forte : le projet s'est déroulé sur 3 semaines. Il a fallu prioriser vite : définir les écrans critiques (onboarding, profil, matching, messagerie) et accepter de différer les fonctionnalités secondaires pour une V2.",
          },
          {
            type: 'p',
            text: "La messagerie intégrée était le point de rencontre des deux rôles : le seul endroit où les deux types d'utilisateurs interagissent directement. Elle devait être simple, sans ambiguïté sur qui a initié la conversation et pourquoi. Un contexte de mise en relation visible dans chaque conversation : l'offre ou le profil qui a déclenché le premier contact.",
          },
        ],
      },
    ],
    learnings:
      "Les marketplaces à double entrée sont parmi les exercices les plus exigeants en product design, parce qu'une mauvaise décision côté offre impacte immédiatement le côté demande, et vice versa. Ce projet m'a appris à cartographier les tensions avant de concevoir, et à trouver des patterns qui résolvent les deux sides en même temps plutôt que de compromettre l'un pour l'autre.",
  },

  en: {
    id: '7',
    slug: 'saas-recrutement',
    title: 'Recruitment marketplace: two personas, one product',
    tagline: 'Two kinds of users, one coherent product',
    description:
      'Designing a marketplace connecting headhunters and candidates: two-sided UX, a distinct onboarding for each profile, matching logic and tailored interfaces.',
    coverImage: '/projects/saas-recrutement.png',
    tags: ['Freelance'],
    caseStudyUrl: null,
    featured: false,
    role: 'Product Designer',
    company: 'Kilpailutapalkkasi.fi',
    period: '2022',
    status: 'Delivered',
    metrics: [
      { value: '2', label: 'distinct user types' },
      { value: '3 wks', label: 'of end-to-end design' },
    ],
    intro:
      'Kilpailutapalkkasi.fi is a Finnish two-sided marketplace web app: on one side, headhunters offering tailor-made opportunities; on the other, candidates who know their worth and want to go further. The main UX challenge: design a coherent experience for two user types with opposite needs, without building two separate products.',
    sections: [
      {
        title: 'The two-sided challenge',
        blocks: [
          {
            type: 'p',
            text: 'Two-sided marketplaces pose a fundamental design problem: supply and demand have different mental models. A headhunter thinks in terms of profiles to find and opportunities to offer. A candidate thinks in terms of offers to weigh up and value to put forward. Show them the same interface, and neither is well served.',
          },
          {
            type: 'list',
            items: [
              'Mapping the two user journeys in parallel, to identify the shared touchpoints vs the surfaces specific to each role',
              'A forked onboarding: from the very first screen, the user picks their role and enters a sign-up flow tailored to their specific needs',
              'A distinct dashboard per role: the headhunter sees their active searches and candidates in progress; the candidate sees their applications and recommended offers',
            ],
          },
        ],
      },
      {
        title: 'Designing the interfaces',
        blocks: [
          {
            type: 'p',
            text: "The visual approach: a shared style (colours, typography, components) applied to different layouts depending on the role. The visual consistency gives the impression of a single product; the differentiated layouts respect each user's real needs.",
          },
          {
            type: 'img',
            src: '/projects/saas-recrutement/image.png',
            caption: "The marketplace's main interface, candidate view",
          },
          {
            type: 'p',
            text: 'The core feature, matching, had to be transparent for both sides. I designed a shared skill-tag system, visible to both, so the matching criteria are understandable and editable by everyone.',
          },
        ],
      },
      {
        title: 'Constraints and trade-offs',
        blocks: [
          {
            type: 'callout',
            text: 'A strong constraint: the project ran over three weeks. We had to prioritise fast: define the critical screens (onboarding, profile, matching, messaging) and accept deferring secondary features to a V2.',
          },
          {
            type: 'p',
            text: 'The built-in messaging was where the two roles meet: the only place the two user types interact directly. It had to be simple, with no ambiguity about who started the conversation and why. A connection context visible in every conversation: the offer or profile that triggered the first contact.',
          },
        ],
      },
    ],
    learnings:
      'Two-sided marketplaces are among the most demanding exercises in product design, because a bad decision on the supply side immediately hits the demand side, and vice versa. This project taught me to map the tensions before designing, and to find patterns that solve both sides at once rather than compromising one for the other.',
  },
}
