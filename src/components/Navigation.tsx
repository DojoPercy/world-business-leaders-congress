'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, Award } from 'lucide-react'
import Image from 'next/image'
import { siteConfig } from '@/config/site'
import MobileMenu from './MobileMenu'
import { useReducedMotion } from '@/hooks/useReducedMotion'

// Smooth scroll function
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    const offsetTop = element.offsetTop - 80 // Account for fixed nav height
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  }
}

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const prefersReducedMotion = useReducedMotion()

  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(250,250,248,0)', 'rgba(250,250,248,0.95)']
  )

  const logoScale = useTransform(scrollY, [0, 100], [1, 0.89])

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    
    window.addEventListener('scroll', updateScroll)
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  return (
    <>
      <motion.nav
        style={prefersReducedMotion ? {} : { backgroundColor: navBackground }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'backdrop-blur-lg border-b border-gold-200 shadow-sm' 
            : ''
        }`}
      >
        <div 
          className={`max-w-[1440px] mx-auto px-6 lg:px-12 transition-all duration-300 ${
            isScrolled ? 'h-16' : 'h-20'
          }`}
        >
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <motion.div
              style={prefersReducedMotion ? {} : { scale: logoScale }}
              className="flex-shrink-0"
            >
              <button onClick={() => smoothScrollTo('home')} className="block" aria-label="World Business Leaders Congress Home">
                <Image
                  src="/logos/logo-dark.png"
                  alt="World Business Leaders Congress"
                  width={180}
                  height={60}
                  className="h-12 w-auto transition-all duration-300"
                  priority
                />
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {siteConfig.navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => smoothScrollTo(item.href.replace('#', ''))}
                  className="text-charcoal hover:text-red-400 font-body font-medium text-sm transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
              
              {/* CTA Button */}
              <a
                href={siteConfig.cta.nominations.href}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-red text-white text-sm font-body font-semibold rounded-md hover:shadow-lg hover:shadow-red-400/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
              >
                <Award className="w-4 h-4" />
                {siteConfig.cta.nominations.label}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-charcoal hover:text-gold-600 focus:outline-none focus:ring-2 focus:ring-gold-600 rounded-lg transition-colors duration-200"
              aria-label="Open menu"
              aria-expanded="false"
              aria-controls="mobile-menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}

