'use client'

import { motion } from 'framer-motion'
import { Users, User, Crown, Building2, ArrowRight, Check, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useState, useRef } from 'react'

const PACKAGES = [
  {
    id: 'individual',
    icon: User,
    title: 'Individual Executive',
    subtitle: 'For 1 Executive Delegate',
    price: 'Contact Us',
    description: 'Board Chairs, CEOs, Entrepreneurs, Deputy Managing Directors, COOs, Vice Presidents, Senior Executives, and Government Leaders.',
    gradient: 'gradient-red',
    features: [
      'Full Congress Access',
      'Executive Networking',
      'Leadership Masterclass',
      'Awards Ceremony',
      'Business Tourism',
      'Premium Materials'
    ],
    popular: false,
  },
  {
    id: 'group',
    icon: Users,
    title: 'Group Executive',
    subtitle: 'For 2 Executive Delegates',
    price: 'Contact Us',
    description: 'Executive pairs, business partners, or senior management teams seeking enhanced visibility and strategic alignment.',
    gradient: 'gradient-gold',
    features: [
      'Dual Executive Access',
      'Strategic Partnership Sessions',
      'Enhanced Networking',
      'Joint Brand Visibility',
      'Collaborative Learning',
      'Priority Seating'
    ],
    popular: false,
  },
  {
    id: 'team',
    icon: Building2,
    title: 'Team Executive',
    subtitle: 'For 3 Executive Delegates',
    price: '$6,555',
    description: 'Departmental heads, boards, management teams or cross-functional leadership teams seeking collaborative learning.',
    gradient: 'gradient-red',
    features: [
      'Team Leadership Access',
      'Boardroom Masterclass',
      'Cross-functional Sessions',
      'Team Brand Presence',
      'Collaborative Workshops',
      'Executive Roundtables'
    ],
    popular: true,
  },
  {
    id: 'corporate',
    icon: Crown,
    title: 'Corporate Leadership',
    subtitle: 'For 5 Executive Delegates',
    price: '$10,925',
    description: 'Board teams, C-suite delegations, and corporate leaders seeking maximum visibility and strategic engagement.',
    gradient: 'gradient-gold',
    features: [
      'Full C-Suite Access',
      'Exclusive Board Sessions',
      'Maximum Brand Visibility',
      'Strategic Investment Forums',
      'Premium Networking',
      'VIP Treatment'
    ],
    popular: false,
  },
]

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
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
} as const

const scaleIn = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
  },
} as const

export default function DelegatePackages() {
  const prefersReducedMotion = useReducedMotion()
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const containerVariants = prefersReducedMotion ? { hidden: {}, visible: {} } : staggerContainer
  const fadeVariants = prefersReducedMotion ? { hidden: {}, visible: {} } : fadeInUp
  const scaleVariants = prefersReducedMotion ? { hidden: {}, visible: {} } : scaleIn

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % PACKAGES.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + PACKAGES.length) % PACKAGES.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="packages" className="py-24 lg:py-32 bg-gradient-to-br from-off-white via-gray-50 to-gold-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-400 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeVariants}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-100 text-gold-700 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Executive Packages
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-6">
            Delegate Packages
          </h2>
          <p className="text-slate text-lg max-w-3xl mx-auto leading-relaxed">
            Prestigious five-day global leadership experience designed for visionary executives driving sustainable transformation, innovation, and inclusive growth.
          </p>
        </motion.div>

        {/* Packages - Desktop Grid / Mobile Carousel */}
        <div className="mb-16">
          {/* Desktop Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {PACKAGES.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                variants={scaleVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border ${
                  pkg.popular 
                    ? 'border-gold-400 ring-2 ring-gold-200 scale-105' 
                    : 'border-gray-200 hover:border-gold-300'
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-gradient-gold text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Header with Icon and Price */}
                <div className="relative p-6 bg-gradient-to-br from-gray-50 to-white border-b border-gray-100">
                  <div className="flex items-start justify-between">
                    {/* Icon */}
                    <div className={`p-4 rounded-2xl ${pkg.gradient === 'gradient-red' ? 'bg-gradient-red' : 'bg-gradient-gold'} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <pkg.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Price Badge */}
                    <div className="text-right">
                      <div className="text-3xl font-heading font-bold text-charcoal">
                        {pkg.price}
                      </div>
                      <div className="text-sm text-slate font-medium">
                        {pkg.subtitle}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-heading font-bold text-charcoal mb-3 group-hover:text-red-600 transition-colors duration-300">
                      {pkg.title}
                    </h3>
                  </div>

                  <p className="text-slate text-sm leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {pkg.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-gold-600 flex-shrink-0" />
                        <span className="text-slate text-sm">{feature}</span>
                      </div>
                    ))}
                    {pkg.features.length > 3 && (
                      <div className="text-gold-600 text-sm font-medium">
                        +{pkg.features.length - 3} more benefits
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-4 rounded-xl font-heading font-semibold text-white transition-all duration-300 ${
                      pkg.gradient === 'gradient-red' ? 'bg-gradient-red hover:shadow-lg hover:shadow-red-500/30' : 'bg-gradient-gold hover:shadow-lg hover:shadow-gold-500/30'
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Select Package
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </motion.button>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-3xl ${
                  pkg.gradient === 'gradient-red' ? 'bg-gradient-red' : 'bg-gradient-gold'
                } opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="overflow-hidden rounded-3xl">
              <motion.div
                ref={carouselRef}
                className="flex"
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {PACKAGES.map((pkg, index) => (
                  <div key={pkg.id} className="w-full flex-shrink-0 px-2">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={scaleVariants}
                      className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border ${
                        pkg.popular 
                          ? 'border-gold-400 ring-2 ring-gold-200' 
                          : 'border-gray-200 hover:border-gold-300'
                      }`}
                    >
                      {/* Popular Badge */}
                      {pkg.popular && (
                        <div className="absolute top-3 right-3 z-20">
                          <div className="bg-gradient-gold text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            Popular
                          </div>
                        </div>
                      )}

                      {/* Header with Icon and Price */}
                      <div className="relative p-4 bg-gradient-to-br from-gray-50 to-white border-b border-gray-100">
                        <div className="flex items-start justify-between">
                          {/* Icon */}
                          <div className={`p-3 rounded-2xl ${pkg.gradient === 'gradient-red' ? 'bg-gradient-red' : 'bg-gradient-gold'} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <pkg.icon className="w-6 h-6 text-white" />
                          </div>

                          {/* Price Badge */}
                          <div className="text-right">
                            <div className="text-2xl font-heading font-bold text-charcoal">
                              {pkg.price}
                            </div>
                            <div className="text-xs text-slate font-medium">
                              {pkg.subtitle}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <div className="mb-3">
                          <h3 className="text-lg font-heading font-bold text-charcoal mb-2 group-hover:text-red-600 transition-colors duration-300">
                            {pkg.title}
                          </h3>
                        </div>

                        <p className="text-slate text-sm leading-relaxed mb-4">
                          {pkg.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-1 mb-4">
                          {pkg.features.slice(0, 2).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <Check className="w-3 h-3 text-gold-600 flex-shrink-0" />
                              <span className="text-slate text-xs">{feature}</span>
                            </div>
                          ))}
                          {pkg.features.length > 2 && (
                            <div className="text-gold-600 text-xs font-medium">
                              +{pkg.features.length - 2} more benefits
                            </div>
                          )}
                        </div>

                        {/* CTA Button */}
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full py-2 px-3 rounded-xl font-heading font-semibold text-white text-sm transition-all duration-300 ${
                            pkg.gradient === 'gradient-red' ? 'bg-gradient-red hover:shadow-lg hover:shadow-red-500/30' : 'bg-gradient-gold hover:shadow-lg hover:shadow-gold-500/30'
                          }`}
                        >
                          <span className="flex items-center justify-center gap-1">
                            Select Package
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </motion.button>
                      </div>

                      {/* Hover Effect Border */}
                      <div className={`absolute inset-0 rounded-3xl ${
                        pkg.gradient === 'gradient-red' ? 'bg-gradient-red' : 'bg-gradient-gold'
                      } opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevSlide}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-light/50"
                aria-label="Previous package"
              >
                <ChevronLeft className="w-5 h-5 text-charcoal" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {PACKAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-gold-600 w-6' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to package ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-light/50"
                aria-label="Next package"
              >
                <ChevronRight className="w-5 h-5 text-charcoal" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeVariants}
          className="bg-charcoal rounded-3xl p-10 lg:p-16 text-white relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[length:40px_40px]" />
          </div>

          <div className="relative z-10 text-center">
            <h3 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              Ready to Join Global Leadership?
            </h3>
            <p className="text-gray-light text-lg mb-8 max-w-2xl mx-auto">
              Participation is by invitation or executive sponsorship only, ensuring a curated environment of influential decision-makers.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-red text-white font-heading font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300"
              >
                Request Invitation
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gold-400 text-gold-400 font-heading font-semibold rounded-xl hover:bg-gold-400 hover:text-charcoal transition-all duration-300"
              >
                Contact Sales Team
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
