'use client'

import { motion } from 'framer-motion'
import { Layers, Server, Database, Wrench } from 'lucide-react'
import { SKILL_GROUPS } from '@/lib/data'
import { Reveal, SectionTitle } from '@/components/ui/reveal'

const GROUP_ICONS = {
  Frontend: Layers,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
} as const

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Skills"
          title="The tools I build with"
          description="A versatile, modern stack spanning frontend, backend, data and design."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {SKILL_GROUPS.map((group, gi) => {
            const Icon =
              GROUP_ICONS[group.category as keyof typeof GROUP_ICONS] ?? Layers
            return (
              <Reveal key={group.category} delay={gi * 0.08}>
                <div className="glass group h-full rounded-3xl p-7 transition-colors hover:border-primary/40">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 text-secondary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-heading text-xl font-semibold">
                      {group.category}
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {group.skills.map((skill, si) => (
                      <li key={skill.name}>
                        <div className="mb-1.5 flex items-center justify-between text-sm">
                          <span className="font-medium">{skill.name}</span>
                          <span className="font-mono text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-background/60">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: 0.2 + si * 0.08,
                              ease: 'easeOut',
                            }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
