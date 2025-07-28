import React from 'react';

export default function WardrobeComponent() {
  return (
    <>
    <div
      className="relative mx-auto w-full max-w-[1440px] aspect-[1440/822] shadow-lg"
      style={{
        transform: 'rotate(0deg)',
        opacity: 1,
        backgroundImage: 'url("/after1.jpg")',  // Ensure image is in /public
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
   
     
    <section className=" mx-auto px-4 py-12 bg-white text-black font-helvetica ">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4 px-4">
        Wardrobe Design Bangalore – Smart, Stylish, and Fully Customized
      </h2>
      
      <p className="text[24px]-base md:text-lg mb-4 px-4">
        <strong>Moving into a new home or looking to design your space?</strong>{' '}
        <span className="text-gray-600">
          Just Creative Designs offers personalized wardrobe designs in Bangalore that fit your lifestyle and storage needs.
          Our solutions, which include modular wardrobe designs and sleek sliding wardrobes, are designed to maintain your space's functionality, style, and organization.
        </span>
      </p>

      <ul className=" text[24px]-base list-disc list-inside text-gray-600 mb-6 md:text-lg px-4 ">
        <li>
        Our team specializes in wardrobe interior design in Bangalore and can help you make the most of every available space,
          whether you have a small bedroom or a large walk-in closet. Say goodbye to the mess and embrace a wardrobe that works for you.
        </li>
      </ul>

      <button className="bg-black text-white text-sm px-4 py-2 rounded hover:bg-gray-800 transition">
        Free Consultation Call
      </button>
    </section>

    </>
  );
}
