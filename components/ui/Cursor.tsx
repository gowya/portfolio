'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const HOVERABLE = 'a, button, [role="button"]'

export default function Cursor() {
  const elRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    const el = elRef.current
    if (!el) return

    document.body.classList.add('has-custom-cursor')

    // Center cursor on the pointer coordinate
    gsap.set(el, { xPercent: -50, yPercent: -50 })

    // Position — responsive but not instant, feels physically attached
    const setX = gsap.quickTo(el, 'x', { duration: 0.15, ease: 'power2.out' })
    const setY = gsap.quickTo(el, 'y', { duration: 0.15, ease: 'power2.out' })

    // Deformation — separate quickTo per axis for independent easing
    const setScaleX  = gsap.quickTo(el, 'scaleX',   { duration: 0.1, ease: 'power2.out' })
    const setScaleY  = gsap.quickTo(el, 'scaleY',   { duration: 0.1, ease: 'power2.out' })
    const setRot     = gsap.quickTo(el, 'rotation', { duration: 0.1, ease: 'power2.out' })

    let prevX = 0
    let prevY = 0
    let prevSpeed = 0
    const hovering = { current: false }

    const onMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e
      setX(x)
      setY(y)

      if (hovering.current) {
        prevX = x; prevY = y
        return
      }

      const vx = x - prevX
      const vy = y - prevY
      const speed = Math.sqrt(vx * vx + vy * vy)
      const t = Math.min(speed / 20, 1) // normalise to 0–1

      if (speed > 2) {
        setScaleX(1 + t * 1.5)                    // 1 → 2.5
        setScaleY(1 - t * 0.5)                    // 1 → 0.5
        setRot(Math.atan2(vy, vx) * (180 / Math.PI))
      } else if (prevSpeed > 2) {
        // Transition from fast → slow: elastic snap back to circle
        gsap.to(el, {
          scaleX: 1, scaleY: 1, rotation: 0,
          duration: 0.4, ease: 'elastic.out(1, 0.4)',
          overwrite: 'auto',
        })
      }

      prevSpeed = speed
      prevX = x
      prevY = y
    }

    const onOver = (e: MouseEvent) => {
      if (!(e.target as Element).closest(HOVERABLE)) return
      hovering.current = true
      gsap.to(el, {
        width: 40, height: 40,
        opacity: 0.3,
        backgroundColor: 'transparent',
        boxShadow: '0 0 0 1.5px #B85C2A',
        scaleX: 1, scaleY: 1, rotation: 0,
        duration: 0.25, ease: 'power2.out',
        overwrite: 'auto',
      })
    }

    const onOut = (e: MouseEvent) => {
      if (!(e.target as Element).closest(HOVERABLE)) return
      hovering.current = false
      gsap.to(el, {
        width: 10, height: 10,
        opacity: 1,
        backgroundColor: '#B85C2A',
        boxShadow: '0 0 0 0px transparent',
        duration: 0.3, ease: 'power2.out',
        overwrite: 'auto',
      })
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  return (
    <div
      ref={elRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#B85C2A' }}
    />
  )
}
