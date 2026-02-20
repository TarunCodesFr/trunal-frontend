'use client';

import { useState } from 'react';
import { Star, Quote } from 'lucide-react';

interface Review {
    id: number;
    text: string;
    rating: number;
    author: {
        name: string;
        role: string;
        company: string;
        avatar: string;
        location: string;
    };
}

const reviews: Review[] = [
    {
        id: 1,
        text: 'Trunal completely transformed our online store. Sales jumped 3x within two months of launch. The team understood exactly what our customers needed.',
        rating: 5,
        author: {
            name: 'Priya Sharma',
            role: 'Founder',
            company: 'Kalakriti Boutique',
            avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=PriyaSharma&backgroundColor=b6e3f4',
            location: 'Varanasi'
        }
    },
    {
        id: 2,
        text: 'The website they built for our restaurant chain loads instantly even on 4G. Our table booking rate doubled and customers love the experience.',
        rating: 5,
        author: {
            name: 'Arjun Mehta',
            role: 'Director',
            company: 'Mehta Food Chain',
            avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=ArjunMehta&backgroundColor=ffdfbf',
            location: 'Varanasi'
        }
    },
    {
        id: 3,
        text: 'Finally a web agency that delivers on time. Our real estate portal went live in 6 weeks and the quality is outstanding. Zero shortcuts taken.',
        rating: 5,
        author: {
            name: 'Kavya Reddy',
            role: 'CEO',
            company: 'Reddy Properties',
            avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=KavyaReddy&backgroundColor=c0aede',
            location: 'Varanasi'
        }
    },
    {
        id: 4,
        text: 'We had tried two agencies before Trunal. Nobody else understood our vision like they did. The UI is clean, fast, and we get compliments every day.',
        rating: 5,
        author: {
            name: 'Rohit Verma',
            role: 'Co-Founder',
            company: 'VedTech Solutions',
            avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=RohitVerma&backgroundColor=d1d4f9',
            location: 'Varanasi'
        }
    },
    {
        id: 5,
        text: 'Our clinic needed a booking system integrated with our website. Trunal built it seamlessly. Patient registrations increased by 40% in the first month.',
        rating: 5,
        author: {
            name: 'Dr. Sneha Iyer',
            role: 'Medical Director',
            company: 'Iyer Health Clinic',
            avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=SnehaIyer&backgroundColor=b6e3f4',
            location: 'Varanasi'
        }
    },
    {
        id: 6,
        text: 'I was skeptical about a Varanasi agency handling enterprise work. They proved me completely wrong. World-class output, local pricing.',
        rating: 5,
        author: {
            name: 'Ankit Agarwal',
            role: 'CTO',
            company: 'Agarwal Finserv',
            avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=AnkitAgarwal&backgroundColor=ffd5dc',
            location: 'Varanasi'
        }
    },
    {
        id: 7,
        text: 'The SEO-optimized architecture they built helped us rank on page 1 for our target keywords in just 90 days. Organic traffic is up 5x.',
        rating: 5,
        author: {
            name: 'Neha Kulkarni',
            role: 'Marketing Head',
            company: 'Kulkarni Traders',
            avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=NehaKulkarni&backgroundColor=c0aede',
            location: 'Varanasi'
        }
    },
    {
        id: 8,
        text: 'Our e-learning platform handles 10,000 concurrent students without breaking a sweat. The performance engineering Trunal delivered is exceptional.',
        rating: 5,
        author: {
            name: 'Vikram Singh',
            role: 'Founder',
            company: 'ShikshaPath EdTech',
            avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=VikramSingh&backgroundColor=ffdfbf',
            location: 'Varanasi'
        }
    },
    {
        id: 9,
        text: 'From discovery to launch was exactly 8 weeks. They kept us updated daily. No surprises, no delays. Just solid, reliable delivery.',
        rating: 5,
        author: {
            name: 'Pooja Nair',
            role: 'Operations Head',
            company: 'Nair Logistics',
            avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=PoojaNair&backgroundColor=d1d4f9',
            location: 'Varanasi'
        }
    },
    {
        id: 10,
        text: 'The mobile experience they designed feels native. Our app-like website has reduced our bounce rate from 72% to 28%. Incredible.',
        rating: 5,
        author: {
            name: 'Siddharth Joshi',
            role: 'Product Manager',
            company: 'Joshi AutoParts',
            avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=SiddharthJoshi&backgroundColor=ffd5dc',
            location: 'Varanasi'
        }
    },
    {
        id: 11,
        text: 'We needed a multilingual website for our saree brand targeting NRI clients. Trunal built it beautifully. Orders from USA and UK spiked immediately.',
        rating: 5,
        author: {
            name: 'Sunita Gupta',
            role: 'Owner',
            company: 'Kashi Silk House',
            avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=SunitaGupta&backgroundColor=b6e3f4',
            location: 'Varanasi'
        }
    },
    {
        id: 12,
        text: "Post-launch support has been exceptional. Any request we have is turned around within 24 hours. They're a true long-term partner.",
        rating: 5,
        author: {
            name: 'Rahul Tiwari',
            role: 'Director',
            company: 'Tiwari Exports',
            avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=RahulTiwari&backgroundColor=ffdfbf',
            location: 'Surat'
        }
    }
];

const col1 = reviews.filter((_, i) => i % 3 === 0);
const col2 = reviews.filter((_, i) => i % 3 === 1);
const col3 = reviews.filter((_, i) => i % 3 === 2);

function ReviewCard({ review }: { review: Review }) {
    return (
        <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 transition-all duration-300 hover:border-cyan-500/25 hover:bg-cyan-500/[0.04] relative overflow-hidden">
            {/* Corner accent */}
            <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cyan-400/20 rounded-tl-2xl group-hover:border-cyan-400/50 transition-colors duration-300" />

            {/* Stars */}
            <div className="flex items-center gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                    <Star
                        key={i}
                        size={13}
                        className="fill-amber-400 text-amber-400"
                    />
                ))}
            </div>

            {/* Quote icon + text */}
            <Quote size={20} className="text-cyan-400/20 mb-3" />
            <p className="text-sm leading-relaxed text-white/40 mb-6">
                &ldquo;{review.text}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 shrink-0 rounded-full overflow-hidden border border-cyan-500/20 bg-white/[0.05]">
                    <img
                        src={review.author.avatar}
                        alt={review.author.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                </div>
                <div className="min-w-0">
                    <p className="text-sm font-semibold text-white/90 truncate">
                        {review.author.name}
                    </p>
                    <p className="text-xs text-white/30 truncate">
                        {review.author.role},{' '}
                        <span className="text-cyan-400/60">
                            {review.author.company}
                        </span>
                    </p>
                </div>
                <span className="ml-auto shrink-0 rounded-full border border-cyan-500/15 bg-cyan-500/[0.06] px-2.5 py-1 text-[10px] font-mono text-cyan-400/50">
                    {review.author.location}
                </span>
            </div>

            {/* Bottom gradient bar */}
            <div className="mt-5 h-px w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 transition-transform duration-300 group-hover:scale-x-100" />
        </div>
    );
}

function ScrollColumn({
    items,
    direction,
    durationSecs
}: {
    items: Review[];
    direction: 'up' | 'down';
    durationSecs: number;
}) {
    const [paused, setPaused] = useState(false);
    const doubled = [...items, ...items];

    const animationStyle: React.CSSProperties = {
        animationName: direction === 'up' ? 'scroll-up' : 'scroll-down',
        animationDuration: `${durationSecs}s`,
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
        animationPlayState: paused ? 'paused' : 'running'
    };

    return (
        <div
            className="relative overflow-hidden"
            style={{ height: '700px' }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="flex flex-col gap-5" style={animationStyle}>
                {doubled.map((review, i) => (
                    <ReviewCard key={`${review.id}-${i}`} review={review} />
                ))}
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#020d1a] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020d1a] to-transparent z-10" />
        </div>
    );
}

export default function Reviews() {
    return (
        <section className="relative bg-[#020d1a] text-white overflow-hidden py-28">
            {/* Grid bg */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(34,211,238,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.025) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}
            />
            {/* Glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    background:
                        'radial-gradient(ellipse 70% 40% at 50% 60%, rgba(34,211,238,0.05), transparent)'
                }}
            />
            {/* Separator */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <span className="h-px w-8 bg-cyan-400/40" />
                        <span className="inline-flex items-center gap-2 text-[11px] font-mono text-cyan-400/60 tracking-[0.2em] uppercase select-none">
                            <span
                                className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400"
                                style={{
                                    animation:
                                        'hero-pulse-ring 2s ease-in-out infinite'
                                }}
                            />
                            Client Testimonials
                        </span>
                        <span className="h-px w-8 bg-cyan-400/40" />
                    </div>

                    <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-tight tracking-tight mb-4">
                        Trusted by{' '}
                        <span
                            className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
                            style={{ WebkitBackgroundClip: 'text' }}
                        >
                            50+ businesses
                        </span>
                        <br className="hidden sm:block" /> across Varanasi
                    </h2>
                    <p className="text-white/40 text-base max-w-xl mx-auto leading-relaxed">
                        From local shops to scaling startups — here&apos;s what
                        our partners say about working with Trunal.
                    </p>

                    {/* Aggregate rating strip */}
                    <div
                        className="mt-8 inline-flex items-center gap-6 rounded-2xl border border-cyan-500/15 bg-white/[0.03] px-8 py-4"
                        style={{
                            boxShadow: '0 0 30px 2px rgba(34,211,238,0.05)'
                        }}
                    >
                        <div className="text-center">
                            <p className="text-3xl font-extrabold font-mono text-white">
                                5.0
                            </p>
                            <div className="flex gap-0.5 mt-1 justify-center">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={12}
                                        className="fill-amber-400 text-amber-400"
                                    />
                                ))}
                            </div>
                            <p className="text-[10px] font-mono text-white/25 mt-1">
                                Avg. rating
                            </p>
                        </div>
                        <div className="w-px h-12 bg-cyan-500/15" />
                        <div className="text-center">
                            <p className="text-3xl font-extrabold font-mono text-white">
                                50+
                            </p>
                            <p className="text-[10px] font-mono text-white/25 mt-1 leading-tight">
                                Happy
                                <br />
                                clients
                            </p>
                        </div>
                        <div className="w-px h-12 bg-cyan-500/15" />
                        <div className="text-center">
                            <p className="text-3xl font-extrabold font-mono text-white">
                                98%
                            </p>
                            <p className="text-[10px] font-mono text-white/25 mt-1 leading-tight">
                                Would
                                <br />
                                recommend
                            </p>
                        </div>
                    </div>
                </div>

                {/* Scrolling columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <ScrollColumn
                        items={col1}
                        direction="up"
                        durationSecs={30}
                    />
                    <ScrollColumn
                        items={col2}
                        direction="down"
                        durationSecs={36}
                    />
                    <div className="hidden lg:block">
                        <ScrollColumn
                            items={col3}
                            direction="up"
                            durationSecs={33}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
