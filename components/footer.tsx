'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { NAV_LINKS } from '@/lib/data'

export function Footer() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <footer className="relative border-t border-glass-border px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="glass flex flex-col items-center gap-6 rounded-3xl p-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <a
              href="#home"
              className="font-heading text-xl font-bold text-gradient"
            >
              Neeraj Sharma
            </a>
            <p className="mt-1 text-sm text-muted-foreground">
              Frontend Developer · Crafting premium web experiences
            </p>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Neeraj Sharma. Designed & built with React,
          Tailwind CSS and a lot of motion.
        </p>
      </div>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 ${
          show
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  )
}
