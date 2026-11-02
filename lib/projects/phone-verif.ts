// Phone Verif
import type { LocalizedProject } from '../types'

export const phoneVerif: LocalizedProject = {
  fr: {
    id: '10',
    slug: 'phone-verif',
    title: 'Phone Verif : sortir une app vibe-codée du look par défaut',
    tagline: "Le produit était déjà bon. Maintenant, il en a l'air.",
    description:
      "Refonte du haut de page d'une API de vérification de numéro par WhatsApp, construite avec Lovable. Audit mesuré, deux versions, maquette codée et animée avec GSAP : 14 tailles de texte ramenées à 7, 36 couleurs ramenées à 8 tokens, un seul bouton principal.",
    coverImage: '/projects/phone-verif-v3.png',
    tags: ['Design System', 'Freelance'],
    caseStudyUrl: 'https://gaums-refonte-pv.vercel.app',
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
      "Phone Verif est une API de vérification de numéro de téléphone par WhatsApp : l'utilisateur envoie un message, le service reçoit son numéro prouvé. Pas de SMS, pas de code à taper. Un très bon produit, des chiffres mesurés en production, construit avec Lovable. Mais une page d'accueil avec le look par défaut des apps générées par IA. Pour un produit qui vend de la confiance, ça coûte cher. J'ai audité la page, puis refait le haut de page en deux versions, directement en code.",
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
        title: 'V1 : le reçu',
        blocks: [
          {
            type: 'p',
            text: "Le hero devait parler à deux publics : le développeur qui intègre l'API et la personne qui signe. J'ai exploré deux pistes. A, le reçu : un ticket de preuve perforé qui montre ce que le produit vend (un numéro vérifié, rien de tapé, 0,01 € facturé au succès). B, le parcours : les trois étapes réelles, du QR code à la réponse JSON. J'ai gardé les deux : A en hero, B juste en dessous, à la place de la section animée buguée.",
          },
          {
            type: 'img',
            src: '/projects/phone-verif/v2.png',
            caption: 'V1 : le reçu de preuve sur papier crème. Propre, mais trop épuré',
          },
        ],
      },
      {
        title: 'V2 : une vraie personnalité',
        blocks: [
          {
            type: 'p',
            text: "La V1 était propre, mais trop épurée pour Erwann, le fondateur : il voulait une vraie personnalité pour son produit. En reprenant la page avec ce retour, j'ai mis le doigt sur ce qui la rendait anonyme : elle avait quitté le look IA de 2024 pour celui de 2026. Papier crème, titre à moitié en italique, mono sur toutes les petites mentions, reçu perforé avec tampon penché, quatre chiffres en colonnes égales. C'est exactement ce que sort une IA quand on lui demande une page « éditoriale ».",
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
          {
            type: 'img',
            src: '/projects/phone-verif/v2-chiffre.png',
            caption: 'V2 : un seul chiffre en affiche, sur l\'encre',
          },
          {
            type: 'img',
            src: '/projects/phone-verif/v2-session.png',
            caption: 'V2 : la session chronométrée, à l\'échelle',
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
            type: 'video',
            src: '/projects/phone-verif/scroll-v3.mp4',
            poster: '/projects/phone-verif/scroll-v3-poster.jpg',
            autoplay: true,
            caption: "L'avant, puis la nouvelle version animée, du hero au témoignage",
          },
          {
            type: 'p',
            text: "La maquette est livrée en HTML avec ses tokens, recettée en desktop, tablette et mobile. Avec le réglage « réduire les animations », rien ne bouge et tout s'affiche d'emblée.",
          },
          {
            type: 'link',
            href: 'https://gaums-refonte-pv.vercel.app',
            label: 'Voir la démo en ligne',
          },
        ],
      },
    ],
    learnings:
      "L'IA code vite, et elle a désormais aussi un goût par défaut. Le retour d'Erwann me l'a rappelé : un produit a besoin d'une personnalité, au-delà d'une page propre. Quand une version ressemble à ce qu'un outil sortirait seul, il en faut une autre. Le reste tient toujours : un système minimal que l'IA pourra respecter aux prochains prompts, et des chiffres mesurés pour convaincre un fondateur.",
  },

  en: {
    id: '10',
    slug: 'phone-verif',
    title: 'Phone Verif: taking a vibe-coded app out of the default look',
    tagline: 'The product was already good. Now it looks it.',
    description:
      "Redesign of the top of the homepage for a WhatsApp phone verification API built with Lovable. Measured audit, two versions, a coded mockup animated with GSAP: 14 font sizes down to 7, 36 colours down to 8 tokens, a single primary button.",
    coverImage: '/projects/phone-verif-v3.png',
    tags: ['Design System', 'Freelance'],
    caseStudyUrl: 'https://gaums-refonte-pv.vercel.app',
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
      "Phone Verif is a phone number verification API that works over WhatsApp: the user sends one message, the service receives their proven number. No SMS, no code to type. A really good product, with figures measured in production, built with Lovable. But a homepage with the default look of AI-generated apps. For a product that sells trust, that's expensive. I audited the page, then rebuilt the top of it in two versions, directly in code.",
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
        title: 'V1: the receipt',
        blocks: [
          {
            type: 'p',
            text: "The hero had to speak to two audiences: the developer integrating the API and the person signing off. I explored two directions. A, the receipt: a perforated proof ticket showing what the product sells (a verified number, nothing typed, €0.01 billed on success). B, the journey: the three real steps, from QR code to JSON response. I kept both: A as the hero, B right below, in place of the buggy animated section.",
          },
          {
            type: 'img',
            src: '/projects/phone-verif/v2.png',
            caption: 'V1: the proof receipt on cream paper. Clean, but too plain',
          },
        ],
      },
      {
        title: 'V2: a real personality',
        blocks: [
          {
            type: 'p',
            text: "V1 was clean, but too plain for Erwann, the founder: he wanted his product to have a real personality. Reworking the page with that feedback, I put my finger on what made it anonymous: it had left the 2024 AI look for the 2026 one. Cream paper, a half-italic headline, monospace on every small caption, a perforated receipt with a tilted stamp, four figures in equal columns. That is exactly what an AI produces when you ask it for an \"editorial\" page.",
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
          {
            type: 'img',
            src: '/projects/phone-verif/v2-chiffre.png',
            caption: 'V2: a single figure set as a poster, on ink',
          },
          {
            type: 'img',
            src: '/projects/phone-verif/v2-session.png',
            caption: 'V2: the timed session, drawn to scale',
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
            type: 'video',
            src: '/projects/phone-verif/scroll-v3.mp4',
            poster: '/projects/phone-verif/scroll-v3-poster.jpg',
            autoplay: true,
            caption: 'The before, then the new animated version, from hero to testimonial',
          },
          {
            type: 'p',
            text: "The mockup is delivered as HTML with its tokens, QA'd on desktop, tablet and mobile. With the reduced-motion setting on, nothing moves and everything shows at once.",
          },
          {
            type: 'link',
            href: 'https://gaums-refonte-pv.vercel.app',
            label: 'See the live demo',
          },
        ],
      },
    ],
    learnings:
      "AI codes fast, and it now has a default taste too. Erwann's feedback reminded me: a product needs a personality, beyond a clean page. When a version looks like what a tool would produce on its own, it needs another one. The rest still holds: a minimal system the AI can respect in future prompts, and measured figures to convince a founder.",
  },
}
