'use client'

import { motion } from 'framer-motion'
import { Building2, Heart, GraduationCap, Users, ArrowRight, Calendar, MapPin } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const CO_HOSTED_EVENTS = [
  {
    id: 'mining',
    icon: Building2,
    title: 'Green Mining & Critical Minerals Summit 2025',
    subtitle: 'Dubai, UAE',
    theme: 'Building a Responsible Mining Future – Innovation, ESG, and the Energy Transition',
    description: 'A strategic summit uniting mining executives, policymakers, sustainability experts, and investors to shape the future of responsible mining, ESG integration, and the green energy supply chain transition.',
    gradient: 'gradient-red',
    features: [
      'Mining Executives & Policymakers',
      'Sustainability & ESG Integration',
      'Green Energy Supply Chain',
      'Investment Opportunities',
      'Innovation & Technology',
      'Strategic Partnerships'
    ],
    color: 'red',
  },
  {
    id: 'healthcare',
    icon: Heart,
    title: 'Middle East & Africa Healthcare Leadership & Innovation Awards 2025',
    subtitle: 'Dubai, UAE',
    theme: 'Celebrating Healthcare Transformation & Innovation',
    description: 'Celebrating healthcare institutions, leaders, and innovators driving transformation, technology adoption, and access to quality healthcare across the Middle East and Africa.',
    gradient: 'gradient-gold',
    features: [
      'Healthcare Institutions & Leaders',
      'Technology Adoption & Innovation',
      'Quality Healthcare Access',
      'Regional Transformation',
      'Leadership Excellence',
      'Innovation Recognition'
    ],
    color: 'gold',
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'World Education Leadership Awards 2025',
    subtitle: 'Dubai, UAE',
    theme: 'Redefining Learning Excellence for the Future Workforce',
    description: 'Honoring visionary educators, academic leaders, and institutions redefining learning excellence, innovation, and education for the future workforce in a rapidly changing world.',
    gradient: 'gradient-red',
    features: [
      'Visionary Educators & Leaders',
      'Academic Excellence',
      'Future Workforce Preparation',
      'Innovation in Learning',
      'Global Education Impact',
      'Leadership Recognition'
    ],
    color: 'red',
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
      staggerChildren: 0.2,
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

export default function CoHostedEvents() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = prefersReducedMotion ? { hidden: {}, visible: {} } : staggerContainer
  const fadeVariants = prefersReducedMotion ? { hidden: {}, visible: {} } : fadeInUp
  const scaleVariants = prefersReducedMotion ? { hidden: {}, visible: {} } : scaleIn

  return (
    <section id="events" className="py-24 lg:py-32 bg-gradient-to-br from-charcoal via-charcoal to-slate relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-400 rounded-full filter blur-3xl" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-400/20 text-gold-400 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Co-Hosted Events
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Global Multi-Sector Leadership Week
          </h2>
          <p className="text-gray-light text-lg max-w-4xl mx-auto leading-relaxed">
            This year's edition expands into a Global Multi-Sector Leadership Week, co-hosted with three high-impact sectoral summits and awards, each dedicated to advancing sustainable leadership, innovation, and corporate transformation across key global sectors.
          </p>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {CO_HOSTED_EVENTS.map((event, index) => (
            <motion.div
              key={event.id}
              variants={scaleVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-gold-400/50 transition-all duration-500 overflow-hidden"
            >
              {/* Decorative gradient background */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${event.gradient === 'gradient-red' ? 'bg-gradient-red' : 'bg-gradient-gold'} opacity-10 rounded-bl-full transition-opacity duration-300 group-hover:opacity-20`} />

              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className={`inline-flex p-4 rounded-2xl ${event.gradient === 'gradient-red' ? 'bg-gradient-red' : 'bg-gradient-gold'} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <event.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4">
                  <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-gold-400 transition-colors duration-300">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gold-400 text-sm font-medium mb-3">
                    <MapPin className="w-4 h-4" />
                    {event.subtitle}
                  </div>
                  <p className="text-gold-400 font-semibold text-sm mb-4">
                    {event.theme}
                  </p>
                </div>

                <p className="text-gray-light text-sm leading-relaxed mb-6">
                  {event.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {event.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${event.color === 'red' ? 'bg-red-400' : 'bg-gold-400'}`} />
                      <span className="text-gray-light text-sm">{feature}</span>
                    </div>
                  ))}
                  {event.features.length > 3 && (
                    <div className={`text-sm font-medium ${event.color === 'red' ? 'text-red-400' : 'text-gold-400'}`}>
                      +{event.features.length - 3} more focus areas
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-4 rounded-xl font-heading font-semibold text-white transition-all duration-300 ${
                    event.gradient === 'gradient-red' ? 'bg-gradient-red hover:shadow-lg hover:shadow-red-500/30' : 'bg-gradient-gold hover:shadow-lg hover:shadow-gold-500/30'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.button>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-3xl ${
                event.gradient === 'gradient-red' ? 'bg-gradient-red' : 'bg-gradient-gold'
              } opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Strategic Host Platform Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeVariants}
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 lg:p-16 border border-white/10 relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[length:40px_40px]" />
          </div>

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-400/20 text-gold-400 rounded-full text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              Strategic Host Platform
            </div>
            <h3 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
              Unified Leadership Experience
            </h3>
            <p className="text-gray-light text-lg mb-8 max-w-3xl mx-auto">
              All events will be held under the umbrella of the World Business Leaders Congress 2025, providing a shared environment for cross-sector collaboration and global networking.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Cross-sector Collaboration',
                'Global Networking & Partnerships',
                'Shared Sustainability Discussions',
                'Joint Gala & Awards Night'
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeVariants}
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <div className="w-2 h-2 rounded-full bg-gold-400 flex-shrink-0" />
                  <span className="text-gray-light text-sm font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
