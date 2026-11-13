import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/links'

// Every page is public: crawlers (search engines and AI assistants) may read it all.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
