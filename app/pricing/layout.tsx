import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Digital Marketing & Web Development Pricing',
    description: 'Explore Trunal\'s transparent pricing for digital marketing, SEO, and web development services in India. Quality digital growth at competitive rates.',
    alternates: {
        canonical: '/pricing',
    },
};

export default function PricingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
