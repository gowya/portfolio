import { ABOUT } from './about-data'
import { LINKEDIN_URL, SITE_URL } from './links'

// schema.org data injected once in the root layout. It tells search engines and
// AI assistants who is behind the site, using only facts already shown on it.
export const PERSON_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Margaux Francillard',
  url: SITE_URL,
  image: `${SITE_URL}/margaux.png`,
  jobTitle: 'Product Designer & Lead Design System',
  description: ABOUT.fr.bio.split('\n\n')[0],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Montpellier',
    addressCountry: 'FR',
  },
  alumniOf: { '@type': 'Organization', name: 'Waalaxy' },
  knowsAbout: ['Product design', 'Design system', 'UX design', 'SaaS B2B', 'Figma', 'Claude Code'],
  knowsLanguage: ['fr', 'en'],
  sameAs: [LINKEDIN_URL],
}
