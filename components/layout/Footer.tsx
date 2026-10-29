'use client'

import Link from 'next/link'
import { useLang } from '@/lib/i18n'
import { BOOKING_URL } from '@/lib/links'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm">
          © {year} Margaux Francillard • Montpellier
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/margaux-francillard/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted text-sm hover:text-text transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted text-sm hover:text-text transition-colors"
          >
            {t.footer.talk}
          </a>
          <Link
            href="/projects"
            className="text-muted text-sm hover:text-text transition-colors"
          >
            {t.footer.work}
          </Link>
        </div>
      </div>
    </footer>
  )
}
