'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const EASE = [0.25, 0.1, 0.25, 1] as const

export default function AboutSection() {
  return (
    <section
      id="about"
      className="max-w-[1440px] mx-auto  relative bg-gradient-to-b from-white via-slate-50 to-gray-100 py-24 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="relative inline-block">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-charcoal relative">
              About the Congress
              <motion.span
                className="absolute left-0 -bottom-2 h-[3px] w-0 bg-gradient-to-r from-red-600 to-red-400"
                whileInView={{ width: '100%' }}
                transition={{ duration: 1.2, ease: EASE }}
              />
            </h2>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
            The World Business Leaders Congress 2025 unites visionary business
            leaders, policymakers, and innovators from across the globe to
            explore the future of leadership, sustainability, and responsible
            capitalism.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
            Held in <span className="font-semibold">Dubai, UAE</span>, from{' '}
            <span className="font-semibold">15th – 19th December 2025</span>,
            the Congress is a premier platform where thought leadership meets
            transformative innovation — inspiring organizations to move beyond
            profit and shape a sustainable future.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: EASE }}
            viewport={{ once: true }}
            className="flex items-center gap-4 pt-4"
          >
            <div className="w-1 h-10 bg-red-600 rounded-full" />
            <span className="text-gray-800 font-medium italic leading-snug">
              “Leaders and executives from multiple continents participated in
              the 2024 edition.”
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          viewport={{ once: true }}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group"
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2, ease: EASE }}
          >
            <Image
              src="/images/a.jpg"
              alt="Leaders discussing global sustainability initiatives"
              fill
              sizes="100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-400 to-red-600"
      />
    </section>
  )
}
