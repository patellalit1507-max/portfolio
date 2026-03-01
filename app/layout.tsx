import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lalit Patel — Good Human',
  description:
    'Building thoughtful applications that improve everyday life and human well-being.',
  openGraph: {
    title: 'Lalit Patel — Good Human',
    description:
      'Building thoughtful applications that improve everyday life and human well-being.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
