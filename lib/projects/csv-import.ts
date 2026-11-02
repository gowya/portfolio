// CSV Import
import type { LocalizedProject } from '../types'

export const csvImport: LocalizedProject = {
  fr: {
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

  en: {
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
}
