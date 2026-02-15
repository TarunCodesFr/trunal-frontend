'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
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

type Project = {
    name: string;
    url: string;
    icon: any;
};

export default function DashboardPage() {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadUser() {
            const token = localStorage.getItem('token');

            if (!token) {
                return router.push('/login');
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

                if (!res.ok) {
                    localStorage.removeItem('token');
                    return router.push('/login');
                }

                const data = await res.json();
                setUser(data.user);
            } catch {
                router.push('/login');
            } finally {
                setLoading(false);
            }
        }

        loadUser();
    }, [router]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="relative">
                    <div className="w-12 h-12 border-4 border-blue-200 rounded-full"></div>

                    <div className="absolute top-0 left-0 w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <SidebarProvider>
            <AppSidebar user={user} projects={projects} />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 sticky top-0 z-10">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 h-4"
                        />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">
                                        Dashboard
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Overview</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        <div className="aspect-video rounded-xl acrylic-card" />
                        <div className="aspect-video rounded-xl acrylic-card" />
                        <div className="aspect-video rounded-xl acrylic-card" />
                    </div> */}
                    <div className="min-h-[100vh] flex-1 rounded-xl acrylic-card md:min-h-min p-6">
                        <h2 className="text-2xl font-bold mb-4 text-white">
                            Welcome to Your Dashboard
                        </h2>
                        <div className="acrylic-card p-6 rounded-lg">
                            <p className="text-lg text-white">
                                Welcome,{' '}
                                <span className="font-semibold text-blue-400">
                                    {user?.username}
                                </span>
                            </p>
                            <p className="text-zinc-300 mt-1">
                                Email: {user?.email}
                            </p>
                            <p className="text-zinc-300 mt-1">
                                Role: {user?.role}
                            </p>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
