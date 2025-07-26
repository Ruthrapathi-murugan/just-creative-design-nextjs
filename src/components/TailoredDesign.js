"use client";
import Marquee from "react-fast-marquee";


export default function TailoredDesign() {
  return (
    <>
    <section className="bg-white text-gray-800 px-4 py-10" >
         <h2 className="text-[19px] sm:text-xl md:text-2xl lg:text-[2rem] font-bold sm:font-semibold lg:font-normal mb-2 text-[#222] font-helvetica px-4">
  Tailored Design Solutions For Every Corner Of Your Home
</h2>
 <p className="text-gray-600 text-left text-lg px-4">
          From the first sketch to the final touch, our expert team ensures your vision is brought to life with beautifully-designed,
          functional spaces that you’ll love coming home to every day.
        </p>
      <div className="max-w-5xl mx-auto px-1 py-10" >
     

       

        {/* Image */}
        <div className="mt-10 rounded-md overflow-hidden shadow-md" >
          <img
            src="./slider3.jpg"
            alt="Beautiful interior space"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Specialization bar */}
     
    </section>
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
    </>
  );
}
