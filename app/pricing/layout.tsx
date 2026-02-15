import { SidebarProvider } from '@/components/ui/sidebar';
import { Metadata } from 'next';
import SmoothScrolling from '../components/flows/SmoothScrolling';

export const metadata: Metadata = {
    title: 'Trunal | Plans',
    description: "Plans for Trunal's products and services."
};

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <SmoothScrolling>
            <div className="flex min-h-screen text-black">
                <main className="flex-1 ">{children}</main>
            </div>
        </SmoothScrolling>
    );
}
