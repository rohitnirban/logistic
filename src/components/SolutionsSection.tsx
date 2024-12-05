'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Brain, Link2 } from 'lucide-react'; // Using Lucide icons

export default function WhyChooseDriveSense() {
  const features = [
    {
      icon: <ShieldCheck className="text-4xl text-blue-500" />,
      title: 'Tamper-Proof Hardware',
      description:
        'Our rugged and tamper-resistant devices ensure uninterrupted data collection, providing you with reliable insights under any conditions.',
    },
    {
      icon: <Brain className="text-4xl text-green-500" />,
      title: 'AI-Driven Insights',
      description:
        'DriveSense leverages advanced AI algorithms to deliver predictive analytics, optimize fleet performance, and reduce operational costs.',
    },
    {
      icon: <Link2 className="text-4xl text-purple-500" />,
      title: 'ULIP API Integration',
      description:
        'Seamlessly integrates with India’s Unified Logistics Interface Platform (ULIP) for enhanced connectivity and streamlined operations.',
    },
  ];

  return (
    <section className="py-16 px-10 bg-gray-100">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-extrabold text-center text-gray-800 mb-6"
      >
        Why Choose DriveSense?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-center text-gray-600 mb-12"
      >
        Discover what makes DriveSense the trusted choice for businesses seeking smarter, safer, and more efficient fleet solutions.
      </motion.p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 text-center"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
