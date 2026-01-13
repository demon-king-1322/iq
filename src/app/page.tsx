'use client'

import { useState } from 'react'
import { ArrowRight, Phone, Mail, MapPin, Instagram, Facebook, Star, CheckCircle, ChevronDown, ChevronUp, Image as ImageIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { WhatsAppButton } from '@/components/WhatsAppButton'

const services = [
  { 
    name: 'Dewy makeup look', 
    description: 'Fresh, glowing, and radiant finish',
    image: '/assets/images/dew makeup.PNG',
    details: 'Achieve that coveted glass-like glow with our dewy makeup look. Perfect for everyday wear and special occasions, this style focuses on luminous skin, subtle highlighting, and a fresh-faced appearance that lasts all day.'
  },
  { 
    name: 'Matte makeup look', 
    description: 'Sophisticated, velvety, and shine-free',
    image: '/assets/images/Matt makeup.PNG',
    details: 'Get a flawless, shine-free finish with our matte makeup look. Ideal for oily skin types and events with photography, this sophisticated style delivers smooth, velvety skin with long-lasting wear.'
  },
  { 
    name: 'Glam makeup look', 
    description: 'High-impact, dramatic, and stunning',
    image: '/assets/images/glam makeup.PNG',
    details: 'Turn heads with our glam makeup look. Featuring bold colors, dramatic contouring, and statement lips, this high-impact style is perfect for parties, galas, and events where you want to make a lasting impression.'
  },
  { 
    name: 'Glass makeup look', 
    description: 'Reflective, luminous, and modern',
    image: '/assets/images/glass makeup.PNG',
    details: 'The glass skin look is all about achieving an ultra-reflective, almost translucent complexion. Using advanced highlighting techniques and dewy products, we create a modern, luminous finish that catches light beautifully.'
  },
  { 
    name: 'Bridal makeup look', 
    description: 'Timeless elegance for your special day',
    image: '/assets/images/Bridal makeup.PNG',
    details: 'Your wedding day deserves perfection. Our bridal makeup is designed to last through tears, dancing, and countless photos while maintaining a timeless, elegant look that enhances your natural beauty and complements your wedding theme.'
  },
  { 
    name: 'No-Makeup makeup look', 
    description: 'Natural enhancement, barely there',
    image: '/assets/images/no makeup makeup.jpg',
    details: 'The art of looking effortlessly beautiful. Our no-makeup look enhances your natural features with subtle techniques that appear invisible—perfect for everyday wear, job interviews, or when you want to look your best without looking "made up".'
  },
  { 
    name: 'Editorial/high-fashion makeup', 
    description: 'Bold, artistic, and runway-ready',
    image: '/assets/images/high fashion.jpg',
    details: 'Push creative boundaries with our editorial makeup services. From avant-garde runway looks to high-fashion magazine spreads, we bring artistic vision to life with bold colors, geometric shapes, and innovative techniques.'
  },
  { 
    name: 'Photoshoot makeup', 
    description: 'Camera-ready and long-lasting',
    image: '/assets/images/photoshoot makeup.jpg',
    details: 'Designed specifically for photography and HD video, our photoshoot makeup ensures you look flawless on camera. We use techniques and products that withstand studio lighting and appear perfect through any lens.'
  },
  { 
    name: 'Cultural or Traditional Makeup', 
    description: 'Authentic cultural beauty',
    image: '/assets/images/cultural trad.jpg',
    details: 'Celebrate your heritage with authentic traditional makeup. Whether for weddings, festivals, or cultural ceremonies, we specialize in various cultural makeup styles including South Asian, Middle Eastern, and traditional techniques.'
  },
  { 
    name: 'Mature skin Makeup', 
    description: 'Enhancing natural beauty at any age',
    image: '/assets/images/mature skin look.jpg',
    details: 'Mature skin requires special care and technique. Our mature skin makeup focuses on hydration, luminosity, and lifting techniques that enhance your natural beauty while addressing fine lines and age spots.'
  },
  { 
    name: 'Bold makeup look', 
    description: 'Confident, vibrant, and eye-catching',
    image: '/assets/images/Bold look.jpg',
    details: 'Make a statement with bold makeup. Featuring vibrant eyeshadows, daring lip colors, and creative eyeliner designs, this look is for those who want to express confidence and individuality through their makeup.'
  },
  { 
    name: 'Vintage/Retro Makeup', 
    description: 'Classic looks from past decades',
    image: '/assets/images/vintage retro.jpg',
    details: 'Transport yourself to another era with vintage makeup looks. From 1920s flapper elegance to 1950s Hollywood glamour and 1980s bold colors, we recreate authentic vintage styles for themed events and special occasions.'
  },
  { 
    name: 'HD makeup look', 
    description: 'Flawless in high definition',
    image: '/assets/images/HD makeup look.jpg',
    details: 'HD makeup is designed to look flawless under high-definition cameras and video. Using airbrush techniques and specialized products, we create a smooth, pore-less finish that looks perfect in 4K and beyond.'
  },
  { 
    name: 'Natural makeup look', 
    description: 'Effortless and everyday beautiful',
    image: '/assets/images/Natural look.jpg',
    details: 'Our natural makeup look enhances your features with subtle, neutral tones. Perfect for everyday wear, this style provides a polished appearance that looks like you woke up looking this good.'
  },
  { 
    name: 'Airbrush makeup look', 
    description: 'Professional, flawless finish',
    image: '/assets/images/Air brush.jpg',
    details: 'Airbrush makeup delivers a professional, flawless finish that lasts up to 24 hours. Using compressed air and specialized formulas, we create a lightweight, breathable look that photographs beautifully and withstands any conditions.'
  },
  { 
    name: 'Dramatic makeup look', 
    description: 'Striking and statement-making',
    image: '/assets/images/Dramatic.jpg',
    details: 'Make a powerful statement with dramatic makeup. This bold style features intense contouring, striking eye makeup, and powerful lip colors—perfect for Halloween, costume parties, and events where you want to transform completely.'
  },
]

const portfolioItems = [
  { title: 'Bridal Elegance', category: 'Bridal', image: '/assets/images/img 1.jpg' },
  { title: 'Editorial Artistry', category: 'Editorial', image: '/assets/images/img 2.jpg' },
  { title: 'Natural Beauty', category: 'Natural', image: '/assets/images/img 3.jpg' },
  { title: 'Glamour Night', category: 'Glam', image: '/assets/images/img 4.jpg' },
  { title: 'Photoshoot Perfect', category: 'Photoshoot', image: '/assets/images/img 5.jpg' },
  { title: 'Vintage Classic', category: 'Vintage', image: '/assets/images/img 7.jpg' },
]

export default function Home() {
  const [expandedServices, setExpandedServices] = useState<Set<number>>(new Set())
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedPortfolioCategory, setSelectedPortfolioCategory] = useState<string | null>(null)

  const toggleService = (index: number) => {
    const newExpanded = new Set(expandedServices)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedServices(newExpanded)
  }
  

  const handleBookService = (serviceName: string) => {
    setSelectedService(serviceName)
  }

  const getWhatsAppMessage = () => {
    if (selectedService) {
      return `Hi! I would like to book an appointment for ${selectedService}.`
    }
    return 'Hi! I would like to book an appointment for makeup services.'
  }

  const filteredPortfolio = selectedPortfolioCategory
    ? portfolioItems.filter(item => item.category === selectedPortfolioCategory)
    : portfolioItems

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <img
                src="/assets/images/IQ prof.jpg"
                alt="Professional Makeup Artist"
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">
                Iqra Arzoo
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                Services
              </a>
              <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
                Portfolio
              </a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </a>
            </div>
            <WhatsAppButton 
              size="sm"
              phoneNumber="917619213992"
              message="Hi! I would like to book an appointment for makeup services."
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/intro.png"
            alt="Professional Makeup Artist"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Enhance Your Natural Beauty
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-white/90">
              Professional Makeup Services by Iqra
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              From bridal glamour to editorial artistry, discover the perfect look for every occasion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-base px-8 py-6"
              >
                <a href="#services">
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <WhatsAppButton 
                size="lg"
                phoneNumber="7619213992"
                message="Hi! I would like to book an appointment for makeup services."
                className="bg-white hover:bg-white/90 text-primary text-base px-8 py-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Our Makeup Services
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Discover the perfect look for any occasion with our comprehensive range of professional makeup services. Click on any service to learn more.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const isExpanded = expandedServices.has(index)
              const isSelected = selectedService === service.name
              return (
                <Card
                  key={index}
                  className={`group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
                    isSelected ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => toggleService(index)}
                >
                  <CardHeader>
                    <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden mb-4 bg-muted">
  <img
    src={service.image}
    alt={service.name}
    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
  />
</div>

                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {service.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-sm text-muted-foreground mb-4">
                        {service.details}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBookService(service.name);
                        }}
                        className="text-primary hover:text-primary/80 group-hover:bg-primary/10"
                      >
                        Book Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleService(index)
                        }}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {selectedService && (
            <div className="mt-12 text-center">
              <div className="inline-block bg-primary/10 rounded-lg p-6 max-w-2xl">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Selected Service</span>
                </div>
                <p className="text-2xl font-bold mb-4">{selectedService}</p>
                <div className="flex justify-center">
                  <WhatsAppButton
                    size="lg"
                    phoneNumber="7619213992"
                    message={getWhatsAppMessage()}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

   {/* Portfolio Section */}
<section id="portfolio" className="py-20">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
        Our Portfolio
      </h2>
      <p className="text-base sm:text-lg text-muted-foreground mb-8">
        Explore our collection of stunning makeup looks and transformations
      </p>
    </div>

    {/* Portfolio Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolioItems.map((item, index) => (
        <Card
          key={index}
          className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-muted">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Card>
      ))}
    </div>

  </div>
</section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Meet Iqra Arzoo
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                Professional makeup artist with 9 years of experience, and my work is deeply rooted in the belief that makeup should feel like you—only more confident.

My journey into makeup wasn’t just about learning techniques; it was about understanding faces, skin, and the emotions that come with important moments. Over the years, I’ve learned that great makeup isn’t about following trends blindly—it’s about listening, observing, and creating a look that feels comfortable, effortless, and true to the person wearing it.

I focus on skin-first, well-balanced makeup that enhances natural features rather than masking them. Every face tells a different story, and I take the time to tailor each look based on skin texture, tone, facial structure, and personal style. Whether the goal is soft and understated or polished and glamorous, my approach remains thoughtful and intentional.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                With nearly a decade of hands-on experience, I’ve worked across a wide range of skin tones, face shapes, and occasions. This experience has taught me precision, patience, and the importance of details that last beyond the mirror—how makeup feels throughout the day matters just as much as how it looks.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary fill-current" />
                    <span className="font-semibold">Expert Artist</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary fill-current" />
                    <span className="font-semibold">Premium Products</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary fill-current" />
                    <span className="font-semibold">Custom Looks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary fill-current" />
                    <span className="font-semibold">Satisfaction Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-amber-500/20 rounded-3xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <img
            src="/assets/images/pro.jpg"
            alt="Professional Makeup Artist"
            className="w-full h-full object-cover"
          />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-500/10 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Book Your Appointment
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Ready to enhance your beauty? Get in touch today and let's create your perfect look
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-muted-foreground">+91 7619213992</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground"><a href="mailto:iqraarzoo.makeup@gmail.com">iqraarzoo.makeup@gmail.com</a></p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Location</h3>
                  <p className="text-muted-foreground">Available for Studio & On-Site</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 to-amber-500/10 border-primary/20">
              <CardContent className="pt-8 pb-8 space-y-6">
                <h3 className="text-2xl font-bold">
                  Quick & Easy Booking
                </h3>
                <p className="text-muted-foreground">
                  Click below to book your appointment directly via WhatsApp
                </p>
                <div className="flex justify-center">
                  <WhatsAppButton
                    size="lg"
                    phoneNumber="7619213992"
                    message={getWhatsAppMessage()}
                  />
                </div>
                {selectedService && (
                  <p className="text-sm text-muted-foreground pt-4">
                    Booking for: <span className="font-semibold text-primary">{selectedService}</span>
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/assets/images/pro.jpg"
                  alt="Professional Makeup Artist"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">
                  Iqra Arzo
                </span>
              </div>
              <p className="text-muted-foreground max-w-sm">
                Professional makeup services for all occasions. Enhancing natural beauty with artistry and passion.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Iqra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
