import { SidebarProvider } from '@/components/ui/sidebar';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Trunal | Portal',
    description:
        "Portal for communication regarding Trunal's products and services."
};

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen text-black">
            <main className="flex-1 ">{children}</main>
        </div>
    );
}
