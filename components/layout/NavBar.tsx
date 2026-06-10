'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'

type Theme = 'dark' | 'light'

function ColorSwatchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 4.5V18C10 19.08 9.56 20.07 8.86 20.79L8.82 20.83C8.73 20.92 8.63 21.01 8.54 21.08C8.24 21.34 7.9 21.54 7.55 21.68C7.44 21.73 7.33 21.77 7.22 21.81C6.83 21.94 6.41 22 6 22C5.73 22 5.46 21.97 5.2 21.92C5.07 21.89 4.94 21.86 4.81 21.82C4.65 21.77 4.5 21.72 4.35 21.65C4.06 21.51 3.79 21.35 3.54 21.16L3.53 21.15C3.4 21.05 3.28 20.95 3.17 20.83C3.06 20.71 2.95 20.59 2.84 20.46C2.65 20.21 2.49 19.94 2.35 19.66C2.28 19.49 2.23 19.34 2.18 19.19C2.14 19.06 2.11 18.93 2.08 18.8C2.03 18.54 2 18.27 2 18V4.5C2 3 3 2 4.5 2H7.5C9 2 10 3 10 4.5Z" />
      <path d="M22 16.5V19.5C22 21 21 22 19.5 22H6C6.41 22 6.83 21.94 7.22 21.81C7.33 21.77 7.44 21.73 7.55 21.68C7.9 21.54 8.24 21.34 8.54 21.08C8.63 21.01 8.73 20.92 8.82 20.83L8.86 20.79L15.66 14H19.5C21 14 22 15 22 16.5Z" />
      <path d="M18.37 11.29L15.66 14L8.86 20.79C9.56 20.07 10 19.08 10 18V8.34L12.71 5.63C13.77 4.57 15.19 4.57 16.25 5.63L18.37 7.75C19.43 8.81 19.43 10.23 18.37 11.29Z" />
      <circle cx="6" cy="18" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

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

function BurgerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <line x1="2" y1="4" x2="14" y2="4" />
      <line x1="2" y1="8" x2="14" y2="8" />
      <line x1="2" y1="12" x2="14" y2="12" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <line x1="3" y1="3" x2="13" y2="13" />
      <line x1="13" y1="3" x2="3" y2="13" />
    </svg>
  )
}

const NAV_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/projects', label: 'Mes projets' },
  { href: '/about', label: 'Qui je suis' },
]

export default function NavBar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<Theme>('dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const menuLinksRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme') as Theme
    setTheme(current === 'light' ? 'light' : 'dark')
  }, [])

  // Close menu on route change
  useEffect(() => {
    closeMenu()
  }, [pathname])

  // GSAP overlay animation
  useEffect(() => {
    const overlay = overlayRef.current
    const links = menuLinksRef.current
    if (!overlay) return

    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      overlay.style.pointerEvents = 'auto'
      gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'power2.out' })
      if (links) {
        gsap.fromTo(
          links.children,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.3, stagger: 0.06, ease: 'power3.out', delay: 0.1 }
        )
      }
    } else {
      overlay.style.pointerEvents = 'none'
      document.body.style.overflow = ''
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
      })
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.add('theme-changing')
    document.documentElement.setAttribute('data-theme', next)
    try { localStorage.setItem('theme', next) } catch (_) {}
    setTheme(next)
    setTimeout(() => document.documentElement.classList.remove('theme-changing'), 350)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3 backdrop-blur-[20px]' : 'py-5'
        }`}
        style={scrolled ? {
          background: 'var(--nav-scrolled-bg)',
          borderBottom: '1px solid var(--nav-scrolled-border)',
        } : undefined}
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className="font-bold text-sm tracking-tight text-text hover:text-accent transition-colors"
          >
            MF
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => (
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

          {/* Desktop right controls */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/design-system"
              aria-label="Design System"
              title="Design System"
              className="p-2 rounded-full text-muted hover:text-accent hover:bg-surface transition-colors"
            >
              <ColorSwatchIcon />
            </Link>
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
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-bg bg-accent rounded-full hover:bg-accent-dim transition-colors"
            >
              On en parle ?
            </a>
          </div>

          {/* Mobile right controls: DS icon · theme toggle · burger */}
          <div className="md:hidden flex items-center gap-3">
            <Link
              href="/design-system"
              aria-label="Design System"
              title="Design System"
              className="p-2 rounded-full text-muted hover:text-accent transition-colors"
            >
              <ColorSwatchIcon />
            </Link>
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
              className="p-2 rounded-full text-muted hover:text-text transition-colors"
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu"
              className="p-2 rounded-full text-text hover:text-accent transition-colors"
            >
              <BurgerIcon />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[100] flex flex-col md:hidden"
        style={{ background: 'var(--bg)', opacity: 0, pointerEvents: 'none' }}
        aria-modal="true"
        role="dialog"
        aria-label="Menu de navigation"
      >
        {/* Overlay header */}
        <div className="flex items-center justify-between px-6 py-5">
          <Link
            href="/"
            onClick={closeMenu}
            className="font-bold text-sm tracking-tight text-text"
          >
            MF
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/design-system"
              onClick={closeMenu}
              aria-label="Design System"
              className="p-2 rounded-full text-muted hover:text-accent transition-colors"
            >
              <ColorSwatchIcon />
            </Link>
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
              className="p-2 rounded-full text-muted hover:text-text transition-colors"
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={closeMenu}
              aria-label="Fermer le menu"
              className="p-2 rounded-full text-muted hover:text-text transition-colors"
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        {/* Nav links — vertically centered */}
        <div
          ref={menuLinksRef}
          className="flex flex-col items-center justify-center flex-1 gap-8"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className={`text-3xl font-medium transition-colors ${
                pathname === href ? 'text-accent' : 'text-text hover:text-accent'
              }`}
            >
              {label}
            </Link>
          ))}

          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0c0YANfA-PSK7D6Lq8ZlTKa0X9DLWUhb7RpKVTlxFGiVGJg3c3fa4cm8d5c9yeSMrNk2jYJZt0"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-4 inline-flex items-center gap-1.5 px-6 py-3 text-sm font-medium text-bg bg-accent rounded-full hover:bg-accent-dim transition-colors"
          >
            On en parle ?
          </a>
        </div>
      </div>
    </>
  )
}
