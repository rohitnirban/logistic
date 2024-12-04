'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Card } from '@/components/ui/card'; // Assuming you're using a Card component from ShadCN
import { Button } from '@/components/ui/button'; // ShadCN Button component

// Corrected image paths
const farmerImage = '/c1.jpg';
const smeDeliveryImage = '/c3.jpg';
const cngTruckImage = '/c2.jpg';

const caseStudies = [
    {
        title: "Empowering Farmers with Cold Storage and AI-Powered Logistics",
        problem: "Farmers losing 40% of their produce to wastage.",
        solution: "Implementing mobile cold storage and optimizing transport.",
        results: "50% reduction in wastage, increased farmer income by 20%",
        image: farmerImage,
    },
    {
        title: "Boosting Business Efficiency with DriveSense",
        problem: "High logistics costs hurting SME profits.",
        solution: "Using AI-driven multi-modal transport.",
        results: "30% reduction in logistics costs, 15% decrease in delivery time.",
        image: smeDeliveryImage,
    },
    {
        title: "Greening India’s Logistics Sector",
        problem: "High diesel usage, heavy emissions.",
        solution: "Introducing CNG-powered trucks.",
        results: "40% savings on fuel costs, 25% reduction in emissions.",
        image: cngTruckImage,
    },
    {
        title: "Empowering Farmers with Cold Storage and AI-Powered Logistics",
        problem: "Farmers losing 40% of their produce to wastage.",
        solution: "Implementing mobile cold storage and optimizing transport.",
        results: "50% reduction in wastage, increased farmer income by 20%",
        image: farmerImage,
    },
];

export default function CaseStudiesPage() {
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
                    Real-Life Examples of DriveSense in Action
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    width={400}
                                    height={400}
                                    className="w-full h-96 object-cover rounded-t-md"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                                    <p className="text-md font-medium mb-1"><strong>Problem:</strong> {study.problem}</p>
                                    <p className="text-md font-medium mb-1"><strong>Solution:</strong> {study.solution}</p>
                                    <p className="text-md font-medium mb-1"><strong>Results:</strong> {study.results}</p>
                                    <Button className="mt-4">Read More</Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}
