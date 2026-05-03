'use client'

import { useState } from 'react'
import { useWhatsApp } from '@/context/WhatsAppContext'

type ChatMessage = { type: 'in' | 'out'; html: string }

const WA_SVG_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

export default function WhatsAppWidget() {
  const { isOpen, toggleWidget, sendMessage, sendBookingRequest, sendEmergency } = useWhatsApp()
  const [messages, setMessages] = useState<ChatMessage[]>([
    { type: 'in', html: '👋 Hi there! Welcome to <strong>BrightSmile Dental</strong>.<br/><br/>How can we help you today?' }
  ])
  const [view, setView] = useState<'quick' | 'booking' | 'prices'>('quick')
  const [waName, setWaName] = useState('')
  const [selectedTreatment, setSelectedTreatment] = useState('Check-up')
  const [preferredTime, setPreferredTime] = useState('Morning (8AM-12PM)')
  const [notifHidden, setNotifHidden] = useState(false)

  const addMsg = (type: 'in' | 'out', html: string) => setMessages(prev => [...prev, { type, html }])

  const handleFlow = (type: 'book' | 'emergency' | 'prices') => {
    if (type === 'book') {
      addMsg('out', '📅 I\'d like to book an appointment')
      setTimeout(() => { addMsg('in', 'Great! Fill in the quick form below and we\'ll confirm within 2 minutes 🙌'); setView('booking') }, 500)
    } else if (type === 'emergency') {
      addMsg('out', '🚨 I have a dental emergency')
      setTimeout(() => { addMsg('in', 'We\'re so sorry! We have <strong>same-day emergency slots</strong>. Opening WhatsApp now...'); setTimeout(() => sendEmergency(), 1500) }, 500)
    } else {
      addMsg('out', '💰 I\'d like to know about prices')
      setTimeout(() => { addMsg('in', '• 🦷 <strong>Check-up:</strong> from £65<br/>• 😁 <strong>Invisalign:</strong> from £1,800<br/>• ✨ <strong>Whitening:</strong> from £295<br/>• 🦴 <strong>Implants:</strong> from £1,500<br/><br/>All consultations are <strong>FREE</strong>!'); setView('prices') }, 500)
    }
  }

  const handleOpen = () => { setNotifHidden(true); toggleWidget() }
  const treatments = ['Check-up', 'Invisalign', 'Whitening', 'Implants', 'Bonding', 'Emergency', 'Other']
  const times = ['Morning (8AM-12PM)', 'Afternoon (12PM-5PM)', 'Evening (5PM-8PM)', 'Saturday', 'Sunday', 'Any time']

  const WaIcon = ({ size = 30 }: { size?: number }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} style={{ fill: 'white' }}><path d={WA_SVG_PATH} /></svg>
  )

  return (
    <>
      <button onClick={handleOpen} className="animate-wa-bounce fixed bottom-7 right-7 z-[400] w-[58px] h-[58px] rounded-full bg-wa border-none cursor-pointer flex items-center justify-center text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] hover:scale-110 transition-transform" aria-label="WhatsApp booking">
        <div className="animate-wa-pulse absolute inset-[-4px] rounded-full border-[3px] border-wa/40" />
        {!notifHidden && <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-[#f7f5f2]">1</div>}
        <WaIcon size={30} />
      </button>

      <div className={`fixed bottom-[102px] right-7 z-[399] w-[340px] bg-white rounded-[20px] shadow-[0_20px_56px_rgba(0,0,0,0.18)] overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-[0.85] opacity-0 pointer-events-none translate-y-4'}`}>
        <div className="bg-gradient-to-br from-[#075E54] to-[#128C7E] p-[18px] flex items-center gap-3">
          <div className="w-[46px] h-[46px] rounded-full bg-white/20 flex items-center justify-center text-[22px] flex-shrink-0 border-2 border-white/30">🦷</div>
          <div className="flex-1">
            <div className="text-[15px] font-bold text-white">BrightSmile Dental</div>
            <div className="text-[11px] text-white/75 flex items-center gap-1 mt-0.5"><div className="animate-dot-pulse w-[6px] h-[6px] rounded-full bg-wa" /> Online - replies in ~2 mins</div>
          </div>
          <button onClick={toggleWidget} className="w-7 h-7 rounded-full bg-white/15 border-none text-white text-sm cursor-pointer flex items-center justify-center hover:bg-white/25">✕</button>
        </div>

        <div className="p-4 flex flex-col gap-2 max-h-[200px] overflow-y-auto" style={{ background: '#ECE5DD' }}>
          {messages.map((m, i) => m.type === 'in' ? (
            <div key={i} className="bg-white rounded-[0_10px_10px_10px] p-[10px_13px] text-[13px] leading-relaxed max-w-[88%] shadow-sm"><span dangerouslySetInnerHTML={{ __html: m.html }} /><div className="text-[10px] text-[#999] mt-1 text-right">Just now ✓✓</div></div>
          ) : (
            <div key={i} className="wa-bubble-out"><span dangerouslySetInnerHTML={{ __html: m.html }} /><div className="text-[10px] text-[#999] mt-1 text-right">Just now ✓✓</div></div>
          ))}
        </div>

        {view === 'quick' && (
          <div className="p-3 border-t border-black/[0.06]" style={{ background: '#ECE5DD' }}>
            <p className="text-[10px] font-semibold tracking-[2px] uppercase text-[#888] mb-2">Quick Options</p>
            {[{ label: '📅 Book an Appointment', action: () => handleFlow('book') },{ label: '🚨 Dental Emergency', action: () => handleFlow('emergency') },{ label: '💰 Treatment Prices', action: () => handleFlow('prices') },{ label: '💬 General Enquiry', action: () => sendMessage('Hi BrightSmile Dental! I have a general enquiry.') }].map(b => (
              <button key={b.label} onClick={b.action} className="w-full bg-white border border-wa/80 rounded-[22px] px-3.5 py-2.5 text-[13px] font-semibold text-[#075E54] cursor-pointer text-left mb-1.5 last:mb-0 flex items-center gap-2 hover:bg-wa hover:text-white transition-all">{b.label}</button>
            ))}
          </div>
        )}

        {view === 'booking' && (
          <div className="p-3.5 border-t border-[#e2ddd6] bg-white">
            <p className="text-[13px] font-semibold mb-3">📅 Quick Booking</p>
            <label className="block text-[10px] font-semibold tracking-[1px] uppercase text-muted mb-1">Your Name</label>
            <input value={waName} onChange={e => setWaName(e.target.value)} placeholder="Jane Smith" className="w-full px-3 py-2 bg-[#f7f5f2] border border-[#e2ddd6] rounded-[10px] text-[13px] outline-none focus:border-wa mb-2.5" />
            <label className="block text-[10px] font-semibold tracking-[1px] uppercase text-muted mb-1.5">Treatment</label>
            <div className="flex flex-wrap gap-1.5 mb-2.5">{treatments.map(t => (<button key={t} onClick={() => setSelectedTreatment(t)} className={`px-3 py-1 rounded-[20px] text-[12px] border transition-all cursor-pointer ${selectedTreatment === t ? 'bg-wa text-white border-wa' : 'bg-[#f7f5f2] border-[#e2ddd6] hover:bg-wa hover:text-white hover:border-wa'}`}>{t}</button>))}</div>
            <label className="block text-[10px] font-semibold tracking-[1px] uppercase text-muted mb-1">Best Time</label>
            <select value={preferredTime} onChange={e => setPreferredTime(e.target.value)} className="w-full px-3 py-2 bg-[#f7f5f2] border border-[#e2ddd6] rounded-[10px] text-[13px] outline-none mb-3">{times.map(t => <option key={t}>{t}</option>)}</select>
            <button onClick={() => { if (!waName.trim()) return; sendBookingRequest(waName, selectedTreatment, preferredTime) }} className="w-full py-2.5 bg-wa text-white border-none rounded-[10px] text-[13px] font-semibold cursor-pointer flex items-center justify-center gap-2 hover:bg-[#1da851]"><WaIcon size={16} /> Send Booking on WhatsApp</button>
            <p className="text-center text-[11px] text-[#aaa] mt-2">Powered by WhatsApp Business</p>
          </div>
        )}

        {view === 'prices' && (
          <div className="p-3 border-t border-black/[0.06]" style={{ background: '#ECE5DD' }}>
            <p className="text-[10px] font-semibold tracking-[2px] uppercase text-[#888] mb-2">What next?</p>
            <button onClick={() => { setView('booking'); handleFlow('book') }} className="w-full bg-white border border-wa/80 rounded-[22px] px-3.5 py-2.5 text-[13px] font-semibold text-[#075E54] cursor-pointer text-left mb-1.5 hover:bg-wa hover:text-white transition-all">📅 Book a free consultation</button>
            <button onClick={() => sendMessage('Hi! I have a question about treatment prices at BrightSmile Dental.')} className="w-full bg-white border border-wa/80 rounded-[22px] px-3.5 py-2.5 text-[13px] font-semibold text-[#075E54] cursor-pointer text-left hover:bg-wa hover:text-white transition-all">💬 Ask more questions</button>
          </div>
        )}
      </div>
    </>
  )
}