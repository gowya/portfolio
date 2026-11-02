# CLAUDE.md

Règles du projet pour Claude Code. Elles sont **obligatoires**. Si une demande les contredit, demande confirmation avant d'agir.

## Le projet

Portfolio de Margaux Francillard (Product Designer, Design System Lead). Next.js 14 App Router, TypeScript, Tailwind CSS, GSAP, déployé sur Vercel. Site bilingue FR/EN.

```
app/          pages (App Router)
components/   composants, rangés par page (home/, about/, projects/, pricing/) + layout/ et ui/
lib/          i18n.ts (textes UI), projects/ (une étude de cas par fichier), about-data.ts,
              projects-data.ts (assemble le contenu + accesseurs), types.ts, animations GSAP, links.ts
scripts/      smoke-test.js
```

## Commandes

| Commande | Rôle |
|---|---|
| `npm run dev` | serveur local |
| `npm run check` | lint (zéro warning toléré) + typage TypeScript |
| `npm run build` | build de production |
| `npm run smoke` | vérifie que chaque page publique répond en 200 (serveur lancé sur le port 3000) |

## Avant de dire "c'est fait"

1. `npm run check` passe sans erreur ni warning.
2. `npm run build` passe.
3. `npm run smoke` passe à 100 %.
4. Tu as relu ton diff : aucun fichier modifié hors du périmètre demandé.

Si une étape échoue, corrige ou dis-le clairement. Ne déclare jamais une tâche terminée sans ces vérifications.

## Design system : tokens obligatoires

- **Couleurs** : uniquement les tokens Tailwind définis dans `tailwind.config.ts` (`bg`, `bg-subtle`, `bg-card`, `surface`, `border`, `text`, `muted`, `accent`, `accent-dim`, `ember`, `sienna`), avec l'opacité Tailwind si besoin (`text-text/60`).
- **Interdit** : hex, `rgb()` ou `rgba()` en dur dans `components/` et `app/` (hors `globals.css`), et les valeurs arbitraires de couleur (`bg-[#...]`, `text-[#...]`).
- Besoin d'une couleur qui n'existe pas : ajoute la variable dans `app/globals.css` **pour les deux thèmes** (`[data-theme="dark"]` et `[data-theme="light"]`), puis le token dans `tailwind.config.ts`. Jamais un seul thème.
- **Espacements et tailles** : échelle Tailwind standard. Valeur arbitraire (`[13px]`) seulement si aucune valeur de l'échelle ne convient, avec un commentaire qui explique pourquoi.
- Tout nouveau token ou composant réutilisable doit apparaître sur la page `/design-system`.

## Contenu et i18n

- **FR et EN toujours ensemble.** Un texte ajouté ou modifié en FR l'est aussi en EN dans le même commit, et inversement.
- Textes d'interface : `lib/i18n.ts` (`UI_FR` / `UI_EN`). Aucun texte visible en dur dans un composant.
- Études de cas : un fichier par projet, `lib/projects/<slug>.ts`, avec `fr` et `en` côte à côte. L'ordre d'affichage se règle uniquement dans `lib/projects/index.ts`. Nouveau projet : nouveau fichier + une ligne dans l'index.
- Page À propos : `lib/about-data.ts`. Ne pas remettre de contenu dans `lib/projects-data.ts`, qui ne fait qu'assembler.
- Un projet = même `slug` et même `id` en FR et en EN. Le smoke test lit les slugs automatiquement, pas besoin de le modifier.
- Liens externes (réservation, réseaux) : passer par `lib/links.ts`, jamais d'URL dupliquée.

## Règles d'écriture (copy)

- **Jamais de tiret long (—)**, ni dans le contenu, ni dans le README, ni dans les commits. Utilise une virgule, deux-points ou un point.
- Pas de tournure "pas X, mais Y" ou "ce n'est pas X, c'est Y". Formulation directe et affirmative.
- Phrases courtes, sans jargon, débuts de phrase variés. Ton direct, ancré, pas de formules creuses ou trop polies.
- Ne jamais inventer un chiffre, une métrique ou une citation. Si l'info manque, demande.

## Code

- TypeScript strict : pas de `any`, pas de `@ts-ignore`, pas de `eslint-disable` sans commentaire qui justifie.
- Composants serveur par défaut. `'use client'` seulement si le composant utilise un hook, un événement ou GSAP.
- Pas de nouvelle dépendance npm sans accord explicite.
- **Pas de code mort.** Quand tu retires une fonctionnalité, supprime aussi le fichier, ses imports, ses dépendances, ses variables d'environnement et sa mention dans le README.
- Ne documente dans le README que ce qui existe et fonctionne réellement.
- Respecte `prefers-reduced-motion` pour toute nouvelle animation GSAP.
- Fichier qui dépasse ~400 lignes : propose un découpage avant d'en rajouter.

## Git

- Une branche par sujet (`feat/...`, `fix/...`, `content/...`, `chore/...`), merge via Pull Request. Pas de push direct sur `main`.
- Commits au format conventionnel : `feat:`, `fix:`, `content(<slug>):`, `refactor:`, `chore:`. Préciser `(FR + EN)` quand le contenu bilingue change.
- Un commit = un changement cohérent. Pas de commit fourre-tout.
- Ne jamais committer `.env*`, `.vercel/` ou des fichiers générés.

## Médias

- Images et vidéos dans `public/projects/<slug>/`, en `.webp`, `.jpg` ou `.mp4` compressés.
- Supprime les médias qui ne sont plus référencés dans le code.
- Toute image a une légende ou un texte alternatif, en FR et en EN.
