'use client'

import { useEffect, useRef, useState } from 'react'

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // only enable on devices with a fine pointer (desktop)
    const mq = window.matchMedia('(pointer: fine)')
    if (!mq.matches) return
    setEnabled(true)

    let raf = 0
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ring = { x: target.x, y: target.y }

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX
      target.y = e.clientY
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${e.clientX - 250}px, ${e.clientY - 250}px, 0)`
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`
      }
    }

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      const interactive = t.closest('a, button, [data-cursor="hover"]')
      if (ringRef.current) {
        ringRef.current.style.width = interactive ? '54px' : '30px'
        ringRef.current.style.height = interactive ? '54px' : '30px'
        ringRef.current.style.borderColor = interactive
          ? 'rgba(124,58,237,0.9)'
          : 'rgba(255,255,255,0.5)'
      }
    }

    const animate = () => {
      ring.x += (target.x - ring.x) * 0.18
      ring.y += (target.y - ring.y) * 0.18
      if (ringRef.current) {
        const w = ringRef.current.offsetWidth / 2
        ringRef.current.style.transform = `translate3d(${ring.x - w}px, ${ring.y - w}px, 0)`
      }
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-[60] h-[500px] w-[500px] rounded-full opacity-60 mix-blend-screen blur-[80px]"
        style={{
          background:
            'radial-gradient(circle, rgba(124,58,237,0.4) 0%, rgba(6,182,212,0.12) 45%, transparent 70%)',
        }}
        aria-hidden
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[61] h-[30px] w-[30px] rounded-full border transition-[width,height,border-color] duration-200 ease-out"
        style={{ borderColor: 'rgba(255,255,255,0.5)' }}
        aria-hidden
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[62] h-2 w-2 rounded-full bg-foreground"
        aria-hidden
      />
    </>
  )
}
