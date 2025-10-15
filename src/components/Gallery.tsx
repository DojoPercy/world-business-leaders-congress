'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

// Gallery images - using existing images from the project
const GALLERY_IMAGES = [
  {
    id: 1,
    src: '/images/RadCommGroupAwards2025-3D(78of455).jpg',
    alt: 'Executive networking session at World Business Leaders Congress',
    title: 'Executive Networking',
    description: 'Elite networking experiences bringing together global leaders'
  },
  {
    id: 2,
    src: '/images/RadCommGroupAwards2025-3D(187of455).jpg',
    alt: 'Leadership dialogue session with industry experts',
    title: 'Leadership Dialogues',
    description: 'Inspiring leadership conversations shaping the future of business'
  },
  {
    id: 3,
    src: '/images/RadCommGroupAwards2025-3D(359of455).jpg',
    alt: 'Awards ceremony celebrating excellence and innovation',
    title: 'Awards Ceremony',
    description: 'Celebrating excellence and innovation across industries'
  },
  {
    id: 4,
    src: '/images/RadCommGroupAwards2025-3D(58of455).jpg',
    alt: 'Global business leaders in strategic discussion',
    title: 'Strategic Discussions',
    description: 'Strategic conversations driving sustainable transformation'
  },
  {
    id: 5,
    src: '/images/RadCommGroupAwards2025-3D(68of455).jpg',
    alt: 'Executive recognition ceremony honoring outstanding leaders',
    title: 'Executive Recognition',
    description: 'Honoring outstanding leaders and visionary executives'
  },
  {
    id: 6,
    src: '/images/RadCommGroupAwards2025-3D(93of455).jpg',
    alt: 'Innovation showcase at global leadership event',
    title: 'Innovation Showcase',
    description: 'Showcasing breakthrough innovations and technologies'
  },
  {
    id: 7,
    src: '/images/RadCommGroupAwards2025-3D(138of455).jpg',
    alt: 'Global partnership announcements and collaborations',
    title: 'Global Partnerships',
    description: 'Announcing strategic partnerships and collaborations'
  },
  {
    id: 8,
    src: '/images/RadCommGroupAwards2025-3D(146of455).jpg',
    alt: 'Sustainable business practices discussion panel',
    title: 'Sustainability Focus',
    description: 'Discussing sustainable business practices and ESG integration'
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  },
} as const

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const prefersReducedMotion = useReducedMotion()

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && !isHovered && !prefersReducedMotion) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === GALLERY_IMAGES.length - 1 ? 0 : prevIndex + 1
        )
      }, 4000) // Change slide every 4 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, isHovered, prefersReducedMotion])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? GALLERY_IMAGES.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === GALLERY_IMAGES.length - 1 ? 0 : currentIndex + 1)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-off-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-100 text-gold-700 rounded-full text-sm font-medium mb-6">
            <Play className="w-4 h-4" />
            Event Gallery
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-6">
            Iconic Moments from Global Events
          </h2>
          <p className="text-slate text-lg max-w-3xl mx-auto leading-relaxed">
            Relive iconic moments from previous RADComm Group global events, featuring inspiring leadership dialogues, elite networking experiences, and executive recognition ceremonies celebrating excellence and innovation.
          </p>
        </motion.div>

        {/* Gallery Slider */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative"
        >
          {/* Main Slider Container */}
          <div 
            className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Slides */}
            <div className="relative w-full h-full">
              {GALLERY_IMAGES.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ 
                    opacity: index === currentIndex ? 1 : 0,
                    x: index === currentIndex ? 0 : 100
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative w-full h-full">
                    {/* Image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-charcoal/20 to-charcoal/60" />
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex items-end">
                      <div className="p-8 lg:p-12 text-white">
                        <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-2">
                          {image.title}
                        </h3>
                        <p className="text-gray-light text-lg max-w-2xl">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-8 gap-3 overflow-x-auto pb-2">
            {GALLERY_IMAGES.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-4 ring-gold-400 scale-110' 
                    : 'opacity-60 hover:opacity-80 hover:scale-105'
                }`}
                aria-label={`View ${image.title}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-gold-400/20" />
                )}
              </button>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {GALLERY_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gold-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Coming Soon Notice */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gold-50 text-gold-700 rounded-full text-sm font-medium">
            <Play className="w-4 h-4" />
            Dynamic video showcase coming soon
          </div>
        </motion.div>
      </div>
    </section>
  )
}
