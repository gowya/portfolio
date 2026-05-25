import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://margauxfrancillard.com'),
  title: {
    default: 'Margaux Francillard — Product & System Designer SaaS B2B',
    template: '%s | Margaux Francillard',
  },
  description:
    'Lead Design System & Product Designer chez Waalaxy, basée à Marseille. Je conçois des interfaces qui convertissent et des design systems qui tiennent dans la durée.',
  keywords: [
    'product designer SaaS B2B',
    'lead design system',
    'product designer Marseille',
    'UX designer SaaS',
    'design system Figma',
    'Margaux Francillard',
    'Waalaxy designer',
  ],
  authors: [{ name: 'Margaux Francillard' }],
  creator: 'Margaux Francillard',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://margauxfrancillard.com',
    siteName: 'Margaux Francillard',
    title: 'Margaux Francillard — Product & System Designer SaaS B2B',
    description:
      'Lead Design System & Product Designer chez Waalaxy, basée à Marseille. Interfaces qui convertissent, design systems qui tiennent dans la durée.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Margaux Francillard — Product Designer spécialisée IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Margaux Francillard — Product & System Designer SaaS B2B',
    description:
      'Lead Design System & Product Designer chez Waalaxy, basée à Marseille.',
    images: ['/og-image.png'],
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
    <html lang="fr" className={`${inter.variable} ${syne.variable}`}>
      <body className="grain">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
