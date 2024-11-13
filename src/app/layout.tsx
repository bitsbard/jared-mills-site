import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const SITE_URL = 'https://algorism.co'
const SOCIAL_IMAGE = `${SITE_URL}/algorism_social_bg.png`

// Long-form description for places where space permits
const FULL_DESCRIPTION = 'Transform your business with cutting-edge AI development. Our expertise includes LLM integration, RAG systems, Stable Diffusion implementation, text-to-speech (TTS), Runway video generation, chatbots and custom AI applications. We deliver fast MVP development and seamless AI solutions for enterprises and startups.'

// Shorter version for social media
const SOCIAL_DESCRIPTION = 'Expert AI development agency specializing in Stable Diffusion, text-to-speech, video generation, and custom LLM solutions. Transform your business with state-of-the-art AI technology.'

export const metadata: Metadata = {
  title: 'Algorism - Generative AI Development Agency',
  description: FULL_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  
  openGraph: {
    title: 'Algorism - Generative AI Development Agency',
    description: SOCIAL_DESCRIPTION,
    url: SITE_URL,
    siteName: 'Algorism',
    images: [
      {
        url: SOCIAL_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Algorism - Expert AI Development Agency',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Algorism - Generative AI Development Agency',
    description: SOCIAL_DESCRIPTION,
    images: [SOCIAL_IMAGE],
    creator: '@algorism',
  },
  
  other: {
    'og:image': SOCIAL_IMAGE,
    'og:image:secure_url': SOCIAL_IMAGE,
    'og:image:type': 'image/png',
    'og:image:width': '1200',
    'og:image:height': '630',
    
    // Enhanced keywords including popular AI models and technologies
    'keywords': 'AI development, Stable Diffusion, text-to-speech, TTS, Midjourney, video generation, Runway Gen-2, generative AI, LLM integration, RAG systems, custom chatbots, machine learning models, AI consulting, AI solutions, artificial intelligence development, AI agency, image generation, audio generation, video AI, GPT integration',
    
    // For LinkedIn
    'image': SOCIAL_IMAGE,
    'image:alt': 'Algorism - Expert AI Development Agency',
    
    // For Pinterest
    'pinterest:image': SOCIAL_IMAGE,
    'pinterest:description': SOCIAL_DESCRIPTION,
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
