'use client';

import { useEffect, useState, useCallback } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import {
    Plus,
    Users,
    Trash2,
    UserPlus,
    Loader2,
    FolderPlus,
    ChevronDown,
    ChevronRight,
    Search,
    X
} from 'lucide-react';

const API = (
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4001'
).replace(/\/$/, '');

interface Project {
    id: number;
    name: string;
    adminId: number;
    createdAt: string;
}

interface Member {
    id: number;
    userId: number;
    projectId: number;
    joinedAt: string;
    user: {
        user_id: number;
        username: string;
        email: string;
    };
}

interface AppUser {
    user_id: number;
    username: string;
    email: string;
    role: string;
}

function getToken() {
    return localStorage.getItem('token') || '';
}

function authHeaders() {
    return {
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': 'application/json'
    };
}

export default function AdminPage() {
    const { user, loading: authLoading } = useAuth();
    const router = useRouter();

    const [projects, setProjects] = useState<Project[]>([]);
    const [allUsers, setAllUsers] = useState<AppUser[]>([]);
    const [newProjectName, setNewProjectName] = useState('');
    const [creating, setCreating] = useState(false);
    const [expandedProject, setExpandedProject] = useState<number | null>(null);
    const [members, setMembers] = useState<Record<number, Member[]>>({});
    const [loadingMembers, setLoadingMembers] = useState<number | null>(null);
    const [search, setSearch] = useState('');
    const [addingUser, setAddingUser] = useState<number | null>(null);

    // Fetch projects
    const fetchProjects = useCallback(async () => {
        try {
            const res = await fetch(`${API}/api/projects`, {
                headers: authHeaders()
            });
            if (res.ok) setProjects(await res.json());
        } catch (err) {
            console.error(err);
        }
    }, []);

    // Fetch all users
    const fetchUsers = useCallback(async () => {
        try {
            const res = await fetch(`${API}/api/auth/users`, {
                headers: authHeaders()
            });
            if (res.ok) {
                setAllUsers(await res.json());
            } else {
                console.error(
                    'Failed to fetch users:',
                    res.status,
                    await res.text()
                );
            }
        } catch (err) {
            console.error('Failed to fetch users:', err);
        }
    }, []);

    // Fetch members for a project
    const fetchMembers = useCallback(async (projectId: number) => {
        setLoadingMembers(projectId);
        try {
            const res = await fetch(
                `${API}/api/projects/${projectId}/members`,
                { headers: authHeaders() }
            );
            if (res.ok) {
                const data = await res.json();
                setMembers((prev) => ({ ...prev, [projectId]: data }));
            }
        } catch (err) {
            console.error(err);
        }
        setLoadingMembers(null);
    }, []);

    useEffect(() => {
        if (!authLoading && user) {
            if (user.role !== 'ADMIN') {
                router.push('/portal');
                return;
            }
            fetchProjects();
            fetchUsers();
        }
    }, [authLoading, user, router, fetchProjects, fetchUsers]);

    // Create project
    const handleCreateProject = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newProjectName.trim()) return;
        setCreating(true);
        try {
            const res = await fetch(`${API}/api/projects`, {
                method: 'POST',
                headers: authHeaders(),
                body: JSON.stringify({ name: newProjectName.trim() })
            });
            if (res.ok) {
                setNewProjectName('');
                fetchProjects();
            }
        } catch (err) {
            console.error(err);
        }
        setCreating(false);
    };

    // Toggle project expansion
    const toggleProject = (projectId: number) => {
        if (expandedProject === projectId) {
            setExpandedProject(null);
        } else {
            setExpandedProject(projectId);
            fetchMembers(projectId);
        }
    };

    // Add member
    const handleAddMember = async (projectId: number, userId: number) => {
        setAddingUser(userId);
        try {
            const res = await fetch(
                `${API}/api/projects/${projectId}/members`,
                {
                    method: 'POST',
                    headers: authHeaders(),
                    body: JSON.stringify({ userId })
                }
            );
            if (res.ok) {
                fetchMembers(projectId);
            } else {
                const err = await res.json();
                alert(err.error || 'Failed to add member');
            }
        } catch (err) {
            console.error(err);
        }
        setAddingUser(null);
    };

    // Remove member
    const handleRemoveMember = async (projectId: number, userId: number) => {
        try {
            const res = await fetch(
                `${API}/api/projects/${projectId}/members/${userId}`,
                {
                    method: 'DELETE',
                    headers: authHeaders()
                }
            );
            if (res.ok) {
                fetchMembers(projectId);
            } else {
                const err = await res.json();
                alert(err.error || 'Failed to remove member');
            }
        } catch (err) {
            console.error(err);
        }
    };

    // Filter users not already members
    const getAvailableUsers = (projectId: number) => {
        const currentMembers = members[projectId] || [];
        const memberIds = new Set(currentMembers.map((m) => m.user.user_id));
        return allUsers
            .filter((u) => !memberIds.has(u.user_id))
            .filter((u) =>
                search
                    ? u.username.toLowerCase().includes(search.toLowerCase()) ||
                      u.email.toLowerCase().includes(search.toLowerCase())
                    : true
            );
    };

    if (authLoading) {
        return (
            <div className="flex items-center justify-center h-[calc(100vh-6rem)]">
                <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
            </div>
        );
    }

    if (!user || user.role !== 'ADMIN') return null;

    return (
        <div className="flex flex-col gap-6 text-white">
            {/* Page Title */}
            <div className="acrylic-card rounded-xl p-6">
                <h1 className="text-2xl font-bold tracking-wide flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg">
                        <Users size={20} />
                    </div>
                    Admin Panel
                </h1>
                <p className="text-zinc-400 mt-2 text-sm">
                    Create project chats and manage team members.
                </p>
            </div>

            {/* Create Project */}
            <div className="acrylic-card rounded-xl p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <FolderPlus size={18} className="text-emerald-400" />
                    Create New Project
                </h2>
                <form
                    onSubmit={handleCreateProject}
                    className="flex gap-3 items-center"
                >
                    <input
                        type="text"
                        value={newProjectName}
                        onChange={(e) => setNewProjectName(e.target.value)}
                        placeholder="Project name..."
                        className="flex-1 bg-black/30 border border-white/10 rounded-lg py-2.5 px-4 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all text-sm"
                    />
                    <button
                        type="submit"
                        disabled={creating || !newProjectName.trim()}
                        className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        {creating ? (
                            <Loader2 size={16} className="animate-spin" />
                        ) : (
                            <Plus size={16} />
                        )}
                        Create
                    </button>
                </form>
            </div>

            {/* Project List */}
            <div className="acrylic-card rounded-xl p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Users size={18} className="text-blue-400" />
                    Your Projects
                    <span className="text-xs text-zinc-500 ml-auto font-normal">
                        {projects.length} project
                        {projects.length !== 1 ? 's' : ''}
                    </span>
                </h2>

                {projects.length === 0 ? (
                    <p className="text-zinc-500 text-sm py-8 text-center">
                        No projects yet. Create one above to get started.
                    </p>
                ) : (
                    <div className="space-y-3">
                        {projects.map((project) => {
                            const isExpanded = expandedProject === project.id;
                            const projectMembers = members[project.id] || [];
                            const available = getAvailableUsers(project.id);

                            return (
                                <div
                                    key={project.id}
                                    className="border border-white/10 rounded-lg overflow-hidden bg-white/[0.02] transition-all"
                                >
                                    {/* Project Header */}
                                    <button
                                        onClick={() =>
                                            toggleProject(project.id)
                                        }
                                        className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors text-left"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xs font-bold shadow">
                                                {project.name
                                                    .charAt(0)
                                                    .toUpperCase()}
                                            </div>
                                            <div>
                                                <p className="font-medium text-sm">
                                                    {project.name}
                                                </p>
                                                <p className="text-xs text-zinc-500">
                                                    Created{' '}
                                                    {new Date(
                                                        project.createdAt
                                                    ).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-zinc-400">
                                            <span className="text-xs">
                                                {isExpanded
                                                    ? ''
                                                    : 'Manage Members'}
                                            </span>
                                            {isExpanded ? (
                                                <ChevronDown size={16} />
                                            ) : (
                                                <ChevronRight size={16} />
                                            )}
                                        </div>
                                    </button>

                                    {/* Expanded Member Panel */}
                                    {isExpanded && (
                                        <div className="border-t border-white/10 p-4 space-y-4 bg-black/20">
                                            {/* Current Members */}
                                            <div>
                                                <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                                                    Current Members
                                                </h3>
                                                {loadingMembers ===
                                                project.id ? (
                                                    <div className="flex items-center gap-2 py-3 text-zinc-500 text-sm">
                                                        <Loader2
                                                            size={14}
                                                            className="animate-spin"
                                                        />{' '}
                                                        Loading...
                                                    </div>
                                                ) : projectMembers.length ===
                                                  0 ? (
                                                    <p className="text-zinc-500 text-sm py-2">
                                                        No members yet.
                                                    </p>
                                                ) : (
                                                    <div className="space-y-2">
                                                        {projectMembers.map(
                                                            (member) => (
                                                                <div
                                                                    key={
                                                                        member.id
                                                                    }
                                                                    className="flex items-center justify-between py-2 px-3 rounded-md bg-white/[0.03] border border-white/5"
                                                                >
                                                                    <div className="flex items-center gap-3">
                                                                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-[10px] font-bold">
                                                                            {member.user.username
                                                                                .charAt(
                                                                                    0
                                                                                )
                                                                                .toUpperCase()}
                                                                        </div>
                                                                        <div>
                                                                            <p className="text-sm font-medium">
                                                                                {
                                                                                    member
                                                                                        .user
                                                                                        .username
                                                                                }
                                                                            </p>
                                                                            <p className="text-[11px] text-zinc-500">
                                                                                {
                                                                                    member
                                                                                        .user
                                                                                        .email
                                                                                }
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    {member.user
                                                                        .user_id !==
                                                                        project.adminId && (
                                                                        <button
                                                                            onClick={() =>
                                                                                handleRemoveMember(
                                                                                    project.id,
                                                                                    member
                                                                                        .user
                                                                                        .user_id
                                                                                )
                                                                            }
                                                                            className="p-1.5 text-zinc-500 hover:text-red-400 hover:bg-red-500/10 rounded-md transition-colors"
                                                                            title="Remove member"
                                                                        >
                                                                            <Trash2
                                                                                size={
                                                                                    14
                                                                                }
                                                                            />
                                                                        </button>
                                                                    )}
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Add Member */}
                                            <div>
                                                <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                                                    Add Member
                                                </h3>
                                                <div className="relative mb-2">
                                                    <Search
                                                        size={14}
                                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
                                                    />
                                                    <input
                                                        type="text"
                                                        value={search}
                                                        onChange={(e) =>
                                                            setSearch(
                                                                e.target.value
                                                            )
                                                        }
                                                        placeholder="Search users..."
                                                        className="w-full bg-black/30 border border-white/10 rounded-lg py-2 pl-9 pr-8 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                                                    />
                                                    {search && (
                                                        <button
                                                            onClick={() =>
                                                                setSearch('')
                                                            }
                                                            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                                                        >
                                                            <X size={14} />
                                                        </button>
                                                    )}
                                                </div>
                                                <div className="max-h-40 overflow-y-auto custom-scrollbar space-y-1">
                                                    {available.length === 0 ? (
                                                        <p className="text-zinc-500 text-xs py-2 text-center">
                                                            {search
                                                                ? 'No matching users.'
                                                                : 'All users are already members.'}
                                                        </p>
                                                    ) : (
                                                        available.map((u) => (
                                                            <button
                                                                key={u.user_id}
                                                                onClick={() =>
                                                                    handleAddMember(
                                                                        project.id,
                                                                        u.user_id
                                                                    )
                                                                }
                                                                disabled={
                                                                    addingUser ===
                                                                    u.user_id
                                                                }
                                                                className="w-full flex items-center justify-between py-2 px-3 rounded-md hover:bg-white/5 transition-colors text-left group"
                                                            >
                                                                <div className="flex items-center gap-3">
                                                                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-[10px] font-bold">
                                                                        {u.username
                                                                            .charAt(
                                                                                0
                                                                            )
                                                                            .toUpperCase()}
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-sm">
                                                                            {
                                                                                u.username
                                                                            }
                                                                        </p>
                                                                        <p className="text-[11px] text-zinc-500">
                                                                            {
                                                                                u.email
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                                                    {addingUser ===
                                                                    u.user_id ? (
                                                                        <Loader2
                                                                            size={
                                                                                14
                                                                            }
                                                                            className="animate-spin text-indigo-400"
                                                                        />
                                                                    ) : (
                                                                        <UserPlus
                                                                            size={
                                                                                14
                                                                            }
                                                                            className="text-indigo-400"
                                                                        />
                                                                    )}
                                                                </div>
                                                            </button>
                                                        ))
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
