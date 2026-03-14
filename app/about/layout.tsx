import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Our Digital Agency in Varanasi',
    description: 'Learn about Trunal, the premier digital marketing and web development agency in Varanasi. We are dedicated to providing high-quality digital solutions across India.',
    alternates: {
        canonical: '/about',
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
