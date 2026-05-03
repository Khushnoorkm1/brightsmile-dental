'use client'

import { WhatsAppProvider } from '@/context/WhatsAppContext'
import TopBar from '@/components/layout/TopBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingBar from '@/components/layout/FloatingBar'
import WhatsAppWidget from '@/components/whatsapp/WhatsAppWidget'
import { useEffect } from 'react'
import { useWhatsApp } from '@/context/WhatsAppContext'

function AutoOpenWa() {
  const { openWidget } = useWhatsApp()
  useEffect(() => {
    const timer = setTimeout(() => openWidget(), 8000)
    return () => clearTimeout(timer)
  }, [openWidget])
  return null
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WhatsAppProvider>
      <AutoOpenWa />
      <TopBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingBar />
      <WhatsAppWidget />
    </WhatsAppProvider>
  )
}