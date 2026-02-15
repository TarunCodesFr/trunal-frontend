import { useEffect, useState } from 'react';

// Define User type
interface User {
    user_id: number;
    email: string;
    username: string;
    role: string;
}

export function useAuth() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            // In a real app, you'd get token from localStorage/cookie
            // For this tutorial, let's assume token is stored in localStorage 'token'
            const token = localStorage.getItem('token');

            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4001'}/api/auth/me`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                if (res.ok) {
                    const data = await res.json();
                    setUser(data.user);
                } else {
                    // specific error handling
                    console.error('Auth failed');
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return { user, loading };
}
