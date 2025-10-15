'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Plane, Briefcase, Award, Users, MapPin } from 'lucide-react';

const EASE = [0.25, 0.1, 0.25, 1] as const;

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

const AGENDA = [
  {
    day: 'Day 1',
    date: 'Monday, December 15, 2025',
    title: 'International Delegates Arrival & Welcome Cocktail Reception',
    description:
      'Arrival of international participants and invited guests. Evening cocktail reception for informal networking and introductions among delegates.',
    image: '/images/day1.jpg',
    icon: Plane,
  },
  {
    day: 'Day 2',
    date: 'Tuesday, December 16, 2025',
    title: 'Investments & Business Tourism – Abu Dhabi Experience',
    description:
      'Guided business tourism visit to iconic locations and innovation hubs in Abu Dhabi. Opportunities for networking, partnerships, and investment exploration.',
    image: '/images/UAE.jpg',
    icon: MapPin,
  },
  {
    day: 'Day 3',
    date: 'Wednesday, December 17, 2025',
    title: 'The Boardroom Masterclass – Leadership at the Top',
    description:
      'Intensive executive learning session for Board Chairs, CEOs, and senior leaders. Expert-led discussions on governance, leadership, and strategic decision-making.',
    image: '/images/innovation.jpg',
    icon: Briefcase,
  },
  {
    day: 'Day 4',
    date: 'Thursday, December 18, 2025',
    title:
      'Summits & Awards Ceremony & Gala Dinner – Celebrating Global Excellence',
    description:
      'A grand evening honoring outstanding leaders, companies, and institutions. Includes red carpet arrivals, fine dining, live entertainment, and exclusive networking.',
    image: '/images/RadCommGroupAwards2025-3D(187of455).jpg',
    icon: Award,
  },
  {
    day: 'Day 5',
    date: 'Friday, December 19, 2025',
    title: 'Investments & Business Tourism / Closing Ceremony',
    description:
      'Final business tourism activities and cultural exploration. Official closing ceremony and delegate departure.',
    image: '/images/crowd-participating-at-event.jpg',
    icon: Users,
  },
];

export default function CongressAgenda() {
  return (
      <section
        id="agenda"
        className="lg:max-w-[1440px] mx-auto px-10 relative py-24 lg:py-32 overflow-hidden"
      >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeLeft}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-charcoal relative inline-block">
            Congress Agenda
            <motion.span
              className="absolute left-0 -bottom-2 h-[3px] w-0 bg-gradient-to-r from-red-600 to-red-400"
              whileInView={{ width: '100%' }}
              transition={{ duration: 1.2, ease: EASE }}
            />
          </h2>
          <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
            A five-day journey combining leadership, innovation, and global
            collaboration, designed to empower today’s and tomorrow’s business
            leaders.
          </p>
        </motion.div>

        <div className="space-y-24">
          {AGENDA.map((item, index) => {
            const fadeAnim = index % 2 === 0 ? fadeLeft : fadeRight;
            const reverseLayout = index % 2 !== 0;

            return (
              <div
                key={item.day}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  reverseLayout ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeAnim}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-600 text-white rounded-full shadow-md">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-red-600">
                        {item.day}
                      </h3>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                  </div>

                  <h4 className="text-2xl lg:text-3xl font-semibold text-charcoal leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={reverseLayout ? fadeLeft : fadeRight}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group"
                >
                  <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.05 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: EASE }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-400 to-red-600"
      />
    </section>
  );
}
