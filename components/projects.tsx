'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/social-icons'
import { PROJECTS } from '@/lib/data'
import { Reveal, SectionTitle } from '@/components/ui/reveal'

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: px * 10, y: py * -10 })
  }

  return (
    <Reveal delay={(index % 2) * 0.1} className="h-full">
      <article
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        data-cursor="hover"
        className="group glass relative h-full overflow-hidden rounded-3xl transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        }}
      >
        {/* animated border glow */}
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at 50% 0%, ${project.accent}40, transparent 70%)`,
          }}
        />

        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.image || '/placeholder.svg'}
            alt={`${project.name} project preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
          <div className="absolute right-4 top-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} GitHub repository`}
              className="grid h-10 w-10 place-items-center rounded-xl bg-background/70 backdrop-blur transition-colors hover:bg-background"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} live demo`}
              className="grid h-10 w-10 place-items-center rounded-xl bg-background/70 backdrop-blur transition-colors hover:bg-background"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative p-6">
          <h3 className="font-heading text-xl font-semibold">{project.name}</h3>
          <p className="text-sm font-medium" style={{ color: project.accent }}>
            {project.tagline}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-glass-border bg-background/40 px-3 py-1 font-mono text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Projects"
          title="Selected work"
          description="A collection of products and experiences I've designed and built."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
