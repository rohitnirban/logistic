'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button'; // ShadCN Button component
import { Card } from '@/components/ui/card'; // ShadCN Card component

// Corrected image paths
const aiImage = '/s1.jpg';
const coldStorageImage = '/s2.jpg';
const gpsImage = '/s3.jpg';
const warehousingImage = '/s4.jpg';

const solutions = [
    {
        title: "AI-Driven Multi-Modal Transport",
        image: aiImage,
        details: "AI and data science optimize logistics routes, ensuring efficiency and reduced costs.",
        impactMetrics: "Projected savings of up to 30% in logistics costs and 20% reduction in carbon emissions.",
    },
    {
        title: "Mobile Cold Storage",
        image: coldStorageImage,
        details: "Solar-powered cold storage units are transforming the agricultural supply chain.",
        realLifeCase: "Farmers benefitting from reduced wastage of up to 50%.",
    },
    {
        title: "Real-Time GPS & IoT Monitoring",
        image: gpsImage,
        details: "Real-time tracking with GPS and IoT devices enhances transparency and reduces delays.",
    },
    {
        title: "Shared Regional Warehousing",
        image: warehousingImage,
        details: "Dynamic demand forecasting and shared storage reduce costs significantly.",
    },
];

export default function SolutionsPage() {
    return (
        <>
            <Header />
            <section className="py-16 px-4 md:px-10 bg-gray-50 text-gray-800">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center mb-10"
                >
                    How BharatTrans Tackles Inefficiencies in the Indian Logistics Sector
                </motion.h2>

                <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
                    BharatTrans is dedicated to revolutionizing the logistics landscape by implementing innovative technologies 
                    and solutions that drive efficiency, reduce costs, and minimize environmental impact.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <Image
                                    src={solution.image}
                                    alt={solution.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-48 object-cover rounded-t-md"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                                    <p className="text-md mb-2">{solution.details}</p>
                                    {solution.impactMetrics && (
                                        <p className="text-md font-medium mb-1">
                                            <strong>Impact Metrics:</strong> {solution.impactMetrics}
                                        </p>
                                    )}
                                    {solution.realLifeCase && (
                                        <p className="text-md font-medium mb-1">
                                            <strong>Real-Life Case:</strong> {solution.realLifeCase}
                                        </p>
                                    )}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
                        Talk to a Logistics Expert
                    </Button>
                </div>
            </section>
            <Footer />
        </>
    );
}
