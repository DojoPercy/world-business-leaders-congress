'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  href?: string
  onClick?: () => void
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({
  children,
  variant = 'primary',
  icon: Icon,
  iconPosition = 'right',
  href,
  onClick,
  className = '',
  size = 'md',
}: ButtonProps) {
  const prefersReducedMotion = useReducedMotion()

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  }

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#D13D47] to-[#B32D37] text-white font-semibold text-lg rounded-lg shadow-[0_8px_32px_rgba(209,61,71,0.5)] hover:shadow-[0_12px_48px_rgba(209,61,71,0.7)] hover:scale-105 transition-all duration-300 shadow-lg shadow-red-400/40 hover:shadow-xl hover:shadow-red-400/50',
    secondary:
      'bg-gold-400 text-charcoal shadow-lg shadow-gold-400/40 hover:bg-gold-500',
    outline:
      'bg-transparent border-2 border-gold-400 text-white hover:bg-gold-400 hover:text-charcoal',
  }

  const baseClasses = `
    inline-flex items-center justify-center gap-2 
    rounded-lg font-body font-semibold 
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-gold-600 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `

  const motionProps = prefersReducedMotion
    ? {}
    : {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.98 },
      }

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </>
  )

  if (href) {
    return (
      <motion.a href={href} className={baseClasses} {...motionProps}>
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button onClick={onClick} className={baseClasses} {...motionProps}>
      {content}
    </motion.button>
  )
}
