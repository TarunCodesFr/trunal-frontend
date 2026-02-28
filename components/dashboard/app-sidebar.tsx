'use client';

import * as React from 'react';
import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    Shield,
    SquareTerminal
} from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavProjects } from '@/components/nav-projects';
import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton
} from '@/components/ui/sidebar';
import Link from 'next/link';

type User = {
    user_id?: number;
    email: string;
    username: string;
    role: string;
};

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
    user: User | null;
    projects: any[];
};

const data = {
    teams: [
        {
            name: 'Trunal',
            logo: GalleryVerticalEnd,
            plan: 'Dashboard'
        }
    ],
    navMain: [
        {
            title: 'Playground',
            url: '#',
            icon: SquareTerminal,
            isActive: true,
            items: [
                { title: 'History', url: '#' },
                { title: 'Starred', url: '#' },
                { title: 'Settings', url: '#' }
            ]
        }
    ]
};

export function AppSidebar({ user, projects, ...props }: AppSidebarProps) {
    const userData = {
        name: user?.username || 'Guest',
        email: user?.email || 'guest@example.com',
        avatar: '/avatars/user.jpg'
    };

    const formattedProjects = projects.map((p) => ({
        name: p.name,
        url: `/portal/project/${p.id}`,
        icon: Frame
    }));

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                {/* Admin Panel link — only for ADMIN users */}
                {user?.role === 'ADMIN' && (
                    <SidebarGroup>
                        <SidebarGroupLabel>Administration</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton
                                        asChild
                                        tooltip="Admin Panel"
                                    >
                                        <Link href="/portal/admin">
                                            <Shield />
                                            <span>Admin Panel</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                )}
                {/* <NavMain items={data.navMain} /> */}
                <NavProjects projects={formattedProjects} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={userData} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
