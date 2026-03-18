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
        shortTitle: 'Custom Websites',
        tagline: 'Loads in under 1 second.',
        desc: 'Hand-crafted websites built from scratch — never from cheap templates. Every pixel is intentional.',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&h=520&fit=crop&q=85',
        tag: 'Core Service',
        accent: '#22d3ee',
        accentBg: 'rgba(34,211,238,0.08)',
        span: 'lg:col-span-2'
    },
    {
        icon: ShoppingCart,
        title: 'E-Commerce Solutions',
        shortTitle: 'Online Store',
        tagline: 'Built to sell.',
        desc: 'Conversion-optimised stores engineered to turn visitors into buyers — from product page to checkout.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&h=460&fit=crop&q=85',
        tag: 'E-Commerce',
        accent: '#60a5fa',
        accentBg: 'rgba(96,165,250,0.08)',
        span: ''
    },
    {
        icon: Smartphone,
        title: 'Mobile-First Web Apps',
        shortTitle: 'Web Apps',
        tagline: 'Works on every device.',
        desc: 'Progressive web apps that perform flawlessly on mobile, tablet, and desktop. Always.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&h=460&fit=crop&q=85',
        tag: 'Web Apps',
        accent: '#67e8f9',
        accentBg: 'rgba(103,232,249,0.08)',
        span: ''
    },
    {
        icon: Search,
        title: 'SEO & Performance Audits',
        shortTitle: 'SEO & Speed',
        tagline: 'Rank higher. Load faster.',
        desc: 'Deep Core Web Vitals analysis, crawlability fixes, and on-page SEO that outperforms your competitors.',
        image: 'https://images.unsplash.com/photo-1553484771-047a44eee27a?w=900&h=520&fit=crop&q=85',
        tag: 'Growth',
        accent: '#93c5fd',
        accentBg: 'rgba(147,197,253,0.08)',
        span: 'lg:col-span-2'
    },
    {
        icon: Paintbrush,
        title: 'UI/UX Design',
        shortTitle: 'Design',
        tagline: 'Users love using it.',
        desc: 'From wireframe to high-fidelity. We design interfaces people actually understand and enjoy.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&h=460&fit=crop&q=85',
        tag: 'Design',
        accent: '#22d3ee',
        accentBg: 'rgba(34,211,238,0.08)',
        span: ''
    },
    {
        icon: TrendingUp,
        title: 'Digital Marketing & Ads',
        shortTitle: 'Marketing',
        tagline: 'ROI-driven campaigns.',
        desc: 'Paid ads, social media strategy, and content marketing — your brand in front of the right people.',
        image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=700&h=460&fit=crop&q=85',
        tag: 'Marketing',
        accent: '#60a5fa',
        accentBg: 'rgba(96,165,250,0.08)',
        span: ''
    }
];

const differentiators = [
    {
        icon: Zap,
        number: '72hr',
        title: 'Ship in days, not months',
        desc: 'Our lean process means you get a production-ready website faster than any agency — no quality compromises.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=360&fit=crop&q=85'
    },
    {
        icon: Code2,
        number: '0%',
        title: 'Zero bloat, clean code',
        desc: 'Every line is hand-written. No WordPress page builders. Just lean, maintainable code you can grow with.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=360&fit=crop&q=85'
    },
    {
        icon: Layers,
        number: '1',
        title: 'One team, full ownership',
        desc: 'Design, dev, SEO, and deployment under one roof. No outsourcing, no handoff chaos, no finger-pointing.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=360&fit=crop&q=85'
    },
    {
        icon: Headphones,
        number: '24/7',
        title: 'Post-launch support',
        desc: "We don't disappear after go-live. Monthly maintenance, updates, and a direct line to your developer.",
        image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=600&h=360&fit=crop&q=85'
    }
];

const checkpoints = [
    'No templates — everything custom-built',
    'Dedicated project manager from day one',
    'Google-ranking-ready from launch',
    'Fast delivery, no corners cut',
    'Transparent pricing, zero hidden fees',
    '100% yours — full code handover'
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
        desc: 'Wireframes and mockups approved before a single line of code is written.'
    },
    {
        step: '03',
        title: 'Build & Test',
        desc: 'Hand-written code. Cross-browser tested, mobile-first, performance-optimised.'
    },
    {
        step: '04',
        title: 'Launch & Support',
        desc: 'Go live with confidence. We monitor, maintain, and improve post-launch.'
    }
];

const stats = [
    { value: '150+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '3×', label: 'Faster Than Agencies' },
    { value: '₹0', label: 'Hidden Charges' }
];

export default function TrustySection() {
    return (
        <section className="relative bg-[#020d1a] text-white overflow-x-clip">
            {/* ── GRID BG ── */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(34,211,238,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.025) 1px, transparent 1px)',
                    backgroundSize: '64px 64px'
                }}
            />

            {/* ── AMBIENT GLOWS ── */}
            <div
                aria-hidden
                className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-cyan-500/[0.04] blur-[120px] rounded-full z-0"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute top-1/2 right-[-300px] w-[600px] h-[600px] bg-blue-600/[0.05] blur-[140px] rounded-full z-0"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute bottom-0 left-[-200px] w-[500px] h-[500px] bg-cyan-400/[0.04] blur-[120px] rounded-full z-0"
            />

            {/* ── DOODLES ── */}
            <DoodleSparkle
                className="absolute top-24 left-8 w-7 h-7 pointer-events-none z-10"
                opacity={0.22}
                color="#22d3ee"
            />
            <DoodleStar
                className="absolute top-32 right-16 w-10 h-10 pointer-events-none z-10"
                opacity={0.18}
                color="#38bdf8"
            />
            <DoodleSpiral
                className="absolute bottom-40 left-6 w-12 h-12 pointer-events-none z-10"
                opacity={0.15}
                color="#22d3ee"
            />
            <DoodleLines
                className="absolute bottom-32 right-10 w-16 pointer-events-none rotate-12 z-10"
                opacity={0.13}
                color="#0ea5e9"
            />
            <DoodleWavyLine
                className="absolute top-48 left-3 h-32 pointer-events-none hidden lg:block z-10"
                opacity={0.13}
                color="#22d3ee"
            />

            {/* ── SEPARATOR ── */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />

            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-24 lg:py-36 space-y-28 lg:space-y-40">
                {/* ══════════════════════════════════
                    SECTION HEADER
                ══════════════════════════════════ */}
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-3 mb-7">
                        <span className="h-px w-10 bg-cyan-400/40" />
                        <span className="text-[10px] font-mono text-cyan-400/60 tracking-[0.25em] uppercase">
                            What We Do
                        </span>
                        <span className="h-px w-10 bg-cyan-400/40" />
                    </div>

                    {/* Big bold headline — scannable at a glance */}
                    <h2
                        className="font-black tracking-tighter leading-[1.0] text-white mb-6"
                        style={{
                            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                            fontFamily: "'Syne', sans-serif",
                            letterSpacing: '-0.03em'
                        }}
                    >
                        Your complete{' '}
                        <span
                            style={{
                                background:
                                    'linear-gradient(135deg, #22d3ee 0%, #60a5fa 50%, #22d3ee 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            digital partner.
                        </span>
                    </h2>

                    <p
                        className="text-lg sm:text-xl text-white/40 font-light leading-relaxed max-w-2xl mx-auto tracking-wide"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                        From pixel-perfect websites to full-scale digital
                        marketing — we handle every layer of your online
                        presence.
                    </p>

                    {/* STAT ROW — instant credibility signal */}
                    <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
                        {stats.map((s) => (
                            <div
                                key={s.label}
                                className="bg-[#020d1a] px-6 py-5 text-center group hover:bg-cyan-500/[0.04] transition-colors duration-200"
                            >
                                <div
                                    className="font-black text-white leading-none mb-1.5"
                                    style={{
                                        fontSize:
                                            'clamp(1.6rem, 3.5vw, 2.4rem)',
                                        fontFamily: "'Syne', sans-serif",
                                        background:
                                            'linear-gradient(135deg, #22d3ee, #60a5fa)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    }}
                                >
                                    {s.value}
                                </div>
                                <div
                                    className="text-xs text-white/35 tracking-wide font-medium uppercase"
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        letterSpacing: '0.08em'
                                    }}
                                >
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ══════════════════════════════════
                    SERVICES BENTO GRID
                ══════════════════════════════════ */}
                <div>
                    <div className="flex items-center gap-3 mb-10">
                        <span className="h-px w-10 bg-cyan-400/40" />
                        <span className="text-[10px] font-mono text-cyan-400/60 tracking-[0.25em] uppercase">
                            Services
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services.map((s) => {
                            const Icon = s.icon;
                            return (
                                <div
                                    key={s.title}
                                    className={`group relative rounded-2xl border border-white/[0.07] bg-[#030f1c] overflow-hidden transition-all duration-300 hover:border-cyan-400/25 ${s.span}`}
                                    style={
                                        {
                                            '--accent': s.accent
                                        } as React.CSSProperties
                                    }
                                >
                                    {/* Corner accents */}
                                    <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-cyan-400/20 rounded-tl-2xl group-hover:border-cyan-400/60 transition-colors duration-300 z-10" />
                                    <span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-white/[0.05] rounded-br-2xl group-hover:border-cyan-400/30 transition-colors duration-300 z-10" />

                                    {/* Image */}
                                    <div
                                        className="relative overflow-hidden"
                                        style={{
                                            height: s.span ? '220px' : '180px'
                                        }}
                                    >
                                        <Image
                                            src={s.image}
                                            alt={s.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-[1.06] saturate-[0.45] group-hover:saturate-[0.7]"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                        {/* Dark gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-[#030f1c]/50 via-transparent to-[#030f1c]" />
                                        {/* Scanline texture */}
                                        <div
                                            aria-hidden
                                            className="absolute inset-0 pointer-events-none opacity-30"
                                            style={{
                                                backgroundImage:
                                                    'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px)'
                                            }}
                                        />
                                        {/* Tag badge */}
                                        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                                            <span
                                                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-mono tracking-widest border backdrop-blur-sm"
                                                style={{
                                                    background: `${s.accentBg}`,
                                                    borderColor: `${s.accent}40`,
                                                    color: s.accent
                                                }}
                                            >
                                                {s.tag}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 pt-4">
                                        <div className="flex items-start gap-3 mb-3">
                                            <div
                                                className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] transition-all duration-300 group-hover:border-cyan-400/30"
                                                style={{
                                                    background: s.accentBg
                                                }}
                                            >
                                                <Icon
                                                    size={16}
                                                    style={{ color: s.accent }}
                                                />
                                            </div>
                                            <div>
                                                <p
                                                    className="text-[10px] font-mono tracking-wider mb-0.5 opacity-50"
                                                    style={{
                                                        color: s.accent,
                                                        fontFamily:
                                                            "'DM Mono', monospace"
                                                    }}
                                                >
                                                    {s.tagline}
                                                </p>
                                                <h3
                                                    className="text-base font-bold text-white/90 group-hover:text-white transition-colors leading-tight"
                                                    style={{
                                                        fontFamily:
                                                            "'Syne', sans-serif"
                                                    }}
                                                >
                                                    {s.title}
                                                </h3>
                                            </div>
                                        </div>
                                        <p
                                            className="text-sm text-white/35 leading-relaxed pl-12"
                                            style={{
                                                fontFamily:
                                                    "'DM Sans', sans-serif"
                                            }}
                                        >
                                            {s.desc}
                                        </p>
                                        <div className="mt-5 pl-12 flex items-center gap-1.5 text-xs font-mono text-white/25 group-hover:text-cyan-400/70 transition-colors duration-200">
                                            <span>Learn more</span>
                                            <ArrowRight
                                                size={12}
                                                className="transition-transform duration-200 group-hover:translate-x-0.5"
                                            />
                                        </div>
                                    </div>

                                    {/* Bottom accent line on hover */}
                                    <div
                                        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{
                                            background: `linear-gradient(90deg, transparent, ${s.accent}60, transparent)`
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ══════════════════════════════════
                    WHY CHOOSE US
                ══════════════════════════════════ */}
                <div>
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <span className="h-px w-10 bg-cyan-400/40" />
                                <span className="text-[10px] font-mono text-cyan-400/60 tracking-[0.25em] uppercase">
                                    Why Trunal
                                </span>
                            </div>
                            <h2
                                className="font-black tracking-tight leading-[1.05] text-white"
                                style={{
                                    fontSize: 'clamp(2rem, 5vw, 3.8rem)',
                                    fontFamily: "'Syne', sans-serif",
                                    letterSpacing: '-0.025em'
                                }}
                            >
                                We outperform every
                                <br />
                                <span
                                    className="text-white/30 font-light"
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: '0.75em'
                                    }}
                                >
                                    agency in Varanasi. Here's how.
                                </span>
                            </h2>
                        </div>

                        {/* CTA in header */}
                        <a
                            href="/contact"
                            className="group shrink-0 inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold text-[#020d1a] bg-cyan-400 hover:bg-cyan-300 transition-all duration-200 active:scale-[0.97]"
                            style={{
                                boxShadow: '0 0 30px 4px rgba(34,211,238,0.2)',
                                fontFamily: "'Syne', sans-serif"
                            }}
                        >
                            Free Consultation
                            <ArrowRight
                                size={15}
                                className="transition-transform duration-200 group-hover:translate-x-0.5"
                            />
                        </a>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-5">
                        {/* Differentiator cards */}
                        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
                            {differentiators.map((d) => {
                                const Icon = d.icon;
                                return (
                                    <div
                                        key={d.title}
                                        className="group relative rounded-2xl border border-white/[0.07] bg-[#030f1c] overflow-hidden hover:border-cyan-500/25 transition-all duration-300"
                                    >
                                        <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-cyan-400/20 rounded-tl-2xl group-hover:border-cyan-400/50 transition-colors duration-300 z-10" />
                                        <div className="relative h-40 overflow-hidden">
                                            <Image
                                                src={d.image}
                                                alt={d.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-[1.06] saturate-[0.35] group-hover:saturate-[0.65]"
                                                sizes="(max-width: 640px) 100vw, 50vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-b from-[#030f1c]/30 to-[#030f1c]/95" />
                                            {/* Big number overlay */}
                                            <div
                                                className="absolute top-3 right-4 font-black text-white/[0.07] group-hover:text-white/[0.12] transition-colors duration-300 leading-none select-none"
                                                style={{
                                                    fontSize:
                                                        'clamp(3rem, 8vw, 5rem)',
                                                    fontFamily:
                                                        "'Syne', sans-serif",
                                                    letterSpacing: '-0.04em'
                                                }}
                                            >
                                                {d.number}
                                            </div>
                                        </div>
                                        <div className="p-5 pt-4">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/[0.08] border border-cyan-500/20 group-hover:border-cyan-400/40 transition-colors">
                                                    <Icon
                                                        size={14}
                                                        className="text-cyan-400 group-hover:text-cyan-300 transition-colors"
                                                    />
                                                </div>
                                                <h3
                                                    className="text-sm font-bold text-white/90 group-hover:text-white transition-colors"
                                                    style={{
                                                        fontFamily:
                                                            "'Syne', sans-serif"
                                                    }}
                                                >
                                                    {d.title}
                                                </h3>
                                            </div>
                                            <p
                                                className="text-sm text-white/35 leading-relaxed pl-11"
                                                style={{
                                                    fontFamily:
                                                        "'DM Sans', sans-serif"
                                                }}
                                            >
                                                {d.desc}
                                            </p>
                                        </div>
                                        <div
                                            className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{
                                                background:
                                                    'linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent)'
                                            }}
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        {/* Checklist card — premium signal */}
                        <div
                            className="relative rounded-2xl border border-cyan-500/25 bg-[#030f1c] p-7 flex flex-col justify-between overflow-hidden"
                            style={{
                                boxShadow:
                                    '0 0 60px 4px rgba(34,211,238,0.06), inset 0 1px 0 rgba(34,211,238,0.08)'
                            }}
                        >
                            {/* Corner accents */}
                            <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-2xl" />
                            <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400/50 rounded-br-2xl" />
                            {/* Subtle glow */}
                            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cyan-500/[0.04] to-transparent pointer-events-none" />

                            <div>
                                <div className="flex items-center gap-2 mb-5">
                                    <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/25">
                                        <Clock
                                            size={15}
                                            className="text-cyan-400"
                                        />
                                    </div>
                                    <span className="text-[10px] font-mono text-cyan-400/60 tracking-[0.2em] uppercase">
                                        Why Us
                                    </span>
                                </div>
                                <h3
                                    className="text-2xl font-black text-white mb-2 leading-tight"
                                    style={{
                                        fontFamily: "'Syne', sans-serif",
                                        letterSpacing: '-0.02em'
                                    }}
                                >
                                    Everything you need.
                                    <br />
                                    <span
                                        className="text-white/40 font-light text-xl"
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif"
                                        }}
                                    >
                                        Nothing you don't.
                                    </span>
                                </h3>
                                <p
                                    className="text-sm text-white/35 leading-relaxed mb-7"
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif"
                                    }}
                                >
                                    We strip away agency overhead and deliver
                                    only what moves the needle for your
                                    business.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {checkpoints.map((point) => (
                                        <li
                                            key={point}
                                            className="flex items-start gap-3 text-sm text-white/50 group/item"
                                        >
                                            <CheckCircle2
                                                size={15}
                                                className="text-cyan-400 mt-0.5 shrink-0 group-hover/item:text-cyan-300 transition-colors"
                                            />
                                            <span
                                                style={{
                                                    fontFamily:
                                                        "'DM Sans', sans-serif"
                                                }}
                                            >
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href="/contact"
                                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-cyan-400 px-6 py-4 text-sm font-bold text-[#020d1a] hover:bg-cyan-300 active:scale-[0.97] transition-all duration-200"
                                style={{
                                    boxShadow:
                                        '0 0 30px 4px rgba(34,211,238,0.25)',
                                    fontFamily: "'Syne', sans-serif"
                                }}
                            >
                                Get a Free Consultation
                                <ArrowRight
                                    size={14}
                                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* ══════════════════════════════════
                    PROCESS STRIP
                ══════════════════════════════════ */}
                <div>
                    <div className="flex items-center gap-3 mb-10">
                        <span className="h-px w-10 bg-cyan-400/40" />
                        <span className="text-[10px] font-mono text-cyan-400/60 tracking-[0.25em] uppercase">
                            Our Process
                        </span>
                    </div>

                    {/* Section heading above strip */}
                    <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                        <h2
                            className="font-black text-white leading-tight"
                            style={{
                                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                                fontFamily: "'Syne', sans-serif",
                                letterSpacing: '-0.02em'
                            }}
                        >
                            From enquiry to live —{' '}
                            <span
                                className="text-white/30 font-light"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                in just 4 steps.
                            </span>
                        </h2>
                    </div>

                    <div
                        className="relative rounded-2xl border border-cyan-500/15 bg-[#030f1c] overflow-hidden"
                        style={{
                            boxShadow: '0 0 60px 4px rgba(34,211,238,0.04)'
                        }}
                    >
                        {/* Corner accents */}
                        <span className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2 border-cyan-400/35 rounded-tl-2xl" />
                        <span className="absolute top-0 right-0 w-7 h-7 border-t-2 border-r-2 border-cyan-400/35 rounded-tr-2xl" />
                        <span className="absolute bottom-0 left-0 w-7 h-7 border-b-2 border-l-2 border-cyan-400/35 rounded-bl-2xl" />
                        <span className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2 border-cyan-400/35 rounded-br-2xl" />

                        {/* Progress line on desktop */}
                        <div className="hidden lg:block absolute top-[56px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.05]">
                            {processSteps.map((p, i) => (
                                <div
                                    key={p.step}
                                    className="relative p-8 group hover:bg-cyan-500/[0.03] transition-colors duration-200"
                                >
                                    {/* Step number */}
                                    <div className="flex items-center gap-3 mb-5">
                                        <div
                                            className="h-10 w-10 rounded-full flex items-center justify-center text-xs font-bold font-mono text-[#020d1a] bg-cyan-400/80 group-hover:bg-cyan-400 transition-colors shrink-0"
                                            style={{
                                                fontFamily:
                                                    "'DM Mono', monospace"
                                            }}
                                        >
                                            {p.step}
                                        </div>
                                        {/* Connector dot */}
                                        {i < processSteps.length - 1 && (
                                            <div className="hidden lg:block h-px flex-1 bg-white/[0.06]" />
                                        )}
                                    </div>
                                    <h4
                                        className="text-base font-bold text-white/90 mb-2.5 group-hover:text-white transition-colors"
                                        style={{
                                            fontFamily: "'Syne', sans-serif"
                                        }}
                                    >
                                        {p.title}
                                    </h4>
                                    <p
                                        className="text-sm text-white/35 leading-relaxed"
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif"
                                        }}
                                    >
                                        {p.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Bottom CTA bar */}
                        <div className="border-t border-white/[0.05] px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <p
                                className="text-sm text-white/35"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                Ready to get started?{' '}
                                <span className="text-cyan-400">
                                    Most projects kick off within 48 hours.
                                </span>
                            </p>
                            <a
                                href="/contact"
                                className="group inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                                style={{ fontFamily: "'Syne', sans-serif" }}
                            >
                                Book a call
                                <ArrowRight
                                    size={14}
                                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom separator */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        </section>
    );
}
