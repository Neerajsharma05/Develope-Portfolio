'use client'

import { Check } from 'lucide-react'
import { EXPERIENCE } from '@/lib/data'
import { Reveal, SectionTitle } from '@/components/ui/reveal'

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          eyebrow="Experience"
          title="Where I've made an impact"
          description="A track record of shipping fast, polished and reliable interfaces."
        />

        <div className="relative">
          <div className="absolute bottom-4 left-[19px] top-4 w-px bg-gradient-to-b from-primary via-secondary to-accent md:left-1/2" />

          <ul className="space-y-10">
            {EXPERIENCE.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.1}>
                <li className="relative md:grid md:grid-cols-2 md:gap-10">
                  <span className="absolute left-[11px] top-2 z-10 h-4 w-4 rounded-full border-2 border-background bg-gradient-to-br from-primary to-secondary md:left-1/2 md:-translate-x-1/2" />

                  <div
                    className={
                      i % 2 === 0
                        ? 'md:col-start-1 md:text-right'
                        : 'md:col-start-2'
                    }
                  >
                    <div className="glass ml-10 rounded-3xl p-6 md:ml-0">
                      <span className="font-mono text-xs text-accent">
                        {exp.duration}
                      </span>
                      <h3 className="mt-1 font-heading text-xl font-semibold">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-secondary">
                        {exp.company}
                      </p>
                      <ul className="mt-4 space-y-2 text-left">
                        {exp.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
