'use client'

import { motion } from 'framer-motion';

export default function SolutionsSection() {
  return (
    <section className="py-16 px-10 bg-gray-100">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center"
      >
        How BharatTrans is Changing the Game
      </motion.h2>
      <div className="mt-10 grid grid-cols-3 gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <img src="1.jpg" alt="AI Route Optimization" className='rounded-xl'/>
          <h3 className="mt-4 text-xl font-bold">AI-Driven Route Optimization</h3>
          <p>AI-powered multi-modal transport solutions for efficiency.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <img src="2.jpg" alt="Mobile Cold Storage" className='rounded-xl'/>
          <h3 className="mt-4 text-xl font-bold">Mobile Cold Storage</h3>
          <p>Solar-powered cold storage units reducing wastage.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <img src="3.jpg" alt="Real-Time Tracking" className='rounded-xl'/>
          <h3 className="mt-4 text-xl font-bold">Real-Time Data Tracking</h3>
          <p>GPS and IoT-enabled monitoring for real-time supply chain insights.</p>
        </motion.div>
      </div>
    </section>
  );
}
