'use client';

import Image from 'next/image';
import {
    ArrowRight,
    Star,
    Play,
    Globe,
    Gauge,
    Shield,
    Layers
} from 'lucide-react';

const clientLogos = [
    { name: 'Startup Co', initials: 'SC' },
    { name: 'TechFlow', initials: 'TF' },
    { name: 'GrowthLab', initials: 'GL' },
    { name: 'NovaBrand', initials: 'NB' },
    { name: 'ScaleUp', initials: 'SU' }
];

const stats = [
    { value: '150+', label: 'Projects Delivered' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '50+', label: 'Enterprise Clients' },
    { value: '<1s', label: 'Avg Load Time' }
];

const capabilities = [
    {
        icon: Globe,
        title: 'Enterprise Web Solutions',
        desc: 'Scalable, secure apps built for high-traffic environments with modern architectures.'
    },
    {
        icon: Gauge,
        title: 'Performance Engineering',
        desc: 'Sub-second loads, optimized Core Web Vitals, and blazing-fast UX.'
    },
    {
        icon: Shield,
        title: 'Production-Grade Security',
        desc: 'Industry-standard security, compliance-ready infrastructure from day one.'
    },
    {
        icon: Layers,
        title: 'Full-Stack Development',
        desc: 'End-to-end from system design to deployment, monitoring, and scale.'
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
        <section className="relative bg-[#09090b] text-white overflow-hidden">
            {/* Background effects — CSS only */}
            <div className="hero-gradient" aria-hidden="true" />
            <div className="hero-grid" aria-hidden="true" />

            {/* ── ABOVE THE FOLD ── */}
            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-28 pb-20 lg:pt-36 lg:pb-28">
                {/* Eyebrow */}
                <div className="flex justify-center mb-8">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-[11px] font-medium tracking-[0.15em] uppercase text-zinc-400 backdrop-blur-sm select-none">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 hero-pulse" />
                        Software &amp; Digital Agency — Varanasi, India
                    </span>
                </div>

                {/* ── Split hero: text left, images right ── */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left column */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[1.05] tracking-tight">
                            <span className="block text-white/90">
                                You dream it,
                            </span>
                            <span className="block hero-headline-gradient mt-1">
                                We build it.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 font-light mx-auto lg:mx-0">
                            Trunal is a software &amp; digital agency that
                            architects, develops, and deploys enterprise-grade
                            websites and applications with precision, speed, and
                            obsessive attention to craft.
                        </p>

                        {/* CTAs */}
                        <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-4">
                            <a
                                href="/portal"
                                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-semibold text-zinc-950 transition-all duration-200 hover:bg-zinc-200 active:scale-[0.97] shadow-[0_0_40px_rgba(255,255,255,0.06)]"
                            >
                                Start Your Project
                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                                />
                            </a>
                            {/* <a
                                href="#work"
                                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-sm font-medium text-zinc-300 transition-all duration-200 hover:border-white/30 hover:text-white active:scale-[0.97]"
                            >
                                <Play size={14} className="fill-current" />
                                View Our Work
                            </a> */}
                        </div>

                        {/* Trust row */}
                        <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-6">
                            {/* Rating */}
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
                                <span className="text-xs text-zinc-400">
                                    5.0 from 50+ reviews
                                </span>
                            </div>
                            {/* Client avatars */}
                            <div className="flex items-center">
                                <div className="flex -space-x-2">
                                    {clientLogos.map((c) => (
                                        <div
                                            key={c.name}
                                            className="h-7 w-7 rounded-full border-2 border-[#09090b] bg-zinc-800 flex items-center justify-center text-[9px] font-bold text-zinc-400"
                                            title={c.name}
                                        >
                                            {c.initials}
                                        </div>
                                    ))}
                                </div>
                                <span className="ml-3 text-xs text-zinc-500">
                                    Trusted by 50+ companies
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right column — image showcase */}
                    <div className="relative">
                        {/* Main showcase card */}
                        <div className="hero-showcase-card rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.02] shadow-2xl shadow-black/40">
                            <div className="relative aspect-[4/3]">
                                <Image
                                    src={showcaseImages[0].src}
                                    alt={showcaseImages[0].alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                                    <div>
                                        <span className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-[10px] font-medium text-white/80 mb-2">
                                            {showcaseImages[0].tag}
                                        </span>
                                        <p className="text-sm font-semibold text-white">
                                            {showcaseImages[0].label}
                                        </p>
                                    </div>
                                    <ArrowRight
                                        size={16}
                                        className="text-white/60"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Floating secondary cards */}
                        <div className="absolute -bottom-6 -left-4 sm:-left-8 w-44 sm:w-52 rounded-xl overflow-hidden border border-white/[0.08] bg-zinc-900/90 backdrop-blur-md shadow-xl shadow-black/40 hero-float-slow">
                            <div className="relative aspect-[3/2]">
                                <Image
                                    src={showcaseImages[1].src}
                                    alt={showcaseImages[1].alt}
                                    fill
                                    className="object-cover"
                                    sizes="220px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                <div className="absolute bottom-2 left-3">
                                    <span className="text-[9px] font-medium text-white/70 block">
                                        {showcaseImages[1].tag}
                                    </span>
                                    <span className="text-[11px] font-semibold text-white">
                                        {showcaseImages[1].label}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-4 -right-3 sm:-right-6 w-40 sm:w-48 rounded-xl overflow-hidden border border-white/[0.08] bg-zinc-900/90 backdrop-blur-md shadow-xl shadow-black/40 hero-float-fast">
                            <div className="relative aspect-[3/2]">
                                <Image
                                    src={showcaseImages[2].src}
                                    alt={showcaseImages[2].alt}
                                    fill
                                    className="object-cover"
                                    sizes="200px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                <div className="absolute bottom-2 left-3">
                                    <span className="text-[9px] font-medium text-white/70 block">
                                        {showcaseImages[2].tag}
                                    </span>
                                    <span className="text-[11px] font-semibold text-white">
                                        {showcaseImages[2].label}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Floating stat pill */}
                        <div className="absolute top-6 -left-3 sm:-left-6 rounded-full border border-white/10 bg-zinc-900/80 backdrop-blur-md px-4 py-2.5 shadow-lg hero-float-fast">
                            <div className="flex items-center gap-2.5">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10">
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 hero-pulse" />
                                </span>
                                <div>
                                    <p className="text-xs font-semibold text-white">
                                        150+
                                    </p>
                                    <p className="text-[10px] text-zinc-500">
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
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl border border-white/[0.06] bg-white/[0.03] overflow-hidden">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-col items-center justify-center py-8 px-4 text-center"
                        >
                            <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                                {stat.value}
                            </span>
                            <span className="mt-1.5 text-xs sm:text-sm text-zinc-500 font-medium tracking-wide">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── CAPABILITIES ── */}
            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pb-28">
                <p className="text-center text-xs font-medium tracking-[0.2em] uppercase text-zinc-500 mb-10">
                    What we deliver
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {capabilities.map((cap) => {
                        const Icon = cap.icon;
                        return (
                            <div
                                key={cap.title}
                                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-colors duration-200 hover:border-white/[0.12] hover:bg-white/[0.04]"
                            >
                                <div className="mb-5 inline-flex items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] p-3">
                                    <Icon
                                        size={20}
                                        className="text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200"
                                    />
                                </div>
                                <h3 className="text-sm font-semibold text-zinc-200 mb-2">
                                    {cap.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-zinc-500">
                                    {cap.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
