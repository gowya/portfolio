// Parcours d'upgrade (Upgrade journey)
import type { LocalizedProject } from '../types'

export const parcoursUpgrade: LocalizedProject = {
  fr: {
    id: '2',
    slug: 'parcours-upgrade',
    title: "Modales d'upgrade contextuelles : 9,08% contre 7,32%",
    tagline: 'Des CTA contextuels qui convertissent mieux que les paywalls, sur le même funnel',
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
      { value: '9,08%', label: 'de conversion depuis les CTA contextuels' },
      { value: '7,32%', label: 'de conversion depuis les paywalls, sur le même funnel' },
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
              "Pour contexte, la page de pricing convertissait à 2% au départ. Ce chiffre porte sur un autre périmètre et sert uniquement à situer le problème.",
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

  en: {
    id: '2',
    slug: 'parcours-upgrade',
    title: 'Contextual upgrade modals: 9.08% vs 7.32%',
    tagline: 'Contextual CTAs that convert better than paywalls, on the same funnel',
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
      { value: '9.08%', label: 'conversion from contextual CTAs' },
      { value: '7.32%', label: 'conversion from paywalls, on the same funnel' },
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
              'For context, the pricing page converted at 2% at the start. That figure covers a different scope and only serves to frame the problem.',
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
}
