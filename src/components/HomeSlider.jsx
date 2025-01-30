import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const HomeSlider = () => {
  const slides = [
    {
      id: 1,
      title: "Discover Books",
      description: "Find your next favorite read",
      image: "/images/slide1.jpg",
      color: "from-blue-600 to-indigo-600"
    },
    {
      id: 2,
      title: "Best Sellers",
      description: "Explore top-rated books",
      image: "/images/slide2.jpg",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      title: "New Arrivals",
      description: "Latest additions to our collection",
      image: "/images/slide3.jpg",
      color: "from-green-600 to-teal-600"
    }
  ];

  return (
    <div className="relative h-[500px] w-full">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        className="mySwiper h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="w-[300px] sm:w-[350px] md:w-[400px]">
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-xl">
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-90`}></div>
              <div className="relative z-10 p-8 flex flex-col justify-center h-full text-white">
                <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg mb-6">{slide.description}</p>
                <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 w-fit">
                  Explore
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider; 