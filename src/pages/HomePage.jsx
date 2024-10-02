import FaciilitesSection from './sections/Faciilites';
import AboutUsSection from './sections/About';
import BannerSection from './sections/BannerSection';

export default function HomePage() {
    return (
        <>
            <BannerSection />
            <AboutUsSection />
            <FaciilitesSection />
        </>
    );
}
