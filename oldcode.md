'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Kode_Mono } from 'next/font/google';
import {
ArrowRight,
Code2,
Sparkles,
Zap,
CheckCircle2,
ChevronDown
} from 'lucide-react';
import { div } from 'framer-motion/client';

const kodeMono = Kode_Mono({
subsets: ['latin'],
display: 'swap',
// You can add other options:
weight: ['400', '500', '600', '700'], // Specify weights you need
variable: '--font-kode-mono' // Optional: CSS variable
});

const Hero = () => {
const containerRef = useRef(null);
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
const [isVisible, setIsVisible] = useState(false);

    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const features = [
        {
            text: 'Enterprise Solutions',
            icon: Code2,
            gradient: 'from-violet-400 to-purple-400'
        },
        {
            text: 'Lightning Performance',
            icon: Zap,
            gradient: 'from-cyan-400 to-blue-400'
        },
        {
            text: 'Production Ready',
            icon: CheckCircle2,
            gradient: 'from-emerald-400 to-teal-400'
        },
        {
            text: 'AI-Powered Innovation',
            icon: Sparkles,
            gradient: 'from-orange-400 to-red-400'
        }
    ];

    return (
        <div className={`${kodeMono.className}`}>
            <div
                ref={containerRef}
                className="relative min-h-screen bg-black text-white overflow-hidden"
            >
                {/* Animated gradient background - matches WebsitePartner */}
                <div className="fixed inset-0 opacity-30">
                    <div className="absolute inset-0 bg-linear-to-br from-violet-600/20 via-transparent to-cyan-600/20" />
                    <motion.div
                        className="absolute inset-0 bg-linear-to-tr from-orange-600/10 via-transparent to-emerald-600/10 hidden lg:block"
                        animate={{
                            rotate: [0, 360]
                        }}
                        transition={{
                            duration: 60,
                            repeat: Infinity,
                            ease: 'linear'
                        }}
                    />
                </div>

                {/* Grid overlay - matches WebsitePartner */}
                <div className="fixed inset-0 opacity-[0.02]">
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

                {/* Main content */}
                <motion.div
                    className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-12"
                    style={{ opacity }}
                >
                    <div className="max-w-[1400px] mx-auto w-full mt-35">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: isVisible ? 1 : 0,
                                y: isVisible ? 0 : 20
                            }}
                            transition={{ duration: 0.6 }}
                            className="flex justify-center mb-8"
                        >
                            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm group hover:border-white/20 transition-all duration-300">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: 'linear'
                                    }}
                                >
                                    <Sparkles
                                        size={16}
                                        className="text-violet-400"
                                    />
                                </motion.div>
                                <span className="text-sm font-medium tracking-wide bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                                    Elevate Your Digital Presence
                                </span>
                            </div>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{
                                opacity: isVisible ? 1 : 0,
                                y: isVisible ? 0 : 30
                            }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-center mb-8"
                        >
                            <h1 className="text-6xl md:text-8xl lg:text-8xl font-light tracking-tight mb-6">
                                <span className="block text-white/90">
                                    You Dream it,
                                </span>
                                <span className="block mt-4 font-medium bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                                    We build it.
                                </span>
                            </h1>
                        </motion.div>

                        {/* Subheading */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isVisible ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-400 max-w-5xl mx-auto text-center mb-12 font-light leading-relaxed"
                        >
                            {/* Transform ambitious concepts into high-performance
                        digital solutions. We architect, develop, and deploy
                        enterprise-grade applications with precision and speed. */}
                            Trunal is a Software & Digital Agency based in
                            Varanasi UP India, We architect, develop, and deploy
                            enterprise-grade Websites with precision and speed.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: isVisible ? 1 : 0,
                                y: isVisible ? 0 : 20
                            }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                        >
                            <motion.button
                                className="group relative px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Start Your Project
                                    <ArrowRight
                                        size={18}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-violet-400 to-cyan-400"
                                    initial={{ x: '100%' }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.button>

                            {/* <motion.button
                                className="px-8 py-4 border border-white/20 text-white rounded-full font-medium hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Our Work
                            </motion.button> */}
                        </motion.div>

                        {/* Features Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{
                                opacity: isVisible ? 1 : 0,
                                y: isVisible ? 0 : 30
                            }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16"
                        >
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{
                                            opacity: isVisible ? 1 : 0,
                                            y: isVisible ? 0 : 20
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.8 + index * 0.1
                                        }}
                                        className="group relative"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl" />
                                        <div className="relative border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:border-white/20 transition-all duration-300 h-full">
                                            <div
                                                className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.gradient} bg-opacity-10 mb-4`}
                                            >
                                                <Icon
                                                    size={20}
                                                    className="text-white"
                                                />
                                            </div>
                                            <p className="text-sm text-gray-300 font-medium">
                                                {feature.text}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isVisible ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="flex justify-center"
                        >
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="flex flex-col items-center gap-2 text-gray-500"
                            >
                                <span className="text-xs tracking-widest uppercase">
                                    Scroll to explore
                                </span>
                                <ChevronDown size={20} />
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Interactive floating elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white/20 rounded-full"
                            style={{
                                left: `${20 + i * 15}%`,
                                top: `${30 + i * 10}%`
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.2, 0.5, 0.2],
                                scale: [1, 1.5, 1]
                            }}
                            transition={{
                                duration: 3 + i,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: i * 0.3
                            }}
                        />
                    ))}
                </div>

                {/* 3D Parallax orbs - hidden on mobile/tablet */}
                <motion.div
                    className="absolute top-1/4 left-[10%] w-64 h-64 bg-violet-600/10 rounded-full blur-3xl hidden lg:block"
                    style={{
                        x: useTransform(scrollY, [0, 500], [0, -50]),
                        y: mousePosition.y * 0.5
                    }}
                />
                <motion.div
                    className="absolute top-1/3 right-[15%] w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl hidden lg:block"
                    style={{
                        x: useTransform(scrollY, [0, 500], [0, 50]),
                        y: mousePosition.y * -0.3
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 left-[20%] w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl hidden lg:block"
                    style={{
                        x: mousePosition.x * 0.3,
                        y: useTransform(scrollY, [0, 500], [0, 80])
                    }}
                />
            </div>
        </div>
    );

};

export default Hero;

'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Space_Grotesk } from 'next/font/google';
import { Settings } from 'lucide-react';

const spaceGrotesk = Space_Grotesk({
subsets: ['latin'],
display: 'swap',
variable: '--font-space-grotesk'
// Space Grotesk supports 300-700
// weight: ['300', '400', '500', '600', '700'],
});

const TrustySection = () => {
const containerRef = useRef(null);
const { scrollYProgress } = useScroll({
target: containerRef,
offset: ['start end', 'end start']
});

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const y1 = useTransform(smoothProgress, [0, 1], [0, -100]);
    const y2 = useTransform(smoothProgress, [0, 1], [0, 100]);
    const opacity = useTransform(
        smoothProgress,
        [0, 0.2, 0.8, 1],
        [0, 1, 1, 0]
    );
    const scale = useTransform(
        smoothProgress,
        [0, 0.2, 0.8, 1],
        [0.8, 1, 1, 0.8]
    );

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const stats = [
        {
            number: '40',
            label: 'Enterprise Clients',
            suffix: '+',
            description: 'Global partnerships'
        },
        {
            number: '4',
            label: 'Years Leading',
            suffix: '+',
            description: 'Industry expertise'
        },
        {
            number: '50',
            label: 'Projects Delivered',
            suffix: '+',
            description: 'Success stories'
        },
        {
            number: '100',
            label: 'Client Retention',
            suffix: '%',
            description: 'Satisfaction rate'
        }
    ];

    const capabilities = [
        {
            title: 'Premium Asset Curation',
            description:
                'We source and optimize premium visual assets from industry-leading providers, ensuring every element meets enterprise-grade standards for performance and aesthetics.',
            icon: '🎨',
            gradient: 'from-violet-600 to-indigo-600'
        },
        {
            title: 'Enterprise Architecture',
            description:
                'Our development follows SOLID principles with semantic HTML5, maintainable CSS architecture, and modular JavaScript—built for scale and long-term sustainability.',
            icon: '⚙️',
            gradient: 'from-cyan-600 to-blue-600'
        },
        {
            title: 'Rapid Deployment Cycle',
            description:
                'Our agile methodology ensures swift delivery without compromising quality. What typically takes months, we deliver in weeks with continuous client collaboration.',
            icon: '🚀',
            gradient: 'from-orange-600 to-red-600'
        },
        {
            title: 'Adaptive Design System',
            description:
                'Mobile-first responsive frameworks ensure flawless experiences across all devices. Our designs adapt intelligently to every screen size and interaction pattern.',
            icon: '📱',
            gradient: 'from-emerald-600 to-teal-600'
        },
        {
            title: 'Performance Optimization',
            description:
                'Sub-second load times through advanced optimization techniques: lazy loading, code splitting, CDN integration, and critical rendering path optimization.',
            icon: '⚡',
            gradient: 'from-yellow-600 to-amber-600'
        }
    ];

    return (
        <div className={`${spaceGrotesk.className}`}>
            <div
                ref={containerRef}
                className="relative bg-black text-white overflow-hidden"
            >
                {/* Animated gradient background */}
                <div className="fixed inset-0 opacity-30">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-600/20" />
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-orange-600/10 via-transparent to-emerald-600/10 hidden lg:block"
                        animate={{
                            rotate: [0, 360]
                        }}
                        transition={{
                            duration: 60,
                            repeat: Infinity,
                            ease: 'linear'
                        }}
                    />
                </div>

                {/* Grid overlay */}
                <div className="fixed inset-0 opacity-[0.02]">
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

                <motion.div
                    className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-32"
                    style={{ opacity, scale }}
                >
                    {/* Hero Section */}
                    <motion.div className="text-center mb-32" style={{ y: y1 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block mb-6">
                                <span className="text-sm font-medium tracking-[0.3em] text-gray-400 uppercase">
                                    Digital Excellence
                                </span>
                            </div>
                        </motion.div>

                        <motion.h1
                            className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            Your strategic
                            <br />
                            <span className="font-semibold bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                                digital partner
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-xl text-gray-400 max-w-2xl mx-auto font-light"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Transforming ambitious visions into high-performance
                            digital experiences
                        </motion.p>
                    </motion.div>

                    {/* Stats Grid - Parallax */}
                    <motion.div
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-32"
                        style={{ y: y2 }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1
                                }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
                                <div className="relative border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-white/20 transition-all duration-500">
                                    <div className="text-5xl lg:text-6xl font-light mb-2 tracking-tight">
                                        {stat.number}
                                        <span className="text-violet-400">
                                            {stat.suffix}
                                        </span>
                                    </div>
                                    <div className="text-sm font-medium text-white mb-1">
                                        {stat.label}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        {stat.description}
                                    </div>

                                    {/* Hover effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-cyan-600/0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                                        whileHover={{ scale: 1.02 }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Main Value Proposition */}
                    <motion.div
                        className="mb-32"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative group">
                            {/* Animated border */}
                            <div className="absolute -inset-[1px] bg-gradient-to-r from-violet-600 via-cyan-600 to-emerald-600 rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

                            <div className="relative bg-black border border-white/10 rounded-3xl p-12 lg:p-16">
                                <div className="grid lg:grid-cols-2 gap-16 items-center">
                                    <div>
                                        <h2 className="text-4xl lg:text-5xl font-light mb-6 leading-tight">
                                            Websites engineered for
                                            <span className="block font-medium bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                                                impact and performance
                                            </span>
                                        </h2>
                                        <p className="text-gray-400 text-lg leading-relaxed">
                                            With extensive expertise in
                                            enterprise web development, we
                                            obsess over the details that
                                            distinguish exceptional digital
                                            experiences. Our team combines
                                            strategic thinking with technical
                                            excellence, eliminating the friction
                                            between design vision and technical
                                            execution.
                                        </p>
                                        <p className="text-gray-400 text-lg leading-relaxed mt-4">
                                            We don't just build websites, We
                                            architect digital ecosystems that
                                            drive measurable business outcomes
                                            and deliver sustainable competitive
                                            advantages.
                                        </p>
                                    </div>

                                    {/* Interactive visual element */}
                                    <motion.div
                                        className="relative h-[400px] rounded-2xl overflow-hidden"
                                        style={{
                                            transform: isLargeScreen
                                                ? `perspective(1000px) rotateY(${mousePosition.x * 0.05}deg) rotateX(${-mousePosition.y * 0.05}deg)`
                                                : 'none'
                                        }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 100,
                                            damping: 20
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-cyan-600/20 to-emerald-600/20 backdrop-blur-3xl" />

                                        {/* Floating elements - hidden on mobile/tablet */}
                                        {isLargeScreen &&
                                            [...Array(3)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20"
                                                    style={{
                                                        left: `${20 + i * 25}%`,
                                                        top: `${20 + i * 20}%`
                                                    }}
                                                    animate={{
                                                        y: [0, -20, 0],
                                                        rotate: [0, 180, 360]
                                                    }}
                                                    transition={{
                                                        duration: 4 + i,
                                                        repeat: Infinity,
                                                        ease: 'easeInOut',
                                                        delay: i * 0.5
                                                    }}
                                                />
                                            ))}
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Capabilities Grid */}
                    <div className="mb-32">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl font-light mb-4">
                                Core Capabilities
                            </h2>
                            <p className="text-gray-400 text-lg">
                                Comprehensive solutions for modern digital
                                challenges
                            </p>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-6">
                            {capabilities.map((capability, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1
                                    }}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
                                    <div className="relative border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-white/20 transition-all duration-500 h-full">
                                        <div className="flex items-start gap-6">
                                            <motion.div
                                                className={`text-4xl p-4 rounded-xl bg-gradient-to-br ${capability.gradient} bg-opacity-10`}
                                                whileHover={{
                                                    scale: 1.1,
                                                    rotate: 5
                                                }}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 400
                                                }}
                                            >
                                                {capability.icon}
                                            </motion.div>

                                            <div className="flex-1">
                                                <h3 className="text-xl font-medium mb-3">
                                                    {capability.title}
                                                </h3>
                                                <p className="text-gray-400 leading-relaxed">
                                                    {capability.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Progress bar on hover */}
                                        <motion.div
                                            className={`h-1 bg-gradient-to-r ${capability.gradient} rounded-full mt-6 origin-left`}
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 1,
                                                delay: index * 0.1 + 0.3
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Code Quality Showcase */}
                    <motion.div
                        className="grid lg:grid-cols-2 gap-6 mb-32"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        {/* Code Block */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative border border-white/10 rounded-2xl p-8 backdrop-blur-sm bg-black/50">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-light">
                                        Clean Architecture
                                    </h3>
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                    </div>
                                </div>

                                <div className="bg-black/80 rounded-xl p-6 font-mono text-sm border border-white/5">
                                    <div className="space-y-2">
                                        <div className="text-gray-500">
                                            <span className="text-violet-400">
                                                const
                                            </span>{' '}
                                            <span className="text-cyan-400">
                                                solution
                                            </span>{' '}
                                            ={' '}
                                            <span className="text-emerald-400">
                                                {'{'}
                                            </span>
                                        </div>
                                        <div className="text-gray-400 pl-4">
                                            semantic:{' '}
                                            <span className="text-orange-400">
                                                'HTML5'
                                            </span>
                                            ,
                                        </div>
                                        <div className="text-gray-400 pl-4">
                                            methodology:{' '}
                                            <span className="text-orange-400">
                                                'BEM/ITCSS'
                                            </span>
                                            ,
                                        </div>
                                        <div className="text-gray-400 pl-4">
                                            architecture:{' '}
                                            <span className="text-orange-400">
                                                'Modular'
                                            </span>
                                            ,
                                        </div>
                                        <div className="text-gray-400 pl-4">
                                            performance:{' '}
                                            <span className="text-orange-400">
                                                'Optimized'
                                            </span>
                                        </div>
                                        <div className="text-emerald-400">
                                            {'}'}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
                                    <span className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                        Production Ready
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                                        Scalable
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative border border-white/10 rounded-2xl p-8 backdrop-blur-sm bg-black/50 h-full flex flex-col justify-center">
                                <h3 className="text-2xl font-light mb-8">
                                    Delivery Timeline
                                </h3>

                                <div className="space-y-8">
                                    <div className="relative">
                                        <motion.div
                                            className="text-6xl font-light text-gray-700"
                                            initial={{ opacity: 0.3 }}
                                            whileInView={{ opacity: 0.3 }}
                                            viewport={{ once: true }}
                                        >
                                            Months
                                        </motion.div>
                                        <motion.div
                                            className="absolute inset-0 text-6xl font-semibold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.8,
                                                delay: 0.3
                                            }}
                                        >
                                            Weeks
                                        </motion.div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <motion.div
                                                className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-red-400"
                                                animate={{ scale: [1, 1.5, 1] }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity
                                                }}
                                            />
                                            <span className="text-gray-400">
                                                Agile sprint methodology
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <motion.div
                                                className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-red-400"
                                                animate={{ scale: [1, 1.5, 1] }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: 0.5
                                                }}
                                            />
                                            <span className="text-gray-400">
                                                Continuous deployment
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <motion.div
                                                className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-red-400"
                                                animate={{ scale: [1, 1.5, 1] }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: 1
                                                }}
                                            />
                                            <span className="text-gray-400">
                                                Real-time collaboration
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom Features */}
                    <div className="grid lg:grid-cols-2 gap-6">
                        {/* Responsive */}
                        <motion.div
                            className="relative group"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative border border-white/10 rounded-2xl p-8 backdrop-blur-sm bg-black/50">
                                <h3 className="text-2xl font-light mb-4">
                                    Multi-Device Optimization
                                </h3>
                                <p className="text-gray-400 mb-8">
                                    Device-agnostic design systems ensuring
                                    pixel-perfect experiences across all
                                    platforms and form factors.
                                </p>

                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        {
                                            width: 'w-16',
                                            height: 'h-24',
                                            label: 'Mobile'
                                        },
                                        {
                                            width: 'w-20',
                                            height: 'h-28',
                                            label: 'Tablet'
                                        },
                                        {
                                            width: 'w-28',
                                            height: 'h-20',
                                            label: 'Desktop'
                                        }
                                    ].map((device, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex flex-col items-center gap-3"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <div
                                                className={`${device.width} ${device.height} border-2 border-white/20 rounded-lg bg-gradient-to-br from-emerald-600/10 to-teal-600/10 relative overflow-hidden`}
                                            >
                                                <motion.div
                                                    className="absolute inset-2 bg-white/5 rounded"
                                                    animate={{
                                                        opacity: [0.3, 0.6, 0.3]
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        delay: i * 0.3
                                                    }}
                                                />
                                            </div>
                                            <span className="text-xs text-gray-500">
                                                {device.label}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Performance */}
                        <motion.div
                            className="relative group"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-amber-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative border border-white/10 rounded-2xl p-8 backdrop-blur-sm bg-black/50">
                                <h3 className="text-2xl font-light mb-4">
                                    Performance Engineering
                                </h3>
                                <p className="text-gray-400 mb-8">
                                    Sub-second load times through advanced
                                    optimization and modern web performance
                                    techniques.
                                </p>

                                <div className="grid grid-cols-3 gap-4 text-center">
                                    {[
                                        { metric: '< 1s', label: 'Load Time' },
                                        { metric: '100', label: 'Lighthouse' },
                                        { metric: 'A+', label: 'Security' }
                                    ].map((stat, i) => (
                                        <motion.div
                                            key={i}
                                            className="border border-white/10 rounded-xl p-4 bg-black/30"
                                            whileHover={{ y: -5 }}
                                        >
                                            <div className="text-3xl font-light text-yellow-400 mb-1">
                                                {stat.metric}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {stat.label}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );

};

export default TrustySection;

'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { Kode_Mono } from 'next/font/google';
import { div } from 'framer-motion/client';

const kodeMono = Kode_Mono({
subsets: ['latin'],
display: 'swap',
// You can add other options:
weight: ['400', '500', '600', '700'], // Specify weights you need
variable: '--font-kode-mono' // Optional: CSS variable
});

interface Review {
id: number;
text: string;
author: {
name: string;
role: string;
company: string;
avatar: string;
};
}

const Reviews = () => {
const reviews: Review[] = [
{
id: 1,
text: "The platform has completely transformed how we build and deploy applications. Our development cycle has been cut in half, and our team couldn't be happier.",
author: {
name: 'Sarah Chen',
role: 'Senior Backend Engineering Manager',
company: 'TechCorp',
avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
}
},
{
id: 2,
text: "We've been able to unify data access from multiple enterprise systems into a single API. This has dramatically improved our development velocity while maintaining flexibility.",
author: {
name: 'Michael Rodriguez',
role: 'Head of Engineering',
company: 'DataFlow',
avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
}
},
{
id: 3,
text: 'The documentation made it incredibly easy to get started. We jumped straight in without needing extensive training, and immediately saw the benefits.',
author: {
name: 'Emily Watson',
role: 'Lead Developer',
company: 'CloudSync',
avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily'
}
},
{
id: 4,
text: 'Outstanding developer experience. The type-safe approach has eliminated entire classes of bugs and made our codebase significantly more maintainable.',
author: {
name: 'James Park',
role: 'Staff Engineer',
company: 'BuildFast',
avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James'
}
},
{
id: 5,
text: 'The performance improvements have been remarkable. Our API response times are now consistently under 100ms, which has greatly enhanced user experience.',
author: {
name: 'Lisa Anderson',
role: 'CTO',
company: 'ScaleUp',
avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa'
}
},
{
id: 6,
text: 'Migration from our legacy system was surprisingly smooth. The team saved countless hours of development time, and we can finally focus on features.',
author: {
name: 'David Kim',
role: 'Principal Engineer',
company: 'NextGen',
avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David'
}
},
{
id: 7,
text: "The type safety and autocomplete features have made our development workflow incredibly efficient. It's become an essential tool for our entire team.",
author: {
name: 'Rachel Thompson',
role: 'Senior Developer',
company: 'CodeCraft',
avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel'
}
},
{
id: 8,
text: "We've reduced our database query complexity by 60% while improving performance. The abstraction layer is exactly what we needed.",
author: {
name: 'Alex Martinez',
role: 'Database Architect',
company: 'DataCore',
avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'
}
},
{
id: 9,
text: 'Deployment has become trivial. What used to take hours now happens in minutes, and everything just works reliably.',
author: {
name: 'Jennifer Lee',
role: 'DevOps Lead',
company: 'CloudOps',
avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer'
}
}
];

    const duplicatedReviews = [...reviews, ...reviews, ...reviews];

    // Split reviews into 3 columns
    const column1 = duplicatedReviews.filter((_, index) => index % 3 === 0);
    const column2 = duplicatedReviews.filter((_, index) => index % 3 === 1);
    const column3 = duplicatedReviews.filter((_, index) => index % 3 === 2);

    return (
        <div className="relative bg-black text-white overflow-hidden py-32">
            {/* Background elements matching the design system */}
            <div className="fixed inset-0 opacity-30 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-600/20" />
            </div>

            {/* Grid overlay */}
            <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
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
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className={kodeMono.className}>
                        <div className="inline-block mb-6">
                            <span className="text-sm font-medium tracking-[0.3em] text-gray-400 uppercase">
                                Reviews
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-6 underline text-gray-300">
                            Trusted by more than{' '}
                            <span className="font-medium bg-linear-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                                40
                            </span>
                            <br />
                            monthly active Brands globally
                        </h2>
                    </div>
                </motion.div>

                {/* Scrolling Reviews Grid */}
                <div className="relative">
                    {/* Gradient overlays for fade effect */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-black to-transparent z-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent z-10 pointer-events-none" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[600px] lg:max-h-[800px] overflow-hidden">
                        {/* Column 1 - Scrolls down */}
                        <ScrollingColumn
                            reviews={column1}
                            direction="down"
                            speed={40}
                        />

                        {/* Column 2 - Scrolls up */}
                        <ScrollingColumn
                            reviews={column2}
                            direction="up"
                            speed={45}
                        />

                        {/* Column 3 - Scrolls down (hidden on mobile) */}
                        <div className="hidden lg:block">
                            <ScrollingColumn
                                reviews={column3}
                                direction="down"
                                speed={42}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

interface ScrollingColumnProps {
reviews: Review[];
direction: 'up' | 'down';
speed: number;
}

const ScrollingColumn = ({
reviews,
direction,
speed
}: ScrollingColumnProps) => {
const [isPaused, setIsPaused] = useState(false);

    return (
        <motion.div
            className="flex flex-col gap-6"
            initial={{ y: direction === 'down' ? '0%' : '-50%' }}
            animate={{
                y: direction === 'down' ? '-50%' : '0%'
            }}
            transition={{
                duration: speed,
                repeat: Infinity,
                ease: 'linear'
            }}
            style={{
                animationPlayState: isPaused ? 'paused' : 'running'
            }}
        >
            {reviews.map((review, index) => (
                <ReviewCard
                    key={`${review.id}-${index}`}
                    review={review}
                    onHoverStart={() => setIsPaused(true)}
                    onHoverEnd={() => setIsPaused(false)}
                />
            ))}
        </motion.div>
    );

};

interface ReviewCardProps {
review: Review;
onHoverStart: () => void;
onHoverEnd: () => void;
}

const ReviewCard = ({ review, onHoverStart, onHoverEnd }: ReviewCardProps) => {
return (
<div className={kodeMono.className}>
<motion.div
className="group relative"
onHoverStart={onHoverStart}
onHoverEnd={onHoverEnd}
whileHover={{ scale: 1.02 }}
transition={{ type: 'spring', stiffness: 300, damping: 20 }} >
{/_ Glow effect on hover _/}
<div className="absolute inset-0 bg-linear-to-br from-violet-600/0 to-cyan-600/0 group-hover:from-violet-600/10 group-hover:to-cyan-600/10 rounded-2xl blur-xl transition-all duration-500" />

                {/* Card content */}
                <div className="relative border border-white/10 bg-white/2 lg:backdrop-blur-sm rounded-2xl p-8 group-hover:border-white/20 transition-all duration-300">
                    {/* Quote icon */}
                    <div className="mb-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                        <Quote size={32} className="text-violet-400" />
                    </div>

                    {/* Review text */}
                    <p className="text-gray-300 leading-relaxed mb-8 text-base">
                        {review.text}
                    </p>

                    {/* Author info */}
                    <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <motion.div
                            className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-violet-400/50 transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                        >
                            <img
                                src={review.author.avatar}
                                alt={review.author.name}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Author details */}
                        <div className="flex-1 min-w-0">
                            <div className="font-medium text-white truncate">
                                {review.author.name}
                            </div>
                            <div className="text-sm text-gray-500 truncate">
                                {review.author.role}
                            </div>
                            <div className="text-sm font-medium mt-0.5">
                                <span className="text-violet-400">
                                    / {review.author.company}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Animated gradient bar at bottom */}
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-linear-to-r from-violet-400 via-cyan-400 to-emerald-400 rounded-b-2xl origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </motion.div>
        </div>
    );

};

export default Reviews;
