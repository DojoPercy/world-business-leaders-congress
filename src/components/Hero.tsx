'use client'

import { motion } from 'framer-motion'
import { CalendarDays, MapPin, ArrowRight, Calendar, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Button from './Button'
import { siteConfig } from '@/config/site'
import { heroContainerVariants, fadeInUp, scaleIn, scrollIndicatorVariants } from '@/lib/animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = prefersReducedMotion 
    ? { hidden: {}, visible: {} }
    : heroContainerVariants

  const fadeVariants = prefersReducedMotion
    ? { hidden: {}, visible: {} }
    : fadeInUp

  const scaleVariants = prefersReducedMotion
    ? { hidden: {}, visible: {} }
    : scaleIn

  return (
    <section className="relative w-full h-screen overflow-hidden" id="home">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg.jpeg"
          alt="Dubai skyline at golden hour"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/50" />

        
        {/* Fallback background */}
        <div className="absolute inset-0 bg-charcoal -z-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center space-y-8"
        >
          {/* Logo (Small, centered) */}
          <motion.div variants={fadeVariants}>
            <Image
              src="/logos/logo-white.png"
              alt="WBLC Logo"
              width={200}
              height={66}
              className="mx-auto mb-8 drop-shadow-lg"
              priority
            />
          </motion.div>

          {/* Main Headline - Split for better wrapping */}
          <motion.h1
            variants={fadeVariants}
            className="font-heading font-bold text-display text-white"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
          >
           
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeVariants}
            className="text-white/90 text-3xl font-bold lg:text-4xl font-body max-w-3xl mx-auto "
            style={{ lineHeight: '1.5', opacity: 0.95 }}
          >
            {siteConfig.event.theme}
          </motion.p>

          {/* Date & Location Chips */}
          <motion.div
            variants={fadeVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            {/* Date Chip */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/50 rounded-full">
              <CalendarDays className="w-5 h-5 text-white" />
              <span className="text-white font-body font-medium">
                {siteConfig.event.date}
              </span>
            </div>

            {/* Location Chip */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/50 rounded-full">
              <MapPin className="w-5 h-5 text-white" />
              <span className="text-white font-body font-medium">
                {siteConfig.event.location}
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={scaleVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8"
          >
            <Button
              variant="primary"
              icon={ArrowRight}
              iconPosition="right"
              href={siteConfig.cta.primary.href}
              size="lg"
            >
              {siteConfig.cta.primary.label}
            </Button>

            <Button
              variant="outline"
              icon={Calendar}
              iconPosition="left"
              href={siteConfig.cta.secondary.href}
              size="lg"
            >
              {siteConfig.cta.secondary.label}
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        {!prefersReducedMotion && (
          <motion.div
            variants={scrollIndicatorVariants}
            animate="animate"
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-white" />
          </motion.div>
        )}
      </div>

      {/* No-JS Fallback */}
      <noscript>
        <style>{`.hero-content { opacity: 1 !important; }`}</style>
      </noscript>
    </section>
  )
}

