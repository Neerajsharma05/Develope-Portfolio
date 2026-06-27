'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Download, Eye, X } from 'lucide-react'
import { CERTIFICATES } from '@/lib/data'
import { Reveal, SectionTitle } from '@/components/ui/reveal'

export function Certificates() {
  const [active, setActive] = useState<number | null>(null)
  const cert = active !== null ? CERTIFICATES[active] : null

  return (
    <section id="certificates" className="relative px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Certificates"
          title="Always learning"
          description="Credentials that sharpen my skills across the modern web."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.08} className="h-full">
              <button
                type="button"
                onClick={() => setActive(i)}
                data-cursor="hover"
                className="group glass relative h-full w-full overflow-hidden rounded-3xl p-6 text-left transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40">
                  <Image
                    src="/cert-abstract.png"
                    alt=""
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                </div>
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 text-secondary">
                      <Award className="h-5 w-5" />
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                      <Eye className="h-3.5 w-3.5" /> Preview
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-base font-semibold leading-snug">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm text-secondary">{c.issuer}</p>
                  <p className="mt-3 font-mono text-xs text-muted-foreground">
                    {c.year}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* preview modal */}
      <AnimatePresence>
        {cert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[80] grid place-items-center bg-background/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 220, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="glass relative w-full max-w-lg overflow-hidden rounded-3xl"
            >
              <button
                type="button"
                aria-label="Close preview"
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-xl bg-background/70 backdrop-blur transition-colors hover:bg-background"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="relative aspect-[4/3]">
                <Image
                  src="/cert-abstract.png"
                  alt={`${cert.title} certificate`}
                  fill
                  sizes="512px"
                  className="object-cover"
                />
                <div className="absolute inset-0 grid place-items-center bg-background/40 p-8 text-center">
                  <div>
                    <Award className="mx-auto h-10 w-10 text-secondary" />
                    <h3 className="mt-4 font-heading text-2xl font-bold">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-secondary">{cert.issuer}</p>
                    <p className="mt-1 font-mono text-sm text-muted-foreground">
                      {cert.year}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-5">
                <span className="text-sm text-muted-foreground">
                  Verified credential
                </span>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-semibold text-primary-foreground"
                >
                  <Download className="h-4 w-4" />
                  Download
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
