'use client'

import { motion } from 'framer-motion'
import { Globe, Lightbulb, Users, Target, Award, Sprout, ArrowRight } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const BENEFITS = [
  {
    icon: Globe,
    title: 'Global Perspective, Local Impact',
    description: 'Engage with world-renowned leaders, policymakers, and entrepreneurs driving sustainable growth across continents.',
    gradient: 'gradient-red',
  },
  {
    icon: Lightbulb,
    title: 'Visionary Insights',
    description: 'Gain access to exclusive thought leadership on business strategy, digital transformation, ESG integration, and leadership excellence.',
    gradient: 'gradient-gold',
  },
  {
    icon: Users,
    title: 'Strategic Networking',
    description: 'Connect with 300+ top-tier executives, board members, and investors from across industries in Dubai — one of the world\'s most dynamic business hubs.',
    gradient: 'gradient-red',
  },
  {
    icon: Target,
    title: 'Actionable Takeaways',
    description: 'Learn practical frameworks and proven strategies to balance profitability with purpose, innovation with sustainability, and leadership with impact.',
    gradient: 'gradient-gold',
  },
  {
    icon: Award,
    title: 'Global Recognition',
    description: 'Celebrate excellence at the prestigious World Business Leaders Awards, honoring outstanding companies and executives for visionary leadership.',
    gradient: 'gradient-red',
  },
  {
    icon: Sprout,
    title: 'Purpose-Driven Leadership',
    description: 'Be part of the global conversation redefining success — from profit-driven to purpose-driven enterprises building a sustainable future.',
    gradient: 'gradient-gold',
  },
]

const HIGHLIGHTS = [
  {
    title: 'Global Leadership Conference',
    description: 'Engaging plenary sessions, keynotes, and panels exploring the intersection of leadership, technology, and sustainability.',
  },
  {
    title: 'The Boardroom Masterclass',
    description: 'Exclusive masterclasses for board chairs, directors, and senior executives focusing on governance and responsible leadership.',
  },
  {
    title: 'The World Business Leaders Awards 2025',
    description: 'Elite recognition ceremony celebrating outstanding achievements in leadership, innovation, sustainability, and corporate impact.',
  },
  {
    title: 'Executive Networking & Gala Dinner',
    description: 'Luxury networking experience bringing together global decision-makers, investors, and thought leaders for strategic partnerships.',
  },
  {
    title: 'Innovation & Business Tours',
    description: 'Curated tours to leading innovation hubs and sustainable enterprises across the UAE — exposure to breakthrough technologies.',
  },
  {
    title: 'Business Media Exposure',
    description: 'Get featured in Premier Business Magazine, The Governance & Business Boardroom, and The Boardroom Magazine.',
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
      staggerChildren: 0.12,
      delayChildren: 0.2,
    }
  }
}

export default function WhyAttend() {
  const prefersReducedMotion = useReducedMotion()
  
  const containerVariants = prefersReducedMotion ? { hidden: {}, visible: {} } : staggerContainer
  const fadeVariants = prefersReducedMotion ? { hidden: {}, visible: {} } : fadeInUp

  return (
    <section id="why-attend" className="relative py-24 lg:py-32 bg-gradient-to-b from-off-white via-white to-gold-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeVariants}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold tracking-wide uppercase">
              <Sprout className="w-4 h-4" />
              Transformative Experience
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-6">
            Why Attend WBLC 2025
          </h2>
          
          <p className="text-lg lg:text-xl text-slate max-w-3xl mx-auto leading-relaxed">
            Not just another conference — a transformative experience designed for leaders redefining 
            the purpose and power of business in a new global era.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-light/50"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl ${benefit.gradient === 'gradient-red' ? 'bg-gradient-red' : 'bg-gradient-gold'} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-charcoal mb-3 group-hover:text-red-600 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-slate leading-relaxed">
                {benefit.description}
              </p>

              {/* Decorative gradient line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 ${benefit.gradient === 'gradient-red' ? 'bg-gradient-red' : 'bg-gradient-gold'} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Key Highlights Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeVariants}
          className="bg-charcoal rounded-3xl p-10 lg:p-16 relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[length:40px_40px]" />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                Key Highlights
              </h3>
              <p className="text-gray- text-lg max-w-2xl mx-auto">
                Six transformative experiences designed to elevate your leadership journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {HIGHLIGHTS.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={fadeVariants}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-gold-400/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-gold flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <h4 className="text-white font-heading font-semibold text-lg leading-tight group-hover:text-gold-400 transition-colors duration-300">
                      {highlight.title}
                    </h4>
                  </div>
                  <p className="text-gray-muted text-sm leading-relaxed ml-11">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeVariants}
          className="text-center mt-16"
        >
          <motion.a
            href="#register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-red text-white font-heading font-semibold text-lg rounded-xl shadow-xl hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300"
          >
            Secure Your Seat Today
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

