'use client';

import { useEffect, useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import { socket } from '@/lib/socket';
import { useAuth } from '@/hooks/use-auth';
import { Send, Loader2 } from 'lucide-react';

interface Message {
    id: number;
    content: string;
    senderId: number;
    projectId: number;
    createdAt: string;
    sender: {
        username: string;
    };
}

export default function ProjectChatPage() {
    const params = useParams();
    const projectId = Number(params.id);
    const { user, loading: authLoading } = useAuth();
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Scroll to bottom helper
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // 1. Fetch initial messages
    useEffect(() => {
        if (!projectId) return;

        const fetchMessages = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await fetch(
                    `${(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4001').replace(/\/$/, '')}/api/projects/${projectId}/messages`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                if (res.ok) {
                    const data = await res.json();
                    setMessages(data);
                }
            } catch (err) {
                console.error('Failed to load messages', err);
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, [projectId]);

    // 2. Socket.IO Connection & Events
    useEffect(() => {
        if (!user || !projectId) return;

        const token = localStorage.getItem('token');
        if (token) {
            console.log(
                'Connecting to socket with token:',
                token.substring(0, 10) + '...'
            );
            socket.auth = { token };
            socket.disconnect(); // Ensure clean state
            socket.connect();
        }

        const onConnect = () => {
            console.log('Socket Connected!', socket.id);
            socket.emit('join_project', { projectId });
        };

        const onConnectError = (err: Error) => {
            console.error('Socket Connection Error:', err.message);
            alert(`Connection Error: ${err.message}`);
        };

        socket.on('connect', onConnect);
        socket.on('connect_error', onConnectError);

        socket.on('new_message', (message: Message) => {
            console.log('Received new message:', message);
            // Only add if it belongs to this project
            if (message.projectId === projectId) {
                setMessages((prev) => [...prev, message]);
                // Scroll to bottom on new message
                setTimeout(scrollToBottom, 100);
            }
        });

        socket.on('error_message', (err: string) => {
            console.error('Socket Server Error:', err);
            alert(err);
        });

        return () => {
            console.log('Cleaning up socket listeners');
            socket.off('connect', onConnect);
            socket.off('connect_error', onConnectError);
            socket.off('new_message');
            socket.off('error_message');
            socket.disconnect();
        };
    }, [projectId, user]);

    // Scroll to bottom on load
    useEffect(() => {
        if (!loading) {
            scrollToBottom();
        }
    }, [messages, loading]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim() || !user) return;

        // Optimistic update? No, let's wait for server broadcast to keep it simple and consistent.
        // Actually, Socket.IO usually broadcasts to everyone including sender unless we use `socket.broadcast.emit`.
        // My server uses `io.to().emit()`, so sender WILL receive it back. Perfect.

        socket.emit('send_message', {
            projectId,
            content: newMessage
        });

        setNewMessage('');
    };

    if (authLoading || loading) {
        return (
            <div className="flex h-screen items-center justify-center bg-gray-100">
                <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
            </div>
        );
    }

    if (!user) {
        return <div className="p-10">Please log in to view this chat.</div>;
    }

    return (
        <div className="flex flex-col h-[calc(100vh-6rem)] rounded-xl acrylic-card overflow-hidden text-white">
            {/* Project Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between backdrop-blur-md bg-white/5">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">
                        P{projectId}
                    </div>
                    <div>
                        <h1 className="font-semibold text-lg tracking-wide">
                            Project Chat
                        </h1>
                        {/* <p className="text-xs text-zinc-400 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Online
                        </p> */}
                    </div>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-black/20">
                {messages.map((msg, index) => {
                    const isMe = msg.senderId === user.user_id;
                    return (
                        <div
                            key={msg.id || index}
                            className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[75%] rounded-2xl p-4 text-sm relative backdrop-blur-sm border shadow-xl ${
                                    isMe
                                        ? 'bg-blue-600/20 border-blue-500/30 text-white rounded-tr-sm'
                                        : 'bg-zinc-800/40 border-white/10 text-zinc-100 rounded-tl-sm'
                                }`}
                            >
                                {!isMe && (
                                    <p className="text-xs font-bold text-blue-400 mb-1 opacity-90">
                                        {msg.sender.username}
                                    </p>
                                )}
                                <p className="leading-relaxed tracking-wide">
                                    {msg.content}
                                </p>
                                <span className="text-[10px] text-white/50 block text-right mt-2 font-mono">
                                    {new Date(msg.createdAt).toLocaleTimeString(
                                        [],
                                        { hour: '2-digit', minute: '2-digit' }
                                    )}
                                </span>
                            </div>
                        </div>
                    );
                })}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-white/5 backdrop-blur-md">
                <form
                    onSubmit={handleSendMessage}
                    className="flex gap-3 items-center"
                >
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 bg-black/20 border border-white/10 rounded-full py-3 px-6 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                    />
                    <button
                        type="submit"
                        disabled={!newMessage.trim()}
                        className="p-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
                    >
                        <Send size={20} />
                    </button>
                </form>
            </div>
        </div>
    );
}
