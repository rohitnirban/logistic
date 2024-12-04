'use client'

import { motion } from 'framer-motion';

export default function ImpactSection() {

  return (
    <section className="py-16 px-10 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-10"
      >
        DriveSense in Action: Tangible Results for Farmers, Businesses, and the Environment
      </motion.h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {[
          {
            title: '50% reduction in wastage',
            description: 'Empowering farmers with cold storage solutions.',
          },
          {
            title: '30% lower costs',
            description: 'Optimized routes and lower fuel consumption.',
          },
          {
            title: '15% lower emissions',
            description: 'Optimized routes and lower fuel consumption.',
          },
          {
            title: '5,000+ jobs created',
            description: 'Creating sustainable job opportunities.',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
