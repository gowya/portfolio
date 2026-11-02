// Vela
import type { LocalizedProject } from '../types'

export const vela: LocalizedProject = {
  fr: {
    id: '8',
    slug: 'vela',
    title: "Un SaaS santé conçu et codé seule avec l'IA",
    tagline: 'Le logiciel de suivi patient qui ne se fait jamais remarquer pendant la consultation',
    description:
      "Un SaaS de gestion de patientèle pour psys, sexologues et coachs. Marque, design system, front Next.js, base de données, conformité RGPD et tests utilisateurs : tout, de A à Z, avec Claude Code branché sur le design system.",
    coverImage: '/projects/vela/vela-film-poster.jpg',
    coverVideo: '/projects/vela/vela-film.mp4',
    tags: ['IA', 'Design System', 'Discovery', 'Freelance'],
    caseStudyUrl: 'https://velaconsult.vercel.app/demo',
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
            src: '/projects/vela/claude-code-audit.png',
            caption: "Claude Code au travail sur Vela : un audit du design system, de l'exploration des écrans au rapport.",
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

  en: {
    id: '8',
    slug: 'vela',
    title: 'A health SaaS designed and coded solo with AI',
    tagline: 'The patient-tracking tool that never gets noticed during a session',
    description:
      'A practice management SaaS for psychologists, sexologists and coaches. Brand, design system, Next.js front end, database, GDPR compliance and user testing: all of it, end to end, with Claude Code plugged into the design system.',
    coverImage: '/projects/vela/vela-film-poster.jpg',
    coverVideo: '/projects/vela/vela-film.mp4',
    tags: ['AI', 'Design System', 'Discovery', 'Freelance'],
    caseStudyUrl: 'https://velaconsult.vercel.app/demo',
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
            src: '/projects/vela/claude-code-audit.png',
            caption: 'Claude Code at work on Vela: a design system audit, from exploring the screens to the report.',
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
}
