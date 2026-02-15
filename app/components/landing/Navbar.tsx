'use client';

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { GetStartedButtonPC } from '../ui/GetStartedButton';
import Link from 'next/link';
import { Barlow } from 'next/font/google';

const barlow = Barlow({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    const navLinks = [
        { href: '/portal', label: 'Portal' },
        { href: '/jobs', label: 'Careers' },
        { href: '/pricing', label: 'Pricing' },
        { href: '/about', label: 'About' }
    ];

    return (
        <div className={barlow.className}>
            {/* Navbar Wrapper */}
            <div
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
                    scrolled
                        ? 'px-3 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4'
                        : 'px-4 py-3 sm:px-8 sm:py-6 lg:px-8 lg:py-6'
                }`}
            >
                <nav
                    className={`w-full mx-auto backdrop-blur-2xl border transition-all duration-1000 ease-out shadow-lg ${
                        scrolled
                            ? 'max-w-6xl rounded-full border-white/15 shadow-black/50 bg-black/40' // Changed to rounded-full
                            : 'max-w-7xl rounded-none sm:rounded-xl lg:rounded-2xl border-white/8 shadow-black/20 bg-black/30'
                    }`}
                >
                    <div
                        className={`flex items-center justify-between transition-all duration-500 ${
                            scrolled
                                ? 'px-4 py-3 sm:px-6 sm:py-3.5 lg:px-8 lg:py-4'
                                : 'px-5 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6'
                        }`}
                    >
                        {/* Logo */}
                        <div
                            className={`font-black bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent transition-all duration-500 whitespace-nowrap ${
                                scrolled
                                    ? 'text-lg sm:text-xl lg:text-2xl tracking-tight'
                                    : 'text-xl sm:text-2xl lg:text-3xl tracking-normal'
                            }`}
                        >
                            <Link href="/">Trunal</Link>
                        </div>

                        {/* Desktop Navigation Links */}
                        <ul
                            className={`hidden lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${
                                scrolled ? 'gap-6' : 'gap-8'
                            }`}
                        >
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className={`relative text-white/75 hover:text-white font-medium whitespace-nowrap transition-all duration-300 group ${
                                            scrolled ? 'text-sm' : 'text-base'
                                        }`}
                                    >
                                        {link.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-500 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Desktop CTA Button */}
                        <GetStartedButtonPC
                            href="/login"
                            onClick={() => setMenuOpen(false)}
                        >
                            Get Started
                        </GetStartedButtonPC>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden flex flex-col justify-between w-6 h-5 bg-transparent border-none cursor-pointer p-0 z-50"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        >
                            <span
                                className={`w-full h-0.5 bg-gradient-to-r from-white to-gray-400 rounded-full transition-all duration-300 ${
                                    menuOpen
                                        ? 'rotate-45 translate-y-2'
                                        : 'rotate-0 translate-y-0'
                                }`}
                            ></span>
                            <span
                                className={`w-full h-0.5 bg-gradient-to-r from-white to-gray-400 rounded-full transition-all duration-300 ${
                                    menuOpen ? 'opacity-0' : 'opacity-100'
                                }`}
                            ></span>
                            <span
                                className={`w-full h-0.5 bg-gradient-to-r from-white to-gray-400 rounded-full transition-all duration-300 ${
                                    menuOpen
                                        ? '-rotate-45 -translate-y-2'
                                        : 'rotate-0 translate-y-0'
                                }`}
                            ></span>
                        </button>

                        {/* Mobile CTA Button */}
                        <button
                            className={`lg:hidden bg-gradient-to-br from-white to-gray-300 text-black font-semibold rounded-lg shadow-md shadow-white/20 transition-all duration-300 whitespace-nowrap ${
                                menuOpen ? 'hidden' : 'block'
                            } ${scrolled ? 'px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm' : 'px-4 py-2 text-sm sm:px-5 sm:py-2.5'}`}
                            onClick={() => router.push('/login')}
                        >
                            Get Started
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 lg:hidden flex flex-col justify-center items-center transition-opacity duration-300 ${
                    menuOpen
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setMenuOpen(false)}
            >
                <ul className="flex flex-col gap-8 items-center px-10 py-10">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-white/85 hover:text-white hover:bg-white/5 text-2xl sm:text-3xl font-medium text-center px-6 py-2 rounded-lg transition-all duration-300"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
