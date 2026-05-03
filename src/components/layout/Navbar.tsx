'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SITE_CONFIG } from '@/lib/config'
import { useWhatsApp } from '@/context/WhatsAppContext'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/booking', label: 'Book Online' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const { openWidget } = useWhatsApp()

  return (
    <>
      <nav className="sticky top-0 z-[200] bg-[#f7f5f2]/97 backdrop-blur-xl border-b border-[#e2ddd6]">
        <div className="max-w-[1180px] mx-auto px-8 flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <div className="w-10 h-10 bg-gradient-to-br from-teal to-teal-light rounded-[10px] flex items-center justify-center text-xl flex-shrink-0">
              🦷
            </div>
            <span className="font-display text-xl font-semibold text-ink tracking-tight">
              Bright<span className="text-teal">Smile</span>
            </span>
          </Link>
          <ul className="hidden md:flex items-center gap-1 list-none">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <Link href={link.href} className={`block px-3.5 py-2 rounded-lg text-sm font-medium transition-all no-underline ${
                  pathname === link.href ? 'text-teal bg-teal-subtle' : 'text-muted hover:text-teal hover:bg-teal-subtle'
                }`}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex items-center gap-2.5">
            <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-sm font-semibold text-ink no-underline">
              📞 {SITE_CONFIG.phone}
            </a>
            <Link href="/booking" className="btn btn-teal text-sm px-4 py-2 rounded-[10px]">Book Now</Link>
          </div>
          <button className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <span className="block w-[22px] h-0.5 bg-ink rounded-sm" />
            <span className="block w-[22px] h-0.5 bg-ink rounded-sm" />
            <span className="block w-[22px] h-0.5 bg-ink rounded-sm" />
          </button>
        </div>
      </nav>
      <div className={`md:hidden fixed inset-0 z-[300] bg-[#f7f5f2] flex flex-col px-7 py-6 transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center mb-8">
          <span className="font-display text-[22px] font-semibold">Bright<span className="text-teal">Smile</span></span>
          <button onClick={() => setMobileOpen(false)} className="bg-transparent border-none text-2xl text-ink cursor-pointer">✕</button>
        </div>
        {NAV_LINKS.map(link => (
          <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
            className={`block py-3.5 font-display text-[26px] font-semibold border-b border-[#e2ddd6] no-underline transition-colors ${pathname === link.href ? 'text-teal' : 'text-ink hover:text-teal'}`}>
            {link.label}
          </Link>
        ))}
        <div className="mt-auto pt-8 flex flex-col gap-3">
          <Link href="/booking" onClick={() => setMobileOpen(false)} className="btn btn-teal text-[15px] px-6 py-[14px] rounded-[10px] justify-center">📅 Book Appointment</Link>
          <button onClick={() => { openWidget(); setMobileOpen(false) }} className="btn btn-wa text-[15px] px-6 py-[14px] rounded-[10px] justify-center">💬 WhatsApp Us</button>
          <p className="text-center text-sm text-muted mt-2">📞 {SITE_CONFIG.phone}</p>
        </div>
      </div>
    </>
  )
}