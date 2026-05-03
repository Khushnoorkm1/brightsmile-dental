import type { Metadata } from 'next'
import '@/styles/globals.css'
import Providers from './providers'

export const metadata: Metadata = {
  title: 'BrightSmile Dental | Award-Winning Dentist London | Invisalign & Implants',
  description: "BrightSmile Dental - London's top-rated private dental practice. Invisalign, dental implants, teeth whitening & cosmetic dentistry. Book online. Open 7 days.",
  keywords: 'dentist london, private dentist, invisalign london, dental implants, teeth whitening, cosmetic dentistry, emergency dentist london',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: "BrightSmile Dental | London's Premier Dental Practice",
    description: 'Award-winning dental care in London. Book your free consultation today.',
    url: 'https://brightsmile-dental.co.uk',
  },
  twitter: { card: 'summary_large_image', title: 'BrightSmile Dental London', description: 'Award-winning dental care. Book online today.' },
  alternates: { canonical: 'https://brightsmile-dental.co.uk' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Dentist',
          name: 'BrightSmile Dental',
          url: 'https://brightsmile-dental.co.uk',
          telephone: '+442070000000',
          email: 'hello@brightsmile-dental.co.uk',
          address: { '@type': 'PostalAddress', streetAddress: '15 Harley Street', addressLocality: 'London', postalCode: 'W1G 9QJ', addressCountry: 'GB' },
          openingHoursSpecification: [
            { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '20:00' },
            { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '17:00' },
            { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '10:00', closes: '14:00' },
          ],
          priceRange: '\u00a3\u00a3-\u00a3\u00a3\u00a3',
          aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '612' },
        }) }} />
      </head>
      <body><Providers>{children}</Providers></body>
    </html>
  )
}