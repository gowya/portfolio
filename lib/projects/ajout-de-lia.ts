// Ajout de l'IA (Adding AI)
import type { LocalizedProject } from '../types'

export const ajoutDeLia: LocalizedProject = {
  fr: {
    id: '4',
    slug: 'ajout-de-lia',
    title: 'Réécriture IA des messages de prospection',
    tagline: "Corriger la forme des messages de prospection grâce à l'IA, sans toucher au fond",
    description:
      "Les utilisateurs débutants de Waalaxy savent quoi dire. Ce qui coince, c'est la formulation. Intégration de boutons d'amélioration IA dans les zones de rédaction : le message est réécrit selon les bonnes pratiques, l'utilisateur garde le contrôle du résultat.",
    coverImage: '/projects/ajout-ia.png',
    tags: ['IA', 'Discovery'],
    caseStudyUrl: null,
    featured: false,
    role: 'Product Designer & Lead Design System',
    company: 'Waalaxy',
    period: 'Janv. → Mai 2026',
    status: 'Maquettes et prototype remis en mai 2026, mise en prod non confirmée',
    metrics: [
      { value: '4% à 7%', label: "taux de réponse moyen d'une campagne de prospection" },
      { value: '15% à 20%', label: "l'objectif visé (×3), pas un résultat mesuré" },
      { value: '3', label: "surfaces couvertes : message, note d'invitation, email" },
      { value: 'Keep / Retry / Cancel', label: "contrôle total sur le résultat IA" },
    ],
    intro:
      "En analysant 64 millions de campagnes LinkedIn sur la base Waalaxy, nous avons pu identifier les patterns rédactionnels qui impactent les taux de réponse : le top 1% des utilisateurs atteint 47,4% de réponses, contre 5% en moyenne selon les personas.",
    sections: [
      {
        title: "Le vrai problème se cache dans la forme",
        blocks: [
          {
            type: 'p',
            text: "Waalaxy est positionné comme l'outil de prospection le plus simple du marché. 75% des utilisateurs n'ont jamais utilisé ce type d'outil. Résultat : des taux de réponse plombés par des erreurs de forme basiques (messages trop longs, ton trop commercial, aucune personnalisation visible). Les idées, elles, sont là.",
          },
          {
            type: 'callout',
            text: "User story : en tant qu'utilisateur débutant, je veux itérer sur mon message de prospection en suivant les meilleures pratiques Waalaxy. L'objectif feature : augmenter les taux de réponse aux invitations, emails et messages en éliminant les erreurs de forme, tout en laissant à l'utilisateur la maîtrise du fond.",
          },
          {
            type: 'list',
            items: [
              "Analyse Waalaxy : corrélation entre le peu d'expérience en prospection et le taux de réponse faible",
              "Analyse Mixpanel : corrélation entre messages trop longs / trop formels et taux de réponse faibles",
              "Positionnement produit : Waalaxy recommande des bonnes pratiques dans sa documentation, l'IA doit les incarner pour les rendre accessibles à tous les utilisateurs, débutants compris.",
            ],
          },
        ],
      },
      {
        title: "Une intégration directe dans les zones de rédaction",
        blocks: [
          {
            type: 'p',
            text: "Le principe : des boutons d'action accessibles directement depuis les zones de saisie (message LinkedIn, invitation, email). L'utilisateur n'a pas à quitter son workflow. Il sélectionne une option d'amélioration, le contenu est envoyé à GPT pour être réécrit selon les bonnes pratiques correspondantes, et une prévisualisation s'affiche.",
          },
          {
            type: 'img',
            src: '/projects/ajout-de-lia/Enregistrement_de_lecran_2026-01-22_a_17.49.41.gif',
            caption: "Feature IA : réécriture de message avec prévisualisation du résultat",
          },
          {
            type: 'p',
            text: "La prévisualisation propose trois actions : Garder (le message réécrit remplace le contenu original), Réessayer (une nouvelle version est générée), ou Annuler (rien ne change). Le message original n'est jamais écrasé sans action explicite de l'utilisateur.",
          },
          {
            type: 'grid',
            images: [
              {
                src: '/projects/ajout-de-lia/image.png',
                caption: "Boutons d'amélioration IA dans la zone de rédaction",
              },
              {
                src: '/projects/ajout-de-lia/image-1.png',
                caption: "Prévisualisation du résultat avec actions Keep / Retry / Cancel",
              },
            ],
          },
        ],
      },
      {
        title: "Design System : les composants de la boucle IA",
        blocks: [
          {
            type: 'p',
            text: "Cette feature a nécessité de créer de nouveaux patterns dans le DS : le composant de prévisualisation IA avec ses trois états (loading, result, error), les boutons d'action contextuels dans les zones de saisie, et les micro-interactions de transition entre l'état original et le résultat généré.",
          },
          {
            type: 'img',
            src: '/projects/ajout-de-lia/image-2.png',
            caption: "Composants DS pour la boucle d'amélioration IA",
          },
          {
            type: 'p',
            text: "Ces patterns ont été documentés dans Storybook pour être réutilisables sur les prochaines features IA du produit : le principe keep/retry/cancel s'applique à n'importe quelle génération de contenu, quelle que soit la surface.",
          },
        ],
      },
    ],
    learnings:
      "Ce projet m'a appris à distinguer deux types d'assistance IA : celle qui écrit à la place de l'utilisateur, et celle qui améliore ce que l'utilisateur a commencé. La deuxième crée beaucoup moins de résistance. Le flow keep/retry/cancel, c'est ce qui fait que l'utilisateur reste l'auteur de son message. Sans ce contrôle explicite, l'IA devient une boîte noire. Avec lui, elle devient un outil.",
  },

  en: {
    id: '4',
    slug: 'ajout-de-lia',
    title: 'AI rewriting for outreach messages',
    tagline: 'Using AI to fix the form of outreach messages, without touching the substance',
    description:
      "Beginner Waalaxy users know what to say. What trips them up is the phrasing. Adding AI-improvement buttons inside the writing areas: the message is rewritten following best practices, and the user stays in control of the result.",
    coverImage: '/projects/ajout-ia.png',
    tags: ['AI', 'Discovery'],
    caseStudyUrl: null,
    featured: false,
    role: 'Product Designer & Lead Design System',
    company: 'Waalaxy',
    period: 'Jan → May 2026',
    status: 'Designs and prototype handed over, May 2026; release not confirmed',
    metrics: [
      { value: '4% to 7%', label: 'average reply rate for an outreach campaign' },
      { value: '15% to 20%', label: 'the target (3×), not a measured result' },
      { value: '3', label: 'surfaces covered: message, invitation note, email' },
      { value: 'Keep / Retry / Cancel', label: 'full control over the AI result' },
    ],
    intro:
      'By analysing 64 million LinkedIn campaigns across the Waalaxy base, we identified the writing patterns that drive reply rates: the top 1% of users reach 47.4% replies, versus 5% on average depending on the persona.',
    sections: [
      {
        title: 'The real problem hides in the form',
        blocks: [
          {
            type: 'p',
            text: 'Waalaxy is positioned as the simplest outreach tool on the market. 75% of users have never used a tool like this. The result: reply rates dragged down by basic form mistakes (messages too long, too salesy a tone, no visible personalisation). The ideas are there.',
          },
          {
            type: 'callout',
            text: 'User story: as a beginner, I want to iterate on my outreach message following Waalaxy\'s best practices. The feature goal: raise reply rates on invitations, emails and messages by removing form mistakes, while leaving the user in control of the substance.',
          },
          {
            type: 'list',
            items: [
              'Waalaxy analysis: correlation between little outreach experience and low reply rates',
              'Mixpanel analysis: correlation between messages that are too long / too formal and low reply rates',
              'Product positioning: Waalaxy recommends best practices in its documentation; the AI has to embody them to make them accessible to every user, beginners included.',
            ],
          },
        ],
      },
      {
        title: 'A direct integration into the writing areas',
        blocks: [
          {
            type: 'p',
            text: 'The principle: action buttons available right inside the input areas (LinkedIn message, invitation, email). The user never has to leave their workflow. They pick an improvement option, the content is sent to GPT to be rewritten according to the matching best practices, and a preview appears.',
          },
          {
            type: 'img',
            src: '/projects/ajout-de-lia/Enregistrement_de_lecran_2026-01-22_a_17.49.41.gif',
            caption: 'AI feature: message rewrite with a preview of the result',
          },
          {
            type: 'p',
            text: 'The preview offers three actions: Keep (the rewritten message replaces the original), Retry (a new version is generated), or Cancel (nothing changes). The original message is never overwritten without an explicit action from the user.',
          },
          {
            type: 'grid',
            images: [
              {
                src: '/projects/ajout-de-lia/image.png',
                caption: 'AI-improvement buttons in the writing area',
              },
              {
                src: '/projects/ajout-de-lia/image-1.png',
                caption: 'Result preview with Keep / Retry / Cancel actions',
              },
            ],
          },
        ],
      },
      {
        title: 'Design System: the components of the AI loop',
        blocks: [
          {
            type: 'p',
            text: 'This feature required new patterns in the DS: the AI preview component with its three states (loading, result, error), the contextual action buttons inside the input areas, and the transition micro-interactions between the original state and the generated result.',
          },
          {
            type: 'img',
            src: '/projects/ajout-de-lia/image-2.png',
            caption: 'DS components for the AI-improvement loop',
          },
          {
            type: 'p',
            text: "These patterns were documented in Storybook to be reusable for the product's future AI features: the keep/retry/cancel principle applies to any content generation, on any surface.",
          },
        ],
      },
    ],
    learnings:
      "This project taught me to distinguish two kinds of AI assistance: the kind that writes for the user, and the kind that improves what the user has started. The second creates far less resistance. The keep/retry/cancel flow is what keeps the user the author of their message. Without that explicit control, AI becomes a black box. With it, it becomes a tool.",
  },
}
