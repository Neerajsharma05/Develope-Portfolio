'use client'

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base */}
      <div className="absolute inset-0 bg-background" />

      {/* animated gradient blobs */}
      <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-primary/25 blur-[120px] animate-float-slow" />
      <div className="absolute right-[-12rem] top-1/3 h-[32rem] w-[32rem] rounded-full bg-secondary/20 blur-[130px] animate-float" />
      <div className="absolute bottom-[-16rem] left-1/3 h-[36rem] w-[36rem] rounded-full bg-accent/10 blur-[140px] animate-float-slow" />

      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse at 50% 0%, black 30%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at 50% 0%, black 30%, transparent 75%)',
        }}
      />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,#0a0a0a_100%)]" />
    </div>
  )
}
