'use client';

import Image from 'next/image';
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

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const services = [
    {
        icon: Globe,
        title: 'Custom Website Development',
        desc: 'Hand-crafted websites that load in under a second. Every pixel is intentionally built from scratch, not from cheap templates.',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&h=420&fit=crop&q=80',
        tag: 'Core Service',
        accent: 'from-violet-500/20 to-violet-500/0',
        iconColor: 'text-violet-400',
        span: 'lg:col-span-2'
    },
    {
        icon: ShoppingCart,
        title: 'E-Commerce Solutions',
        desc: 'Conversion-optimised stores built on battle-tested stacks. From product pages to checkout  engineered to sell.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=380&fit=crop&q=80',
        tag: 'E-Commerce',
        accent: 'from-cyan-500/20 to-cyan-500/0',
        iconColor: 'text-cyan-400',
        span: ''
    },
    {
        icon: Smartphone,
        title: 'Mobile-First Web Apps',
        desc: 'Progressive web apps and responsive builds that perform flawlessly across every device phone, tablet, desktop.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=380&fit=crop&q=80',
        tag: 'Web Apps',
        accent: 'from-emerald-500/20 to-emerald-500/0',
        iconColor: 'text-emerald-400',
        span: ''
    },
    {
        icon: Search,
        title: 'SEO & Performance Audits',
        desc: 'We dig deep into Core Web Vitals, crawlability, and on-page signals to rank you higher and load faster than competitors.',
        image: 'https://images.unsplash.com/photo-1553484771-047a44eee27a?w=700&h=420&fit=crop&q=80',
        tag: 'Growth',
        accent: 'from-amber-500/20 to-amber-500/0',
        iconColor: 'text-amber-400',
        span: 'lg:col-span-2'
    },
    {
        icon: Paintbrush,
        title: 'UI/UX Design',
        desc: 'From wireframe to high-fidelity prototype. We design interfaces users actually understand and enjoy using.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=380&fit=crop&q=80',
        tag: 'Design',
        accent: 'from-pink-500/20 to-pink-500/0',
        iconColor: 'text-pink-400',
        span: ''
    },
    {
        icon: TrendingUp,
        title: 'Digital Marketing & Ads',
        desc: 'ROI-driven paid campaigns, social media strategy, and content marketing to put your brand in front of the right audience.',
        image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&h=380&fit=crop&q=80',
        tag: 'Marketing',
        accent: 'from-orange-500/20 to-orange-500/0',
        iconColor: 'text-orange-400',
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
        desc: 'Design, development, SEO, and deployment all under one roof. No outsourcing, no handoff chaos. One point of contact, always.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=520&h=340&fit=crop&q=80'
    },
    {
        icon: Headphones,
        title: 'Post-launch support',
        desc: "We don't disappear after going live. Monthly maintenance, updates, and a direct line to your developer not a ticketing system.",
        image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=520&h=340&fit=crop&q=80'
    }
];

const checkpoints = [
    'No templates everything is custom-built',
    'Dedicated project manager from day one',
    'Google-ranking-ready from launch',
    'Fast delivery without cutting corners',
    'Transparent pricing, no hidden fees',
    '100% owned by you full code handover'
];

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function TrustySection() {
    return (
        <section className="relative bg-[#09090b] text-white">
            {/* Subtle top separator */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-24 lg:py-36">
                {/* ── SECTION HEADER ── */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[11px] font-medium tracking-[0.15em] uppercase text-zinc-500 mb-6">
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                        What We Do
                    </span>
                    <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-semibold tracking-tight leading-[1.08] text-white">
                        Your complete digital{' '}
                        <span className="whyus-gradient">partner.</span>
                    </h2>
                    <p className="mt-5 text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
                        From pixel-perfect websites to full-scale digital
                        marketing, We handle every layer of your online presence
                        so you can focus on running your business.
                    </p>
                </div>

                {/* ── SERVICES BENTO GRID ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
                    {services.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <div
                                key={s.title}
                                className={`group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.04] ${s.span}`}
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={s.image}
                                        alt={s.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#09090b]" />
                                    {/* Tag */}
                                    <div className="absolute top-4 left-4">
                                        <span className="inline-block rounded-full bg-black/50 backdrop-blur-sm border border-white/10 px-3 py-1 text-[10px] font-medium text-white/70 tracking-wide">
                                            {s.tag}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 pt-4">
                                    <div
                                        className={`inline-flex items-center justify-center rounded-lg bg-gradient-to-br ${s.accent} border border-white/[0.06] p-2.5 mb-4`}
                                    >
                                        <Icon
                                            size={18}
                                            className={s.iconColor}
                                        />
                                    </div>
                                    <h3 className="text-base font-semibold text-zinc-100 mb-2 group-hover:text-white transition-colors">
                                        {s.title}
                                    </h3>
                                    <p className="text-sm text-zinc-500 leading-relaxed">
                                        {s.desc}
                                    </p>
                                    <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors">
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
                    {/* Sub-header */}
                    <div className="max-w-2xl mb-14">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[11px] font-medium tracking-[0.15em] uppercase text-zinc-500 mb-5">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            Why Trunal
                        </span>
                        <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] font-semibold tracking-tight leading-[1.1] text-white">
                            We outperform every agency{' '}
                            <br className="hidden md:block" />
                            <span className="text-zinc-400 font-light">
                                in Varanasi. Here's how.
                            </span>
                        </h2>
                    </div>

                    {/* 2-col layout: cards left, checklist right */}
                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Differentiator cards — 2 col */}
                        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
                            {differentiators.map((d) => {
                                const Icon = d.icon;
                                return (
                                    <div
                                        key={d.title}
                                        className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden hover:border-white/[0.14] transition-all duration-300"
                                    >
                                        {/* Mini image */}
                                        <div className="relative h-36 overflow-hidden">
                                            <Image
                                                src={d.image}
                                                alt={d.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105 saturate-[0.6] group-hover:saturate-100"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-[#09090b]/90" />
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] border border-white/[0.07]">
                                                    <Icon
                                                        size={15}
                                                        className="text-zinc-400 group-hover:text-white transition-colors"
                                                    />
                                                </div>
                                                <h3 className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                                                    {d.title}
                                                </h3>
                                            </div>
                                            <p className="text-sm text-zinc-500 leading-relaxed">
                                                {d.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Right: checklist card */}
                        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 flex flex-col justify-between">
                            <div>
                                <div className="mb-6">
                                    <Clock
                                        size={22}
                                        className="text-zinc-500 mb-4"
                                    />
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        Everything you need. Nothing you don't.
                                    </h3>
                                    <p className="text-sm text-zinc-500 leading-relaxed">
                                        We strip away agency overhead and
                                        deliver only what moves the needle for
                                        your business.
                                    </p>
                                </div>
                                <ul className="space-y-3.5 mb-8">
                                    {checkpoints.map((point) => (
                                        <li
                                            key={point}
                                            className="flex items-start gap-3 text-sm text-zinc-400"
                                        >
                                            <CheckCircle2
                                                size={16}
                                                className="text-emerald-400 mt-0.5 shrink-0"
                                            />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <a
                                href="#contact"
                                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 active:scale-[0.97] transition-all duration-200"
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
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden">
                    <div className="px-8 py-8 border-b border-white/[0.06]">
                        <p className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-500">
                            Our process from enquiry to live
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
                        {[
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
                        ].map((p) => (
                            <div key={p.step} className="p-8 group">
                                <span className="text-4xl font-semibold text-zinc-800 group-hover:text-zinc-600 transition-colors block mb-4 select-none">
                                    {p.step}
                                </span>
                                <h4 className="text-sm font-semibold text-zinc-200 mb-2">
                                    {p.title}
                                </h4>
                                <p className="text-sm text-zinc-500 leading-relaxed">
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
