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
                className="relative bg-transparent text-white overflow-hidden"
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
