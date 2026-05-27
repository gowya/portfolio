import gsap from 'gsap'

export function applyCardHoverAnimation(card: HTMLElement): () => void {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return () => {}
  if (window.innerWidth < 768) return () => {}

  // Inject reed glass overlay as first child so content sits above it
  const overlay = document.createElement('div')
  overlay.style.cssText = [
    'position:absolute',
    'inset:0',
    'pointer-events:none',
    'background-color:rgba(10,8,6,0.85)',
    'background-image:radial-gradient(ellipse at center, rgba(160,80,20,0.175) 0%, transparent 70%), repeating-linear-gradient(90deg, rgba(255,255,255,0.015) 0px, rgba(180,100,30,0.08) 1.5px, rgba(255,255,255,0.008) 2px, transparent 2.5px, transparent 6px)',
    'background-size:100% 100%, 6px 100%',
    'border-radius:inherit',
    'opacity:0',
  ].join(';')
  card.insertBefore(overlay, card.firstChild)

  // Capture default colours for clean reset
  const title = card.querySelector<HTMLElement>('h2, h3')
  const cta   = card.querySelector<HTMLElement>('[data-card-cta]')
  const defaultBorderColor = getComputedStyle(card).borderColor
  const defaultTitleColor  = title ? getComputedStyle(title).color : ''

  // Tilt setup
  gsap.set(card, { transformPerspective: 600, transformOrigin: 'center center' })
  const setRotY = gsap.quickTo(card, 'rotationY', { duration: 0.35, ease: 'power3.out' })
  const setRotX = gsap.quickTo(card, 'rotationX', { duration: 0.35, ease: 'power3.out' })

  const onEnter = () => {
    gsap.to(overlay, { opacity: 1, duration: 0.4, ease: 'power2.out' })
    gsap.to(card,    { scale: 1.015, borderColor: 'rgba(184,92,42,0.4)', duration: 0.3, ease: 'power2.out' })
    if (title) gsap.to(title, { color: '#B85C2A', duration: 0.3, ease: 'power2.out' })
    if (cta)   gsap.to(cta,   { x: 6, duration: 0.25, ease: 'power2.out' })
  }

  const onMove = (e: MouseEvent) => {
    const rect = card.getBoundingClientRect()
    const nx = ((e.clientX - rect.left) / rect.width  - 0.5) * 2
    const ny = ((e.clientY - rect.top)  / rect.height - 0.5) * 2
    setRotY(nx * 2)
    setRotX(-ny * 1.5)
  }

  const onLeave = () => {
    gsap.to(overlay, { opacity: 0, duration: 0.3 })
    gsap.to(card,    { rotationX: 0, rotationY: 0, scale: 1, borderColor: defaultBorderColor, duration: 0.5, ease: 'power2.out' })
    if (title) gsap.to(title, { color: defaultTitleColor, duration: 0.25, ease: 'power2.in' })
    if (cta)   gsap.to(cta,   { x: 0, duration: 0.25, ease: 'power2.in' })
  }

  card.addEventListener('mouseenter', onEnter)
  card.addEventListener('mousemove',  onMove)
  card.addEventListener('mouseleave', onLeave)

  return () => {
    card.removeEventListener('mouseenter', onEnter)
    card.removeEventListener('mousemove',  onMove)
    card.removeEventListener('mouseleave', onLeave)
    overlay.remove()
  }
}
