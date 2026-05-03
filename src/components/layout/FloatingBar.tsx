'use client'

import { useWhatsApp } from '@/context/WhatsAppContext'
import { SITE_CONFIG } from '@/lib/config'

export default function FloatingBar() {
  const { openWidget } = useWhatsApp()
  return (
    <div className="hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-[150] bg-navy rounded-full px-6 py-3 items-center gap-4 shadow-[0_8px_32px_rgba(13,33,55,0.4)]">
      <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="flex items-center gap-2 text-white text-[13px] font-medium hover:opacity-80 transition-opacity no-underline">
        <span>📞</span> Call Now
      </a>
      <div className="w-px h-5 bg-white/20" />
      <a href="/booking" className="flex items-center gap-2 text-white text-[13px] font-medium hover:opacity-80 transition-opacity no-underline">
        <span>📅</span> Book Online
      </a>
      <div className="w-px h-5 bg-white/20" />
      <button onClick={openWidget} className="flex items-center gap-2 text-white text-[13px] font-medium bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity">
        <span>💬</span> WhatsApp
      </button>
    </div>
  )
}