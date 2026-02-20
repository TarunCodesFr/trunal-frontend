import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Trunal | About us',
    description:
        'Know about us, Trust builds relationships, and we are committed to earning your trust through our dedication to quality, transparency, and customer satisfaction. We believe in open communication and are always here to address any questions or concerns you may have.'
};

export default function AboutLayout({
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
