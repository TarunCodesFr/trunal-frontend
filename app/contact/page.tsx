'use client';

import Navbar from '../components/landing/Navbar';
import FooterSection from '../components/landing/FooterSection';
import CalendlyWidget from '../components/contact/CalendlyWidget';
import { motion } from 'framer-motion';
import {
    MessageSquare,
    Calendar,
    Sparkles,
    PhoneCallIcon,
    CodeXmlIcon
} from 'lucide-react';
import { div } from 'framer-motion/client';
import SmoothScrolling from '../components/flows/SmoothScrolling';

export default function ContactPage() {
    return (
        <div>
            <SmoothScrolling>
                <main className="bg-[#020d1a] min-h-screen text-white selection:bg-cyan-500/30">
                    <Navbar />

                    {/* Background elements */}
                    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
                        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[120px] rounded-full" />
                    </div>

                    <section className="relative pt-32 pb-20 px-6 sm:px-8 lg:px-12 z-10">
                        <div className="max-w-7xl mx-auto">
                            {/* Header */}
                            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-6">
                                        <Sparkles
                                            size={14}
                                            className="animate-pulse"
                                        />
                                        Let's Build Something Great
                                    </div>
                                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                                        Book a{' '}
                                        <span className="bg-linear-to-r from-cyan-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                            Free Strategy Call
                                        </span>
                                    </h1>
                                    <p className="text-white/50 text-lg leading-relaxed max-w-xl mb-8">
                                        Ready to scale your digital presence?
                                        Schedule a no-strings-attached
                                        consultation with our lead engineers to
                                        discuss your vision, goals, and
                                        technical requirements.
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="p-4 rounded-xl border border-white/5 bg-white/2">
                                            <Calendar
                                                className="text-cyan-400 mb-3"
                                                size={24}
                                            />
                                            <h3 className="font-semibold mb-1">
                                                Pick a Time
                                            </h3>
                                            <p className="text-white/30 text-sm">
                                                Find a slot that works for you
                                                in our live calendar.
                                            </p>
                                        </div>
                                        <div className="p-4 rounded-xl border border-white/5 bg-white/2">
                                            <PhoneCallIcon
                                                className="text-red-400 mb-3"
                                                size={24}
                                            />
                                            <h3 className="font-semibold mb-1">
                                                Call & Consultation
                                            </h3>
                                            <p className="text-white/30 text-sm">
                                                Our Trunal team will call on
                                                your provided phone number.
                                            </p>
                                        </div>
                                        <div className="p-4 rounded-xl border border-white/5 bg-white/2">
                                            <MessageSquare
                                                className="text-blue-400 mb-3"
                                                size={24}
                                            />
                                            <h3 className="font-semibold mb-1">
                                                Project Brief
                                            </h3>
                                            <p className="text-white/30 text-sm">
                                                We'll discuss your goals and how
                                                we can help you achieve them.
                                            </p>
                                        </div>
                                        <div className="p-4 rounded-xl border border-white/5 bg-white/2">
                                            <CodeXmlIcon
                                                className="text-purple-400 mb-3"
                                                size={24}
                                            />
                                            <h3 className="font-semibold mb-1">
                                                Final Steps
                                            </h3>
                                            <p className="text-white/30 text-sm">
                                                After the consultation, we'll
                                                finalize the project details and
                                                begin development.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Calendly Inline Widget */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden min-h-[700px]"
                                >
                                    <CalendlyWidget />
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    <FooterSection />
                </main>
            </SmoothScrolling>
        </div>
    );
}
