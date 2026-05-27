import type { Metadata } from 'next'
import { Inter, Italiana, Space_Grotesk } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import Cursor from '@/components/ui/Cursor'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap',
  weight: ['400', '500', '600'],
})

const italiana = Italiana({
  subsets: ['latin'],
  variable: '--font-italiana',
  display: 'swap',
  weight: '400',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://margauxfrancillard.com'),
  title: {
    default: 'Margaux Francillard • Product & System Designer SaaS B2B',
    template: '%s | Margaux Francillard',
  },
  description:
    'Lead Design System & Product Designer chez Waalaxy, basée à Montpellier. Je conçois des interfaces qui convertissent et des design systems qui tiennent dans la durée.',
  keywords: [
    'product designer SaaS B2B',
    'lead design system',
    'product designer Montpellier',
    'UX designer SaaS',
    'design system Figma',
    'vibecode designer',
  ],
  authors: [{ name: 'Margaux Francillard' }],
  creator: 'Margaux Francillard',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://margauxfrancillard.com',
    siteName: 'Margaux Francillard',
    title: 'Margaux Francillard • Product & System Designer SaaS B2B',
    description:
      'Lead Design System & Product Designer chez Waalaxy, basée à Montpellier. Interfaces qui convertissent, design systems qui tiennent dans la durée.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Product Designer et Lead Design system qui vibecode',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable} ${italiana.variable}`}>
      <head>
        {/* Runs before first paint — prevents flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t||(window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'))}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        <Cursor />
        <NavBar />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
