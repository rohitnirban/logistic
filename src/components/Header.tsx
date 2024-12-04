'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-10 bg-white shadow-md">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl font-bold"
      >
        <Link href={'/'}>BharatTrans</Link>
      </motion.div>
      <motion.nav
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-x-6"
      >
        <Link href="/">Home</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/solutions">Solutions</Link>
        <Link href="/impact">Impact</Link>
        <Link href="/case-studies">Case Studies</Link>
        <Link href="/contact-us">Contact Us</Link>
      </motion.nav>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <Button>
          <Link href={'/dashboard/home'}>
          Get Started
          </Link>
        </Button>
      </motion.div>
    </header>
  );
}
