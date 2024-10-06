import FaciilitesSection from "./sections/Faciilites";
import AboutUsSection from "./sections/About";
import BannerSection from "./sections/BannerSection";
import NoticeBoard from "../components/NoticeBoard";
import DirectorMessage from "./sections/DirectorMessage";
import SchoolMapLocation from "./sections/SchoolMapLocation";
import SeoContent from "../components/shared/SeoContent";

export default function HomePage() {
    return (
        <>
            <SeoContent />
            <BannerSection />
            <DirectorMessage />
            <NoticeBoard />
            <AboutUsSection />
            <FaciilitesSection />
            <SchoolMapLocation />
        </>
    );
}
