'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Theme = 'dark' | 'light'

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" />
      <line x1="12" y1="2" x2="12" y2="4.5" />
      <line x1="12" y1="19.5" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="5.93" y2="5.93" />
      <line x1="18.07" y1="18.07" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="4.5" y2="12" />
      <line x1="19.5" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.93" y2="18.07" />
      <line x1="18.07" y1="5.93" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function NavBar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    // Read the theme that was set by the anti-flash script
    const current = document.documentElement.getAttribute('data-theme') as Theme
    setTheme(current === 'light' ? 'light' : 'dark')
  }, [])

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    // Briefly enable smooth transitions across all elements
    document.documentElement.classList.add('theme-changing')
    document.documentElement.setAttribute('data-theme', next)
    try { localStorage.setItem('theme', next) } catch (_) {}
    setTheme(next)
    setTimeout(() => document.documentElement.classList.remove('theme-changing'), 350)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 backdrop-blur-[20px]' : 'py-5'
      }`}
      style={scrolled ? {
        background: 'rgba(10, 8, 6, 0.4)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      } : undefined}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-sm tracking-tight text-text hover:text-accent transition-colors"
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

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
            className="p-2 rounded-full text-muted hover:text-text hover:bg-surface transition-colors"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0c0YANfA-PSK7D6Lq8ZlTKa0X9DLWUhb7RpKVTlxFGiVGJg3c3fa4cm8d5c9yeSMrNk2jYJZt0"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-bg bg-accent rounded-full hover:bg-accent-dim transition-colors"
          >
            On en parle ?
          </a>
        </div>
      </nav>
    </header>
  )
}
