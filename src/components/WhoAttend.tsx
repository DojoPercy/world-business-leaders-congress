'use client'

import { motion } from 'framer-motion'
import { Briefcase, Rocket, TrendingUp, Building2, GraduationCap, Users2 } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const ATTENDEE_PROFILES = [
  {
    icon: Briefcase,
    title: 'Board Chairs & C-Suite Executives',
    roles: ['Board Chairs', 'CEOs', 'CFOs', 'COOs', 'Directors'],
    description: 'Senior executives leading strategic growth and organizational transformation across industries.',
    gradient: 'gradient-red',
    accent: 'bg-red-50 text-red-600',
  },
  {
    icon: Rocket,
    title: 'Entrepreneurs & Founders',
    roles: ['Startup Founders', 'Serial Entrepreneurs', 'Business Owners'],
    description: 'Visionary leaders of both emerging startups and established enterprises shaping the future of business.',
    gradient: 'gradient-gold',
    accent: 'bg-gold-50 text-gold-700',
  },
  {
    icon: TrendingUp,
    title: 'Investors & Financial Leaders',
    roles: ['Private Equity Partners', 'VCs', 'Investment Bankers', 'Fund Managers'],
    description: 'Key players in global finance seeking new opportunities for impact and sustainable returns.',
    gradient: 'gradient-red',
    accent: 'bg-red-50 text-red-600',
  },
  {
    icon: Building2,
    title: 'Government & Policy Leaders',
    roles: ['Ministers', 'Regulators', 'Economic Development Officers'],
    description: 'Officials and policymakers advancing economic development, governance, and cross-border collaboration.',
    gradient: 'gradient-gold',
    accent: 'bg-gold-50 text-gold-700',
  },
  {
    icon: GraduationCap,
    title: 'Academics & Researchers',
    roles: ['Professors', 'Think Tank Leaders', 'Research Directors'],
    description: 'Thought leaders and scholars exploring innovation, leadership, sustainability, and governance excellence.',
    gradient: 'gradient-red',
    accent: 'bg-red-50 text-red-600',
  },
  {
    icon: Users2,
    title: 'Industry Changemakers',
    roles: ['ESG Directors', 'Sustainability Officers', 'Innovation Leads'],
    description: 'Professionals driving transformative change and purpose-driven business models.',
    gradient: 'gradient-gold',
    accent: 'bg-gold-50 text-gold-700',
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
      staggerChildren: 0.1,
      delayChildren: 0.15,
    }
  }
} as const

const scaleIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
  },
} as const

export default function WhoAttend() {
  const prefersReducedMotion = useReducedMotion()
  
  const containerVariants = prefersReducedMotion ? { hidden: {}, visible: {} } : staggerContainer
  const fadeVariants = prefersReducedMotion ? { hidden: {}, visible: {} } : fadeInUp
  const scaleVariants = prefersReducedMotion ? { hidden: {}, visible: {} } : scaleIn

  return (
    <section id="who-attend" className="relative py-24 lg:py-32 bg-white">
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
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold-100 text-gold-700 rounded-full text-sm font-semibold tracking-wide uppercase">
              <Users2 className="w-4 h-4" />
              Exclusive Community
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-6">
            Who Should Attend
          </h2>
          
          <p className="text-lg lg:text-xl text-slate max-w-3xl mx-auto leading-relaxed">
            Join an exclusive community of global decision-makers and visionaries driving 
            business transformation, sustainability, and innovation.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 lg:mb-20"
        >
          {[
            { number: '300+', label: 'Global Leaders' },
            { number: '50+', label: 'Countries' },
            { number: '20+', label: 'Industries' },
            { number: '5', label: 'Days of Impact' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeVariants}
              className="text-center p-6 bg-gradient-to-br from-gold-50 to-red-50 rounded-2xl border border-gold-200/50"
            >
              <div className="text-4xl lg:text-5xl font-heading font-bold text-red-600 mb-2">
                {stat.number}
              </div>
              <div className="text-slate font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Attendee Profiles Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {ATTENDEE_PROFILES.map((profile, index) => (
            <motion.div
              key={index}
              variants={fadeVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-light/30 relative overflow-hidden"
            >
              {/* Decorative gradient background */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${profile.gradient === 'gradient-red' ? 'bg-gradient-red' : 'bg-gradient-gold'} opacity-5 rounded-bl-full transition-opacity duration-300 group-hover:opacity-10`} />
              
              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className={`inline-flex p-4 rounded-2xl ${profile.gradient === 'gradient-red' ? 'bg-gradient-red' : 'bg-gradient-gold'} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <profile.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-heading font-bold text-charcoal mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {profile.title}
                </h3>

                {/* Roles */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {profile.roles.map((role, idx) => (
                    <span
                      key={idx}
                      className={`inline-block px-3 py-1 ${profile.accent} rounded-full text-xs font-semibold`}
                    >
                      {role}
                    </span>
                  ))}
                </div>

                <p className="text-slate text-sm leading-relaxed">
                  {profile.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1.5 ${profile.gradient === 'gradient-red' ? 'bg-gradient-red' : 'bg-gradient-gold'} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeVariants}
          className="mt-16 lg:mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-charcoal via-charcoal to-slate rounded-3xl p-10 lg:p-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-gold-400 rounded-full filter blur-3xl" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-400 rounded-full filter blur-3xl" />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                Are You a Leader Ready to Make an Impact?
              </h3>
              <p className="text-gray-light text-lg mb-8 max-w-2xl mx-auto">
                Join the global conversation on purpose-driven business and sustainable leadership. 
                Your seat at the table awaits.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="#register"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-red text-white font-heading font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300"
                >
                  Register Now
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 font-heading font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  Contact Us
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

