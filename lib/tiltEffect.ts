import gsap from 'gsap'

export function attachTiltEffect(el: HTMLElement): () => void {
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  if (!canHover || window.innerWidth < 768) return () => {}

  gsap.set(el, { transformPerspective: 600, transformOrigin: 'center center' })

  const setRotY = gsap.quickTo(el, 'rotationY', { duration: 0.35, ease: 'power3.out' })
  const setRotX = gsap.quickTo(el, 'rotationX', { duration: 0.35, ease: 'power3.out' })

  const shadow = { x: 0, y: 0 }
  const updateShadow = () => {
    el.style.boxShadow = `${shadow.x}px ${shadow.y}px 30px rgba(184,92,42,0.15)`
  }
  const setShadowX = gsap.quickTo(shadow, 'x', { duration: 0.35, ease: 'power3.out', onUpdate: updateShadow })
  const setShadowY = gsap.quickTo(shadow, 'y', { duration: 0.35, ease: 'power3.out', onUpdate: updateShadow })

  const onEnter = () => gsap.to(el, { scale: 1.015, duration: 0.25, ease: 'power2.out' })

  const onMove = (e: MouseEvent) => {
    const rect = el.getBoundingClientRect()
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setRotY(nx * 4)
    setRotX(-ny * 2.5)
    setShadowX(nx * 6)
    setShadowY(ny * 6)
  }

  const onLeave = () => {
    gsap.to(el, { rotationX: 0, rotationY: 0, scale: 1, duration: 0.5, ease: 'power2.out' })
    gsap.to(shadow, {
      x: 0, y: 0, duration: 0.5, ease: 'power2.out',
      onUpdate: updateShadow,
      onComplete: () => { el.style.boxShadow = '' },
    })
  }

  el.addEventListener('mouseenter', onEnter)
  el.addEventListener('mousemove', onMove)
  el.addEventListener('mouseleave', onLeave)

  return () => {
    el.removeEventListener('mouseenter', onEnter)
    el.removeEventListener('mousemove', onMove)
    el.removeEventListener('mouseleave', onLeave)
  }
}
