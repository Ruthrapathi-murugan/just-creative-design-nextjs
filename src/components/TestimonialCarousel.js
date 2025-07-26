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
      swiperInstance.navigation.destroy(); // Important: Re-destroy
      swiperInstance.navigation.init();    // Then re-init
      swiperInstance.navigation.update();  // Update navigation
    }
  }, [swiperInstance]);

  return (
    <>
      <section className="py-16 bg-white text-center relative">
        <h2 className="text-2xl text-left mb-2 px-8 lg:text-[40px] sm:text-[24px]" style={{ color: 'black' }}>
          Trusted by 100+ homeowners just like you
        </h2>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl text-left mb-8 px-8">
          Don’t just take our word for it—hear from the clients whose homes we’ve transformed.
        </p>

        <div className="max-w-3xl mx-auto relative mt-12 p-0">
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            onSwiper={(swiper) => setSwiperInstance(swiper)} // Capture swiper instance
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="relative flex flex-wrap items-center bg-white shadow-lg rounded-xl p-4 sm:p-6">
  {/* Left Arrow */}
  <button
    ref={prevRef}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 rounded-full p-2 hover:bg-gray-300 transition z-10"
  >
    <ChevronLeft />
  </button>

  {/* Right Arrow */}
  <button
    ref={nextRef}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 rounded-full p-2 hover:bg-gray-300 transition z-10"
  >
    <ChevronRight />
  </button>

  {/* Image Section */}
  {/* Image Section */}
<div className="flex flex-col items-center w-1/3 min-w-[150px]">
  <div className="relative w-full aspect-[2/3]">
    <Image
      src={testimonial.image}
      alt={testimonial.name}
      fill
      className="rounded-lg object-cover"
      sizes="(max-width: 768px) 50vw, 300px"
    />
  </div>
  <h4 className="font-medium mt-4 text-black text-center text-sm sm:text-base">
    {testimonial.name}
  </h4>
</div>


  {/* Text Section */}
  <div className="w-1/2 min-w-[180px] p-2 text-left">
    <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg">
  {testimonial.text}
</p>
  </div>
</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="bg-black-900 text-white py-12 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Are you ready to love your home again?
          </h1>
          <p className="text-gray-300 mb-6">
            Your fantasy space is closer than you realize.
            Just Creative Designs begins with a single step—contact us and schedule your free consultation now.
          </p>
          <button
            className="bg-white text-gray-900 font-medium py-2 px-6 rounded hover:bg-black-200 transition"
            style={{ backgroundColor: "white" }}
          >
            Book your Free Consultation
          </button>
        </div>
      </section>
    </>
  );
}
