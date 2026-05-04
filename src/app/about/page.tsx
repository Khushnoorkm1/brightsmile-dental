import Link from 'next/link'
import { TEAM, SITE_CONFIG } from '@/lib/config'

export const metadata = {
  title: 'About Us | Meet Our Dentists | BrightSmile Dental London',
  description: 'Meet the award-winning team at BrightSmile Dental. GDC-registered specialists with 15+ years experience in London.',
}

const ACCREDITATIONS = [
  { icon: '🏛️', label: 'GDC Registered' },{ icon: '🔬', label: 'CQC Compliant' },{ icon: '💎', label: 'Diamond Invisalign' },
  { icon: '🏆', label: 'Best Practice 2024' },{ icon: '🦷', label: 'ITI Implant Member' },{ icon: '📋', label: 'BDA Good Practice' },
]

const VALUES = [
  { icon: '🤝', title: 'Patient First', desc: 'Your comfort and wellbeing guide every decision we make.' },
  { icon: '🔬', title: 'Clinical Excellence', desc: 'Latest technology and ongoing specialist training.' },
  { icon: '💬', title: 'Transparent Pricing', desc: 'No hidden costs. Every quote is detailed and upfront.' },
  { icon: '♿', title: 'Accessible Care', desc: '0% finance, sedation options & evening appointments.' },
]

export default function AboutPage() {
  return (
    <>
      <div className="bg-navy py-[72px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(11,122,110,0.2),transparent_60%)] pointer-events-none" />
        <div className="max-w-[1180px] mx-auto px-8 text-center relative z-10">
          <div className="flex items-center gap-2 justify-center text-xs text-white/40 mb-3.5">
            <Link href="/" className="hover:text-white transition-colors no-underline text-white/40">Home</Link>
            <span>›</span><span>About Us</span>
          </div>
          <span className="text-[11px] font-semibold tracking-[4px] uppercase text-teal-light block mb-3">— Our Story</span>
          <h1 className="font-display text-[clamp(38px,6vw,66px)] font-light text-white tracking-[-1.5px] mt-2.5 mb-3">Meet the Team Behind<br />Your <em className="italic text-teal-light">Smile</em></h1>
          <p className="text-[16px] text-white/60 max-w-[500px] mx-auto">15 years of award-winning dental care. Built on trust, expertise and genuine passion for patient wellbeing.</p>
        </div>
      </div>

      <section className="py-24">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[72px] items-center">
            <div className="relative h-[360px] lg:h-[520px]">
              <div className="absolute top-0 left-0 right-14 bottom-14 rounded-[18px] bg-cover bg-center shadow-xl" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80')" }} />
              <div className="absolute bottom-0 right-0 w-[180px] h-[180px] rounded-[18px] bg-cover bg-center border-[6px] border-[#f7f5f2] shadow-md" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80')" }} />
              <div className="absolute top-5 right-9 bg-teal text-white p-3 rounded-[10px] text-center shadow-lg">
                <div className="font-display text-[26px] font-black leading-none">15+</div>
                <div className="text-[11px] font-medium opacity-85 mt-0.5">Years in London</div>
              </div>
            </div>
            <div>
              <span className="text-[11px] font-semibold tracking-[4px] uppercase text-teal block mb-3">— Our Mission</span>
              <h2 className="font-display text-[clamp(34px,5vw,52px)] font-semibold leading-[1.1] tracking-[-1.5px] mb-6">Exceptional Care,<br /><em className="italic text-teal">Every Visit</em></h2>
              <p className="text-[16px] text-muted leading-[1.9] mb-4">{SITE_CONFIG.name} was founded in 2010 with one simple belief: every patient deserves dental care that is genuinely excellent — not just clinically, but as an experience.</p>
              <p className="text-[16px] text-muted leading-[1.9] mb-10">15 years later, with over 5,000 patients treated and hundreds of five-star reviews, we’re proud to still hold that same standard every single day.</p>
              <div className="grid grid-cols-2 gap-3.5">
                {VALUES.map((v, i) => (
                  <div key={i} className="bg-white border border-[#e2ddd6] rounded-[10px] p-[18px] hover:border-teal hover:bg-teal-subtle transition-all">
                    <div className="text-[22px] mb-2">{v.icon}</div>
                    <div className="text-[14px] font-semibold mb-1 text-ink">{v.title}</div>
                    <div className="text-[13px] text-muted">{v.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f0ebe2]">
        <div className="max-w-[1180px] mx-auto px-8">
          <span className="text-[11px] font-semibold tracking-[4px] uppercase text-teal block mb-3">— Our Dentists</span>
          <h2 className="font-display text-[clamp(34px,5vw,52px)] font-semibold leading-[1.1] tracking-[-1.5px]">Experts You Can <em className="italic text-teal">Trust</em></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {TEAM.map((member, i) => (
              <div key={i} className="bg-white rounded-[18px] overflow-hidden shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all">
                <div className="h-[240px] bg-teal-subtle flex items-center justify-center text-[68px]">{member.emoji}</div>
                <div className="p-[22px_24px]">
                  <div className="font-display text-[20px] font-semibold text-ink">{member.name}</div>
                  <div className="text-[13px] font-semibold text-teal mt-0.5 mb-2">{member.role}</div>
                  <div className="text-[13px] text-muted leading-[1.6]">{member.qual}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-navy py-14">
        <div className="max-w-[1180px] mx-auto px-8 flex justify-center items-center gap-10 lg:gap-14 flex-wrap">
          {ACCREDITATIONS.map((a, i) => (
            <div key={i} className="text-center text-white/45 hover:text-white transition-colors">
              <div className="text-[36px] mb-2">{a.icon}</div>
              <div className="text-[11px] font-semibold tracking-[2px] uppercase">{a.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}