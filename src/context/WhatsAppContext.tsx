'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { SITE_CONFIG } from '@/lib/config'

interface WhatsAppContextType {
  isOpen: boolean
  openWidget: () => void
  closeWidget: () => void
  toggleWidget: () => void
  sendMessage: (message: string) => void
  sendBookingRequest: (name: string, treatment: string, time: string) => void
  sendEmergency: () => void
}

const WhatsAppContext = createContext<WhatsAppContextType | null>(null)

export function WhatsAppProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openWidget = () => setIsOpen(true)
  const closeWidget = () => setIsOpen(false)
  const toggleWidget = () => setIsOpen(prev => !prev)

  const sendMessage = (message: string) => {
    const url = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const sendBookingRequest = (name: string, treatment: string, time: string) => {
    const message = `Hi ${SITE_CONFIG.name}! \n\n APPOINTMENT REQUEST\n\nName: ${name}\nTreatment: ${treatment}\nPreferred Time: ${time}\n\nPlease confirm my appointment slot. Thank you!`
    sendMessage(message)
  }

  const sendEmergency = () => {
    sendMessage('DENTAL EMERGENCY - I need an emergency appointment today. Please call me back urgently.')
  }

  return (
    <WhatsAppContext.Provider value={{ isOpen, openWidget, closeWidget, toggleWidget, sendMessage, sendBookingRequest, sendEmergency }}>
      {children}
    </WhatsAppContext.Provider>
  )
}

export function useWhatsApp() {
  const ctx = useContext(WhatsAppContext)
  if (!ctx) throw new Error('useWhatsApp must be used inside WhatsAppProvider')
  return ctx
}