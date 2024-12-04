'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactUsPage() {
    return (
        <>
            <Header />
            <section className="py-16 px-4 md:px-10 bg-gradient-to-b from-blue-50 to-white text-gray-800">
                {/* Page Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center mb-12 text-blue-800"
                >
                    Get in Touch with BharatTrans
                </motion.h2>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-12"
                >
                    <h3 className="text-2xl font-semibold mb-6 text-center text-blue-800">Contact Us</h3>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                rows={4}
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 resize-none"
                                placeholder="Your Message"
                            />
                        </div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                            Send Message
                        </Button>
                    </form>
                </motion.div>

                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h3 className="text-2xl font-semibold mb-6 text-center text-blue-800">Frequently Asked Questions</h3>
                    <Accordion type="single" collapsible className="space-y-4">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-medium">How does BharatTrans work?</AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                                BharatTrans integrates cutting-edge technology and a network of logistics partners to offer efficient, reliable, and scalable logistics solutions across India.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-medium">How can I partner with BharatTrans?</AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                                We are always looking to collaborate with logistics providers, technology partners, and government bodies. Contact us through our partnership page for more details.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg font-medium">What industries does BharatTrans serve?</AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                                BharatTrans serves a wide range of industries, including e-commerce, manufacturing, agriculture, and retail. Our solutions are tailored to meet the needs of businesses of all sizes.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </motion.div>
            </section>
            <Footer />
        </>
    );
}
