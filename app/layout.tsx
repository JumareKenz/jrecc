import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Jaze Research & Evaluation Consultancy | JRECC',
  description: 'Leading public health and development consulting firm specializing in program assessment, monitoring, evaluation, and applied research across Africa and beyond.',
  keywords: 'research, evaluation, consultancy, public health, data analytics, monitoring and evaluation, Nigeria, Africa',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

