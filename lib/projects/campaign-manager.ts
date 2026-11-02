// Refacto Campaign Manager (Campaign Manager refactor)
import type { LocalizedProject } from '../types'

export const campaignManager: LocalizedProject = {
  fr: {
    id: '5',
    slug: 'campaign-manager',
    title: 'Campaign Manager : des cards à une vue de pilotage',
    tagline: "Des cards illisibles à une liste de pilotage",
    description:
      "Refonte de la page centrale de Waalaxy : d'une grille de cards à une vue liste avec métriques en temps réel. Basée sur des interviews d'utilisateurs churners et un opportunity tree.",
    coverImage: '/projects/campaign-manager.png',
    tags: ['Discovery'],
    caseStudyUrl: null,
    featured: false,
    role: 'Product Designer & Lead Design System',
    company: 'Waalaxy',
    period: 'Avr. → Mai 2026',
    status: 'Handoff dev en mai 2026',
    team: '1 PM · 2 devs · 1 designer',
    metrics: [
      { value: '3', label: "signaux convergents vers le problème" },
      { value: '5+', label: 'versions avant la version finale' },
      { value: '→ Liste', label: 'passage de la grille de cards' },
    ],
    intro:
      "Le Campaign Manager est la page centrale de Waalaxy, la première que l'utilisateur voit quand il ouvre l'app. Et c'était l'une des pages les plus problématiques du produit. Les cards avaient des avatars colorés, un nom tronqué, et c'est tout. Pas de stats, pas de hiérarchie, pas d'action possible sans ouvrir chaque campagne une par une.",
    sections: [
      {
        title: 'Recherche : entendre les utilisateurs',
        blocks: [
          {
            type: 'p',
            text: "On voulait comprendre un retour récurrent : \"Je n'ai pas de résultats avec votre outil\". J'ai mis en place notre process de recherche formalisé sur Notion : kanban du process, gestion des participants (recrutement, statut Booked/Interviewed/Cancelled), guides d'entretien, synthèse des insights.",
          },
          {
            type: 'grid',
            images: [
              {
                src: '/projects/campaign-manager/Capture_decran_2026-05-13_a_16.51.03.png',
                caption: 'Gestion des participants centralisée dans Notion',
              },
              {
                src: '/projects/campaign-manager/Capture_decran_2026-05-13_a_16.53.38.png',
                caption: "Guide d'entretien précis et non biaisé",
              },
            ],
          },
          {
            type: 'h3',
            text: "Ce qu'on a appris",
          },
          {
            type: 'list',
            items: [
              "Les users qui ont plus de 5 campagnes ne voient plus leurs noms : les cards ont une largeur fixe, les noms longs sont tronqués. Certains avaient adapté leur façon de nommer pour contourner.",
              "Aucune stat visible depuis cette vue. Pour savoir comment performe une campagne, il faut l'ouvrir. Les users ouvrent tout, comparent de tête, reviennent en arrière.",
              "La distinction entre campagnes actives, en pause et en brouillon n'est pas lisible d'un coup d'œil : tout a le même poids visuel.",
            ],
          },
          {
            type: 'img',
            src: '/projects/campaign-manager/Capture_decran_2026-05-13_a_17.31.08.png',
            caption: "Opportunity tree : de l'insight à la solution",
          },
        ],
      },
      {
        title: 'La décision structurelle : cards → liste',
        blocks: [
          {
            type: 'grid',
            images: [
              {
                src: '/projects/campaign-manager/Capture_decran_2026-05-13_a_17.13.50.png',
                caption: 'Avant : grille de cards sans métriques',
              },
              {
                src: '/projects/campaign-manager/image.png',
                caption: 'V1 : passage en liste avec métriques',
              },
            ],
          },
          {
            type: 'h3',
            text: "La tension \"playful\"",
          },
          {
            type: 'p',
            text: "La vue en prod avait des avatars circulaires colorés sur chaque card. Fonctionnellement inutiles, mais pour un utilisateur qui n'a jamais utilisé d'outil d'automation, ils rendaient la page vivante. Le feedback du PM : \"c'est moins playful qu'avant, j'en veux plus\".",
          },
          {
            type: 'callout',
            text: "Ce débat a forcé une question plus précise : qu'est-ce que \"playful\" veut dire fonctionnellement pour notre utilisateur ? Réponse : concevoir pour quelqu'un qui a besoin de se sentir à l'aise avec ses données. Les éléments identitaires sont restés, réintégrés dans une structure qui, elle, permettait de piloter.",
          },
        ],
      },
      {
        title: "L'évolution des versions",
        blocks: [
          {
            type: 'p',
            text: "Une version intermédiaire a mis en avant les next steps pour chaque campagne : colonne \"Actions à faire\" avec CTA ouvrant un side panel. Le side panel proposait des actions contextuelles selon l'état de la campagne.",
          },
          {
            type: 'grid',
            images: [
              {
                src: '/projects/campaign-manager/image-1.png',
                caption: 'Version avec side panel actions',
              },
              {
                src: '/projects/campaign-manager/Capture_decran_2026-05-13_a_17.39.13.png',
                caption: 'Side panel contextuel',
              },
            ],
          },
          {
            type: 'p',
            text: "Cette orientation a été challengée : risque de transformer une page de pilotage en page de to-do, et de générer une surutilisation de certaines fonctionnalités coûteuses. On a recentré sur une conviction claire : le Campaign Manager sert à comparer et à lire les résultats. Les actions vivent ailleurs.",
          },
        ],
      },
      {
        title: 'La version finale',
        blocks: [
          {
            type: 'list',
            items: [
              "La colonne \"Actions in queue\" est l'indicateur central : avancement des prospects dans la séquence, avec cercle de progression et statut texte.",
              "Les actions classiques (pause/play, dupliquer, archiver) restent dans le menu \"...\" en fin de ligne : présentes, sans entrer en compétition avec la lecture des données.",
              "Le CTA \"Review\" a été retiré de cette vue et repositionné dans le détail de chaque campagne, là où son contexte est immédiatement compréhensible.",
              "Une checkbox par ligne permet les bulk actions sans surcharger l'interface.",
              "L'état vide est designé à part entière : modèles de séquences proposés directement dans la page.",
            ],
          },
          {
            type: 'img',
            src: '/projects/campaign-manager/image-6.png',
            caption: 'Screen final validé : vue avec et sans campagnes',
          },
          {
            type: 'h3',
            text: 'Contribution Design System',
          },
          {
            type: 'p',
            text: "Le passage en vue tableau nécessitait d'adapter le circular progress dans une nouvelle taille avec des states non documentés. Audit et adaptation des composants existants, revue ISO Figma/Storybook, documentation des nouveaux patterns.",
          },
          {
            type: 'grid',
            images: [
              {
                src: '/projects/campaign-manager/Capture_decran_2026-05-13_a_17.57.21.png',
                caption: 'Documentation Storybook circular progress',
              },
              {
                src: '/projects/campaign-manager/Capture_decran_2026-05-13_a_17.48.06.png',
                caption: 'Revue ISO Figma / Storybook',
              },
            ],
          },
        ],
      },
    ],
    learnings:
      "Ce projet m'a confirmé que les allers-retours sont des apprentissages documentés. La version avec le side panel était une bonne réponse à une vraie question. On l'a mise de côté parce qu'elle répondait à un problème différent de celui de cette page. Savoir ce qu'une page n'est pas censée faire est aussi important que savoir ce qu'elle doit faire. La tension \"playful\" m'a aussi appris quelque chose : quand un feedback est flou, il faut le décomposer avant de répondre. \"Moins playful\" était en réalité \"moins rassurant pour un utilisateur non-technique face à un tableau de données\". Autre problème, donc autre solution.",
  },

  en: {
    id: '5',
    slug: 'campaign-manager',
    title: 'Campaign Manager: from cards to a control view',
    tagline: 'From unreadable cards to a control-room list',
    description:
      "Redesigning Waalaxy's central page: moving from a grid of cards to a list view with real-time metrics. Based on interviews with churned users and an opportunity tree.",
    coverImage: '/projects/campaign-manager.png',
    tags: ['Discovery'],
    caseStudyUrl: null,
    featured: false,
    role: 'Product Designer & Lead Design System',
    company: 'Waalaxy',
    period: 'Apr → May 2026',
    status: 'Handed off to dev, May 2026',
    team: '1 PM · 2 devs · 1 designer',
    metrics: [
      { value: '3', label: 'signals converging on the problem' },
      { value: '5+', label: 'versions before the final one' },
      { value: '→ List', label: 'moving on from the card grid' },
    ],
    intro:
      'The Campaign Manager is Waalaxy\'s central page, the first thing a user sees when they open the app. And it was one of the most problematic pages in the product. The cards had colourful avatars, a truncated name, and that was it. No stats, no hierarchy, no action possible without opening each campaign one by one.',
    sections: [
      {
        title: 'Research: hearing the users',
        blocks: [
          {
            type: 'p',
            text: 'We wanted to understand a recurring piece of feedback: "I\'m not getting results with your tool." I set up our formalised research process in Notion: a process kanban, participant management (recruiting, Booked/Interviewed/Cancelled status), interview guides, and insight synthesis.',
          },
          {
            type: 'grid',
            images: [
              {
                src: '/projects/campaign-manager/Capture_decran_2026-05-13_a_16.51.03.png',
                caption: 'Participant management centralised in Notion',
              },
              {
                src: '/projects/campaign-manager/Capture_decran_2026-05-13_a_16.53.38.png',
                caption: 'A precise, unbiased interview guide',
              },
            ],
          },
          {
            type: 'h3',
            text: 'What we learned',
          },
          {
            type: 'list',
            items: [
              'Users with more than five campaigns can no longer see their names: the cards have a fixed width and long names get truncated. Some had adapted how they named campaigns to work around it.',
              'No stats visible from this view. To see how a campaign is performing, you have to open it. Users open everything, compare in their heads, and backtrack.',
              "The distinction between active, paused and draft campaigns isn't readable at a glance: everything has the same visual weight.",
            ],
          },
          {
            type: 'img',
            src: '/projects/campaign-manager/Capture_decran_2026-05-13_a_17.31.08.png',
            caption: 'Opportunity tree: from insight to solution',
          },
        ],
      },
      {
        title: 'The structural decision: cards → list',
        blocks: [
          {
            type: 'grid',
            images: [
              {
                src: '/projects/campaign-manager/Capture_decran_2026-05-13_a_17.13.50.png',
                caption: 'Before: a grid of cards with no metrics',
              },
              {
                src: '/projects/campaign-manager/image.png',
                caption: 'V1: moving to a list with metrics',
              },
            ],
          },
          {
            type: 'h3',
            text: 'The "playful" tension',
          },
          {
            type: 'p',
            text: 'The production view had colourful circular avatars on every card. Functionally useless, but for a user who\'s never used an automation tool, they made the page feel alive. The PM\'s feedback: "it\'s less playful than before, I want more of that."',
          },
          {
            type: 'callout',
            text: 'That debate forced a sharper question: what does "playful" mean, functionally, for our user? Answer: designing for someone who needs to feel comfortable with their data. The identity elements stayed, reintegrated into a structure that actually let people steer.',
          },
        ],
      },
      {
        title: 'How the versions evolved',
        blocks: [
          {
            type: 'p',
            text: 'An intermediate version put the next steps front and centre for each campaign: an "Actions to take" column with a CTA that opened a side panel. The side panel offered contextual actions based on the campaign\'s state.',
          },
          {
            type: 'grid',
            images: [
              {
                src: '/projects/campaign-manager/image-1.png',
                caption: 'Version with the actions side panel',
              },
              {
                src: '/projects/campaign-manager/Capture_decran_2026-05-13_a_17.39.13.png',
                caption: 'Contextual side panel',
              },
            ],
          },
          {
            type: 'p',
            text: 'This direction was challenged: it risked turning a control page into a to-do page, and driving over-use of certain costly features. We refocused on a clear conviction: the Campaign Manager is for comparing and reading results. Actions live elsewhere.',
          },
        ],
      },
      {
        title: 'The final version',
        blocks: [
          {
            type: 'list',
            items: [
              'The "Actions in queue" column is the central indicator: prospects\' progress through the sequence, with a progress circle and a text status.',
              'The standard actions (pause/play, duplicate, archive) stay in the "..." menu at the end of the row: present, without competing with reading the data.',
              'The "Review" CTA was removed from this view and moved into each campaign\'s detail, where its context is immediately clear.',
              'A checkbox per row enables bulk actions without overloading the interface.',
              'The empty state is designed as a first-class screen: sequence templates offered right on the page.',
            ],
          },
          {
            type: 'img',
            src: '/projects/campaign-manager/image-6.png',
            caption: 'Final approved screen: views with and without campaigns',
          },
          {
            type: 'h3',
            text: 'Design System contribution',
          },
          {
            type: 'p',
            text: 'Moving to a table view meant adapting the circular progress to a new size with undocumented states. Auditing and adapting the existing components, an ISO Figma/Storybook review, and documenting the new patterns.',
          },
          {
            type: 'grid',
            images: [
              {
                src: '/projects/campaign-manager/Capture_decran_2026-05-13_a_17.57.21.png',
                caption: 'Storybook documentation for the circular progress',
              },
              {
                src: '/projects/campaign-manager/Capture_decran_2026-05-13_a_17.48.06.png',
                caption: 'ISO Figma / Storybook review',
              },
            ],
          },
        ],
      },
    ],
    learnings:
      'This project confirmed that back-and-forth is documented learning. The side-panel version was a good answer to a real question. We set it aside because it answered a different problem from this page\'s. Knowing what a page isn\'t meant to do is as important as knowing what it should do. The "playful" tension taught me something too: when feedback is vague, you have to break it down before responding. "Less playful" actually meant "less reassuring for a non-technical user facing a table of data." A different problem, so a different solution.',
  },
}
