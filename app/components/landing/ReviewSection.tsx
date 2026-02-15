'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { Kode_Mono } from 'next/font/google';
import { div } from 'framer-motion/client';

const kodeMono = Kode_Mono({
    subsets: ['latin'],
    display: 'swap',
    // You can add other options:
    weight: ['400', '500', '600', '700'], // Specify weights you need
    variable: '--font-kode-mono' // Optional: CSS variable
});

interface Review {
    id: number;
    text: string;
    author: {
        name: string;
        role: string;
        company: string;
        avatar: string;
    };
}

const Reviews = () => {
    const [isPaused, setIsPaused] = useState(false);

    const reviews: Review[] = [
        {
            id: 1,
            text: "The platform has completely transformed how we build and deploy applications. Our development cycle has been cut in half, and our team couldn't be happier.",
            author: {
                name: 'Sarah Chen',
                role: 'Senior Backend Engineering Manager',
                company: 'TechCorp',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
            }
        },
        {
            id: 2,
            text: "We've been able to unify data access from multiple enterprise systems into a single API. This has dramatically improved our development velocity while maintaining flexibility.",
            author: {
                name: 'Michael Rodriguez',
                role: 'Head of Engineering',
                company: 'DataFlow',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
            }
        },
        {
            id: 3,
            text: 'The documentation made it incredibly easy to get started. We jumped straight in without needing extensive training, and immediately saw the benefits.',
            author: {
                name: 'Emily Watson',
                role: 'Lead Developer',
                company: 'CloudSync',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily'
            }
        },
        {
            id: 4,
            text: 'Outstanding developer experience. The type-safe approach has eliminated entire classes of bugs and made our codebase significantly more maintainable.',
            author: {
                name: 'James Park',
                role: 'Staff Engineer',
                company: 'BuildFast',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James'
            }
        },
        {
            id: 5,
            text: 'The performance improvements have been remarkable. Our API response times are now consistently under 100ms, which has greatly enhanced user experience.',
            author: {
                name: 'Lisa Anderson',
                role: 'CTO',
                company: 'ScaleUp',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa'
            }
        },
        {
            id: 6,
            text: 'Migration from our legacy system was surprisingly smooth. The team saved countless hours of development time, and we can finally focus on features.',
            author: {
                name: 'David Kim',
                role: 'Principal Engineer',
                company: 'NextGen',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David'
            }
        },
        {
            id: 7,
            text: "The type safety and autocomplete features have made our development workflow incredibly efficient. It's become an essential tool for our entire team.",
            author: {
                name: 'Rachel Thompson',
                role: 'Senior Developer',
                company: 'CodeCraft',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel'
            }
        },
        {
            id: 8,
            text: "We've reduced our database query complexity by 60% while improving performance. The abstraction layer is exactly what we needed.",
            author: {
                name: 'Alex Martinez',
                role: 'Database Architect',
                company: 'DataCore',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'
            }
        },
        {
            id: 9,
            text: 'Deployment has become trivial. What used to take hours now happens in minutes, and everything just works reliably.',
            author: {
                name: 'Jennifer Lee',
                role: 'DevOps Lead',
                company: 'CloudOps',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer'
            }
        }
    ];

    const duplicatedReviews = [...reviews, ...reviews, ...reviews];

    // Split reviews into 3 columns
    const column1 = duplicatedReviews.filter((_, index) => index % 3 === 0);
    const column2 = duplicatedReviews.filter((_, index) => index % 3 === 1);
    const column3 = duplicatedReviews.filter((_, index) => index % 3 === 2);

    return (
        <div className="relative bg-black text-white overflow-hidden py-32">
            {/* Background elements matching the design system */}
            <div className="fixed inset-0 opacity-30 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-600/20" />
            </div>

            {/* Grid overlay */}
            <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
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

            <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className={kodeMono.className}>
                        <div className="inline-block mb-6">
                            <span className="text-sm font-medium tracking-[0.3em] text-gray-400 uppercase">
                                Reviews
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-6 underline text-gray-300">
                            Trusted by more than{' '}
                            <span className="font-medium bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                                40
                            </span>
                            <br />
                            monthly active Brands globally
                        </h2>
                    </div>
                </motion.div>

                {/* Scrolling Reviews Grid */}
                <div className="relative">
                    {/* Gradient overlays for fade effect */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[800px] overflow-hidden">
                        {/* Column 1 - Scrolls down */}
                        <ScrollingColumn
                            reviews={column1}
                            direction="down"
                            speed={30}
                            isPaused={isPaused}
                            setIsPaused={setIsPaused}
                        />

                        {/* Column 2 - Scrolls up */}
                        <ScrollingColumn
                            reviews={column2}
                            direction="up"
                            speed={35}
                            isPaused={isPaused}
                            setIsPaused={setIsPaused}
                        />

                        {/* Column 3 - Scrolls down (hidden on mobile) */}
                        <div className="hidden lg:block">
                            <ScrollingColumn
                                reviews={column3}
                                direction="down"
                                speed={32}
                                isPaused={isPaused}
                                setIsPaused={setIsPaused}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface ScrollingColumnProps {
    reviews: Review[];
    direction: 'up' | 'down';
    speed: number;
    isPaused: boolean;
    setIsPaused: (paused: boolean) => void;
}

const ScrollingColumn = ({
    reviews,
    direction,
    speed,
    isPaused,
    setIsPaused
}: ScrollingColumnProps) => {
    const controls = useAnimationControls();

    useEffect(() => {
        if (isPaused) {
            controls.stop();
        } else {
            controls.start({
                y: direction === 'down' ? ['0%', '-50%'] : ['-50%', '0%'],
                transition: {
                    duration: speed,
                    repeat: Infinity,
                    ease: 'linear'
                }
            });
        }
    }, [isPaused, controls, direction, speed]);

    useEffect(() => {
        controls.start({
            y: direction === 'down' ? ['0%', '-50%'] : ['-50%', '0%'],
            transition: {
                duration: speed,
                repeat: Infinity,
                ease: 'linear'
            }
        });
    }, [controls, direction, speed]);

    return (
        <motion.div className="flex flex-col gap-6" animate={controls}>
            {reviews.map((review, index) => (
                <ReviewCard
                    key={`${review.id}-${index}`}
                    review={review}
                    onHoverStart={() => setIsPaused(true)}
                    onHoverEnd={() => setIsPaused(false)}
                />
            ))}
        </motion.div>
    );
};

interface ReviewCardProps {
    review: Review;
    onHoverStart: () => void;
    onHoverEnd: () => void;
}

const ReviewCard = ({ review, onHoverStart, onHoverEnd }: ReviewCardProps) => {
    return (
        <div className={kodeMono.className}>
            <motion.div
                className="group relative"
                onHoverStart={onHoverStart}
                onHoverEnd={onHoverEnd}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-cyan-600/0 group-hover:from-violet-600/10 group-hover:to-cyan-600/10 rounded-2xl blur-xl transition-all duration-500" />

                {/* Card content */}
                <div className="relative border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-2xl p-8 group-hover:border-white/20 transition-all duration-300">
                    {/* Quote icon */}
                    <div className="mb-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                        <Quote size={32} className="text-violet-400" />
                    </div>

                    {/* Review text */}
                    <p className="text-gray-300 leading-relaxed mb-8 text-base">
                        {review.text}
                    </p>

                    {/* Author info */}
                    <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <motion.div
                            className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-violet-400/50 transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                        >
                            <img
                                src={review.author.avatar}
                                alt={review.author.name}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Author details */}
                        <div className="flex-1 min-w-0">
                            <div className="font-medium text-white truncate">
                                {review.author.name}
                            </div>
                            <div className="text-sm text-gray-500 truncate">
                                {review.author.role}
                            </div>
                            <div className="text-sm font-medium mt-0.5">
                                <span className="text-violet-400">
                                    / {review.author.company}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Animated gradient bar at bottom */}
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 rounded-b-2xl origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Reviews;
