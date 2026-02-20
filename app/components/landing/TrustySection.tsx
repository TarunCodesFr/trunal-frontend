'use client';

import Image from 'next/image';
import {
    DoodleSparkle,
    DoodleStar,
    DoodleSpiral,
    DoodleLines,
    DoodleWavyLine
} from './Doodle';
import {
    ArrowRight,
    CheckCircle2,
    Clock,
    Code2,
    Globe,
    Headphones,
    Layers,
    Paintbrush,
    Search,
    ShoppingCart,
    Smartphone,
    TrendingUp,
    Zap
} from 'lucide-react';

const services = [
    {
        icon: Globe,
        title: 'Custom Website Development',
        desc: 'Hand-crafted websites that load in under a second. Every pixel is intentionally built from scratch, not from cheap templates.',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&h=420&fit=crop&q=80',
        tag: 'Core Service',
        iconColor: 'text-cyan-400',
        borderHover: 'hover:border-cyan-400/30',
        span: 'lg:col-span-2'
    },
    {
        icon: ShoppingCart,
        title: 'E-Commerce Solutions',
        desc: 'Conversion-optimised stores built on battle-tested stacks. From product pages to checkout — engineered to sell.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=380&fit=crop&q=80',
        tag: 'E-Commerce',
        iconColor: 'text-blue-400',
        borderHover: 'hover:border-blue-400/30',
        span: ''
    },
    {
        icon: Smartphone,
        title: 'Mobile-First Web Apps',
        desc: 'Progressive web apps and responsive builds that perform flawlessly across every device.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=380&fit=crop&q=80',
        tag: 'Web Apps',
        iconColor: 'text-cyan-300',
        borderHover: 'hover:border-cyan-300/30',
        span: ''
    },
    {
        icon: Search,
        title: 'SEO & Performance Audits',
        desc: 'We dig deep into Core Web Vitals, crawlability, and on-page signals to rank you higher and load faster than competitors.',
        image: 'https://images.unsplash.com/photo-1553484771-047a44eee27a?w=700&h=420&fit=crop&q=80',
        tag: 'Growth',
        iconColor: 'text-blue-300',
        borderHover: 'hover:border-blue-300/30',
        span: 'lg:col-span-2'
    },
    {
        icon: Paintbrush,
        title: 'UI/UX Design',
        desc: 'From wireframe to high-fidelity prototype. We design interfaces users actually understand and enjoy using.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=380&fit=crop&q=80',
        tag: 'Design',
        iconColor: 'text-cyan-400',
        borderHover: 'hover:border-cyan-400/30',
        span: ''
    },
    {
        icon: TrendingUp,
        title: 'Digital Marketing & Ads',
        desc: 'ROI-driven paid campaigns, social media strategy, and content marketing to put your brand in front of the right audience.',
        image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&h=380&fit=crop&q=80',
        tag: 'Marketing',
        iconColor: 'text-blue-400',
        borderHover: 'hover:border-blue-400/30',
        span: ''
    }
];

const differentiators = [
    {
        icon: Zap,
        title: 'Ship in days, not months',
        desc: 'Our lean process cuts the fat. You get a production-ready website faster than any traditional agency without sacrificing quality.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=520&h=340&fit=crop&q=80'
    },
    {
        icon: Code2,
        title: 'Clean code, zero bloat',
        desc: 'We write every line ourselves. No WordPress drag-and-drop, no bloated page builders. Just lean, maintainable code you can grow with.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=520&h=340&fit=crop&q=80'
    },
    {
        icon: Layers,
        title: 'One team, full ownership',
        desc: 'Design, development, SEO, and deployment all under one roof. No outsourcing, no handoff chaos.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=520&h=340&fit=crop&q=80'
    },
    {
        icon: Headphones,
        title: 'Post-launch support',
        desc: "We don't disappear after going live. Monthly maintenance, updates, and a direct line to your developer.",
        image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=520&h=340&fit=crop&q=80'
    }
];

const checkpoints = [
    'No templates — everything is custom-built',
    'Dedicated project manager from day one',
    'Google-ranking-ready from launch',
    'Fast delivery without cutting corners',
    'Transparent pricing, no hidden fees',
    '100% owned by you — full code handover'
];

const processSteps = [
    {
        step: '01',
        title: 'Discovery Call',
        desc: 'We understand your business, goals, and what success looks like for you.'
    },
    {
        step: '02',
        title: 'Design & Prototype',
        desc: 'Wireframes and high-fidelity mockups for your approval before a single line of code is written.'
    },
    {
        step: '03',
        title: 'Build & Test',
        desc: 'Clean, hand-written code. Cross-browser tested, mobile-first, performance-optimised.'
    },
    {
        step: '04',
        title: 'Launch & Support',
        desc: 'Go live with confidence. We monitor, maintain, and improve after launch.'
    }
];

export default function TrustySection() {
    return (
        <section className="relative bg-[#020d1a] text-white overflow-x-clip">
            {/* Grid bg */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}
            />
            {/* Glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute top-1/3 right-[-200px] w-[400px] h-[400px] rounded-full bg-blue-600/[0.06] blur-[100px] z-0"
            />

            {/* Doodles */}
            <DoodleSparkle
                className="absolute top-24 left-8 w-7 h-7 pointer-events-none z-10"
                opacity={0.25}
                color="#22d3ee"
            />
            <DoodleStar
                className="absolute top-32 right-16 w-10 h-10 pointer-events-none z-10"
                opacity={0.2}
                color="#38bdf8"
            />
            <DoodleSpiral
                className="absolute bottom-40 left-6 w-12 h-12 pointer-events-none z-10"
                opacity={0.18}
                color="#22d3ee"
            />
            <DoodleLines
                className="absolute bottom-32 right-10 w-16 pointer-events-none rotate-12 z-10"
                opacity={0.15}
                color="#0ea5e9"
            />
            <DoodleWavyLine
                className="absolute top-48 left-3 h-32 pointer-events-none hidden lg:block z-10"
                opacity={0.15}
                color="#22d3ee"
            />

            {/* Separator line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-24 lg:py-36">
                {/* ── SECTION HEADER ── */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <span className="h-px w-8 bg-cyan-400/40" />
                        <span className="text-[11px] font-mono text-cyan-400/60 tracking-[0.2em] uppercase">
                            What We Do
                        </span>
                        <span className="h-px w-8 bg-cyan-400/40" />
                    </div>
                    <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-extrabold tracking-tight leading-[1.08] text-white">
                        Your complete{' '}
                        <span
                            className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
                            style={{ WebkitBackgroundClip: 'text' }}
                        >
                            digital partner.
                        </span>
                    </h2>
                    <p className="mt-5 text-base sm:text-lg text-white/40 font-light leading-relaxed max-w-2xl mx-auto">
                        From pixel-perfect websites to full-scale digital
                        marketing, we handle every layer of your online presence
                        so you can focus on running your business.
                    </p>
                </div>

                {/* ── SERVICES BENTO GRID ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
                    {services.map((s) => {
                        const Icon = s.icon;
                        return (
                            <div
                                key={s.title}
                                className={`group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden transition-all duration-300 ${s.borderHover} hover:bg-cyan-500/[0.03] ${s.span}`}
                            >
                                {/* Corner accent */}
                                <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-cyan-400/20 rounded-tl-2xl group-hover:border-cyan-400/50 transition-colors duration-300 z-10" />

                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={s.image}
                                        alt={s.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105 saturate-50 group-hover:saturate-75"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#020d1a]/30 via-transparent to-[#020d1a]" />
                                    {/* Scanline */}
                                    <div
                                        aria-hidden
                                        className="absolute inset-0 pointer-events-none"
                                        style={{
                                            backgroundImage:
                                                'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 4px)'
                                        }}
                                    />
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="inline-block rounded-full bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-sm px-3 py-1 text-[10px] font-mono text-cyan-300/70 tracking-wide">
                                            {s.tag}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 pt-4">
                                    <div
                                        className={`inline-flex items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] p-2.5 mb-4`}
                                    >
                                        <Icon
                                            size={18}
                                            className={s.iconColor}
                                        />
                                    </div>
                                    <h3 className="text-base font-semibold text-white/90 mb-2 group-hover:text-white transition-colors">
                                        {s.title}
                                    </h3>
                                    <p className="text-sm text-white/35 leading-relaxed">
                                        {s.desc}
                                    </p>
                                    <div className="mt-5 flex items-center gap-1.5 text-xs font-mono text-white/30 group-hover:text-cyan-400/70 transition-colors">
                                        <span>Learn more</span>
                                        <ArrowRight
                                            size={13}
                                            className="transition-transform duration-200 group-hover:translate-x-0.5"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ── WHY CHOOSE US ── */}
                <div className="mb-24">
                    <div className="max-w-2xl mb-14">
                        <div className="flex items-center gap-3 mb-5">
                            <span className="h-px w-8 bg-cyan-400/40" />
                            <span className="text-[11px] font-mono text-cyan-400/60 tracking-[0.2em] uppercase">
                                Why Trunal
                            </span>
                        </div>
                        <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] font-extrabold tracking-tight leading-[1.1] text-white">
                            We outperform every agency{' '}
                            <br className="hidden md:block" />
                            <span className="text-white/40 font-light">
                                in Varanasi. Here&apos;s how.
                            </span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Differentiator cards */}
                        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
                            {differentiators.map((d) => {
                                const Icon = d.icon;
                                return (
                                    <div
                                        key={d.title}
                                        className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden hover:border-cyan-500/25 hover:bg-cyan-500/[0.03] transition-all duration-300"
                                    >
                                        <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-cyan-400/20 rounded-tl-2xl group-hover:border-cyan-400/50 transition-colors duration-300 z-10" />
                                        <div className="relative h-36 overflow-hidden">
                                            <Image
                                                src={d.image}
                                                alt={d.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105 saturate-[0.4] group-hover:saturate-75"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-b from-[#020d1a]/20 to-[#020d1a]/90" />
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/[0.08] border border-cyan-500/20">
                                                    <Icon
                                                        size={15}
                                                        className="text-cyan-400 group-hover:text-cyan-300 transition-colors"
                                                    />
                                                </div>
                                                <h3 className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
                                                    {d.title}
                                                </h3>
                                            </div>
                                            <p className="text-sm text-white/35 leading-relaxed">
                                                {d.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Checklist card */}
                        <div
                            className="relative rounded-2xl border border-cyan-500/20 bg-white/[0.02] p-8 flex flex-col justify-between overflow-hidden"
                            style={{
                                boxShadow: '0 0 40px 2px rgba(34,211,238,0.05)'
                            }}
                        >
                            <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400/40 rounded-tl-2xl" />
                            <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400/40 rounded-br-2xl" />
                            <div>
                                <Clock
                                    size={22}
                                    className="text-cyan-400/50 mb-4"
                                />
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Everything you need. Nothing you don&apos;t.
                                </h3>
                                <p className="text-sm text-white/35 leading-relaxed mb-6">
                                    We strip away agency overhead and deliver
                                    only what moves the needle for your
                                    business.
                                </p>
                                <ul className="space-y-3.5 mb-8">
                                    {checkpoints.map((point) => (
                                        <li
                                            key={point}
                                            className="flex items-start gap-3 text-sm text-white/50"
                                        >
                                            <CheckCircle2
                                                size={16}
                                                className="text-cyan-400 mt-0.5 shrink-0"
                                            />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <a
                                href="#contact"
                                className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-bold text-[#020d1a] hover:bg-cyan-300 active:scale-[0.97] transition-all duration-200"
                                style={{
                                    boxShadow:
                                        '0 0 20px 2px rgba(34,211,238,0.25)'
                                }}
                            >
                                Get a Free Consultation
                                <ArrowRight
                                    size={15}
                                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* ── PROCESS STRIP ── */}
                <div
                    className="relative rounded-2xl border border-cyan-500/15 bg-white/[0.02] overflow-hidden"
                    style={{ boxShadow: '0 0 40px 2px rgba(34,211,238,0.04)' }}
                >
                    <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400/30 rounded-tl-2xl" />
                    <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400/30 rounded-tr-2xl" />
                    <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400/30 rounded-bl-2xl" />
                    <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400/30 rounded-br-2xl" />

                    <div className="px-8 py-6 border-b border-cyan-500/10">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-6 bg-cyan-400/40" />
                            <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-cyan-400/60">
                                Our process — from enquiry to live
                            </p>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-cyan-500/10">
                        {processSteps.map((p) => (
                            <div
                                key={p.step}
                                className="p-8 group hover:bg-cyan-500/[0.03] transition-colors duration-200"
                            >
                                <span className="text-4xl font-extrabold font-mono text-cyan-500/20 group-hover:text-cyan-400/40 transition-colors block mb-4 select-none tabular-nums">
                                    {p.step}
                                </span>
                                <h4 className="text-sm font-semibold text-white/90 mb-2">
                                    {p.title}
                                </h4>
                                <p className="text-sm text-white/35 leading-relaxed">
                                    {p.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
