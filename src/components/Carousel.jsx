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
        },
        {
            id: 2,
            image: 'https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            id: 3,
            image: 'https://images.pexels.com/photos/3079978/pexels-photo-3079978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
    ];
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {slides?.length > 0 &&
                slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative bg-primary">
                            <img src={slide?.image} alt="slide" />
                        </div>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
}
