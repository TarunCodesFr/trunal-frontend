'use client';

import Link from 'next/link';
import { Home, User, Settings, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DashboardSidebar() {
    const router = useRouter();

    function handleLogout() {
        localStorage.removeItem('token');
        router.push('/login');
    }

    return (
        <aside className="w-64 min-h-screen bg-zinc-950 border-r border-zinc-800 p-5 flex flex-col">
            <h2 className="text-xl font-bold mb-8 text-white">Trunal</h2>

            <nav className="space-y-2 flex-1">
                <SidebarLink
                    href="/dashboard"
                    icon={<Home size={18} />}
                    label="Dashboard"
                />
                <SidebarLink
                    href="/dashboard/profile"
                    icon={<User size={18} />}
                    label="Profile"
                />
                <SidebarLink
                    href="/dashboard/settings"
                    icon={<Settings size={18} />}
                    label="Settings"
                />
            </nav>

            <button
                onClick={handleLogout}
                className="flex items-center gap-3 text-red-400 hover:text-red-300 transition"
            >
                <LogOut size={18} />
                Logout
            </button>
        </aside>
    );
}

function SidebarLink({
    href,
    icon,
    label
}: {
    href: string;
    icon: React.ReactNode;
    label: string;
}) {
    return (
        <Link
            href={href}
            className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-300 hover:bg-zinc-800 hover:text-white transition"
        >
            {icon}
            {label}
        </Link>
    );
}
