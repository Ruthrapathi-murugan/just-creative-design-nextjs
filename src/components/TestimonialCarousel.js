'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Savita Belliappa",
    image: "/client1.jpg",
    text: "Exceptional experience with JustCreativeDesigns! From initial consultation to final touches, they exceeded expectations. Professional, creative, and attentive team. Our space transformed beautifully, reflecting our style perfectly. Highly recommended!",
  },
  {
    name: "Amrita & Shanshank",
    image: "/client2.jpg",
    text: "Outstanding service and impeccable taste! From concept to execution, JustCreativeDesigns brought our vision to life with flair and professionalism. Their attention to detail and creative solutions transformed our space into a masterpiece. Highly recommended",
  },
  {
    name: "Anand’s Family",
    image: "/client3.jpg",
    text: "Exceptional interior design company! From concept to execution, they brought our vision to life with professionalism and creativity. Their attention to detail transformed our space into a stunning reflection of our style. Highly recommend it!",
  },
];

export default function TestimonialCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <>
      <section className="py-8 sm:py-12 bg-white text-center relative">
        <h2 className="text-xl sm:text-2xl lg:text-[40px] text-left mb-2 px-4" style={{ color: 'black' }}>
          Trusted by 100+ homeowners just like you
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl text-left mb-6 px-4">
          Don’t just take our word for it—hear from the clients whose homes we’ve transformed.
        </p>

        <div className="max-w-3xl mx-auto relative mt-8 p-0">
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="relative flex flex-wrap items-center bg-white shadow-lg rounded-xl p-4 sm:p-6">
                  {/* Left Arrow */}
                  <button
                    ref={prevRef}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 rounded-full p-1 sm:p-2 hover:bg-gray-300 transition z-10"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  {/* Right Arrow */}
                  <button
                    ref={nextRef}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 rounded-full p-1 sm:p-2 hover:bg-gray-300 transition z-10"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  {/* Image Section */}
                  <div className="flex flex-col items-center w-[40%] sm:w-[30%]  md:w-[30%] lg:w-[45%] min-w-[120px]">
                    <div className="relative w-full aspect-[2/3]">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="rounded-lg object-cover"
                        sizes="(max-width: 768px) 50vw, 300px"
                      />
                    </div>
                    <h4 className="font-medium mt-2 text-black text-xs sm:text-sm md:text-base text-center">
                      {testimonial.name}
                    </h4>
                  </div>

                  {/* Text Section */}
                  <div className="w-[55%] min-w-[150px] p-2 text-left">
                    <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed px-4">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="bg-black text-white py-8 sm:py-12 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Are you ready to love your home again?
          </h1>
          <p className="text-gray-300 text-sm sm:text-base mb-6">
            Your fantasy space is closer than you realize. Just Creative Designs begins with a single step—contact us and schedule your free consultation now.
          </p>
          <button
            className="bg-white text-gray-900 font-medium py-2 px-6 rounded hover:bg-gray-200 transition"
          >
            Book your Free Consultation
          </button>
        </div>
      </section>
    </>
  );
}