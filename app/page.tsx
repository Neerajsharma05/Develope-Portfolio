import { AnimatedBackground } from '@/components/animated-background'
import { CursorGlow } from '@/components/cursor-glow'
import { ScrollProgress } from '@/components/scroll-progress'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Achievements } from '@/components/achievements'
import { Certificates } from '@/components/certificates'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <AnimatedBackground />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
