"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, X } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/social-icons";

const ROLES = [
  "Frontend Developer",
  "React Engineer",
  "UI Motion Craftsman",
  "Creative Technologist",
];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const speed = deleting ? 45 : 90;
    const timeout = setTimeout(() => {
      setText((prev) =>
        deleting
          ? current.slice(0, prev.length - 1)
          : current.slice(0, prev.length + 1),
      );
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1400);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

export function Hero() {
  const role = useTypewriter(ROLES);
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [showResume, setShowResume] = useState(false);

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px * 22, y: py * -22 });
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-32 sm:px-6"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* left: copy */}
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-1.5 font-mono text-xs text-secondary"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
            </span>
            Available for opportunities
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-heading text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            <span className="block text-muted-foreground/70 text-2xl font-medium sm:text-3xl">
              Hi, I&apos;m
            </span>
            <span className="text-gradient">Neeraj Sharma</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 flex h-9 items-center justify-center font-heading text-xl font-semibold sm:text-2xl lg:justify-start"
          >
            <span className="text-gradient-brand">{role}</span>
            <span className="ml-1 inline-block h-6 w-[3px] animate-pulse bg-secondary" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground lg:mx-0"
          >
            I craft premium, immersive web experiences with React, Tailwind CSS
            and motion. Obsessed with clean interfaces, smooth interactions and
            the small details that make products feel magical.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105"
            >
              Get in touch
            </a>
            <button
              onClick={() => setShowResume(true)}
              className="inline-flex items-center gap-2 rounded-xl border border-glass-border bg-glass px-6 py-3 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background"
            >
              <Download className="h-4 w-4" />
              Resume
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 flex items-center justify-center gap-3 lg:justify-start"
          >
            <div
                onClick={()=>{
                  window.open('https://github.com/Neerajsharma05')
                }}
                className="grid h-11 w-11 place-items-center rounded-xl border border-glass-border bg-glass text-muted-foreground transition-all hover:-translate-y-1 hover:text-foreground"
              >
                <GithubIcon className="h-5 w-5" />
              </div>
            <div
                onClick={()=>{
                  window.open('https://www.linkedin.com/in/neeraj-sharma05')
                }}
                className="grid h-11 w-11 place-items-center rounded-xl border border-glass-border bg-glass text-muted-foreground transition-all hover:-translate-y-1 hover:text-foreground"
              >
                <LinkedinIcon className="h-5 w-5" />
              </div>
            <div
                onClick={()=>{
                  window.open('https://twitter.com/mr_sharma05')
                }}
                className="grid h-11 w-11 place-items-center rounded-xl border border-glass-border bg-glass text-muted-foreground transition-all hover:-translate-y-1 hover:text-foreground"
              >
                <TwitterIcon className="h-5 w-5" />
              </div>
            {/* {[
              { icon: GithubIcon, label: "GitHub" },
              { icon: LinkedinIcon, label: "LinkedIn" },
              { icon: TwitterIcon, label: "Twitter" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="https://github.com/Neerajsharma05"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-xl border border-glass-border bg-glass text-muted-foreground transition-all hover:-translate-y-1 hover:text-foreground"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            ))} */}
          </motion.div>
        </div>

        {/* right: floating 3D portrait + orbs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative mx-auto aspect-square w-full max-w-sm"
          style={{ perspective: "1000px" }}
        >
          <div
            className="relative h-full w-full transition-transform duration-300 ease-out"
            style={{
              transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            {/* glow ring */}
            <div className="absolute inset-0 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,#7c3aed,#06b6d4,#f97316,#7c3aed)] opacity-40 blur-2xl" />

            {/* portrait card */}
            <div className="glass absolute inset-4 overflow-hidden rounded-[2rem]">
              <Image
                src="/image.png"
                alt="Portrait of Neeraj Sharma"
                fill
                priority
                sizes="(max-width: 768px) 80vw, 360px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            </div>

            {/* floating glass chips */}
            <div
              className="glass animate-float absolute -left-4 top-10 rounded-2xl px-4 py-3 text-sm font-semibold"
              style={{ transform: "translateZ(60px)" }}
            >
              <span className="text-gradient-brand font-heading text-lg">
                7+
              </span>
              <p className="text-xs text-muted-foreground">Projects shipped</p>
            </div>
            <div
              className="glass animate-float-slow absolute -right-4 bottom-12 rounded-2xl px-4 py-3 text-sm font-semibold"
              style={{ transform: "translateZ(80px)" }}
            >
              <span className="text-gradient-brand font-heading text-lg">
                95+
              </span>
              <p className="text-xs text-muted-foreground">Lighthouse score</p>
            </div>
            <div
              className="glass animate-float absolute -bottom-2 left-8 rounded-xl px-3 py-2 font-mono text-xs text-secondary"
              style={{ transform: "translateZ(40px)" }}
            >
              &lt;/&gt; React · Tailwind
            </div>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <span className="flex flex-col items-center gap-2 text-xs text-muted-foreground">
          Scroll
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </span>
      </motion.a>

      {/* iframe resume pop up */}
      {showResume && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="relative h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-glass-border bg-background shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-glass-border px-6 py-4">
              <h2 className="text-lg font-semibold">My Resume</h2>

              <div className="flex items-center gap-3">
                <a
                  href="/Neeraj_CV.pdf"
                  download
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Download
                </a>

                <button
                  onClick={() => setShowResume(false)}
                  className="rounded-lg p-2 transition hover:bg-muted"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Resume */}
            <iframe
              src="/Neeraj_CV.pdf"
              title="Resume"
              className="h-[calc(90vh-72px)] w-full"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
