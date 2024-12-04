'use client'

import { motion } from 'framer-motion';
import { Button } from './ui/button';

export default function HeroSection() {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url('https://mehtatransportcorporations.com/wp-content/uploads/2023/11/Blog-EasyHaul-Modes-of-Transport-Title-1.png')` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full mx-10">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold"
        >
          Building India’s Future: AI-Powered Logistics for a Greener, Efficient, and Inclusive Economy
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-xl"
        >
          Reducing Wastage, Cutting Costs, Empowering Farmers, SMEs, and Creating Sustainable Jobs
        </motion.p>
        <div className="mt-6 space-x-4 flex ">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button>Learn More About Our Solutions</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button variant="secondary">Get Started with BharatTrans</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
