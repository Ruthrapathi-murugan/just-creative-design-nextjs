'use client';

import Slider from "react-slick";
import Image from "next/image";

// pages/_app.js or component file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const services = [
  {
    title: "Living Room Interior Design",
    image: "/slider1.jpg",
  },
  {
    title: "Modular Kitchen Design & Layout",
    image: "/slider2.jpg",
  },
  {
    title: "Color & Lighting Planning",
    image: "/slider3.jpg",
  },
  {
    title: "Bedroom Interior Design",
    image: "/slider4.jpg",
  },
  {
    title: "Workspace Design",
    image: "/slider4.jpg",
  },
];

export default function Services() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="px-4 py-12 border-t border-gray-300" style={{ backgroundColor: "white"}}>

      <div className="b-8">
<h2 className="text-[19px] sm:text-xl md:text-2xl lg:text-[2.5rem] font-normal mb-2 text-[#222] font-helvetica px-4">
  Service We Offer
</h2>

        <p className="mt-2 lg:text-2xl  text-gray-600 md:text-xl py-2 px-4" style={{fontFamily:"Helvetica Neue",textAlign:"justify"}}>
          We create smart, attractive places that are actually functional for everyday living—
          whether you require additional storage, eye-catching decorations or a smooth flow
          throughout your house.
        </p>
      </div>

      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="py-2 px-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium" style={{color:"black"}}>{service.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
