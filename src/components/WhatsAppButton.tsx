'use client'

import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
  size?: 'default' | 'sm' | 'lg'
  className?: string
}

export function WhatsAppButton({
  phoneNumber = '1234567890',
  message = 'Hi! I would like to book an appointment for makeup services.',
  size = 'default',
  className = ''
}: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      size={size}
      className={`${className} bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 transition-all duration-200`}
    >
      <MessageCircle className="w-5 h-5" />
      <span>Book via WhatsApp</span>
    </Button>
  )
}
