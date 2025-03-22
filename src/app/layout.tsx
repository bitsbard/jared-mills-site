import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const SITE_URL = 'https://jaredmills.dev'
const SOCIAL_IMAGE = `${SITE_URL}/profile.jpg`

// Long-form description for places where space permits
const FULL_DESCRIPTION = 'Software Engineer with expertise in full-stack development, building scalable applications, and delivering high-quality software solutions. Experienced in modern web technologies and best practices.'

// Shorter version for social media
const SOCIAL_DESCRIPTION = 'Software Engineer specializing in full-stack development and modern web technologies. Building scalable and efficient solutions.'

export const metadata: Metadata = {
  title: 'Jared Mills - Software Engineer',
  description: FULL_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  
  openGraph: {
    title: 'Jared Mills - Software Engineer',
    description: SOCIAL_DESCRIPTION,
    url: SITE_URL,
    siteName: 'Jared Mills',
    images: [
      {
        url: SOCIAL_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Jared Mills - Software Engineer',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Jared Mills - Software Engineer',
    description: SOCIAL_DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
  
  other: {
    'keywords': 'software engineer, full-stack developer, web development, JavaScript, TypeScript, React, Node.js, software development, programming',
  },
  
  icons: {
    icon: '/algorism2.png',
  },
  
  alternates: {
    canonical: SITE_URL
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:image:secure_url" content={SOCIAL_IMAGE} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="image" content={SOCIAL_IMAGE} />
        <meta name="pinterest:image" content={SOCIAL_IMAGE} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
