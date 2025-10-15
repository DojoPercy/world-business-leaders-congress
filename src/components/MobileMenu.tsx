'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Award } from 'lucide-react'
import * as Icons from 'lucide-react'
import { useEffect } from 'react'
import { siteConfig } from '@/config/site'
import { mobileMenuVariants, menuItemVariants } from '@/lib/animations'
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

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const prefersReducedMotion = useReducedMotion()

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  const variants = prefersReducedMotion 
    ? { closed: {}, open: {} }
    : mobileMenuVariants

  const itemVariants = prefersReducedMotion
    ? { closed: {}, open: {} }
    : menuItemVariants

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          initial="closed"
          animate="open"
          exit="closed"
          variants={variants}
          className="fixed inset-0 z-50 bg-charcoal"
          aria-label="Mobile menu"
          role="dialog"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 p-2 text-gold-400 hover:text-gold-300 focus:outline-none focus:ring-2 focus:ring-gold-600 rounded-lg text-white cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Menu content */}
          <div className="flex flex-col items-center justify-center h-full px-8">
            <motion.ul
              variants={{
                open: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.1 }
                },
                closed: {}
              }}
              className="space-y-6 text-center"
            >
              {siteConfig.navigation.map((item) => {
                const IconComponent = Icons[item.icon as keyof typeof Icons] as Icons.LucideIcon
                return (
                  <motion.li key={item.id} variants={itemVariants}>
                    <button
                      onClick={() => {
                        smoothScrollTo(item.href.replace('#', ''))
                        onClose()
                      }}
                      className="flex items-center justify-center gap-3 text-2xl font-heading font-medium text-white/80 hover:text-gold-400 transition-colors duration-200 py-2"
                    >
                      {IconComponent && <IconComponent className="w-6 h-6" />}
                      {item.label}
                    </button>
                  </motion.li>
                )
              })}
              
              {/* CTA Button */}
              <motion.li variants={itemVariants} className="pt-8">
                <a
                  href={siteConfig.cta.nominations.href}
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-red text-white rounded-lg font-body font-semibold hover:shadow-xl hover:shadow-red-400/50 transition-all duration-300"
                >
                  <Award className="w-5 h-5" />
                  {siteConfig.cta.nominations.label}
                </a>
              </motion.li>
            </motion.ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

