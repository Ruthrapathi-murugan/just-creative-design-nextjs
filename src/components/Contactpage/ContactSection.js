'use client';

import { Mail, Phone,MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className=" mx-auto py-8 flex flex-col md:flex-row gap-4 md:gap-16 px-10 pl-" style={{backgroundColor:"white"}}>
      
      {/* Left: Contact Info */}
      <div className="flex-2 flex flex-col gap-4">
      <h2 className="text-black text-[38px] font-sans" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
  Contact Us
</h2>

     
       <p className="text-[18px]" style={{ color: "#4B5768" }}>
          We’d love to hear from you! Whether you’re looking for expert interior design solutions, have a question, or need a consultation, our team is here to help.
        </p>

        <div className="flex items-center gap-2 text-gray-800">
          <Mail size={20} />
          <span className='font-sans font-medium text-[18px] leading-[27px]'>puja.gupta@justcreativedesigns.in</span>
        </div>
        <div className="flex items-center gap-2 text-gray-800">
          <Phone size={20} />
          <span className='font-sans font-medium text-[18px] leading-[27px]'>+91 8884456466</span>
        </div>
        <div className="flex  gap-2 text-gray-800">
          <MapPin size={20} />
         <span className="block w-[260px] font-sans font-medium text-[18px] leading-[27px]">
  2nd Floor, 334, 27th Main Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102
</span>

        </div>
      </div>


      {/* Right: Contact Form */}
      <div className="flex-1 pr-8">
  <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-6 w-full max-w-md">
    <form className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-1 text-sm font-medium text-gray-800">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name"
          className=" text-black border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400 "
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="mobile" className="mb-1 text-sm font-medium text-gray-800">Mobile</label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          placeholder="Enter Mobile"
          className=" text-black border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-800">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          className="text-black border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="address" className="mb-1 text-sm font-medium text-gray-800">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Enter Address"
          className="text-black border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
        />
      </div>

     <button
  type="submit"
  className="mt-4 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition font-semibold"
>
  Book Your Free Consultation Now
</button>

    </form>
  </div>
</div>

    </section>
  );
}
