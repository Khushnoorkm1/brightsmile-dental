import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config'

const SERVICES_LINKS = ['Invisalign','Dental Implants','Teeth Whitening','Composite Bonding','Porcelain Veneers','Emergency Dentistry','Hygiene & Check-up']
const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Meet the Team', href: '/about' },
  { label: 'Book Online', href: '/booking' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Patient Finance', href: '/booking' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-white/65">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 py-16 lg:py-[72px]">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-teal rounded-lg flex items-center justify-center text-lg">🦷</div>
              <span className="font-display text-[18px] font-semibold text-white">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-sm leading-[1.8] max-w-[260px] mb-6">London's most trusted private dental practice. GDC registered, award-winning care, open 7 days.</p>
            <div className="flex gap-2">
              {['📸','📘','🔍','💬'].map((icon, i) => (
                <a key={i} className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-sm cursor-pointer hover:bg-teal transition-colors">{icon}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[11px] font-bold tracking-[3px] uppercase text-white mb-[18px]">Treatments</h4>
            <ul className="flex flex-col gap-2">
              {SERVICES_LINKS.map(s => (<li key={s}><Link href="/services" className="footer-link text-sm no-underline">{s}</Link></li>))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-bold tracking-[3px] uppercase text-white mb-[18px]">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {QUICK_LINKS.map(l => (<li key={l.label}><Link href={l.href} className="footer-link text-sm no-underline">{l.label}</Link></li>))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-bold tracking-[3px] uppercase text-white mb-[18px]">Contact</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li className="text-white/45">📍 {SITE_CONFIG.address}</li>
              <li><a href={`tel:${SITE_CONFIG.phoneRaw}`} className="footer-link">📞 {SITE_CONFIG.phone}</a></li>
              <li><a href={`mailto:${SITE_CONFIG.email}`} className="footer-link">✉ {SITE_CONFIG.email}</a></li>
              <li className="footer-link cursor-pointer">💬 WhatsApp Us</li>
              <li className="text-white/45">🕗 Open 7 Days a Week</li>
              <li className="text-white/45">🏆 Best Practice 2024</li>
              <li className="text-white/45">🦷 GDC Registered</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/[0.08] py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/30">© 2025 {SITE_CONFIG.name} Ltd · GDC Registration: 123456 · All Rights Reserved</p>
          <div className="flex gap-5">
            {['Privacy Policy','Terms of Service','Cookie Policy','Sitemap'].map(l => (
              <a key={l} className="text-xs text-white/30 hover:text-white transition-colors cursor-pointer">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}