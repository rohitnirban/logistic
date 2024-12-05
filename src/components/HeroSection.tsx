'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';

export default function HeroSection() {
  return (
    <section 
      className="relative bg-cover bg-center h-screen" 
      style={{ backgroundImage: `url('https://mehtatransportcorporations.com/wp-content/uploads/2023/11/Blog-EasyHaul-Modes-of-Transport-Title-1.png')` }} // Replace with your actual image URL
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full mx-10">
        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold"
        >
          Revolutionizing Fleet Safety with AI & IoT
        </motion.h1>

        {/* Brief Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-xl"
        >
          DriveSense leverages cutting-edge AI and IoT to enhance fleet safety, improve efficiency, and reduce operational risks.
        </motion.p>

        {/* CTA Buttons */}
        <div className="mt-6 space-x-4 flex">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button variant="secondary">Get Started</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
