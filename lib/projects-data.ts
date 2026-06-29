import type { ProjectDetail, AboutContent, Lang } from './types'

const PROJECTS_FR: ProjectDetail[] = [
  // ─── 1. Trial by Card ──────────────────────────────────────────────────────
  {
    id: '1',
    slug: 'trial-by-card',
    title: 'L\'onboarding\ qui a multiplié la conversion par 2,5',
    tagline: 'Transformer un creu dans le flow d entrée en machine de conversion',
    description:
      "Conception d'un flow de fin d'onboarding pour améliorer la valeur perçue de l'app - audit, A/B tests, contraintes légales et cognitives. La refonte a généré +25% d'utilisateurs qui ajoutent leur CB, et ×2,5 sur les premiers abonnements Business.",
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
      { value: '+25%', label: "d'utilisateurs qui ajoutent leur CB" },
      { value: '100%', label: 'des nouveaux users ont un trial' },
      { value: '2 sem.', label: 'de délai avant la première release' },
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
      {
        title: 'Résultat final : carte ou pas carte',
        blocks: [
          {
            type: 'p',
            text: "Après la refonte, on a lancé un A/B test : Trial by Card contre Trial sans carte. La nouvelle version visuelle a généré +25% d'utilisateurs qui ajoutent leur carte bancaire — un écart assez net pour qu'on décide de ne pas prendre le risque d'impacter le business à court terme.",
          },
          {
            type: 'p',
            text: "Plutôt que de trancher, on a introduit le Trial sans carte comme filet de sécurité : tout utilisateur qui refusait l'essai avec carte se voyait quand même proposer un essai gratuit de 2 semaines.",
          },
          {
            type: 'callout',
            text: "Résultat : 100% des nouveaux utilisateurs démarrent désormais sur un essai de 2 semaines, avec ou sans carte.",
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
      { value: '4% à 7%', label: "taux de réponse moyen d'une campagne de prospection" },
      { value: '15% à 20%', label: "objectif x3 du taux de réponse moyen" },
      { value: '3', label: "surfaces couvertes : message, note d'invitation, email" },
      { value: 'Keep / Retry / Cancel', label: "contrôle total sur le résultat IA" },
    ],
    intro:
      "En analysant 64 millions de campagnes LinkedIn sur la base Waalaxy, nous avons pu identifier les patterns rédactionnels qui impactent les taux de réponse : le top 1% des utilisateurs atteint 47,4% de réponses, contre 5% en moyenne selon les personas.",
    sections: [
      {
        title: "Le vrai problème : la forme, pas le fond",
        blocks: [
          {
            type: 'p',
            text: "Waalaxy est positionné comme l'outil de prospection le plus simple du marché. 75% des utilisateurs n'ont jamais utilisé ce type d'outil. Résultat : les taux de réponse sont plombés par des erreurs de forme basiques (messages trop longs, ton trop commercial, absence de personnalisation visible...) pas par un manque d'idées.",
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
              "Positionnement produit : Waalaxy recommande des bonnes pratiques dans sa documentation, l'IA doit les incarner pour les rendre accessibles à tous les utilisateurs, pas seulement à ceux qui savent déjà comment faire.",
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
            caption: "Feature IA - réécriture de message avec prévisualisation du résultat",
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

const PROJECTS_EN: ProjectDetail[] = [
  // ─── 1. Trial by Card ──────────────────────────────────────────────────────
  {
    id: '1',
    slug: 'trial-by-card',
    title: 'The onboarding that multiplied conversion by 2.5',
    tagline: 'Turning a gap in the entry flow into a conversion engine',
    description:
      "Designing an end-of-onboarding flow to lift the app's perceived value — audit, A/B tests, legal and cognitive constraints. The redesign drove a +25% increase in users adding their card, and ×2.5 on first Business subscriptions.",
    coverImage: '/projects/trial-by-card.png',
    tags: ['Conversion', 'Product Design'],
    caseStudyUrl: null,
    featured: true,
    role: 'Product Designer & Lead Design System',
    company: 'Waalaxy',
    period: 'Oct–Dec 2025',
    status: 'Shipped to production',
    team: '1 PM · 1 growth dev · 1 designer',
    metrics: [
      { value: '×2.5', label: 'on Business plans as the first subscription purchased' },
      { value: '+25%', label: 'increase in users adding their card' },
      { value: '100%', label: 'of new users get a trial' },
      { value: '2 wks', label: 'to the first release' },
    ],
    intro:
      "The trial-by-card idea already existed. The growth team was testing a basic version that exposed 33% of new users to a card-collection page in exchange for free Business access. The results were there, but the flow had never actually been designed. No thinking about information hierarchy, wording, cognitive load or legal compliance. That's when the project moved over to the product team.",
    sections: [
      {
        title: 'Understand before designing',
        blocks: [
          {
            type: 'p',
            text: "We started by auditing the growth team's flow to understand what was going wrong, before trying to improve it. Three sources of insight.",
          },
          {
            type: 'list',
            items: [
              "Session replays (Mixpanel / PostHog): many users couldn't find the button to leave the trial without committing. The result: support tickets from people who just wanted to move on.",
              'Analysis of the existing flow: the "€0 today" message — the main argument for entering a card — got lost on the page.',
              'Mobbin benchmark: the SaaS products that perform best on this pattern share three principles (maximum reassurance, a visible exit, minimal cognitive effort).',
            ],
          },
          {
            type: 'callout',
            text: 'Entering your card is an emotionally loaded act. The question isn\'t "do I want to try Business?" It\'s "do I trust this product not to trap me?" Our hypothesis: if we cut cognitive load to the minimum, make the exit obvious, and lead with "€0" as the primary message, we can significantly raise the completion rate.',
          },
        ],
      },
      {
        title: 'Design & hard constraints',
        blocks: [
          {
            type: 'p',
            text: "Before designing, we set the non-negotiable constraints: the legal notices tied to card collection (GDPR, recurring billing, cancellation terms) had to appear on screen. The card form required several fields. And fitting all of it — form, legal notices, reassurance elements — onto a single screen with no scroll was one of the main challenges.",
          },
          {
            type: 'p',
            text: "I designed four versions before landing on the one the team signed off. The iterations focused on consistency with the onboarding, the hierarchy between the sales argument and the form, the placement of the legal notices, the visibility of the exit button, and compressing the information.",
          },
          {
            type: 'img',
            src: '/projects/trial-by-card/image.png',
            caption: 'Business version • 50/50 A/B test between the Business and Advanced plans',
          },
          {
            type: 'img',
            src: '/projects/trial-by-card/image-1.png',
            caption: 'Advanced version',
          },
        ],
      },
      {
        title: 'A/B tests: what we assumed vs what converts',
        blocks: [
          {
            type: 'h3',
            text: 'Phase 1: Business vs Advanced',
          },
          {
            type: 'p',
            text: "Business yearly vs Advanced yearly, split 50/50. The goal: find out which converted better as a first subscription. Advanced outperformed. Hypothesis: a more accessible entry price lowers resistance at the moment of the card commitment, even when the trial is free.",
          },
          {
            type: 'h3',
            text: 'Phase 2: choosing the billing period',
          },
          {
            type: 'p',
            text: "We kept the 50/50 split between Business and Advanced, but enriched each variant with a billing-period choice: monthly or yearly. Users could now choose their level of commitment on both the plan and the duration.",
          },
          {
            type: 'img',
            src: '/projects/trial-by-card/image-2.png',
            caption: 'Phase 2: introducing the billing-period choice',
          },
          {
            type: 'h3',
            text: 'Result',
          },
          {
            type: 'quote',
            text: "With trial by card, we multiplied the number of Business first-subscribes by 2.5.",
            source: 'Toinon Georget, CEO of Waalaxy',
          },
          {
            type: 'img',
            src: '/projects/trial-by-card/Capture_decran_2025-12-30_a_11.35.08.png',
            caption: 'Internal sign-off on the results post-release',
          },
        ],
      },
      {
        title: 'New iterations • May 2026',
        blocks: [
          {
            type: 'p',
            text: "Trial by card keeps evolving. The visual redesign aligns the flow with the brand's new visual direction and the latest Stripe components — more minimal, easier to fill in. We're still testing to see whether we can push conversion further by playing with when we ask for the card: is it better to ask up front, or to offer it after a first step of commitment?",
          },
          {
            type: 'img',
            src: '/projects/trial-by-card/image-3.png',
            caption: 'Visual redesign: trial-with-card version',
          },
          {
            type: 'p',
            text: "The A/B test learnings confirmed that Advanced converts better as a first subscription. The flow was simplified: less information, better integration into the flow, and real user cases added as social proof.",
          },
          {
            type: 'img',
            src: '/projects/trial-by-card/image-4.png',
            caption: 'Redesign v2: free trial granted by default on the Advanced plan',
          },
        ],
      },
      {
        title: 'Final result: card or no card',
        blocks: [
          {
            type: 'p',
            text: "After the redesign, we ran an A/B test: Trial by Card against Trial without Card. The new visual version drove a +25% increase in users adding their credit card — a gap clear enough that we decided not to risk impacting the business short-term.",
          },
          {
            type: 'p',
            text: "Rather than pick one, we introduced Trial without Card as a safety net: any user who declined the card trial was still offered a 2-week free trial.",
          },
          {
            type: 'callout',
            text: "The result: 100% of new users now start on a 2-week trial, with or without a card.",
          },
        ],
      },
    ],
    learnings:
      "This project confirmed something for me: perceived friction is often bigger than real friction. Asking for a card is technically seven fields. But psychologically, it's an act of trust. My job was to manage the emotion around that act. The other lesson: don't assume you know what will convert. Advanced outperforming Business was counter-intuitive. Without the A/B test, we'd never have known. And finally: the speed was only possible here because we had a solid Design System. The DS wasn't visible in production, but it was in the timeline ;)",
  },

  // ─── 2. Upgrade journey ────────────────────────────────────────────────────
  {
    id: '2',
    slug: 'parcours-upgrade',
    title: 'Nudging the purchase at the right moment',
    tagline: 'From 2% to 10% conversion with contextual modals',
    description:
      "Reworking the upgrade journey: tailoring the message to each user's situation.",
    coverImage: '/projects/parcours-upgrade.png',
    tags: ['Conversion', 'Product Design', 'UX'],
    caseStudyUrl: null,
    featured: true,
    role: 'Product Designer & Lead Design System',
    company: 'Waalaxy',
    period: 'Oct–Nov 2025',
    status: 'Shipped to production',
    team: '1 PM · 2 devs · 1 designer',
    metrics: [
      { value: '10%', label: 'conversion from contextual CTAs' },
      { value: '2%', label: 'initial conversion rate (pricing page)' },
      { value: '13.61%', label: 'modal open rate from in-app CTAs' },
      { value: '3 CTAs', label: "tailored to each user's flow" },
    ],
    intro:
      'Waalaxy monetizes through several plans and add-ons. The existing upgrade journey had a structural flaw: a user who wanted to move up a plan was immediately redirected to the cart, without ever understanding what they\'d gain. Abandonment didn\'t happen at payment but before — at the moment the user couldn\'t answer their implicit question: "is this really worth it for my situation?"',
    sections: [
      {
        title: "Auditing the existing flow: what wasn't working",
        blocks: [
          {
            type: 'p',
            text: "Three signals pointed to the same conclusion: support was surfacing users who didn't see how a higher plan would meet their need. Product data showed a conversion rate from the pricing page of just 2%. And the September back-to-work surge was an upsell opportunity not to be missed.",
          },
          {
            type: 'p',
            text: 'In production, the upgrade buttons always sent users back to the pricing page, with no connection to what they were actually trying to do. Same wording for everyone. Same structure. No hierarchy. For a user who\'s just hit a quota limit, the information they need isn\'t "here are the plans we offer" — it\'s "here\'s why the higher plan solves your problem right now."',
          },
          {
            type: 'img',
            src: '/projects/parcours-upgrade/Capture_decran_2026-05-13_a_19.00.46.png',
            caption: 'The old upgrade modal — same design for every context',
          },
          {
            type: 'p',
            text: "The audit identified two distinct upgrade contexts: quota exceeded (the user needs to see immediately what they gain in volume) and feature locked (the user needs to understand which plan unlocks what). A single design couldn't serve both contexts with the same effectiveness.",
          },
        ],
      },
      {
        title: 'Batch 1: contextual comparison modals',
        blocks: [
          {
            type: 'p',
            text: "Each modal opens with a title and subtitle that name the user's problem before offering the solution. The user immediately recognises that the page is about their problem.",
          },
          {
            type: 'list',
            items: [
              'Information hierarchy: the price is visible immediately, alongside the key benefit. The feature list highlights the differentiator that matters for that context.',
              '"Best value" and "Current plan" labels: guiding without forcing. One glance is enough to see where you are and where you should go.',
              '"See all features": a link at the bottom for users who want to dig deeper, without cluttering the main modal.',
              'Dedicated URLs: the modals are reachable by URL for marketing campaigns.',
            ],
          },
          {
            type: 'img',
            src: '/projects/parcours-upgrade/Capture_decran_2026-05-13_a_18.27.31.png',
            caption: 'The two variants — Freemium and Pro — for the same quota context',
          },
          {
            type: 'img',
            src: '/projects/parcours-upgrade/image.png',
            caption: 'Feature-locked version: prospect auto-import modal',
          },
        ],
      },
      {
        title: 'Batch 3: redesigning the payment modal',
        blocks: [
          {
            type: 'p',
            text: 'Even when users were convinced by the comparison modal, a second friction point waited in the cart: a default redirect to the annual plan, with no way to change the billing period. The payment modal was fully reworked to meet three needs at once: choosing a billing period, managing team members, and configuring add-ons with a real-time summary.',
          },
          {
            type: 'list',
            items: [
              'Billing period: Monthly / Quarterly / Yearly with a "Save 50%" badge on annual. The price impact is visible immediately, no mental maths.',
              "Members in your team: a +/- stepper to adjust the number of seats. The per-member price shows inline, and the team total updates live in the order summary.",
              'Add-ons: toggles to enable Inbox and Credits with a one-line description. A "?" button opens an info modal for each add-on.',
            ],
          },
          {
            type: 'img',
            src: '/projects/parcours-upgrade/Capture_decran_2026-05-17_a_19.44.28.png',
            caption: 'The full "Update my subscription" modal',
          },
          {
            type: 'h3',
            text: 'The order summary as a reassurance tool',
          },
          {
            type: 'p',
            text: "The summary breaks down every line: plan, pro-rata of the remaining time, credit for unused time, VAT, total due now. This was one of the main sources of friction reported to support. Making this calculation visible before payment was as much a reassurance decision as a way to cut support tickets.",
          },
          {
            type: 'grid',
            images: [
              { src: '/projects/parcours-upgrade/image-1.png', caption: 'Before' },
              { src: '/projects/parcours-upgrade/image-2.png', caption: 'After' },
            ],
          },
        ],
      },
      {
        title: 'Results',
        blocks: [
          {
            type: 'p',
            text: 'Mixpanel data measures conversion across a three-step funnel over the past three months: CTA click, comparison-modal open, then completed upgrade. Two journeys are compared: in-app contextual buttons vs classic paywalls.',
          },
          {
            type: 'list',
            items: [
              'Comparison-modal open rate: 13.61% from a contextual CTA vs 10.89% from a paywall',
              'Conversion through to a completed upgrade: 9.08% from a contextual CTA vs 7.32% from a paywall',
              'For reference, the starting baseline was the 2% conversion rate from the pricing page. The contextual journey beats it by more than four points.',
            ],
          },
          {
            type: 'img',
            src: '/projects/parcours-upgrade/Capture_decran_2026-01-22_a_13.27.48.png',
            caption: 'Post-release Mixpanel data • contextual funnel vs classic paywall',
          },
        ],
      },
    ],
    learnings:
      "This project confirmed something about conversion journeys: the real blocker wasn't the price, or even the payment form. It was the missing link between the user's problem and the proposed solution. A modal that opens with no context breeds distrust, not conviction. The order-summary redesign illustrates another principle: transparency reduces friction. Showing the pro-rata calculation is one extra line to display — and dozens fewer support tickets, plus a user who reaches payment with confidence rather than doubt.",
  },

  // ─── 3. CSV Import ─────────────────────────────────────────────────────────
  {
    id: '3',
    slug: 'csv-import',
    title: 'Data mapping for beginners',
    tagline: 'From a single LinkedIn URL to multi-column mapping',
    description:
      "83.5% of users get their mapping right on the first try — the result of a flow designed around what people actually do, not what we hope they'll do.",
    coverImage: '/projects/csv-import.png',
    tags: ['Product Design', 'UX'],
    caseStudyUrl: null,
    featured: true,
    role: 'Product Designer & Lead Design System',
    company: 'Waalaxy',
    period: 'Dec 2024',
    status: 'Shipped to production',
    team: '1 PM · 1 EM · 2 devs · 1 designer',
    metrics: [
      { value: '83.5%', label: 'use multi-column mapping' },
      { value: '24', label: 'columns imported on average' },
      { value: '10,485', label: 'imports analysed (3 months)' },
      { value: '25%', label: 'of files come from Waalaxy itself' },
    ],
    intro:
      "Waalaxy's CSV import accepted only one column: the LinkedIn URL. A user with an Apollo base or a HubSpot export had to throw away 90% of their data just to import. The goal: let people import a CSV with as many columns as they want, mapping each column to the right Waalaxy field.",
    sections: [
      {
        title: 'Benchmark: the 3 principles of good mapping',
        blocks: [
          {
            type: 'p',
            text: 'Before designing, I analysed the mapping flows in CRM and data-import tools. Three principles stood out.',
          },
          {
            type: 'list',
            items: [
              "Auto-filling columns whose names are recognised reduces cognitive load on the easy cases and lets the user focus on what's ambiguous.",
              'A preview of the real data next to the mapping is essential. Without it, the user maps blind and only finds their mistakes after the import.',
              'Silent errors are the worst case: a badly mapped field that slips through with no warning, and the data lands corrupted. Better to flag it up front than let people discover it later.',
            ],
          },
          {
            type: 'img',
            src: '/projects/csv-import/Capture_decran_2026-05-18_a_17.26.02.png',
            caption: 'Benchmark of existing mapping flows',
          },
        ],
      },
      {
        title: 'Design: the 3 steps of the flow',
        blocks: [
          {
            type: 'h3',
            text: 'Step 1: Upload',
          },
          {
            type: 'p',
            text: 'Deliberately simple: pick the import list and upload by drag & drop. No decision to make — if the file is valid, you move to the next step automatically. The parser handles the complex cases in the background without exposing them to the user.',
          },
          {
            type: 'img',
            src: '/projects/csv-import/image.png',
            caption: 'Step 1: drag & drop upload',
          },
          {
            type: 'h3',
            text: 'Step 2: Match data — the core screen',
          },
          {
            type: 'p',
            text: 'Three columns: the properties detected in the CSV (left), the matching Waalaxy property (centre), and a preview of the real data (right).',
          },
          {
            type: 'list',
            items: [
              'The number of prospects detected is featured in the title • reassuring the user they have the right file and letting them spot an error immediately.',
              'A checkbox per row lets you choose which columns to import. No need to map the whole CSV.',
              'The dropdown lists every available property. When a property is already in use, a "This property is already used" tooltip appears; the user can\'t map two columns to the same field without noticing.',
            ],
          },
          {
            type: 'img',
            src: '/projects/csv-import/image-1.png',
            caption: 'Step 2: mapping with a preview of the real data',
          },
          {
            type: 'h3',
            text: 'Step 3: Finalise',
          },
          {
            type: 'p',
            text: 'Three toggles cover the main use cases: Team duplicate security (on by default), Move duplicates to import list, and Overwrite and replace existing prospect information. Each has a short, carefully worded description you can understand on first read. They default to the safest settings.',
          },
          {
            type: 'img',
            src: '/projects/csv-import/image-2.png',
            caption: 'Step 3: finalisation options with a description of their impact',
          },
        ],
      },
      {
        title: 'Design System contribution',
        blocks: [
          {
            type: 'p',
            text: 'This project introduced new components and patterns, notably the stepper and the mapping table with its three columns and multiple states. My DS work: designing and documenting a new interactive stepper component, an ISO Figma/Storybook review, and following the dev back-and-forth on the error states.',
          },
          {
            type: 'p',
            text: "Special care went into the micro-interactions: the progress stepper at the top of the modal blinks subtly on the current step. A detail that doesn't change the functionality, but brings the flow to life.",
          },
          {
            type: 'img',
            src: '/projects/csv-import/Clipboard-20260518-173144-340.gif',
            caption: 'Micro-interaction of the progress stepper',
          },
        ],
      },
      {
        title: 'Results • 3 months post-release',
        blocks: [
          {
            type: 'quote',
            text: "Users can now import first name, last name, job title, company, region and phone number on top of the classic LinkedIn URL and emails. We reworked the import flow to enlarge the drag-and-drop zone, clarify the advanced options, and add an 'Overwrite existing data' option to update existing prospects' data via CSV.",
            source: 'Waalaxy CPO, release note',
          },
          {
            type: 'list',
            items: [
              '83.5% use multi-column mapping. Only 16.5% still import the LinkedIn URL alone (the old way).',
              'An average of 24 columns per import — sources that would have been unusable with the old flow.',
              "25% of files come from Waalaxy itself: users exporting their contacts from one account to re-import them into another. A use case that didn't exist before.",
            ],
          },
        ],
      },
    ],
    learnings:
      'This project reminded me that "technical" features need just as much UX attention as visible ones. Column mapping is an interface that talks to data the user has often spent a long time building. A mapping mistake means hours lost. Designing the error states and the guards was the heart of the project.',
  },

  // ─── 4. Adding AI ──────────────────────────────────────────────────────────
  {
    id: '4',
    slug: 'ajout-de-lia',
    title: 'Adding AI',
    tagline: 'Using AI to fix the form of outreach messages, without touching the substance',
    description:
      "Beginner Waalaxy users know what to say — they just don't know how to phrase it. Adding AI-improvement buttons inside the writing areas: the message is rewritten following best practices, and the user stays in control of the result.",
    coverImage: '/projects/ajout-ia.png',
    tags: ['AI', 'Product Design'],
    caseStudyUrl: null,
    featured: false,
    role: 'Product Designer & Lead Design System',
    company: 'Waalaxy',
    period: 'Jan • May 2026',
    status: 'Shipped to production',
    metrics: [
      { value: '4% to 7%', label: 'average reply rate for an outreach campaign' },
      { value: '15% to 20%', label: 'target: 3× the average reply rate' },
      { value: '3', label: 'surfaces covered: message, invitation note, email' },
      { value: 'Keep / Retry / Cancel', label: 'full control over the AI result' },
    ],
    intro:
      'By analysing 64 million LinkedIn campaigns across the Waalaxy base, we identified the writing patterns that drive reply rates: the top 1% of users reach 47.4% replies, versus 5% on average depending on the persona.',
    sections: [
      {
        title: 'The real problem: the form, not the substance',
        blocks: [
          {
            type: 'p',
            text: 'Waalaxy is positioned as the simplest outreach tool on the market. 75% of users have never used a tool like this. The result: reply rates are dragged down by basic form mistakes (messages too long, too salesy a tone, no visible personalisation) — not by a lack of ideas.',
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
              'Product positioning: Waalaxy recommends best practices in its documentation; the AI has to embody them to make them accessible to every user, not just those who already know how.',
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
            caption: 'AI feature — message rewrite with a preview of the result',
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
      "This project taught me to distinguish two kinds of AI assistance: the kind that writes for the user, and the kind that improves what the user has started. The second creates far less resistance. The keep/retry/cancel flow isn't a UX detail — it's what keeps the user the author of their message. Without that explicit control, AI becomes a black box. With it, it becomes a tool.",
  },

  // ─── 5. Campaign Manager refactor ──────────────────────────────────────────
  {
    id: '5',
    slug: 'campaign-manager',
    title: 'Refactoring the Campaign Manager',
    tagline: 'From unreadable cards to a control-room list',
    description:
      "Redesigning Waalaxy's central page • moving from a grid of cards to a list view with real-time metrics. Based on interviews with churned users and an opportunity tree.",
    coverImage: '/projects/campaign-manager.png',
    tags: ['UX Research', 'Product Design'],
    caseStudyUrl: null,
    featured: false,
    role: 'Product Designer & Lead Design System',
    company: 'Waalaxy',
    period: 'Apr • May 2026',
    status: 'Handed off, shipping soon',
    team: '1 PM · 2 devs · 1 designer',
    metrics: [
      { value: '3', label: 'signals converging on the problem' },
      { value: '5+', label: 'versions before the final one' },
      { value: '→ List', label: 'moving on from the card grid' },
    ],
    intro:
      'The Campaign Manager is Waalaxy\'s central page • the first thing a user sees when they open the app. And it was one of the most problematic pages in the product. The cards had colourful avatars, a truncated name, and that was it. No stats, no hierarchy, no action possible without opening each campaign one by one.',
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
              "The distinction between active, paused and draft campaigns isn't readable at a glance • everything has the same visual weight.",
            ],
          },
          {
            type: 'img',
            src: '/projects/campaign-manager/Capture_decran_2026-05-13_a_17.31.08.png',
            caption: 'Opportunity tree • from insight to solution',
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
            text: 'The production view had colourful circular avatars on every card • functionally useless, but for a user who\'s never used an automation tool, they made the page feel alive. The PM\'s feedback: "it\'s less playful than before, I want more of that."',
          },
          {
            type: 'callout',
            text: 'That debate forced a sharper question: what does "playful" mean, functionally, for our user? It\'s not "add colours." It\'s designing for someone who needs to feel comfortable with their data, not intimidated by it. The answer wasn\'t to remove the identity elements • it was to reintegrate them into a structure that actually let people steer.',
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
            text: 'This direction was challenged: it risked turning a control page into a to-do page, and driving over-use of certain costly features. We refocused on a clear conviction: the Campaign Manager is a page for comparing and reading results, not a page for direct action.',
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
              'The standard actions (pause/play, duplicate, archive) stay in the "..." menu at the end of the row • present, but not competing with reading the data.',
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
      'This project confirmed that back-and-forth isn\'t a design failure • it\'s documented learning. The side-panel version was a good answer to a real question. We set it aside because it answered a different problem from this page\'s. Knowing what a page isn\'t meant to do is as important as knowing what it should do. The "playful" tension taught me something too: when feedback is vague, you have to break it down before responding. "Less playful" actually meant "less reassuring for a non-technical user facing a table of data." That\'s not the same problem, and it\'s not the same solution.',
  },

  // ─── 6. Design System ──────────────────────────────────────────────────────
  {
    id: '6',
    slug: 'design-system',
    title: 'Leading a Design System from scratch',
    tagline: 'Building the foundations that let us ship fast and consistent',
    description:
      "Creating and maintaining Waalaxy's Design System since Nov 2023 • documented Figma components, an operational Notion space, a DS process, and an ISO Figma/Storybook review every sprint.",
    coverImage: '/projects/design-system.png',
    tags: ['Design System'],
    caseStudyUrl: null,
    featured: false,
    role: 'Lead Design System & Product Designer',
    company: 'Waalaxy',
    period: 'Nov 2023 • Present',
    status: 'Ongoing',
    metrics: [
      { value: '∅', label: 'zero existing DS at the start' },
      { value: '2024', label: 'Design System Expertise training' },
      { value: '30 min', label: 'monthly workshops with the devs' },
    ],
    intro:
      "When Waalaxy offered me the Lead DS role, there wasn't really a Design System. There were scattered Figma components, different practices from one designer to the next, and no clear process between design and dev. Every project generated needless back-and-forth because nobody shared the same view of what existed or how to use it.",
    sections: [
      {
        title: 'Figma: rebuilding from the ground up',
        blocks: [
          {
            type: 'p',
            text: 'Every existing component was audited, rebuilt or fixed. The goal: components that follow a consistent logic of props, variants and states, so any designer can use them without guessing.',
          },
          {
            type: 'p',
            text: "Each component is documented directly in Figma: definition, anatomy, available props, states, use cases and what not to do. The documentation isn't separate from the component. The main workstreams: buttons, inputs, icons and variables. Then aligning the props between Figma and Storybook.",
          },
          {
            type: 'img',
            src: '/projects/design-system/image.png',
            caption: 'Figma documentation for the Input component • anatomy, props and states',
          },
        ],
      },
      {
        title: 'Notion: the central documentation',
        blocks: [
          {
            type: 'p',
            text: "I built the DS's Notion space from scratch. It's not just a wiki • it's an operational FAQ: the right links, step-by-step tutorials, illustrated design processes, decision trees, and the Initial Mockup Templates that catalogue the app's main pages with the most recent mockups.",
          },
          {
            type: 'callout',
            text: 'The goal: anyone, designer or dev, can find an answer without having to ping me.',
          },
          {
            type: 'img',
            src: '/projects/design-system/image-1.png',
            caption: 'Home page of the Waatom DS Notion space',
          },
        ],
      },
      {
        title: 'DS process & Storybook',
        blocks: [
          {
            type: 'p',
            text: 'I set up a full process from opening Figma through to DS sign-off. Before every kick-off, I go through the mockups to validate component usage. A systematic message in #design-system alerts the team before each kick-off.',
          },
          {
            type: 'img',
            src: '/projects/design-system/Clipboard-20260518-193823-403.gif',
            caption: 'Tutorial for contributing on Figma branches',
          },
          {
            type: 'p',
            text: 'Storybook is maintained by the devs. I steer the priorities, check the consistency with Figma, and make sure what\'s documented in code matches what\'s been designed.',
          },
          {
            type: 'img',
            src: '/projects/design-system/image-2.png',
            caption: 'Storybook: the Button component with its documented props',
          },
        ],
      },
      {
        title: 'The human side: convincing, training, bringing people on board',
        blocks: [
          {
            type: 'p',
            text: 'A DS only lives if the people who work with it actually want to use it. I ran 30-minute sessions with the devs: 10 minutes of presentation, then 20 minutes of workshop where everyone could share their ideas.',
          },
          {
            type: 'quote',
            text: 'Your micro-interaction workshop went down really well — the devs would like to do a bit more product. Go level them up, it\'s great!',
            source: 'Waalaxy CPO',
          },
          {
            type: 'h3',
            text: 'Adapting when resources shrink',
          },
          {
            type: 'p',
            text: 'In late 2025, budget cuts reduced the number of available contributors. The "everyone contributes in their spare time" model no longer held. I adapted: rather than waiting for contributions, I embedded them into ongoing projects. And when plan A didn\'t fly, I\'d "kidnap" a dev for two hours to work in pairs • pairing sessions, quick decisions, fewer tickets left hanging. It\'s not the ideal model, but it\'s the one that kept things moving in a constrained context.',
          },
        ],
      },
    ],
    learnings:
      "Leading a DS is a role that demands as much people skill as technical skill. Building clean components and writing docs is the visible part. The invisible part is convincing people it's worth investing time in, adapting the process when the context changes, and being there at the right moment so best practices don't get forgotten under pressure. What I learned above all: a DS is never finished. It's alive, and it evolves with the product.",
  },

  // ─── 7. Recruitment SaaS ───────────────────────────────────────────────────
  {
    id: '7',
    slug: 'saas-recrutement',
    title: 'A two-sided recruitment SaaS',
    tagline: 'Two kinds of users, one coherent product',
    description:
      'Designing a marketplace connecting headhunters and candidates • two-sided UX, a distinct onboarding for each profile, matching logic and tailored interfaces.',
    coverImage: '/projects/saas-recrutement.png',
    tags: ['Product Design', 'Freelance'],
    caseStudyUrl: null,
    featured: false,
    role: 'Product Designer',
    company: 'Kilpailutapalkkasi.fi',
    period: 'Jan 2025',
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
              'Mapping the two user journeys in parallel • identifying the shared touchpoints vs the surfaces specific to each role',
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
            caption: "The marketplace's main interface • candidate view",
          },
          {
            type: 'p',
            text: 'The core feature • matching • had to be transparent for both sides. I designed a shared skill-tag system, visible to both, so the matching criteria are understandable and editable by everyone.',
          },
        ],
      },
      {
        title: 'Constraints and trade-offs',
        blocks: [
          {
            type: 'callout',
            text: 'A strong constraint: the project ran over three weeks. We had to prioritise fast • define the critical screens (onboarding, profile, matching, messaging) and accept deferring secondary features to a V2.',
          },
          {
            type: 'p',
            text: 'The built-in messaging was where the two roles meet: the only place the two user types interact directly. It had to be simple, with no ambiguity about who started the conversation and why. A connection context visible in every conversation • the offer or profile that triggered the first contact.',
          },
        ],
      },
    ],
    learnings:
      'Two-sided marketplaces are among the most demanding exercises in product design, because a bad decision on the supply side immediately hits the demand side • and vice versa. This project taught me to map the tensions before designing, and to find patterns that solve both sides at once rather than compromising one for the other.',
  },

  // ─── 8. Practitioner Dashboard ─────────────────────────────────────────────
  {
    id: '8',
    slug: 'dashboard-praticien',
    title: 'Practitioner Dashboard • managing consultations',
    tagline: 'Replacing four scattered tools with one space that holds up',
    description:
      'A custom Notion dashboard for a self-employed health practitioner • bringing the calendar, patient tracking, invoicing and consultation notes together in one coherent space.',
    coverImage: null,
    tags: ['Freelance'],
    caseStudyUrl: null,
    featured: false,
    role: 'Notion Designer',
    company: 'Freelance client',
    period: 'Dec 2024 • Jan 2025',
    status: 'Delivered',
    metrics: [
      { value: '4→1', label: 'tools replaced by a single space' },
      { value: '6 wks', label: 'of use before positive client feedback' },
    ],
    intro:
      "A self-employed health practitioner running their practice across a paper diary, an Excel spreadsheet for invoicing, a notes app, and sticky notes for patient tracking. They wanted to simplify • not to digitise for the sake of it, but to have a single place where everything lives, accessible from any device.",
    sections: [
      {
        title: "Framing: understanding the practitioner's day-to-day",
        blocks: [
          {
            type: 'p',
            text: 'Before touching Notion, I spent an hour mapping the real workflow: how does a day of consultations start? What wastes time? What can\'t go away even if it\'s a constraint (legal obligations, patient data confidentiality)?',
          },
          {
            type: 'list',
            items: [
              'The main pain point: finding a patient\'s information before a consultation (history, last session, notes) took 5 to 10 minutes every time',
              'Second point: manual invoicing at month-end and re-keying data from the paper diary into Excel, with a constant risk of things slipping through',
              'A non-negotiable constraint: no named patient data could be stored in Notion (GDPR, medical confidentiality). The system had to work with anonymised identifiers',
            ],
          },
        ],
      },
      {
        title: 'Architecture of the Notion space',
        blocks: [
          {
            type: 'p',
            text: "The space was built around three linked databases: Patients (anonymised), Consultations, and Invoicing. A Dashboard view on the home page sums up the day's information: scheduled consultations, those awaiting notes, and invoices to issue.",
          },
          {
            type: 'callout',
            text: 'The guiding principle: each piece of information should be entered only once. The relations between the databases do the rest • a consultation automatically creates a linked entry in invoicing, with no re-keying.',
          },
          {
            type: 'list',
            items: [
              'Home page: a day view with consultations filtered by date + summary counters',
              'Patients database: records with history, consultation frequency, and a log of past sessions',
              'Consultations database: a standardised note template, a link to the patient record, duration, type',
              'Invoicing database: generated automatically from the consultations, with payment status',
            ],
          },
        ],
      },
      {
        title: 'Adoption and training',
        blocks: [
          {
            type: 'p',
            text: "The deliverable wasn't a Figma or a document • it was a working Notion space with pre-structured databases, test entries, and a 15-minute tutorial video recorded for the client. The client wasn't a Notion user • the learning curve had to be near zero.",
          },
          {
            type: 'p',
            text: 'Six weeks after delivery, the feedback: the space was used daily, monthly invoicing now took 20 minutes instead of 2 hours, and not a single appointment had been missed since rollout.',
          },
        ],
      },
    ],
    learnings:
      "Designing for a non-technical user means designing for real constraints, not for the tool's theoretical possibilities. Notion can do complex things • but if the end user doesn't understand why they have to click there, the system won't be used. This project reminded me that the value of a good information system comes, above all, from its adoption rate.",
  },

  // ─── 9. Strategy Dashboard ─────────────────────────────────────────────────
  {
    id: '9',
    slug: 'dashboard-strategie',
    title: 'Strategy & Finance Dashboard',
    tagline: 'Turning a spreadsheet into a strategic steering tool',
    description:
      'A Notion dashboard for the strategic and financial tracking of a freelance business • a consolidated view of revenue, pipeline and goals in one actionable space.',
    coverImage: null,
    tags: ['Freelance'],
    caseStudyUrl: null,
    featured: false,
    role: 'Notion Designer',
    company: 'Freelance client',
    period: 'Aug 2024',
    status: 'Delivered',
    metrics: [
      { value: '3 days', label: 'of design and delivery' },
      { value: '4 views', label: 'to see it all: revenue, pipeline, goals' },
    ],
    intro:
      'A freelancer with a well-established business but a fuzzy view of their actual situation: how much they\'d invoiced this month, how much was still awaiting payment, how many prospects were in the pipe. The data existed in different places • the challenge was to connect it in a space that gives an instant, actionable read.',
    sections: [
      {
        title: 'The problem: data that means nothing in isolation',
        blocks: [
          {
            type: 'p',
            text: 'A freelancer running everything alone wears several hats at once: provider, salesperson, accountant, strategist. The risk: being so deep in the day-to-day that you no longer step back to look at the overall trajectory. Is the annual target reachable? Should you sign more projects this month or focus on the deliverables in progress?',
          },
          {
            type: 'list',
            items: [
              'Invoiced revenue vs monthly target: a gap visible in real time, not at month-end',
              'Sales pipeline: leads in discussion, proposals sent, projects signed, in progress, delivered',
              "Forecast cash flow: what's signed but not yet invoiced, what's invoiced but not yet paid",
              'Quarterly retrospective: a dedicated space to step back over the past three months',
            ],
          },
        ],
      },
      {
        title: 'Architecture and database logic',
        blocks: [
          {
            type: 'p',
            text: 'Two central databases: Projects (with status, amount, dates) and Invoices (linked to projects, with payment status). Calculated properties do the work: current-month revenue, pending revenue, percentage of target reached.',
          },
          {
            type: 'callout',
            text: "The main dashboard is a Notion page with no database of its own • it's purely filtered views of the two databases, arranged so each section answers one specific question. The readability comes from the layout, not from the complexity of the data.",
          },
          {
            type: 'p',
            text: 'The pipeline view (a kanban by status) gives an instant sales read. The invoicing view (a table with month filters) gives the financial read. The dashboard view brings both together with key indicators at the top of the page.',
          },
        ],
      },
      {
        title: 'What it changes in practice',
        blocks: [
          {
            type: 'p',
            text: "The promise of this kind of system isn't to save time on data entry • it's to make decisions clearer. When you can see 80% of the monthly target is reached by the 15th, you can afford to turn down a poorly scoped project. When you see the pipeline is empty, you know you need to prospect now, not in three weeks.",
          },
          {
            type: 'p',
            text: 'Delivery included a 30-minute handover session and a short guide to the monthly updates • what to do, when, and how to read the numbers shown.',
          },
        ],
      },
    ],
    learnings:
      "Designing steering tools means understanding how the person makes their decisions, not just what data they have. Two freelancers with the same metrics can need very different visualisations depending on how they work. This project was short (three days) but dense with framing questions • and it's that framing that made the tool still in use a week after delivery.",
  },
]

export const PROJECTS: Record<Lang, ProjectDetail[]> = {
  fr: PROJECTS_FR,
  en: PROJECTS_EN,
}

const ABOUT_FR: AboutContent = {
  bio: "Product Designer & Lead Design System chez Waalaxy. Mon point d'entrée c'est toujours l'utilisateur : ce qu'il fait, ce qu'il évite, ce qu'il ne sait pas encore formuler. C'est là que se cachent les décisions qui font bouger les chiffres.\n\n  Mon chien, lui, vient au bureau et réclame toujours son accès Figma.",
  experiences: [
    {
      id: 'e1',
      company: 'Waalaxy · CDI · Montpellier',
      role: 'Lead Design System',
      period: 'Nov. 2023 • Présent',
      description:
        "Construction, maintien et gouvernance du Design System from scratch. Roadmap, management des devs front DS, bibliothèque de composants Figma/Storybook ISO, documentation et accompagnement des équipes pour l'adoption.",
    },
    {
      id: 'e2',
      company: 'Waalaxy · CDI · Montpellier',
      role: 'Product Designer',
      period: 'Fev. 2023 • Présent',
      description:
        "Recherche utilisateur, conception d'expériences pour des centaines de milliers d'utilisateurs, définition des parcours clés de l'app et priorisation, mise en place des prototypes pour pouvoir tester rapidement des idées de parcours.",
    },
    {
      id: 'e3',
      company: 'Gowya Studio · Freelance · Paris',
      role: 'Brand & Web Designer',
      period: 'Avr. 2021 • Août 2023',
      description:
        "Création de branding et landing page WordPress pour petits commerces et restaurants. UX Research, maquettage app ou SaaS et accompagnement client de A à Z  ",
    },
    {
      id: 'e4',
      company: 'SOS Accessoire · Alternance · Versailles',
      role: 'UX/UI Designer',
      period: 'Sept. 2020 • Août 2022',
      description:
        "Solo designer de la boîte. Refonte de 2 sites de marque, maquettage, intégration et maintien WordPress. Création d'une bibliothèque de composants pour uniformiser les interfaces et accélérer les développements.",
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
      degree: 'M2 Direction Artistique et de la Création · 17,5/20',
      year: '2022',
    },
    {
      id: 'f4',
      school: 'Sup de Pub · Paris',
      degree: 'Bachelor Communication Digitale et Création',
      year: '2020',
    },
  ],
}

const ABOUT_EN: AboutContent = {
  bio: "Product Designer & Lead Design System at Waalaxy. I always start with the user — what they do, what they avoid, what they can't quite put into words yet. That's where the decisions that move the numbers are hiding.\n\n  My dog, meanwhile, comes to the office and still insists on his own Figma seat.",
  experiences: [
    {
      id: 'e1',
      company: 'Waalaxy · Full-time · Montpellier',
      role: 'Lead Design System',
      period: 'Nov 2023 • Present',
      description:
        "Built, maintained and governed the Design System from scratch. Roadmap, managing the front-end DS developers, an ISO Figma/Storybook component library, documentation, and supporting teams through adoption.",
    },
    {
      id: 'e2',
      company: 'Waalaxy · Full-time · Montpellier',
      role: 'Product Designer',
      period: 'Feb 2023 • Present',
      description:
        "User research, designing experiences for hundreds of thousands of users, defining and prioritising the app's key flows, and building prototypes to test ideas fast.",
    },
    {
      id: 'e3',
      company: 'Gowya Studio · Freelance · Paris',
      role: 'Brand & Web Designer',
      period: 'Apr 2021 • Aug 2023',
      description:
        "Branding and WordPress landing pages for small businesses and restaurants. UX research, app and SaaS mockups, and end-to-end client support.",
    },
    {
      id: 'e4',
      company: 'SOS Accessoire · Apprenticeship · Versailles',
      role: 'UX/UI Designer',
      period: 'Sept 2020 • Aug 2022',
      description:
        "Sole designer in the company. Redesigned two brand sites, handled mockups, integration and WordPress upkeep, and built a component library to unify the interfaces and speed up development.",
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
      degree: 'MA Art Direction & Creation · 17.5/20',
      year: '2022',
    },
    {
      id: 'f4',
      school: 'Sup de Pub · Paris',
      degree: 'Bachelor in Digital Communication & Creative',
      year: '2020',
    },
  ],
}

export const ABOUT: Record<Lang, AboutContent> = {
  fr: ABOUT_FR,
  en: ABOUT_EN,
}

export function getAllProjects(lang: Lang): ProjectDetail[] {
  return PROJECTS[lang]
}

export function getFeaturedProjects(lang: Lang): ProjectDetail[] {
  return PROJECTS[lang].filter((p) => p.featured).slice(0, 3)
}

export function getProjectBySlug(slug: string, lang: Lang = 'fr'): ProjectDetail | undefined {
  return PROJECTS[lang].find((p) => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return PROJECTS_FR.map((p) => p.slug)
}

export function getAbout(lang: Lang): AboutContent {
  return ABOUT[lang]
}
