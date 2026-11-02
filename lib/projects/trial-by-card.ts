// Trial by Card
import type { LocalizedProject } from '../types'

export const trialByCard: LocalizedProject = {
  fr: {
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

  en: {
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
}
