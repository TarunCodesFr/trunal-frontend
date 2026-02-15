'use client';

import { motion } from 'framer-motion';

export default function FramerBg() {
    const rows = 15;
    const cols = 20;
    const dots = Array.from({ length: rows * cols });

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${cols}, 1fr)`,
                gap: '20px',
                padding: '20px',
                width: '100vw',
                height: '100vh'
            }}
        >
            {dots.map((_, index) => (
                <motion.div
                    key={index}
                    style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%'
                        // backgroundColor: '#e0e0e0'
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.01,
                        ease: 'easeInOut'
                    }}
                />
            ))}
        </div>
    );
}
