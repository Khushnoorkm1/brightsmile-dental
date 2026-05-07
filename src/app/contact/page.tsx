'use client'
import { useState } from 'react'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config'
import { useWhatsApp } from '@/context/WhatsAppContext'

export default function ContactPage() {
  const { openWidget } = useWhatsApp()
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    if ((!phone && !email) || !message) { alert('Please provide contact details and a message.'); return }
    setSent(true)
  }

  return (
    <>
      <div className="bg-navy py-[72px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(11,122,110,0.2),transparent_60%)] pointer-events-none" />
        <div className="max-w-[1180px] mx-auto px-8 text-center relative z-10">
          <div className="flex items-center gap-2 justify-center text-xs text-white/40 mb-3.5">
            <Link href="/" className="hover:text-white no-underline text-white/40">Home</Link>
            <span>›</span><span>Contact</span>
          </div>
          <span className="text-[11px] font-semibold tracking-[4px] uppercase text-teal-light block mb-3">— Get in Touch</span>
          <h1 className="font-display text-[clamp(38px,6vw,66px)] font-light text-white tracking-[-1.5px] mt-2.5 mb-3">
            Contact <em className="italic text-teal-light">BrightSmile Dental</em>
          </h1>
          <p className="text-[16px] text-white/60 max-w-[500px] mx-auto">Call, WhatsApp, or fill in the form — we respond within 1 hour.</p>
        </div>
      </div>

      <section className="py-16 pb-24 max-w-[1180px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">

          <div className="bg-white rounded-[18px] p-11 shadow-md">
            {sent ? (
              <div className="text-center py-12">
                <div className="text-[56px] mb-4">✅</div>
                <h3 className="font-display text-[26px] font-semibold mb-3">Message Sent!</h3>
                <p className="text-[15px] text-muted">We will respond within 1 hour during opening hours.</p>
                <button onClick={() => setSent(false)} className="btn btn-outline mt-6 text-sm">Send Another</button>
              </div>
            ) : (
              <>
                <span className="text-[11px] font-semibold tracking-[4px] uppercase text-teal block mb-3">— Send a Message</span>
                <h2 className="font-display text-[30px] font-semibold tracking-[-0.5px] mb-1.5">How Can We <em className="italic text-teal">Help?</em></h2>
                <p className="text-[14px] text-muted mb-8">We respond within 1 hour during opening hours.</p>
                <div className="grid grid-cols-2 gap-3.5 mb-4">
                  <div>
                    <label className="block text-[11px] font-semibold tracking-[1px] uppercase text-muted mb-1.5">First Name</label>
                    <input type="text" placeholder="Jane" className="w-full px-3.5 py-2.5 bg-[#f7f5f2] border border-[#e2ddd6] rounded-[10px] text-[14px] outline-none focus:border-teal transition-all" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold tracking-[1px] uppercase text-muted mb-1.5">Last Name</label>
                    <input type="text" placeholder="Smith" className="w-full px-3.5 py-2.5 bg-[#f7f5f2] border border-[#e2ddd6] rounded-[10px] text-[14px] outline-none focus:border-teal transition-all" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3.5 mb-4">
                  <div>
                    <label className="block text-[11px] font-semibold tracking-[1px] uppercase text-muted mb-1.5">Phone *</label>
                    <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" placeholder="+44 7700 000000" className="w-full px-3.5 py-2.5 bg-[#f7f5f2] border border-[#e2ddd6] rounded-[10px] text-[14px] outline-none focus:border-teal transition-all" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold tracking-[1px] uppercase text-muted mb-1.5">Email *</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="jane@email.com" className="w-full px-3.5 py-2.5 bg-[#f7f5f2] border border-[#e2ddd6] rounded-[10px] text-[14px] outline-none focus:border-teal transition-all" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-[11px] font-semibold tracking-[1px] uppercase text-muted mb-1.5">Subject</label>
                  <select className="w-full px-3.5 py-2.5 bg-[#f7f5f2] border border-[#e2ddd6] rounded-[10px] text-[14px] outline-none">
                    <option>Book an Appointment</option><option>Treatment Enquiry</option>
                    <option>Pricing Question</option><option>Emergency Dental Care</option>
                    <option>Finance Options</option><option>Other</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-[11px] font-semibold tracking-[1px] uppercase text-muted mb-1.5">Message *</label>
                  <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Tell us how we can help..." className="w-full px-3.5 py-2.5 bg-[#f7f5f2] border border-[#e2ddd6] rounded-[10px] text-[14px] outline-none focus:border-teal transition-all min-h-[120px] resize-y" />
                </div>
                <button onClick={handleSubmit} className="btn btn-teal w-full justify-center text-[15px] py-[17px] rounded-[10px]">Send Message →</button>
                <p className="text-center text-[13px] text-muted mt-3">Or call: <strong className="text-ink">{SITE_CONFIG.phone}</strong></p>
              </>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-[18px] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-subtle rounded-[10px] flex items-center justify-center text-[18px]">📍</div>
                <div className="text-[16px] font-bold text-ink">Find Us</div>
              </div>
              {[
                { label: 'Address', val: SITE_CONFIG.address },
                { label: 'Phone', val: SITE_CONFIG.phone },
                { label: 'Emergency', val: SITE_CONFIG.emergencyPhone + ' (24hr)' },
                { label: 'Email', val: SITE_CONFIG.email },
                { label: 'WhatsApp', val: '+44 7700 000000' },
                { label: 'Nearest', val: "Regent's Park & Baker Street" },
              ].map(item => (
                <div key={item.label} className="flex gap-2.5 py-2 border-b border-[#e2ddd6] last:border-none text-[14px]">
                  <span className="text-muted min-w-[72px] text-[13px]">{item.label}</span>
                  <span className="font-medium text-ink">{item.val}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-[18px] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-subtle rounded-[10px] flex items-center justify-center text-[18px]">🕗</div>
                <div className="text-[16px] font-bold text-ink">Opening Hours</div>
              </div>
              {SITE_CONFIG.hours.map(h => (
                <div key={h.day} className="flex justify-between py-2 border-b border-[#e2ddd6] last:border-none text-[13px]">
                  <span className="text-ink">{h.day}</span>
                  <span className="text-teal font-semibold">{h.time}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#075E54] to-[#128C7E] rounded-[18px] p-6 text-white">
              <h3 className="font-display text-[20px] font-semibold mb-2">💬 Book on WhatsApp</h3>
              <p className="text-[14px] opacity-80 mb-4 leading-[1.6]">Fastest way to book. Team replies within 2 minutes.</p>
              {['Send your name and treatment needed', 'We share available slots instantly', 'Confirm your appointment in one tap'].map((step, i) => (
                <div key={i} className="flex items-center gap-2.5 text-[13px] opacity-90 mb-2">
                  <div className="w-[22px] h-[22px] rounded-full bg-white/20 flex items-center justify-center text-[11px] font-bold flex-shrink-0">{i + 1}</div>
                  {step}
                </div>
              ))}
              <button onClick={openWidget} className="btn btn-wa w-full justify-center mt-4 text-[14px] py-3.5 rounded-[10px]">💬 Chat on WhatsApp Now</button>
            </div>

            <div className="bg-teal rounded-[18px] p-6 text-white">
              <h3 className="font-display text-[18px] font-semibold mb-1.5">Get Directions 📍</h3>
              <p className="text-[14px] opacity-80 mb-4 leading-[1.6]">15 Harley Street, London W1G 9QJ — Regent's Park tube, 3 min walk</p>
              <button onClick={() => window.open(SITE_CONFIG.googleMapsUrl, '_blank')} className="bg-transparent border border-white/40 text-white text-[13px] font-semibold px-4 py-2 rounded-[10px] cursor-pointer hover:bg-white/15 transition-all">Open in Google Maps →</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}