'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Dummy data for Recharts
const economicData = [
    { name: 'Savings', value: 50 },
    { name: 'Farmer Income', value: 80 },
    { name: 'SME Profits', value: 65 },
];

const socialData = [
    { name: 'Jobs Created', value: 3000 },
    { name: 'Women Employed', value: 45 },
    { name: 'Rural Workforce Upliftment', value: 60 },
];

const environmentalData = [
    { name: 'Carbon Reduction', value: 70 },
    { name: 'Water Saved', value: 20 },
    { name: 'Energy Efficiency', value: 10 },
];

// Colors for Pie Charts
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export default function ImpactPage() {
    return (
        <>
            <Header />
            <section className="py-16 px-4 md:px-10 bg-gradient-to-b from-green-50 to-white text-gray-800">
                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center mb-6 text-green-800"
                >
                    Our Impact on India’s Economy, Society, and Environment
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg text-center text-gray-600 mb-12"
                >
                    Here’s what BharatTrans has achieved so far, and our future goals.
                </motion.p>

                {/* Economic Impact */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="max-w-4xl mx-auto mb-12"
                >
                    <h3 className="text-2xl font-semibold mb-4 text-green-800">Economic Impact</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={economicData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </motion.div>

                {/* Environmental Impact */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="max-w-4xl mx-auto mb-12"
                >
                    <h3 className="text-2xl font-semibold mb-4 text-green-800">Environmental Impact</h3>
                    {/* Placeholder for Interactive Map */}
                    {/* <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center mb-8">
                        <p className="text-lg text-gray-600">Interactive Map Coming Soon</p>
                    </div> */}
                    {/* Environmental Data */}
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie data={environmentalData} cx="50%" cy="50%" labelLine={false} outerRadius={120} fill="#8884d8" dataKey="value">
                                {environmentalData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </motion.div>

                {/* Social Impact */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h3 className="text-2xl font-semibold mb-4 text-green-800">Social Impact</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={socialData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </motion.div>
            </section>
            <Footer />
        </>
    );
}
