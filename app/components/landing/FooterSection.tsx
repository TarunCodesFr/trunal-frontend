'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, ExternalLink, X } from 'lucide-react';
import Link from 'next/link';
import { Barlow } from 'next/font/google';

const barlow = Barlow({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']
});

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        services: [
            { name: 'Web Development', href: '/services/web' },
            { name: 'Mobile Apps', href: '/services/mobile' },
            { name: 'Cloud Solutions', href: '/services/cloud' },
            { name: 'Consulting', href: '/services/consulting' }
        ],
        company: [
            { name: 'About Us', href: '/about' },
            { name: 'Portal', href: '/portal' },
            { name: 'Careers', href: '/careers' },
            { name: 'Contact', href: '/contact' }
        ],
        resources: [
            { name: 'Blog', href: '/blog' },
            { name: 'Case Studies', href: '/case-studies' },
            { name: 'Documentation', href: '/docs' }
        ],
        legal: [
            { name: 'Refund & Cancellation Policy', href: '/terms' },
            { name: 'Terms of Service', href: '/terms' }
        ]
    };

    const socialLinks = [
        {
            name: 'GitHub',
            icon: Github,
            href: 'https://github.com/Trunal-Inc',
            color: 'hover:text-white'
        },
        {
            name: 'X',
            icon: Twitter,
            href: 'https://x.com/TarunCodesFr',
            color: 'hover:text-cyan-400'
        },
        {
            name: 'Email',
            icon: Mail,
            href: 'mailto:hello@tarun@trunal.in',
            color: 'hover:text-violet-400'
        }
    ];

    const certifications = [
        { name: 'ISO 27001', icon: '🔒' },
        { name: 'SOC 2', icon: '🛡️' },
        { name: 'GDPR', icon: '⚖️' }
    ];

    return (
        <div className={barlow.className}>
            <footer className="relative bg-black text-white border-t border-white/10 overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-600/20" />
                </div>

                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                    <div
                        className="h-full w-full"
                        style={{
                            backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
                            backgroundSize: '80px 80px'
                        }}
                    />
                </div>

                <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
                    {/* Main Footer Content */}
                    <div className="py-16 lg:py-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                            {/* Brand Column */}
                            <div className="lg:col-span-2">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {/* Logo */}
                                    <Link
                                        href="/"
                                        className="inline-block mb-6 group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="font-black bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent transition-all duration-500 whitespace-nowrap text-2xl">
                                                Trunal
                                            </span>
                                        </div>
                                    </Link>

                                    {/* Description */}
                                    <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
                                        We architect, develop, and deploy
                                        enterprise-grade Websites with precision
                                        and speed.
                                    </p>

                                    {/* Social Links */}
                                    <div className="flex items-center gap-4">
                                        {socialLinks.map((social) => {
                                            const Icon = social.icon;
                                            return (
                                                <motion.a
                                                    key={social.name}
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 ${social.color} hover:border-white/20 transition-all duration-300 group`}
                                                    whileHover={{
                                                        scale: 1.1,
                                                        y: -2
                                                    }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <Icon size={18} />
                                                </motion.a>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Services Column */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
                                    Services
                                </h3>
                                <ul className="space-y-3">
                                    {footerLinks.services.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm group inline-flex items-center gap-1"
                                            >
                                                {link.name}
                                                <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                                                    →
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Company Column */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
                                    Company
                                </h3>
                                <ul className="space-y-3">
                                    {footerLinks.company.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm group inline-flex items-center gap-1"
                                            >
                                                {link.name}
                                                <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                                                    →
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Resources Column */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
                                    Resources
                                </h3>
                                <ul className="space-y-3">
                                    {footerLinks.resources.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm group inline-flex items-center gap-1"
                                            >
                                                {link.name}
                                                <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                                                    →
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                    <li className="pt-4">
                                        <h4 className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">
                                            Legal
                                        </h4>
                                        <ul className="space-y-3">
                                            {footerLinks.legal.map((link) => (
                                                <li key={link.name}>
                                                    <Link
                                                        href={link.href}
                                                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm group inline-flex items-center gap-1"
                                                    >
                                                        {link.name}
                                                        <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                                                            →
                                                        </span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="border-t border-white/10 py-8"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            {/* Copyright */}
                            <div className="text-sm text-gray-500">
                                © {currentYear} Trunal Inc. All rights reserved.
                            </div>
                        </div>
                    </motion.div>

                    {/* Optional: Newsletter Section - Uncomment if needed */}
                    {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-white/10 py-12"
        >
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-6">
              Get the latest news and updates delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-violet-400 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-lg text-sm font-medium text-black hover:shadow-lg hover:shadow-violet-400/20 transition-shadow"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div> */}
                </div>
            </footer>
        </div>
    );
};

export default Footer;
