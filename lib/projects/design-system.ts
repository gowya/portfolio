// Design System
import type { LocalizedProject } from '../types'

export const designSystem: LocalizedProject = {
  fr: {
    id: '6',
    slug: 'design-system',
    title: 'WAATOM : un design system construit de zéro',
    tagline: "Product Designer & Lead Design System chez Waalaxy. WAATOM, c'est le nom du bébé.",
    description:
      "Construction du design system de Waalaxy depuis zéro : audit complet, fondations en tokens, triangle Main Component/Storybook/documentation, process de contribution et de deprecation. Puis la suite logique : brancher un design system sur Claude via MCP.",
    coverImage: '/projects/design-system.png',
    tags: ['Design System'],
    caseStudyUrl: null,
    featured: false,
    role: 'Lead Design System & Product Designer',
    company: 'Waalaxy',
    period: 'Nov. 2023 → Juil. 2026',
    status: 'Livré en production',
    metrics: [
      { value: '∅', label: 'zéro DS existant au départ' },
      { value: '2024', label: 'formation Design System Expertise' },
      { value: '30 min', label: 'ateliers mensuels avec les devs' },
    ],
    intro:
      "Au début, WAATOM c'était un dossier Figma avec des composants qui se ressemblaient sans jamais être vraiment pareils. Trois boutons \"primary\" avec trois radius différents. Un input qui existait en quatre versions selon qui l'avait fait. Les devs recodaient à chaque fois ce qui existait déjà, juste un peu différemment.",
    sections: [
      {
        title: 'Le point de départ',
        blocks: [
          {
            type: 'p',
            text: "Sans système, chaque designer invente sa propre logique. Et à un moment donné, l'app entière commence à parler plusieurs langues en même temps.",
          },
          {
            type: 'p',
            text: "Mon point d'entrée a toujours été le même : un composant a besoin d'un système derrière lui pour avoir sa place dans le produit. Des tokens partout, des composants pensés pour vivre ensemble. Ça a l'air simple à dire. Ça prend des années à tenir.",
          },
        ],
      },
      {
        title: 'Poser les fondations',
        blocks: [
          {
            type: 'p',
            text: "J'ai commencé par un audit complet. Inventaire de toutes les interfaces, screenshots de chaque variante de chaque pattern (jusqu'à lister toutes les façons de fermer une modale dans l'app, oui, toutes). Un travail de fourmi, mais c'est exactement ce qui révèle où est le vrai chaos.",
          },
          {
            type: 'layers',
            text: "Ensuite, structurer la library en couches : les fondations (couleurs, typo, spacing, radius, tous en variables Figma), les composants core, puis les composants plus spécifiques au métier. Chaque couche a sa raison d'être, chaque token a une seule source de vérité. C'est la base qui permet à tout le reste de tenir debout, même quand la couleur de marque change du jour au lendemain.",
            layers: [
              { name: 'Composants métier', detail: 'propres au produit' },
              { name: 'Composants core', detail: 'boutons, inputs, modales' },
              { name: 'Fondations', detail: 'couleurs, typo, spacing, radius' },
            ],
            caption: "Chaque couche s'appuie sur celle du dessous",
          },
          {
            type: 'img',
            src: '/projects/design-system/image.png',
            caption: 'Le Main Component dans la library : anatomie, props et states',
          },
          {
            type: 'p',
            text: "Un composant WAATOM, c'est trois choses qui doivent rester alignées en permanence : le Main Component dans la library, le code dans Storybook, et la documentation qui explique comment l'utiliser (et comment l'éviter).",
          },
          {
            type: 'img',
            src: '/projects/design-system/image-2.png',
            caption: 'Le code dans Storybook, synchronisé avec Figma',
          },
          {
            type: 'link',
            href: 'https://storybook.waalaxy.com/',
            label: 'Voir le Storybook WAATOM',
          },
          {
            type: 'img',
            src: '/projects/design-system/image-1.png',
            caption: "La documentation qui explique comment utiliser un composant, et comment l'éviter",
          },
          {
            type: 'callout',
            text: "Le jour où l'une des trois traîne derrière les deux autres, le système commence à se désynchroniser. Et un design system désynchronisé, c'est le pire scénario : plus personne ne sait à quoi se fier.",
          },
        ],
      },
      {
        title: 'Faire vivre le process',
        blocks: [
          {
            type: 'p',
            text: "Une bibliothèque de composants, c'est le début. Ce qui la fait tenir sur la durée, c'est le process de contribution derrière. J'ai mis en place des types de contribution (Light, Medium, Heavy) pour que tout le monde sache dans quoi il met les pieds avant de commencer. Des branches Figma nommées [NEW], [MAJ], [FIX], toujours en branche, toujours une seule personne par composant à la fois. Une Definition of Ready avant même de penser à dev, une Definition of Done avant de dire qu'un composant est livrable, avec une vraie checklist qualité derrière : cohérence UI, cohérence des comportements, accessibilité vraiment testée.",
          },
          {
            type: 'img',
            src: '/projects/design-system/contribution-flow.webp',
            caption: "Le circuit de contribution : selon ce qui existe déjà, une demande devient une contribution Light, Medium ou Heavy, puis passe en review DS",
          },
          {
            type: 'img',
            src: '/projects/design-system/Clipboard-20260518-193823-403.gif',
            caption: 'Tuto pour contribuer sur des branches Figma [NEW], [MAJ], [FIX]',
          },
          {
            type: 'p',
            text: "Côté rituels, j'ai posé un cadre volontairement léger : stand-up async tous les deux jours, office hours hebdo pour être dispo en direct, reviews portées par les contributeurs eux-mêmes une fois formés (l'objectif, c'est qu'ils deviennent autonomes, pas que je valide tout à vie), et une rétro trimestrielle pour prendre du recul. Pour canaliser les demandes, une automatisation Slack toute bête : une commande, un emoji, une carte qui se crée toute seule dans le bon board.",
          },
          {
            type: 'p',
            text: "Deprecate un composant, c'est aussi tout un sujet. On vérifie d'abord les occurrences en prod avec les devs, on renomme avec un petit \".\" et [OLD] devant, on ajoute un \"DEPRECATE 💀\" bien visible au publish. Histoire que la disparition d'un composant reste une décision assumée. Personne n'a envie de la découvrir en pleine intégration un vendredi 17h.",
          },
        ],
      },
      {
        title: 'Ce qui a été dur',
        blocks: [
          {
            type: 'p',
            text: "Faire adopter un design system, c'est 20% de Figma et 80% de communication. Convaincre un dev de reprendre le composant existant plutôt que de recoder le sien \"parce que c'est plus rapide comme ça\". Prioriser entre ce qui fait plaisir à designer et ce qui a vraiment un impact business. Accepter qu'un système grandit avec le produit et se réévalue sans arrêt.",
          },
          {
            type: 'p',
            text: "Le plus dur, honnêtement, ça a été d'endosser le rôle de garde-fou. Rappeler qu'un composant a besoin de plus de travail avant de sortir. Défendre la documentation même quand tout le monde est pressé. Tenir la ligne sur les exceptions. Rester la personne vers qui les gens ont envie de venir tout en tenant cette ligne, c'est un équilibre qui m'a pris du temps à trouver.",
          },
        ],
      },
      {
        title: 'Ce que ça a changé',
        blocks: [
          {
            type: 'p',
            text: "WAATOM est devenu un vrai langage commun entre design et dev. Les designers savaient où chercher avant de recréer. Les devs savaient ce qu'ils intégraient avant de commencer. Et moi, je suis passée de \"celle qui fait des boutons\" à garante d'une cohérence qui tient sur des dizaines d'écrans et plusieurs équipes.",
          },
          {
            type: 'p',
            text: "La preuve la plus concrète se trouve dans ClickUp. Quand une carte était renvoyée en recette, on renseignait la raison du retour, et l'une des options était « maquette non respectée ». À mesure que WAATOM s'installait, elle a servi de moins en moins, jusqu'à tomber à zéro. On a fini par la supprimer de la liste.",
          },
          {
            type: 'callout',
            text: "C'est ce travail-là, invisible la plupart du temps, qui garde un produit cohérent sprint après sprint.",
          },
        ],
      },
      {
        title: 'Et après',
        blocks: [
          {
            type: 'p',
            text: "Ce système construit à la main pendant des années, je l'ai poussé plus loin après Waalaxy. Sur Vela, mon SaaS pour psys et coachs, je suis partie direct sur les bonnes bases : tokens propres, un DS pensé dès le premier composant.",
          },
          {
            type: 'p',
            text: "Et j'ai creusé un truc qui m'obsède un peu : brancher mon design system directement sur Claude Code via MCP. Le système devient une contrainte que l'IA respecte nativement quand elle génère du front. Ce portfolio a été livré comme ça. Moins de temps passé à corriger des couleurs hors token ou des espacements approximatifs, plus de temps sur ce qui compte vraiment : les décisions produit.",
          },
        ],
      },
    ],
    learnings:
      "Après des années à faire respecter un système à des humains, la suite logique, c'est de le faire respecter à l'IA aussi.",
  },

  en: {
    id: '6',
    slug: 'design-system',
    title: 'WAATOM: a design system built from zero',
    tagline: "Product Designer & Lead Design System at Waalaxy. WAATOM is the baby's name.",
    description:
      "Building Waalaxy's design system from zero: full audit, token foundations, the Main Component/Storybook/documentation triangle, contribution and deprecation processes. Then the logical next step: plugging a design system into Claude through MCP.",
    coverImage: '/projects/design-system.png',
    tags: ['Design System'],
    caseStudyUrl: null,
    featured: false,
    role: 'Lead Design System & Product Designer',
    company: 'Waalaxy',
    period: 'Nov 2023 → Jul 2026',
    status: 'Shipped to production',
    metrics: [
      { value: '∅', label: 'zero existing DS at the start' },
      { value: '2024', label: 'Design System Expertise training' },
      { value: '30 min', label: 'monthly workshops with the devs' },
    ],
    intro:
      'At the start, WAATOM was a Figma folder full of components that looked alike without ever really matching. Three "primary" buttons with three different radii. An input that existed in four versions depending on who had made it. The devs kept recoding what already existed, just slightly differently.',
    sections: [
      {
        title: 'The starting point',
        blocks: [
          {
            type: 'p',
            text: 'Without a system, every designer invents their own logic. And at some point, the whole app starts speaking several languages at once.',
          },
          {
            type: 'p',
            text: "My way in has always been the same: a component needs a system behind it to earn its place in the product. Tokens everywhere, components designed to live together. It sounds simple to say. It takes years to hold.",
          },
        ],
      },
      {
        title: 'Laying the foundations',
        blocks: [
          {
            type: 'p',
            text: "I started with a full audit. An inventory of every interface, screenshots of every variant of every pattern (down to listing every way to close a modal in the app, yes, all of them). Painstaking work, and exactly what reveals where the real chaos is.",
          },
          {
            type: 'layers',
            text: "Then, structuring the library in layers: the foundations (colours, type, spacing, radius, all as Figma variables), the core components, then the more business-specific ones. Each layer has its reason to exist, each token has a single source of truth. That's the base that keeps everything else standing, even when the brand colour changes overnight.",
            layers: [
              { name: 'Business components', detail: 'specific to the product' },
              { name: 'Core components', detail: 'buttons, inputs, modals' },
              { name: 'Foundations', detail: 'colours, type, spacing, radius' },
            ],
            caption: 'Each layer builds on the one below',
          },
          {
            type: 'img',
            src: '/projects/design-system/image.png',
            caption: 'The Main Component in the library: anatomy, props and states',
          },
          {
            type: 'p',
            text: "A WAATOM component is three things that have to stay aligned at all times: the Main Component in the library, the code in Storybook, and the documentation that explains how to use it (and when to avoid it).",
          },
          {
            type: 'img',
            src: '/projects/design-system/image-2.png',
            caption: 'The code in Storybook, in sync with Figma',
          },
          {
            type: 'link',
            href: 'https://storybook.waalaxy.com/',
            label: 'Browse the WAATOM Storybook',
          },
          {
            type: 'img',
            src: '/projects/design-system/image-1.png',
            caption: 'The documentation that explains how to use a component, and when to avoid it',
          },
          {
            type: 'callout',
            text: "The day one of the three falls behind the other two, the system starts drifting out of sync. And an out-of-sync design system is the worst case: nobody knows what to trust anymore.",
          },
        ],
      },
      {
        title: 'Keeping the process alive',
        blocks: [
          {
            type: 'p',
            text: "A component library is the beginning. What makes it last is the contribution process behind it. I set up contribution tiers (Light, Medium, Heavy) so everyone knows what they're getting into before they start. Figma branches named [NEW], [MAJ], [FIX], always on a branch, always one person per component at a time. A Definition of Ready before even thinking about dev, a Definition of Done before calling a component shippable, with a real quality checklist behind it: UI consistency, behaviour consistency, accessibility actually tested.",
          },
          {
            type: 'img',
            src: '/projects/design-system/contribution-flow.webp',
            caption: 'The contribution flow: depending on what already exists, a request becomes a Light, Medium or Heavy contribution, then goes to DS review',
          },
          {
            type: 'img',
            src: '/projects/design-system/Clipboard-20260518-193823-403.gif',
            caption: 'Tutorial for contributing on Figma branches [NEW], [MAJ], [FIX]',
          },
          {
            type: 'p',
            text: "For rituals, I kept the frame deliberately light: an async stand-up every other day, weekly office hours to be available live, reviews run by the contributors themselves once trained (the goal is for them to become autonomous, so I'm not signing off on everything forever), and a quarterly retro to step back. To channel requests, a dead-simple Slack automation: one command, one emoji, and a card creates itself in the right board.",
          },
          {
            type: 'p',
            text: 'Deprecating a component is a whole topic too. First we check its occurrences in production with the devs, then rename it with a little "." and [OLD] in front, and add a very visible "DEPRECATE 💀" on publish. So that a component disappearing stays a deliberate decision. Nobody wants to find out mid-integration at 5pm on a Friday.',
          },
        ],
      },
      {
        title: 'What was hard',
        blocks: [
          {
            type: 'p',
            text: 'Getting a design system adopted is 20% Figma and 80% communication. Convincing a dev to reuse the existing component instead of recoding their own "because it\'s faster that way." Prioritising between what\'s fun to design and what really has a business impact. Accepting that a system grows with the product and gets re-evaluated all the time.',
          },
          {
            type: 'p',
            text: "The hardest part, honestly, was taking on the role of guardrail. Reminding people that a component needs more work before it ships. Defending the documentation even when everyone's in a rush. Holding the line on exceptions. Staying the person people want to come to while holding that line took me a while to balance.",
          },
        ],
      },
      {
        title: 'What it changed',
        blocks: [
          {
            type: 'p',
            text: 'WAATOM became a real shared language between design and dev. Designers knew where to look before recreating. Devs knew what they were integrating before they started. And I went from "the one who makes buttons" to the person guaranteeing a consistency that held across dozens of screens and several teams.',
          },
          {
            type: 'p',
            text: 'The most concrete proof lives in ClickUp. When a ticket was sent back during QA, we logged the reason, and one of the options was "design not followed". As WAATOM settled in, it was used less and less, until it dropped to zero. We ended up deleting it from the list.',
          },
          {
            type: 'callout',
            text: "That work, invisible most of the time, is what keeps a product consistent sprint after sprint.",
          },
        ],
      },
      {
        title: 'What came next',
        blocks: [
          {
            type: 'p',
            text: "I pushed this system, built by hand over years, further after Waalaxy. On Vela, my SaaS for psychologists and coaches, I started straight on the right foundations: clean tokens, a DS designed from the very first component.",
          },
          {
            type: 'p',
            text: "And I dug into something I'm a little obsessed with: plugging my design system straight into Claude Code through MCP. The system becomes a constraint the AI respects natively when it generates front-end code. This portfolio was shipped that way. Less time fixing off-token colours or approximate spacing, more time on what really matters: product decisions.",
          },
        ],
      },
    ],
    learnings:
      'After years of getting humans to respect a system, the logical next step is getting AI to respect it too.',
  },
}
