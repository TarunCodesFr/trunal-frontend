import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: {
        default: 'Trunal | Best Digital Marketing Agency in Varanasi & India',
        template: '%s | Trunal'
    },
    description:
        'Trunal is the top-rated digital marketing and web development agency in Varanasi and India. We provide premium SEO, web design, and digital growth services to help your business dominate the online space.',
    keywords: [
        'digital marketing agency Varanasi',
        'best digital agency in Varanasi',
        'web development company India',
        'marketing agency Varanasi',
        'SEO services Varanasi',
        'Trunal',
        'Trunal Varanasi',
        'best marketing agency India',
        'UI/UX design agency India'
    ],
    authors: [{ name: 'Trunal Team', url: 'https://trunal.in' }],
    creator: 'Trunal',
    publisher: 'Trunal',
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    },
    metadataBase: new URL('https://trunal.in'),
    alternates: {
        canonical: '/'
    },
    openGraph: {
        title: 'Trunal | Best Digital Marketing Agency in Varanasi & India',
        description:
            'Leading digital agency in Varanasi providing top-tier web development and marketing solutions.',
        url: 'https://trunal.in',
        siteName: 'Trunal',
        images: [
            {
                url: '/trunal-logo.png',
                width: 1200,
                height: 630,
                alt: 'Trunal Digital Agency'
            }
        ],
        locale: 'en_IN',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Trunal | Best Digital Marketing Agency in Varanasi & India',
        description:
            'Leading digital agency in Varanasi providing top-tier web development and marketing solutions.',
        images: ['/trunal-logo.png']
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
