'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/landing/Navbar';
import FooterSection from '../components/landing/FooterSection';

const Pricing = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const plans = [
        {
            name: 'Basic',
            price: '3000 ₹',
            period: '/lifetime',
            description: 'Perfect for small projects and startups',
            features: [
                'Single/Landing Page Website',
                'Advance Animations & Design',
                'Every Information About Your Business',
                'Free Hosting',
                'Website Design By Us'
            ],
            buttonText: 'Get started',
            buttonVariant: 'outline',
            popular: true
        },
        {
            name: 'Essential',
            price: '7000 ₹',
            period: '/lifetime',
            description: 'Most popular choice for growing teams',
            features: [
                '3-5 Page Full Stack Web App',
                'Authentication with Email & Social',
                'Admin Dashboard',
                'Website analytics',
                'Website Design By Us'
            ],
            buttonText: 'Get started',
            buttonVariant: 'primary',
            popular: false
        },
        {
            name: 'Premium',
            price: '',
            period: 'Contact Our Team',
            description: 'For large teams and enterprises, Contact Our Team',
            features: [
                'Fully Fledged Web App',
                'End to End Security',
                'Everything Custom Made'
            ],
            buttonText: 'Get started',
            buttonVariant: 'outline',
            popular: false
        }
    ];

    return (
        <>
            <Navbar />
            <div className="relative bg-black text-white overflow-hidden py-20 md:py-32">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-600/20" />
                <div className="absolute inset-0 bg-gradient-to-tl from-blue-600/10 via-transparent to-purple-600/10" />

                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-[0.02]">
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

                <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="mt-10 text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            Pricing plans
                            <br />
                            <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                                for teams of all sizes
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
                            Choose the perfect plan for your needs. All plans
                            include our core features with flexible options to
                            scale as you grow.
                        </p>
                    </motion.div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1
                                }}
                                onHoverStart={() => setHoveredCard(index)}
                                onHoverEnd={() => setHoveredCard(null)}
                                className="relative group h-full"
                            >
                                {/* Popular Badge */}
                                {plan.popular && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
                                    >
                                        <div className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 shadow-lg">
                                            <Sparkles size={14} />
                                            Most popular
                                        </div>
                                    </motion.div>
                                )}

                                {/* Glow Effect */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    animate={{
                                        background: plan.popular
                                            ? 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(139, 92, 246, 0.15), transparent 40%)'
                                            : 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.1), transparent 40%)'
                                    }}
                                />

                                {/* Card */}
                                <motion.div
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 20
                                    }}
                                    className={`relative h-full rounded-2xl p-8 backdrop-blur-sm ${
                                        plan.popular
                                            ? 'bg-white/10 border-2 border-violet-500/50 shadow-xl shadow-violet-500/10'
                                            : 'bg-white/5 border border-white/10'
                                    }`}
                                >
                                    {/* Plan Name */}
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {plan.name}
                                        </h3>
                                        <p className="text-gray-400 text-sm">
                                            {plan.description}
                                        </p>
                                    </div>

                                    {/* Price */}
                                    <div className="mb-8">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-5xl font-bold text-white">
                                                {plan.price}
                                            </span>
                                            <span className="text-gray-400 text-lg">
                                                {plan.period}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map(
                                            (feature, featureIndex) => (
                                                <motion.li
                                                    key={featureIndex}
                                                    initial={{
                                                        opacity: 0,
                                                        x: -10
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        x: 0
                                                    }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        delay:
                                                            index * 0.1 +
                                                            featureIndex * 0.05
                                                    }}
                                                    className="flex items-start gap-3"
                                                >
                                                    <div
                                                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                                                            plan.popular
                                                                ? 'bg-violet-500/20 text-violet-400'
                                                                : 'bg-cyan-500/20 text-cyan-400'
                                                        }`}
                                                    >
                                                        <Check
                                                            size={14}
                                                            strokeWidth={3}
                                                        />
                                                    </div>
                                                    <span className="text-gray-300 text-sm leading-relaxed">
                                                        {feature}
                                                    </span>
                                                </motion.li>
                                            )
                                        )}
                                    </ul>

                                    {/* CTA Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`w-full py-3.5 px-6 rounded-lg font-medium transition-all duration-300 ${
                                            plan.buttonVariant === 'primary'
                                                ? 'bg-gradient-to-r from-violet-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-violet-500/50'
                                                : 'border border-white/20 text-white hover:bg-white/10 hover:border-white/30'
                                        }`}
                                    >
                                        {plan.buttonText}
                                    </motion.button>

                                    {/* Animated Border Gradient */}
                                    {hoveredCard === index && plan.popular && (
                                        <motion.div
                                            className="absolute inset-0 rounded-2xl"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            style={{
                                                background:
                                                    'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent)',
                                                backgroundSize: '200% 100%'
                                            }}
                                        >
                                            <motion.div
                                                animate={{
                                                    backgroundPosition: [
                                                        '0% 0%',
                                                        '200% 0%'
                                                    ]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: 'linear'
                                                }}
                                                className="absolute inset-0 rounded-2xl"
                                                style={{
                                                    background:
                                                        'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent)',
                                                    backgroundSize: '200% 100%'
                                                }}
                                            />
                                        </motion.div>
                                    )}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-center mt-16"
                    >
                        <p className="text-gray-400 mb-4">
                            Need a custom plan for your organization?
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors underline underline-offset-4"
                        >
                            Contact our sales team →
                        </motion.button>
                    </motion.div>
                </div>
            </div>
            <FooterSection />
        </>
    );
};

export default Pricing;
