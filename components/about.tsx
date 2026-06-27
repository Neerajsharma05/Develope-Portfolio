'use client'

import { GraduationCap, Briefcase, Sparkles } from 'lucide-react'
import { TIMELINE } from '@/lib/data'
import { Reveal, SectionTitle } from '@/components/ui/reveal'

const ICONS = [Briefcase, Briefcase, GraduationCap]

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="About"
          title="Designing experiences, building them too"
          description="A Full Stack Developer who lives at the intersection of design and engineering."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* intro */}
          <Reveal className="space-y-5">
            <div className="glass rounded-3xl p-8">
              <Sparkles className="mb-4 h-7 w-7 text-secondary" />
              <p className="leading-relaxed text-muted-foreground">
                I&apos;m{' '}
                <span className="font-semibold text-foreground">
                  Neeraj Sharma
                </span>
                ,a Full Stack Developer passionate about building scalable, user-focused web applications.
                 I specialize in React, Next.js, Node.js, Express.js, MySQL, and Tailwind CSS, creating fast,
                  responsive, and reliable digital experiences.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Currently, I'm a Frontend Developer at {' '}
                <span className="font-semibold text-foreground">
                   Swiftsence Consultancy,
                </span> 
                 where I build modern web applications and continuously expand my expertise across the full stack.
                I'm always exploring new technologies, AI-powered development,
                and ways to craft products that are both beautiful and impactful..
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { k: '7+', v: 'Projects' },
                  { k: '3+', v: 'Years coding' },
                  { k: '5+', v: 'Happy clients' },
                ].map((s) => (
                  <div
                    key={s.v}
                    className="rounded-2xl border border-glass-border bg-background/40 p-4 text-center"
                  >
                    <div className="text-gradient-brand font-heading text-2xl font-bold">
                      {s.k}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* timeline */}
          <div className="relative">
            <div className="absolute bottom-2 left-[19px] top-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
            <ul className="space-y-6">
              {TIMELINE.map((item, i) => {
                const Icon = ICONS[i] ?? Briefcase
                return (
                  <Reveal key={item.title} delay={i * 0.1}>
                    <li className="relative flex gap-5">
                      <div className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-glass-border bg-glass">
                        <Icon className="h-5 w-5 text-secondary" />
                      </div>
                      <div className="glass flex-1 rounded-2xl p-5">
                        <span className="font-mono text-xs text-accent">
                          {item.year}
                        </span>
                        <h3 className="mt-1 font-heading text-lg font-semibold">
                          {item.title}
                        </h3>
                        <p className="text-sm font-medium text-secondary">
                          {item.org}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
