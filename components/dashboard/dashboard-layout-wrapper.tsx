'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { AppSidebar } from '@/components/dashboard/app-sidebar';
import {
    SidebarProvider,
    SidebarTrigger,
    SidebarInset
} from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from '@/components/ui/breadcrumb';

type User = {
    email: string;
    username: string;
    role: string;
};

export default function DashboardLayoutWrapper({
    children
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState<any[]>([]);

    // Determines title based on path
    const getPageTitle = () => {
        if (pathname.includes('/project/')) return 'Project Chat';
        if (pathname.includes('/admin')) return 'Admin Panel';
        return 'Overview';
    };

    useEffect(() => {
        async function loadData() {
            const token = localStorage.getItem('token');

            if (!token) {
                return router.push('/login');
            }

            try {
                // Fetch User
                const userRes = await fetch(
                    `${(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4001').replace(/\/$/, '')}/api/auth/me`,
                    {
                        headers: { Authorization: `Bearer ${token}` }
                    }
                );

                if (!userRes.ok) throw new Error('Failed to fetch user');
                const userData = await userRes.json();
                setUser(userData.user);

                // Fetch Projects
                const projectsRes = await fetch(
                    `${(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4001').replace(/\/$/, '')}/api/projects`,
                    {
                        headers: { Authorization: `Bearer ${token}` }
                    }
                );

                if (projectsRes.ok) {
                    const projectsData = await projectsRes.json();
                    setProjects(projectsData);
                }
            } catch {
                localStorage.removeItem('token');
                router.push('/login');
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, [router]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-zinc-950">
                <div className="relative">
                    <div className="w-12 h-12 border-4 border-blue-200 rounded-full"></div>
                    <div className="absolute top-0 left-0 w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            </div>
        );
    }

    return (
        <SidebarProvider>
            <AppSidebar user={user} projects={projects} />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 sticky top-0 z-10 backdrop-blur-md bg-black/20 border-b border-white/10">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 h-4"
                        />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="/portal">
                                        Dashboard
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>
                                        {getPageTitle()}
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
