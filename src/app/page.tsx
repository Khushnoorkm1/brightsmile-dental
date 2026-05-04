import Link from 'next/link'
import { SITE_CONFIG, TREATMENTS, REVIEWS } from '@/lib/config'

function Hero() {
  return (
    <section className="relative bg-navy min-h-[calc(100vh-110px)] grid grid-cols-1 lg:grid-cols-[55%_45%] items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(11,122,110,0.25),transparent_60%)] pointer-events-none" />
      <div className="hero-grid-bg absolute inset-0 pointer-events-none" />
      <div className="relative z-10 px-8 lg:px-16 py-20">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2 text-xs font-medium text-white/85 mb-7">
          <div className="animate-dot-pulse w-2 h-2 rounded-full bg-wa" />
          ⭐ 4.9 Stars · 612 Reviews · London's #1 Rated Clinic
        </div>
        <h1 className="font-display text-[clamp(46px,7vw,80px)] font-light leading-[0.95] text-white tracking-[-2px] mb-6">
          Your Perfect<br /><em className="italic text-teal-light">Smile</em> Starts<br /><strong className="font-black">Right Here</strong>
        </h1>
        <p className="text-[17px] leading-[1.8] text-white/65 max-w-[480px] mb-10">
          Award-winning dental care in the heart of London. Open 7 days a week.
        </p>
        <div className="flex gap-3 flex-wrap mb-4">
          <Link href="/booking" className="btn btn-teal text-[15px] px-8 py-[17px]">📅 Book Free Consultation</Link>
          <Link href="/services" className="btn btn-white text-[15px] px-8 py-[17px]">View Services →</Link>
        </div>
        <div className="inline-flex items-center gap-2 bg-wa/15 border border-wa/35 rounded-full px-3.5 py-[7px] text-[12px] font-semibold text-wa cursor-pointer hover:bg-wa/25 transition-all mt-1">
          💬 Book via WhatsApp — Reply in 2 mins
        </div>
        <div className="flex gap-6 flex-wrap mt-10 pt-9 border-t border-white/10">
          <div><div className="text-yellow-400 text-[15px] tracking-[2px]">★★★★★</div><div className="text-white text-[14px] font-semibold mt-0.5">4.9 / 5.0</div><div className="text-white/45 text-xs">612 verified reviews</div></div>
          <div className="w-px bg-white/15" />
          <div><div className="text-white text-[14px] font-semibold">🏆 Best Practice 2024</div><div className="text-white/45 text-xs">London Health Awards</div></div>
          <div className="w-px bg-white/15" />
          <div><div className="text-white text-[14px] font-semibold">🦷 GDC Registered</div><div className="text-white/45 text-xs">All practitioners</div></div>
        </div>
      </div>
      <div className="relative z-10 hidden lg:flex items-center justify-center py-16 pr-16">
        <div className="w-full max-w-[460px] relative">
          <div className="rounded-[24px] aspect-[4/5] bg-cover bg-center shadow-[0_32px_80px_rgba(0,0,0,0.4)] overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=80')" }}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/80" />
          </div>
          <div className="absolute bottom-7 -left-7 bg-white rounded-xl p-3.5 shadow-lg z-10">
            <div className="text-[22px] mb-1">✅</div>
            <div className="text-[13px] font-bold text-ink">Same-Day Emergency</div>
            <div className="text-[11px] text-muted">Slots available daily</div>
          </div>
          <div className="absolute top-10 -right-5 bg-white rounded-xl p-3.5 shadow-lg z-10 text-center">
            <div className="font-display text-[30px] font-black text-teal leading-none">5,000+</div>
            <div className="text-[11px] text-muted mt-1">Happy Patients</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  const stats = [{ n: '5,000+', l: 'Patients Treated' },{ n: '4.9★', l: 'Google Rating' },{ n: '15+', l: 'Years Experience' },{ n: '7', l: 'Days a Week' }]
  return (
    <div className="bg-white border-y border-[#e2ddd6] grid grid-cols-2 lg:grid-cols-4">
      {stats.map((s, i) => (
        <div key={i} className={`py-8 text-center hover:bg-teal-subtle transition-colors ${i < stats.length - 1 ? 'border-r border-[#e2ddd6]' : ''}`}>
          <div className="font-display text-[40px] font-black text-teal leading-none mb-1.5">{s.n}</div>
          <div className="text-[13px] text-muted font-medium">{s.l}</div>
        </div>
      ))}
    </div>
  )
}

function ServiceTiles() {
  return (
    <section className="py-24 bg-[#f7f5f2]">
      <div className="max-w-[1180px] mx-auto px-8">
        <span className="text-[11px] font-semibold tracking-[4px] uppercase text-teal block mb-3">— Our Treatments</span>
        <h2 className="font-display text-[clamp(34px,5vw,52px)] font-semibold leading-[1.1] tracking-[-1.5px]">Everything Your <em className="italic text-teal">Smile Needs</em></h2>
        <p className="text-[16px] text-muted leading-[1.8] mt-3.5 mb-14 max-w-[540px]">From routine hygiene to full smile makeovers — expert care across all dental treatments.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {TREATMENTS.map(t => (
            <Link key={t.id} href="/services" className="tile-card relative bg-white border border-[#e2ddd6] rounded-[18px] p-8 cursor-pointer group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-transparent no-underline overflow-hidden">
              <div className="w-[52px] h-[52px] bg-teal-subtle rounded-xl flex items-center justify-center text-[24px] mb-[18px] transition-all group-hover:bg-teal">{t.icon}</div>
              <h3 className="font-display text-[20px] font-semibold mb-2.5 text-ink">{t.name}</h3>
              <p className="text-[14px] text-muted leading-[1.7]">{t.shortDesc}</p>
              <div className="flex items-center text-[13px] font-semibold text-teal mt-4">{t.price}<span className="ml-auto text-[18px] text-[#e2ddd6] group-hover:text-teal group-hover:translate-x-1 transition-all">→</span></div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-11"><Link href="/services" className="btn btn-outline text-[15px] px-8 py-3.5">View All Treatments →</Link></div>
      </div>
    </section>
  )
}

function WhyUs() {
  const features = [
    { icon: '🕗', title: 'Open 7 Days a Week', desc: 'Weekday evenings until 8PM and weekends — because your schedule matters.' },
    { icon: '💳', title: '0% Finance Available', desc: 'Spread the cost interest-free over 12-24 months. Instant decision, no credit check.' },
    { icon: '🏆', title: 'Award-Winning Care', desc: 'Best Dental Practice, London Health Awards 2024. GDC registered & CQC compliant.' },
    { icon: '😌', title: 'Nervous Patient Specialists', desc: 'IV & oral sedation available. We specialise in helping patients with dental anxiety.' },
  ]
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(11,122,110,0.18),transparent_60%)] pointer-events-none" />
      <div className="max-w-[1180px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[72px] items-center">
          <div className="rounded-[18px] bg-cover bg-center shadow-[0_32px_64px_rgba(0,0,0,0.3)] relative h-[520px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80')" }}>
            <div className="absolute top-5 left-5 right-[-20px] bottom-[-20px] border-2 border-teal/35 rounded-[18px] -z-10" />
          </div>
          <div>
            <span className="text-[11px] font-semibold tracking-[4px] uppercase text-teal-light block mb-3">— Why BrightSmile</span>
            <h2 className="font-display text-[clamp(34px,5vw,52px)] font-semibold leading-[1.1] tracking-[-1.5px] text-white">London's Most <em className="italic text-gold">Trusted</em> Dental Practice</h2>
            <p className="text-[16px] text-white/60 leading-[1.8] mt-3.5 mb-9 max-w-[480px]">Clinical excellence combined with a warm, patient-focused approach that earns hundreds of five-star reviews every year.</p>
            <div className="flex flex-col gap-4">
              {features.map((f, i) => (
                <div key={i} className="flex gap-[18px] p-[18px_20px] bg-white/[0.04] border border-white/[0.07] rounded-[10px] hover:bg-white/[0.07] hover:border-teal/40 transition-all">
                  <div className="w-[42px] h-[42px] bg-teal/20 rounded-[10px] flex items-center justify-center text-[18px] flex-shrink-0">{f.icon}</div>
                  <div><div className="text-[15px] font-semibold text-white mb-1">{f.title}</div><div className="text-[13px] text-white/50 leading-[1.6]">{f.desc}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section className="py-24 bg-[#f0ebe2]">
      <div className="max-w-[1180px] mx-auto px-8">
        <span className="text-[11px] font-semibold tracking-[4px] uppercase text-teal block mb-3">— Patient Reviews</span>
        <h2 className="font-display text-[clamp(34px,5vw,52px)] font-semibold leading-[1.1] tracking-[-1.5px]">What Our Patients <em className="italic text-teal">Are Saying</em></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mt-12">
          {REVIEWS.map((r, i) => (
            <div key={i} className="review-card relative bg-white rounded-[18px] p-7 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
              <div className="text-yellow-400 text-[15px] tracking-[2px] mb-3.5">★★★★★</div>
              <p className="text-[14px] text-muted leading-[1.8] italic mb-5 relative z-10">{r.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-subtle flex items-center justify-center text-[13px] font-bold text-teal flex-shrink-0">{r.initials}</div>
                <div><div className="text-[14px] font-semibold text-ink">{r.name}</div><div className="text-[12px] text-muted">{r.treatment}</div></div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-[14px] text-muted mb-4">★★★★★ 4.9 average · 612 verified reviews on Google</p>
          <Link href="/booking" className="btn btn-navy text-[15px] px-8 py-[17px]">Join 5,000+ Happy Patients →</Link>
        </div>
      </div>
    </section>
  )
}

function CTABanner() {
  return (
    <section className="bg-gradient-to-br from-teal to-teal-light py-20 text-center">
      <div className="max-w-[1180px] mx-auto px-8">
        <h2 className="font-display text-[clamp(28px,5vw,50px)] font-semibold text-white tracking-[-1px] mb-3.5">Ready for Your <em className="italic">Dream Smile?</em></h2>
        <p className="text-[16px] text-white/80 mb-10">Book a free consultation today. No obligation, no pressure — just expert advice.</p>
        <div className="flex max-w-[500px] mx-auto rounded-[10px] overflow-hidden shadow-xl">
          <input type="tel" placeholder="Your phone number for a free callback" className="flex-1 px-5 py-4 border-none outline-none text-[15px] text-ink" />
          <button className="px-6 py-4 bg-navy text-white border-none cursor-pointer text-[13px] font-semibold hover:bg-[#1a3a5c] transition-colors whitespace-nowrap">Get Free Callback →</button>
        </div>
        <p className="text-[13px] text-white/65 mt-3.5">Or call us: <strong className="text-white">{SITE_CONFIG.phone}</strong> · Available 7 days a week</p>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (<><Hero /><Stats /><ServiceTiles /><WhyUs /><Reviews /><CTABanner /></>)
}