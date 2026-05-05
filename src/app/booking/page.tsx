'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SITE_CONFIG, TIME_SLOTS, FAQS } from '@/lib/config'
import { useWhatsApp } from '@/context/WhatsAppContext'

export default function BookingPage() {
  const { openWidget } = useWhatsApp()
  const [selectedTreatment, setSelectedTreatment] = useState('New Patient Check-up')
  const [selectedSlot, setSelectedSlot] = useState('')
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const treatmentOptions = [
    { icon: '🔍', label: 'New Patient Check-up' },{ icon: '😁', label: 'Invisalign' },
    { icon: '🦴', label: 'Dental Implants' },{ icon: '✨', label: 'Teeth Whitening' },
    { icon: '💎', label: 'Composite Bonding' },{ icon: '🪥', label: 'Hygiene & Clean' },
    { icon: '🚨', label: 'Emergency' },{ icon: '❓', label: 'Not Sure - Advise Me' },
  ]

  const handleSubmit = () => {
    if (!fname || !phone || !email) { alert('Please fill in your name, phone number and email to continue.'); return }
    setSubmitted(true)
  }

  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-8 py-20">
        <div className="bg-white rounded-[20px] p-14 text-center max-w-[420px] w-full shadow-lg">
          <div className="text-[56px] mb-4">✅</div>
          <h3 className="font-display text-[26px] font-semibold mb-3">Appointment Requested!</h3>
          <p className="text-[15px] text-muted leading-[1.7] mb-2">We've received your request and will call within <strong className="text-ink">30 minutes</strong> to confirm your slot.</p>
          <p className="text-[13px] text-muted mb-8">Urgent? Call: <strong className="text-ink">{SITE_CONFIG.phone}</strong></p>
          <Link href="/" className="btn btn-teal text-[15px] px-8 py-3.5 w-full justify-center">Back to Homepage</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="bg-navy py-[52px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(11,122,110,0.2),transparent_60%)] pointer-events-none" />
        <div className="max-w-[1180px] mx-auto px-8 text-center relative z-10">
          <div className="flex items-center gap-2 justify-center text-xs text-white/40 mb-3.5">
            <Link href="/" className="hover:text-white transition-colors no-underline text-white/40">Home</Link>
            <span>›</span><span>Book Online</span>
          </div>
          <span className="text-[11px] font-semibold tracking-[4px] uppercase text-teal-light block mb-3">— Online Booking</span>
          <h1 className="font-display text-[clamp(38px,6vw,66px)] font-light text-white tracking-[-1.5px] mt-2.5 mb-3">Book Your <em className="italic text-teal-light">Appointment</em></h1>
          <p className="text-[16px] text-white/60 max-w-[500px] mx-auto">Secure your slot in under 2 minutes. Confirmed within 30 minutes by phone or email.</p>
        </div>
      </div>

      <section className="py-14 pb-24 max-w-[1180px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-9">
          <div className="bg-white rounded-[18px] p-11 shadow-md">
            <div className="bg-wa/[0.07] border border-wa/30 rounded-[18px] p-5 flex items-center gap-4 mb-7">
              <div className="w-[50px] h-[50px] bg-wa rounded-xl flex items-center justify-center text-[26px] flex-shrink-0">💬</div>
              <div className="flex-1">
                <h4 className="text-[15px] font-bold mb-0.5">Book instantly via WhatsApp</h4>
                <p className="text-[13px] text-muted">Chat with our team — fastest way to book. Average reply: 2 minutes.</p>
              </div>
              <button onClick={openWidget} className="btn btn-wa text-sm px-4 py-2 flex-shrink-0">Open WhatsApp</button>
            </div>
            <div className="flex items-center gap-3 mb-7">
              <div className="flex-1 h-px bg-[#e2ddd6]" />
              <span className="text-[12px] text-muted font-semibold tracking-[1px]">OR FILL IN THE FORM BELOW</span>
              <div className="flex-1 h-px bg-[#e2ddd6]" />
            </div>
            <h2 className="font-display text-[30px] font-semibold tracking-[-0.5px] mb-1.5">Request an Appointment</h2>
            <p className="text-[14px] text-muted mb-8">We'll confirm your slot within 30 minutes.</p>

            <div className="text-[10px] font-bold tracking-[3px] uppercase text-teal pb-3 border-b border-[#e2ddd6] mb-4">Select Treatment</div>
            <div className="grid grid-cols-2 gap-2.5 mb-2">
              {treatmentOptions.map(t => (
                <button key={t.label} onClick={() => setSelectedTreatment(t.label)}
                  className={`flex items-center gap-2.5 px-3.5 py-2.5 border rounded-[10px] cursor-pointer transition-all text-[13px] text-left ${selectedTreatment === t.label ? 'bg-teal-subtle border-teal' : 'bg-[#f7f5f2] border-[#e2ddd6] hover:border-teal'}`}>
                  <span>{t.icon}</span><span className="flex-1">{t.label}</span>
                  <span className={`w-[17px] h-[17px] rounded-full border flex items-center justify-center text-[10px] flex-shrink-0 transition-all ${selectedTreatment === t.label ? 'bg-teal border-teal text-white' : 'border-[#e2ddd6]'}`}>✓</span>
                </button>
              ))}
            </div>

            <div className="text-[10px] font-bold tracking-[3px] uppercase text-teal pb-3 border-b border-[#e2ddd6] mt-7 mb-4">Choose Date & Time</div>
            <div className="grid grid-cols-2 gap-3.5 mb-4">
              <div>
                <label className="block text-[11px] font-semibold tracking-[1px] uppercase text-muted mb-1.5">Preferred Date</label>
                <input type="date" min={minDate} defaultValue={minDate} className="w-full px-3.5 py-2.5 bg-[#f7f5f2] border border-[#e2ddd6] rounded-[10px] text-[14px] text-ink outline-none focus:border-teal focus:bg-white transition-all" />
              </div>
              <div>
                <label className="block text-[11px] font-semibold tracking-[1px] uppercase text-muted mb-1.5">Preferred Dentist</label>
                <select className="w-full px-3.5 py-2.5 bg-[#f7f5f2] border border-[#e2ddd6] rounded-[10px] text-[14px] text-ink outline-none">
                  <option>No preference</option><option>Dr. Sarah Mitchell</option><option>Dr. James Okafor</option><option>Dr. Priya Sharma</option>
                </select>
              </div>
            </div>
            <div className="mb-1">
              <label className="block text-[11px] font-semibold tracking-[1px] uppercase text-muted mb-1.5">Available Time Slots</label>
              <div className="grid grid-cols-4 gap-1.5">
                {TIME_SLOTS.map(slot => (
                  <button key={slot.time} disabled={!slot.available} onClick={() => slot.available && setSelectedSlot(slot.time)}
                    className={`py-2.5 text-center text-[12px] border rounded-lg transition-all ${!slot.available ? 'opacity-35 cursor-not-allowed bg-[#f7f5f2] border-[#e2ddd6]' : selectedSlot === slot.time ? 'bg-teal text-white border-teal' : 'bg-[#f7f5f2] border-[#e2ddd6] hover:border-teal hover:text-teal cursor-pointer'}`}>
                    {slot.time}
                  </button>
                ))}
              </div>
              <p className="text-[12px] text-muted mt-1.5">Grey = unavailable. Select your preferred time.</p>
            </div>

            <div className="text-[10px] font-bold tracking-[3px] uppercase text-teal pb-3 border-b border-[#e2ddd6] mt-7 mb-4">Your Details</div>
            <div className="grid grid-cols-2 gap-3.5 mb-4">
              <div>
                <label className="block text-[11px] font-semibold tracking-[1px] uppercase text-muted mb-1.5">First Name *</label>
                <input value={fname} onChange={e => setFname(e.target.value)} placeholder="Jane" className="w-full px-3.5 py-2.5 bg-[#f7f5f2] border border-[#e2ddd6] rounded-[10px] text-[14px] text-ink outline-none focus:border-teal focus:bg-white transition-all" />
              </div>
              <div>
                <label className="block text-[11px] font-semibold tracking-[1px] uppercase text-muted mb-1.5">Last Name *</label>
                <input value={lname} onChange={e => setLname(e.target.value)} placeholder="Smith" className="w-full px-3.5 py-2.5 bg-[#f7f5f2] border border-[#e2ddd6] rounded-[10px] text-[14px] text-ink outline-none focus:border-teal focus:bg-white transition-all" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3.5 mb-4">
              <div>
                <label className="block text-[11px] font-semibold tracking-[1px] uppercase text-muted mb-1.5">Phone *</label>
                <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" placeholder="+44 7700 000000" className="w-full px-3.5 py-2.5 bg-[#f7f5f2] border border-[#e2ddd6] rounded-[10px] text-[14px] text-ink outline-none focus:border-teal focus:bg-white transition-all" />
              </div>
              <div>
                <label className="block text-[11px] font-semibold tracking-[1px] uppercase text-muted mb-1.5">Email *</label>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="jane@email.com" className="w-full px-3.5 py-2.5 bg-[#f7f5f2] border border-[#e2ddd6] rounded-[10px] text-[14px] text-ink outline-none focus:border-teal focus:bg-white transition-all" />
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-[11px] font-semibold tracking-[1px] uppercase text-muted mb-1.5">Additional Notes</label>
              <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="Any specific concerns, dental anxiety, or what you'd like to achieve..." className="w-full px-3.5 py-2.5 bg-[#f7f5f2] border border-[#e2ddd6] rounded-[10px] text-[14px] text-ink outline-none focus:border-teal focus:bg-white transition-all min-h-[90px] resize-y" />
            </div>
            <div className="bg-[#f7f5f2] rounded-[10px] p-4 mb-5 text-[12px] text-muted leading-[1.7]">
              <strong className="text-ink">📋 Privacy Notice —</strong> By submitting, you agree to us contacting you to confirm your appointment. Data processed per GDPR.
            </div>
            <button onClick={handleSubmit} className="btn btn-teal w-full justify-content text-[15px] py-[17px] rounded-[10px] justify-center">✓ Confirm Appointment Request</button>
            <p className="text-center text-[12px] text-muted mt-2.5">We'll call to confirm within 30 minutes · Mon-Fri 8AM-8PM</p>
          </div>

          <div className="flex flex-col gap-[18px]">
            <div className="bg-white rounded-[18px] p-6 shadow-sm">
              <p className="text-[11px] font-bold tracking-[2px] uppercase text-muted mb-4">📍 Clinic Information</p>
              {[{ icon: '📍', label: 'Address', val: SITE_CONFIG.address },{ icon: '📞', label: 'Phone', val: SITE_CONFIG.phone },{ icon: '✉️', label: 'Email', val: SITE_CONFIG.email },{ icon: '🚇', label: 'Tube', val: SITE_CONFIG.nearestTube }].map(item => (
                <div key={item.label} className="flex gap-3 mb-3.5 last:mb-0">
                  <div className="w-[34px] h-[34px] bg-teal-subtle rounded-lg flex items-center justify-center text-[15px] flex-shrink-0">{item.icon}</div>
                  <div><div className="text-[11px] text-muted">{item.label}</div><div className="text-[13px] font-medium text-ink mt-0.5">{item.val}</div></div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-[18px] p-6 shadow-sm">
              <p className="text-[11px] font-bold tracking-[2px] uppercase text-muted mb-4">🕗 Opening Hours</p>
              {SITE_CONFIG.hours.map(h => (<div key={h.day} className="flex justify-between py-2 border-b border-[#e2ddd6] last:border-none text-[13px]"><span className="text-ink">{h.day}</span><span className="text-teal font-semibold">{h.time}</span></div>))}
            </div>
            <div className="bg-white rounded-[18px] p-6 shadow-sm">
              <p className="text-[11px] font-bold tracking-[2px] uppercase text-muted mb-3">💰 Finance Options</p>
              <p className="text-[13px] text-muted leading-[1.7] mb-3.5">0% interest-free finance on treatments over £500. Spread over 12-24 months with no hidden fees.</p>
              <div className="bg-teal-subtle rounded-[10px] p-3.5 text-[13px] text-teal font-semibold leading-[1.8]">✓ No credit check for standard plans<br />✓ Instant decision online<br />✓ Flexible repayment options</div>
            </div>
            <div className="bg-white rounded-[18px] p-6 shadow-sm">
              <p className="text-[11px] font-bold tracking-[2px] uppercase text-muted mb-4">❓ FAQs</p>
              {FAQS.map((faq, i) => (
                <div key={i} className="py-3 border-b border-[#e2ddd6] last:border-none cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div className="flex justify-between items-center text-[13px] font-medium text-ink"><span>{faq.q}</span><span className="text-muted text-lg">{openFaq === i ? '−' : '+'}</span></div>
                  {openFaq === i && <p className="text-[12px] text-muted leading-[1.7] mt-2">{faq.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}