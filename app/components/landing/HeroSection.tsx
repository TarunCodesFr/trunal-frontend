'use client';

import Image from 'next/image';
import {
    DoodleSparkle,
    DoodleStar,
    DoodleSpiral,
    DoodleLines,
    DoodleWavyLine
} from './Doodle';
import { ArrowRight, Star } from 'lucide-react';

const clientLogos = [
    { name: 'Kashi Dental Clinic', initials: 'KC' },
    { name: 'Alok Pipelines', initials: 'AP' },
    { name: 'Family Sweets', initials: 'FS' },
    { name: 'Hanuman Ji Restraunt', initials: 'HR' },
    { name: 'GyanDeep Public Acedemy', initials: 'GD' }
];

const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '20+', label: 'Enterprise Clients' },
    { value: '<1s', label: 'Avg Load Time' }
];

const capabilities = [
    {
        icon: '◈',
        title: 'Enterprise Web Solutions',
        desc: 'Scalable, secure apps built for high-traffic environments with modern architectures.',
        accent: 'border-cyan-500/20 hover:border-cyan-400/40',
        iconColor: 'text-cyan-400'
    },
    {
        icon: '◉',
        title: 'Performance Engineering',
        desc: 'Sub-second loads, optimized Core Web Vitals, and blazing-fast UX.',
        accent: 'border-blue-500/20 hover:border-blue-400/40',
        iconColor: 'text-blue-400'
    },
    {
        icon: '◎',
        title: 'Production-Grade Security',
        desc: 'Industry-standard security, compliance-ready infrastructure from day one.',
        accent: 'border-cyan-500/20 hover:border-cyan-400/40',
        iconColor: 'text-cyan-300'
    },
    {
        icon: '⬡',
        title: 'End to End Encryption',
        desc: 'End-to-end encryption by our code to the database.',
        accent: 'border-blue-500/20 hover:border-blue-400/40',
        iconColor: 'text-blue-300'
    }
];

const showcaseImages = [
    {
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80',
        alt: 'Analytics dashboard project',
        label: 'SaaS Dashboard',
        tag: 'Web App'
    },
    {
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80',
        alt: 'E-commerce platform project',
        label: 'E-Commerce Platform',
        tag: 'Full Stack'
    },
    {
        src: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=600&h=400&fit=crop&q=80',
        alt: 'Mobile app design project',
        label: 'FinTech App',
        tag: 'Mobile'
    }
];

export default function Hero() {
    return (
        <section className="relative bg-[#020d1a] text-white overflow-x-clip">
            {/* ── CSS-only background grid ── */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}
            />
            {/* Glow orbs — static blur, zero JS */}
            <div
                aria-hidden
                className="pointer-events-none absolute top-[-180px] left-[-180px] w-[550px] h-[550px] rounded-full bg-cyan-500/[0.08] blur-[120px] z-0"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute bottom-[-200px] right-[-150px] w-[450px] h-[450px] rounded-full bg-blue-600/[0.07] blur-[100px] z-0"
            />

            {/* Doodles */}
            <DoodleSparkle
                className="absolute top-24 left-8 w-7 h-7 pointer-events-none z-10"
                opacity={0.3}
                color="#22d3ee"
            />
            <DoodleStar
                className="absolute top-32 right-16 w-10 h-10 pointer-events-none z-10"
                opacity={0.2}
                color="#38bdf8"
            />
            <DoodleSpiral
                className="absolute bottom-40 left-6 w-12 h-12 pointer-events-none z-10"
                opacity={0.2}
                color="#22d3ee"
            />
            <DoodleLines
                className="absolute bottom-32 right-10 w-16 pointer-events-none rotate-12 z-10"
                opacity={0.18}
                color="#0ea5e9"
            />
            <DoodleWavyLine
                className="absolute top-48 left-3 h-32 pointer-events-none hidden lg:block z-10"
                opacity={0.18}
                color="#22d3ee"
            />

            {/* ── ABOVE THE FOLD ── */}
            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-28 pb-20 lg:pt-36 lg:pb-28">
                {/* Eyebrow */}
                <div className="flex justify-center mb-8">
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/[0.05] px-5 py-2 text-[11px] font-mono tracking-[0.15em] uppercase text-cyan-400/80 backdrop-blur-sm select-none">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 hero-pulse" />
                        Best Digital Marketing Agency in Varanasi & India
                    </span>
                </div>

                {/* ── Split hero ── */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left column */}
                    <div className="text-center lg:text-left">
                        {/* HUD line accent */}
                        <div className="hidden lg:flex items-center gap-3 mb-6">
                            <span className="h-px w-10 bg-cyan-400/50" />
                            <span className="text-[10px] font-mono text-cyan-400/60 tracking-[0.3em] uppercase">
                                [ EST. 2025 — TRUNAL.IN ]
                            </span>
                        </div>

                        <h1 className="text-[clamp(2.75rem,6vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight">
                            <span className="block text-white/90">
                                You dream it,
                            </span>
                            <span
                                className="block mt-1 bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent hero-headline-gradient"
                                style={{ WebkitBackgroundClip: 'text' }}
                            >
                                We build it.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/40 font-light mx-auto lg:mx-0">
                            Trunal is a software &amp; digital agency that
                            architects, develops, and deploys enterprise-grade
                            websites and applications with precision, speed, and
                            obsessive attention to craft.
                        </p>

                        {/* CTAs */}
                        <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-4">
                            <a
                                href="/contact"
                                className="group inline-flex items-center gap-2.5 rounded-full bg-cyan-400 px-8 py-4 text-sm font-bold text-[#020d1a] tracking-wide transition-all duration-200 hover:bg-cyan-300 active:scale-[0.97]"
                                style={{
                                    boxShadow:
                                        '0 0 24px 4px rgba(34,211,238,0.3)'
                                }}
                            >
                                Start Your Project
                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                                />
                            </a>
                            <a
                                href="/about"
                                className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/[0.05] px-8 py-4 text-sm font-medium text-cyan-300/80 transition-all duration-200 hover:border-cyan-400/50 hover:text-cyan-300 active:scale-[0.97]"
                            >
                                Meet the Team
                            </a>
                        </div>

                        {/* Trust row */}
                        <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-6">
                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={14}
                                            className="fill-amber-400 text-amber-400"
                                        />
                                    ))}
                                </div>
                                <span className="text-xs text-white/40">
                                    5.0 from 50+ reviews
                                </span>
                            </div>
                            <div className="flex items-center">
                                <div className="flex -space-x-2">
                                    {clientLogos.map((c) => (
                                        <div
                                            key={c.name}
                                            className="h-7 w-7 rounded-full border-2 border-[#020d1a] bg-white/10 flex items-center justify-center text-[9px] font-bold text-cyan-300/80"
                                            title={c.name}
                                        >
                                            {c.initials}
                                        </div>
                                    ))}
                                </div>
                                <span className="ml-3 text-xs text-white/30">
                                    Trusted by 50+ companies
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right column — image showcase */}
                    <div className="relative">
                        {/* Corner brackets on main card */}
                        <span className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-lg z-20" />
                        <span className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-lg z-20" />
                        <span className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-lg z-20" />
                        <span className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-400/50 rounded-br-lg z-20" />

                        {/* Main showcase card */}
                        <div
                            className="rounded-2xl overflow-hidden border border-cyan-500/20 bg-white/[0.02]"
                            style={{
                                boxShadow:
                                    '0 0 40px 4px rgba(34,211,238,0.08), 0 20px 60px -12px rgba(0,0,0,0.6)'
                            }}
                        >
                            <div className="relative aspect-[4/3]">
                                <Image
                                    src={showcaseImages[0].src}
                                    alt={showcaseImages[0].alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020d1a]/70 via-transparent to-transparent" />
                                {/* Scanline */}
                                <div
                                    aria-hidden
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        backgroundImage:
                                            'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px)'
                                    }}
                                />
                                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                                    <div>
                                        <span className="inline-block rounded-full bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-sm px-3 py-1 text-[10px] font-mono text-cyan-300/80 mb-2">
                                            {showcaseImages[0].tag}
                                        </span>
                                        <p className="text-sm font-semibold text-white">
                                            {showcaseImages[0].label}
                                        </p>
                                    </div>
                                    <ArrowRight
                                        size={16}
                                        className="text-cyan-400/60"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Floating secondary cards */}
                        <div className="absolute -bottom-6 -left-4 sm:-left-8 w-44 sm:w-52 rounded-xl overflow-hidden border border-cyan-500/20 bg-[#020d1a]/90 backdrop-blur-md shadow-xl hero-float-slow">
                            <div className="relative aspect-[3/2]">
                                <Image
                                    src={showcaseImages[1].src}
                                    alt={showcaseImages[1].alt}
                                    fill
                                    className="object-cover"
                                    sizes="220px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020d1a]/80 to-transparent" />
                                <div className="absolute bottom-2 left-3">
                                    <span className="text-[9px] font-mono text-cyan-400/60 block">
                                        {showcaseImages[1].tag}
                                    </span>
                                    <span className="text-[11px] font-semibold text-white">
                                        {showcaseImages[1].label}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-4 -right-3 sm:-right-6 w-40 sm:w-48 rounded-xl overflow-hidden border border-cyan-500/20 bg-[#020d1a]/90 backdrop-blur-md shadow-xl hero-float-fast">
                            <div className="relative aspect-[3/2]">
                                <Image
                                    src={showcaseImages[2].src}
                                    alt={showcaseImages[2].alt}
                                    fill
                                    className="object-cover"
                                    sizes="200px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020d1a]/80 to-transparent" />
                                <div className="absolute bottom-2 left-3">
                                    <span className="text-[9px] font-mono text-cyan-400/60 block">
                                        {showcaseImages[2].tag}
                                    </span>
                                    <span className="text-[11px] font-semibold text-white">
                                        {showcaseImages[2].label}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Floating stat pill */}
                        <div className="absolute top-6 -left-3 sm:-left-6 rounded-full border border-cyan-500/20 bg-[#020d1a]/80 backdrop-blur-md px-4 py-2.5 shadow-lg hero-float-fast">
                            <div className="flex items-center gap-2.5">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10">
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 hero-pulse" />
                                </span>
                                <div>
                                    <p className="text-xs font-bold text-white">
                                        50+
                                    </p>
                                    <p className="text-[10px] font-mono text-cyan-400/50">
                                        Projects Live
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── STATS BAR ── */}
            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pb-20">
                <div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl border border-cyan-500/15 bg-white/[0.02] overflow-hidden"
                    style={{ boxShadow: '0 0 40px 2px rgba(34,211,238,0.05)' }}
                >
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="relative flex flex-col items-center justify-center py-8 px-4 text-center group hover:bg-cyan-500/[0.04] transition-colors duration-200"
                        >
                            {/* corner micro-accents */}
                            <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cyan-400/20 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cyan-400/20 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-cyan-300 tabular-nums">
                                {stat.value}
                            </span>
                            <span className="mt-1.5 text-[11px] text-white/35 font-mono tracking-widest uppercase">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── CAPABILITIES ── */}
            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pb-28">
                <div className="flex items-center gap-3 justify-center mb-10">
                    <span className="h-px w-10 bg-cyan-400/40" />
                    <p className="text-[11px] font-mono text-cyan-400/60 tracking-[0.2em] uppercase">
                        What we deliver
                    </p>
                    <span className="h-px w-10 bg-cyan-400/40" />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {capabilities.map((cap) => (
                        <div
                            key={cap.title}
                            className={`group relative rounded-2xl border bg-white/[0.02] p-7 transition-all duration-200 overflow-hidden ${cap.accent}`}
                        >
                            {/* top-left corner accent */}
                            <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-cyan-400/30 rounded-tl-2xl group-hover:border-cyan-400/60 transition-colors duration-300" />
                            <p className={`text-2xl mb-5 ${cap.iconColor}`}>
                                {cap.icon}
                            </p>
                            <h3 className="text-sm font-semibold text-white/90 mb-2 group-hover:text-white transition-colors duration-200">
                                {cap.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-white/35">
                                {cap.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
