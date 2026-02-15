import { Metadata } from 'next';
import SmoothScrolling from '../components/flows/SmoothScrolling';

export const metadata: Metadata = {
    title: 'Trunal | Terms and Conditions',
    description: "Terms and conditions for Trunal's digital services."
};

export default function TermsLayout({
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
