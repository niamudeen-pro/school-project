import FaciilitesSection from './sections/Faciilites';
import AboutUsSection from './sections/About';
import BannerSection from './sections/BannerSection';
import NoticeBoard from '../components/NoticeBoard';
import DirectorMessage from './sections/DirectorMessage';
import SchoolMapLocation from './sections/SchoolMapLocation';

export default function HomePage() {
    return (
        <>
            <BannerSection />
            <AboutUsSection />
            <NoticeBoard />
            <DirectorMessage />
            <FaciilitesSection />
            <SchoolMapLocation />
        </>
    );
}
