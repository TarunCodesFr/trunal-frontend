'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff, ArrowRight, Zap, Check } from 'lucide-react';

const perks = [
    'Dedicated project dashboard',
    'Real-time delivery updates',
    'Direct team communication',
    'File & asset management'
];

function PasswordStrength({ password }: { password: string }) {
    const checks = [
        { label: '8+ characters', ok: password.length >= 8 },
        { label: 'Uppercase letter', ok: /[A-Z]/.test(password) },
        { label: 'Number', ok: /\d/.test(password) }
    ];
    if (!password) return null;
    return (
        <div className="mt-2.5 flex gap-3">
            {checks.map((c) => (
                <span
                    key={c.label}
                    className={`flex items-center gap-1 text-[11px] transition-colors duration-200 ${c.ok ? 'text-emerald-400' : 'text-zinc-600'}`}
                >
                    <span
                        className={`h-3.5 w-3.5 rounded-full flex items-center justify-center border transition-colors duration-200 ${c.ok ? 'border-emerald-400 bg-emerald-400/15' : 'border-zinc-700'}`}
                    >
                        {c.ok && <Check size={8} strokeWidth={3} />}
                    </span>
                    {c.label}
                </span>
            ))}
        </div>
    );
}

export default function RegisterPage() {
    const router = useRouter();
    const [authLoading, setAuthLoading] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [agreed, setAgreed] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            router.push('/portal');
        } else {
            setAuthLoading(false);
        }
    }, []);

    if (authLoading) {
        return (
            <div className="min-h-screen bg-[#09090b] flex items-center justify-center">
                <div className="h-6 w-6 rounded-full border-2 border-violet-400 border-t-transparent animate-spin" />
            </div>
        );
    }

    async function handleRegister(e: React.FormEvent) {
        e.preventDefault();
        if (!agreed) {
            setError('Please accept the terms to continue.');
            return;
        }
        setError('');
        setLoading(true);
        try {
            const res = await fetch(
                `${(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4001').replace(/\/$/, '')}/api/auth/register`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, username, password })
                }
            );
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Registration failed');
            router.push('/login');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-[#09090b] flex overflow-hidden">
            {/* ── Ambient background ── */}
            <div className="fixed inset-0 pointer-events-none" aria-hidden>
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-emerald-600/6 blur-[120px]" />
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                        backgroundSize: '72px 72px'
                    }}
                />
            </div>

            {/* ── Left panel — form ── */}
            {/* <div className="flex-1 flex items-center justify-center p-6 sm:p-10 relative z-10"> */}
            <div className="flex-1 flex items-center justify-center p-6 sm:p-10 relative z-10">
                <div className="w-full max-w-[440px]">
                    {/* Logo */}
                    <div className="flex items-center gap-2.5 mb-10">
                        <img
                            src="/trunal-logo.png"
                            className="w-10 bg-white/50 backdrop-blur-md rounded-lg"
                        />
                        <span className="text-white font-semibold tracking-tight text-2xl">
                            Trunal
                        </span>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-white mb-2">
                            Create your account
                        </h2>
                        <p className="text-zinc-500 text-sm">
                            Get access to your dedicated client portal.
                        </p>
                    </div>

                    {/* Error */}
                    {error && (
                        <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/8 px-4 py-3">
                            <span className="mt-0.5 h-2 w-2 rounded-full bg-red-400 flex-shrink-0" />
                            <p className="text-sm text-red-400">{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleRegister} className="space-y-5">
                        {/* Username */}
                        <div>
                            <label className="block text-xs font-medium text-zinc-400 mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                autoComplete="username"
                                required
                                placeholder="johndoe"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="auth-input"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-xs font-medium text-zinc-400 mb-2">
                                Email address
                            </label>
                            <input
                                type="email"
                                autoComplete="email"
                                required
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="auth-input"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-xs font-medium text-zinc-400 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="new-password"
                                    required
                                    placeholder="Min. 8 characters"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="auth-input pr-12"
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
                                    tabIndex={-1}
                                >
                                    {showPassword ? (
                                        <EyeOff size={16} />
                                    ) : (
                                        <Eye size={16} />
                                    )}
                                </button>
                            </div>
                            <PasswordStrength password={password} />
                        </div>

                        {/* Terms */}
                        <label className="flex items-start gap-3 cursor-pointer select-none group">
                            <div
                                onClick={() => setAgreed(!agreed)}
                                className={`mt-0.5 h-4 w-4 rounded flex-shrink-0 flex items-center justify-center border transition-all duration-200 cursor-pointer ${
                                    agreed
                                        ? 'bg-violet-500 border-violet-500'
                                        : 'border-zinc-700 group-hover:border-zinc-500'
                                }`}
                            >
                                {agreed && (
                                    <Check
                                        size={10}
                                        strokeWidth={3}
                                        className="text-white"
                                    />
                                )}
                            </div>
                            <span className="text-xs text-zinc-500 leading-relaxed">
                                I agree to the{' '}
                                <a
                                    href="/terms"
                                    className="text-violet-400 hover:text-violet-300 transition-colors"
                                >
                                    Terms of Service
                                </a>{' '}
                                and{' '}
                                <a
                                    href="/terms"
                                    className="text-violet-400 hover:text-violet-300 transition-colors"
                                >
                                    Privacy Policy
                                </a>
                            </span>
                        </label>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="auth-btn group w-full"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                                    Creating account…
                                </span>
                            ) : (
                                <span className="flex items-center justify-center gap-2">
                                    Create account
                                    <ArrowRight
                                        size={16}
                                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                                    />
                                </span>
                            )}
                        </button>
                    </form>

                    <div className="my-8 flex items-center gap-4">
                        <div className="flex-1 h-px bg-white/[0.06]" />
                        <span className="text-xs text-zinc-600">or</span>
                        <div className="flex-1 h-px bg-white/[0.06]" />
                    </div>

                    <p className="text-center text-sm text-zinc-500">
                        Already have an account?{' '}
                        <Link
                            href="/login"
                            className="text-violet-400 hover:text-violet-300 transition-colors font-medium"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>

            {/* ── Right panel — branding ── */}
            <div className="hidden lg:flex lg:w-[45%] relative flex-col justify-between p-14 overflow-hidden">
                {/* Decorative orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-violet-600/15 via-cyan-600/10 to-transparent blur-3xl pointer-events-none" />

                {/* Middle content */}
                <div className="relative z-10 my-auto">
                    <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/8 px-4 py-2 mb-8">
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                        <span className="text-[11px] font-medium tracking-widest uppercase text-violet-400">
                            What you get
                        </span>
                    </div>

                    <h2 className="text-3xl xl:text-4xl font-semibold text-white leading-[1.15] tracking-tight mb-6">
                        Everything you need to{' '}
                        <span className="auth-gradient-text">
                            stay in the loop.
                        </span>
                    </h2>
                    <p className="text-zinc-400 text-base leading-relaxed mb-10">
                        Your client portal gives you full visibility into
                        project progress, timelines, and deliverables — 24/7.
                    </p>

                    {/* Perks */}
                    <ul className="space-y-4">
                        {perks.map((perk) => (
                            <li
                                key={perk}
                                className="flex items-center gap-3.5"
                            >
                                <span className="h-6 w-6 rounded-full bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center flex-shrink-0">
                                    <Check
                                        size={12}
                                        className="text-emerald-400"
                                        strokeWidth={2.5}
                                    />
                                </span>
                                <span className="text-sm text-zinc-300">
                                    {perk}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {/* Testimonial card */}
                    <div className="mt-12 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6">
                        <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                            &ldquo;The portal made it so easy to track every
                            milestone. We always knew exactly what was happening
                            with our project.&rdquo;
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-xs font-bold text-white">
                                RS
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white">
                                    Rohit Sharma
                                </p>
                                <p className="text-xs text-zinc-500">
                                    Founder, ShopEasy India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10">
                    <p className="text-zinc-600 text-sm">
                        &copy; {new Date().getFullYear()} Trunal. Software &amp;
                        Digital Agency.
                    </p>
                </div>
            </div>
        </div>
    );
}
