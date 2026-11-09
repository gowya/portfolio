// Infinite Login (LinkedIn 2FA connection)
import type { LocalizedProject } from '../types'

export const infiniteLogin: LocalizedProject = {
  fr: {
    id: '12',
    slug: 'infinite-login',
    title: 'Infinite Login : faire confier ses accès LinkedIn en toute confiance',
    tagline: 'Plus aucune déconnexion pour les comptes en 2FA, et 18% de demandes au support en moins',
    description:
      "Connexion LinkedIn par authentification à deux facteurs, pour que les campagnes ne s'arrêtent plus en silence. Placement au moment du problème, deux chemins selon l'utilisateur, état du compte visible. Résultat : plus aucune déconnexion en 2FA, 42% des utilisateurs connectés ainsi, -18% de demandes au support.",
    coverImage: '/projects/infinite-login.webp',
    coverVideo: '/projects/infinite-login/infinite-login-film.mp4',
    tags: ['Sécurité', 'UX writing'],
    caseStudyUrl: null,
    featured: false,
    role: 'Product Designer & Lead Design System',
    company: 'Waalaxy',
    period: '2025 → Janv. 2026',
    status: 'Livré en production en janvier 2026',
    team: '1 PM · 2 devs · 1 designer',
    metrics: [
      { value: '0', label: 'déconnexion pour les comptes connectés en 2FA' },
      { value: '42%', label: 'des utilisateurs connectés via la 2FA (avril-mai 2026)' },
      { value: '-18%', label: 'de demandes au support, de janvier à avril 2026' },
      { value: 'FR + EN', label: 'parcours et microcopy conçus dans les deux langues' },
    ],
    intro:
      "Waalaxy automatise la prospection sur LinkedIn : en général, 150 actions par jour et par utilisateur. Quand LinkedIn a renforcé sa sécurité, la connexion simple s'est mise à déconnecter régulièrement nos utilisateurs. Pour un outil d'automatisation, c'est le pire scénario : les campagnes s'arrêtent sans bruit. D'après le support, les utilisateurs s'en rendaient compte une à deux semaines trop tard. À 150 actions par jour, cela représente 1 000 à 2 000 actions qui ne partaient pas.",
    sections: [
      {
        title: 'Deux raisons d\'agir',
        blocks: [
          {
            type: 'p',
            text: "La connexion et la déconnexion étaient le deuxième motif de demande au support, avec le renouvellement automatique, et l'un des plus frustrants pour les utilisateurs. Dans le même temps, LinkedIn sanctionnait des outils concurrents, et d'autres acteurs faisaient de la sécurité et de la confiance un argument de vente.",
          },
          {
            type: 'p',
            text: "Les fondateurs ont décidé de la solution technique : une connexion à LinkedIn par authentification à deux facteurs (2FA), qui tient dans la durée. Le quoi était fixé. Mon travail, en squad avec le PM et deux devs, portait sur le comment.",
          },
          {
            type: 'callout',
            text: "Le défi : faire confier son mot de passe LinkedIn et sa clé secrète 2FA à des commerciaux, avec une procédure qui se passe en partie chez LinkedIn, hors de notre interface. Chaque étape est un endroit où l'on peut perdre la confiance de l'utilisateur, ou l'utilisateur lui-même.",
          },
        ],
      },
      {
        title: 'Prévenir par email',
        blocks: [
          {
            type: 'p',
            text: "Ma première idée était d'envoyer un email à l'utilisateur au moment de sa déconnexion. Elle a été mise en place, et elle ne réglait qu'une partie du problème. Un utilisateur qui a préparé deux ou trois campagnes d'avance les laisse tourner et peut revenir deux semaines plus tard. Tant qu'il n'ouvre pas l'app, rien ne lui dit que tout s'est arrêté : l'email le prévient au moment où ça arrive. Il ne relance pas les actions pour autant. L'utilisateur doit encore se reconnecter, et il sera de nouveau déconnecté plus tard. Pour régler la cause, il fallait une connexion qui tienne : c'est la 2FA.",
          },
        ],
      },
      {
        title: 'Au moment du problème',
        blocks: [
          {
            type: 'p',
            text: "L'option devait d'abord vivre dans les réglages. Nous avons choisi de la placer dans la fenêtre de reconnexion qui existait déjà : c'est le moment exact où l'utilisateur vit le problème, et où il est le plus prêt à changer. Je l'ai intégrée comme les connexions « avec Google ou avec Apple » : un séparateur « ou », puis la seconde méthode.",
          },
          {
            type: 'p',
            text: "Pour la mettre en avant : un badge « Recommended » et une phrase courte sur le bénéfice. Garder son compte toujours connecté, ne plus avoir à se reconnecter, ne plus perdre d'actions. La connexion simple reste disponible pour ceux qui ne sont pas prêts.",
          },
          {
            type: 'img',
            src: '/projects/infinite-login/01-reconnexion.webp',
            caption: "La fenêtre de reconnexion existante, avec l'Infinite Login en seconde méthode recommandée",
            portrait: true,
          },
        ],
      },
      {
        title: 'Deux chemins, chacun le sien',
        blocks: [
          {
            type: 'p',
            text: "Une seule question ouvre le parcours : avez-vous déjà la 2FA activée sur LinkedIn ? Deux accordéons, et chacun ne déplie que le sien. Le haut de la fenêtre explique pourquoi on le demande : protéger le compte et éviter que les campagnes se mettent en pause.",
          },
          {
            type: 'img',
            src: '/projects/infinite-login/02-question.webp',
            caption: 'La question qui sépare les deux chemins',
          },
          {
            type: 'list',
            items: [
              "Sans 2FA : la durée est annoncée dans le titre, 4 minutes, pour qu'on sache dans quoi on s'engage. Puis cinq étapes numérotées, avec les libellés exacts des menus de LinkedIn.",
              "Avec la 2FA : les conditions sont dites avant le formulaire. Il faut une application d'authentification (les SMS ne fonctionnent pas) et avoir gardé sa clé secrète. Si elle est perdue, un guide explique comment la récupérer.",
              "Le bouton de validation fait vérifier : « Oui, la 2FA est activée et j'ai ma clé secrète ». L'utilisateur confirme qu'il a ce qu'il faut avant d'arriver au formulaire.",
            ],
          },
          {
            type: 'grid',
            images: [
              { src: '/projects/infinite-login/03-sans-2fa.webp', caption: "Sans 2FA : 5 étapes et la capture annotée de l'écran LinkedIn" },
              { src: '/projects/infinite-login/04-deja-2fa.webp', caption: "Avec la 2FA : les conditions, avant l'erreur" },
            ],
          },
          {
            type: 'p',
            text: "L'étape où les gens se perdaient se passe chez LinkedIn : copier la clé secrète. J'ai ajouté une capture de cet écran, avec une flèche sur la clé et la consigne « Copy this key, it's required to log in », déclinée en français. Le formulaire qui suit reste court : l'email pré-rempli, le mot de passe, la clé, un lien d'aide, puis le code de vérification.",
          },
          {
            type: 'img',
            src: '/projects/infinite-login/05-code.webp',
            caption: 'Le code de vérification, avec le renvoi du code',
          },
        ],
      },
      {
        title: "Rendre l'état visible",
        blocks: [
          {
            type: 'p',
            text: "Le vrai problème, c'était une déconnexion découverte deux semaines trop tard. Dans les réglages, le compte affiche désormais son état : « Connecté via 2FA » en vert, ou « Connexion interrompue » en orange, avec un bouton pour se reconnecter. Pendant la connexion, un message « Connexion en cours » laisse l'utilisateur reprendre son travail sans attendre dans la fenêtre.",
          },
          {
            type: 'p',
            text: "Un encart explique ce que fait Waalaxy, pourquoi les campagnes tournent même ordinateur éteint, et que la 2FA réduit le risque de suspension temporaire par LinkedIn. Chaque phrase est écrite dans les deux langues avec la même exigence.",
          },
          {
            type: 'grid',
            images: [
              { src: '/projects/infinite-login/06-etat-connecte-en.webp', caption: 'Compte connecté via 2FA, version anglaise' },
              { src: '/projects/infinite-login/07-etat-interrompu-fr.webp', caption: 'Connexion interrompue, avec le bouton pour se reconnecter, version française' },
            ],
          },
        ],
      },
      {
        title: 'Livrer et rassurer',
        blocks: [
          {
            type: 'p',
            text: "Le brief est arrivé à la squad avec la solution choisie. J'ai mis au point les premiers wireframes avec le PM, puis le partage était clair : le PM a écrit les specs techniques, moi les maquettes et les specs d'interaction et de parcours. Le séparateur « ou » n'existait pas dans le design system : j'en ai fait une variante du composant séparateur, avec une propriété texte, ses specs, son ticket et sa documentation.",
          },
          {
            type: 'p',
            text: "Le handoff est organisé parcours par parcours : une carte de couverture avec le statut, la langue, la date de mise à jour et la version, puis les écrans dans l'ordre, en français et en anglais. Chaque décision est annotée sur l'écran, avec sa date et son auteur.",
          },
          {
            type: 'img',
            src: '/projects/infinite-login/08-organisation-figma.webp',
            caption: 'Le fichier de handoff : un parcours par ligne, FR et EN, décisions annotées',
          },
          {
            type: 'p',
            text: "Demander des identifiants peut faire peur. La sortie, en janvier 2026, s'est accompagnée d'un article de blog et d'une vidéo tutoriel sur YouTube, pour rassurer et répondre aux questions avant qu'elles arrivent au support.",
          },
        ],
      },
      {
        title: 'Résultats et limites',
        blocks: [
          {
            type: 'list',
            items: [
              'Les comptes connectés en 2FA ne sont plus déconnectés.',
              "42% des utilisateurs étaient connectés via la 2FA au printemps 2026. Les autres restaient en connexion simple, plus une petite part de comptes gratuits qui gardent leur ordinateur allumé.",
              'Les demandes au support ont baissé de 18%, toutes demandes confondues, de janvier à avril 2026.',
            ],
          },
          {
            type: 'callout',
            text: "Ces chiffres ont deux limites. La baisse du support coïncide avec la sortie, mais d'autres facteurs ont pu jouer sur la même période. Et les utilisateurs qui passent en 2FA sont sans doute les plus engagés : comparer leurs déconnexions à celles des autres ne mesure pas seulement l'effet du design.",
          },
          {
            type: 'h3',
            text: 'Ce que je mesurerais maintenant',
          },
          {
            type: 'list',
            items: [
              "Le taux de connexion terminée sur chacun des deux chemins, pour voir où les gens abandonnent.",
              "La part de comptes en « Connexion interrompue » qui se reconnectent dans la journée, pour savoir si l'état visible fait son travail.",
              "Le churn des comptes en 2FA comparé aux autres, à ancienneté égale. C'est lui qui dit si des campagnes qui ne s'arrêtent plus retiennent les clients.",
            ],
          },
        ],
      },
    ],
    learnings:
      "Quand on demande à quelqu'un de confier quelque chose de sensible, la confiance se gagne avant le formulaire : dire pourquoi, combien de temps cela prend, ce qu'il faut avoir sous la main. Elle se garde ensuite en montrant l'état du compte, pour que personne ne découvre un problème deux semaines trop tard. Et le meilleur endroit pour proposer une solution, c'est le moment où l'utilisateur rencontre le problème.",
  },

  en: {
    id: '12',
    slug: 'infinite-login',
    title: 'Infinite Login: getting users to trust us with their LinkedIn access',
    tagline: 'No more disconnections for 2FA accounts, and 18% fewer support requests',
    description:
      'A LinkedIn connection through two-factor authentication, so campaigns stop halting silently. Placed where the problem happens, two paths depending on the user, a visible account state. Result: no more disconnections on 2FA, 42% of users connected this way, -18% support requests.',
    coverImage: '/projects/infinite-login.webp',
    coverVideo: '/projects/infinite-login/infinite-login-film.mp4',
    tags: ['Security', 'UX writing'],
    caseStudyUrl: null,
    featured: false,
    role: 'Product Designer & Lead Design System',
    company: 'Waalaxy',
    period: '2025 → Jan 2026',
    status: 'Shipped to production in January 2026',
    team: '1 PM · 2 devs · 1 designer',
    metrics: [
      { value: '0', label: 'disconnections for accounts connected through 2FA' },
      { value: '42%', label: 'of users connected through 2FA (April-May 2026)' },
      { value: '-18%', label: 'support requests, January to April 2026' },
      { value: 'FR + EN', label: 'flow and microcopy designed in both languages' },
    ],
    intro:
      'Waalaxy automates LinkedIn prospecting: usually 150 actions a day per user. When LinkedIn tightened its security, simple login started disconnecting our users regularly. For an automation tool, that is the worst case: campaigns stop silently. According to support, users noticed one to two weeks too late. At 150 actions a day, that meant 1,000 to 2,000 actions that never went out.',
    sections: [
      {
        title: 'Two reasons to act',
        blocks: [
          {
            type: 'p',
            text: 'Connection and disconnection were the second most common reason for support requests, along with automatic renewal, and one of the most frustrating for users. At the same time, LinkedIn was penalising competing tools, and other players were turning security and trust into a selling point.',
          },
          {
            type: 'p',
            text: 'The founders decided on the technical answer: a lasting LinkedIn connection through two-factor authentication (2FA). The what was set. My job, in a squad with the PM and two developers, was the how.',
          },
          {
            type: 'callout',
            text: 'The challenge: getting salespeople to hand over their LinkedIn password and 2FA secret key, through a procedure partly done on LinkedIn, outside our interface. Every step is a place where you can lose the user\'s trust, or the user.',
          },
        ],
      },
      {
        title: 'Warning users by email',
        blocks: [
          {
            type: 'p',
            text: "My first idea was to email users when they got disconnected. It was shipped, and it only solved part of the problem. A user who has prepared two or three campaigns ahead lets them run and may come back two weeks later. As long as they don't open the app, nothing tells them everything has stopped: the email warns them when it happens. It does not restart the actions, though. The user still has to reconnect, and will get disconnected again later. Fixing the cause took a connection that lasts: 2FA.",
          },
        ],
      },
      {
        title: 'Where the problem happens',
        blocks: [
          {
            type: 'p',
            text: 'The option was first meant to live in settings. We chose to place it in the existing reconnection modal instead: the exact moment users hit the problem, and when they are most ready to switch. I added it like "sign in with Google or Apple" options: an "or" divider, then the second method.',
          },
          {
            type: 'p',
            text: 'To highlight it: a "Recommended" badge and one short line on the benefit. Keep your account always connected, never reconnect again, never lose actions. Simple login stays available for those who are not ready.',
          },
          {
            type: 'img',
            src: '/projects/infinite-login/01-reconnexion.webp',
            caption: 'The existing reconnection modal, with Infinite Login as the recommended second method',
            portrait: true,
          },
        ],
      },
      {
        title: 'Two paths, one each',
        blocks: [
          {
            type: 'p',
            text: 'A single question opens the flow: do you already have 2FA enabled on LinkedIn? Two accordions, and each user only opens their own. The top of the modal explains why we ask: protecting the account and keeping campaigns from pausing.',
          },
          {
            type: 'img',
            src: '/projects/infinite-login/02-question.webp',
            caption: 'The question that splits the two paths',
          },
          {
            type: 'list',
            items: [
              'Without 2FA: the time is stated in the title, 4 minutes, so people know what they are signing up for. Then five numbered steps, using the exact labels of LinkedIn menus.',
              'With 2FA: the conditions come before the form. You need an authenticator app (SMS does not work) and your saved secret key. If it is lost, a guide explains how to get a new one.',
              'The confirm button makes people check: "Yes, 2FA is enabled and I have my 2FA secret key". Users confirm they have what they need before reaching the form.',
            ],
          },
          {
            type: 'grid',
            images: [
              { src: '/projects/infinite-login/03-sans-2fa.webp', caption: 'Without 2FA: 5 steps and the annotated LinkedIn screenshot' },
              { src: '/projects/infinite-login/04-deja-2fa.webp', caption: 'With 2FA: the conditions, before the error' },
            ],
          },
          {
            type: 'p',
            text: 'The step where people got lost happens on LinkedIn: copying the secret key. I added a screenshot of that screen, with an arrow on the key and the instruction "Copy this key, it\'s required to log in", also in French. The form that follows stays short: prefilled email, password, key, a help link, then the verification code.',
          },
          {
            type: 'img',
            src: '/projects/infinite-login/05-code.webp',
            caption: 'The verification code, with a resend link',
          },
        ],
      },
      {
        title: 'Making the state visible',
        blocks: [
          {
            type: 'p',
            text: 'The real problem was a disconnection found two weeks too late. In settings, the account now shows its state: "Connected via 2FA" in green, or "Connection interrupted" in orange, with a button to reconnect. While connecting, a "Connecting" message lets users get back to work without waiting in the modal.',
          },
          {
            type: 'p',
            text: 'A card explains what Waalaxy does, why campaigns run even with the computer off, and that 2FA lowers the risk of a temporary suspension by LinkedIn. Every sentence is written in both languages with the same care.',
          },
          {
            type: 'grid',
            images: [
              { src: '/projects/infinite-login/06-etat-connecte-en.webp', caption: 'Account connected via 2FA, English version' },
              { src: '/projects/infinite-login/07-etat-interrompu-fr.webp', caption: 'Connection interrupted, with the reconnect button, French version' },
            ],
          },
        ],
      },
      {
        title: 'Shipping and reassuring',
        blocks: [
          {
            type: 'p',
            text: 'The brief reached the squad with the solution already chosen. I refined the first wireframes with the PM, then the split was clear: the PM wrote the technical specs, I did the mockups and the interaction and flow specs. The "or" divider did not exist in the design system: I added a variant of the divider component with a text property, along with its specs, ticket and documentation.',
          },
          {
            type: 'p',
            text: 'The handoff is organised flow by flow: a cover card with status, language, last update date and version, then the screens in order, in French and English. Every decision is annotated on the screen, with its date and author.',
          },
          {
            type: 'img',
            src: '/projects/infinite-login/08-organisation-figma.webp',
            caption: 'The handoff file: one flow per row, FR and EN, annotated decisions',
          },
          {
            type: 'p',
            text: 'Asking for credentials can be scary. The January 2026 release came with a blog post and a YouTube tutorial, to reassure users and answer questions before they reached support.',
          },
        ],
      },
      {
        title: 'Results and limits',
        blocks: [
          {
            type: 'list',
            items: [
              'Accounts connected through 2FA no longer get disconnected.',
              '42% of users were connected through 2FA in spring 2026. The others stayed on simple login, plus a small share of free accounts that keep their computer on.',
              'Support requests dropped by 18%, all topics combined, from January to April 2026.',
            ],
          },
          {
            type: 'callout',
            text: 'These numbers have two limits. The drop in support matches the release, but other factors may have played a part over the same period. And users who switch to 2FA are probably the most engaged: comparing their disconnections with others does not measure the design alone.',
          },
          {
            type: 'h3',
            text: 'What I would measure now',
          },
          {
            type: 'list',
            items: [
              'Completion rate on each of the two paths, to see where people drop off.',
              'The share of "Connection interrupted" accounts that reconnect within a day, to know whether the visible state does its job.',
              'Churn of 2FA accounts compared with others, at equal tenure. That is what tells whether campaigns that no longer stop keep customers.',
            ],
          },
        ],
      },
    ],
    learnings:
      'When you ask someone to hand over something sensitive, trust is won before the form: say why, how long it takes, what to have at hand. It is kept afterwards by showing the account state, so nobody finds a problem two weeks too late. And the best place to offer a fix is the moment users run into the problem.',
  },
}
