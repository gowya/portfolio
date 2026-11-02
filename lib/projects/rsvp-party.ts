// RSVP Party
import type { LocalizedProject } from '../types'

export const rsvpParty: LocalizedProject = {
  fr: {
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

  en: {
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
}
