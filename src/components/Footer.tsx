'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Globe, ArrowRight, Award, Users, Calendar, Building2 } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  },
} as const

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
} as const

export default function Footer() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = prefersReducedMotion ? { hidden: {}, visible: {} } : staggerContainer
  const fadeVariants = prefersReducedMotion ? { hidden: {}, visible: {} } : fadeInUp

  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-400 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-4 gap-12"
          >
            {/* Company Info */}
            <motion.div variants={fadeVariants} className="lg:col-span-2">
              <div className="mb-8">
                <h3 className="text-2xl font-heading font-bold text-white mb-4">
                  World Business Leaders Congress 2025
                </h3>
                <p className="text-gray-light text-lg leading-relaxed mb-6">
                  Co-Hosted Global Leadership Experience bringing together visionary leaders, policymakers, innovators, and changemakers from across industries and continents.
                </p>
                <div className="flex items-center gap-3 text-gold-400 mb-4">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">15th–19th December 2025</span>
                </div>
                <div className="flex items-center gap-3 text-gold-400">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Dubai, United Arab Emirates</span>
                </div>
              </div>

              {/* Application Info */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="text-lg font-heading font-semibold text-white mb-4">
                  Application & Participation
                </h4>
                <p className="text-gray-light text-sm mb-4">
                  Delegate participation is by invitation only, reserved for C-suite Executives, Board Members, Directors, Policymakers, and Entrepreneurs.
                </p>
                <div className="space-y-2 mb-6">
                  {[
                    'Full access to all conference sessions',
                    'Exclusive masterclasses & awards ceremony',
                    'Magazine feature & media exposure',
                    'Networking luncheons & gala dinner',
                    'Business & investment tourism experience'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                      <span className="text-gray-light text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="text-gray-light text-xs">
                  Note: Travel and accommodation are not included.
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={fadeVariants}>
              <h4 className="text-lg font-heading font-semibold text-white mb-6">
                Contact Information
              </h4>
              
              {/* Sponsorship */}
              <div className="mb-8">
                <h5 className="text-gold-400 font-semibold mb-4">For Sponsorship Opportunities:</h5>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white font-medium">Richmond A. Damoah</div>
                      <a 
                        href="mailto:richmond@radcommgroup.com" 
                        className="text-gray-light hover:text-gold-400 transition-colors duration-300"
                      >
                        richmond@radcommgroup.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <div className="space-y-1">
                      <a 
                        href="tel:+971557909643" 
                        className="block text-gray-light hover:text-gold-400 transition-colors duration-300"
                      >
                        +971 55 790 9643
                      </a>
                      <a 
                        href="tel:+233247415140" 
                        className="block text-gray-light hover:text-gold-400 transition-colors duration-300"
                      >
                        +233 247 415 140
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nominations & Reservations */}
              <div>
                <h5 className="text-gold-400 font-semibold mb-4">For Nominations & Reservations:</h5>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white font-medium">Rhema A. Kpormegbey</div>
                      <a 
                        href="mailto:rhema@radcommgroup.com" 
                        className="text-gray-light hover:text-gold-400 transition-colors duration-300"
                      >
                        rhema@radcommgroup.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <a 
                      href="https://wa.me/971509253801" 
                      className="text-gray-light hover:text-gold-400 transition-colors duration-300"
                    >
                      +971 50 925 3801 (WhatsApp)
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={fadeVariants}>
              <h4 className="text-lg font-heading font-semibold text-white mb-6">
                Quick Links
              </h4>
              <div className="space-y-3">
                {[
                  { label: 'About Congress', href: '#about', icon: Users },
                  { label: 'Congress Agenda', href: '#agenda', icon: Calendar },
                  { label: 'Delegate Packages', href: '#packages', icon: Building2 },
                  { label: 'Co-Hosted Events', href: '#events', icon: Award },
                  { label: 'Gallery', href: '#gallery', icon: Globe },
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center gap-3 text-gray-light hover:text-gold-400 transition-colors duration-300 group"
                  >
                    <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                ))}
              </div>

              {/* Apply Now CTA */}
              <div className="mt-8">
                <motion.a
                  href="https://www.wblcongress.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-red text-white font-heading font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeVariants}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-light text-sm">
              © 2025 RADComm Group. All rights reserved. World Business Leaders Congress 2025.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-light hover:text-gold-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-light hover:text-gold-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-light hover:text-gold-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
