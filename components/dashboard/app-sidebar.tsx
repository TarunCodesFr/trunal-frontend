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
    SidebarRail
} from '@/components/ui/sidebar';

type User = {
    email: string;
    username: string;
    role: string;
};

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
    user: User | null;
    projects: any[];
};

// This is sample data.
const data = {
    teams: [
        {
            name: 'Trunal',
            logo: GalleryVerticalEnd,
            plan: 'Dashboard'
        }
    ],
    // ... existing navMain and others remain unchanged or we can keep them static for now
    navMain: [
        {
            title: 'Playground',
            url: '#',
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: 'History',
                    url: '#'
                },
                {
                    title: 'Starred',
                    url: '#'
                },
                {
                    title: 'Settings',
                    url: '#'
                }
            ]
        }
        // ... keeping other items briefly for context, though implementation focuses on projects
    ]
};

export function AppSidebar({ user, projects, ...props }: AppSidebarProps) {
    const userData = {
        name: user?.username || 'Guest',
        email: user?.email || 'guest@example.com',
        avatar: '/avatars/user.jpg'
    };

    // Format projects for the sidebar
    const formattedProjects = projects.map((p) => ({
        name: p.name,
        url: `/portal/project/${p.id}`,
        icon: Frame // Default icon for projects
    }));

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                {/* <NavMain items={data.navMain} /> -- keeping commented as it was */}
                <NavProjects projects={formattedProjects} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={userData} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
