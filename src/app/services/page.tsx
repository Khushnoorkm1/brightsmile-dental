import Link from 'next/link'
import { TREATMENTS } from '@/lib/config'

export const metadata = {
  title: 'Dental Services London | Invisalign, Implants, Whitening | BrightSmile Dental',
  description: 'Comprehensive dental treatments in London - Invisalign, dental implants, teeth whitening, composite bonding & more. GDC-registered specialists. Free consultations.',
}

function PageHero() {
  return (
    <div className="bg-navy py-[72px] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(11,122,110,0.2),transparent_60%)] pointer-events-none" />
      <div className="max-w-[1180px] mx-auto px-8 text-center relative z-10">
        <div className="flex items-center gap-2 justify-center text-xs text-white/40 mb-3.5">
          <Link href="/" className="hover:text-white transition-colors no-underline text-white/40">Home</Link>
          <span>›</span><span>Services</span>
        </div>
        <span className="text-[11px] font-semibold tracking-[4px] uppercase text-teal-light block mb-3">— Our Treatments</span>
        <h1 className="font-display text-[clamp(38px,6vw,66px)] font-light text-white tracking-[-1.5px] mt-2.5 mb-3">
          All <em className="italic text-teal-light">Dental Services</em>
        </h1>
        <p className="text-[16px] text-white/60 max-w-[500px] mx-auto">
          Comprehensive dental care by GDC-registered specialists. Every treatment, every need — under one roof.
        </p>
      </div>
    </div>
  )
}

function ServiceBlock({ treatment, reverse }: { treatment: typeof TREATMENTS[0]; reverse: boolean }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 bg-white rounded-[18px] overflow-hidden shadow-sm hover:shadow-lg transition-shadow ${reverse ? 'md:[direction:rtl]' : ''}`}>
      <div className="svc-block-img min-h-[360px] flex items-center justify-center text-[72px] relative" style={treatment.image ? { backgroundImage: `url('${treatment.image}')` } : { background: '#e6f5f3' }}>
        {!treatment.image && treatment.icon}
        <div className="absolute inset-0 bg-navy/10" />
      </div>
      <div className={`p-[52px_48px] flex flex-col justify-center ${reverse ? 'md:[direction:ltr]' : ''}`}>
        <div className="inline-flex items-center bg-teal-subtle border border-teal/20 rounded-full px-3.5 py-1.5 text-[12px] font-bold text-teal mb-4 w-fit">{treatment.price}</div>
        <h3 className="font-display text-[30px] font-semibold tracking-[-0.5px] mb-3.5 leading-[1.15] text-ink">{treatment.name}</h3>
        <p className="text-[15px] text-muted leading-[1.8] mb-5">{treatment.fullDesc}</p>
        <ul className="list-none mb-7">
          {treatment.features.map((f, i) => (
            <li key={i} className="flex items-center gap-2.5 text-[14px] text-ink py-1.5 border-b border-[#e2ddd6] last:border-none">
              <span className="w-[18px] h-[18px] flex-shrink-0 bg-teal rounded-full flex items-center justify-center text-white text-[10px] font-bold">✓</span>{f}
            </li>
          ))}
        </ul>
        <Link href="/booking" className="btn btn-teal text-sm px-5 py-2.5 w-fit">Book Free Consultation</Link>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const mainTreatments = TREATMENTS.slice(0, 4)
  return (
    <>
      <PageHero />
      <section className="py-20 max-w-[1180px] mx-auto px-8">
        <div className="flex flex-col gap-6">
          {mainTreatments.map((t, i) => <ServiceBlock key={t.id} treatment={t} reverse={i % 2 !== 0} />)}
        </div>
      </section>
      <section className="bg-gradient-to-br from-teal to-teal-light py-20 text-center">
        <div className="max-w-[1180px] mx-auto px-8">
          <h2 className="font-display text-[clamp(28px,5vw,50px)] font-semibold text-white tracking-[-1px] mb-3.5">Not Sure Which <em className="italic">Treatment?</em></h2>
          <p className="text-[16px] text-white/80 mb-10">Book a free 30-minute smile consultation — expert advice, no obligation, no pressure.</p>
          <Link href="/booking" className="btn btn-navy text-[15px] px-8 py-[17px]">Book Free Consultation →</Link>
        </div>
      </section>
    </>
  )
}