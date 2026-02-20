'use client';

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

type GradientButtonProps = {
    href?: string;
    children: React.ReactNode;
    onClick?: () => void;
};

export function GetStartedButtonPC({
    href,
    children,
    onClick
}: GradientButtonProps) {
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

    return (
        <button
            onClick={() => {
                onClick?.();
                if (href) router.push(href);
            }}
            className={`cursor-pointer hidden lg:block bg-linear-to-br from-white to-gray-300 text-black font-semibold rounded-lg shadow-md shadow-white/20 hover:shadow-lg hover:shadow-white/30 hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap ${
                scrolled ? 'px-5 py-2 text-sm' : 'px-6 py-2.5 text-base'
            }`}
        >
            {children}
        </button>
    );
}

//incomplete - mobile button
export function GetStartedButtonMobile({
    href,
    children,
    onClick
}: GradientButtonProps) {
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

    return (
        <button
            onClick={() => {
                onClick?.();
                if (href) router.push(href);
            }}
            className={`hidden lg:block bg-linear-to-br from-white to-gray-300 text-black font-semibold rounded-lg shadow-md shadow-white/20 hover:shadow-lg hover:shadow-white/30 hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap ${
                scrolled ? 'px-5 py-2 text-sm' : 'px-6 py-2.5 text-base'
            }`}
        >
            {children}
        </button>
    );
}
