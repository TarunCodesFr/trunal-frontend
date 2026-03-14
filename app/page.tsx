import Image from 'next/image';
import Navbar from './components/landing/Navbar';
import HeroSection from './components/landing/HeroSection';
import TrustySection from './components/landing/TrustySection';
import ReviewSection from './components/landing/ReviewSection';
import FooterSection from './components/landing/FooterSection';
import SmoothScrolling from './components/flows/SmoothScrolling';

export default function Home() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': 'Trunal',
        'image': 'https://trunal.com/trunal-logo.png',
        '@id': 'https://trunal.com',
        'url': 'https://trunal.com',
        'telephone': '+91-XXXXXXXXXX',
        'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Varanasi',
            'addressLocality': 'Varanasi',
            'addressRegion': 'Uttar Pradesh',
            'postalCode': '221001',
            'addressCountry': 'IN'
        },
        'geo': {
            '@type': 'GeoCoordinates',
            'latitude': 25.3176,
            'longitude': 82.9739
        },
        'openingHoursSpecification': {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            'opens': '00:00',
            'closes': '23:59'
        },
        'sameAs': [
            'https://www.linkedin.com/company/trunal',
            'https://www.instagram.com/trunal'
        ],
        'description': 'Best digital marketing and web development agency in Varanasi and India.'
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <SmoothScrolling>
                <Navbar />
                <HeroSection />
                <TrustySection />
                <ReviewSection />
                <FooterSection />
            </SmoothScrolling>
        </>
    );
}
