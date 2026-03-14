import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Best Marketing Agency in Varanasi',
    description: 'Get in touch with Trunal, your partner for digital growth in Varanasi and India. Book a free strategy call today.',
    alternates: {
        canonical: '/contact',
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
