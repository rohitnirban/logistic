'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Monitor, Activity, BarChart } from 'lucide-react'; // Importing icons from lucide-react

export default function KeyFeaturesSection() {
  const features = [
    {
      icon: <Monitor className="text-4xl text-blue-500" />,
      title: 'Real-Time Monitoring',
      description:
        'Track your fleet’s location, speed, and performance in real-time with advanced GPS and IoT sensors. Monitor critical metrics like fuel usage, engine health, and maintenance schedules to stay ahead of potential issues.',
    },
    {
      icon: <Activity className="text-4xl text-green-500" />,
      title: 'Driver Behavior Analytics',
      description:
        'Gain insights into driver performance with detailed analytics on speed, braking patterns, and idle time. Identify unsafe practices, reduce accidents, and reward safe driving behaviors to foster a safety-first culture in your fleet.',
    },
    {
      icon: <BarChart className="text-4xl text-purple-500" />,
      title: 'Actionable Insights',
      description:
        'Utilize AI-powered data analysis to identify patterns, predict maintenance needs, and optimize routes. Our insights help you make informed decisions to reduce costs, improve efficiency, and achieve sustainable fleet operations.',
    },
  ];

  return (
    <section className="py-16 px-10 text-center bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-4"
      >
        Key Features of DriveSense
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 text-lg text-gray-700"
      >
        Discover the powerful features of DriveSense that redefine fleet safety, efficiency, and performance through cutting-edge technology.
      </motion.p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-10">
        <Button>
          Learn More About Features
        </Button>
      </div>
    </section>
  );
}
