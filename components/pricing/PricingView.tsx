'use client'

import { useLang } from '@/lib/i18n'
import { BOOKING_URL } from '@/lib/links'

function ClockIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </svg>
  )
}

function ArrowDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 2v10M2 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const OPTION_ICON_PATHS: Record<string, string> = {
  layout: 'M4 4h16v16H4zM4 9h16M9 9v11',
  sparkles: 'M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z',
  chart: 'M4 20h16M7 16v-4M12 16V8M17 16v-7',
  route: 'M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM8 17h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7',
}

function OptionIcon({ name }: { name: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={OPTION_ICON_PATHS[name]} />
    </svg>
  )
}

export default function PricingView() {
  const { t } = useLang()
  const p = t.pricing

  return (
    <div className="min-h-screen pb-20">
      <header
        className="relative pt-40 pb-16 px-6"
        style={{
          backgroundImage: [
            'radial-gradient(ellipse 80% 35% at 50% 0%, rgba(160,80,20,0.18) 0%, transparent 60%)',
            'var(--hero-reed-stripes)',
          ].join(', '),
          backgroundSize: '100% 100%, 6px 100%',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-4">{p.label}</p>
          <h1 className="text-text mb-4 tracking-tight max-w-3xl leading-[1.05]" style={{ fontFamily: 'var(--font-italiana), Georgia, serif', fontSize: 'clamp(2.75rem, 6vw, 5rem)' }}>
            {p.title}
          </h1>
          <p className="text-muted text-lg max-w-xl leading-relaxed">
            {p.subtitle}
          </p>
        </div>
        {/* Fade the reed background into the page at the hero's bottom edge */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '80px',
            background: 'linear-gradient(to bottom, transparent, var(--bg))',
          }}
        />
      </header>

      <div className="px-6 pt-8">
        <div className="max-w-6xl mx-auto">

          {/* Step 1 • Diagnostic */}
          <section className="rounded-2xl border border-border bg-bg-card p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="flex-1 flex flex-col gap-3">
              <p className="section-label">{p.diagnostic.step}</p>
              <p className="text-text/80 leading-relaxed max-w-xl">{p.diagnostic.description}</p>
              <p className="flex items-center gap-2 text-sm text-text">
                <span className="text-ember"><ClockIcon /></span>
                {p.diagnostic.meta}
              </p>
            </div>
            <div className="flex items-center justify-between md:justify-end gap-6 md:gap-10">
              <div className="md:text-right">
                <p className="text-3xl font-semibold tracking-tight text-text">{p.diagnostic.price}</p>
                <p className="text-sm text-ember">{p.diagnostic.note}</p>
              </div>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                {p.diagnostic.cta}
                <ArrowRightIcon />
              </a>
            </div>
          </section>

          {/* Step 2 • monthly plans */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-10 mb-4">
            <p className="flex items-center gap-2 text-sm text-muted">
              <ArrowDownIcon />
              {p.monthlyStep}
            </p>
            <span className="tag !text-ember !border-ember/40">{p.commitment}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {p.plans.map((plan) => (
              <section
                key={plan.name}
                className={`rounded-2xl bg-bg-card p-6 md:p-8 flex flex-col gap-5 ${
                  plan.featured ? 'border-[1.5px] border-accent' : 'border border-border'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h2 className="section-label">{plan.name}</h2>
                  {plan.featured ? (
                    <span className="px-2.5 py-1 text-xs font-semibold text-bg bg-accent rounded-full">{plan.badge}</span>
                  ) : (
                    <span className="tag">{plan.badge}</span>
                  )}
                </div>

                <p className="flex items-baseline flex-wrap gap-x-2">
                  <span className="sr-only">{p.withoutCommitment}</span>
                  <del className="text-muted text-base">{plan.oldPrice}</del>
                  <span className="text-4xl font-semibold tracking-tight text-text">{plan.price}</span>
                  <span className="text-muted text-sm">{p.perMonth}</span>
                </p>

                <p className="flex items-center gap-2 text-sm text-text">
                  <span className="text-ember"><CalendarIcon /></span>
                  {plan.meta}
                </p>

                <p className="text-text/80 leading-relaxed">{plan.description}</p>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${plan.featured ? 'btn-primary' : 'btn-ghost'} w-fit mt-auto`}
                >
                  {p.cta}
                  <ArrowRightIcon />
                </a>
              </section>
            ))}
          </div>

          {/* Add-ons */}
          <section className="mt-14">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h2 className="section-label">{p.optionsLabel}</h2>
              <p className="text-sm text-muted">{p.optionsNote}</p>
            </div>
            <ul>
              {p.options.map((option) => (
                <li key={option.name} className="flex items-start gap-4 py-4 border-t border-border">
                  <span className="text-ember shrink-0 mt-0.5"><OptionIcon name={option.icon} /></span>
                  <div className="flex-1 min-w-0">
                    <p className="text-text">{option.name}</p>
                    <p className="text-sm text-muted leading-relaxed">{option.description}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-text font-semibold whitespace-nowrap">{option.price}</p>
                    {option.includedIn && (
                      <p className="text-xs text-ember whitespace-nowrap">{option.includedIn}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <p className="text-xs text-muted mt-6">{p.vat}</p>
        </div>
      </div>
    </div>
  )
}
