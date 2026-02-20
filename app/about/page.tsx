'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Navbar from '../components/landing/Navbar';
import SmoothScrolling from '../components/flows/SmoothScrolling';
import Footer from '../components/landing/FooterSection';

/* ─── InView hook ─── */
function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    obs.disconnect();
                }
            },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return { ref, visible };
}

/* ─── Animated counter ─── */
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
    const { ref, visible } = useInView(0.2);
    const [val, setVal] = useState(0);
    useEffect(() => {
        if (!visible) return;
        let cur = 0;
        const step = Math.max(1, Math.ceil(to / 45));
        const id = setInterval(() => {
            cur = Math.min(cur + step, to);
            setVal(cur);
            if (cur >= to) clearInterval(id);
        }, 28);
        return () => clearInterval(id);
    }, [visible, to]);
    return (
        <span ref={ref}>
            {val}
            {suffix}
        </span>
    );
}

/* ─── Skill bar ─── */
function SkillBar({
    label,
    pct,
    delay = 0
}: {
    label: string;
    pct: number;
    delay?: number;
}) {
    const { ref, visible } = useInView(0.1);
    return (
        <div ref={ref} className="space-y-1.5">
            <div className="flex justify-between text-[11px] font-mono tracking-widest">
                <span className="text-cyan-300/80">{label}</span>
                <span className="text-white/40">{pct}%</span>
            </div>
            <div className="relative h-[3px] w-full bg-white/[0.07] rounded-full overflow-hidden">
                <div
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 transition-all ease-out"
                    style={{
                        width: visible ? `${pct}%` : '0%',
                        transitionDuration: '1100ms',
                        transitionDelay: visible ? `${delay}ms` : '0ms',
                        boxShadow: visible
                            ? '0 0 8px 1px rgba(34,211,238,0.5)'
                            : 'none'
                    }}
                />
            </div>
        </div>
    );
}

/* ─── Stat card ─── */
function StatCard({
    value,
    suffix,
    label,
    delay = 0
}: {
    value: number;
    suffix?: string;
    label: string;
    delay?: number;
}) {
    const { ref, visible } = useInView(0.1);
    return (
        <div
            ref={ref}
            className="relative border border-cyan-500/20 bg-white/[0.03] rounded-xl p-5 flex flex-col items-center gap-1 overflow-hidden transition-all duration-700"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${delay}ms`
            }}
        >
            <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-cyan-400/60 rounded-tl-xl" />
            <span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-cyan-400/60 rounded-br-xl" />
            <p className="text-3xl font-extrabold font-mono text-cyan-300 tabular-nums">
                <Counter to={value} suffix={suffix ?? ''} />
            </p>
            <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] text-center">
                {label}
            </p>
        </div>
    );
}

/* ─── Service tag ─── */
function ServiceTag({ text }: { text: string }) {
    return (
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/[0.06] text-cyan-300/90 text-[11px] font-mono tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 animate-pulse" />
            {text}
        </span>
    );
}

/* ─── Timeline item ─── */
function TimelineItem({
    year,
    title,
    desc,
    delay = 0
}: {
    year: string;
    title: string;
    desc: string;
    delay?: number;
}) {
    const { ref, visible } = useInView(0.1);
    return (
        <div
            ref={ref}
            className="relative pl-8 transition-all duration-700"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(-20px)',
                transitionDelay: `${delay}ms`
            }}
        >
            {/* vertical line */}
            <span className="absolute left-[7px] top-3 bottom-0 w-px bg-cyan-500/20" />
            {/* dot */}
            <span className="absolute left-0 top-[10px] w-3.5 h-3.5 rounded-full border-2 border-cyan-400 bg-[#020d1a] shadow-[0_0_8px_2px_rgba(34,211,238,0.4)]" />
            <p className="text-[10px] font-mono text-cyan-400/60 tracking-widest mb-0.5">
                {year}
            </p>
            <p className="text-sm font-semibold text-white/90">{title}</p>
            <p className="text-xs text-white/40 mt-0.5 leading-relaxed">
                {desc}
            </p>
        </div>
    );
}

/* ══════════════════════════════════════
   MAIN ABOUT PAGE
══════════════════════════════════════ */
export default function AboutPage() {
    const { ref: bioRef, visible: bioVisible } = useInView(0.05);
    const { ref: imgRef, visible: imgVisible } = useInView(0.05);

    const skills = [
        { label: 'Full-Stack Development', pct: 96 },
        { label: 'UI / UX Design Systems', pct: 91 },
        { label: 'Performance Engineering', pct: 88 },
        { label: 'Cloud & DevOps', pct: 84 },
        { label: 'AI / Automation Integration', pct: 80 }
    ];

    const services = [
        'Next.js & React',
        'Brand Identity',
        'Mobile-First UI',
        'API Architecture',
        'SEO & Performance',
        'E-Commerce',
        'SaaS Products',
        'AI Integrations'
    ];

    const timeline = [
        {
            year: '2025',
            title: 'Founded Trunal',
            desc: 'Started as a freelance dev studio — two clients, zero budget, unlimited vision.'
        },
        {
            year: '2026',
            title: '50+ Projects Shipped',
            desc: 'From MVPs to full-scale platforms — consistently on time and over expectations.'
        },
        {
            year: 'VISION',
            title: 'Now',
            desc: 'Building the future — one pixel-perfect product at a time.'
        }
    ];

    return (
        <div>
            <SmoothScrolling>
                <Navbar />
                <main className="relative min-h-screen bg-[#020d1a] text-white overflow-x-hidden selection:bg-cyan-500/30 pt-10">
                    {/* ── Background grid (CSS-only, zero JS cost) ── */}
                    <div
                        aria-hidden
                        className="pointer-events-none fixed inset-0 z-0"
                        style={{
                            backgroundImage:
                                'linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px)',
                            backgroundSize: '60px 60px'
                        }}
                    />

                    {/* ── Glow orbs (static, no animation — low-end friendly) ── */}
                    <div
                        aria-hidden
                        className="pointer-events-none fixed top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-cyan-500/[0.07] blur-[120px] z-0"
                    />
                    <div
                        aria-hidden
                        className="pointer-events-none fixed bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-blue-600/[0.07] blur-[100px] z-0"
                    />

                    <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8 py-20 sm:py-28">
                        {/* ══ HERO ══ */}
                        <div className="mb-24">
                            {/* top badge */}
                            <div className="flex items-center gap-3 mb-8">
                                <span className="h-px w-10 bg-cyan-400/50" />
                                <span className="text-[11px] font-mono text-cyan-400/80 tracking-[0.3em] uppercase">
                                    About / The Vision
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
                                <span className="block text-white/90">
                                    We don&apos;t just
                                </span>
                                <span className="block relative">
                                    <span
                                        className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
                                        style={{ WebkitBackgroundClip: 'text' }}
                                    >
                                        build websites.
                                    </span>
                                </span>
                                <span className="block text-white/50 text-2xl sm:text-4xl lg:text-5xl font-light mt-2">
                                    We architect digital experiences.
                                </span>
                            </h1>

                            <p className="max-w-2xl text-base sm:text-lg text-white/40 leading-relaxed font-light">
                                Trunal is a forward-thinking web development
                                agency fusing engineering precision with design
                                excellence — building products that perform,
                                convert, and endure.
                            </p>
                        </div>

                        {/* ══ FOUNDER SECTION ══ */}
                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-28">
                            {/* Photo side */}
                            <div
                                ref={imgRef}
                                className="relative flex justify-center lg:justify-start transition-all duration-1000"
                                style={{
                                    opacity: imgVisible ? 1 : 0,
                                    transform: imgVisible
                                        ? 'translateX(0) scale(1)'
                                        : 'translateX(-30px) scale(0.96)'
                                }}
                            >
                                {/* Outer decorative frame */}
                                <div className="relative w-[280px] sm:w-[320px]">
                                    {/* Corner brackets */}
                                    <span className="absolute -top-3 -left-3 w-7 h-7 border-t-2 border-l-2 border-cyan-400/70 rounded-tl-lg z-20" />
                                    <span className="absolute -top-3 -right-3 w-7 h-7 border-t-2 border-r-2 border-cyan-400/70 rounded-tr-lg z-20" />
                                    <span className="absolute -bottom-3 -left-3 w-7 h-7 border-b-2 border-l-2 border-cyan-400/70 rounded-bl-lg z-20" />
                                    <span className="absolute -bottom-3 -right-3 w-7 h-7 border-b-2 border-r-2 border-cyan-400/70 rounded-br-lg z-20" />

                                    {/* Scan line overlay */}
                                    <div
                                        aria-hidden
                                        className="absolute inset-0 z-10 rounded-2xl pointer-events-none overflow-hidden"
                                        style={{
                                            background:
                                                'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px)'
                                        }}
                                    />

                                    {/* Cyan border glow */}
                                    <div
                                        className="absolute inset-0 rounded-2xl ring-1 ring-cyan-400/30 z-10"
                                        style={{
                                            boxShadow:
                                                '0 0 30px 4px rgba(34,211,238,0.12), inset 0 0 30px 4px rgba(34,211,238,0.04)'
                                        }}
                                    />

                                    {/* Photo */}
                                    <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-white/[0.03]">
                                        <Image
                                            src="/myphotoweb.png"
                                            alt="Tarun Srivastava — Founder & CEO of Trunal"
                                            fill
                                            className="object-cover object-top"
                                            sizes="(max-width: 640px) 280px, 320px"
                                            priority
                                        />
                                        {/* bottom gradient overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020d1a]/80 to-transparent z-10" />
                                    </div>

                                    {/* Name badge overlay */}
                                    <div className="absolute bottom-4 left-4 right-4 z-20 flex items-end justify-between">
                                        <div>
                                            <p className="text-xs font-mono text-cyan-400/70 tracking-[0.2em] uppercase mb-0.5">
                                                Founder & CEO
                                            </p>
                                            <p className="text-lg font-bold text-white tracking-tight">
                                                Tarun Srivastava
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-end gap-0.5">
                                            <span className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-400/60">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                                ONLINE
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bio side */}
                            <div
                                ref={bioRef}
                                className="space-y-7 transition-all duration-1000"
                                style={{
                                    opacity: bioVisible ? 1 : 0,
                                    transform: bioVisible
                                        ? 'translateX(0)'
                                        : 'translateX(30px)'
                                }}
                            >
                                <div>
                                    <p className="text-[11px] font-mono text-cyan-400/60 tracking-[0.25em] uppercase mb-3">
                                        — Who I Am
                                    </p>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-white/90 leading-snug mb-4">
                                        Turning complex ideas into{' '}
                                        <span className="text-cyan-300">
                                            scalable digital products
                                        </span>
                                    </h2>
                                    <p className="text-sm sm:text-base text-white/45 leading-relaxed">
                                        I&apos;m Tarun Srivastava — a developer,
                                        designer, and digital strategist with a
                                        deep obsession for the craft of building
                                        on the web. I founded Trunal to bridge
                                        the gap between technical excellence and
                                        business impact.
                                    </p>
                                </div>

                                <p className="text-sm text-white/40 leading-relaxed">
                                    Every project we take on is treated like our
                                    own startup — with strategic thinking, clean
                                    code, and pixel-precise design. We build
                                    fast, we build right, and we build to last.
                                </p>

                                {/* Skills */}
                                <div className="space-y-3.5 pt-1">
                                    {skills.map((s, i) => (
                                        <SkillBar
                                            key={s.label}
                                            label={s.label}
                                            pct={s.pct}
                                            delay={i * 100}
                                        />
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* ══ STATS ROW ══ */}
                        <section className="mb-28">
                            <div className="flex items-center gap-3 mb-10">
                                <span className="h-px w-10 bg-cyan-400/40" />
                                <span className="text-[11px] font-mono text-cyan-400/60 tracking-[0.25em] uppercase">
                                    By the Numbers
                                </span>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                <StatCard
                                    value={50}
                                    suffix="+"
                                    label="Projects Delivered"
                                    delay={0}
                                />
                                <StatCard
                                    value={98}
                                    suffix="%"
                                    label="Client Satisfaction"
                                    delay={100}
                                />
                                <StatCard
                                    value={7}
                                    suffix="+"
                                    label="Years in Business"
                                    delay={200}
                                />
                                <StatCard
                                    value={3}
                                    suffix="x"
                                    label="Avg. Perf. Improvement"
                                    delay={300}
                                />
                            </div>
                        </section>

                        {/* ══ SERVICES ══ */}
                        <section className="mb-28">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-px w-10 bg-cyan-400/40" />
                                <span className="text-[11px] font-mono text-cyan-400/60 tracking-[0.25em] uppercase">
                                    What We Build
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2.5">
                                {services.map((s) => (
                                    <ServiceTag key={s} text={s} />
                                ))}
                            </div>
                        </section>

                        {/* ══ TIMELINE ══ */}
                        <section className="mb-28">
                            <div className="flex items-center gap-3 mb-10">
                                <span className="h-px w-10 bg-cyan-400/40" />
                                <span className="text-[11px] font-mono text-cyan-400/60 tracking-[0.25em] uppercase">
                                    The Journey
                                </span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
                                {timeline.map((t, i) => (
                                    <TimelineItem
                                        key={t.year}
                                        {...t}
                                        delay={i * 120}
                                    />
                                ))}
                            </div>
                        </section>

                        {/* ══ MANIFESTO / VALUES ══ */}
                        <section className="mb-28">
                            <div className="flex items-center gap-3 mb-10">
                                <span className="h-px w-10 bg-cyan-400/40" />
                                <span className="text-[11px] font-mono text-cyan-400/60 tracking-[0.25em] uppercase">
                                    Our Principles
                                </span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                                {[
                                    {
                                        icon: '◈',
                                        title: 'Performance First',
                                        desc: 'We optimize relentlessly. Sub-second loads are not a goal — they are the baseline.'
                                    },
                                    {
                                        icon: '◉',
                                        title: 'Design as Strategy',
                                        desc: 'Every pixel has purpose. We treat design as a business tool, not decoration.'
                                    },
                                    {
                                        icon: '◎',
                                        title: 'Built to Scale',
                                        desc: 'Architecture that grows with you — from MVP to millions of users without a rebuild.'
                                    }
                                ].map((v, i) => {
                                    const { ref, visible } = useInViewCard(i);
                                    return (
                                        <div
                                            key={v.title}
                                            ref={ref}
                                            className="relative border border-white/[0.07] bg-white/[0.02] rounded-2xl p-6 overflow-hidden group transition-all duration-700 hover:border-cyan-500/30 hover:bg-cyan-500/[0.03]"
                                            style={{
                                                opacity: visible ? 1 : 0,
                                                transform: visible
                                                    ? 'translateY(0)'
                                                    : 'translateY(24px)',
                                                transitionDelay: `${i * 120}ms`
                                            }}
                                        >
                                            <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400/30 rounded-tl-2xl group-hover:border-cyan-400/60 transition-colors duration-300" />
                                            <p className="text-2xl text-cyan-400 mb-4">
                                                {v.icon}
                                            </p>
                                            <p className="text-sm font-semibold text-white/90 mb-2">
                                                {v.title}
                                            </p>
                                            <p className="text-xs text-white/40 leading-relaxed">
                                                {v.desc}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* ══ CTA ══ */}
                        <section>
                            <div className="relative border border-cyan-500/20 bg-white/[0.02] rounded-2xl p-8 sm:p-12 text-center overflow-hidden">
                                {/* corner accents */}
                                <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-2xl" />
                                <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-2xl" />
                                <span className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-2xl" />
                                <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/50 rounded-br-2xl" />
                                {/* glow */}
                                <div
                                    aria-hidden
                                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] via-transparent to-blue-500/[0.04] pointer-events-none"
                                />

                                <p className="text-[11px] font-mono text-cyan-400/60 tracking-[0.3em] uppercase mb-4">
                                    Ready to Build?
                                </p>
                                <h2 className="text-2xl sm:text-4xl font-bold text-white/90 mb-3 leading-tight">
                                    Let&apos;s create something{' '}
                                    <span className="text-cyan-300">
                                        extraordinary
                                    </span>
                                    <span className="text-white/50">
                                        {' '}
                                        together.
                                    </span>
                                </h2>
                                <p className="text-sm text-white/40 mb-8 max-w-md mx-auto">
                                    Whether you have a full brief or just a raw
                                    idea — we&apos;re ready to architect your
                                    vision.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                    <a
                                        href="mailto:hello@trunal.dev"
                                        className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-cyan-400 text-[#020d1a] text-sm font-bold tracking-wide hover:bg-cyan-300 active:scale-95 transition-all duration-200"
                                    >
                                        Start a Project
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 14 14"
                                            fill="none"
                                            aria-hidden
                                        >
                                            <path
                                                d="M2 7h10M8 3l4 4-4 4"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-white/15 text-white/70 text-sm font-medium hover:border-cyan-400/40 hover:text-white transition-all duration-200"
                                    >
                                        View Our Work
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* ── Footer line ── */}
                        <div className="flex items-center gap-4 mt-16 pt-8 border-t border-white/[0.06]">
                            <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase">
                                © {new Date().getFullYear()} Trunal — All
                                systems operational
                            </span>
                            <span className="flex-1 h-px bg-white/[0.04]" />
                            <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400/60">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                LIVE
                            </span>
                        </div>
                    </div>
                </main>
            </SmoothScrolling>
            <Footer />
        </div>
    );
}

/* hook used inline in the values map (extracted to avoid rules-of-hooks violation) */
function useInViewCard(index: number) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return { ref, visible };
}
