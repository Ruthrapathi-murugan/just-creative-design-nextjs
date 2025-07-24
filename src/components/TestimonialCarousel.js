'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Optional: Lucide icons for arrows

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

  return (
    <>
    <section className="py-16 bg-white text-center relative">
      <h2 className="text-3xl font-semibold mb-2"  style={{ color: 'black' }}>
        Trusted by 100+ homeowners just like you
      </h2>
      <p className="text-gray-600 mb-8">
        Don’t just take our word for it—hear from the clients whose homes we’ve transformed.
      </p>

      <div className="max-w-4xl mx-auto relative">
        {/* External Navigation Arrows */}
        <button
          ref={prevRef}
          className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 z-10 bg-black-200 hover:bg-black-300 p-2 rounded-full"
         style={{ backgroundColor: 'black' }}>
          <ChevronLeft size={24} />
        </button>
        <button
          ref={nextRef}
          className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 z-10 bg-black-200 hover:bg-gray-300 p-2 rounded-full"
         style={{ backgroundColor: 'black' }}>
          <ChevronRight size={24} />
        </button>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl p-6">
                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-6 text-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={300}
                    height={400}
                    className="rounded-lg object-cover mx-auto"
                  />
                  <h4 className="font-medium mt-4 text-black">{testimonial.name}</h4>
                </div>
                <div className="w-full md:w-1/2 text-left">
                  <p className="text-gray-700">{testimonial.text}</p>
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
        <button className="bg-white text-gray-900 font-medium py-2 px-6 rounded hover:bg-black-200 transition" style={{backgroundColor:"white"}}>
          Book your Free Consultation
        </button>
      </div>
    </section>
  
    </>
    
  );
}
