'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { applyCardHoverAnimation } from '@/lib/cardHoverAnimation'

// ─── Data ─────────────────────────────────────────────────────────────────────

// Swatches are driven by live CSS variables so they stay accurate AND adapt to
// the active theme (dark/light). The "value" shown is the token reference: the
// resolved hex differs per theme, so quoting a fixed hex would be wrong in one of them.
const COLORS: { token: string; css: string; group: string; isBorder?: boolean }[] = [
  { token: 'bg',         css: '--color-bg',         group: 'Background' },
  { token: 'bg-subtle',  css: '--color-bg-subtle',  group: 'Background' },
  { token: 'bg-card',    css: '--color-bg-card',    group: 'Background' },
  { token: 'surface',    css: '--color-surface',    group: 'Background' },
  { token: 'text',       css: '--color-text',       group: 'Text' },
  { token: 'muted',      css: '--color-muted',      group: 'Text' },
  { token: 'accent',     css: '--color-accent',     group: 'Accent' },
  { token: 'accent-dim', css: '--color-accent-dim', group: 'Accent' },
  { token: 'ember',      css: '--color-ember',      group: 'Accent' },
  { token: 'sienna',     css: '--color-sienna',     group: 'Accent' },
  { token: 'border',     css: '--color-border',     group: 'Border', isBorder: true },
]

const RADII = [
  { name: 'sm',   value: '8px',   note: 'swatches, inputs' },
  { name: 'md',   value: '12px',  note: 'cards, navbar' },
  { name: 'lg',   value: '16px',  note: 'bento cells' },
  { name: 'full', value: '999px', note: 'pills, tags, badge' },
]

// Type example colors use the live theme tokens (var(--text), var(--muted), var(--accent))
// so the specimens render exactly as they do on the site, in either theme.
const TYPE_SCALE: { name: string; spec: string; text: string; style: React.CSSProperties }[] = [
  { name: 'Display/Hero',  spec: 'Italiana · clamp(2.5rem,5vw,4rem)',   text: 'Product & System Designer',                style: { fontFamily: 'var(--font-italiana),Georgia,serif', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: 'var(--text)', lineHeight: 1.1 } },
  { name: 'Display/Title', spec: 'Italiana · clamp(1.5rem,3vw,2.5rem)', text: 'Projets récents',                          style: { fontFamily: 'var(--font-italiana),Georgia,serif', fontSize: 'clamp(1.3rem,2.5vw,2rem)',   color: 'var(--text)', lineHeight: 1.15 } },
  { name: 'Body/Large',    spec: 'Inter 400 · 18px',                    text: 'Je conçois des interfaces qui convertissent', style: { fontFamily: 'var(--font-sans)', fontSize: '18px', fontWeight: 400, color: 'var(--text)' } },
  { name: 'Body/Default',  spec: 'Inter 400 · 16px',                    text: 'Lead DS et Product Designer chez Waalaxy',  style: { fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 400, color: 'var(--muted)' } },
  { name: 'Body/Small',    spec: 'Inter 400 · 13px',                    text: 'Voir le case study →',                      style: { fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 400, color: 'var(--accent)' } },
  { name: 'Label/Caps',    spec: 'Inter 500 · 11px · ls 0.1em',         text: 'TRAVAUX SÉLECTIONNÉS',                      style: { fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' } },
  { name: 'Mono/Token',    spec: 'mono · 12px',                         text: '--color-accent-default',                    style: { fontFamily: 'ui-monospace,monospace', fontSize: '12px', color: 'var(--accent)' } },
]

const SPACING_VALUES = [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80]

const TAGS = ['Product Design', 'Conversion', 'Design System', 'IA', 'Discovery']

// ─── Primitives ───────────────────────────────────────────────────────────────

const CELL_BASE: React.CSSProperties = {
  background: 'var(--bg-card)',
  border: '0.5px solid var(--border)',
  borderRadius: '16px',
  overflow: 'hidden',
  padding: '24px',
}

const MONO: React.CSSProperties = {
  fontFamily: 'ui-monospace,monospace',
  fontSize: '11px',
  color: 'var(--muted)',
}

function CellLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '4px' }}>
      {children}
    </p>
  )
}

function CellTitle({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 600, color: 'var(--muted)', marginBottom: '20px' }}>
      {children}
    </p>
  )
}

// ─── Live card ────────────────────────────────────────────────────────────────

function LiveCard() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current) return
    return applyCardHoverAnimation(ref.current)
  }, [])
  return (
    <div
      ref={ref}
      className="relative overflow-hidden flex flex-col"
      style={{ background: 'var(--bg-card)', border: '0.5px solid var(--border)', borderRadius: '12px', padding: '20px', minHeight: '160px', willChange: 'transform' }}
    >
      <div className="relative z-10 flex flex-col flex-1">
        <p style={{ fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', opacity: 0.7, marginBottom: '10px' }}>
          Product Design · Conversion
        </p>
        <h3 style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.25, marginBottom: '8px', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
          Pousser l&apos;achat au bon moment
        </h3>
        <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.55 }}>
          Refonte du parcours upgrade pour déclencher la conversion.
        </p>
        <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
          <span data-card-cta style={{ fontSize: '12px', color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            Voir le case study →
          </span>
        </div>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DesignSystemPage() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.bento-cell', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power3.out',
      })
    }, gridRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden">
      <style>{`
        /* ── Desktop grid placement ────────────────────────────── */
        .cell-colors     { grid-column: 1 / span 8;  grid-row: 1 / span 2; }
        .cell-spacing    { grid-column: 9 / span 4;  grid-row: 1 / span 2; }
        .cell-typography { grid-column: 1 / span 12; grid-row: 3 / span 2; }
        .cell-buttons    { grid-column: 1 / span 4;  grid-row: 5 / span 2; }
        .cell-tags       { grid-column: 5 / span 4;  grid-row: 5 / span 1; }
        .cell-badge      { grid-column: 5 / span 4;  grid-row: 6 / span 1; }
        .cell-radius     { grid-column: 9 / span 4;  grid-row: 5 / span 2; }
        .cell-cards      { grid-column: 1 / span 6;  grid-row: 7 / span 3; }
        .cell-nav        { grid-column: 7 / span 6;  grid-row: 7 / span 3; }

        /* ── Typography inner table ────────────────────────────── */
        .typo-row {
          display: grid;
          grid-template-columns: 140px 220px 1fr;
          gap: 16px;
          align-items: center;
          padding: 14px 0;
        }
        .typo-row + .typo-row {
          border-top: 1px solid rgb(var(--color-border) / 0.3);
        }

        /* ── Colors inner grid ─────────────────────────────────── */
        .colors-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }

        /* ── Nav mockup ────────────────────────────────────────── */
        .nav-mockup { display: flex; align-items: center; justify-content: space-between; }
        .nav-mockup-links { display: flex; gap: 2px; }

        /* ── Mobile overrides ──────────────────────────────────── */
        @media (max-width: 767px) {
          .bento-grid { grid-template-columns: 1fr !important; gap: 8px !important; }

          .cell-colors,
          .cell-spacing,
          .cell-typography,
          .cell-buttons,
          .cell-tags,
          .cell-badge,
          .cell-radius,
          .cell-cards,
          .cell-nav {
            grid-column: 1 / -1;
            grid-row: auto;
          }

          .colors-grid { grid-template-columns: repeat(2, 1fr); }

          .typo-row {
            grid-template-columns: 1fr;
            gap: 4px;
            padding: 12px 0;
          }
          .typo-name, .typo-spec { display: none; }

          .nav-mockup { flex-wrap: wrap; gap: 10px; }
          .nav-mockup-links { display: none; }
        }
      `}</style>

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header className="pt-32 pb-10 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 style={{ fontFamily: 'var(--font-italiana),Georgia,serif', fontSize: 'clamp(2.2rem,5vw,4rem)', color: 'var(--text)', lineHeight: 1 }}>
            Design System
          </h1>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', border: '1px solid rgb(var(--color-accent) / 0.3)', borderRadius: '999px', padding: '3px 10px', whiteSpace: 'nowrap' }}>
            internal use only
          </span>
        </div>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--muted)', marginTop: '8px' }}>
          Margaux Francillard · Portfolio v1.0
        </p>
      </header>

      {/* ── Bento grid ─────────────────────────────────────────────────────── */}
      <div ref={gridRef} className="px-4 sm:px-6 pb-32 max-w-7xl mx-auto">
        <div
          className="bento-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '12px' }}
        >

          {/* ── COLORS: 8×2 ─────────────────────────────────────────────── */}
          <div className="bento-cell cell-colors" style={CELL_BASE}>
            <CellLabel>Core</CellLabel>
            <CellTitle>Colors</CellTitle>
            <div className="colors-grid">
              {COLORS.map(({ token, css, group, isBorder }) => (
                <div key={token}>
                  {/* swatch renders the live CSS variable → always accurate + theme-aware */}
                  <div style={{
                    height: '60px',
                    borderRadius: '8px',
                    background: isBorder ? 'transparent' : `rgb(var(${css}))`,
                    border: isBorder
                      ? `3px solid rgb(var(${css}))`
                      : '1px solid rgb(var(--color-border))',
                    marginBottom: '8px',
                  }} />
                  <p style={{ ...MONO, color: 'var(--text)', fontSize: '10px', marginBottom: '2px', lineHeight: 1.4 }}>{group}/{token}</p>
                  <p style={{ ...MONO, fontSize: '9px' }}>{css}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── SPACING: 4×2 ────────────────────────────────────────────── */}
          <div className="bento-cell cell-spacing" style={CELL_BASE}>
            <CellLabel>Core</CellLabel>
            <CellTitle>Spacing</CellTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {SPACING_VALUES.map((s) => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: `${s}px`, height: '7px', background: 'var(--accent)', borderRadius: '2px', flexShrink: 0 }} />
                  <p style={{ ...MONO, fontSize: '10px' }}>{s}px</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── TYPOGRAPHY: 12×2 ────────────────────────────────────────── */}
          <div className="bento-cell cell-typography" style={CELL_BASE}>
            <CellLabel>Core</CellLabel>
            <CellTitle>Typography</CellTitle>
            <div>
              {TYPE_SCALE.map(({ name, spec, text, style: typoStyle }) => (
                <div key={name} className="typo-row">
                  <p className="typo-name" style={{ ...MONO, color: 'var(--muted)' }}>{name}</p>
                  <p className="typo-spec" style={MONO}>{spec}</p>
                  <p style={typoStyle}>{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── BUTTONS: 4×2 ────────────────────────────────────────────── */}
          <div className="bento-cell cell-buttons" style={CELL_BASE}>
            <CellLabel>Components</CellLabel>
            <CellTitle>Buttons</CellTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <Link href="/projects" className="btn-primary inline-flex items-center gap-1.5">
                  Voir mes projets
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                    <path d="M2 6.5h9M6.5 2l4.5 4.5L6.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <p style={{ ...MONO, marginTop: '8px' }}>btn-primary · amber fill</p>
              </div>
              <div>
                <button className="btn-ghost" style={{ cursor: 'default' }}>On en parle ?</button>
                <p style={{ ...MONO, marginTop: '8px' }}>btn-ghost · border only</p>
              </div>
              <div>
                <span style={{ fontSize: '13px', color: 'var(--accent)', fontFamily: 'var(--font-sans)' }}>
                  Voir le case study →
                </span>
                <p style={{ ...MONO, marginTop: '8px' }}>inline CTA · no border</p>
              </div>
            </div>
          </div>

          {/* ── TAGS: 4×1 ───────────────────────────────────────────────── */}
          <div className="bento-cell cell-tags" style={CELL_BASE}>
            <CellLabel>Components</CellLabel>
            <CellTitle>Tags / Chips</CellTitle>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '10px' }}>
              {TAGS.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
              {TAGS.slice(0, 2).map(t => (
                <span key={t} className="tag" style={{ borderColor: 'rgb(var(--color-accent) / 0.5)', color: 'var(--accent)' }}>{t}</span>
              ))}
              <span style={{ ...MONO, fontSize: '10px' }}>← active</span>
            </div>
          </div>

          {/* ── BADGE: 4×1 ──────────────────────────────────────────────── */}
          <div className="bento-cell cell-badge" style={CELL_BASE}>
            <CellLabel>Components</CellLabel>
            <CellTitle>Badge</CellTitle>
            {/* Mirrors the live hero badge exactly: accent dot, muted/70 text, border-border/50 */}
            <span className="inline-flex items-center gap-2 text-[0.6rem] font-sans font-medium tracking-[0.22em] uppercase text-muted/70 border border-border/50 rounded-full px-3 py-1.5">
              <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
              Montpellier &amp; Remote
            </span>
            <p style={{ ...MONO, marginTop: '12px', fontSize: '10px' }}>Accent dot · pulse · 0.6rem uppercase · ls 0.22em · pill border</p>
          </div>

          {/* ── RADIUS: 4×2 ─────────────────────────────────────────────── */}
          <div className="bento-cell cell-radius" style={CELL_BASE}>
            <CellLabel>Core</CellLabel>
            <CellTitle>Radius</CellTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {RADII.map(({ name, value, note }) => (
                <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px', height: '40px', flexShrink: 0,
                    background: 'rgb(var(--color-surface) / 0.5)',
                    border: '1px solid rgb(var(--color-accent) / 0.4)',
                    borderRadius: value,
                  }} />
                  <div>
                    <p style={{ ...MONO, color: 'var(--text)', fontSize: '11px', marginBottom: '2px' }}>{name} · {value}</p>
                    <p style={{ ...MONO, fontSize: '10px' }}>{note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CARDS: 6×3 ──────────────────────────────────────────────── */}
          <div className="bento-cell cell-cards" style={CELL_BASE}>
            <CellLabel>Components</CellLabel>
            <CellTitle>Cards</CellTitle>
            <p style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'var(--font-sans)', marginBottom: '20px', lineHeight: 1.5 }}>
              Hover to preview: reed overlay · 3D tilt · amber border · title shift · CTA slide
            </p>
            <LiveCard />
          </div>

          {/* ── NAVIGATION: 6×3 ─────────────────────────────────────────── */}
          <div className="bento-cell cell-nav" style={CELL_BASE}>
            <CellLabel>Components</CellLabel>
            <CellTitle>Navigation</CellTitle>

            {/* Navbar mockup */}
            <div className="nav-mockup" style={{ background: 'rgb(var(--color-bg) / 0.7)', backdropFilter: 'blur(20px)', borderRadius: '12px', border: '1px solid var(--border)', padding: '10px 16px', marginBottom: '28px', gap: '8px' }}>
              <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text)', letterSpacing: '-0.02em', fontFamily: 'var(--font-sans)', flexShrink: 0 }}>MF</span>
              <div className="nav-mockup-links">
                {['Accueil', 'Mes projets', 'Qui je suis'].map((l, i) => (
                  <span key={l} style={{ padding: '5px 12px', fontSize: '13px', borderRadius: '999px', color: i === 0 ? 'var(--text)' : 'var(--muted)', background: i === 0 ? 'rgb(var(--color-surface) / 0.5)' : 'transparent', fontFamily: 'var(--font-sans)', whiteSpace: 'nowrap' }}>
                    {l}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                <div style={{ padding: '6px', borderRadius: '50%', color: 'var(--accent)', display: 'flex' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M10 4.5V18C10 19.08 9.56 20.07 8.86 20.79L8.82 20.83C8.73 20.92 8.63 21.01 8.54 21.08C8.24 21.34 7.9 21.54 7.55 21.68C7.44 21.73 7.33 21.77 7.22 21.81C6.83 21.94 6.41 22 6 22C5.73 22 5.46 21.97 5.2 21.92C5.07 21.89 4.94 21.86 4.81 21.82C4.65 21.77 4.5 21.72 4.35 21.65C4.06 21.51 3.79 21.35 3.54 21.16L3.53 21.15C3.4 21.05 3.28 20.95 3.17 20.83C3.06 20.71 2.95 20.59 2.84 20.46C2.65 20.21 2.49 19.94 2.35 19.66C2.28 19.49 2.23 19.34 2.18 19.19C2.14 19.06 2.11 18.93 2.08 18.8C2.03 18.54 2 18.27 2 18V4.5C2 3 3 2 4.5 2H7.5C9 2 10 3 10 4.5Z" />
                    <path d="M22 16.5V19.5C22 21 21 22 19.5 22H6C6.41 22 6.83 21.94 7.22 21.81C7.33 21.77 7.44 21.73 7.55 21.68C7.9 21.54 8.24 21.34 8.54 21.08C8.63 21.01 8.73 20.92 8.82 20.83L8.86 20.79L15.66 14H19.5C21 14 22 15 22 16.5Z" />
                    <path d="M18.37 11.29L15.66 14L8.86 20.79C9.56 20.07 10 19.08 10 18V8.34L12.71 5.63C13.77 4.57 15.19 4.57 16.25 5.63L18.37 7.75C19.43 8.81 19.43 10.23 18.37 11.29Z" />
                    <circle cx="6" cy="18" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <div style={{ padding: '6px', borderRadius: '50%', color: 'var(--muted)', display: 'flex' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
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
                </div>
                <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--bg)', background: 'var(--accent)', padding: '5px 12px', borderRadius: '999px', fontFamily: 'var(--font-sans)', whiteSpace: 'nowrap' }}>
                  On en parle ?
                </span>
              </div>
            </div>

            {/* Link states */}
            <p style={{ ...MONO, marginBottom: '12px' }}>Link states</p>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
              {[
                { label: 'Default', color: 'var(--muted)',  bg: 'transparent' },
                { label: 'Hover',   color: 'var(--text)',   bg: 'transparent' },
                { label: 'Active',  color: 'var(--text)',   bg: 'rgb(var(--color-surface) / 0.5)' },
              ].map(({ label, color, bg }) => (
                <div key={label}>
                  <div style={{ padding: '5px 12px', borderRadius: '999px', background: bg, marginBottom: '6px', display: 'inline-block' }}>
                    <span style={{ fontSize: '13px', color, fontFamily: 'var(--font-sans)' }}>Accueil</span>
                  </div>
                  <p style={MONO}>{label}</p>
                </div>
              ))}
            </div>

            {/* Icon states */}
            <p style={{ ...MONO, marginBottom: '12px' }}>Icon controls</p>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              {[
                { label: 'Default', color: 'var(--muted)' },
                { label: 'Hover',   color: 'var(--accent)' },
              ].map(({ label, color }) => (
                <div key={label}>
                  <div style={{ padding: '6px', borderRadius: '50%', background: 'rgb(var(--color-surface) / 0.3)', marginBottom: '6px', display: 'inline-flex', color }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 4.5V18C10 19.08 9.56 20.07 8.86 20.79L8.82 20.83C8.54 21.08 8.24 21.34 7.9 21.54 7.55 21.68 7.22 21.81 6.83 21.94 6.41 22 6 22 5.73 22 5.46 21.97 5.2 21.92 4.94 21.86 4.65 21.77 4.35 21.65 4.06 21.51 3.79 21.35 3.54 21.16L3.53 21.15C3.4 21.05 3.17 20.83 2.95 20.59 2.65 20.21 2.35 19.66 2.18 19.19 2.03 18.54 2 18.27 2 18V4.5C2 3 3 2 4.5 2H7.5C9 2 10 3 10 4.5Z" />
                      <path d="M22 16.5V19.5C22 21 21 22 19.5 22H6C6.83 21.94 7.55 21.68 8.54 21.08L8.86 20.79 15.66 14H19.5C21 14 22 15 22 16.5Z" />
                      <path d="M18.37 11.29L15.66 14 8.86 20.79C9.56 20.07 10 19.08 10 18V8.34L12.71 5.63C13.77 4.57 15.19 4.57 16.25 5.63L18.37 7.75C19.43 8.81 19.43 10.23 18.37 11.29Z" />
                      <circle cx="6" cy="18" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  </div>
                  <p style={MONO}>{label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
