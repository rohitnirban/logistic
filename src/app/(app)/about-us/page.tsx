'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutUsPage() {
    return (
        <>
            <Header />
            <section className="py-16 px-10 bg-gray-50 text-gray-800">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center mb-10"
                >
                    About Us
                </motion.h2>

                {/* Our Vision */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-12"
                >
                    <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                    <p className="text-lg leading-relaxed">
                        At DriveSense, we envision a revolution in the Indian logistics sector,
                        where technology seamlessly integrates with sustainability and inclusivity.
                        Our goal is to create a future where logistics operations are efficient,
                        reliable, and accessible to everyone, empowering businesses and communities alike.
                    </p>
                </motion.div>

                {/* Our Mission */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mb-12"
                >
                    <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                    <ul className="list-disc list-inside text-lg leading-relaxed">
                        <li>Utilize cutting-edge technology to optimize logistics processes.</li>
                        <li>Promote sustainability through eco-friendly practices.</li>
                        <li>Ensure inclusivity by providing equal opportunities for all stakeholders.</li>
                    </ul>
                </motion.div>

                {/* Why DriveSense? */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mb-12"
                >
                    <h3 className="text-2xl font-semibold mb-4">Why DriveSense?</h3>
                    <ul className="list-disc list-inside text-lg leading-relaxed">
                        <li>Innovative technology solutions tailored for the Indian logistics landscape.</li>
                        <li>Commitment to reducing operational costs and improving efficiency.</li>
                        <li>Collaborative partnerships with key industry stakeholders.</li>
                    </ul>
                </motion.div>

                {/* Our Team */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mb-12"
                >
                    <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {['John Doe', 'Jane Smith', 'Alice Johnson'].map((name, index) => (
                            <div key={index} className="text-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                                    className="mb-2"
                                >
                                    <Image
                                        src="https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-93124.jpg"
                                        alt={`Team Member ${index + 1}`}
                                        width={150}
                                        height={150}
                                        className="rounded-full mx-auto"
                                    />
                                </motion.div>
                                <h4 className="font-bold">{name}</h4>
                                <p className="text-gray-600">
                                    {index === 0 && 'CEO - 15 years of experience in logistics management.'}
                                    {index === 1 && 'CTO - Expert in technology integration for logistics.'}
                                    {index === 2 && 'COO - Focused on operational excellence and sustainability.'}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Partners */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="mb-12"
                >
                    <h3 className="text-2xl font-semibold mb-4">Our Partners</h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        {['Transport Network', 'Technology Provider', 'Government Body'].map((partner, index) => (
                            <div key={index} className="text-center">
                                <Image
                                    src="https://www.apllogistics.com/wp-content/uploads/2019/03/APL_Logo.png"
                                    alt={`Partner ${index + 1}`}
                                    width={100}
                                    height={100}
                                    className="mx-auto"
                                />
                                <p>{partner}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Career Opportunities */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                >
                    <h3 className="text-2xl font-semibold mb-4">Career Opportunities</h3>
                    <p className="text-lg leading-relaxed mb-4">
                        We are always looking for passionate and skilled professionals to join our team.
                        If you&apos;re ready to make a difference in the logistics industry, check out our job listings below.
                    </p>
                    <Button className="mt-2">View Job Openings</Button>
                </motion.div>
            </section>
            <Footer />
        </>
    );
}
