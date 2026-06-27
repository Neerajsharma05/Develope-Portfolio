'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          'flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6',
          scrolled ? 'glass shadow-lg shadow-black/40' : 'border border-transparent',
        )}
      >
        <a
          href="#home"
          className="flex items-center gap-2 font-heading text-lg font-bold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-secondary text-sm font-bold text-primary-foreground">
            NS
          </span>
          <span className="hidden sm:inline">Neeraj</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-xl bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform hover:scale-105 sm:inline-block"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-glass-border bg-glass lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="absolute inset-x-4 top-[5.5rem] z-50 lg:hidden">
          <div className="glass rounded-2xl p-3">
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-glass hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 block rounded-xl bg-foreground px-4 py-3 text-center text-sm font-semibold text-background"
                >
                  Let&apos;s talk
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
