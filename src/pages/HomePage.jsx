import React from 'react';
import HeroSection from '../components/HeroSection';
import FaciilitesSection from './sections/Faciilites';
import AboutUsSection from './sections/About';

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutUsSection />
            <FaciilitesSection />
        </>
    );
}
