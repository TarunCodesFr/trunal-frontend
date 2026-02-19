'use client';

// ─────────────────────────────────────────────────────────
//  Reusable hand-drawn SVG doodle primitives.
//  All paths are drawn with stroke only, no fill, so they
//  layer cleanly over any dark background.
// ─────────────────────────────────────────────────────────

interface DoodleProps {
    className?: string;
    opacity?: number;
    color?: string;
    strokeWidth?: number;
}

/** Squiggly underline — great under headings */
export function DoodleUnderline({
    className = '',
    opacity = 0.35,
    color = '#a78bfa',
    strokeWidth = 2.5
}: DoodleProps) {
    return (
        <svg
            viewBox="0 0 200 18"
            fill="none"
            className={className}
            aria-hidden="true"
        >
            <path
                d="M2 10 C20 3, 38 17, 56 10 S92 3, 110 10 S146 17, 164 10 S190 3, 198 8"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                opacity={opacity}
            />
        </svg>
    );
}

/** Rough circle scribble — encircle a word or stat */
export function DoodleCircle({
    className = '',
    opacity = 0.3,
    color = '#22d3ee',
    strokeWidth = 2
}: DoodleProps) {
    return (
        <svg
            viewBox="0 0 120 60"
            fill="none"
            className={className}
            aria-hidden="true"
        >
            <path
                d="M60 4 C90 2, 118 16, 116 30 S98 58, 60 57 S2 44, 4 30 S28 5, 60 4 Z"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={opacity}
            />
        </svg>
    );
}

/** Hand-drawn arrow pointing right */
export function DoodleArrowRight({
    className = '',
    opacity = 0.4,
    color = '#34d399',
    strokeWidth = 2
}: DoodleProps) {
    return (
        <svg
            viewBox="0 0 80 36"
            fill="none"
            className={className}
            aria-hidden="true"
        >
            <path
                d="M4 18 C18 17, 38 19, 58 17 C48 10, 52 7, 62 18 C52 27, 48 26, 58 20"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={opacity}
            />
        </svg>
    );
}

/** Hand-drawn arrow pointing down-left */
export function DoodleArrowCurved({
    className = '',
    opacity = 0.35,
    color = '#fb923c',
    strokeWidth = 2
}: DoodleProps) {
    return (
        <svg
            viewBox="0 0 60 80"
            fill="none"
            className={className}
            aria-hidden="true"
        >
            <path
                d="M50 6 C52 28, 34 58, 16 68 M16 68 C20 58, 22 54, 12 62 M16 68 C24 62, 28 60, 24 70"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={opacity}
            />
        </svg>
    );
}

/** 4-point hand-drawn star / sparkle */
export function DoodleStar({
    className = '',
    opacity = 0.45,
    color = '#fbbf24',
    strokeWidth = 2
}: DoodleProps) {
    return (
        <svg
            viewBox="0 0 40 40"
            fill="none"
            className={className}
            aria-hidden="true"
        >
            <path
                d="M20 3 L22 17 L36 18 L22 21 L20 37 L18 21 L4 18 L18 17 Z"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={opacity}
            />
        </svg>
    );
}

/** Small 6-point sparkle dot */
export function DoodleSparkle({
    className = '',
    opacity = 0.5,
    color = '#a78bfa',
    strokeWidth = 1.8
}: DoodleProps) {
    return (
        <svg
            viewBox="0 0 28 28"
            fill="none"
            className={className}
            aria-hidden="true"
        >
            <path
                d="M14 2 L14 26 M2 14 L26 14 M5 5 L23 23 M23 5 L5 23"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                opacity={opacity}
            />
        </svg>
    );
}

/** Scribble cross-hatching square — adds texture */
export function DoodleScribbleBox({
    className = '',
    opacity = 0.18,
    color = '#ffffff',
    strokeWidth = 1.5
}: DoodleProps) {
    return (
        <svg
            viewBox="0 0 60 60"
            fill="none"
            className={className}
            aria-hidden="true"
        >
            <path
                d="M6 6 L54 6 L54 54 L6 54 Z"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                opacity={opacity}
            />
            <path
                d="M6 6 L54 54 M54 6 L6 54"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                opacity={opacity * 0.7}
            />
            <path
                d="M30 6 L30 54 M6 30 L54 30"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                opacity={opacity * 0.5}
            />
        </svg>
    );
}

/** Wavy bracket line — use along the side of text */
export function DoodleWavyLine({
    className = '',
    opacity = 0.28,
    color = '#22d3ee',
    strokeWidth = 2
}: DoodleProps) {
    return (
        <svg
            viewBox="0 0 16 120"
            fill="none"
            className={className}
            aria-hidden="true"
        >
            <path
                d="M8 2 C14 14, 2 26, 8 38 S14 62, 8 74 S2 98, 8 110 S14 118, 8 118"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                opacity={opacity}
            />
        </svg>
    );
}

/** Rough hand-drawn bracket */
export function DoodleBracket({
    className = '',
    opacity = 0.3,
    color = '#a78bfa',
    strokeWidth = 2
}: DoodleProps) {
    return (
        <svg
            viewBox="0 0 30 80"
            fill="none"
            className={className}
            aria-hidden="true"
        >
            <path
                d="M22 4 C10 4, 6 10, 6 40 S10 76, 22 76"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                opacity={opacity}
            />
        </svg>
    );
}

/** Small loopy spiral */
export function DoodleSpiral({
    className = '',
    opacity = 0.3,
    color = '#34d399',
    strokeWidth = 1.8
}: DoodleProps) {
    return (
        <svg
            viewBox="0 0 48 48"
            fill="none"
            className={className}
            aria-hidden="true"
        >
            <path
                d="M24 24 C24 20, 30 16, 34 20 S34 32, 24 34 S10 28, 12 20 S18 8, 28 8 S42 14, 44 24 S38 42, 24 44 S4 36, 4 24"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                opacity={opacity}
            />
        </svg>
    );
}

/** Three rough horizontal lines — like a hand-drawn equals or emphasis */
export function DoodleLines({
    className = '',
    opacity = 0.25,
    color = '#fb923c',
    strokeWidth = 2
}: DoodleProps) {
    return (
        <svg
            viewBox="0 0 60 30"
            fill="none"
            className={className}
            aria-hidden="true"
        >
            <path
                d="M4 6 C18 5, 36 7, 56 5"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                opacity={opacity}
            />
            <path
                d="M4 15 C14 14, 34 16, 56 14"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                opacity={opacity}
            />
            <path
                d="M4 24 C20 23, 40 25, 56 23"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                opacity={opacity}
            />
        </svg>
    );
}
