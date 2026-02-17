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
