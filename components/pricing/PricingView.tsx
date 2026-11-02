'use client'

import { useLang } from '@/lib/i18n'
import { BOOKING_URL } from '@/lib/links'

function CalendarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
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

const ICON_PATHS: Record<string, string> = {
  ticket: 'M4 7h16v3a2 2 0 0 0 0 4v3H4v-3a2 2 0 0 0 0-4zM14 7v10',
  pullRequest: 'M6 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM6 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM6 7v10M18 17V9a3 3 0 0 0-3-3h-4M13 4l-2 2 2 2',
  review: 'M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6zM9.5 12l1.8 1.8 3.2-3.6',
  layout: 'M4 4h16v16H4zM4 9h16M9 9v11',
  sparkles: 'M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z',
  chart: 'M4 20h16M7 16v-4M12 16V8M17 16v-7',
  route: 'M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM8 17h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7',
}

function LineIcon({ name }: { name: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={ICON_PATHS[name]} />
    </svg>
  )
}

export default function PricingView() {
  const { t } = useLang()
  const p = t.pricing

  return (
    <div className="min-h-screen pb-20">
      <header
        className="relative page-header-bg pt-40 pb-16 px-6"
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

          {/* How I work • ticket → pull request → review */}
          <ol className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
            {p.steps.map((step) => (
              <li key={step.title} className="flex items-start gap-3 rounded-xl bg-surface px-4 py-3">
                <span className="text-ember shrink-0 mt-0.5"><LineIcon name={step.icon} /></span>
                <div>
                  <p className="text-sm text-text">{step.title}</p>
                  <p className="text-xs text-muted">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Step 1 • Diagnostic */}
          <section className="rounded-2xl border border-border bg-bg-card p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="flex-1 flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-text">
                {p.diagnostic.name}
                <span className="font-normal text-muted"> · {p.diagnostic.tagline}</span>
              </h2>
              <p className="text-text/80 leading-relaxed max-w-xl">{p.diagnostic.description}</p>
            </div>
            <div className="flex items-center justify-between md:justify-end gap-6 md:gap-10">
              <div className="md:text-right">
                <p className="flex items-baseline md:justify-end gap-x-2">
                  <span className="text-muted text-sm">{p.from}</span>
                  <span className="text-3xl font-semibold tracking-tight text-text">{p.diagnostic.price}</span>
                </p>
                <p className="text-sm text-ember">{p.diagnostic.note}</p>
              </div>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                {p.cta}
                <ArrowRightIcon />
              </a>
            </div>
          </section>

          {/* Step 2 • monthly plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {p.plans.map((plan) => (
              <section
                key={plan.name}
                className={`rounded-2xl bg-bg-card p-6 md:p-8 flex flex-col gap-4 ${
                  plan.featured ? 'border-[1.5px] border-accent' : 'border border-border'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-lg font-semibold text-text">{plan.name}</h2>
                  {plan.featured ? (
                    <span className="px-2.5 py-1 text-xs font-semibold text-bg bg-accent rounded-full">{plan.badge}</span>
                  ) : (
                    <span className="text-xs text-muted">{plan.badge}</span>
                  )}
                </div>

                <p className="flex items-center gap-2 text-sm text-muted -mt-2">
                  <span className="text-ember"><CalendarIcon /></span>
                  {plan.meta}
                </p>

                <p className="flex items-baseline gap-x-2">
                  <span className="text-muted text-sm">{p.from}</span>
                  <span className="text-4xl font-semibold tracking-tight text-text">{plan.price}</span>
                  <span className="text-muted text-sm">{p.perMonth}</span>
                </p>

                <div>
                  <p className="text-sm font-semibold text-text">{plan.listLabel}</p>
                  <ul className="mt-2 flex flex-col gap-2">
                    {plan.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-text/80 leading-relaxed">
                        <span className="text-ember shrink-0 mt-1"><CheckIcon /></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

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

          <p className="text-sm text-muted mt-4">{p.billing} {p.vat}</p>

          {/* Add-ons */}
          <section className="mt-14">
            <h2 className="section-label mb-2">{p.optionsLabel}</h2>
            <ul>
              {p.options.map((option) => (
                <li key={option.name} className="flex items-center gap-4 py-3 border-t border-border">
                  <span className="text-ember shrink-0"><LineIcon name={option.icon} /></span>
                  <p className="flex-1 min-w-0 text-text">
                    {option.name}
                    {option.includedIn && <span className="text-sm text-muted"> · {option.includedIn}</span>}
                  </p>
                  <p className="text-text font-semibold whitespace-nowrap">{option.price}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ */}
          <section className="mt-14">
            <h2 className="section-label mb-2">{p.faqLabel}</h2>
            <div>
              {p.faq.map((item) => (
                <details key={item.question} className="group border-t border-border">
                  <summary className="flex items-center justify-between gap-4 py-4 cursor-pointer list-none text-text [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <span className="text-muted shrink-0 transition-transform group-open:rotate-180"><ChevronDownIcon /></span>
                  </summary>
                  <p className="pb-4 -mt-1 text-muted leading-relaxed max-w-2xl">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
