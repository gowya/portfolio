'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { applyCardHoverAnimation } from '@/lib/cardHoverAnimation'

// ─── Data ─────────────────────────────────────────────────────────────────────

const COLORS = [
  { token: 'Background/Primary',  value: '#0a0a0a',                bg: '#0a0a0a',    border: false },
  { token: 'Background/Surface',  value: '#0f0d0b',                bg: '#0f0d0b',    border: false },
  { token: 'Background/Elevated', value: '#141210',                bg: '#141210',    border: false },
  { token: 'Text/Primary',        value: '#F0E6D3',                bg: '#F0E6D3',    border: false },
  { token: 'Text/Secondary',      value: '#8A7A6A',                bg: '#8A7A6A',    border: false },
  { token: 'Text/Muted',          value: '#5A4A3A',                bg: '#5A4A3A',    border: false },
  { token: 'Accent/Default',      value: '#B85C2A',                bg: '#B85C2A',    border: false },
  { token: 'Accent/Hover',        value: '#C8704A',                bg: '#C8704A',    border: false },
  { token: 'Border/Default',      value: 'rgba(255,255,255,0.07)', bg: 'transparent', border: true },
  { token: 'Border/Accent',       value: 'rgba(184,92,42,0.3)',    bg: 'transparent', border: true },
]

// Type example colors are intentionally hardcoded — they demonstrate the design system tokens,
// not the current theme's UI colors.
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

const TAGS = ['Product Design', 'Conversion', 'Design System', 'IA', 'UX Research']

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
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', border: '1px solid rgba(184,92,42,0.3)', borderRadius: '999px', padding: '3px 10px', whiteSpace: 'nowrap' }}>
            — internal use only
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

          {/* ── COLORS — 8×2 ─────────────────────────────────────────────── */}
          <div className="bento-cell cell-colors" style={CELL_BASE}>
            <CellLabel>Core</CellLabel>
            <CellTitle>Colors</CellTitle>
            <div className="colors-grid">
              {COLORS.map(({ token, value, bg, border }) => (
                <div key={token}>
                  {/* swatch bg/border intentionally hardcoded — shows actual color tokens */}
                  <div style={{
                    height: '60px',
                    borderRadius: '8px',
                    background: border ? 'transparent' : bg,
                    border: border ? `3px solid ${value}` : '1px solid rgba(255,255,255,0.06)',
                    marginBottom: '8px',
                  }} />
                  <p style={{ ...MONO, color: 'var(--text)', fontSize: '10px', marginBottom: '2px', lineHeight: 1.4 }}>{token}</p>
                  <p style={{ ...MONO, fontSize: '10px' }}>{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── SPACING — 4×2 ────────────────────────────────────────────── */}
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

          {/* ── TYPOGRAPHY — 12×2 ────────────────────────────────────────── */}
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

          {/* ── BUTTONS — 4×2 ────────────────────────────────────────────── */}
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

          {/* ── TAGS — 4×1 ───────────────────────────────────────────────── */}
          <div className="bento-cell cell-tags" style={CELL_BASE}>
            <CellLabel>Components</CellLabel>
            <CellTitle>Tags / Chips</CellTitle>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '10px' }}>
              {TAGS.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
              {TAGS.slice(0, 2).map(t => (
                <span key={t} className="tag" style={{ borderColor: 'rgba(184,92,42,0.5)', color: 'var(--accent)' }}>{t}</span>
              ))}
              <span style={{ ...MONO, fontSize: '10px' }}>← active</span>
            </div>
          </div>

          {/* ── BADGE — 4×1 ──────────────────────────────────────────────── */}
          <div className="bento-cell cell-badge" style={CELL_BASE}>
            <CellLabel>Components</CellLabel>
            <CellTitle>Badge</CellTitle>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '999px', border: '1px solid var(--border)', background: 'rgb(var(--color-surface) / 0.4)' }}>
              <span
                className="animate-pulse"
                style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ADE80', display: 'inline-block', flexShrink: 0 }}
              />
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text)' }}>
                Disponible • Montpellier
              </span>
            </div>
            <p style={{ ...MONO, marginTop: '10px', fontSize: '10px' }}>Green dot · pulse · 11px uppercase · pill border</p>
          </div>

          {/* ── CARDS — 6×3 ──────────────────────────────────────────────── */}
          <div className="bento-cell cell-cards" style={CELL_BASE}>
            <CellLabel>Components</CellLabel>
            <CellTitle>Cards</CellTitle>
            <p style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'var(--font-sans)', marginBottom: '20px', lineHeight: 1.5 }}>
              Hover to preview: reed overlay · 3D tilt · amber border · title shift · CTA slide
            </p>
            <LiveCard />
          </div>

          {/* ── NAVIGATION — 6×3 ─────────────────────────────────────────── */}
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
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                    <rect x="1" y="1" width="5" height="5" rx="1" />
                    <rect x="8" y="1" width="5" height="5" rx="1" />
                    <rect x="1" y="8" width="5" height="5" rx="1" />
                    <rect x="8" y="8" width="5" height="5" rx="1" />
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
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                      <rect x="1" y="1" width="5" height="5" rx="1" />
                      <rect x="8" y="1" width="5" height="5" rx="1" />
                      <rect x="1" y="8" width="5" height="5" rx="1" />
                      <rect x="8" y="8" width="5" height="5" rx="1" />
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
