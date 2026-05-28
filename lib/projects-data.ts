import type { ProjectDetail } from './types'

export const ALL_PROJECTS: ProjectDetail[] = [
  // ─── 1. Trial by Card ──────────────────────────────────────────────────────
  {
    id: '1',
    slug: 'trial-by-card',
    title: 'L\'onboarding\ qui a multiplié la conversion par 2,5',
    tagline: 'Transformer un creu dans le flow d entrée en machine de conversion',
    description:
      "Conception d'un flow de fin d'onboarding pour améliorer la valeur perçue de l'app - audit, 2 rounds d'A/B tests, contraintes légales et cognitives. Résultat validé par le CEO : ×2,5 sur les premiers abonnements Business.",
    coverImage: '/projects/trial-by-card.png',
    tags: ['Conversion', 'Product Design'],
    caseStudyUrl: null,
    featured: true,
    role: 'Product Designer & Lead Design System',
    company: 'Waalaxy',
    period: 'Oct/Déc 2025',
    status: 'Livré en production',
    team: '1 PM · 1 dev growth · 1 designer',
    metrics: [
      { value: '×2,5', label: 'sur les abonnements Business en tant que 1er abonnement acheté' },
      { value:  '2 sem.', label: 'de délai avant la première release'},
      { value: '4', label: 'versions designées avant validation' },
      { value: '3', label: "rounds d'A/B tests" },
    ],
    intro:
      "L'idée du trial by card existait déjà. L'équipe growth testait une version basique qui exposait 33% des nouveaux users à une page de collecte de CB en échange d'un accès Business gratuit. Les résultats étaient là, mais le flow n'avait jamais été designé. Aucune réflexion sur la hiérarchie de l'information, le wording, la gestion de la charge cognitive ou la conformité légale. C'est à ce moment que le projet est passé à l'équipe produit.",
    sections: [
      {
        title: 'Comprendre avant de concevoir',
        blocks: [
          {
            type: 'p',
            text: "On a commencé par auditer le flow de l'équipe growth pour comprendre ce qui posait problème, avant de chercher à l'améliorer. 3 sources d'insight.",
          },
          {
            type: 'list',
            items: [
              "Sessions de replay (Mixpanel / PostHog) : beaucoup d'utilisateurs ne trouvaient pas le bouton pour sortir du trial sans s'engager. Résultat : des tickets support générés par des gens qui voulaient juste passer leur chemin.",
              "Analyse du flow existant : l'information \"0€ aujourd'hui\", pourtant l'argument principal pour convaincre de rentrer sa CB, se perdait dans la page.",
              "Benchmark sur Mobbin : les produits SaaS les plus performants sur ce pattern partagent 3 principes (réassurance maximale, sortie visible, engagement cognitif minimal.)",
            ],
          },
          {
            type: 'callout',
            text: "Rentrer sa carte bancaire, c'est un acte chargé émotionnellement. La question n'est pas \"est-ce que je veux essayer Business\".  C'est \"est-ce que je fais confiance à ce produit pour ne pas me piéger ?\" Notre hypothèse : si on réduit la charge cognitive au minimum, qu'on rend la sortie évidente, et qu'on insiste sur le \"0€\" comme information principale, on peut significativement augmenter le taux de complétion.",
          },
        ],
      },
      {
        title: 'Conception & contraintes dures',
        blocks: [
          {
            type: 'p',
            text: "Avant de designer, on a posé les contraintes non-négociables : les mentions légales liées à la collecte de CB (RGPD, récurrence, conditions d'annulation) devaient apparaître sur l'écran. Le formulaire CB demandait plusieurs champs. Et faire tenir tout ça (formulaire, mentions légales, éléments de réassurance) sur un seul écran sans scroll était l'un des challenges principaux.",
          },
          {
            type: 'p',
            text: "J'ai designé 4 versions avant d'arriver à celle validée par l'équipe. Les itérations ont porté sur la cohérence avec l'onboarding, la hiérarchie entre l'argument commercial et le formulaire, le placement des mentions légales, la visibilité du bouton de sortie, et la compression de l'information.",
          },
          {
            type: 'img',
            src: '/projects/trial-by-card/image.png',
            caption: "Version Business • A/B test 50/50 entre le plan Business et le plan Advanced",
          },
          {
            type: 'img',
            src: '/projects/trial-by-card/image-1.png',
            caption: 'Version Advanced ',
          },
        ],
      },
      {
        title: 'A/B Tests : ce qu\'on croyait vs ce qui convertit',
        blocks: [
          {
            type: 'h3',
            text: 'Phase 1 : Business vs Advanced',
          },
          {
            type: 'p',
            text: "Plan Business en yearly vs plan Advanced en yearly, split 50/50. L'objectif : savoir lequel convertissait le mieux comme premier abonnement souscrit. L'Advanced surperformait. Hypothèse : un prix d'entrée plus accessible réduit la résistance au moment de l'engagement CB, même quand l'essai est gratuit.",
          },
          {
            type: 'h3',
            text: 'Phase 2 : le choix de la périodicité',
          },
          {
            type: 'p',
            text: "On a conservé le split 50/50 entre Business et Advanced, mais on a enrichi chaque variante avec le choix de la périodicité : monthly ou yearly. L'utilisateur pouvait donc choisir son niveau d'engagement sur le plan ET sur la durée.",
          },
          {
            type: 'img',
            src: '/projects/trial-by-card/image-2.png',
            caption: 'Phase 2 : introduction du choix de périodicité',
          },
          {
            type: 'h3',
            text: 'Résultat',
          },
          {
            type: 'quote',
            text: "Avec le trial by card, on a multiplié par 2,5 le nombre de business en firstsubscribe.",
            source: 'Toinon Georget, CEO de Waalaxy',
          },
          {
            type: 'img',
            src: '/projects/trial-by-card/Capture_decran_2025-12-30_a_11.35.08.png',
            caption: "Validation interne des résultats post-release",
          },
        ],
      },
      {
        title: 'Nouvelles itérations • mai 2026',
        blocks: [
          {
            type: 'p',
            text: "Le trial by card continue d'évoluer. La refonte graphique aligne le flow avec la nouvelle direction visuelle de la marque et les derniers composants Stripe, plus minimalistes, plus simples à remplir. Nous continuons les tests pour voir si on peut encore améliorer le taux de conversion en jouant sur la demande de la carte banquaire : est-ce que c'est mieux de la demander d'emblée, ou de la proposer après une première étape d'engagement ?",
          },
          {
            type: 'img',
            src: '/projects/trial-by-card/image-3.png',
            caption: 'Refonte graphique : Version essai avec carte bancaire',
          },
          {
            type: 'p',
            text: "Les apprentissages des A/B tests ont confirmé que l'Advanced convertit mieux comme premier abonnement. Le flow a été simplifié : moins d'information, une meilleure intégration dans le flow, ajout de cas réels d'utilisateurs comme social proof...",
          },
          {
            type: 'img',
            src: '/projects/trial-by-card/image-4.png',
            caption: 'Version 2 de la refonte : Essai gratuit donné d\'office sur le plan Advanced',
          },
        ],
      },
    ],
    learnings:
      "Ce projet m'a confirmé quelque chose : la friction perçue est souvent plus grande que la friction réelle. Demander une CB, c'est techniquement 7 champs. Mais psychologiquement, c'est un acte de confiance. Mon boulot c'était de  gérer l'émotion autour de cet acte. L'autre apprentissage : ne pas supposer qu'on sait ce qui va convertir. L'Advanced qui surperforme sur le Business était contre-intuitif. Sans l'A/B test, on n'aurait pas su. Enfin : la vitesse était possible ici parce qu'on avait un Design System solide. Le DS n'était pas visible sur la prod, mais il était dans le délai hihi.",
  },

  // ─── 2. Parcours d'upgrade ─────────────────────────────────────────────────
  {
    id: '2',
    slug: 'parcours-upgrade',
    title: "Pousser l'achat au bon moment",
    tagline: 'Passer de 2% à 10% de conversion avec des modales contextuelles',
    description:
      "Refonte du parcours d'upgrade : personnaliser le message selon la situation de l\'utilisateur\.",
    coverImage: '/projects/parcours-upgrade.png',
    tags: ['Conversion', 'Product Design', 'UX'],
    caseStudyUrl: null,
    featured: true,
    role: 'Product Designer & Lead Design System',
    company: 'Waalaxy',
    period: 'Oct/Nov 2025',
    status: 'Livré en production',
    team: '1 PM · 2 devs · 1 designer',
    metrics: [
      { value: '10%', label: 'de conversion depuis CTA contextuels' },
      { value: '2%', label: 'taux de conversion initial (page tarifs)' },
      { value: '13,61%', label: "ouverture modale depuis CTA in-app" },
      { value: '3 CTA', label: 'personnalisés selon le flow de chaque user' },
    ],
    intro:
      "Waalaxy monétise via plusieurs plans et des add-ons. Le parcours d'upgrade existant avait un défaut structurel : l'utilisateur qui voulait passer à un plan supérieur était immédiatement redirigé vers le panier, sans jamais comprendre ce qu'il allait gagner. L'abandon ne se produisait pas au paiement mais avant, au moment où l'utilisateur ne trouvait pas de réponse à sa question implicite : \"est-ce que ça vaut vraiment le coup pour ma situation ?\"",
    sections: [
      {
        title: 'Audit de l\'existant : ce qui ne fonctionnait pas',
        blocks: [
          {
            type: 'p',
            text: "3 signaux convergeaient vers le même constat : le support remontait des utilisateurs qui ne percevaient pas qu'un plan supérieur répondrait à leur besoin. Les données produit montraient un taux de conversion depuis la page de pricing à 2% seulement. Et la rentrée de septembre créait une opportunité d'upsell à ne pas rater.",
          },
          {
            type: 'p',
            text: "En prod, les boutons d'upgrade ramenaient systématiquement sur la page des tarifs, sans aucun lien avec ce que l'utilisateur était en train d'essayer de faire. Même wording pour tout le monde. Même structure. Aucune hiérarchie. Pour un utilisateur qui vient de se heurter à un quota dépassé, l'information dont il a besoin n'est pas \"voici les plans que nous proposons\" -> c'est \"voici pourquoi le plan supérieur résout ton problème maintenant\".",
          },
          {
            type: 'img',
            src: '/projects/parcours-upgrade/Capture_decran_2026-05-13_a_19.00.46.png',
            caption: "Ancienne modale d'upgrade, même design pour tous les contextes",
          },
          {
            type: 'p',
            text: "L'audit a identifié 2 contextes d'upgrade distincts : quota dépassé (l'utilisateur a besoin de voir immédiatement ce qu'il gagne en volume) et feature bloquée (l'utilisateur a besoin de comprendre quelle offre débloque quoi). Un seul design ne pouvait pas répondre à ces 2 contextes avec la même efficacité.",
          },
        ],
      },
      {
        title: 'Lot 1 : modales comparatives contextuelles',
        blocks: [
          {
            type: 'p',
            text: "Chaque modale s'ouvre avec un titre et un sous-titre qui nomment le problème de l'utilisateur avant de proposer la solution. L'utilisateur reconnaît immédiatement que la page parle de son problème.",
          },
          {
            type: 'list',
            items: [
              "Hiérarchie de l'information : le prix est visible immédiatement, accompagné du bénéfice principal. La liste de features met en avant l'élément différenciant selon le contexte.",
              'Labels "Best value" et "Plan Actuel" : pour orienter sans forcer. Un coup d\'œil suffit à comprendre où on est et où on devrait aller.',
              '"Voir toutes les fonctionnalités" : lien en bas pour les utilisateurs qui veulent approfondir, sans encombrer la modale principale.',
              "Liens URL dédiés : les modales sont accessibles via URL pour les opérations marketing.",
            ],
          },
          {
            type: 'img',
            src: '/projects/parcours-upgrade/Capture_decran_2026-05-13_a_18.27.31.png',
            caption: 'Les deux variantes : Freemium et Pro, sur le même contexte quota',
          },
          {
            type: 'img',
            src: '/projects/parcours-upgrade/image.png',
            caption: "Version feature bloquée : modale auto-import de prospects",
          },
        ],
      },
      {
        title: 'Lot 3 : refonte de la modale de paiement',
        blocks: [
          {
            type: 'p',
            text: "Même quand l'utilisateur était convaincu par la modale comparative, un second point de friction l'attendait dans le panier : redirection sur le plan annuel par défaut, sans pouvoir changer de périodicité. La modale de paiement a été entièrement retravaillée pour répondre à trois besoins simultanément : choisir sa périodicité, gérer ses membres, configurer ses add-ons avec un récapitulatif en temps réel.",
          },
          {
            type: 'list',
            items: [
              'Billing period : Monthly / Quarterly / Yearly avec un badge "Save 50%" sur l\'annuel. Impact tarifaire visible immédiatement, sans calcul mental.',
              "Members in your team : stepper +/- pour ajuster le nombre de sièges. Le prix par membre s'affiche en ligne, le total équipe se met à jour dans l'order summary.",
              "Add-ons : toggles pour activer Inbox et Credits avec description en une ligne. Un bouton \"?\" ouvre une surmodale d'information pour chaque add-on.",
            ],
          },
          {
            type: 'img',
            src: '/projects/parcours-upgrade/Capture_decran_2026-05-17_a_19.44.28.png',
            caption: 'Modale "Update my subscription" complète',
          },
          {
            type: 'h3',
            text: "L'order summary comme outil de réassurance",
          },
          {
            type: 'p',
            text: "Le récapitulatif affiche le détail de chaque ligne : plan, prorata du temps restant, crédit du temps non utilisé, TVA, total à payer maintenant. C'était l'une des sources de friction majeures remontées au support. Rendre ce calcul visible avant le paiement était autant une décision de réassurance que de réduction des tickets support.",
          },
          {
            type: 'grid',
            images: [
              { src: '/projects/parcours-upgrade/image-1.png', caption: 'Avant' },
              { src: '/projects/parcours-upgrade/image-2.png', caption: 'Après' },
            ],
          },
        ],
      },
      {
        title: 'Résultats',
        blocks: [
          {
            type: 'p',
            text: "Les données Mixpanel mesurent la conversion sur un funnel en 3 étapes sur les 3 derniers mois : clic sur le CTA, ouverture de la modale comparative, puis upgrade finalisé. Deux parcours sont comparés : les boutons contextuels in-app vs les paywalls classiques.",
          },
          {
            type: 'list',
            items: [
              "Taux d'ouverture de la modale comparative : 13,61% depuis un CTA contextuel vs 10,89% depuis un paywall",
              "Taux de conversion jusqu'à l'upgrade finalisé : 9,08% depuis un CTA contextuel vs 7,32% depuis un paywall",
              "Pour rappel, la baseline de départ était le taux de conversion depuis la page de pricing, à 2%. Le parcours contextuel le dépasse de plus de 4 points.",
            ],
          },
          {
            type: 'img',
            src: '/projects/parcours-upgrade/Capture_decran_2026-01-22_a_13.27.48.png',
            caption: 'Données Mixpanel post-release • funnel contextuel vs paywall classique',
          },
        ],
      },
    ],
    learnings:
      "Ce projet m'a confirmé quelque chose sur les parcours de conversion : le vrai blocage n'était pas le prix, ni même le formulaire de paiement. C'était l'absence de lien entre le problème de l'utilisateur et la solution proposée. Une modale qui s'ouvre sans contexte crée de la méfiance, pas de la conviction. La refonte de l'order summary illustre un autre principe : la transparence réduit la friction. Montrer le calcul du prorata, c'est une ligne de plus à afficher et des dizaines de tickets support en moins et un utilisateur qui passe au paiement avec confiance plutôt qu'avec des doutes.",
  },

  // ─── 3. CSV Import ─────────────────────────────────────────────────────────
  {
    id: '3',
    slug: 'csv-import',
    title: 'Mapping de données pour débutants',
    tagline: "De l'URL LinkedIn unique au mapping multi-colonnes",
    description:
      "83,5% des utilisateurs réussissent leur mapping du premier coup. Le résultat d'un flow conçu autour de ce que les gens font, pas de ce qu'on espère qu'ils fassent.",
    coverImage: '/projects/csv-import.png',
    tags: ['Product Design', 'UX'],
    caseStudyUrl: null,
    featured: true,
    role: 'Product Designer & Lead Design System',
    company: 'Waalaxy',
    period: 'Déc. 2024',
    status: 'Livré en production',
    team: '1 PM · 1 EM · 2 devs · 1 designer',
    metrics: [
      { value: '83,5%', label: 'utilisent le mapping multi-colonnes' },
      { value: '24', label: 'colonnes importées en moyenne' },
      { value: '10 485', label: 'imports analysés (3 mois)' },
      { value: '25%', label: "des fichiers proviennent de Waalaxy lui-même" },
    ],
    intro:
      "L'import CSV de Waalaxy n'acceptait qu'une seule colonne : l'URL LinkedIn. Un utilisateur avec une base Apollo ou un export HubSpot devait jeter 90% de ses données pour pouvoir importer. L'objectif : permettre d'importer un CSV avec autant de colonnes qu'on veut, en mappant chaque colonne vers le bon champ Waalaxy.",
    sections: [
      {
        title: 'Benchmark : les 3 principes du bon mapping',
        blocks: [
          {
            type: 'p',
            text: "Avant de concevoir, j'ai analysé les flows de mapping sur les outils CRM et d'import de données. 3 principes retenus.",
          },
          {
            type: 'list',
            items: [
              "Le pré-remplissage automatique des colonnes dont le nom est reconnu réduit la charge cognitive sur les cas simples et laisse l'utilisateur se concentrer sur ce qui est ambigu.",
              "La preview des données réelles à côté du mapping est indispensable. Sans elle, l'utilisateur mappe à l'aveugle et découvre ses erreurs après l'import.",
              "Les erreurs silencieuses sont le pire cas possible : un champ mal mappé qui passe sans avertissement, et les données arrivent corrompues. Mieux vaut signaler avant que laisser découvrir après.",
            ],
          },
          {
            type: 'img',
            src: '/projects/csv-import/Capture_decran_2026-05-18_a_17.26.02.png',
            caption: 'Benchmark de flows de mapping existants',
          },
        ],
      },
      {
        title: 'Conception : les 3 étapes du flow',
        blocks: [
          {
            type: 'h3',
            text: 'Étape 1 : Upload',
          },
          {
            type: 'p',
            text: "Volontairement simple : choix de la liste d'import et upload par drag&drop. Pas de décision à prendre, si le fichier est valide, on passe automatiquement à l'étape suivante. Le parser gère les cas complexes en arrière-plan sans les exposer à l'utilisateur.",
          },
          {
            type: 'img',
            src: '/projects/csv-import/image.png',
            caption: "Étape 1 : upload drag&drop",
          },
          {
            type: 'h3',
            text: "Étape 2 : Match data - l'écran central",
          },
          {
            type: 'p',
            text: "3 colonnes : les propriétés détectées dans le CSV (gauche), la propriété Waalaxy correspondante (centre), et une preview des vraies données (droite).",
          },
          {
            type: 'list',
            items: [
              "Le nombre de prospects détectés est mis en avant dans le titre • rassurer l'utilisateur qu'il a bien le bon fichier et lui permettre de détecter immédiatement une erreur.",
              "La checkbox par ligne permet de choisir quelles colonnes importer. Pas obligé de mapper tout le CSV.",
              "Le dropdown liste toutes les propriétés disponibles. Quand une propriété est déjà utilisée, un tooltip \"This property is already used\" apparaît ; l'utilisateur ne peut pas mapper 2 colonnes sur le même champ sans s'en rendre compte.",
            ],
          },
          {
            type: 'img',
            src: '/projects/csv-import/image-1.png',
            caption: 'Étape 2 : mapping avec preview des données réelles',
          },
          {
            type: 'h3',
            text: 'Étape 3 : Finaliser',
          },
          {
            type: 'p',
            text: "3 toggles couvrent les cas d'usage principaux : Team duplicate security (activé par défaut), Move duplicates to import list, Overwrite and replace existing prospect information. Chacun a une description courte travaillée pour comprendre dès la 1ère lecture. Activés par défaut sur les paramètres les plus sécurisés.",
          },
          {
            type: 'img',
            src: '/projects/csv-import/image-2.png',
            caption: "Étape 3 : options de finalisation avec description de l'impact",
          },
        ],
      },
      {
        title: 'Contribution Design System',
        blocks: [
          {
            type: 'p',
            text: "Ce projet introduisait des composants et patterns nouveaux, notamment le stepper et le tableau de mapping avec ses 3 colonnes et ses états multiples. Mon travail DS : conception et documentation d'un nouveau composant stepper interactif, revue ISO Figma/Storybook, et suivi des allers-retours dev pour les états d'erreur.",
          },
          {
            type: 'p',
            text: "Un soin particulier a été apporté aux micro-interactions : le stepper de progression en haut de la modale clignote subtilement sur l'étape en cours. Un détail qui n'impacte pas la fonctionnalité, mais qui donne vie au flow.",
          },
          {
            type: 'img',
            src: '/projects/csv-import/Clipboard-20260518-173144-340.gif',
            caption: 'Micro-interaction du stepper de progression',
          },
        ],
      },
      {
        title: 'Résultats • 3 mois post-release',
        blocks: [
          {
            type: 'quote',
            text: "Les utilisateurs peuvent désormais importer prénom, nom, job title, company, region, numéro de téléphone en plus des classics URL LinkedIn et emails. On a revu le flow d'import pour agrandir la zone de drag and drop, expliciter les options avancées, et ajouter une option 'Overwrite existing data' pour mettre à jour les data des prospects existants via CSV.",
            source: 'CPO Waalaxy, message de release',
          },
          {
            type: 'list',
            items: [
              "83,5% utilisent le mapping multi-colonnes. Seulement 16,5% importent encore uniquement l'URL LinkedIn (l'ancienne façon de faire).",
              "Moyenne de 24 colonnes par import : les sources qui auraient été inutilisables avec l'ancien flow.",
              "25% des fichiers proviennent de Waalaxy lui-même : des utilisateurs qui exportent leurs contacts d'un compte pour les réimporter dans un autre. Un cas d'usage qui n'existait pas avant.",
            ],
          },
        ],
      },
    ],
    learnings:
      "Ce projet m'a rappelé que les features \"techniques\" demandent autant d'attention UX que les features visibles. Le mapping de colonnes, c'est une interface qui parle à des données que l'utilisateur a souvent mis du temps à constituer. Une erreur de mapping, c'est des heures perdues. La conception des états d'erreur et des guards c'était le cœur du projet.",
  },

  // ─── 4. Ajout de l'IA ──────────────────────────────────────────────────────
  {
    id: '4',
    slug: 'ajout-de-lia',
    title: "Ajout de l'IA",
    tagline: "Corriger la forme des messages de prospection grâce à l'IA, sans toucher au fond",
    description:
      "Les utilisateurs débutants de Waalaxy savent quoi dire — ils ne savent pas comment le formuler. Intégration de boutons d'amélioration IA dans les zones de rédaction : le message est réécrit selon les bonnes pratiques, l'utilisateur garde le contrôle du résultat.",
    coverImage: '/projects/ajout-ia.png',
    tags: ['IA', 'Product Design'],
    caseStudyUrl: null,
    featured: false,
    role: 'Product Designer & Lead Design System',
    company: 'Waalaxy',
    period: 'Jan. • Mai 2026',
    status: 'Livré en production',
    metrics: [
      { value: '3', label: "surfaces couvertes : message, invitation, email" },
      { value: 'Keep / Retry / Cancel', label: "contrôle total sur le résultat IA" },
    ],
    intro:
      "Le problème n'était pas le manque de motivation. Les utilisateurs débutants de Waalaxy savent ce qu'ils veulent dire. Ce qu'ils ne maîtrisent pas, c'est la forme : les codes du message LinkedIn efficace, ce qui distingue un message qui obtient une réponse d'un message qui finit dans la corbeille. L'IA pouvait corriger ça. Le challenge design : le faire sans se substituer à l'utilisateur.",
    sections: [
      {
        title: "Le vrai problème : la forme, pas le fond",
        blocks: [
          {
            type: 'p',
            text: "Waalaxy est positionné comme l'outil de prospection le plus simple du marché. 75% des utilisateurs n'ont jamais utilisé ce type d'outil. Résultat : les taux de réponse sont plombés par des erreurs de forme basiques — messages trop longs, ton trop commercial, absence de personnalisation visible — pas par un manque d'idées.",
          },
          {
            type: 'callout',
            text: "Job story : en tant qu'utilisateur débutant, je veux itérer sur mon message de prospection en suivant les meilleures pratiques Waalaxy. L'objectif feature : augmenter les taux de réponse aux invitations, emails et messages en éliminant les erreurs de forme, tout en laissant à l'utilisateur la maîtrise du fond.",
          },
          {
            type: 'list',
            items: [
              "Interviews utilisateurs : le blocage n'est pas 'je ne sais pas quoi dire' • c'est 'je ne sais pas si ça sonne bien'",
              "Analyse Mixpanel : corrélation entre messages trop longs / trop formels et taux de réponse faibles",
              "Positionnement produit : Waalaxy recommande des bonnes pratiques dans sa documentation — l'IA devait les incarner, pas les remplacer",
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
            caption: "Feature IA en action • réécriture de message avec prévisualisation du résultat",
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
            text: "Ces patterns ont été documentés dans Storybook pour être réutilisables sur les prochaines features IA du produit — le principe keep/retry/cancel s'applique à n'importe quelle génération de contenu, quelle que soit la surface.",
          },
        ],
      },
    ],
    learnings:
      "Ce projet m'a appris à distinguer deux types d'assistance IA : celle qui écrit à la place de l'utilisateur, et celle qui améliore ce que l'utilisateur a commencé. La deuxième crée beaucoup moins de résistance. Le flow keep/retry/cancel n'est pas un détail d'UX — c'est ce qui fait que l'utilisateur reste auteur de son message. Sans ce contrôle explicite, l'IA devient une boîte noire. Avec lui, elle devient un outil.",
  },

  // ─── 5. Refacto Campaign Manager ───────────────────────────────────────────
  {
    id: '5',
    slug: 'campaign-manager',
    title: 'Refacto du Manager de Campagne',
    tagline: "Des cards illisibles à une liste de pilotage",
    description:
      "Refonte de la page centrale de Waalaxy • passage d'une grille de cards à une vue liste avec métriques en temps réel. Basé sur interviews utilisateurs churners et opportunity tree.",
    coverImage: '/projects/campaign-manager.png',
    tags: ['UX Research', 'Product Design'],
    caseStudyUrl: null,
    featured: false,
    role: 'Product Designer & Lead Design System',
    company: 'Waalaxy',
    period: 'Avr. • Mai 2026',
    status: 'Hands-off, livraison prochaine',
    team: '1 PM · 2 devs · 1 designer',
    metrics: [
      { value: '3', label: "signaux convergents vers le problème" },
      { value: '5+', label: 'versions avant la version finale' },
      { value: '→ Liste', label: 'passage de la grille de cards' },
    ],
    intro:
      "Le Campaign Manager est la page centrale de Waalaxy • la première que l'utilisateur voit quand il ouvre l'app. Et c'était l'une des pages les plus problématiques du produit. Les cards avaient des avatars colorés, un nom tronqué, et c'est tout. Pas de stats, pas de hiérarchie, pas d'action possible sans ouvrir chaque campagne une par une.",
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
              "La distinction entre campagnes actives, en pause et en brouillon n'est pas lisible d'un coup d'œil • tout a le même poids visuel.",
            ],
          },
          {
            type: 'img',
            src: '/projects/campaign-manager/Capture_decran_2026-05-13_a_17.31.08.png',
            caption: "Opportunity tree • de l'insight à la solution",
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
            text: "La vue en prod avait des avatars circulaires colorés sur chaque card • fonctionnellement inutiles, mais pour un utilisateur qui n'a jamais utilisé d'outil d'automation, ils rendaient la page vivante. Le feedback du PM : \"c'est moins playful qu'avant, j'en veux plus\".",
          },
          {
            type: 'callout',
            text: "Ce débat a forcé une question plus précise : qu'est-ce que \"playful\" veut dire fonctionnellement pour notre utilisateur ? Ce n'est pas \"mettre des couleurs\". C'est concevoir pour quelqu'un qui a besoin de se sentir à l'aise avec ses données, pas intimidé par elles. La réponse n'était pas de supprimer les éléments identitaires • c'était de les réintégrer dans une structure qui, elle, permettait de piloter.",
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
            text: "Cette orientation a été challengée : risque de transformer une page de pilotage en page de to-do, et de générer une surutilisation de certaines fonctionnalités coûteuses. On a recentré sur une conviction claire : le Campaign Manager est une page de comparaison et de lecture des résultats, pas une page d'action directe.",
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
              "Les actions classiques (pause/play, dupliquer, archiver) restent dans le menu \"...\" en fin de ligne • présentes, mais pas en compétition avec la lecture des données.",
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
      "Ce projet m'a confirmé que les allers-retours ne sont pas des échecs de conception • ce sont des apprentissages documentés. La version avec le side panel était une bonne réponse à une vraie question. On l'a mise de côté parce qu'elle répondait à un problème différent de celui de cette page. Savoir ce qu'une page n'est pas censée faire est aussi important que savoir ce qu'elle doit faire. La tension \"playful\" m'a aussi appris quelque chose : quand un feedback est flou, il faut le décomposer avant de répondre. \"Moins playful\" était en réalité \"moins rassurant pour un utilisateur non-technique face à un tableau de données\". Ce n'est pas le même problème, et ce n'est pas la même solution.",
  },

  // ─── 6. Design System ──────────────────────────────────────────────────────
  {
    id: '6',
    slug: 'design-system',
    title: 'Lead Design System from scratch',
    tagline: 'Construire les fondations qui permettent de livrer vite et cohérent',
    description:
      "Création et maintien du Design System de Waalaxy depuis nov. 2023 • composants Figma documentés, espace Notion opérationnel, process DS, revue ISO Figma/Storybook à chaque sprint.",
    coverImage: '/projects/design-system.png',
    tags: ['Design System'],
    caseStudyUrl: null,
    featured: false,
    role: 'Lead Design System & Product Designer',
    company: 'Waalaxy',
    period: 'Nov. 2023 • Présent',
    status: 'En cours',
    metrics: [
      { value: '∅', label: 'zéro DS existant au départ' },
      { value: '2024', label: 'formation Design System Expertise' },
      { value: '30 min', label: 'ateliers mensuels avec les devs' },
    ],
    intro:
      "Quand Waalaxy m'a proposé le poste de Lead DS, il n'y avait pas vraiment de Design System. Il y avait des composants Figma éparpillés, des pratiques différentes d'un designer à l'autre, et aucun process clair entre le design et le dev. Chaque projet générait des allers-retours inutiles parce que personne n'avait la même vision de ce qui existait ou de comment l'utiliser.",
    sections: [
      {
        title: 'Figma : reconstruire depuis la base',
        blocks: [
          {
            type: 'p',
            text: "Tous les composants existants ont été audités, reconstruits ou corrigés. L'objectif : des composants qui respectent une logique cohérente de props, de variants et d'états, pour que n'importe quel designer puisse les utiliser sans avoir à deviner.",
          },
          {
            type: 'p',
            text: "Chaque composant est documenté directement dans Figma : définition, anatomie, props disponibles, états, use cases et ce qu'il ne faut pas faire. La documentation n'est pas séparée du composant. Les chantiers principaux : boutons, inputs, icônes et variables. Puis uniformisation des props entre Figma et Storybook.",
          },
          {
            type: 'img',
            src: '/projects/design-system/image.png',
            caption: 'Documentation Figma du composant Input • anatomie, props et states',
          },
        ],
      },
      {
        title: 'Notion : la documentation centrale',
        blocks: [
          {
            type: 'p',
            text: "J'ai construit l'espace Notion du DS from scratch. Ce n'est pas juste un wiki • c'est une FAQ opérationnelle : les bons liens, des tutos étape par étape, les process design illustrés, des arbres de décisions, les Initial Mockup Templates qui répertorient les principales pages de l'app avec les maquettes les plus récentes.",
          },
          {
            type: 'callout',
            text: "L'objectif : que n'importe qui, designer ou dev, puisse trouver une réponse sans avoir à me pinger.",
          },
          {
            type: 'img',
            src: '/projects/design-system/image-1.png',
            caption: "Page d'accueil de l'espace Notion Waatom DS",
          },
        ],
      },
      {
        title: 'Process DS & Storybook',
        blocks: [
          {
            type: 'p',
            text: "J'ai mis en place un process complet de l'ouverture de Figma jusqu'à la validation DS. Avant chaque kick-off, je passe sur les maquettes pour valider l'usage des composants. Un message systématique dans #design-system prévient l'équipe avant chaque kick-off.",
          },
          {
            type: 'img',
            src: '/projects/design-system/Clipboard-20260518-193823-403.gif',
            caption: 'Tuto pour contribution sur des branches Figma',
          },
          {
            type: 'p',
            text: "Le Storybook est maintenu par les devs. Je me charge de piloter les priorités, valide la conformité avec Figma, et m'assure que ce qui est documenté côté code correspond à ce qui est designé.",
          },
          {
            type: 'img',
            src: '/projects/design-system/image-2.png',
            caption: 'Storybook : composant Button avec ses props documentées',
          },
        ],
      },
      {
        title: "L'aspect humain : convaincre, former, embarquer",
        blocks: [
          {
            type: 'p',
            text: "Un DS ne vit que si les gens qui travaillent avec ont envie de s'en servir. J'ai organisé des sessions de 30min avec les devs : 10min de présentation, puis 20min d'atelier où chacun pouvait donner ses idées.",
          },
          {
            type: 'quote',
            text: "Ton atelier micro-interaction a vraiment plu, les devs aimeraient faire un peu plus de produit. Go les monter en compétence, c'est top !",
            source: 'CPO Waalaxy',
          },
          {
            type: 'h3',
            text: 'S\'adapter quand les ressources diminuent',
          },
          {
            type: 'p',
            text: "Fin 2025, des coupes budgétaires ont réduit le nombre de contributeurs disponibles. Le modèle \"chacun contribue sur son temps libre\" ne tenait plus. J'ai adapté : plutôt qu'attendre des contributions, je les ai incrustées dans les projets en cours. Et lorsque le plan A ne passait pas, je \"kidnappais\" un dev pendant 2h pour travailler en duo • sessions pair, décisions rapides, moins de tickets qui traînent. Ce n'est pas le modèle idéal, mais c'est celui qui a permis de continuer à avancer dans un contexte contraint.",
          },
        ],
      },
    ],
    learnings:
      "Le Lead DS, c'est un poste qui demande autant de compétences relationnelles que techniques. Construire des composants propres et rédiger de la doc, c'est la partie visible. La partie invisible, c'est convaincre que ça vaut le coup d'investir du temps dedans, adapter le process quand le contexte change, et être présente au bon moment pour éviter que les bonnes pratiques s'oublient sous la pression. Ce que j'ai surtout appris : un DS n'est jamais fini. Il est vivant, il évolue avec le produit.",
  },

  // ─── 7. SaaS recrutement ───────────────────────────────────────────────────
  {
    id: '7',
    slug: 'saas-recrutement',
    title: 'SaaS de recrutement à double entrée',
    tagline: "Deux types d'utilisateurs, une seule cohérence de produit",
    description:
      "Conception d'une marketplace mettant en relation chasseurs de têtes et candidats • UX à double entrée, onboarding distinct pour chaque profil, logique de matching et interfaces adaptées.",
    coverImage: '/projects/saas-recrutement.png',
    tags: ['Product Design', 'Freelance'],
    caseStudyUrl: null,
    featured: false,
    role: 'Product Designer',
    company: 'Kilpailutapalkkasi.fi',
    period: 'Jan. 2025',
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
              "Cartographie des deux parcours utilisateurs en parallèle • identifier les points de contact partagés vs les surfaces spécifiques à chaque rôle",
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
            caption: "Interface principale de la marketplace • vue candidat",
          },
          {
            type: 'p',
            text: "La fonctionnalité centrale • le matching • devait être transparente pour les deux parties. J'ai conçu un système de tags de compétences partagé, visible des deux côtés, pour que les critères de matching soient compréhensibles et éditables par chacun.",
          },
        ],
      },
      {
        title: 'Contraintes et arbitrages',
        blocks: [
          {
            type: 'callout',
            text: "Une contrainte forte : le projet s'est déroulé sur 3 semaines. Il a fallu prioriser rapidement • définir les écrans critiques (onboarding, profil, matching, messagerie) et accepter de différer les fonctionnalités secondaires pour une V2.",
          },
          {
            type: 'p',
            text: "La messagerie intégrée était le point de rencontre des deux rôles : le seul endroit où les deux types d'utilisateurs interagissent directement. Elle devait être simple, sans ambiguïté sur qui a initié la conversation et pourquoi. Un contexte de mise en relation visible dans chaque conversation • l'offre ou le profil qui a déclenché le premier contact.",
          },
        ],
      },
    ],
    learnings:
      "Les marketplaces à double entrée sont parmi les exercices les plus exigeants en product design, parce qu'une mauvaise décision côté offre impacte immédiatement le côté demande • et vice versa. Ce projet m'a appris à cartographier les tensions avant de concevoir, et à trouver des patterns qui résolvent les deux sides en même temps plutôt que de compromettre l'un pour l'autre.",
  },

  // ─── 8. Dashboard Praticien ────────────────────────────────────────────────
  {
    id: '8',
    slug: 'dashboard-praticien',
    title: 'Dashboard Praticien • gestion de consultations',
    tagline: "Remplacer 4 outils éparpillés par un seul espace qui tient la route",
    description:
      "Dashboard Notion sur mesure pour un praticien de santé libéral • centralisation de l'agenda, du suivi patient, de la facturation et des notes de consultation dans un seul espace cohérent.",
    coverImage: null,
    tags: ['Freelance'],
    caseStudyUrl: null,
    featured: false,
    role: 'Designer Notion',
    company: 'Client freelance',
    period: 'Déc. 2024 • Jan. 2025',
    status: 'Livré',
    metrics: [
      { value: '4→1', label: 'outils remplacés par un seul espace' },
      { value: '6 sem.', label: "d'utilisation avant retour client positif" },
    ],
    intro:
      "Un praticien de santé libéral qui gérait son activité entre un agenda papier, un tableur Excel pour la facturation, une application de notes, et des post-its pour le suivi patient. Il voulait simplifier • pas forcément digitaliser pour digitaliser, mais avoir un seul endroit où tout se trouve, accessible depuis n'importe quel appareil.",
    sections: [
      {
        title: "Cadrage : comprendre le quotidien du praticien",
        blocks: [
          {
            type: 'p',
            text: "Avant de toucher à Notion, j'ai passé une heure à cartographier le flux réel de travail : comment commence une journée de consultation ? Qu'est-ce qui prend du temps inutilement ? Qu'est-ce qui ne peut pas disparaître même si c'est contraignant (obligations légales, confidentialité des données patient) ?",
          },
          {
            type: 'list',
            items: [
              "Le point de douleur principal : trouver les informations d'un patient avant la consultation (antécédents, dernière séance, notes) prenait 5 à 10 minutes à chaque fois",
              "Deuxième point : la facturation manuelle en fin de mois et retranscrire des données de l'agenda papier vers Excel avec un risque d'oubli constant",
              "Contrainte non-négociable : aucune donnée patient nominative ne pouvait être stockée dans Notion (RGPD, secret médical). Le système devait fonctionner avec des identifiants anonymisés",
            ],
          },
        ],
      },
      {
        title: "Architecture de l'espace Notion",
        blocks: [
          {
            type: 'p',
            text: "L'espace a été structuré autour de trois bases de données liées : Patients (anonymisés), Consultations, et Facturation. Une vue Dashboard en page d'accueil synthétise les informations du jour : consultations prévues, en attente de note, et factures à émettre.",
          },
          {
            type: 'callout',
            text: "Le principe directeur : chaque information ne doit être saisie qu'une seule fois. La relation entre les bases de données fait le reste • une consultation crée automatiquement une entrée liée dans la facturation, sans ressaisie.",
          },
          {
            type: 'list',
            items: [
              "Page d'accueil : vue du jour avec consultations filtrées par date + compteurs synthétiques",
              "Base Patients : fiches avec antécédents, fréquence de consultation, historique des séances",
              "Base Consultations : template de note standardisé, lien vers la fiche patient, durée, type",
              "Base Facturation : générée automatiquement depuis les consultations, avec statut de paiement",
            ],
          },
        ],
      },
      {
        title: "Adoption et formation",
        blocks: [
          {
            type: 'p',
            text: "La livraison n'était pas un Figma ou un document • c'était un espace Notion fonctionnel avec les bases de données pré-structurées, des entrées de test, et une vidéo tutoriel de 15 minutes enregistrée pour le client. Le client n'était pas un utilisateur Notion • la courbe d'apprentissage devait être quasi nulle.",
          },
          {
            type: 'p',
            text: "Six semaines après la livraison, le retour : l'espace était utilisé quotidiennement, la facturation mensuelle prenait désormais 20 minutes au lieu de 2 heures, et aucun rendez-vous n'avait été oublié depuis le déploiement.",
          },
        ],
      },
    ],
    learnings:
      "Concevoir pour un utilisateur non-technique, c'est concevoir pour les contraintes réelles et non pour les possibilités théoriques de l'outil. Notion peut faire des choses complexes • mais si l'utilisateur final ne comprend pas pourquoi il doit cliquer là, le système ne sera pas utilisé. Ce projet m'a rappelé que la valeur d'un bon système d'information, c'est avant tout son taux d'adoption.",
  },

  // ─── 9. Dashboard Stratégie ────────────────────────────────────────────────
  {
    id: '9',
    slug: 'dashboard-strategie',
    title: 'Dashboard Stratégie financière et suivi',
    tagline: "Transformer un tableur en outil de pilotage stratégique",
    description:
      "Tableau de bord Notion pour le suivi stratégique et financier d'une activité freelance • vision consolidée des revenus, du pipeline, et des objectifs en un seul espace actionnable.",
    coverImage: null,
    tags: ['Freelance'],
    caseStudyUrl: null,
    featured: false,
    role: 'Designer Notion',
    company: 'Client freelance',
    period: 'Août 2024',
    status: 'Livré',
    metrics: [
      { value: '3j', label: 'de conception et livraison' },
      { value: '4 vues', label: 'pour tout voir : CA, pipeline, objectifs' },
    ],
    intro:
      "Un freelance avec une activité bien lancée, mais une vision floue de sa situation réelle : combien il avait facturé ce mois-ci, combien restait en attente de paiement, combien de prospects étaient dans le pipe. Les données existaient dans différents endroits • l'enjeu était de les connecter dans un espace qui donne une lecture instantanée et actionnable.",
    sections: [
      {
        title: "Le problème : des données qui n'ont pas de sens isolément",
        blocks: [
          {
            type: 'p',
            text: "Un freelance qui gère seul son activité porte plusieurs casquettes simultanément : prestataire, commercial, comptable, stratège. Le risque : être tellement dans l'opérationnel qu'on ne prend plus de recul sur la trajectoire globale. Est-ce que l'objectif annuel est atteignable ? Est-ce qu'il faut signer plus de projets ce mois ou se concentrer sur les livrables en cours ?",
          },
          {
            type: 'list',
            items: [
              "Revenus facturés vs objectif mensuel : un écart visible en temps réel, pas en fin de mois",
              "Pipeline commercial : leads en discussion, propositions envoyées, projets signés, en cours, livrés",
              "Trésorerie prévisionnelle : ce qui est signé mais pas encore facturé, ce qui est facturé mais pas encaissé",
              "Rétrospective trimestrielle : un espace dédié à la prise de recul sur les 3 derniers mois",
            ],
          },
        ],
      },
      {
        title: "Architecture et logique des bases de données",
        blocks: [
          {
            type: 'p',
            text: "Deux bases de données centrales : Projets (avec statut, montant, dates) et Factures (liées aux projets, avec statut de paiement). Les propriétés calculées font le travail : CA du mois en cours, CA en attente, objectif atteint en pourcentage.",
          },
          {
            type: 'callout',
            text: "Le dashboard principal est une page Notion sans base de données • c'est uniquement des vues filtrées des deux bases, arrangées pour répondre à une question spécifique par section. La lisibilité vient de la mise en page, pas de la complexité des données.",
          },
          {
            type: 'p',
            text: "La vue pipeline (kanban par statut) donne une lecture commerciale instantanée. La vue facturation (tableau avec filtres par mois) donne la lecture financière. La vue dashboard synthétise les deux avec des indicateurs clés en haut de page.",
          },
        ],
      },
      {
        title: "Ce que ça change concrètement",
        blocks: [
          {
            type: 'p',
            text: "La promesse de ce type de système n'est pas de faire gagner du temps sur la saisie • c'est de rendre les décisions plus claires. Quand on voit que 80% de l'objectif mensuel est atteint le 15, on peut se permettre de refuser un projet mal cadré. Quand on voit que le pipeline est vide, on sait qu'il faut prospecter maintenant et pas dans 3 semaines.",
          },
          {
            type: 'p',
            text: "La livraison incluait une session de passation de 30 minutes et un court guide des mises à jour mensuelles • ce qui doit être fait, quand, et comment interpréter les chiffres affichés.",
          },
        ],
      },
    ],
    learnings:
      "La conception d'outils de pilotage demande de comprendre comment la personne prend ses décisions, pas seulement quelles données elle a. Deux freelances avec les mêmes métriques peuvent avoir besoin de visualisations très différentes selon leur façon de travailler. Ce projet a été court (3 jours), mais dense en questions de cadrage • et c'est ce cadrage qui a fait que l'outil était utilisé une semaine après la livraison.",
  },
]

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return ALL_PROJECTS.find((p) => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return ALL_PROJECTS.map((p) => p.slug)
}
