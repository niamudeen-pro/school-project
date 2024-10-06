import BANNER_VIDEO from "../../assets/videos/banner-video.mp4";
import useWindowSize from "../../hooks/useWindowSize";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
    {
        id: 1,
        image: "https://media.istockphoto.com/id/2075598823/photo/happy-group-of-indian-rural-children-in-school-uniform-standing-looking-at-camera-in-school.jpg?s=2048x2048&w=is&k=20&c=DVHaWJEz_oIz0Rd1j73X0M886-FHjXHAxQ2WoM16NA4=",
        quote: "Empowering minds, shaping futures.",
    },
    {
        id: 2,
        image: "https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        quote: "Inspiring curiosity, igniting potential.",
    },
    {
        id: 3,
        image: "https://images.pexels.com/photos/3079978/pexels-photo-3079978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        quote: "Together we learn, together we grow.",
    },
];

export default function BannerSection() {
    const windowSize = useWindowSize();
    return (
        <>
            {windowSize?.width > 1440 ? (
                <VideoBanner />
            ) : (
                <ImageCarouselBanner />
            )}
        </>
    );
}

function ImageCarouselBanner() {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
            loop={true}
        >
            {slides?.length > 0 &&
                slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-[500px] bg-primary sm:h-[800px]">
                            <img
                                src={slide?.image}
                                alt="slide"
                                className="object-cover"
                            />
                            <div className="z-1 absolute inset-0 bg-black opacity-40"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 p-4 text-center text-white">
                                <h1 className="text-4xl font-bold sm:text-7xl">
                                    Empowering minds, shaping futures.
                                </h1>

                                <blockquote className="text-sm italic text-white sm:text-lg">
                                    " Together we learn, together we grow."
                                </blockquote>
                                <div className="space-x-6">
                                    <button className="primary_btn">
                                        Apply Now
                                    </button>
                                    <button className="btn">Learn more</button>
                                </div>
                                <div className="absolute bottom-8 left-0 right-0 mb-4 text-center sm:bottom-28">
                                    <div className="flex justify-center gap-4 divide-x-2">
                                        <p className="px-4 hover:text-white">
                                            Qualified Teachers
                                        </p>
                                        <p className="px-4 hover:text-white">
                                            Diverse Programs
                                        </p>
                                        <p className="px-4 hover:text-white">
                                            Modern Facilities
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
}

function VideoBanner() {
    return (
        <div className="relative h-[500px] sm:h-[800px]">
            <div className="relative">
                <video
                    src={BANNER_VIDEO}
                    autoPlay
                    loop
                    muted
                    className="w-full"
                ></video>
                <div className="absolute bottom-[68px] left-0 right-0 z-40 text-center">
                    <div className="flex justify-center gap-4 divide-x-2">
                        <p className="px-4 hover:text-white">
                            Qualified Teachers
                        </p>
                        <p className="px-4 hover:text-white">
                            Diverse Programs
                        </p>
                        <p className="px-4 hover:text-white">
                            Modern Facilities
                        </p>
                    </div>
                </div>
                <div className="z-1 absolute inset-0 bg-black opacity-40"></div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 p-4 text-center text-white">
                <h1 className="text-4xl font-bold sm:text-7xl">
                    Empowering minds, shaping futures.
                </h1>
                <blockquote className="text-sm italic text-white sm:text-lg">
                    " Together we learn, together we grow."
                </blockquote>
                <div className="space-x-6">
                    <button className="primary_btn">Apply Now</button>
                    <button className="btn">Learn more</button>
                </div>
            </div>
        </div>
    );
}
