/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Instagram, 
  CheckCircle2, 
  Droplets, 
  Home, 
  Car, 
  Building2, 
  Shovel, 
  Sparkles, 
  Bug, 
  ArrowRight,
  MessageCircle,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const PHONE_NUMBER = "234705899851"; // Assuming Nigerian number based on 070...
const EMAIL = "sunshinecleaningenterprise@gmail.com";
const INSTAGRAM = "sunshinecleaningenterprise";

const services = [
  {
    id: 'roof',
    title: 'Roof Cleaning',
    description: 'Restore your home\'s curb appeal and extend roof life. We remove moss, algae, and debris using safe, high-pressure techniques that prevent structural damage and leaks.',
    benefits: ['Prevents structural decay', 'Increases property value', 'Eco-friendly moss removal'],
    icon: <Droplets className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-construction',
    title: 'Post Construction Cleaning',
    description: 'Moving into a new space should be stress-free. We handle the heavy lifting—removing fine dust, paint splatters, and construction debris from every nook and cranny.',
    benefits: ['Move-in ready results', 'HEPA-filtered dust removal', 'Safe debris disposal'],
    icon: <Building2 className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'driveways',
    title: 'Driveways & Patios',
    description: 'Make your outdoor spaces look brand new. Our industrial-grade pressure washing eliminates oil stains, tire marks, and stubborn weeds, enhancing safety and aesthetics.',
    benefits: ['Industrial-grade equipment', 'Stain & weed removal', 'Slip-resistant finish'],
    icon: <Shovel className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'general-house',
    title: 'General House Cleaning',
    description: 'A spotless home is a happy home. Our comprehensive package covers dusting, vacuuming, and sanitizing all living areas with eco-friendly products safe for your family.',
    benefits: ['Eco-friendly products', 'Sanitized surfaces', 'Customizable checklists'],
    icon: <Home className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'car-wash',
    title: 'Professional Car Wash',
    description: 'Showroom quality at your doorstep. We provide meticulous exterior washing and interior detailing, including upholstery steam cleaning and dashboard polishing.',
    benefits: ['Mobile convenience', 'Interior detailing', 'Paint protection focus'],
    icon: <Car className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'apartment',
    title: 'Apartment General Cleaning',
    description: 'Perfect for busy professionals. We offer deep cleaning for compact spaces, focusing on kitchens, bathrooms, and high-touch surfaces to ensure a germ-free environment.',
    benefits: ['Germ-free sanitization', 'Fast & efficient service', 'Flexible scheduling'],
    icon: <Sparkles className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'carpet',
    title: 'Carpet Cleaning',
    description: 'Breathe easier with deep-cleaned carpets. Our advanced extraction method removes deep-seated allergens, dust mites, and tough stains while preserving fabric integrity.',
    benefits: ['Allergen removal', 'Deep stain extraction', 'Fast drying times'],
    icon: <Droplets className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fumigation',
    title: 'Fumigation Service',
    description: 'Protect your health and property. We use professional-grade, safe chemicals to eliminate pests like termites, cockroaches, and bedbugs with long-lasting residual effects.',
    benefits: ['Long-lasting protection', 'Safe for residents', 'Pest-free guarantee'],
    icon: <Bug className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=800'
  }
];

const features = [
  { title: 'Reliable', description: 'We show up on time and deliver what we promise.' },
  { title: 'Versatile', description: 'From roofs to carpets, we handle it all.' },
  { title: 'Empowering', description: 'An Anu Student Initiative making a difference.' },
  { title: 'Trustworthy', description: 'Your property is safe in our professional hands.' }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getWhatsAppLink = (service?: string) => {
    const text = service 
      ? `Hello Sunshine Cleaning! I'd like to get a quotation for your ${service} service.`
      : "Hello Sunshine Cleaning! I'd like to book a cleaning service.";
    return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
       <div className="flex items-center gap-2">
                <div className="p-1">
                  <img 
                    src="/assets/logo.png"
                    alt="Sunshine Cleaning Logo"
                    className="h-16 w-auto object-contain" // height = 3rem, width scales automatically
                  />
                </div>
              </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">Why Us</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
            <a 
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Book Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-semibold">Services</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-semibold">Why Choose Us</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-semibold">Contact</a>
              <a 
                href={getWhatsAppLink()}
                className="bg-primary text-white py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Book via WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-accent/10 rounded-l-[100px] hidden lg:block" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                ANU STUDENT INITIATIVE
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-tight mb-6">
                Professional <br />
                <span className="text-primary">Cleaning</span> Service
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                Shining Solution, Student Power. We provide top-tier cleaning services for homes, offices, and vehicles with a commitment to excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl hover:shadow-primary/20 flex items-center justify-center gap-3"
                >
                  Book a Service
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a 
                  href="#services"
                  className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:border-primary transition-all flex items-center justify-center"
                >
                  View Services
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
                <img 
                  src="https://picsum.photos/seed/cleaner/1000/1000" 
                  alt="Professional Cleaning"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="bg-accent/20 p-3 rounded-2xl">
                    <Sparkles className="text-accent w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">100%</div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Satisfaction</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">What We Offer</h2>
            <h3 className="text-4xl lg:text-5xl font-display font-bold text-slate-900">Our Professional Services</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="service-card group bg-white rounded-[32px] overflow-hidden border border-slate-100 flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-primary shadow-lg">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-8">
                    {service.benefits?.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                        {benefit}
                      </div>
                    ))}
                  </div>

                  <a 
                    href={getWhatsAppLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-slate-50 text-primary py-4 rounded-2xl font-bold text-sm hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    Get Quotation
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-white rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-accent font-bold uppercase tracking-widest mb-4">Why Choose Us</h2>
              <h3 className="text-4xl lg:text-5xl font-display font-bold mb-8">Excellence in Every Corner</h3>
              <p className="text-primary-foreground/80 text-lg mb-12 leading-relaxed">
                As a student-led initiative, we bring fresh energy, modern techniques, and a deep commitment to building a trustworthy brand.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="text-accent w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">{feature.title}</h4>
                      <p className="text-primary-foreground/70 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="https://picsum.photos/seed/s1/400/500" alt="Work 1" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
                  <img src="https://picsum.photos/seed/s2/400/300" alt="Work 2" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-4 pt-8">
                  <img src="https://picsum.photos/seed/s3/400/300" alt="Work 3" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
                  <img src="https://picsum.photos/seed/s4/400/500" alt="Work 4" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[40px] shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-16 bg-slate-900 text-white">
                <h3 className="text-3xl font-display font-bold mb-8">Get In Touch</h3>
                <p className="text-slate-400 mb-12">
                  Ready to experience the Sunshine difference? Contact us today for a free consultation and quote.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-accent">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 uppercase font-bold tracking-wider">Call Us</div>
                      <div className="text-xl font-bold">0705899851</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-accent">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 uppercase font-bold tracking-wider">Email Us</div>
                      <div className="text-lg font-bold truncate max-w-[200px] sm:max-w-none">{EMAIL}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-accent">
                      <Instagram className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 uppercase font-bold tracking-wider">Follow Us</div>
                      <div className="text-xl font-bold">@{INSTAGRAM}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 lg:p-16">
                <h4 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h4>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Phone</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="070..." />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Service Needed</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none">
                      <option>Roof Cleaning</option>
                      <option>Post Construction</option>
                      <option>General House Cleaning</option>
                      <option>Car Wash</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Tell us about your cleaning needs..."></textarea>
                  </div>
                  <button 
                    onClick={() => window.open(getWhatsAppLink(), '_blank')}
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg flex items-center justify-center gap-3"
                  >
                    Send via WhatsApp
                    <MessageCircle className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="bg-primary p-1.5 rounded-lg">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl text-primary tracking-tight">SUNSHINE CLEANING</span>
          </div>
          <p className="text-slate-500 text-sm mb-8">
            &copy; {new Date().getFullYear()} Sunshine Cleaning Enterprise. All rights reserved. <br />
            An Anu Student Initiative.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Phone className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
          Chat with us!
        </span>
      </a>
    </div>
  );
}
