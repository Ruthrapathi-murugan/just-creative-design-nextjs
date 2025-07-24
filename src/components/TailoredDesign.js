"use client";
import Marquee from "react-fast-marquee";


export default function TailoredDesign() {
  return (
    <section className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Tailored Design Solutions For Every Corner Of Your Home
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          From the first sketch to the final touch, our expert team ensures your vision is brought to life with beautifully-designed,
          functional spaces that you’ll love coming home to every day.
        </p>

        {/* Image */}
        <div className="mt-10 rounded-md overflow-hidden shadow-md">
          <img
            src="./slider3.jpg"
            alt="Beautiful interior space"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Specialization bar */}
      <div className="bg-black text-white py-6">
      <h2 className="text-center text-4xl font-semibold mb-2">We specialize in</h2>
      
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
          <div className="flex gap-12 text-sm md:text-base px-4" style={{padding: "20px"}}>
          <span>Space Planning &amp; Layout Design</span>
          <span>Color Consultation &amp; Palette Selection</span>
          <span>Furniture &amp; Decor Procurement</span>
          <span>Lighting Design &amp; Installation</span>
          <span>Custom Furniture Design</span>
       </div>
      </Marquee>
       <Marquee gradient={false} speed={60} pauseOnHover={true}>
          <div className="flex gap-12 text-sm md:text-base px-4 ">
          <span>Wall Treatments &amp; Textures</span>
          <span>Art &amp; Decor Curatio</span>
          <span>Modular Kitchen Design</span>
          <span>Wardrobe &amp; Storage Solutions</span>
          <span>Sourcing &amp; Procurement of Materials</span>
       </div>
      </Marquee>
    </div>
    </section>
  );
}
