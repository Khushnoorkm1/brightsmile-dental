import { SITE_CONFIG } from '@/lib/config'

export default function TopBar() {
  return (
    <div className="bg-navy py-2 text-xs text-white/75">
      <div className="max-w-[1180px] mx-auto px-8 flex justify-between items-center flex-wrap gap-2">
        <div className="flex gap-6 flex-wrap items-center">
          <span>📍 {SITE_CONFIG.address}</span>
          <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="hover:text-white transition-colors">
            📞 {SITE_CONFIG.phone}
          </a>
          <span>Mon-Fri 8AM-8PM · Sat 9AM-5PM · Sun 10AM-2PM</span>
        </div>
        <span className="bg-red-600 text-white px-3 py-0.5 rounded-full text-[10px] font-bold animate-blink">
          🚨 EMERGENCY: Same Day
        </span>
      </div>
    </div>
  )
}