'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff, ArrowRight, Zap } from 'lucide-react';

export default function LoginPage() {
    const router = useRouter();
    const [authLoading, setAuthLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
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

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const res = await fetch(
                `${(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4001').replace(/\/$/, '')}/api/auth/login`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                }
            );
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Login failed');
            localStorage.setItem('token', data.token);
            router.push('/portal');
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
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px]" />
                <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-cyan-600/8 blur-[120px]" />
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                        backgroundSize: '72px 72px'
                    }}
                />
            </div>

            {/* ── Left panel — branding ── */}
            <div className="hidden lg:flex lg:w-[55%] relative flex-col justify-between p-14 overflow-hidden">
                {/* Decorative orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-violet-600/20 via-cyan-600/10 to-transparent blur-3xl pointer-events-none" />

                {/* Logo */}
                <div className="relative z-10 flex items-center gap-3">
                    <img
                        src="/trunal-logo.png"
                        className="w-10 bg-white/50 backdrop-blur-md rounded-lg"
                    />
                    <span className="text-white font-semibold text-lg tracking-tight">
                        Trunal
                    </span>
                </div>

                {/* Hero copy */}
                <div className="relative z-10 max-w-md">
                    <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-violet-400 mb-6">
                        Client Portal
                    </p>
                    <h1 className="text-4xl xl:text-5xl font-semibold text-white leading-[1.1] tracking-tight mb-6">
                        Welcome back to your{' '}
                        <span className="auth-gradient-text">
                            digital workspace.
                        </span>
                    </h1>
                    <p className="text-zinc-400 text-base leading-relaxed">
                        Track your projects, review deliverables, and
                        collaborate with the Trunal team — all in one place.
                    </p>

                    {/* Stats row */}
                    <div className="mt-12 grid grid-cols-3 gap-6">
                        {[
                            { value: '50+', label: 'Projects Delivered' },
                            { value: '50+', label: 'Happy Clients' },
                            { value: '99.9%', label: 'Uptime SLA' }
                        ].map((s) => (
                            <div key={s.label}>
                                <p className="text-2xl font-semibold text-white">
                                    {s.value}
                                </p>
                                <p className="text-xs text-zinc-500 mt-0.5">
                                    {s.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom tagline */}
                <div className="relative z-10">
                    <p className="text-zinc-600 text-sm">
                        &copy; {new Date().getFullYear()} Trunal. Software &amp;
                        Digital Agency.
                    </p>
                </div>
            </div>

            {/* ── Right panel — form ── */}
            <div className="flex-1 flex items-center justify-center p-6 sm:p-10 relative z-10">
                <div className="w-full max-w-[420px]">
                    {/* Mobile logo */}
                    <div className="flex items-center gap-2.5 mb-10 lg:hidden">
                        <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
                            <Zap size={15} className="text-white fill-white" />
                        </div>
                        <span className="text-white font-semibold tracking-tight">
                            Trunal
                        </span>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-white mb-2">
                            Sign in
                        </h2>
                        <p className="text-zinc-500 text-sm">
                            Enter your credentials to access your portal.
                        </p>
                    </div>

                    {/* Error */}
                    {error && (
                        <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/8 px-4 py-3">
                            <span className="mt-0.5 h-2 w-2 rounded-full bg-red-400 flex-shrink-0" />
                            <p className="text-sm text-red-400">{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-5">
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
                            <div className="flex items-center justify-between mb-2">
                                <label className="text-xs font-medium text-zinc-400">
                                    Password
                                </label>
                                <a
                                    href="#"
                                    className="text-xs text-violet-400 hover:text-violet-300 transition-colors"
                                >
                                    Forgot password?
                                </a>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    required
                                    placeholder="••••••••"
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
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="auth-btn group w-full"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                                    Signing in…
                                </span>
                            ) : (
                                <span className="flex items-center justify-center gap-2">
                                    Sign in
                                    <ArrowRight
                                        size={16}
                                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                                    />
                                </span>
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-8 flex items-center gap-4">
                        <div className="flex-1 h-px bg-white/[0.06]" />
                        <span className="text-xs text-zinc-600">or</span>
                        <div className="flex-1 h-px bg-white/[0.06]" />
                    </div>

                    <p className="text-center text-sm text-zinc-500">
                        Don&apos;t have an account?{' '}
                        <Link
                            href="/register"
                            className="text-violet-400 hover:text-violet-300 transition-colors font-medium"
                        >
                            Create one
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
