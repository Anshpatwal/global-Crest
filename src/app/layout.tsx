import './globals.css'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Global Crest Exports | Trusted Merchant Exporter',
  description: 'Leading merchant exporter specializing in air and sea shipments worldwide.',
  openGraph: {
    title: 'Global Crest Exports',
    description: 'Delivering Quality Beyond Borders | Global Crest Exports',
    url: 'https://yourdomain.com',
    siteName: 'Global Crest Exports',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Global Crest Exports Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
