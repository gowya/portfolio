import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm">
          © {year} Margaux Francillard • Montpellier
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/margauxfrancillard"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted text-sm hover:text-text transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0c0YANfA-PSK7D6Lq8ZlTKa0X9DLWUhb7RpKVTlxFGiVGJg3c3fa4cm8d5c9yeSMrNk2jYJZt0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted text-sm hover:text-text transition-colors"
          >
            On en parle ?
          </a>
          <Link
            href="/projects"
            className="text-muted text-sm hover:text-text transition-colors"
          >
            Projets
          </Link>
        </div>
      </div>
    </footer>
  )
}
