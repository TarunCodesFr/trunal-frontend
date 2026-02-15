'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
    const router = useRouter();

    const [authLoading, setAuthLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
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
            <div className="min-h-screen flex items-center justify-center text-white">
                Checking authentication...
            </div>
        );
    }

    async function handleRegister(e: React.FormEvent) {
        e.preventDefault();
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

            alert('Account created! Now login.');
            router.push('/login');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 to-black text-white">
            <form
                onSubmit={handleRegister}
                className="bg-zinc-950 p-8 rounded-xl w-full max-w-md border border-zinc-800 shadow-lg"
            >
                <h1 className="text-2xl font-bold mb-6 text-center">
                    Create Account
                </h1>

                {error && (
                    <div className="bg-red-500/10 border border-red-500 text-red-400 p-2 mb-4 rounded text-sm">
                        {error}
                    </div>
                )}

                <input
                    placeholder="Username"
                    className="w-full mb-3 p-3 rounded bg-zinc-900 border border-zinc-700"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    placeholder="Email"
                    className="w-full mb-3 p-3 rounded bg-zinc-900 border border-zinc-700"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-4 p-3 rounded bg-zinc-900 border border-zinc-700"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-200 transition">
                    {loading ? 'Creating...' : 'Register'}
                </button>

                <p className="text-center text-sm text-zinc-400 mt-4">
                    Already have an account?{' '}
                    <a href="/login" className="text-white underline">
                        Login
                    </a>
                </p>
            </form>
        </div>
    );
}
