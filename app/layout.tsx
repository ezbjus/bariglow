import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bari Glow',
  description: 'Transform Your Hair Health Post-Weight Loss Surgery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <Script id="schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://bariglow.com/#website",
                  "url": "https://bariglow.com/",
                  "name": "Bari Glow",
                  "description": "Transform Your Hair Health Post-Weight Loss Surgery",
                  "potentialAction": [{
                    "@type": "SearchAction",
                    "target": "https://bariglow.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }]
                },
                {
                  "@type": "WebPage",
                  "@id": "https://bariglow.com/#webpage",
                  "url": "https://bariglow.com/",
                  "name": "Bari Glow for Hair Loss",
                  "isPartOf": {"@id": "https://bariglow.com/#website"},
                  "datePublished": "${new Date().toISOString()}",
                  "dateModified": "${new Date().toISOString()}",
                  "description": "Transform Your Hair Health Post-Weight Loss Surgery with Bari Glow"
                },
                {
                  "@type": "Article",
                  "@id": "https://bariglow.com/#article",
                  "isPartOf": {"@id": "https://bariglow.com/#webpage"},
                  "author": {
                    "@type": "Person",
                    "name": "Bari Glow Team"
                  },
                  "headline": "Transform Your Hair Health Post-Weight Loss Surgery with Bari Glow",
                  "datePublished": "${new Date().toISOString()}",
                  "dateModified": "${new Date().toISOString()}",
                  "mainEntityOfPage": {"@id": "https://bariglow.com/#webpage"},
                  "publisher": {
                    "@type": "Organization",
                    "name": "Bari Glow",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://bariglow.com/logo.png"
                    }
                  }
                }
              ]
            }
          `}
        </Script>
      </body>
    </html>
  )
}

