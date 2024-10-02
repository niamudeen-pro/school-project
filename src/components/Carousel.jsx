import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function CarouselComponent() {
    const slides = [
        {
            id: 1,
            image: 'https://media.istockphoto.com/id/2075598823/photo/happy-group-of-indian-rural-children-in-school-uniform-standing-looking-at-camera-in-school.jpg?s=2048x2048&w=is&k=20&c=DVHaWJEz_oIz0Rd1j73X0M886-FHjXHAxQ2WoM16NA4=',
            quote: 'Empowering minds, shaping futures.',
        },
        {
            id: 2,
            image: 'https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            quote: 'Inspiring curiosity, igniting potential.',
        },
        {
            id: 3,
            image: 'https://images.pexels.com/photos/3079978/pexels-photo-3079978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            quote: 'Together we learn, together we grow.',
        },
    ];
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 6 * 1000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
        >
            {/* <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 6000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        ></Swiper> */}
            {slides?.length > 0 &&
                slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative bg-primary h-[800px]">
                            <img
                                src={slide?.image}
                                alt="slide"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black opacity-40 z-1"></div>
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4 space-y-3">
                                <h1 className="text-4xl sm:text-7xl font-bold">
                                    Empowering minds, shaping futures.
                                </h1>
                                <p className="text-lg text-white">
                                    <blockquote className="text-lg italic">
                                        " Together we learn, together we grow."
                                    </blockquote>
                                </p>
                                <div className="space-x-6">
                                    <button className="primary_btn">
                                        Apply Now
                                    </button>
                                    <button className="btn">Learn more</button>
                                </div>
                                <div className="absolute bottom-28 left-0 right-0 text-center mb-4">
                                    <div className="flex gap-4 justify-center divide-x-2">
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
                            <div className="absolute top-5 right-5">
                                <a
                                    href="https://facebook.com"
                                    className="text-white mx-2"
                                >
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a
                                    href="https://twitter.com"
                                    className="text-white mx-2"
                                >
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a
                                    href="https://instagram.com"
                                    className="text-white mx-2"
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
}
