'use client'

import { motion } from 'framer-motion';

export default function ProblemVisionSection() {
  return (
    <section className="py-16 px-10 text-center bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-4"
      >
        The Logistics Crisis We’re Solving
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 text-lg text-gray-700"
      >
        High logistics costs, wastage of perishables, and inefficiencies plague India’s supply chain. DriveSense is on a mission to solve this crisis.
      </motion.p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: '40% of perishables wasted',
            description: 'Food wastage causing $14B in losses annually',
          },
          {
            title: '$14B losses',
            description: 'Due to inefficiencies in the logistics system',
          },
          {
            title: 'High transport costs',
            description: 'Logistics costs are one of the highest in the world',
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
