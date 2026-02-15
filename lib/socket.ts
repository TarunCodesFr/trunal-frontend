import { io, Socket } from 'socket.io-client';

const URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4001';

export const socket: Socket = io(URL, {
    autoConnect: false,
    auth: {
        token: '' // Will be set dynamically
    } // Credentials will be set later
});
