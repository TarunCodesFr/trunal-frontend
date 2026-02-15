'use client';

import { useAuth } from '@/hooks/use-auth';

export default function DashboardPage() {
    const { user } = useAuth(); // We can re-use the hook or just rely on the layout.
    // Since the layout fetches user independently, let's just use the hook for simple access or assume data is ready.
    // Actually, to display the name, we need the user. The layout handles the sidebar user, but this page needs it too.
    // Let's use the hook as it caches/optimizes state ideally, or just refetch safe.

    return (
        <div className="min-h-screen flex-1 rounded-xl acrylic-card md:min-h-min p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
                Welcome to Your Dashboard
            </h2>
            <div className="acrylic-card p-6 rounded-lg">
                <p className="text-lg text-white">
                    Welcome,{' '}
                    <span className="font-semibold text-blue-400">
                        {user?.username || 'User'}
                    </span>
                </p>
                <p className="text-zinc-300 mt-1">Email: {user?.email}</p>
                <p className="text-zinc-300 mt-1">Role: {user?.role}</p>
            </div>
        </div>
    );
}
