import { Metadata } from 'next';
import DashboardLayoutWrapper from '@/components/dashboard/dashboard-layout-wrapper';

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
        <div className="flex min-h-screen text-black custom-bg-class">
            <DashboardLayoutWrapper>{children}</DashboardLayoutWrapper>
        </div>
    );
}
