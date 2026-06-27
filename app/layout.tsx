import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Sora, Inter, Geist_Mono } from 'next/font/google'
import './globals.css'

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
  display: 'swap',
})
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Neeraj Sharma | Frontend Developer',
  description:
    'Frontend Developer specializing in React, Tailwind CSS, JavaScript, and modern, immersive web experiences.',
  generator: 'v0.app',
  openGraph: {
    title: 'Neeraj Sharma | Frontend Developer',
    description:
      'Frontend Developer specializing in React, Tailwind CSS, JavaScript, and modern, immersive web experiences.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neeraj Sharma | Frontend Developer',
    description:
      'Frontend Developer crafting premium, immersive web experiences.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${sora.variable} ${inter.variable} ${geistMono.variable}`}
    >
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
