'use client'

import { Trophy, Award, FileText } from 'lucide-react'
import { ACHIEVEMENTS } from '@/lib/data'
import { Reveal, SectionTitle } from '@/components/ui/reveal'

const ICONS = [Trophy, Award, FileText]

export function Achievements() {
  return (
    <section id="achievements" className="relative px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Achievements"
          title="Recognition & milestones"
          description="Moments that pushed my craft forward."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {ACHIEVEMENTS.map((item, i) => {
            const Icon = ICONS[i] ?? Trophy
            return (
              <Reveal key={item.title} delay={i * 0.1} className="h-full">
                <div
                  data-cursor="hover"
                  className="group glass relative h-full overflow-hidden rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-2"
                >
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-90"
                    style={{ background: item.glow }}
                  />
                  <span
                    className="relative grid h-14 w-14 place-items-center rounded-2xl border border-glass-border"
                    style={{ background: `${item.glow}22`, color: item.glow }}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="relative mt-5 font-heading text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
