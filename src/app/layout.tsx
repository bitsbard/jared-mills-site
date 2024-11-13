import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Algorism - Generative AI Development Agency',
  description: 'Expert AI solutions for businesses. Create custom chatbots, AI-powered apps, and machine learning models. Fast MVP development, affordable pricing, and seamless integration. Boost productivity with artificial intelligence technology.',
  icons: {
    icon: '/algorism2.png',
    apple: '/algorism2.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
