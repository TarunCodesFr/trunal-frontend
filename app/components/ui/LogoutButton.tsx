'use client';

import { useRouter } from 'next/navigation';

// utils/auth.ts
export function logoutUser(router: any) {
    localStorage.removeItem('token');
    router.push('/login');
}

export default function LogoutButton() {
    const router = useRouter();

    function handleLogout() {
        localStorage.removeItem('token');
        router.push('/login');
    }

    return (
        <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition"
        >
            Logout
        </button>
    );
}
