'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react'
import { motion } from 'framer-motion'
import { PenToolIcon as Tool, Cpu, BarChart2, Smartphone, Car, Server, Users } from 'lucide-react'

const diagramSteps = [
    { id: 'vehicle', icon: Car, label: 'Vehicle' },
    { id: 'server', icon: Server, label: 'DriveSense Server' },
    { id: 'app', icon: Smartphone, label: 'Mobile App' },
    { id: 'users', icon: Users, label: 'Fleet Managers' },
]

const steps = [
    {
        title: "Installation",
        description: "The DriveSense device is installed in your vehicles, connecting to the vehicle's systems.",
        icon: Tool,
    },
    {
        title: "Data Collection",
        description: "Sensors, GPS, and GSM modules collect real-time data on vehicle performance and driver behavior.",
        icon: Cpu,
    },
    {
        title: "AI Analysis",
        description: "Our advanced AI and IoT algorithms analyze the collected data in real-time.",
        icon: BarChart2,
    },
    {
        title: "Insights Delivery",
        description: "Actionable insights are delivered via our intuitive dashboard or mobile app.",
        icon: Smartphone,
    },
]

export default function CaseStudiesPage() {


    const [activeStep, setActiveStep] = useState(0)


    const [activeSteps, setActiveSteps] = useState<string | null>(null)

    const handleStepHover = (stepId: string) => {
        setActiveSteps(stepId)
    }

    const handleStepLeave = () => {
        setActiveSteps(null)
    }
    return (
        <>
            <Header />
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-75"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6">
                        How DriveSense Works
                    </h1>
                    <p className="text-xl text-gray-200 text-center max-w-3xl mx-auto">
                        Discover the innovative technology behind our fleet management solution and how it transforms your operations
                    </p>
                </div>
            </section>

            <section className="p-20 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">The DriveSense Process</h2>
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`flex items-start space-x-6 cursor-pointer transition-all duration-300 p-6 rounded-lg shadow-lg ${activeStep === index ? 'bg-blue-100 dark:bg-blue-600 transform scale-105' : 'bg-gray-100 dark:bg-gray-700'}`}
                                    onClick={() => setActiveStep(index)}
                                >
                                    <div className={`p-4 rounded-full ${activeStep === index ? 'bg-blue-500 text-white' : 'bg-gray-300 dark:bg-gray-600'}`}>
                                        <step.icon className="w-8 h-8" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{step.title}</h3>
                                        <p className="text-lg text-gray-600 dark:text-gray-300">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="relative h-full">
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center p-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                key={activeStep}
                            >
                                <div className="text-center bg-blue-500 text-white p-8 rounded-lg shadow-lg">
                                    <h3 className="text-3xl font-semibold mb-4">{steps[activeStep].title}</h3>
                                    <p className="text-lg">{steps[activeStep].description}</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Data Flow Diagram</h2>
                    <div className="relative max-w-4xl mx-auto">
                        <svg className="w-full" viewBox="0 0 800 200">
                            <defs>
                                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="#4299e1" />
                                </marker>
                            </defs>
                            <line x1="100" y1="100" x2="300" y2="100" stroke="#4299e1" strokeWidth="2" markerEnd="url(#arrowhead)" />
                            <line x1="500" y1="100" x2="700" y2="100" stroke="#4299e1" strokeWidth="2" markerEnd="url(#arrowhead)" />
                            <line x1="400" y1="120" x2="400" y2="180" stroke="#4299e1" strokeWidth="2" markerEnd="url(#arrowhead)" />
                        </svg>
                        {diagramSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                                style={{
                                    left: `${(index / (diagramSteps.length - 1)) * 100}%`,
                                    top: index === diagramSteps.length - 1 ? '90%' : '50%',
                                }}
                                onMouseEnter={() => handleStepHover(step.id)}
                                onMouseLeave={handleStepLeave}
                                whileHover={{ scale: 1.1 }}
                            >
                                <div className={`p-4 rounded-full ${activeSteps === step.id ? 'bg-blue-500 text-white' : 'bg-white dark:bg-gray-800'} shadow-lg`}>
                                    <step.icon className="w-8 h-8" />
                                </div>
                                <span className="mt-2 text-sm font-medium">{step.label}</span>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            {activeSteps === 'vehicle'
                                ? "DriveSense devices in vehicles collect real-time data on performance and driver behavior."
                                : activeSteps === 'server'
                                    ? "Our servers process the collected data using advanced AI and IoT algorithms."
                                    : activeSteps === 'app'
                                        ? "Insights and alerts are delivered to the DriveSense mobile app for easy access."
                                        : activeSteps === 'users'
                                            ? "Fleet managers use the insights to make data-driven decisions and improve operations."
                                            : "Hover over each step to learn more about the DriveSense data flow."}
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
