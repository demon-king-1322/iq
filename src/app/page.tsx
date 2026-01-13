'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Star,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { WhatsAppButton } from '@/components/WhatsAppButton'

const services = [
  {
    name: 'Dewy makeup look',
    description: 'Fresh, glowing, and radiant finish',
    image: '/assets/images/dewy-makeup.png',
    details:
      'Achieve that coveted glass-like glow with our dewy makeup look. Perfect for everyday wear and special occasions, this style focuses on luminous skin, subtle highlighting, and a fresh-faced appearance that lasts all day.',
  },
  {
    name: 'Matte makeup look',
    description: 'Sophisticated, velvety, and shine-free',
    image: '/assets/images/matte-makeup.png',
    details:
      'Get a flawless, shine-free finish with our matte makeup look. Ideal for oily skin types and events with photography, this sophisticated style delivers smooth, velvety skin with long-lasting wear.',
  },
  {
    name: 'Glam makeup look',
    description: 'High-impact, dramatic, and stunning',
    image: '/assets/images/glam-makeup.png',
    details:
      'Turn heads with our glam makeup look. Featuring bold colors, dramatic contouring, and statement lips, this high-impact style is perfect for parties, galas, and events where you want to make a lasting impression.',
  },
  {
    name: 'Glass makeup look',
    description: 'Reflective, luminous, and modern',
    image: '/assets/images/glass-makeup.png',
    details:
      'The glass skin look is all about achieving an ultra-reflective, almost translucent complexion.',
  },
  {
    name: 'Bridal makeup look',
    description: 'Timeless elegance for your special day',
    image: '/assets/images/bridal-makeup.png',
    details:
      'Your wedding day deserves perfection. Our bridal makeup is designed to last through tears, dancing, and countless photos.',
  },
  {
    name: 'No-Makeup makeup look',
    description: 'Natural enhancement, barely there',
    image: '/assets/images/no-makeup.jpg',
    details:
      'The art of looking effortlessly beautiful with subtle techniques that appear invisible.',
  },
]

const portfolioItems = [
  { title: 'Bridal Elegance', category: 'Bridal', image: '/assets/images/portfolio-bridal.jpg' },
  { title: 'Editorial Artistry', category: 'Editorial', image: '/assets/images/portfolio-editorial.jpg' },
  { title: 'Natural Beauty', category: 'Natural', image: '/assets/images/portfolio-natural.jpg' },
]

export default function Home() {
  const [expandedServices, setExpandedServices] = useState(new Set())
  const [selectedService, setSelectedService] = useState(null)
  const [selectedPortfolioCategory, setSelectedPortfolioCategory] = useState(null)

  const toggleService = (index) => {
    const next = new Set(expandedServices)
    next.has(index) ? next.delete(index) : next.add(index)
    setExpandedServices(next)
  }

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const isExpanded = expandedServices.has(index)
            return (
              <Card key={index} onClick={() => toggleService(index)} className="cursor-pointer">
                <CardHeader>
                  {/* ✅ IMAGE FIXED */}
                  <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden mb-4 bg-muted">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <CardTitle>{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  {isExpanded && <p className="text-sm">{service.details}</p>}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
