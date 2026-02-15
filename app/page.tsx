import Image from 'next/image';
import Navbar from './components/landing/Navbar';
import FlowUtil from './components/flows/FlowUtil';
import HeroSection from './components/landing/HeroSection';
import TrustySection from './components/landing/TrustySection';
import ReviewSection from './components/landing/ReviewSection';
import FooterSection from './components/landing/FooterSection';
import SmoothScrolling from './components/flows/SmoothScrolling';

export default function Home() {
    return (
        <>
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
