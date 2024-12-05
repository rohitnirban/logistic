'use client'

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="py-10 px-10 bg-black text-white">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row justify-around items-start md:items-center"
            >
                {/* Quick Links Section */}
                <div className="mb-8 md:mb-0">
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
                        <li><Link href="/about" className="hover:text-blue-400 transition">About Us</Link></li>
                        <li><Link href="/features" className="hover:text-blue-400 transition">Features</Link></li>
                        <li><Link href="/how-it-works" className="hover:text-blue-400 transition">How it works</Link></li>
                        <li><Link href="/pricing" className="hover:text-blue-400 transition">Pricing</Link></li>
                    </ul>
                </div>

                {/* Follow Us Section */}
                {/* <div className="mb-8 md:mb-0">
                    <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition">
                            <Facebook className="h-6 w-6" />
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition">
                            <TwitterLogoIcon className="h-6 w-6" />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition">
                            <LinkedInLogoIcon className="h-6 w-6" />
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition">
                            <InstagramLogoIcon className="h-6 w-6" />
                        </a>
                    </div>
                </div> */}

                {/* Contact Info Section */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                    <p>Email: <a href="mailto:info@DriveSense.com" className="hover:text-blue-400 transition">as.ashitrai@gmail.com</a></p>
                    <p>Phone: <a href="tel:+91XXXXXXXXXX" className="hover:text-blue-400 transition">+91-8090144807</a></p>
                    <p>Address: Chandigarh University, Mohali, Punjab</p>
                    <form className="mt-4 flex">
                        <input
                            type="email"
                            placeholder="Subscribe to our newsletter"
                            className="p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Button className="ml-2">Subscribe</Button>
                    </form>
                </div>
            </motion.div>
            <div className="mt-8 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} DriveSense. All rights reserved.</p>
            </div>
        </footer>
    );
}
