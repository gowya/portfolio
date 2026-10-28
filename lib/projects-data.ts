import type { ProjectDetail, AboutContent, Lang } from './types'

const PROJECTS_FR: ProjectDetail[] = [
  // ─── 8. Vela ───────────────────────────────────────────────────────────────
  {
    id: '8',
    slug: 'vela',
    title: "Un SaaS santé conçu et codé seule avec l'IA",
    tagline: 'Le logiciel de suivi patient qui ne se fait jamais remarquer pendant la consultation',
    description:
      "Un SaaS de gestion de patientèle pour psys, sexologues et coachs. Marque, design system, front Next.js, base de données, conformité RGPD et tests utilisateurs : tout, de A à Z, avec Claude Code branché sur le design system.",
    coverImage: '/projects/vela/vela-film-poster.jpg',
    coverVideo: '/projects/vela/vela-film.mp4',
    tags: ['IA', 'Design System', 'Discovery', 'Freelance'],
    caseStudyUrl: null,
    featured: true,
    role: 'Product Designer & développeuse',
    company: 'Vela, projet perso',
    period: '2026',
    status: 'MVP testé, archivé en oct. 2026',
    team: 'Solo, avec Claude Code',
    metrics: [
      { value: '100%', label: 'conçu et codé avec Claude Code' },
      { value: '2', label: 'tests utilisateurs, dont une praticienne en activité' },
      { value: '0', label: 'valeur hard-codée dans le code' },
    ],
    intro:
      "Les praticiens de l'accompagnement (psys, sexologues, hypnothérapeutes, coachs) qui viennent de lancer leur activité suivent leurs patients entre un carnet, Notion et leur mémoire. Les gros logiciels connus existent, mais ils coûtent cher, ils sont froids et pensés pour des cabinets installés. Avec quatre ou cinq patients en suivi, impossible de justifier l'abonnement. Vela, c'est l'outil que j'ai imaginé pour eux : aussi rigoureux qu'un logiciel médical, aussi silencieux qu'un carnet de notes. Et je l'ai fait de bout en bout, seule.",
    sections: [
      {
        title: 'Une marque qui sait se taire',
        blocks: [
          {
            type: 'p',
            text: "Vela vient du latin velum, le voile. Le logo est un arc ouvert, tracé d'un seul geste, qui ne se referme jamais : une présence en retrait, disponible. Tout le reste découle de cette idée. Territoire de référence : Notion, Linear, Cron. Des outils pro qui inspirent confiance par leur discrétion.",
          },
          {
            type: 'list',
            items: [
              "Une palette chaude et sobre : Sable en fond, Encre pour le texte, Sauge pour les états discrets, et le Vin comme seule note de couleur forte.",
              "Fraunces réservée à la marque, Inter pour toute l'interface, IBM Plex Mono pour les données factuelles (dates, identifiants). Le serif ne rentre jamais dans le produit.",
              "Un ton direct : phrases courtes, vocabulaire du praticien, zéro point d'exclamation, zéro emoji dans l'interface.",
            ],
          },
          {
            type: 'callout',
            text: "Le Vin reste rare : un bouton principal, le logo, un lien. C'est cette rareté qui rend Vela discrète pendant la consultation, quand le praticien est concentré sur la personne en face.",
          },
          {
            type: 'img',
            src: '/projects/vela/app-dashboard.jpg',
            caption: "Le tableau de bord : les rendez-vous du jour et de la semaine, deux actions, rien d'autre",
          },
        ],
      },
      {
        title: 'Un design system avant le premier écran',
        blocks: [
          {
            type: 'p',
            text: "Après WAATOM, je voulais vérifier une intuition : un DS posé dès le départ change la vitesse de tout le reste. Base shadcn/ui en marque blanche, tokens sémantiques dans un seul fichier, et les couleurs du brand book réassignées aux variables existantes. Toute nouvelle interface compose avec les composants en place avant d'en créer un nouveau.",
          },
          {
            type: 'p',
            text: "Le design system est branché sur Claude Code via MCP. Quand je génère un écran, l'IA pioche dans les vrais tokens et les vrais composants. Résultat : un front cohérent sans repasser derrière pour corriger des couleurs hors token ou des marges approximatives.",
          },
          {
            type: 'img',
            src: '/projects/vela/app-consultation-panel.jpg',
            caption: "Une consultation ouverte, la fiche patient à côté : tout le contexte sans changer de page. Une demande du test #1, livrée.",
          },
          {
            type: 'grid',
            images: [
              { src: '/projects/vela/app-agenda.jpg', caption: "L'agenda de la semaine, alimenté par les types de rendez-vous" },
              { src: '/projects/vela/app-patients.jpg', caption: 'La patientèle, avec les champs personnalisés en colonnes' },
            ],
          },
          {
            type: 'img',
            src: '/projects/vela/app-templates.jpg',
            caption: 'Les modèles de consultation : chaque séance part d\'une trame déjà structurée',
          },
        ],
      },
      {
        title: 'Designer jusque dans le code',
        blocks: [
          {
            type: 'p',
            text: "Vela traite des données de santé. Chaque décision technique est donc aussi une décision de design, parce qu'elle touche à la confiance.",
          },
          {
            type: 'list',
            items: [
              "Next.js, TypeScript, PostgreSQL. Chaque requête est filtrée par praticien, et des tests d'intégration vérifient qu'un praticien ne voit jamais les patients d'un autre.",
              "Consentement RGPD obligatoire à l'inscription, et 5 pages légales rédigées puis intégrées : CGU, confidentialité, mentions légales, cookies, accord de sous-traitance.",
              "Monitoring d'erreurs sans replay de session : une capture d'écran pourrait contenir une note de consultation. Les corps de requête sont supprimés avant chaque envoi.",
            ],
          },
        ],
      },
      {
        title: 'Deux tests utilisateurs, deux leçons',
        blocks: [
          {
            type: 'h3',
            text: 'Test 1 : un dev pour éprouver la robustesse',
          },
          {
            type: 'p',
            text: "Premier test avec un profil technique, volontairement loin de la persona. Son regard a servi de crash test : garde-fous à l'inscription, gestion de la sécurité, validation des données. La session a sorti deux bugs critiques avant qu'un vrai praticien ne tombe dessus : une consultation dupliquée à chaque aller-retour de navigation, et des rendez-vous qu'on pouvait planifier dans le passé.",
          },
          {
            type: 'h3',
            text: 'Test 2 : une vraie praticienne',
          },
          {
            type: 'p',
            text: "Deuxième test avec Astrid Macret, sexologue en début d'activité, qui suivait ses patients entre un carnet et Notion. Parcours complet réussi sans blocage : inscription, création d'un patient, première consultation. Les champs personnalisés et le vert Sauge ont fait mouche. Les frictions restantes étaient précises : pas de recherche patients, une liste de spécialités floue, la différence entre modèle et consultation à clarifier.",
          },
          {
            type: 'quote',
            text: "J'avais peur de ne pas m'y retrouver, mais finalement c'est super clair.",
            source: 'Astrid Macret, sexologue, test utilisateur #2',
          },
          {
            type: 'callout',
            text: "Le vrai mur est apparu à la fin de la session : l'hébergement de données de santé certifié HDS. Démarches commerciales, coûts élevés, incompatibles avec un abonnement simple. « On ne peut pas juste payer 10€/mois ? »",
          },
        ],
      },
    ],
    learnings:
      "Vela m'a fait tenir toute la chaîne, de la marque à la base de données. J'en retiens trois choses. Un test avec un profil hors cible reste utile, à condition de savoir ce qu'il valide vraiment : ici, la robustesse avant le métier. Construire avec l'IA va vite, alors les garde-fous doivent être testés tout aussi vite. Et dans la santé, la conformité se conçoit dès le premier écran, au même titre que le parcours.",
  },

  // ─── 10. Phone Verif ───────────────────────────────────────────────────────
  {
    id: '10',
    slug: 'phone-verif',
    title: 'Phone Verif : sortir une app vibe-codée du look par défaut',
    tagline: "Le produit était déjà bon. Maintenant, il en a l'air.",
    description:
      "Refonte du haut de page d'une API de vérification de numéro par WhatsApp, construite avec Lovable. Audit mesuré, deux passes de design, maquette codée et animée avec GSAP : 14 tailles de texte ramenées à 7, 36 couleurs ramenées à 8 tokens, un seul bouton principal.",
    coverImage: '/projects/phone-verif-v3.png',
    tags: ['Design System', 'Freelance'],
    caseStudyUrl: null,
    featured: false,
    role: 'Product Designer • design & code',
    company: 'Phone Verif',
    period: 'Oct. 2026',
    status: 'Maquette codée et animée',
    metrics: [
      { value: '14 → 7', label: 'tailles de texte' },
      { value: '36 → 8', label: 'couleurs, passées en tokens' },
      { value: '3 → 1', label: 'style de bouton principal' },
      { value: '4 → 2', label: "appels à l'action en haut de page" },
    ],
    intro:
      "Phone Verif est une API de vérification de numéro de téléphone par WhatsApp : l'utilisateur envoie un message, le service reçoit son numéro prouvé. Pas de SMS, pas de code à taper. Un très bon produit, des chiffres mesurés en production, construit avec Lovable. Mais une page d'accueil avec le look par défaut des apps générées par IA. Pour un produit qui vend de la confiance, ça coûte cher. J'ai audité la page, puis refait le haut de page en deux passes, directement en code.",
    sections: [
      {
        title: "L'audit : mesurer avant de juger",
        blocks: [
          {
            type: 'p',
            text: "J'ai relevé les styles calculés de la page dans le navigateur, pour juger sur des mesures. Le fond était solide : une promesse claire (« Stop asking phone numbers. Start receiving proof. »), un comparatif honnête, des chiffres mesurés en prod. C'est la forme qui grignotait la confiance.",
          },
          {
            type: 'list',
            items: [
              "Les marqueurs du look IA : palette Tailwind par défaut (slate, emerald, violet), titre en dégradé vert vers violet, dark mode avec halos, une pastille au-dessus de chaque section, une grille de cartes à icônes, Inter partout.",
              "Aucun système visuel : 14 tailles de texte, 16 couleurs de texte, 20 couleurs de fond, 6 rayons d'arrondi et 5 dégradés sur une seule page.",
              "Trois styles de bouton principal, dont un bleu qu'on ne retrouve nulle part ailleurs alors que la marque est verte. Et 4 appels à l'action en concurrence dès le premier écran.",
              "Des bugs visibles : libellés désynchronisés dans la section animée « How it works », compteurs qui affichent « 0,0 % » au premier passage, les mêmes chiffres répétés trois fois.",
            ],
          },
          {
            type: 'img',
            src: '/projects/phone-verif/avant.png',
            caption: 'Avant : la page en production, avec le look par défaut',
          },
        ],
      },
      {
        title: 'Première passe : le reçu',
        blocks: [
          {
            type: 'p',
            text: "Le hero devait parler à deux publics : le développeur qui intègre l'API et la personne qui signe. J'ai exploré deux pistes. A, le reçu : un ticket de preuve perforé qui montre ce que le produit vend (un numéro vérifié, rien de tapé, 0,01 € facturé au succès). B, le parcours : les trois étapes réelles, du QR code à la réponse JSON. J'ai gardé les deux : A en hero, B juste en dessous, à la place de la section animée buguée.",
          },
          {
            type: 'img',
            src: '/projects/phone-verif/v2.png',
            caption: 'Première passe : le reçu de preuve, sur papier crème',
          },
        ],
      },
      {
        title: 'Deuxième passe : sortir du look IA « de bon goût »',
        blocks: [
          {
            type: 'p',
            text: "En relisant cette première version trois semaines plus tard, j'ai vu le problème : elle avait quitté le look IA de 2024 pour celui de 2026. Papier crème, titre à moitié en italique, mono sur toutes les petites mentions, reçu perforé avec tampon penché, quatre chiffres en colonnes égales. C'est exactement ce que sort une IA quand on lui demande une page « éditoriale ».",
          },
          {
            type: 'callout',
            text: "Une page faite à la main tient à quatre choses : une idée propre poussée loin, le vrai produit à l'écran, un accident volontaire dans la grille, et une voix. J'ai tout repris avec cette grille de lecture.",
          },
          {
            type: 'list',
            items: [
              "Des aplats francs : le vert de marque pour le hero et le témoignage, l'encre pour les chiffres, le blanc pour le parcours. Le vert est calé pour que le texte encre passe à 5,2:1.",
              "Une seule famille, Archivo : serrée et très grasse pour les titres en affiche, normale pour le texte. Le titre change de couleur à mi-parcours, sans italique.",
              "La vraie démo dans le hero : un grand QR code scannable. C'est le seul élément qui sort de la grille, posé à cheval sur la section suivante.",
              "Un seul chiffre en très grand (62,9 % de conversion), les trois autres en liste à côté.",
              "« How it works » devient « One session, timed. » : une règle de 15 secondes à l'échelle et trois étapes repérées par leur temps. Le grand vide entre 0 et 11,6 s raconte le produit mieux qu'un paragraphe.",
              "8 couleurs en tokens, 7 tailles de texte, un seul arrondi (la bulle WhatsApp), des filets de 2 px. Aucune valeur en dur dans les composants.",
            ],
          },
        ],
      },
      {
        title: 'Le mouvement au service du propos',
        blocks: [
          {
            type: 'p',
            text: "Dernière couche : des animations GSAP (ScrollTrigger et SplitText), avec une règle simple. Chaque animation raconte le produit.",
          },
          {
            type: 'list',
            items: [
              "Une barre de scan balaie le QR code en boucle, comme un téléphone qui le lit.",
              "Au scroll, la règle chronométrée reste collée en haut de l'écran et se remplit. Quand le chrono atteint une étape, son temps passe au vert.",
              "Le 62,9 % surgit caractère par caractère. Le vrai chiffre est révélé d'emblée, sans compteur qui part de zéro : c'était un des bugs de la page d'origine.",
              "La citation du client s'allume mot à mot, au rythme de la lecture.",
            ],
          },
          {
            type: 'img',
            src: '/projects/phone-verif/scroll-v3.gif',
            caption: "L'avant, puis la nouvelle version animée, du hero au témoignage",
          },
          {
            type: 'p',
            text: "La maquette est livrée en HTML avec ses tokens, recettée en desktop, tablette et mobile. Avec le réglage « réduire les animations », rien ne bouge et tout s'affiche d'emblée.",
          },
        ],
      },
    ],
    learnings:
      "L'IA code vite, et elle a désormais aussi un goût par défaut. Ce projet m'a appris à me méfier de ma propre première version : quand elle ressemble à ce qu'un outil sortirait seul, il faut une deuxième passe. Le reste tient toujours : un système minimal que l'IA pourra respecter aux prochains prompts, et des chiffres mesurés pour convaincre un fondateur.",
  },

  // ─── 1. Trial by Card ──────────────────────────────────────────────────────
  {
    id: '1',
    slug: 'trial-by-card',
    title: 'Essai avec carte bancaire : ×2,5 sur les abonnements Business',
    tagline: "Transformer un creux du flow d'entrée en machine à conversion",
    description:
      "Conception d'un flow de fin d'onboarding pour améliorer la valeur perçue de l'app : audit, A/B tests, contraintes légales et cognitives. Résultat : +25% d'utilisateurs qui ajoutent leur CB, et ×2,5 sur les premiers abonnements Business.",
    coverImage: '/projects/trial-by-card.png',
    tags: ['Conversion'],
    caseStudyUrl: null,
    featured: true,
    role: 'Product Designer & Lead Design System',
    company: 'Waalaxy',
    period: 'Oct. → Déc. 2025',
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
              "Benchmark sur Mobbin : les produits SaaS les plus performants sur ce pattern partagent 3 principes (réassurance maximale, sortie visible, engagement cognitif minimal).",
            ],
          },
          {
            type: 'callout',
            text: "Rentrer sa carte bancaire, c'est un acte chargé émotionnellement. La vraie question dans la tête de l'utilisateur : \"est-ce que je fais confiance à ce produit pour ne pas me piéger ?\" Notre hypothèse : si on réduit la charge cognitive au minimum, qu'on rend la sortie évidente, et qu'on insiste sur le \"0€\" comme information principale, on peut significativement augmenter le taux de complétion.",
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
            caption: "Version Business : A/B test 50/50 entre le plan Business et le plan Advanced",
          },
          {
            type: 'img',
            src: '/projects/trial-by-card/image-1.png',
            caption: 'Version Advanced',
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
        title: 'Nouvelles itérations, mai 2026',
        blocks: [
          {
            type: 'p',
            text: "Le trial by card a continué d'évoluer. La refonte graphique aligne le flow sur la nouvelle direction visuelle de la marque et sur les derniers composants Stripe, plus minimalistes, plus simples à remplir. Les tests tournaient encore à mon départ, avec une question ouverte : vaut-il mieux demander la carte bancaire d'emblée, ou après une première étape d'engagement ?",
          },
          {
            type: 'img',
            src: '/projects/trial-by-card/image-3.png',
            caption: 'Refonte graphique : Version essai avec carte bancaire',
          },
          {
            type: 'p',
            text: "Les apprentissages des A/B tests ont confirmé que l'Advanced convertit mieux comme premier abonnement. Le flow a été simplifié : moins d'information, une meilleure intégration dans le flow, ajout de cas réels d'utilisateurs en social proof.",
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
            text: "Après la refonte, on a lancé un A/B test : Trial by Card contre Trial sans carte. La nouvelle version visuelle a généré +25% d'utilisateurs qui ajoutent leur carte bancaire. Un écart assez net pour qu'on décide de ne pas prendre le risque d'impacter le business à court terme.",
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
      "Ce projet m'a confirmé quelque chose : la friction perçue est souvent plus grande que la friction réelle. Demander une CB, c'est techniquement 7 champs. Mais psychologiquement, c'est un acte de confiance. Mon boulot, c'était de gérer l'émotion autour de cet acte. L'autre apprentissage : ne pas supposer qu'on sait ce qui va convertir. L'Advanced qui surperforme sur le Business était contre-intuitif. Sans l'A/B test, on n'aurait pas su. Enfin : la vitesse était possible ici parce qu'on avait un Design System solide. Le DS n'était pas visible sur la prod, mais il était dans le délai hihi.",
  },

  // ─── 11. RSVP Party ────────────────────────────────────────────────────────
  {
    id: '11',
    slug: 'rsvp-party',
    title: "RSVP Party : une nouvelle manière d'inviter",
    tagline: "Si l'invitation c'est ça, ça va être quoi le jour J ?",
    description:
      "Un site d'invitation qui remplace le message WhatsApp, le sondage ou les 👍, et la liste de qui ramène quoi qu'on garde en tête. Les invités répondent en 10 secondes, voient qui vient, disent ce qu'ils ramènent et remplissent la playlist ; l'organisateur suit tout depuis une vue admin. L'objectif : créer l'effet wow avant même la fête.",
    coverImage: '/projects/rsvp-party.jpg',
    tags: ['Side project'],
    caseStudyUrl: 'https://rsvp-party-demo.vercel.app',
    featured: false,
    role: 'Product Designer • design & code',
    company: 'Projet perso, open source',
    period: 'Oct. 2026',
    status: 'En ligne • démo publique',
    metrics: [
      { value: '10 s', label: "pour répondre à l'invitation" },
      { value: '1 lien', label: 'à la place du message, du sondage et de la mémoire' },
      { value: '221 → 99 ko', label: 'de polices, malgré la 3D' },
      { value: 'MIT', label: 'repo public, en modèle réutilisable' },
    ],
    intro:
      "Inviter, aujourd'hui, c'est un message dans un groupe WhatsApp, avec un sondage ou un 👍 / 👎 à mettre sous le message. Et pour savoir qui ramène quoi, on compte sur sa mémoire (sauf pour un mariage, mais c'est un autre sport). Ça marche, mais ça ne donne envie à personne. RSVP Party part d'une autre idée : l'invitation est le premier moment de la fête. L'objectif est de créer l'effet wow avant que les invités n'arrivent, pour qu'ils viennent à fond, en se disant : « si le site d'invitation c'est ça, ça va être quoi le jour J ? ». Le projet est né d'un vrai site, conçu pour les 18 ans d'une proche, puis je l'ai transformé en modèle open source, avec une démo sur un événement fictif : les 30 ans de Camille.",
    sections: [
      {
        title: "Le problème : inviter, c'est devenu de la logistique",
        blocks: [
          {
            type: 'list',
            items: [
              "Côté invités : un message noyé dans le groupe, un pouce à mettre, et aucune idée de qui vient vraiment. Rien qui donne envie de bloquer la date.",
              "Côté organisateur : remonter le fil pour compter les 👍, relancer ceux qui n'ont pas réagi, et se souvenir de qui a dit qu'il ramenait quoi, pour ne pas se retrouver avec 12 paquets de chips et zéro gobelet.",
              "Et une adresse qui circule dans un lien WhatsApp, bien au-delà des invités.",
            ],
          },
          {
            type: 'callout',
            text: "Mon hypothèse : si l'invitation est aussi soignée que la fête, les invités répondent plus vite et arrivent déjà dedans. Le site doit donc faire deux choses à la fois : retirer toute la logistique à l'organisateur, et donner aux invités une première impression qui fait monter la hype.",
          },
        ],
      },
      {
        title: "Pour l'organisateur : tout au même endroit",
        blocks: [
          {
            type: 'p',
            text: "La vue admin est le cœur du produit pour celui qui organise. Elle remplace le décompte des 👍 et la liste qu'on garde en tête : une seule page, mise à jour en direct, protégée par un mot de passe.",
          },
          {
            type: 'img',
            src: '/projects/rsvp-party/desktop-admin.jpg',
            caption: "La vue admin : les réponses, qui ramène quoi, et qui a proposé quel son",
          },
          {
            type: 'list',
            items: [
              "Qui vient : les oui, les peut-être et les non, sans relance à faire.",
              "Qui ramène quoi : chaque invité coche ce qu'il apporte, avec une limite par truc fixée par l'organisateur (6 paquets de chips, pas 12).",
              "La playlist, avec le prénom de chaque personne qui a proposé un son.",
              "L'adresse protégée : elle n'est envoyée qu'aux invités qui ont répondu oui ou peut-être. Ceux qui répondent non ne la reçoivent jamais.",
            ],
          },
        ],
      },
      {
        title: 'Pour les invités : répondre en 10 secondes',
        blocks: [
          {
            type: 'p',
            text: "Le lien circule sur WhatsApp, presque tout le monde l'ouvre sur un téléphone. Répondre tient en un prénom et un tap : oui, peut-être ou non. Confettis, et la pastille du prénom vole jusqu'à la liste « Ils seront là ». Juste après, l'invité voit qui vient, choisit ce qu'il ramène, ajoute ses sons à la playlist (anonyme côté public) et l'événement à son agenda, adapté à son appareil.",
          },
          {
            type: 'img',
            src: '/projects/rsvp-party/mobile.jpg',
            caption: "Sur téléphone : le premier écran, les invités confirmés, le sondage et ses limites, la playlist",
          },
        ],
      },
      {
        title: "L'effet wow, pensé pour le pouce",
        blocks: [
          {
            type: 'p',
            text: "Sur téléphone, pas de survol : les effets réagissent au pouce, au scroll et à l'inclinaison. Le soleil se couche au fil du scroll, la boule disco 3D suit l'inclinaison du téléphone, un tiroir caché se tire au doigt. Le fond raconte une soirée : jaune en haut, orange au milieu, nuit étoilée à la fin. C'est un avant-goût de la fête, pas une page d'infos.",
          },
          {
            type: 'img',
            src: '/projects/rsvp-party/scroll.gif',
            portrait: true,
            caption: 'Le scroll : le ciel passe du jour à la nuit',
          },
          {
            type: 'img',
            src: '/projects/rsvp-party/desktop-bar.jpg',
            caption: "L'easter egg : un tap sur un cocktail ouvre la carte du bar et ses 20 cocktails dessinés",
          },
        ],
      },
      {
        title: 'Les choix qui ne se voient pas',
        blocks: [
          {
            type: 'list',
            items: [
              "La vie privée par défaut : l'adresse n'est envoyée qu'aux invités qui ont répondu oui ou peut-être, la playlist ne dit pas qui a proposé quoi, les prénoms du sondage restent dans l'admin.",
              "Léger malgré la 3D : polices réduites de 221 à 99 ko, 3D chargée pendant l'écran de chargement et rendue seulement quand elle est à l'écran, tiroir construit à la première ouverture.",
              "Accessible : les animations s'arrêtent avec « réduire les animations », les décors sont ignorés par les lecteurs d'écran, la boule disco a une version CSS si WebGL n'est pas disponible.",
              "Une démo sans risque : chaque visiteur peut tout essayer sans voir ce que tapent les autres, et ses ajouts s'effacent au bout de 2 jours.",
            ],
          },
          {
            type: 'callout',
            text: "Pour en faire un modèle, tout passe par un seul fichier de configuration (date, lieu, sections à la carte, dress code, sondage, textes) et un système de thèmes : couleurs aux noms neutres, polices, premier écran, animation signature, easter egg et voix du texte. Le premier thème est un anniversaire disco ; un mariage pourrait passer au vouvoiement sans toucher au reste.",
          },
        ],
      },
      {
        title: 'Et ensuite : des blocs pour chaque fête',
        blocks: [
          {
            type: 'p',
            text: "Les sections sont déjà à la carte. La suite, ce sont de nouveaux blocs pensés pour chaque type d'événement, toujours avec la même règle : retirer une corvée à l'organisateur, ou ajouter un moment de hype pour les invités.",
          },
          {
            type: 'list',
            items: [
              "Mariage : covoiturage (qui part d'où, combien de places), hébergements à proximité, choix du menu et allergies dans la réponse, programme du week-end, et « trouve ta table » le jour J.",
              "EVJF : sondage de dates, cagnotte avec la répartition des frais, et un programme surprise qui se dévoile au fil du compte à rebours.",
              "Baby shower et baptême : pronostics (date, prénom, poids), liste de naissance, et des mots pour l'enfant à ouvrir plus tard.",
              "Pour toutes les fêtes : des indices qui se débloquent avant le jour J, et après la fête, un mur de photos partagé pour que l'effet continue.",
            ],
          },
          {
            type: 'link',
            href: 'https://rsvp-party-demo.vercel.app',
            label: 'Voir la démo en ligne',
          },
          {
            type: 'link',
            href: 'https://github.com/gowya/rsvp-party',
            label: 'Voir le code sur GitHub',
          },
        ],
      },
    ],
    learnings:
      "Une invitation n'est pas qu'un sondage : c'est le premier point de contact avec l'événement, et elle donne le ton de tout le reste. Concevoir pour une vraie fête, avec de vrais invités, oblige aussi à trancher vite : j'ai retiré des effets qui déroutaient s'ils ne marchaient pas du premier coup. Et transformer un projet perso en modèle réutilisable, c'est un exercice de design system à petite échelle : séparer ce qui est commun de ce qui est propre à un thème.",
  },

  // ─── 2. Parcours d'upgrade ─────────────────────────────────────────────────
  {
    id: '2',
    slug: 'parcours-upgrade',
    title: "Modales d'upgrade contextuelles : de 2% à ~10%",
    tagline: 'Passer de 2% à environ 10% de conversion avec des modales contextuelles',
    description:
      "Refonte du parcours d'upgrade : personnaliser le message selon la situation de l'utilisateur.",
    coverImage: '/projects/parcours-upgrade.png',
    tags: ['Conversion', 'Discovery'],
    caseStudyUrl: null,
    featured: true,
    role: 'Product Designer & Lead Design System',
    company: 'Waalaxy',
    period: 'Oct. → Nov. 2025',
    status: 'Livré en production',
    team: '1 PM · 2 devs · 1 designer',
    metrics: [
      { value: '~10%', label: 'de conversion depuis les CTA contextuels' },
      { value: '2%', label: 'taux de conversion initial (page tarifs)' },
      { value: '13,61%', label: "ouverture modale depuis CTA in-app" },
      { value: '3 CTA', label: 'personnalisés selon le flow de chaque user' },
    ],
    intro:
      "Waalaxy monétise via plusieurs plans et des add-ons. Le parcours d'upgrade existant avait un défaut structurel : l'utilisateur qui voulait passer à un plan supérieur était immédiatement redirigé vers le panier, sans jamais comprendre ce qu'il allait gagner. L'abandon arrivait avant le paiement, au moment où l'utilisateur ne trouvait pas de réponse à sa question implicite : \"est-ce que ça vaut vraiment le coup pour ma situation ?\"",
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
            text: "En prod, les boutons d'upgrade ramenaient systématiquement sur la page des tarifs, sans aucun lien avec ce que l'utilisateur était en train d'essayer de faire. Même wording pour tout le monde. Même structure. Aucune hiérarchie. Un utilisateur qui vient de se heurter à un quota dépassé a besoin d'une seule information : \"voici pourquoi le plan supérieur résout ton problème maintenant\".",
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
              "Pour rappel, la baseline de départ était le taux de conversion depuis la page de pricing, à 2%. Le parcours contextuel le dépasse de plus de 7 points.",
            ],
          },
          {
            type: 'img',
            src: '/projects/parcours-upgrade/Capture_decran_2026-01-22_a_13.27.48.png',
            caption: 'Données Mixpanel post-release : funnel contextuel vs paywall classique',
          },
        ],
      },
    ],
    learnings:
      "Ce projet m'a confirmé quelque chose sur les parcours de conversion : le vrai blocage se cachait avant le prix et avant le formulaire de paiement, dans l'absence de lien entre le problème de l'utilisateur et la solution proposée. Une modale qui s'ouvre sans contexte crée de la méfiance. La refonte de l'order summary illustre un autre principe : la transparence réduit la friction. Montrer le calcul du prorata, c'est une ligne de plus à afficher. Et derrière, des dizaines de tickets support en moins et un utilisateur qui passe au paiement en confiance.",
  },

  // ─── 3. CSV Import ─────────────────────────────────────────────────────────
  {
    id: '3',
    slug: 'csv-import',
    title: 'Import CSV : 83,5% de réussite au 1er essai',
    tagline: "De l'URL LinkedIn unique au mapping multi-colonnes",
    description:
      "83,5% des utilisateurs réussissent leur mapping du premier coup. Le résultat d'un flow conçu autour de ce que les gens font vraiment.",
    coverImage: '/projects/csv-import.png',
    tags: ['Discovery'],
    caseStudyUrl: null,
    featured: false,
    role: 'Product Designer & Lead Design System',
    company: 'Waalaxy',
    period: 'Déc. 2024',
    status: 'Livré en production',
    team: '1 PM · 1 EM · 2 devs · 1 designer',
    metrics: [
      { value: '83,5%', label: 'réussissent leur mapping au 1er essai' },
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
            text: "Volontairement simple : choix de la liste d'import et upload par drag&drop. Aucune décision à prendre : si le fichier est valide, on passe automatiquement à l'étape suivante. Le parser gère les cas complexes en arrière-plan sans les exposer à l'utilisateur.",
          },
          {
            type: 'img',
            src: '/projects/csv-import/image.png',
            caption: "Étape 1 : upload drag&drop",
          },
          {
            type: 'h3',
            text: "Étape 2 : Match data, l'écran central",
          },
          {
            type: 'p',
            text: "3 colonnes : les propriétés détectées dans le CSV (gauche), la propriété Waalaxy correspondante (centre), et une preview des vraies données (droite).",
          },
          {
            type: 'list',
            items: [
              "Le nombre de prospects détectés est mis en avant dans le titre, pour rassurer l'utilisateur qu'il a bien le bon fichier et lui permettre de détecter immédiatement une erreur.",
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
        title: 'Résultats, 3 mois après la release',
        blocks: [
          {
            type: 'quote',
            text: "Les utilisateurs peuvent désormais importer prénom, nom, job title, company, region, numéro de téléphone en plus des classics URL LinkedIn et emails. On a revu le flow d'import pour agrandir la zone de drag and drop, expliciter les options avancées, et ajouter une option 'Overwrite existing data' pour mettre à jour les data des prospects existants via CSV.",
            source: 'CPO Waalaxy, message de release',
          },
          {
            type: 'list',
            items: [
              "83,5% des utilisateurs réussissent leur mapping du premier coup.",
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
    status: 'Livré en production',
    metrics: [
      { value: '4% à 7%', label: "taux de réponse moyen d'une campagne de prospection" },
      { value: '15% à 20%', label: "l'objectif : ×3 sur le taux de réponse moyen" },
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

  // ─── 5. Refacto Campaign Manager ───────────────────────────────────────────
  {
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

  // ─── 6. Design System ──────────────────────────────────────────────────────
  {
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
            type: 'p',
            text: "Ensuite, structurer la library en couches : les fondations (couleurs, typo, spacing, radius, tous en variables Figma), les composants core, puis les composants plus spécifiques au métier. Chaque couche a sa raison d'être, chaque token a une seule source de vérité. C'est la base qui permet à tout le reste de tenir debout, même quand la couleur de marque change du jour au lendemain.",
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

  // ─── 7. SaaS recrutement ───────────────────────────────────────────────────
  {
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

]

const PROJECTS_EN: ProjectDetail[] = [
  // ─── 8. Vela ───────────────────────────────────────────────────────────────
  {
    id: '8',
    slug: 'vela',
    title: 'A health SaaS designed and coded solo with AI',
    tagline: 'The patient-tracking tool that never gets noticed during a session',
    description:
      'A practice management SaaS for psychologists, sexologists and coaches. Brand, design system, Next.js front end, database, GDPR compliance and user testing: all of it, end to end, with Claude Code plugged into the design system.',
    coverImage: '/projects/vela/vela-film-poster.jpg',
    coverVideo: '/projects/vela/vela-film.mp4',
    tags: ['AI', 'Design System', 'Discovery', 'Freelance'],
    caseStudyUrl: null,
    featured: true,
    role: 'Product Designer & developer',
    company: 'Vela, personal project',
    period: '2026',
    status: 'MVP tested, archived Oct 2026',
    team: 'Solo, with Claude Code',
    metrics: [
      { value: '100%', label: 'designed and coded with Claude Code' },
      { value: '2', label: 'user tests, including one practising therapist' },
      { value: '0', label: 'hard-coded values in the code' },
    ],
    intro:
      "Care practitioners (psychologists, sexologists, hypnotherapists, coaches) who have just started their practice track their patients across a notebook, Notion and their memory. The big, well-known tools exist, but they're expensive, cold and built for established clinics. With four or five patients in follow-up, the subscription is impossible to justify. Vela is the tool I imagined for them: as rigorous as medical software, as quiet as a notebook. And I built it end to end, on my own.",
    sections: [
      {
        title: 'A brand that knows how to stay quiet',
        blocks: [
          {
            type: 'p',
            text: 'Vela comes from the Latin velum, the veil. The logo is an open arc, drawn in one stroke, that never closes: a presence in the background, available. Everything else flows from that idea. Reference territory: Notion, Linear, Cron. Professional tools that earn trust through discretion.',
          },
          {
            type: 'list',
            items: [
              'A warm, sober palette: Sand for the background, Ink for text, Sage for quiet states, and Wine as the only strong colour.',
              'Fraunces kept for the brand, Inter for the whole interface, IBM Plex Mono for factual data (dates, IDs). The serif never enters the product.',
              'A direct tone: short sentences, the practitioner\'s vocabulary, no exclamation marks, no emoji in the interface.',
            ],
          },
          {
            type: 'callout',
            text: 'Wine stays rare: one primary button, the logo, a link. That scarcity is what keeps Vela discreet during a session, when the practitioner is focused on the person in front of them.',
          },
          {
            type: 'img',
            src: '/projects/vela/app-dashboard.jpg',
            caption: "The dashboard: today's and this week's appointments, two actions, nothing else",
          },
        ],
      },
      {
        title: 'A design system before the first screen',
        blocks: [
          {
            type: 'p',
            text: 'After WAATOM, I wanted to test a hunch: a DS set up from day one changes the speed of everything else. A white-label shadcn/ui base, semantic tokens in a single file, and the brand book colours reassigned to the existing variables. Every new interface composes with the components in place before creating a new one.',
          },
          {
            type: 'p',
            text: 'The design system is plugged into Claude Code through MCP. When I generate a screen, the AI draws on the real tokens and the real components. The result: a consistent front end, with no going back to fix off-token colours or approximate spacing.',
          },
          {
            type: 'img',
            src: '/projects/vela/app-consultation-panel.jpg',
            caption: 'An open consultation with the patient record alongside: all the context without leaving the page. A request from test #1, shipped.',
          },
          {
            type: 'grid',
            images: [
              { src: '/projects/vela/app-agenda.jpg', caption: 'The weekly calendar, driven by appointment types' },
              { src: '/projects/vela/app-patients.jpg', caption: 'The patient list, with custom fields as columns' },
            ],
          },
          {
            type: 'img',
            src: '/projects/vela/app-templates.jpg',
            caption: 'Consultation templates: every session starts from a structure that is already there',
          },
        ],
      },
      {
        title: 'Designing all the way into the code',
        blocks: [
          {
            type: 'p',
            text: 'Vela handles health data. So every technical decision is also a design decision, because it touches trust.',
          },
          {
            type: 'list',
            items: [
              'Next.js, TypeScript, PostgreSQL. Every query is scoped to the practitioner, and integration tests check that one practitioner never sees another\'s patients.',
              'Mandatory GDPR consent at sign-up, and 5 legal pages written then shipped: terms, privacy, legal notice, cookies, data processing agreement.',
              'Error monitoring with no session replay: a screenshot could contain a consultation note. Request bodies are stripped before every send.',
            ],
          },
        ],
      },
      {
        title: 'Two user tests, two lessons',
        blocks: [
          {
            type: 'h3',
            text: 'Test 1: a developer to stress-test the build',
          },
          {
            type: 'p',
            text: 'First test with a technical profile, deliberately far from the persona. His eye worked as a crash test: sign-up guardrails, security handling, data validation. The session surfaced two critical bugs before a real practitioner could hit them: a consultation duplicated on every back-and-forth navigation, and appointments that could be scheduled in the past.',
          },
          {
            type: 'h3',
            text: 'Test 2: a real practitioner',
          },
          {
            type: 'p',
            text: 'Second test with Astrid Macret, a sexologist early in her practice, who tracked her patients between a notebook and Notion. Full journey completed with no blocker: sign-up, creating a patient, first consultation. The custom fields and the Sage green landed. The remaining frictions were precise: no patient search, a fuzzy list of specialities, the difference between template and consultation to clarify.',
          },
          {
            type: 'quote',
            text: "I was worried I'd get lost, but in the end it's super clear.",
            source: 'Astrid Macret, sexologist, user test #2',
          },
          {
            type: 'callout',
            text: 'The real wall showed up at the end of the session: certified health data hosting (HDS in France). Sales calls, high costs, incompatible with a simple subscription. "Can\'t we just pay €10 a month?"',
          },
        ],
      },
    ],
    learnings:
      'Vela had me hold the whole chain, from the brand to the database. Three things stuck. A test with an off-target profile is still useful, as long as you know what it actually validates: here, robustness before the business needs. Building with AI moves fast, so the guardrails have to be tested just as fast. And in health, compliance gets designed from the first screen, just like the journey.',
  },

  // ─── 10. Phone Verif ───────────────────────────────────────────────────────
  {
    id: '10',
    slug: 'phone-verif',
    title: 'Phone Verif: taking a vibe-coded app out of the default look',
    tagline: 'The product was already good. Now it looks it.',
    description:
      "Redesign of the top of the homepage for a WhatsApp phone verification API built with Lovable. Measured audit, two design passes, a coded mockup animated with GSAP: 14 font sizes down to 7, 36 colours down to 8 tokens, a single primary button.",
    coverImage: '/projects/phone-verif-v3.png',
    tags: ['Design System', 'Freelance'],
    caseStudyUrl: null,
    featured: false,
    role: 'Product Designer • design & code',
    company: 'Phone Verif',
    period: 'Oct. 2026',
    status: 'Coded, animated mockup',
    metrics: [
      { value: '14 → 7', label: 'font sizes' },
      { value: '36 → 8', label: 'colours, turned into tokens' },
      { value: '3 → 1', label: 'primary button style' },
      { value: '4 → 2', label: 'calls to action above the fold' },
    ],
    intro:
      "Phone Verif is a phone number verification API that works over WhatsApp: the user sends one message, the service receives their proven number. No SMS, no code to type. A really good product, with figures measured in production, built with Lovable. But a homepage with the default look of AI-generated apps. For a product that sells trust, that's expensive. I audited the page, then rebuilt the top of it in two passes, directly in code.",
    sections: [
      {
        title: 'The audit: measure before judging',
        blocks: [
          {
            type: 'p',
            text: "I pulled the computed styles of the page in the browser, so the verdict rests on measurements. The substance was solid: a clear promise (\"Stop asking phone numbers. Start receiving proof.\"), an honest comparison, figures measured in production. It was the form that was eroding trust.",
          },
          {
            type: 'list',
            items: [
              "The AI-look markers: default Tailwind palette (slate, emerald, violet), a green-to-violet gradient headline, dark mode with glows, a pill above every section, a grid of icon cards, Inter everywhere.",
              "No visual system: 14 font sizes, 16 text colours, 20 background colours, 6 corner radii and 5 gradients on a single page.",
              "Three primary button styles, including a blue found nowhere else while the brand is green. And 4 competing calls to action on the first screen.",
              "Visible bugs: out-of-sync labels in the animated \"How it works\" section, counters showing \"0.0%\" on first pass, the same figures repeated three times.",
            ],
          },
          {
            type: 'img',
            src: '/projects/phone-verif/avant.png',
            caption: 'Before: the page in production, with the default look',
          },
        ],
      },
      {
        title: 'First pass: the receipt',
        blocks: [
          {
            type: 'p',
            text: "The hero had to speak to two audiences: the developer integrating the API and the person signing off. I explored two directions. A, the receipt: a perforated proof ticket showing what the product sells (a verified number, nothing typed, €0.01 billed on success). B, the journey: the three real steps, from QR code to JSON response. I kept both: A as the hero, B right below, in place of the buggy animated section.",
          },
          {
            type: 'img',
            src: '/projects/phone-verif/v2.png',
            caption: 'First pass: the proof receipt, on cream paper',
          },
        ],
      },
      {
        title: 'Second pass: out of the "tasteful" AI look',
        blocks: [
          {
            type: 'p',
            text: "Rereading that first version three weeks later, I saw the problem: it had left the 2024 AI look for the 2026 one. Cream paper, a half-italic headline, monospace on every small caption, a perforated receipt with a tilted stamp, four figures in equal columns. That is exactly what an AI produces when you ask it for an \"editorial\" page.",
          },
          {
            type: 'callout',
            text: "A handmade page comes down to four things: one idea of its own pushed far, the real product on screen, a deliberate accident in the grid, and a voice. I rebuilt everything through that lens.",
          },
          {
            type: 'list',
            items: [
              "Bold colour fields: brand green for the hero and the testimonial, ink for the figures, white for the journey. The green is tuned so ink text reaches 5.2:1.",
              "A single family, Archivo: condensed and heavy for poster headlines, normal width for body text. The headline switches colour halfway, with no italics.",
              "The real demo in the hero: a large scannable QR code. It is the only element that breaks the grid, straddling the next section.",
              "One figure set very large (62.9% conversion), the other three listed beside it.",
              "\"How it works\" becomes \"One session, timed.\": a 15-second ruler drawn to scale and three steps marked by their timestamp. The long gap between 0 and 11.6 s tells the product better than a paragraph.",
              "8 colour tokens, 7 font sizes, a single rounded shape (the WhatsApp bubble), 2 px rules. No hard-coded values in components.",
            ],
          },
        ],
      },
      {
        title: 'Motion that carries the message',
        blocks: [
          {
            type: 'p',
            text: "Last layer: GSAP animations (ScrollTrigger and SplitText), with one simple rule. Every animation tells the product.",
          },
          {
            type: 'list',
            items: [
              "A scan bar sweeps the QR code on a loop, like a phone reading it.",
              "On scroll, the timed ruler sticks to the top of the screen and fills up. When the clock reaches a step, its timestamp turns green.",
              "The 62.9% rises character by character. The real figure is revealed straight away, with no counter climbing from zero: that was one of the original page's bugs.",
              "The customer quote lights up word by word, at reading pace.",
            ],
          },
          {
            type: 'img',
            src: '/projects/phone-verif/scroll-v3.gif',
            caption: 'The before, then the new animated version, from hero to testimonial',
          },
          {
            type: 'p',
            text: "The mockup is delivered as HTML with its tokens, QA'd on desktop, tablet and mobile. With the reduced-motion setting on, nothing moves and everything shows at once.",
          },
        ],
      },
    ],
    learnings:
      "AI codes fast, and it now has a default taste too. This project taught me to distrust my own first version: when it looks like what a tool would produce on its own, it needs a second pass. The rest still holds: a minimal system the AI can respect in future prompts, and measured figures to convince a founder.",
  },

  // ─── 1. Trial by Card ──────────────────────────────────────────────────────
  {
    id: '1',
    slug: 'trial-by-card',
    title: 'Card-required free trial: ×2.5 on Business subscriptions',
    tagline: 'Turning a gap in the entry flow into a conversion engine',
    description:
      "Designing an end-of-onboarding flow to lift the app's perceived value: audit, A/B tests, legal and cognitive constraints. The redesign drove a +25% increase in users adding their card, and ×2.5 on first Business subscriptions.",
    coverImage: '/projects/trial-by-card.png',
    tags: ['Conversion'],
    caseStudyUrl: null,
    featured: true,
    role: 'Product Designer & Lead Design System',
    company: 'Waalaxy',
    period: 'Oct → Dec 2025',
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
              'Analysis of the existing flow: the "€0 today" message, the main argument for entering a card, got lost on the page.',
              'Mobbin benchmark: the SaaS products that perform best on this pattern share three principles (maximum reassurance, a visible exit, minimal cognitive effort).',
            ],
          },
          {
            type: 'callout',
            text: 'Entering your card is an emotionally loaded act. The real question in the user\'s head: "do I trust this product not to trap me?" Our hypothesis: if we cut cognitive load to the minimum, make the exit obvious, and lead with "€0" as the primary message, we can significantly raise the completion rate.',
          },
        ],
      },
      {
        title: 'Design & hard constraints',
        blocks: [
          {
            type: 'p',
            text: "Before designing, we set the non-negotiable constraints: the legal notices tied to card collection (GDPR, recurring billing, cancellation terms) had to appear on screen. The card form required several fields. And fitting all of it (form, legal notices, reassurance elements) onto a single screen with no scroll was one of the main challenges.",
          },
          {
            type: 'p',
            text: "I designed four versions before landing on the one the team signed off. The iterations focused on consistency with the onboarding, the hierarchy between the sales argument and the form, the placement of the legal notices, the visibility of the exit button, and compressing the information.",
          },
          {
            type: 'img',
            src: '/projects/trial-by-card/image.png',
            caption: 'Business version: 50/50 A/B test between the Business and Advanced plans',
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
        title: 'New iterations, May 2026',
        blocks: [
          {
            type: 'p',
            text: "Trial by card kept evolving. The visual redesign aligns the flow with the brand's new visual direction and the latest Stripe components: more minimal, easier to fill in. Tests were still running when I left, around one open question: is it better to ask for the card up front, or after a first step of commitment?",
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
            text: "After the redesign, we ran an A/B test: Trial by Card against Trial without Card. The new visual version drove a +25% increase in users adding their credit card. A gap clear enough that we decided not to risk impacting the business short-term.",
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

  // ─── 11. RSVP Party ────────────────────────────────────────────────────────
  {
    id: '11',
    slug: 'rsvp-party',
    title: 'RSVP Party: a new way to invite people',
    tagline: "If this is the invitation, what will the party be like?",
    description:
      "An invitation site that replaces the WhatsApp message, the poll or the 👍 reactions, and the who-brings-what list you keep in your head. Guests reply in 10 seconds, see who's coming, say what they're bringing and fill the playlist; the host follows everything from an admin view. The goal: create the wow effect before the party even starts.",
    coverImage: '/projects/rsvp-party.jpg',
    tags: ['Side project'],
    caseStudyUrl: 'https://rsvp-party-demo.vercel.app',
    featured: false,
    role: 'Product Designer • design & code',
    company: 'Personal project, open source',
    period: 'Oct. 2026',
    status: 'Live • public demo',
    metrics: [
      { value: '10 s', label: 'to reply to the invitation' },
      { value: '1 link', label: 'instead of a message, a poll and your memory' },
      { value: '221 → 99 KB', label: 'of fonts, despite the 3D' },
      { value: 'MIT', label: 'public repo, reusable template' },
    ],
    intro:
      "Inviting people today means a message in a WhatsApp group, with a poll or a 👍 / 👎 to react with. And to know who brings what, you rely on your memory (weddings aside, that's a whole other sport). It works, but it excites no one. RSVP Party starts from another idea: the invitation is the first moment of the party. The goal is to create the wow effect before guests arrive, so they show up already hyped, thinking: \"if this is the invitation, what will the party be like?\" The project started as a real site, designed for a relative's 18th birthday, then I turned it into an open source template, with a demo for a fictional event: Camille's 30th.",
    sections: [
      {
        title: 'The problem: inviting has become logistics',
        blocks: [
          {
            type: 'list',
            items: [
              "For guests: a message lost in the group chat, a thumbs-up to give, and no idea who's really coming. Nothing that makes them want to save the date.",
              "For the host: scrolling back to count the 👍, chasing those who didn't react, and remembering who said they'd bring what, so you don't end up with 12 bags of crisps and zero cups.",
              "And an address travelling in a WhatsApp link, far beyond the guest list.",
            ],
          },
          {
            type: 'callout',
            text: "My hypothesis: if the invitation is as polished as the party, guests reply faster and arrive already in the mood. So the site has to do two things at once: take all the logistics off the host's plate, and give guests a first impression that builds the hype.",
          },
        ],
      },
      {
        title: 'For the host: everything in one place',
        blocks: [
          {
            type: 'p',
            text: "The admin view is the heart of the product for whoever is hosting. It replaces counting the 👍 and the list you keep in your head: a single page, updated live, behind a password.",
          },
          {
            type: 'img',
            src: '/projects/rsvp-party/desktop-admin.jpg',
            caption: 'The admin view: replies, who brings what, and who suggested which track',
          },
          {
            type: 'list',
            items: [
              "Who's coming: yes, maybe and no, with no chasing needed.",
              "Who brings what: each guest ticks what they're bringing, with a cap per item set by the host (6 bags of crisps, not 12).",
              "The playlist, with the name of each person who suggested a track.",
              "A protected address: it's only sent to guests who replied yes or maybe. Those who reply no never get it.",
            ],
          },
        ],
      },
      {
        title: 'For guests: reply in 10 seconds',
        blocks: [
          {
            type: 'p',
            text: "The link travels over WhatsApp, so almost everyone opens it on a phone. Replying takes a first name and one tap: yes, maybe or no. Confetti, and the name pill flies over to the \"They'll be there\" list. Right after, the guest sees who's coming, picks what to bring, adds tracks to the playlist (anonymous on the public side) and the event to their calendar, adapted to their device.",
          },
          {
            type: 'img',
            src: '/projects/rsvp-party/mobile.jpg',
            caption: 'On phone: the first screen, confirmed guests, the poll and its caps, the playlist',
          },
        ],
      },
      {
        title: 'The wow effect, designed for the thumb',
        blocks: [
          {
            type: 'p',
            text: "On a phone there's no hover: the effects respond to the thumb, the scroll and the tilt. The sun sets as you scroll, the 3D disco ball follows the phone's tilt, a hidden drawer pulls out with a finger. The background tells the story of an evening: yellow at the top, orange in the middle, a starry night at the end. It's a taste of the party, not an info page.",
          },
          {
            type: 'img',
            src: '/projects/rsvp-party/scroll.gif',
            portrait: true,
            caption: 'The scroll: the sky goes from day to night',
          },
          {
            type: 'img',
            src: '/projects/rsvp-party/desktop-bar.jpg',
            caption: 'The easter egg: tapping a cocktail opens the bar menu and its 20 drawn cocktails',
          },
        ],
      },
      {
        title: "The choices you don't see",
        blocks: [
          {
            type: 'list',
            items: [
              "Privacy by default: the address is only sent to guests who replied yes or maybe, the playlist doesn't say who suggested what, poll names stay in the admin.",
              "Light despite the 3D: fonts cut from 221 to 99 KB, 3D loaded during the loading screen and rendered only when on screen, drawer built on first open.",
              "Accessible: animations stop with \"reduce motion\", decorations are ignored by screen readers, the disco ball has a CSS fallback when WebGL isn't available.",
              "A risk-free demo: every visitor can try everything without seeing what others type, and their additions are wiped after 2 days.",
            ],
          },
          {
            type: 'callout',
            text: "To make it a template, everything goes through a single config file (date, venue, à la carte sections, dress code, poll, copy) and a theme system: neutrally named colours, fonts, first screen, signature animation, easter egg and tone of voice. The first theme is a disco birthday; a wedding could switch to a formal tone without touching the rest.",
          },
        ],
      },
      {
        title: 'Next: blocks for every kind of party',
        blocks: [
          {
            type: 'p',
            text: "Sections are already à la carte. Next come new blocks designed for each type of event, always with the same rule: take a chore off the host, or add a moment of hype for the guests.",
          },
          {
            type: 'list',
            items: [
              "Wedding: carpooling (who leaves from where, how many seats), nearby accommodation, menu choice and allergies in the reply, the weekend schedule, and \"find your table\" on the day.",
              "Hen or stag party: a date poll, a shared kitty with the cost split, and a surprise schedule revealed as the countdown runs.",
              "Baby shower and christening: predictions (date, name, weight), a baby registry, and notes for the child to open later.",
              "For every party: clues that unlock before the day, and after the party, a shared photo wall so the effect keeps going.",
            ],
          },
          {
            type: 'link',
            href: 'https://rsvp-party-demo.vercel.app',
            label: 'Try the live demo',
          },
          {
            type: 'link',
            href: 'https://github.com/gowya/rsvp-party',
            label: 'See the code on GitHub',
          },
        ],
      },
    ],
    learnings:
      "An invitation isn't just a poll: it's the first touchpoint with the event, and it sets the tone for everything else. Designing for a real party, with real guests, also forces quick calls: I removed effects that confused people when they didn't work the first time. And turning a personal project into a reusable template is a small-scale design system exercise: separating what's shared from what belongs to a theme.",
  },

  // ─── 2. Upgrade journey ────────────────────────────────────────────────────
  {
    id: '2',
    slug: 'parcours-upgrade',
    title: 'Contextual upgrade modals: from 2% to ~10%',
    tagline: 'From 2% to around 10% conversion with contextual modals',
    description:
      "Reworking the upgrade journey: tailoring the message to each user's situation.",
    coverImage: '/projects/parcours-upgrade.png',
    tags: ['Conversion', 'Discovery'],
    caseStudyUrl: null,
    featured: true,
    role: 'Product Designer & Lead Design System',
    company: 'Waalaxy',
    period: 'Oct → Nov 2025',
    status: 'Shipped to production',
    team: '1 PM · 2 devs · 1 designer',
    metrics: [
      { value: '~10%', label: 'conversion from contextual CTAs' },
      { value: '2%', label: 'initial conversion rate (pricing page)' },
      { value: '13.61%', label: 'modal open rate from in-app CTAs' },
      { value: '3 CTAs', label: "tailored to each user's flow" },
    ],
    intro:
      'Waalaxy monetizes through several plans and add-ons. The existing upgrade journey had a structural flaw: a user who wanted to move up a plan was immediately redirected to the cart, without ever understanding what they\'d gain. Abandonment happened before payment, at the moment the user couldn\'t answer their implicit question: "is this really worth it for my situation?"',
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
            text: 'In production, the upgrade buttons always sent users back to the pricing page, with no connection to what they were actually trying to do. Same wording for everyone. Same structure. No hierarchy. A user who\'s just hit a quota limit needs one piece of information: "here\'s why the higher plan solves your problem right now."',
          },
          {
            type: 'img',
            src: '/projects/parcours-upgrade/Capture_decran_2026-05-13_a_19.00.46.png',
            caption: 'The old upgrade modal, same design for every context',
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
            caption: 'The two variants, Freemium and Pro, for the same quota context',
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
              'For reference, the starting baseline was the 2% conversion rate from the pricing page. The contextual journey beats it by more than seven points.',
            ],
          },
          {
            type: 'img',
            src: '/projects/parcours-upgrade/Capture_decran_2026-01-22_a_13.27.48.png',
            caption: 'Post-release Mixpanel data: contextual funnel vs classic paywall',
          },
        ],
      },
    ],
    learnings:
      "This project confirmed something about conversion journeys: the real blocker sat before the price and before the payment form, in the missing link between the user's problem and the proposed solution. A modal that opens with no context breeds distrust. The order-summary redesign illustrates another principle: transparency reduces friction. Showing the pro-rata calculation is one extra line to display. Behind it: dozens fewer support tickets, and a user who reaches payment with confidence.",
  },

  // ─── 3. CSV Import ─────────────────────────────────────────────────────────
  {
    id: '3',
    slug: 'csv-import',
    title: 'CSV import: 83.5% success on the first try',
    tagline: 'From a single LinkedIn URL to multi-column mapping',
    description:
      "83.5% of users get their mapping right on the first try. The result of a flow designed around what people actually do.",
    coverImage: '/projects/csv-import.png',
    tags: ['Discovery'],
    caseStudyUrl: null,
    featured: false,
    role: 'Product Designer & Lead Design System',
    company: 'Waalaxy',
    period: 'Dec 2024',
    status: 'Shipped to production',
    team: '1 PM · 1 EM · 2 devs · 1 designer',
    metrics: [
      { value: '83.5%', label: 'get their mapping right on the first try' },
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
            text: 'Deliberately simple: pick the import list and upload by drag & drop. No decision to make: if the file is valid, you move to the next step automatically. The parser handles the complex cases in the background without exposing them to the user.',
          },
          {
            type: 'img',
            src: '/projects/csv-import/image.png',
            caption: 'Step 1: drag & drop upload',
          },
          {
            type: 'h3',
            text: 'Step 2: Match data, the core screen',
          },
          {
            type: 'p',
            text: 'Three columns: the properties detected in the CSV (left), the matching Waalaxy property (centre), and a preview of the real data (right).',
          },
          {
            type: 'list',
            items: [
              'The number of prospects detected is featured in the title, to reassure the user they have the right file and letting them spot an error immediately.',
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
        title: 'Results, 3 months after release',
        blocks: [
          {
            type: 'quote',
            text: "Users can now import first name, last name, job title, company, region and phone number on top of the classic LinkedIn URL and emails. We reworked the import flow to enlarge the drag-and-drop zone, clarify the advanced options, and add an 'Overwrite existing data' option to update existing prospects' data via CSV.",
            source: 'Waalaxy CPO, release note',
          },
          {
            type: 'list',
            items: [
              '83.5% of users get their mapping right on the first try.',
              'An average of 24 columns per import: sources that would have been unusable with the old flow.',
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

  // ─── 5. Campaign Manager refactor ──────────────────────────────────────────
  {
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

  // ─── 6. Design System ──────────────────────────────────────────────────────
  {
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
            type: 'p',
            text: "Then, structuring the library in layers: the foundations (colours, type, spacing, radius, all as Figma variables), the core components, then the more business-specific ones. Each layer has its reason to exist, each token has a single source of truth. That's the base that keeps everything else standing, even when the brand colour changes overnight.",
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

  // ─── 7. Recruitment SaaS ───────────────────────────────────────────────────
  {
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

]

export const PROJECTS: Record<Lang, ProjectDetail[]> = {
  fr: PROJECTS_FR,
  en: PROJECTS_EN,
}

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
