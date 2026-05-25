'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 border-b border-border bg-bg/80 backdrop-blur-md' : 'py-5'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-bold text-sm tracking-tight text-text hover:text-accent transition-colors"
        >
          MF
        </Link>

        <ul className="flex items-center gap-1">
          {[
            { href: '/', label: 'Home' },
            { href: '/projects', label: 'Projets' },
            { href: '/about', label: 'À propos' },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  pathname === href
                    ? 'text-text bg-surface'
                    : 'text-muted hover:text-text'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="mailto:margaux@waalaxy.com"
          className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-bg bg-accent rounded-full hover:bg-accent-dim transition-colors"
        >
          Contact
        </a>
      </nav>
    </header>
  )
}
